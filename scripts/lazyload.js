function lazyload(images) {
    let imgs = [].slice.call(images) //Array.from(images)
    if('IntersectionObserver' in window){
        let observer = new IntersectionObserver(function(entries){
            entries.forEach(entry => {
                if(entry.intersectionRatio > 0){
                    loadImage(entry.target, () => {
                        observer.unobserve(entry.target)
                    })
                }//else(console.log('我不在视口中'))
            })
        },{ threshold: 0.01})
        imgs.forEach(img => observer.observe(img))
    }else{
        let onscroll = throttle(function () {
            if (imgs.length === 0) {
                return window.removeEventListener('scroll', onscroll)
            }
            console.log(1)
            imgs = imgs.filter(img => img.classList.contains('lazyload'))
            imgs.forEach(img => {
                if (inViewport(img)) {
                    loadImage(img)
                }
            })
        }, 300)

        window.addEventListener('scroll', onscroll) //注意函数表达式没有提升，要声明onscroll后再调用
        window.dispatchEvent(new Event('scroll')) //自己触发一次滚动事件，让视窗可见的图片加载。
    }






    function inViewport(img) {
        let {top, left, right, bottom} = img.getBoundingClientRect()
        let vpWidth = document.documentElement.clientWidth
        let vpHeight = document.documentElement.clientHeight
        return (
            (top > 0 && top < vpHeight || bottom > 0 && bottom < vpHeight) &&
            (left > 0 && left < vpWidth || right > 0 && right < vpWidth))

    }

    function loadImage(img) {
        img.src = img.dataset.src
    }
}

function throttle(func, wait) {
    let prev, timer
    return function fn() {
        let curr = Date.now()
        let diff = curr - prev
        if (!prev || diff >= wait) {
            func()
            prev = curr
        } else if (diff < wait) {
            clearTimeout(timer)
            timer = setTimeout(fn, wait - diff)
        }
    }
}

