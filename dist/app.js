!function(e){function t(i){if(n[i])return n[i].exports;var s=n[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.RECOMMEND_URL="https://qq-music-api.now.sh",t.TOPLIST_URL="https://qq-music-api.now.sh/top",t.SEARCH_URL="https://qq-music-api.now.sh/search",t.LYRICS_URL="https://qq-music-api.now.sh/lyrics"},function(e,t,n){"use strict";function i(e){function t(e){var t=e.getBoundingClientRect(),n=t.top,i=t.left,s=t.right,r=t.bottom,a=document.documentElement.clientWidth,o=document.documentElement.clientHeight;return(n>0&&n<o||r>0&&r<o)&&(i>0&&i<a||s>0&&s<a)}function n(e,t){var n=new Image;n.src=e.dataset.src,n.onload=function(){e.src=n.src,e.classList.remove("lazyload"),"function"==typeof t&&t()}}var i=[].slice.call(e||document.querySelectorAll(".lazyload"));if("IntersectionObserver"in window){var r=new IntersectionObserver(function(e){e.forEach(function(e){e.intersectionRatio>0&&n(e.target,function(){r.unobserve(e.target)})})},{threshold:.01});i.forEach(function(e){return r.observe(e)})}else{var a=s(function(){if(0===i.length)return window.removeEventListener("scroll",a);console.log(1),i=i.filter(function(e){return e.classList.contains("lazyload")}),i.forEach(function(e){t(e)&&n(e)})},300);window.addEventListener("scroll",a),window.dispatchEvent(new Event("scroll"))}}function s(e,t){var n=void 0,i=void 0;return function s(){var r=Date.now(),a=r-n;!n||a>=t?(e(),n=r):a<t&&(clearTimeout(i),i=setTimeout(s,t-a))}}Object.defineProperty(t,"__esModule",{value:!0}),t.lazyload=i},function(e,t,n){"use strict";function i(e){return o.LYRICS_URL+"?id="+e}function s(e){return"http://ws.stream.qqmusic.qq.com/"+e+".m4a?fromtag=46"}function r(e){return"https://y.gtimg.cn/music/photo_new/T002R150x150M000"+e+".jpg"}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return o.SEARCH_URL+"?keyword="+e+"&page="+(t||this.page)}Object.defineProperty(t,"__esModule",{value:!0}),t.lyricsUrl=i,t.songUrl=s,t.albumCoverUrl=r,t.searchUrl=a;var o=n(0)},function(e,t,n){"use strict";function i(){var e=location.hash;if(/^#player\?.+/.test(e)){var t=e.slice(e.indexOf("?")+1).match(/(\w+)=([^&]+)/g),n=t&&t.reduce(function(e,t){var n=t.split("=");return e[n[0]]=decodeURIComponent(n[1]),e},{});l.play(n)}else l.hide()}n(4);var s=n(5),r=n(7),a=n(8),o=n(9),l=(new s.Recommend(document.querySelector("#rec-view")).launch(),new r.TopList(document.querySelector("#rank-view")).launch(),new a.Search(document.querySelector("#search-view ")),new o.MusicPlayer(document.querySelector("#player")));document.querySelector("#header .player-pull").addEventListener("click",function(){l.show()}),i(),addEventListener("hashchange",i)},function(e,t,n){"use strict";document.addEventListener("click",function(e){var t=e.target;if("tab"===t.dataset.role){[].forEach.call(t.parentElement.children,function(e){e.classList.remove("active")}),t.classList.add("active");var n=document.querySelector(t.dataset.view);n&&([].forEach.call(n.parentElement.children,function(e){e.style.display="none"}),n.style.display="block")}})},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.Recommend=void 0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(6),a=n(1),o=n(0);t.Recommend=function(){function e(t){i(this,e),this.$el=t,this.locallSongList=["artist=周杰伦&songid=680287&songname=超人不会飞&albummid=000bviBl4FjTpO&duration=300","artist=周杰伦&songid=107192078&songname=告白气球&albummid=003RMaRI1iFoYd&duration=215","artist=周杰伦&songid=101787870&songname=手写的从前&albummid=001uqejs3d6EID&duration=297","artist=周杰伦&songid=102065756&songname=七里香&albummid=003DFRzD192KKD&duration=299","artist=周杰伦&songid=101787872&songname=美人鱼&albummid=001uqejs3d6EID&duration=219","artist=李荣浩&songid=102069682&songname=老街&albummid=001LP8hk0a6pOp&duration=318","artist=李荣浩&songid=5016169&songname=模特&albummid=004AhJHV3slLjN&duration=306","artist=李荣浩&songid=203695412&songname=歌谣&albummid=003wqRXy01mDkU&duration=325","artist=李荣浩&songid=5016168&songname=李白&albummid=004AhJHV3slLjN&duration=273","artist=周杰伦&songid=97745&songname=开不了口&albummid=000I5jJB3blWeN&duration=285","artist=蔡健雅&songid=624649&songname=红色高跟鞋&albummid=002dOge41xlS8x&duration=206","artist=蔡健雅&songid=1030808&songname=别找我麻烦&albummid=001aC9dM35U6KB&duration=248","artist=蔡健雅&songid=102193376&songname=空白格&albummid=001VqGlj2Oj52k&duration=252","artist=蔡健雅 MC HotDog&songid=4811148&songname=Easy Come Easy Go&albummid=001mQj2U1r3FDQ&duration=226","artist=薛明媛 朱贺&songid=203126194&songname=非酋&albummid=002mWqFa3dx5lQ&duration=172","artist=Charlie Puth Selena Gomez&songid=109295782&songname=We Don't Talk Anymore&albummid=0001QUHr0ZY6kM&duration=217","artist=刘若英&songid=4830211&songname=当爱在靠近&albummid=004NULY81IePWm&duration=250","artist=刘若英&songid=4830150&songname=后来&albummid=0017zqT34WuQwa&duration=341","artist=Jason Mraz&songid=102295878&songname=I'm Yours&albummid=003HV9iN3jAn11&duration=242","artist=Bruno Mars&songid=726298&songname=Marry You&albummid=001J363q1UXyed&duration=230"]}return s(e,[{key:"launch",value:function(){var e=this;return fetch(o.RECOMMEND_URL).then(function(e){return e.json()}).then(function(t){return e.json=t}).then(function(){return e.render()}),this}},{key:"render",value:function(){this.renderSlider(this.json.data.slider),this.renderRadios(this.json.data.radioList),this.renderPlayLists(this.json.data.songList),(0,a.lazyload)()}},{key:"renderSlider",value:function(e){this.slider=new r.Slider({el:this.$el.querySelector("#slider"),slides:e.map(function(e){return{link:e.linkUrl.replace("http://","https://"),image:e.picUrl.replace("http://","https://")}})})}},{key:"renderRadios",value:function(e){var t=this;this.$el.querySelector(".radios .list").innerHTML=e.map(function(e){return'<div class="list-item">\n        <div class="list-media">\n        <a href="#player?'+t.locallSongList.splice(Math.round(Math.random()*t.locallSongList.length),1)+'">\n          <img class="lazyload" data-src="'+e.picUrl+'">\n          <span class="icon icon-play"></span>\n          </a>\n        </div>\n        <div class="list-detail">\n          <h3 class="list-title">'+e.Ftitle+"</h3>\n        </div>\n      </div>"}).join("")}},{key:"renderPlayLists",value:function(e){var t=this;this.$el.querySelector(".playlists .list").innerHTML=e.map(function(e){return'<div class="list-item">\n        <div class="list-media">\n        <a href="#player?'+t.locallSongList.splice(Math.round(Math.random()*t.locallSongList.length),1)+'">\n          <img class="lazyload" data-src="'+e.picUrl+'">\n          <span class="icon icon-play"></span>\n        </a>\n        </div>\n        <div class="list-detail">\n          <h3 class="list-title">'+e.songListDesc+'</h3>\n          <div class="list-text"></div>\n        </div>\n      </div>'}).join("")}}]),e}()},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();t.Slider=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,e),this.$el=t.el,this.slides=t.slides,this.interval=t.interval||3e3,this.index=0,this.render(),this.start()}return s(e,[{key:"render",value:function(){this.$el.innerHTML='<ul class="qq-slider-wrap"></ul>',this.$wrap=this.$el.firstElementChild,this.$wrap.style.width=100*this.slides.length+"%",this.$wrap.innerHTML=this.slides.map(function(e,t){return'<li class="qq-slider-item">\n          <a href='+e.link+">\n            <img src="+e.image+' alt="">\n          </a>\n        </li>'}).join("")}},{key:"start",value:function(){setInterval(this.next.bind(this),this.interval)}},{key:"next",value:function(){if(this.index+=1,this.index===this.slides.length)return this.$wrap.style.transform="translate(0)",void(this.index=0);var e="-"+100*this.index/this.slides.length+"%";this.$wrap.style.transform="translate("+e+")"}}]),e}()},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.TopList=void 0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(0),a=n(1);t.TopList=function(){function e(t){i(this,e),this.$el=t}return s(e,[{key:"launch",value:function(){var e=this;return fetch(r.TOPLIST_URL).then(function(e){return e.json()}).then(function(t){return e.list=t.data.topList}).then(function(){return e.render()}),this}},{key:"render",value:function(){var e=this;this.$el.querySelector("#rank-view .toplist").innerHTML=this.list.map(function(t){return'<li class="top-item">\n          <div class="top-item-media">\n            <a href="#">\n              <img class="lazyload" data-src="'+t.picUrl.replace("http://","https://")+'">\n            </a>\n          </div>\n          <div class="top-item-info">\n            <h3 class="top-item-title ellipsis">'+t.topTitle+'</h3>\n            <ul class="top-item-list">\n             '+e.renderSonglist(t.songList)+"\n            </ul>\n          </div>\n        </li>"}).join(""),(0,a.lazyload)(this.$el.querySelectorAll(".lazyload"))}},{key:"renderSonglist",value:function(e){return e.map(function(e,t){return'<li class="top-item-song ellipsis">\n                <i class="song-index">'+(t+1)+'</i>\n                <span class="song-name">'+e.songname+"</span>- "+e.singername+"\n              </li>"}).join("")}}]),e}()},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.Search=void 0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(2);t.Search=function(){function e(t){i(this,e),this.$el=t,this.$input=this.$el.querySelector("#search"),this.$input.addEventListener("keyup",this.onKeyUp.bind(this)),this.$songs=this.$el.querySelector(".song-list"),this.keyword="",this.page=1,this.songs={},this.perpage=20,this.fetching=!1,this.onscroll=this.onScroll.bind(this),window.addEventListener("scroll",this.onscroll)}return s(e,[{key:"onKeyUp",value:function(e){var t=e.target.value.trim();if(!t)return this.reset();13===e.keyCode&&this.search(t)}},{key:"onScroll",value:function(e){if(this.nomore)return window.removeEventListener("scroll",this.onscroll);document.documentElement.clientHeight+pageYOffset>=document.body.scrollHeight-50&&this.search(this.keyword,this.page+1)}},{key:"reset",value:function(){this.page=1,this.keyword="",this.songs={},this.nomore=!1,this.$songs.innerHTML="",this.$el.querySelector(".search-loading").classList.remove("show")}},{key:"search",value:function(e,t){var n=this;this.keyword===e&&this.songs[t||this.page]||this.nomore||this.fetching||(this.keyword!==e&&this.reset(),this.keyword=e,this.loading(),fetch((0,r.searchUrl)(this.keyword,t||this.page)).then(function(e){return e.json()}).then(function(e){return n.page=e.data.song.curpage,n.nomore="no results"===e.message,n.songs[n.page]=e.data.song.list,e.data.song.list}).then(function(e){return n.append(e)}).then(function(){return n.done()}).catch(function(){return n.fetching=!1}))}},{key:"append",value:function(e){var t=e.map(function(e){var t=e.singer.map(function(e){return e.name}).join(" ");return'\n    <a class="song-item"\n           href="#player?artist='+t+"&songid="+e.songid+"&songname="+e.songname+"&albummid="+e.albummid+"&duration="+e.interval+'">\n          <i class="icon icon-music"></i>\n          <div class="song-name ellipsis">'+e.songname+'</div>\n          <div class="song-artist ellipsis">'+t+"</div>\n        </a>"}).join("");this.$songs.insertAdjacentHTML("beforeend",t)}},{key:"loading",value:function(){this.fetching=!0,this.$el.querySelector(".search-loading").classList.add("show")}},{key:"done",value:function(){this.fetching=!1,this.nomore?(console.log("end"),this.$el.querySelector(".loading-icon").classList.add("hide"),this.$el.querySelector(".loading-text").classList.add("hide"),this.$el.querySelector(".loading-done").classList.add("show"),this.$el.querySelector(".search-loading").classList.add("show")):this.$el.querySelector(".search-loading").classList.remove("show")}}]),e}()},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.MusicPlayer=void 0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(10),a=n(11),o=n(2);t.MusicPlayer=function(){function e(t){i(this,e),this.$el=t,this.$el.addEventListener("click",this),this.$audio=this.createAudio(),this.lyrics=new r.LyricsPlayer(this.$el.querySelector(".player-lyrics .lyrics-wrap"),this.$audio),this.progress=new a.ProgressBar(this.$el.querySelector(".progress"),180,!0),this.fetching=!1}return s(e,[{key:"createAudio",value:function(){var e=this,t=document.createElement("audio");return t.id="player-"+Math.floor(100*Math.random())+"-"+ +new Date,t.addEventListener("ended",function(){e.$audio.play(),e.lyrics.restart(),e.progress.restart()}),document.body.appendChild(t),t}},{key:"handleEvent",value:function(e){var t=e.target;switch(!0){case t.matches(".icon-play"):this.onPlay(e);break;case t.matches(".icon-pause"):this.onPause(e);break;case t.matches(".icon-list"):this.hide()}}},{key:"onPlay",value:function(e){this.fetching||(this.$audio.play(),this.lyrics.start(),this.progress.start(),e.target.classList.add("icon-pause"),e.target.classList.remove("icon-play"))}},{key:"onPause",value:function(e){this.$audio.pause(),this.lyrics.pause(),this.progress.pause(),e.target.classList.add("icon-play"),e.target.classList.remove("icon-pause")}},{key:"play",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(t){this.$el.querySelector(".song-name").innerText=t.songname,this.$el.querySelector(".song-artist").innerText=t.artist,this.progress.reset(t.duration);var n=(0,o.albumCoverUrl)(t.albummid);this.$el.querySelector(".album-cover").src=n,this.$el.querySelector(".player-background").style.backgroundImage="url("+n+")",t.songid&&(this.songid!==t.songid&&(this.$el.querySelector(".icon-action").classList.add("icon-play"),this.$el.querySelector(".icon-action").classList.remove("icon-pause")),this.songid=t.songid,this.$audio.src=(0,o.songUrl)(this.songid),this.fetching=!0,fetch((0,o.lyricsUrl)(this.songid)).then(function(e){return e.json()}).then(function(e){return e.lyric}).then(function(t){return e.lyrics.reset(t)}).catch(function(){}).then(function(){return e.fetching=!1})),this.show()}}},{key:"show",value:function(){this.$el.classList.add("show"),document.body.classList.add("noscroll")}},{key:"hide",value:function(){this.$el.classList.remove("show"),document.body.classList.remove("noscroll")}}]),e}()},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();t.LyricsPlayer=function(){function e(t,n){i(this,e),this.$el=t,this.$el.innerHTML='<div class="player-lyrics-lines"></div>',this.$lines=this.$el.querySelector(".player-lyrics-lines"),this.LINE_HEIGHT=42,this.index=0,this.$audio=n,this.lyrics=[],this.elapsed=0,this.reset(this.text),this.start()}return s(e,[{key:"start",value:function(){this.intervalId=setInterval(this.update.bind(this),1e3)}},{key:"pause",value:function(){clearInterval(this.intervalId)}},{key:"restart",value:function(){this.reset(),this.start()}},{key:"update",value:function(){if(this.elapsed=Math.round(this.$audio?this.$audio.currentTime:this.elapsed+1),this.index!==this.lyrics.length-1){for(var e=this.index+1;e<this.lyrics.length;e++){var t=this.getSeconds(this.lyrics[e]);if(this.elapsed===t&&(!this.elapsed[e+1]||this.elapsed<this.getSeconds(this.lyrics[e+1]))){this.$lines.children[this.index].classList.remove("active"),this.$lines.children[e].classList.add("active"),this.index=e;break}}if(this.index>2){var n=-(this.index-2)*this.LINE_HEIGHT;this.$lines.style.transform="translateY("+n+"px)"}}}},{key:"render",value:function(){var e=this.lyrics.map(function(e){return'\n        <p class="player-lyrics-line ellipsis">'+e.slice(10)+"</p>\n        "}).join("");this.$lines.innerHTML=e}},{key:"reset",value:function(e){this.pause(),this.index=0,this.elapsed=0,e&&(this.text=this.formatText(e)||"",this.lyrics=this.text.match(/^\[\d{2}:\d{2}.\d{2}\](.+)$/gm)||[],this.lyrics.length&&(this.render(),this.$lines.children[this.index].classList.add("active")))}},{key:"formatText",value:function(e){var t=document.createElement("div");return t.innerHTML=e,t.innerText}},{key:"getSeconds",value:function(e){return+e.replace(/^\[(\d{2}):(\d{2}).*/,function(e,t,n){return 60*+t+ +n})}}]),e}()},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();t.ProgressBar=function(){function e(t,n,s){i(this,e),this.$el=t,this.elapsed=0,this.duration=n||0,this.progress=0,this.render(),this.$progress=this.$el.querySelector(".progress-bar-progress"),this.$elapsed=this.$el.querySelector(".progress-elapsed"),this.$duration=this.$el.querySelector(".progress-duration"),this.$elapsed.innerText=this.formatTime(this.elapsed),this.$duration.innerText=this.formatTime(this.duration),s&&this.start()}return s(e,[{key:"start",value:function(){this.pause(),this.intervalId=setInterval(this.update.bind(this),50)}},{key:"pause",value:function(){clearInterval(this.intervalId)}},{key:"update",value:function(){this.elapsed+=.05,this.elapsed>=this.duration&&this.reset(),this.progress=this.elapsed/this.duration,this.$progress.style.transform="translate("+(100*this.progress-100)+"%)",this.$elapsed.innerText=this.formatTime(this.elapsed)}},{key:"reset",value:function(e){this.pause(),this.elapsed=0,this.progress=0,this.$progress.style.transform="translate(-100%)",this.$elapsed.innerText=this.formatTime(this.elapsed),e&&(this.duration=+e,this.$duration.innerText=this.formatTime(this.duration))}},{key:"restart",value:function(){this.reset(),this.start()}},{key:"render",value:function(){this.$el.innerHTML='\n         <div class="progress-time progress-elapsed"></div>\n          <div class="progress-bar">\n            <div class="progress-bar-progress"></div>\n          </div>\n         <div class="progress-time progress-duration"></div>\n      '}},{key:"formatTime",value:function(e){return(e/60>=10?""+Math.floor(e/60):"0"+Math.floor(e/60))+":"+(e%60>=10?""+Math.floor(e%60):"0"+Math.floor(e%60))}}]),e}()}]);