import {searchUrl} from './helpers.js'
export class Search {
    constructor(el) {
        this.$el = el
        this.$input = this.$el.querySelector('#search')
        this.$input.addEventListener('keyup', this.onKeyUp.bind(this))
        this.$songs = this.$el.querySelector('.song-list')
        this.keyword = ''
        this.page = 1
        this.songs = {}
        this.perpage = 20
        this.fetching = false
        this.onscroll = this.onScroll.bind(this)
        window.addEventListener('scroll',this.onscroll)
    }

    onKeyUp(event) {
        let keyword = event.target.value.trim()//去除两头的空格
        if(!keyword) return this.reset()
        if (event.keyCode !== 13) return //安卓浏览器没有key，只能用keyCode
        this.search(keyword)
    }

    onScroll(event){
        if(this.nomore) {
            return  window.removeEventListener('scroll', this.onscroll)
        }
        if(document.documentElement.clientHeight + pageYOffset >= document.body.scrollHeight - 50){
            this.search(this.keyword,this.page + 1)
        }
    }

    reset(){
        this.page = 1
        this.keyword = ''
        this.songs = {}
        this.nomore = false
        this.$songs.innerHTML = ''
        this.$el.querySelector('.search-loading').classList.remove('show')
    }

    search(keyword,page) {
        if(this.keyword === keyword && this.songs[page || this.page]) return
        if(this.nomore || this.fetching) return
        if(this.keyword !== keyword) this.reset()
        this.keyword = keyword
        this.loading()//loading中fetching设为true
        fetch(searchUrl(this.keyword, page || this.page))
            .then(res => res.json())
            .then(json => {
                this.page = json.data.song.curpage
                this.nomore = (json.message === 'no results')
                this.songs[this.page] = json.data.song.list
                return json.data.song.list
            })
            .then(songs => this.append(songs))
            .then(() => this.done())//done中fetching设为false
            .catch(() => this.fetching = false)
    }

    append(songs){
        let html = songs.map(song => {
            let artist = song.singer.map(s => s.name).join(' ')
            return `<a class="song-item" 
        href="#player?artist=${artist}&songid=${song.songid}&songname=${song.songname}&albummid=${song.albummid}&duration=${song.interval}">
      <i class="icon icon-music"></i>
      <h6 class="song-name ellipsis">${song.songname}</h6>
    <p class="song-artist ellipsis">${song.singer.map(s => s.name).join(' ')}</p>
    </a>`}).join('')
        this.$songs.insertAdjacentHTML('beforeend', html)
    }

    loading(){
        this.fetching = true
        this.$el.querySelector('.search-loading').classList.add('show')
    }

    done(){
        this.fetching = false
        if(this.nomore){
            console.log('end')
            this.$el.querySelector('.loading-icon').classList.add('hide')
            this.$el.querySelector('.loading-text').classList.add('hide')
            this.$el.querySelector('.loading-done').classList.add('show')
            this.$el.querySelector('.search-loading').classList.add('show')
        }else{
            this.$el.querySelector('.search-loading').classList.remove('show')
        }
    }


}