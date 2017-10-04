 export class Slider{
    constructor(options = {}){
        this.$el = options.el
        this.slides = options.slides
        this.interval = options.interval || 3000
        this.index = 0
        this.render()
        this.start()
    }

    render(){
        this.$el.innerHTML = `<ul class="qq-slider-wrap"></ul>`
        this.$wrap = this.$el.firstElementChild
        this.$wrap.style.width = `${this.slides.length * 100}%`
        this.$wrap.innerHTML = this.slides.map((item, i)=>
            `<li class="qq-slider-item">
          <a href=${item.link}>
            <img src=${item.image} alt="">
          </a>
        </li>`
        ).join('')
    }

    start(){
        setInterval(this.next.bind(this),this.interval)
    }

    next(){
        this.index += 1
        if(this.index === this.slides.length){
            this.$wrap.style.transform = `translate(0)`
            this.index = 0
            return
        }
        let x = `-${this.index * 100 / this.slides.length}%`
        this.$wrap.style.transform = `translate(${x})`
    }
}