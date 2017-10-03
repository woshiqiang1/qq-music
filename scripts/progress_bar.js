class ProgressBar {
    constructor(el, duration, start) {
        this.$el = el
        this.elapsed = 0
        this.duration = duration || 0
        this.progress = 0
        this.render()//把进度条渲染进去
        this.$progress = this.$el.querySelector('.progress-bar-progress')
        this.$elapsed = this.$el.querySelector('.progress-elapsed')
        this.$duration = this.$el.querySelector('.progress-duration')
        this.$elapsed.innerText = this.formatTime(this.elapsed)
        this.$duration.innerText = this.formatTime(this.duration)
        if (start) this.start()
    }

    start() {
        this.intervalId = setInterval(this.update.bind(this), 50)
    }

    pause() {
        clearInterval(this.intervalId)
    }

    update() {
        this.elapsed += 0.05
        if (this.elapsed >= this.duration) this.reset()
        this.progress = this.elapsed / this.duration
        this.$progress.style.transform = `translate(${this.progress * 100 - 100}%)`
        this.$elapsed.innerText = this.formatTime(this.elapsed)
    }

    reset(duration) {
        this.pause()
        this.elapsed = 0
        this.progress = 0
        if (duration) {
            this.duration = +duration
            this.$duration.innerText = this.formatTime(this.duration)
        }
    }

    restart(){
        this.reset()
        this.start()
    }

    render() {
        this.$el.innerHTML = `
         <div class="progress-time progress-elapsed"></div>
          <div class="progress-bar">
            <div class="progress-bar-progress"></div>
          </div>
         <div class="progress-time progress-duration"></div>
      `
    }


    formatTime(time) {
        let minute = time / 60 >= 10 ? `${Math.floor(time / 60)}` : `0${Math.floor(time / 60)}`
        let second = time % 60 >= 10 ? `${Math.floor(time % 60)}` : `0${Math.floor(time % 60)}`
        return `${minute}:${second}`
    }
}