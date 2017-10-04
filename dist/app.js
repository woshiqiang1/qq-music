/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const RECOMMEND_URL = 'https://qq-music-api.now.sh'
/* harmony export (immutable) */ __webpack_exports__["b"] = RECOMMEND_URL;
 //https://qq-music-api.now.sh'
const TOPLIST_URL = 'https://qq-music-api.now.sh/top'
/* harmony export (immutable) */ __webpack_exports__["d"] = TOPLIST_URL;

const SEARCH_URL = 'https://qq-music-api.now.sh/search'
/* harmony export (immutable) */ __webpack_exports__["c"] = SEARCH_URL;

const LYRICS_URL = 'https://qq-music-api.now.sh/lyrics'
/* harmony export (immutable) */ __webpack_exports__["a"] = LYRICS_URL;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = lazyload;
function lazyload(images) {
    let imgs = [].slice.call(images || document.querySelectorAll('.lazyload')) //Array.from(images)
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



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = lyricsUrl;
/* harmony export (immutable) */ __webpack_exports__["d"] = songUrl;
/* harmony export (immutable) */ __webpack_exports__["a"] = albumCoverUrl;
/* harmony export (immutable) */ __webpack_exports__["c"] = searchUrl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant_js__ = __webpack_require__(0);


//获取歌词的url
function lyricsUrl(songid) {
    return `${__WEBPACK_IMPORTED_MODULE_0__constant_js__["a" /* LYRICS_URL */]}?id=${songid}`
}
//获取歌曲的url
function songUrl(songid) {
    return `http://ws.stream.qqmusic.qq.com/${songid}.m4a?fromtag=46`
}
//获取封面图片的url
function albumCoverUrl(albummid){
    return `https://y.gtimg.cn/music/photo_new/T002R150x150M000${albummid}.jpg`
}
//搜索的url
function searchUrl(keyword, page = 1) {
    return `${__WEBPACK_IMPORTED_MODULE_0__constant_js__["c" /* SEARCH_URL */]}?keyword=${keyword}&page=${page ||this.page}`
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tab__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tab___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tab__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recommend__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toplist_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__music_player__ = __webpack_require__(9);







let recommend = new __WEBPACK_IMPORTED_MODULE_1__recommend__["a" /* Recommend */](document.querySelector('.rec-view')).launch()
let topList = new __WEBPACK_IMPORTED_MODULE_2__toplist_js__["a" /* TopList */](document.querySelector('.rank-view')).launch()
let search = new __WEBPACK_IMPORTED_MODULE_3__search__["a" /* Search */](document.querySelector('.search-view '))
let player = new __WEBPACK_IMPORTED_MODULE_4__music_player__["a" /* MusicPlayer */](document.querySelector('#player'))

//给播放器按键绑定事件
let playerPull = document.querySelector('#header .player-pull')
playerPull.addEventListener('click', (event) => {
    document.querySelector('#player').classList.add('show')
    document.body.classList.add('noscroll')
})

onHashChange()//页面刷新立即读入参数
window.addEventListener('hashchange', onHashChange)


function onHashChange() {
    document.body.scrollTop = 0
    document.body.classList.add('noscroll')
    let hash = location.hash
    if (/^#player\?.+/.test(hash)) {
        let matches = hash.slice(hash.indexOf('?') + 1).match(/(\w+)=([^&]+)/g)
        let options = matches && matches.reduce((res, cur) => {
            let arr = cur.split('=')
            res[arr[0]] = arr[1]
            return res
        }, {})
        player.play(options)
    } else {
        player.hide()
    }
}












/***/ }),
/* 4 */
/***/ (function(module, exports) {

document.addEventListener('click',(e)=>{
    if (e.target.getAttribute('data-role') !== 'tab') return
    let target = e.target;
    [].forEach.call(target.parentElement.children,(item)=> item.classList.remove('active'))
    target.classList.add('active')
    let targetContent = document.querySelector(target.dataset.view);
    [].forEach.call(targetContent.parentElement.children,(item)=>item.classList.add('hide'))
    targetContent.classList.remove('hide')
})

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lazyload__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slider__ = __webpack_require__(6);



class Recommend{
    constructor(el){
        this.$el = el
    }

    launch(){
        fetch(__WEBPACK_IMPORTED_MODULE_0__constant__["b" /* RECOMMEND_URL */])//./json/rec.json本地数据
            .then(res => res.json())
            .then(json => this.render(json))
        return this//保存实例
    }

    render(json){
        this.renderSlider(json.data.slider)
        this.renderRadios(json.data.radioList)
        this.renderPlaylists(json.data.songList)
        Object(__WEBPACK_IMPORTED_MODULE_1__lazyload__["a" /* lazyload */])()
    }

    renderSlider(slides) {
        new __WEBPACK_IMPORTED_MODULE_2__slider__["a" /* Slider */]({
            el: document.querySelector('#slider'),
            slides: slides.map(slide => {
                return {link: slide.linkUrl, image: slide.picUrl.replace('http://', 'https://')}//把http换成https放在github警告
            })
        })
    }

    renderRadios(radios) {
        document.querySelector('.radios .list').innerHTML = radios.map(radio =>
            `<div class="list-item">
            <div class="list-media">
              <img class="lazyload" data-src="${radio.picUrl}" alt="">
              <span class="icon icon_play"></span>
            </div>
            <div class="list-title">${radio.Ftitle}</div>
          </div>`).join('')
    }
    renderPlaylists(playlists) {
        document.querySelector('.playlists .list').innerHTML = playlists.map(list =>
            `<div class="list-item">
            <div class="list-media">
              <img class="lazyload" data-src="${list.picUrl}">
              <span class="icon icon_play"></span>
            </div>
            <div class="list-title">${list.songListDesc}</div>
          </div>`).join('')
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Recommend;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
 class Slider{
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Slider;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lazyload__ = __webpack_require__(1);



class TopList {
    constructor(el) {
        this.$el = el
    }

    launch() {
        fetch(__WEBPACK_IMPORTED_MODULE_0__constant__["d" /* TOPLIST_URL */])//./json/rank.json本地数据
            .then(res => res.json())
            .then(json => this.renderTopList(json.data.topList))
        return this
    }

    renderTopList(list) {
        this.$el.querySelector('.rank-view .toplist').innerHTML = list.map(item =>
            `<li class="top-item">
          <div class="top-item-media">
            <a href="#">
              <img class="lazyload" data-src="${item.picUrl}">
            </a>
          </div>
          <div class="top-item-info">
            <h3 class="top-item-title ellipsis">${item.topTitle}</h3>
            <ul class="top-item-list">
             ${this.renderSonglist(item.songList)}
            </ul>
          </div>
        </li>`).join('')

        Object(__WEBPACK_IMPORTED_MODULE_1__lazyload__["a" /* lazyload */])(this.$el.querySelectorAll('.lazyload'))//应为异步需要把lazyload写在里面

    }

    renderSonglist(songs) {
        return songs.map((song, i) =>
            `<li class="top-item-song ellipsis">
                <i class="song-index">${i + 1}</i>
                <span class="song-name">${song.songname}</span>- ${song.singername}
              </li>`).join('')
    }


}
/* harmony export (immutable) */ __webpack_exports__["a"] = TopList;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(2);

class Search {
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
        fetch(Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["c" /* searchUrl */])(this.keyword, page || this.page))
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Search;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lyrics_player__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progress_bar__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers__ = __webpack_require__(2);




class MusicPlayer {
    constructor(el) {
        this.$el = el
        this.$el.addEventListener('click', this)
        this.$audio = this.createAudio()
        this.lyrics = new __WEBPACK_IMPORTED_MODULE_0__lyrics_player__["a" /* LyricsPlayer */](this.$el.querySelector('.player-lyrics .lyrics-wrap'), this.$audio)
        this.progress = new __WEBPACK_IMPORTED_MODULE_1__progress_bar__["a" /* ProgressBar */](this.$el.querySelector('.progress'), 180, true)
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

        let url = Object(__WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* albumCoverUrl */])(options.albummid)
        this.$el.querySelector('.album-cover').src = url
        this.$el.querySelector('.player-background').style.backgroundImage = `url(${url})`

        if (options.songid) {
            this.songid = options.songid
            this.$audio.src = Object(__WEBPACK_IMPORTED_MODULE_2__helpers__["d" /* songUrl */])(this.songid)
            fetch(Object(__WEBPACK_IMPORTED_MODULE_2__helpers__["b" /* lyricsUrl */])(this.songid))
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
/* harmony export (immutable) */ __webpack_exports__["a"] = MusicPlayer;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class LyricsPlayer {
    constructor(el,audio) {
        this.$el = el;
        this.$el.innerHTML = `<div class="player-lyrics-lines"></div>`
        this.$lines = this.$el.querySelector('.player-lyrics-lines')
        this.LINE_HEIGHT = 42
        this.index = 0
        this.$audio = audio
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
        this.reset()
        this.start()
    }

    update() {
        this.elapsed = Math.round(this.$audio ? this.$audio.currentTime : this.elapsed + 1)//用audio播放的事件更新歌词逝去时间
        if (this.index === this.lyrics.length - 1) return
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
        this.index = 0
        this.elapsed = 0
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
/* harmony export (immutable) */ __webpack_exports__["a"] = LyricsPlayer;




/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony export (immutable) */ __webpack_exports__["a"] = ProgressBar;


/***/ })
/******/ ]);