const express = require('express')
const request = require('request-promise')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 4000

const HEADERS = {
    'accept': 'application/json',
    'authority': 'c.y.qq.com',
    'origin': 'https://m.y.qq.com',
    'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
    'referer': 'https://m.y.qq.com/'

}

const LYRICSHEADERS = {
    'accept': '*/*',
    'authority': 'c.y.qq.com',
    'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
    'referer': 'https://m.y.qq.com/'
}

app.use(cors())//支持跨域

app.get('/',async (req, res) => {
    const url = `https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=${+ new Date()}`
    try{
        res.json( await request({
            url: url,
            json: true,
            headers: HEADERS
        })
    )
    }catch (e){
        res.json({error: e.message})
    }
})

app.get('/toplist',async(req, res) => {
    const url = `https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=${+ new Date()}`
    try{
        res.json( await request({
                url: url,
                json: true,
                headers: HEADERS
            })
        )
    }catch (e){
        res.json({error: e.message})
    }
})

app.get('/search',async(req, res) => {
    const { keyword, page = 1 } = req.query
    const url = `https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w=${encodeURIComponent(keyword)}&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=${page}&remoteplace=txt.mqq.all&_=${+ new Date()}`
    try{
        res.json( await request({
                url: url,
                json: true,
                headers: HEADERS
            })
        )
    }catch (e){
        res.json({error: e.message})
    }
})


app.get('/lyrics',async(req, res) => {
    const {songid, type} = req.query
    const url = `https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric.fcg?nobase64=1&musicid=${songid}&songtype=${type || 0}`
    try{
        let text = (await request({
            url: url,
            headers: LYRICSHEADERS
        })).replace(/MusicJsonCallback\((.*)\)/, '$1')
        res.json(JSON.parse(text))
    }catch (e){
        res.json({error: e.message})
    }
})

app.listen(PORT)


//curl 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w=%E5%BC%A0%E5%AD%A6%E5%8F%8B&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=1&remoteplace=txt.mqq.all&_=1506482014234' -H 'pragma: no-cache' -H 'origin: https://m.y.qq.com' -H 'accept-encoding: gzip, deflate, br' -H 'accept-language: zh-CN,zh;q=0.8' -H 'user-agent: Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1' -H 'accept: application/json' -H 'cache-control: no-cache' -H 'authority: c.y.qq.com' -H 'cookie: pgv_pvi=8268242944; pgv_si=s2201572352; yqq_stat=0; qqmusic_fromtag=10; checkmask=3; ts_last=c.y.qq.com/v8/playsong.html; ts_refer=ADTAGmyqq; ts_uid=8934588466; ts_last=y.qq.com/m/act/sfhd/94.html; ts_refer=ADTAGbanner; ts_uid=8934588466; pgv_info=ssid=s6494934905; pgv_pvid=5687894920' -H 'referer: https://m.y.qq.com/' --compressed