class LyricsPlayer {
    constructor(el) {
        this.$el = el;
        this.$el.innerHTML = `<div class="player-lyrics-lines"></div>`
        this.$lines = this.$el.querySelector('.player-lyrics-lines')
        this.LINE_HEIGHT = 42
        this.index = 0
        this.lyrics = []
        this.elapsed = 0
        this.reset(this.text)
        this.start()
    }

    start() {
        this.intervalId = setInterval(this.update.bind(this), 1000)
    }

    pause() {
        clearInterval(this.intervalId)
    }

    restart(){
        this.index = 0
        this.start()
    }

    update() {
        this.elapsed += 1
        if (this.index === this.lyrics.length - 1) return this.reset()
        for (let i = this.index + 1; i < this.lyrics.length; i++) {
            let seconds = this.getSeconds(this.lyrics[i])
            if (this.elapsed === seconds &&
                (!this.elapsed[i + 1] || this.elapsed < this.getSeconds(this.lyrics[i + 1]))) {
                this.$lines.children[this.index].classList.remove('active')
                this.$lines.children[i].classList.add('active')
                this.index = i
                break
            }
        }
        if (this.index > 2) {
            let y = -(this.index - 2) * this.LINE_HEIGHT
            //console.log(y)
            this.$lines.style.transform = `translateY(${y}px)`
        }
    }

    render() {
        let html = this.lyrics.map(line => `
        <p class="player-lyrics-line ellipsis">${line.slice(10)}</p>
        `).join('')
        this.$lines.innerHTML = html
    }

    reset(text) {
        this.pause()
        if (text) {
            this.text = this.formatText(text) || ''
            this.lyrics = this.text.match(/^\[\d{2}:\d{2}.\d{2}\](.+)$/gm) || []//g为全局，m为多行匹配
            if (this.lyrics.length) {
                this.render()
                this.$lines.children[this.index].classList.add('active')
            }
        }
    }

    formatText(text) {
        let div = document.createElement('div')
        div.innerHTML = text
        return div.innerText
    }

    getSeconds(line) {
        return +line.replace(/^\[(\d{2}):(\d{2}).*/, (match, p1, p2) => 60 * (+p1) + (+p2))
    }


}

