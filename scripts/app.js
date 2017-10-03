(function () {

    fetch('http://localhost:4000/')//./json/rec.json本地数据
        .then(res => res.json())
        .then(render)

    fetch('http://localhost:4000/toplist')//./json/rank.json本地数据
        .then(res => res.json())
        .then(json => json.data.topList)
        .then(renderTopList)

    function render(json) {
        renderSlider(json.data.slider)
        renderRadios(json.data.radioList)
        renderPlaylists(json.data.songList)
        lazyload(document.querySelectorAll('.rec-view .list-item .lazyload'))

    }

    function renderSlider(slides) {
        slides = slides.map(slide => {
            return {link: slide.linkUrl, image: slide.picUrl}
        })
        new Slider({
            $el: document.querySelector('#slider'),
            slides: slides
        })
    }

    function renderRadios(radios) {
        document.querySelector('.radios .list').innerHTML = radios.map(radio =>
            `<div class="list-item">
            <div class="list-media">
              <img class="lazyload" data-src="${radio.picUrl}" alt="">
              <span class="icon icon_play"></span>
            </div>
            <div class="list-title">${radio.Ftitle}</div>
          </div>`).join('')
    }

    function renderPlaylists(playlists) {
        document.querySelector('.playlists .list').innerHTML = playlists.map(list =>
            `<div class="list-item">
            <div class="list-media">
              <img class="lazyload" data-src="${list.picUrl}">
              <span class="icon icon_play"></span>
            </div>
            <div class="list-title">${list.songListDesc}</div>
          </div>`).join('')
    }

    function renderTopList(list) {
        document.querySelector('.rank-view .toplist').innerHTML = list.map(item =>
            `<li class="top-item">
          <div class="top-item-media">
            <a href="#">
              <img class="lazyload" data-src="${item.picUrl}">
            </a>
          </div>
          <div class="top-item-info">
            <h3 class="top-item-title ellipsis">${item.topTitle}</h3>
            <ul class="top-item-list">
             ${renderSonglist(item.songList)}
            </ul>
          </div>
        </li>`).join('')

        lazyload(document.querySelectorAll('.rank-view .toplist .lazyload'))//应为异步需要把lazyload写在里面

        function renderSonglist(songs) {
            return songs.map((song, i) =>
                `<li class="top-item-song ellipsis">
                <i class="song-index">${i + 1}</i>
                <span class="song-name">${song.songname}</span>- ${song.singername}
              </li>`).join('')
        }
    }


    let search =  new Search(document.querySelector('.search-view '))

    let player = new MusicPlayer(document.querySelector('#player'))

    //给播放器按键绑定事件
    let playerPull = document.querySelector('#header .player-pull')
    playerPull.addEventListener('click',(event) => {
        document.querySelector('#player').classList.add('show')
        document.body.classList.add('noscroll')
    })

    function onHashChange(){
        let hash = location.hash
        console.log(hash)
        if(/^#player\?.+/.test(hash)){
            let matches = hash.slice(hash.indexOf('?') + 1).match(/(\w+)=([^&]+)/g)
            let options = matches && matches.reduce((res, cur) => {
                let arr = cur.split('=')
                res[arr[0]] = arr[1]
                return res
            }, {})
            player.play(options)
        }else{
            player.hide()
        }
    }

    onHashChange()//页面刷新立即读入参数
    window.addEventListener('hashchange', onHashChange)

    window.search = search
    window.player =player






})()


