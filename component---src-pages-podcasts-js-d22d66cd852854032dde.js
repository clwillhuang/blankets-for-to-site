(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"5l6m":function(e,t,a){"use strict";var r=a("+uX7"),n=a("m/aQ"),i=a("17+C"),o=a("WD+B"),l=a("gQbX"),s=a("4jnk"),c=a("5Cvy"),d=a("mh2x"),u=Math.max,m=Math.min,p=Math.floor,f=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g;r("replace",2,(function(e,t,a,r){var h=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=r.REPLACE_KEEPS_$0,b=h?"$":"$0";return[function(a,r){var n=s(this),i=null==a?void 0:a[e];return void 0!==i?i.call(a,n,r):t.call(String(n),a,r)},function(e,r){if(!h&&g||"string"==typeof r&&-1===r.indexOf(b)){var i=a(t,e,this,r);if(i.done)return i.value}var s=n(e),p=String(this),f="function"==typeof r;f||(r=String(r));var v=s.global;if(v){var w=s.unicode;s.lastIndex=0}for(var y=[];;){var k=d(s,p);if(null===k)break;if(y.push(k),!v)break;""===String(k[0])&&(s.lastIndex=c(p,o(s.lastIndex),w))}for(var x,B="",N=0,O=0;O<y.length;O++){k=y[O];for(var T=String(k[0]),S=u(m(l(k.index),p.length),0),R=[],q=1;q<k.length;q++)R.push(void 0===(x=k[q])?x:String(x));var I=k.groups;if(f){var P=[T].concat(R,S,p);void 0!==I&&P.push(I);var z=String(r.apply(void 0,P))}else z=E(T,p,S,R,I,r);S>=N&&(B+=p.slice(N,S)+z,N=S+T.length)}return B+p.slice(N)}];function E(e,a,r,n,o,l){var s=r+e.length,c=n.length,d=v;return void 0!==o&&(o=i(o),d=f),t.call(l,d,(function(t,i){var l;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return a.slice(0,r);case"'":return a.slice(s);case"<":l=o[i.slice(1,-1)];break;default:var d=+i;if(0===d)return t;if(d>c){var u=p(d/10);return 0===u?t:u<=c?void 0===n[u-1]?i.charAt(1):n[u-1]+i.charAt(1):t}l=n[d-1]}return void 0===l?"":l}))}}))},"6Iuv":function(e,t,a){e.exports={imageOverlay:"square-grid-module--imageOverlay--1qYGe",link:"square-grid-module--link--6ZMfq",textBox:"square-grid-module--textBox--Bzy-F",gridContainer:"square-grid-module--gridContainer--3bDmO",tile:"square-grid-module--tile--Z-3yq",title:"square-grid-module--title--1fkId",description:"square-grid-module--description--SoooP"}},EAKA:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=Object(r.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,l=e.size,s=void 0===l?24:l,c=o(e,["color","size"]);return n.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),n.a.createElement("polyline",{points:"9 18 15 12 9 6"}))}));l.displayName="ChevronRight",t.a=l},FRg3:function(e,t,a){"use strict";a("5l6m"),a("p4ji"),a("JM9Q");var r=a("q1tI"),n=a.n(r),i=(a("wBlv"),a("zHhC")),o=a.n(i);t.a=function(e){var t=e.node,a=void 0===t?void 0:t,r=e.link,i=void 0===r?void 0:r;void 0!==a&&(i=a.data.target.fields.link["en-US"]);var l=i.replace("episode","embed-podcast/episode").split("?")[0];return n.a.createElement("div",{className:o.a.parent},n.a.createElement("iframe",{src:l,width:"100%",height:"232",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"}))}},QkGs:function(e,t,a){e.exports={whiteButton:"styled-button-module--whiteButton--LbBn9",primaryButton:"styled-button-module--primaryButton--33jVM",links:"styled-button-module--links--2A7r_"}},UZBW:function(e,t,a){e.exports={parent:"youtube-embed-module--parent--3tlER",iframeParent:"youtube-embed-module--iframeParent--2RUai"}},Ub2O:function(e,t,a){e.exports={parent:"header-image-module--parent--2fZAv",fluidImage:"header-image-module--fluidImage--2nzWT",textBox:"header-image-module--textBox--3g5ho",stripe:"header-image-module--stripe--1lXE2",title:"header-image-module--title---sIru",subtitle:"header-image-module--subtitle--1zt-q"}},hn7R:function(e,t,a){e.exports={title:"podcasts-module--title--xyhQ6",podcastTitle:"podcasts-module--podcastTitle--13XPu"}},kzGm:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("UZBW"),o=a.n(i);t.a=function(e){var t=e.node.data.target.fields.watchKey["en-US"];return n.a.createElement("div",{className:o.a.parent},n.a.createElement("iframe",{src:"https://www.youtube.com/embed/"+t,width:"560",height:"315",frameborder:"0"}))}},pMRN:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("9eSz"),o=a.n(i),l=a("Ub2O"),s=a.n(l),c=a("/eHF"),d=a.n(c);t.a=function(e){var t=e.imgFluid,a=e.headerTitle,r=e.headerSubtitle;return n.a.createElement("div",{className:s.a.parent},n.a.createElement(o.a,{fluid:t,className:s.a.fluidImage}),n.a.createElement("div",{className:s.a.textBox},n.a.createElement(d.a,null,n.a.createElement("h1",{className:s.a.title},a),void 0===r||""!==r?n.a.createElement("p",{className:s.a.subtitle},r):n.a.createElement("p",null))))}},uOxR:function(e,t,a){e.exports={previewTitle:"podcast-card-module--previewTitle--uVU3u",previewPublishDate:"podcast-card-module--previewPublishDate--2PGpv",previewDescription:"podcast-card-module--previewDescription--1-sSa",alink:"podcast-card-module--alink--1a3zz",preview:"podcast-card-module--preview--27fmI",previewText:"podcast-card-module--previewText--2luE4"}},vrW2:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=(a("JM9Q"),a("9eSz")),o=a.n(i),l=a("6Iuv"),s=a.n(l),c=a("EAKA"),d=a("17x9"),u=a.n(d),m=function(e){var t=e.itemData,a=t.title,r=t.description,i=t.link,l=t.fluid;return n.a.createElement("div",{className:s.a.tile,key:a},n.a.createElement("div",{className:s.a.imageOverlay},n.a.createElement(o.a,{fluid:l,style:{width:"100%",height:"100%"}})),n.a.createElement("div",{className:s.a.textBox},n.a.createElement("h1",{className:s.a.title},a,n.a.createElement(c.a,null)),n.a.createElement("p",{className:s.a.description},r)),n.a.createElement("a",{className:s.a.link,href:i}))};m.propTypes={itemData:u.a.arrayOf(u.a.shape({title:u.a.string.isRequired,description:u.a.string,link:u.a.string.isRequired,fluid:u.a.any})).isRequired};var p=m,f=function(e){var t=e.content;return n.a.createElement("div",{className:s.a.gridContainer},t.map((function(e){return n.a.createElement(p,{itemData:e})})))};f.propTypes={content:u.a.arrayOf(u.a.shape({title:u.a.string.isRequired,description:u.a.string,link:u.a.string.isRequired,fluid:u.a.any})).isRequired};t.a=f},wBlv:function(e,t,a){"use strict";a("JM9Q");var r=a("q1tI"),n=a.n(r),i=(a("Wbzz"),a("17x9")),o=a.n(i),l=a("QkGs"),s=a.n(l),c=function(e){var t=e.buttonText,a=e.link,r=e.isWhite,i=e.openInNewTab;return n.a.createElement("a",{href:a,className:r?s.a.whiteButton:s.a.primaryButton,target:i?"_blank":"",rel:"noopener noreferrer"},t)};c.propTypes={buttonText:o.a.string.isRequired,link:o.a.string.isRequired,isWhite:o.a.bool,openInNewTab:o.a.bool},c.defaultProps={isWhite:!1,openInNewTab:!1},t.a=c},zHhC:function(e,t,a){e.exports={parent:"spotify-embed-module--parent--lcrkl",iframeParent:"spotify-embed-module--iframeParent--RPkN4"}},zlGe:function(e,t,a){"use strict";a.r(t);var r=a("VbXa"),n=a.n(r),i=a("q1tI"),o=a.n(i),l=a("mwIZ"),s=a.n(l),c=a("EYWl"),d=a("Bl7J"),u=a("R8uD"),m=a("hn7R"),p=a.n(m),f=a("vbKG"),v=a("pMRN"),h=a("vrW2"),g=(a("FRg3"),a("kzGm"),a("wBlv")),b=a("Wbzz"),E=(a("9eSz"),a("uOxR")),w=a.n(E),y=(a("/eHF"),function(e){var t=e.podcast,a="/podcasts/beyond-the-blankets/"+t.slug;return o.a.createElement("div",{onClick:function(){return Object(b.d)(a)},className:w.a.alink,key:t.episodeName},o.a.createElement("div",{className:w.a.previewText},o.a.createElement("h3",{className:w.a.previewTitle},"Episode "+t.episodeNumber+": "+t.episodeName),o.a.createElement("div",{className:"richText"},void 0!==t.richDescription.json?Object(u.documentToReactComponents)(t.richDescription.json):o.a.createElement("p",null,"Error: Articles not found."))),o.a.createElement(g.a,{buttonText:"Listen now",link:a}))}),k=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e,t=s()(this,"props.data.allContentfulHeaderImage.nodes[0].image.fluid"),a=s()(this,"props.data.allContentfulPodcast.nodes"),r=[{title:"Browse podcast collaborations",link:"/podcast-collaborations",description:"View podcasts featuring guest appearances of some of our members.",fluid:t}];(e={})[f.BLOCKS.EMBEDDED_ASSET]=function(e){var t=e.data.target.fields;return o.a.createElement("img",{src:t.file["en-US"].url,style:{maxHeight:300,width:t.file["en-US"].details.image.width*(300/t.file["en-US"].details.image.height)},alt:t.description})};return o.a.createElement(d.a,{location:this.props.location},o.a.createElement(c.a,{title:"Listen to the Beyond the Blankets podcast",description:"Browse and listen to episodes of Beyond the Blankets, the official Blankets for T.O. podcast."}),o.a.createElement("div",{className:"white-background"},o.a.createElement(v.a,{imgFluid:t,headerTitle:"Beyond the Blankets",headerSubtitle:"Listen to the Beyond the Blankets podcast, the official podcast from Blankets for T.O."}),o.a.createElement("div",{className:"wrapper"},o.a.createElement("h1",{className:p.a.title},"Beyond the Blankets: The Official Podcast by Blankets for T.O."),a.map((function(e){return o.a.createElement(y,{podcast:e})})),o.a.createElement("h1",{className:p.a.title},"Other Podcasts"),o.a.createElement(h.a,{content:r}))))},t}(o.a.Component);t.default=k}}]);
//# sourceMappingURL=component---src-pages-podcasts-js-d22d66cd852854032dde.js.map