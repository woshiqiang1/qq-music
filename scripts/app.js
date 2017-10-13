import './tab.js'
import {Recommend} from './recommend.js'
import {TopList} from './toplist.js'
import {Search} from './search.js'
import {MusicPlayer} from './music_player.js'


let recommend = new Recommend(document.querySelector('#rec-view')).launch()
let topList = new TopList(document.querySelector('#rank-view')).launch()
let search = new Search(document.querySelector('#search-view '))
let player = new MusicPlayer(document.querySelector('#player'))

//给播放器按键绑定事件
let playerPull = document.querySelector('#header .player-pull')
playerPull.addEventListener('click', (event) => {
    player.show()
})

onHashChange()//页面刷新立即读入参数
window.addEventListener('hashchange', onHashChange)


function onHashChange() {
    let hash = location.hash
    console.log(hash)
    if (/^#player\?.+/.test(hash)) {
        let matches = hash.slice(hash.indexOf('?') + 1).match(/(\w+)=([^&]+)/g)
        let options = matches && matches.reduce((res, cur) => {
            let arr = cur.split('=')
            res[arr[0]] = decodeURIComponent(arr[1])//避免手机浏览器中文出现乱码
            return res
        }, {})
        player.play(options)
    } else {
        player.hide()
    }
}










