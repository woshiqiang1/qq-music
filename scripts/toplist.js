import {TOPLIST_URL} from './constant.js'
import {lazyload} from './lazyload.js'

export class TopList {
    constructor(el) {
        this.$el = el
    }

    launch() {
        fetch(TOPLIST_URL)//./json/rank.json本地数据
            .then(res => res.json())
            .then(json => this.list = json.data.topList)
            .then(() => this.render())
        return this
    }

    render() {
        this.$el.querySelector('#rank-view .toplist').innerHTML = this.list.map(item =>
            `<li class="top-item">
          <div class="top-item-media">
            <a href="#">
              <img class="lazyload" data-src="${item.picUrl.replace('http://', 'https://')}">
            </a>
          </div>
          <div class="top-item-info">
            <h3 class="top-item-title ellipsis">${item.topTitle}</h3>
            <ul class="top-item-list">
             ${this.renderSonglist(item.songList)}
            </ul>
          </div>
        </li>`).join('')

        lazyload(this.$el.querySelectorAll('.lazyload'))//应为异步需要把lazyload写在里面

    }

    renderSonglist(songs) {
        return songs.map((song, i) =>
            `<li class="top-item-song ellipsis">
                <i class="song-index">${i + 1}</i>
                <span class="song-name">${song.songname}</span>- ${song.singername}
              </li>`).join('')
    }


}