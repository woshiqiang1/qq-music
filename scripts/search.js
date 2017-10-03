class Search {
    constructor(el) {
        this.$el = el
        this.$input = this.$el.querySelector('#search')
        this.$input.addEventListener('keyup', this.onKeyUp.bind(this))
        this.$songs = this.$el.querySelector('.song-list')
        this.keyword = ''
        this.page = 1
        this.songs = []
        this.perpage = 20
        this.fetching = false
        this.onscroll = this.onScroll.bind(this)
        window.addEventListener('scroll',this.onscroll)
    }

    onKeyUp(event) {
        let keyword = event.target.value.trim()//去除两头的空格
        if(!keyword) return this.reset()
        if (event.key != 'Enter') return
        this.search(keyword)
    }

    onScroll(event){
        if(this.nomore) {
            this.done()
            return
        }
        if(document.documentElement.clientHeight + pageYOffset >= document.body.scrollHeight - 50){
            this.search(this.keyword,this.page + 1)
        }
    }

    reset(){
        this.page = 1
        this.keyword = ''
        this.song = []
        this.$songs.innerHTML = ''
    }

    search(keyword,page) {
        if(this.fetching) return
        this.keyword = keyword
        this.fetching = true
        this.loading()
        fetch(`http://localhost:4000/search?keyword=${this.keyword}&page=${page ||this.page}`)
            .then(res => res.json())
            .then(json => {
                this.page = json.data.song.curpage
                this.nomore = (json.message === 'no results')
                this.songs.push(...json.data.song.list)//rest ES6数组展开，也可以用apply传数组参数
                return json.data.song.list
            })
            .then(songs => this.append(songs))
            .then(this.fetching = false)
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
        console.log(111)
        this.fetching = true
        this.$el.querySelector('.search-loading').classList.remove('hide')
    }

    done(){
        this.fetching = false
        if(this.nomore){
            this.$el.querySelector('.loading-icon').style.display = 'none'
            this.$el.querySelector('.loading-text').style.display = 'none'
            this.$el.querySelector('.loading-done').style.display = 'block'
            this.$el.querySelector('.search-loading').classList.remove('hide')
        }else{
            this.$el.querySelector('.search-loading').classList.add('hide')
        }
    }


}