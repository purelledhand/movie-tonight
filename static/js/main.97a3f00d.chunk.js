(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(26)},16:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),s=n.n(o),i=(n(16),n(1)),c=n.n(i),l=n(4),m=n(5),u=n(6),v=n(8),_=n(7),d=n(9);n(21),n(23);function f(e){for(var t=e.rating,n=Math.round(t)/2,a="movie__score",o=[],s=0;s<parseInt(n);s++)o.push(r.a.createElement("i",{className:"fas fa-star movie__star"}));return n%1?o.push(r.a.createElement("i",{className:"fas fa-star-half movie__star"})):a+=" movie__score__margin",r.a.createElement("div",{className:"movie__rating"},o,r.a.createElement("span",{className:a},n))}function p(e){var t=e.poster,n=e.alt;return r.a.createElement("img",{src:t,alt:n,title:n,className:"movie__poster"})}function h(e){var t=e.genre;return r.a.createElement("span",{className:"movie__genre"},t)}function g(e){var t=e.torrent;return r.a.createElement("a",{href:t},r.a.createElement("div",{className:"movie__torrent"},r.a.createElement("i",{className:"fas fa-download"})))}var E=function(e){var t=e.title,n=e.poster,a=e.genres,o=e.rating,s=e.torrents;return r.a.createElement("div",{className:"movie-container"},r.a.createElement("div",{className:"movie__columns"},r.a.createElement(p,{poster:n,alt:t})),r.a.createElement("div",{className:"movie__columns"},r.a.createElement("h1",null,t),r.a.createElement("div",{className:"movie__genres"},a.map(function(e,t){return r.a.createElement(h,{genre:e,key:t})})),r.a.createElement(f,{rating:o},r.a.createElement("div",{className:"movie__rating"})),r.a.createElement("div",{className:"movie__torrents"},s.map(function(e,t){return r.a.createElement(g,{torrent:e.url,key:t})}))))},w=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(v.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(o)))).state={},n._renderMovies=function(){var e=n.state.movies.map(function(e){return r.a.createElement(E,{title:e.title_long,poster:e.medium_cover_image,key:e.id,id:e.id,genres:e.genres,rating:e.rating,torrents:e.torrents})});return console.log(n.state.movies),e},n._callApi=function(){return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count").then(function(e){return e.json()}).then(function(e){return e.data.movies}).catch(function(e){return e})},n._getMovies=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callApi();case 2:t=e.sent,n.setState({movies:t});case 4:case"end":return e.stop()}},e,this)})),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:this.state.movies?"App":"App--loading"},this.state.movies?this._renderMovies():"Loading")}},{key:"componentDidMount",value:function(){this._getMovies()}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(w,null),document.getElementById("root")),document.querySelector("head").innerHTML+='<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous">',"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.97a3f00d.chunk.js.map