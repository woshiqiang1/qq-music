// document.addEventListener('click',(e)=>{
//     if (e.target.getAttribute('data-role') !== 'tab') return
//     let target = e.target;
//     [].forEach.call(target.parentElement.children,(item)=> item.classList.remove('active'))
//     target.classList.add('active')
//     let targetContent = document.querySelector(target.dataset.view);
//     [].forEach.call(targetContent.parentElement.children,(item)=>item.classList.add('hide'))
//     targetContent.classList.remove('hide')
// })

document.addEventListener('click', function(event) {

    let target = event.target

    if (target.dataset.role !== 'tab') return

    [].forEach.call(target.parentElement.children, tab => {
        tab.classList.remove('active')
    })
    target.classList.add('active')

    let content = document.querySelector(target.dataset.view)

    if (content) {
        [].forEach.call(content.parentElement.children, child => {
            child.style.display = 'none'
        })
        content.style.display = 'block'
    }

})

