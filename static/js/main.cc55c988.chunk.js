(this["webpackJsonpmovieclone-prac"]=this["webpackJsonpmovieclone-prac"]||[]).push([[0],{35:function(e,t,n){},55:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(27),i=n.n(s),r=(n(35),n(6)),o=n(2),j=n(14),l=n.n(j),u=n(28),m=n(8),d=n(9),v=n(11),b=n(10),h=n(29),p=n.n(h),O=(n(55),n(1));var x=function(e){var t=e.id,n=e.year,a=e.title,c=e.summary,s=e.poster,i=e.genres;return Object(O.jsx)("div",{className:"movie",children:Object(O.jsxs)(r.b,{to:{pathname:"/movie/".concat(t),state:{year:n,title:a,summary:c,poster:s,genres:i}},children:[Object(O.jsx)("img",{src:s,alt:a,title:a}),Object(O.jsxs)("div",{className:"movie_data",children:[Object(O.jsx)("h3",{className:"movie_title",children:a}),Object(O.jsx)("h5",{className:"movie_year",children:n}),Object(O.jsx)("ul",{className:"movie_genres",children:i.map((function(e,t){return Object(O.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(O.jsxs)("p",{className:"movie_summary",children:[c.slice(0,130),"..."]})]})]})})},f=(n(62),function(e){Object(v.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(l.a.mark((function t(){var n,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts.mx/api/v2/list_movies.json");case 2:n=t.sent,a=n.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(O.jsx)("section",{className:"container",children:t?Object(O.jsx)("div",{className:"loader",children:Object(O.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(O.jsx)("div",{className:"movies",children:n.map((function(e){return Object(O.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(c.a.Component));n(63);var g=function(){return Object(O.jsxs)("div",{className:"about_container",children:[Object(O.jsx)("span",{children:"\ub9ac\uc561\ud2b8\ub77c\uc6b0\ud130\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc601\ud654 \ud398\uc774\uc9c0 \ub9cc\ub4e4\uae30*-*"}),Object(O.jsx)("span",{children:"feat.NICO\uc324"})]})},y=function(e){Object(v.a)(n,e);var t=Object(b.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(O.jsx)("span",{children:e.state.title}):null}}]),n}(c.a.Component);n(64);var N=function(){return Object(O.jsxs)("div",{className:"nav",children:[Object(O.jsx)(r.b,{to:"/",children:"Home"}),Object(O.jsx)(r.b,{to:{pathname:"/about",state:{fromNavigation:!0}},children:"About"})]})};n(65);var _=function(){return Object(O.jsxs)(r.a,{children:[Object(O.jsx)(N,{}),Object(O.jsx)(o.a,{path:"/",exact:!0,component:f}),Object(O.jsx)(o.a,{path:"/about",component:g}),Object(O.jsx)(o.a,{path:"/movie/:id",component:y})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(_,{})}),document.getElementById("root")),k()}},[[66,1,2]]]);
//# sourceMappingURL=main.cc55c988.chunk.js.map