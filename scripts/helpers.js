import {LYRICS_URL, SEARCH_URL} from './constant.js'

//获取歌词的url
export function lyricsUrl(songid) {
    return `${LYRICS_URL}?id=${songid}`
}
//获取歌曲的url
export function songUrl(songid) {
    return `http://ws.stream.qqmusic.qq.com/${songid}.m4a?fromtag=46`
}
//获取封面图片的url
export function albumCoverUrl(albummid){
    return `https://y.gtimg.cn/music/photo_new/T002R150x150M000${albummid}.jpg`
}
//搜索的url
export function searchUrl(keyword, page = 1) {
    return `${SEARCH_URL}?keyword=${keyword}&page=${page ||this.page}`
}