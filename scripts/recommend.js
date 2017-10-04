import {RECOMMEND_URL} from './constant'
import {lazyload} from "./lazyload";
import {Slider} from './slider'
export class Recommend{
    constructor(el){
        this.$el = el
    }

    launch(){
        fetch(RECOMMEND_URL)//./json/rec.json本地数据
            .then(res => res.json())
            .then(json => this.render(json))
        return this//保存实例
    }

    render(json){
        this.renderSlider(json.data.slider)
        this.renderRadios(json.data.radioList)
        this.renderPlaylists(json.data.songList)
        lazyload()
    }

    renderSlider(slides) {
        new Slider({
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
               <a href="#player?artist=蔡健雅&songid=145324&songname=Beautiful Love&albummid=004bsze91nxcUd&duration=295">
                <img class="lazyload" data-src="${radio.picUrl}" alt="">
                <div class="list-title">${radio.Ftitle}
                    <span class="icon icon_play"></span>
                </div>
              </a> 
            </div>
          </div>`).join('')
    }
    renderPlaylists(playlists) {
        document.querySelector('.playlists .list').innerHTML = playlists.map(list =>
            `<div class="list-item">
                <div class="list-media">
                    <a href="#player?artist=周杰伦&songid=680279&songname=烟花易冷&albummid=000bviBl4FjTpO&duration=263">
                        <img class="lazyload" data-src="${list.picUrl}">
                         <div class="list-title">${list.songListDesc}
                            <span class="icon icon_play"></span>
                        </div>
                    </a> 
                 </div>
          </div>`).join('')
    }

}