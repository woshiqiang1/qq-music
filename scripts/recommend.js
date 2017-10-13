import { Slider } from './slider.js'
import { lazyload } from './lazyload.js'
import { RECOMMEND_URL } from './constant.js'

export class Recommend {
    constructor(el) {
        this.$el = el
        this.locallSongList = [
            'artist=周杰伦&songid=680287&songname=超人不会飞&albummid=000bviBl4FjTpO&duration=300',
            'artist=周杰伦&songid=107192078&songname=告白气球&albummid=003RMaRI1iFoYd&duration=215',
            'artist=周杰伦&songid=101787870&songname=手写的从前&albummid=001uqejs3d6EID&duration=297',
            'artist=周杰伦&songid=102065756&songname=七里香&albummid=003DFRzD192KKD&duration=299',
            'artist=周杰伦&songid=101787872&songname=美人鱼&albummid=001uqejs3d6EID&duration=219',
            'artist=李荣浩&songid=102069682&songname=老街&albummid=001LP8hk0a6pOp&duration=318',
            'artist=李荣浩&songid=5016169&songname=模特&albummid=004AhJHV3slLjN&duration=306',
            'artist=李荣浩&songid=203695412&songname=歌谣&albummid=003wqRXy01mDkU&duration=325',
            'artist=李荣浩&songid=5016168&songname=李白&albummid=004AhJHV3slLjN&duration=273',
            'artist=周杰伦&songid=97745&songname=开不了口&albummid=000I5jJB3blWeN&duration=285',
            'artist=蔡健雅&songid=624649&songname=红色高跟鞋&albummid=002dOge41xlS8x&duration=206',
            'artist=蔡健雅&songid=1030808&songname=别找我麻烦&albummid=001aC9dM35U6KB&duration=248',
            'artist=蔡健雅&songid=102193376&songname=空白格&albummid=001VqGlj2Oj52k&duration=252',
            'artist=蔡健雅 MC HotDog&songid=4811148&songname=Easy Come Easy Go&albummid=001mQj2U1r3FDQ&duration=226',
            'artist=薛明媛 朱贺&songid=203126194&songname=非酋&albummid=002mWqFa3dx5lQ&duration=172',
            'artist=Charlie Puth Selena Gomez&songid=109295782&songname=We Don\'t Talk Anymore&albummid=0001QUHr0ZY6kM&duration=217',
            'artist=刘若英&songid=4830211&songname=当爱在靠近&albummid=004NULY81IePWm&duration=250',
            'artist=刘若英&songid=4830150&songname=后来&albummid=0017zqT34WuQwa&duration=341',
            'artist=Jason Mraz&songid=102295878&songname=I\'m Yours&albummid=003HV9iN3jAn11&duration=242',
            'artist=Bruno Mars&songid=726298&songname=Marry You&albummid=001J363q1UXyed&duration=230'
        ]
    }

    launch() {
        fetch(RECOMMEND_URL)
            .then(res => res.json())
            .then(json => this.json = json)
            .then(() => this.render())
        return this
    }

    render() {
        this.renderSlider(this.json.data.slider)
        this.renderRadios(this.json.data.radioList)
        this.renderPlayLists(this.json.data.songList)
        lazyload()
    }

    renderSlider(slides) {
        this.slider = new Slider({
            el: this.$el.querySelector('#slider'),
            slides: slides.map(slide => ({
                link: slide.linkUrl.replace('http://', 'https://'),
                image: slide.picUrl.replace('http://', 'https://')
            }))
        })
    }

    renderRadios(radios) {
        this.$el.querySelector('.radios .list').innerHTML = radios.map(radio =>{
            let songUrl = this.locallSongList.splice(Math.round(Math.random() * this.locallSongList.length) ,1)
           return `<div class="list-item">
        <div class="list-media">
        <a href="#player?${songUrl}">
          <img class="lazyload" data-src="${radio.picUrl}">
          <span class="icon icon-play"></span>
          </a>
        </div>
        <div class="list-detail">
          <h3 class="list-title">${radio.Ftitle}</h3>
        </div>
      </div>`}).join('')


    }

    renderPlayLists(playlists) {
        this.$el.querySelector('.playlists .list').innerHTML = playlists.map(list =>{
            let songUrl = this.locallSongList.splice(Math.round(Math.random() * this.locallSongList.length) ,1)
        return  `<div class="list-item">
        <div class="list-media">
        <a href="#player?${songUrl}">
          <img class="lazyload" data-src="${list.picUrl}">
          <span class="icon icon-play"></span>
        </a>
        </div>
        <div class="list-detail">
          <h3 class="list-title">${list.songListDesc}</h3>
          <div class="list-text"></div>
        </div>
      </div>`}).join('')
    }
}