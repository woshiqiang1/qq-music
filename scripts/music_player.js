import {LyricsPlayer} from './lyrics_player'
import {ProgressBar} from './progress_bar'
import {songUrl, albumCoverUrl, lyricsUrl} from './helpers'

export class MusicPlayer {
    constructor(el) {
        this.$el = el
        this.$el.addEventListener('click', this)
        this.$audio = this.createAudio()
        this.lyrics = new LyricsPlayer(this.$el.querySelector('.player-lyrics .lyrics-wrap'), this.$audio)
        this.progress = new ProgressBar(this.$el.querySelector('.progress'), 180, true)
    }

    createAudio() {
        let audio = document.createElement('audio')
        audio.id = `player-${Math.floor(Math.random() * 100)}-${+new Date()}` //加一个id
        audio.addEventListener('ended', () => {
            this.$audio.play()
            this.lyrics.restart()
            this.progress.start()
        })
        document.body.appendChild(audio)
        return audio
    }

    handleEvent(event) {
        let target = event.target
        switch (true) {
            case target.matches('.icon-play'):
                this.onPlay(event)
                break
            case target.matches('.icon-pause'):
                this.onPause(event)
                break
            case target.matches('.icon-list'):
                this.hide()
                break
        }
    }

    onPlay(event) {
        this.$audio.play()
        event.target.classList.add('icon-pause')
        event.target.classList.remove('icon-play')
        this.progress.start()
        this.lyrics.start()

    }

    onPause(event) {
        this.$audio.pause()
        event.target.classList.add('icon-play')
        event.target.classList.remove('icon-pause')
        this.progress.pause()
        this.lyrics.pause()
    }


    play(options) {
        if (!options) return
        if(this.$el.querySelector('.icon-pause')){
            console.log(1)
            this.$el.querySelector('.icon-action').classList.add('icon-play')
            this.$el.querySelector('.icon-action').classList.remove('icon-pause')
        }

        this.$el.querySelector('.song-name').innerText = options.songname
        this.$el.querySelector('.song-artist').innerText = options.artist
        this.progress.reset(options.duration)

        let url = albumCoverUrl(options.albummid)
        this.$el.querySelector('.album-cover').src = url
        this.$el.querySelector('.player-background').style.backgroundImage = `url(${url})`

        if (options.songid) {
            this.songid = options.songid
            this.$audio.src = songUrl(this.songid)
            fetch(lyricsUrl(this.songid))
                .then(res => res.json())
                .then(json => json.lyric)
                .then(text => this.lyrics.reset(text))
                .catch(() => {
                })
        }
        this.show()
    }

    show() {
        this.$el.classList.add('show')
    }

    hide() {
        this.$el.classList.remove('show')
        document.body.classList.remove('noscroll')
    }


}