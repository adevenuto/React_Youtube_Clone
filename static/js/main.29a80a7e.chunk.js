(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(39)},22:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),i=a(4),s=a(9),c=a(10),l=a(15),o=a(11),u=a(16),m=a(2),d=(a(20),a(22),a(0)),p=a.n(d),v=a(12),h=a.n(v),f=a(13),E=function(e){var t=e.videoTitle,a=e.currentVideo,n=e.video;return p.a.createElement("li",{onClick:function(){return a(n)}},t)},b=function(e){var t=Object(f.debounce)(function(t){e.newSearch(t)},100),a=e.searchResults.map(function(t){return p.a.createElement(E,{currentVideo:e.setCurrent,video:t,videoTitle:t.snippet.title,key:t.etag})});return p.a.createElement("div",{id:"searchBar",className:"form-group"},p.a.createElement("label",{className:"sr-only",htmlFor:"searchBar"},"Search"),p.a.createElement("div",{className:"input-group mr-sm-2"},p.a.createElement("input",{onKeyPress:function(t){return function(t,a){"Enter"===t.key&&(console.log("hello"),e.searchByTerm(a))}(t,t.target.value)},onInput:function(e){return t(e.target.value)},type:"text",className:"form-control",id:"searchInput",placeholder:"Search"}),p.a.createElement("div",{className:"input-group-append"},p.a.createElement("div",{className:"input-group-text"},p.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",id:"magnifyGlass",width:"20",height:"20",viewBox:"0 0 30.239 30.239"},p.a.createElement("path",{d:"M20.194 3.46c-4.613-4.613-12.121-4.613-16.734 0-4.612 4.614-4.612 12.121 0 16.735 4.108 4.107 10.506 4.547 15.116 1.34.097.459.319.897.676 1.254l6.718 6.718a2.498 2.498 0 0 0 3.535 0 2.496 2.496 0 0 0 0-3.535l-6.718-6.72a2.5 2.5 0 0 0-1.253-.674c3.209-4.611 2.769-11.008-1.34-15.118zm-2.121 14.614c-3.444 3.444-9.049 3.444-12.492 0-3.442-3.444-3.442-9.048 0-12.492 3.443-3.443 9.048-3.443 12.492 0 3.444 3.444 3.444 9.048 0 12.492z",fill:"#fff"}))))),p.a.createElement("ul",{className:"searchList"},a))},y=function(e){var t=e.video,a=e.onVideoSelect,n=t.snippet.thumbnails.medium.url,r=t.snippet.title;return p.a.createElement("li",{onClick:function(){return a(t)},className:"list-group-item video-list-containers"},p.a.createElement("div",{className:"video-list media"},p.a.createElement("div",{className:"media-left"},p.a.createElement("img",{src:n,height:"75px",className:"media-object",alt:"Video Thumbnail"})),p.a.createElement("div",{className:"media-body"},p.a.createElement("div",{className:"media-heading"},p.a.createElement("h6",null,r)))))},w=function(e){var t=e.videos.map(function(t){return p.a.createElement(y,{onVideoSelect:e.onVideoSelect,key:t.etag,video:t})});return p.a.createElement("ul",{className:"list-group"},t)},g=function(e){var t=e.video;if(t){var a=t.id.videoId,n="https://www.youtube.com/embed/".concat(a);return p.a.createElement("div",{className:"video-detail"},p.a.createElement("div",{className:"video-detail"},p.a.createElement("iframe",{title:"youtube video frame",allowFullScreen:!0,mozallowfullscreen:"true",webkitallowfullscreen:"true",frameBorder:"0",src:n,className:"embeded-responsive-item",width:"100%",height:"500px"})),p.a.createElement("div",{className:"details mb-2"},p.a.createElement("div",null,t.snippet.title),p.a.createElement("div",null,t.snippet.description)))}return p.a.createElement("div",null,"loading....")},k=a(14),N=a.n(k),x={api_key:"AIzaSyBsv0M9DxPzlUHJh3QiDXJvuvVwePYa8R0"},S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={videos:[],searchResults:[],selectedVideo:null},a.youtubeApi=a.youtubeApi.bind(Object(m.a)(Object(m.a)(a))),a.searchApi=a.searchApi.bind(Object(m.a)(Object(m.a)(a))),a.setInitial("react js"),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"youtubeApi",value:function(e){var t={part:"snippet",key:x.api_key,q:e,type:"video",order:"viewCount",maxResults:15};return N.a.get("https://www.googleapis.com/youtube/v3/search",{params:t}).then(function(e){return e.data.items}).catch(function(e){console.error(e)})}},{key:"setInitial",value:function(){var e=Object(i.a)(r.a.mark(function e(t){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtubeApi(t);case 2:a=e.sent,this.setState({videos:a,selectedVideo:a[0],searchResults:[]});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"searchApi",value:function(){var e=Object(i.a)(r.a.mark(function e(t){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=4;break}this.setState({searchResults:[]}),e.next=8;break;case 4:return e.next=6,this.youtubeApi(t);case 6:a=e.sent,this.setState({searchResults:a});case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"setVideoFromSearch",value:function(e){document.getElementById("searchInput").value="",this.setState({videos:this.state.searchResults,selectedVideo:e,searchResults:[]})}},{key:"setVideoFromListItem",value:function(){var e=Object(i.a)(r.a.mark(function e(t){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtubeApi(t.snippet.title);case 2:a=e.sent,document.getElementById("searchInput").value="",this.setState({videos:a,selectedVideo:t,searchResults:[]});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return p.a.createElement("div",{className:"container"},p.a.createElement("div",{className:"row"},p.a.createElement("div",{className:"col-lg-8"},p.a.createElement(b,{newSearch:function(t){return e.searchApi(t)},searchResults:this.state.searchResults,setCurrent:function(t){return e.setVideoFromSearch(t)},searchByTerm:function(t){return e.setInitial(t)}}),p.a.createElement(g,{video:this.state.selectedVideo})),p.a.createElement("div",{className:"col-lg-4"},p.a.createElement(w,{onVideoSelect:function(t){return e.setVideoFromListItem(t)},videos:this.state.videos}))))}}]),t}(d.Component);h.a.render(p.a.createElement(S,null),document.getElementById("app"))}},[[17,2,1]]]);
//# sourceMappingURL=main.29a80a7e.chunk.js.map