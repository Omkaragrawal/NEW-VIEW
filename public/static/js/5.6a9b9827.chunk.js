(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[5],{141:function(e,t,a){},153:function(e,t,a){},170:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return N}));var n=a(53),s=a(54),c=a(26),r=a(63),i=a(61),o=a(0),l=a.n(o),m=(a(153),a(59)),u=Object(m.a)(l.a.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack"),p=a(122),v=a(58),h=a.n(v),d=a(22),_=a(2),g=(a(141),a(127)),f=(a(128),a(129)),b=a(12);var y=function(e){e.key;var t,a,n=e.id,s=e.title,c=e.poster,r=e.vote_average,i=(e.pages,Object(b.b)()),o=Object(_.a)(i,2),m=(o[0].movie_id,o[1]);return l.a.createElement("div",{className:"movie__space"},l.a.createElement("div",null,l.a.createElement("div",{className:"poster__titleSpace"},l.a.createElement("h3",{className:"poster__title"},(a=20,(null===(t=s)||void 0===t?void 0:t.length)>a?t.substr(0,a-1)+"...":t))),l.a.createElement("div",{className:"mov"},l.a.createElement(g.a,{className:"radius",text:r,value:r,maxValue:"10",styles:{text:{fontSize:"20px",fill:"white"}}})),l.a.createElement(f.LazyLoadImage,{className:"movie__poster",src:null!==c?"".concat("https://image.tmdb.org/t/p/original/").concat(c):"".concat("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g"),alt:"",onClick:function(){return function(e,t){m({type:"ADD_MOVIE",item:{id:e,title:t,type:"movie"}}),console.log(e,t,"From movie section")}(n,s)},key:n})))};var E=function(e){var t=e.list,a=e.pages;return l.a.createElement("div",{className:"movies"},t.map((function(e){return l.a.createElement(y,{vote_average:e.vote_average,key:e.id,title:e.original_title,poster:e.poster_path,id:e.id,pages:a})})))},N=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).Changed=function(e){s.setState({query:e.target.value})},s.SearchQuery=function(e){"Enter"===e.key&&(d.a.get("/search/movie?query=".concat(s.state.query,"&api_key=dbc0a6d62448554c27b6167ef7dabb1b")).then((function(e){var t=e.data.results;s.setState({movies:t}),s.setState({total_page:e.data.total_pages})})).catch=function(e){console.log("Refresh the page Or else try later",e)})},s.state={styleShow:"",search:s.props.search,query:"",movies:[],total_page:""},s.Changed=s.Changed.bind(Object(c.a)(s)),s}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"search__space"},l.a.createElement("header",{className:"search__nav"},l.a.createElement("div",null,l.a.createElement(u,{className:"arrowback",onClick:function(){return e.state.search(!1)}})),l.a.createElement("div",{className:"options"},l.a.createElement("input",{type:"text",className:"input_space",placeholder:"Enter movie name to search",onChange:function(t){return e.Changed(t)},onKeyPress:function(t){return e.SearchQuery(t)}}),l.a.createElement(h.a,{className:"search__icon"}),l.a.createElement("div",{className:"other__options"},l.a.createElement(p.a,{className:"search__exit",onClick:this.exit})))),void 0!==this.state.movies||0!==this.state.total_page?l.a.createElement(E,{list:this.state.movies,pages:this.state.total_pages}):this.setState({show:!1}))}}]),a}(o.Component)}}]);
//# sourceMappingURL=5.6a9b9827.chunk.js.map