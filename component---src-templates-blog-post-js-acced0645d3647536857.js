(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"5jch":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("EVdn"),i=n.n(o),l=n("zw02"),c=n.n(l);t.a=function(e){var t=e.fields,n=e.hideCaption,r=void 0!==n&&n,o="undefined"!=typeof window?i()(window).width():760,l=Math.min(o,760),s="https:"+t.file["en-US"].url+"?w="+String(l),u=void 0!==t.description?t.description["en-US"]:"",d=t.title["en-US"];return a.a.createElement("figure",{className:c.a.imgFigure,style:{width:l}},a.a.createElement("img",{src:s,alt:d}),!r&&a.a.createElement("figcaption",null,u))}},"5l6m":function(e,t,n){"use strict";var r=n("+uX7"),a=n("m/aQ"),o=n("17+C"),i=n("WD+B"),l=n("gQbX"),c=n("4jnk"),s=n("5Cvy"),u=n("mh2x"),d=Math.max,p=Math.min,m=Math.floor,f=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g;r("replace",2,(function(e,t,n,r){var h=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=r.REPLACE_KEEPS_$0,g=h?"$":"$0";return[function(n,r){var a=c(this),o=null==n?void 0:n[e];return void 0!==o?o.call(n,a,r):t.call(String(a),n,r)},function(e,r){if(!h&&b||"string"==typeof r&&-1===r.indexOf(g)){var o=n(t,e,this,r);if(o.done)return o.value}var c=a(e),m=String(this),f="function"==typeof r;f||(r=String(r));var v=c.global;if(v){var w=c.unicode;c.lastIndex=0}for(var k=[];;){var E=u(c,m);if(null===E)break;if(k.push(E),!v)break;""===String(E[0])&&(c.lastIndex=s(m,i(c.lastIndex),w))}for(var x,O="",j=0,S=0;S<k.length;S++){E=k[S];for(var B=String(E[0]),N=d(p(l(E.index),m.length),0),C=[],P=1;P<E.length;P++)C.push(void 0===(x=E[P])?x:String(x));var T=E.groups;if(f){var I=[B].concat(C,N,m);void 0!==T&&I.push(T);var z=String(r.apply(void 0,I))}else z=y(B,m,N,C,T,r);N>=j&&(O+=m.slice(j,N)+z,j=N+B.length)}return O+m.slice(j)}];function y(e,n,r,a,i,l){var c=r+e.length,s=a.length,u=v;return void 0!==i&&(i=o(i),u=f),t.call(l,u,(function(t,o){var l;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,r);case"'":return n.slice(c);case"<":l=i[o.slice(1,-1)];break;default:var u=+o;if(0===u)return t;if(u>s){var d=m(u/10);return 0===d?t:d<=s?void 0===a[d-1]?o.charAt(1):a[d-1]+o.charAt(1):t}l=a[u-1]}return void 0===l?"":l}))}}))},"5xdH":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,l=e.size,c=void 0===l?24:l,s=i(e,["color","size"]);return a.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),a.a.createElement("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),a.a.createElement("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"}))}));l.displayName="Copy",t.a=l},AAQS:function(e,t,n){"use strict";var r=n("48MS"),a=n("WD+B"),o=n("ehR5"),i=function(e,t,n,l,c,s,u,d){for(var p,m=c,f=0,v=!!u&&o(u,d,3);f<l;){if(f in n){if(p=v?v(n[f],f,t):n[f],s>0&&r(p))m=i(e,t,p,a(p.length),m,s-1)-1;else{if(m>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[m]=p}m++}f++}return m};e.exports=i},"D1b+":function(e,t,n){e.exports={updates:"article-preview-module--updates--2tWvO",previewParent:"article-preview-module--previewParent--zTD6v",preview:"article-preview-module--preview--35oKv",previewText:"article-preview-module--previewText--2t-lu",previewImage:"article-preview-module--previewImage--18UBZ",alink:"article-preview-module--alink--3Zy_j",previewTitle:"article-preview-module--previewTitle--dtVfR",previewDescription:"article-preview-module--previewDescription--andbH",previewPublishDate:"article-preview-module--previewPublishDate--1_Kqg",previewArticleType:"article-preview-module--previewArticleType--1Ykbp",tag:"article-preview-module--tag--1jiS7"}},FRg3:function(e,t,n){"use strict";n("5l6m"),n("p4ji"),n("JM9Q");var r=n("q1tI"),a=n.n(r),o=(n("wBlv"),n("zHhC")),i=n.n(o);t.a=function(e){var t=e.node,n=void 0===t?void 0:t,r=e.link,o=void 0===r?void 0:r;void 0!==n&&(o=n.data.target.fields.link["en-US"]);var l=o.replace("episode","embed-podcast/episode").split("?")[0];return a.a.createElement("div",{className:i.a.parent},a.a.createElement("iframe",{src:l,width:"100%",height:"232",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"}))}},IFRj:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){var n=t.left,r=t.right,a=t.up,o=t.down,i=t.top,l=t.bottom,c=t.mirror,s=t.opposite,d=(n?1:0)|(r?2:0)|(i||o?4:0)|(l||a?8:0)|(c?16:0)|(s?32:0)|(e?64:0);if(p.hasOwnProperty(d))return p[d];if(!c!=!(e&&s)){var m=[r,n,l,i,o,a];n=m[0],r=m[1],i=m[2],l=m[3],a=m[4],o=m[5]}var f,v=n||r,h=i||l||a||o,b=void 0,g=void 0,y=void 0,w=void 0,k=void 0,E=void 0,x=void 0,O=void 0,j=void 0,S=void 0,B=void 0,N=void 0,C=void 0;return e?(y=v?(r?"-":"")+"20px":0,w=h?(a||l?"":"-")+"10px":"0",k=(o||i?"":"-")+"20px",N=v?(n?"-":"")+"2000px":"0",C=h?(o||i?"-":"")+"2000px":"0"):(b=v?(n?"-":"")+"3000px":"0",g=h?(o||i?"-":"")+"3000px":"0",E=v?(r?"-":"")+"25px":"0",x=h?(a||l?"-":"")+"25px":"0",O=v?(n?"-":"")+"10px":"0",j=h?(o||i?"-":"")+"10px":"0",S=v?(r?"-":"")+"5px":"0",B=h?(a||l?"-":"")+"5px":"0"),f=v||h?e?"\n        20% {\n          transform: translate3d("+y+", "+w+", 0);\n          }\n        "+(h?"40%, 45% {\n            opacity: 1;\n            transform: translate3d(0, "+k+", 0);\n          }":"")+"\n          to {\n            opacity: 0;\n            transform: translate3d("+N+", "+C+", 0);\n        }\n      ":"from, 60%, 75%, 90%, to {\n        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n      }\n      from {\n        opacity: 0;\n        transform: translate3d("+b+", "+g+", 0);\n      }\n      60% {\n        opacity: 1;\n        transform: translate3d("+E+", "+x+", 0);\n      }\n      75% {\n        transform: translate3d("+O+", "+j+", 0);\n      }\n      90% {\n        transform: translate3d("+S+", "+B+", 0);\n      }\n      to {\n        transform: none;\n      }":e?"20% {\n          transform: scale3d(.9, .9, .9);\n        }\n        50%, 55% {\n          opacity: 1;\n          transform: scale3d(1.1, 1.1, 1.1);\n        }\n        to {\n          opacity: 0;\n          transform: scale3d(.3, .3, .3);\n      }":"from, 20%, 40%, 60%, 80%, to {\n        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n      }\n      0% {\n        opacity: 0;\n        transform: scale3d(.3, .3, .3);\n      }\n      20% {\n        transform: scale3d(1.1, 1.1, 1.1);\n      }\n      40% {\n        transform: scale3d(.9, .9, .9);\n      }\n      60% {\n        opacity: 1;\n        transform: scale3d(1.03, 1.03, 1.03);\n      }\n      80% {\n        transform: scale3d(.97, .97, .97);\n      }\n      to {\n        opacity: 1;\n        transform: scale3d(1, 1, 1);\n      }",p[d]=(0,u.animation)(f),p[d]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.defaults,t=e.children,n=(e.out,e.forever),o=e.timeout,i=e.duration,l=void 0===i?u.defaults.duration:i,c=e.delay,d=void 0===c?u.defaults.delay:c,p=e.count,m=void 0===p?u.defaults.count:p,f=r(e,["children","out","forever","timeout","duration","delay","count"]),v={make:a,duration:void 0===o?l:o,delay:d,forever:n,count:m,style:{animationFillMode:"both"},reverse:f.left};return(0,s.default)(f,v,v,t)}Object.defineProperty(t,"__esModule",{value:!0});var i,l=n("17x9"),c=n("eH+L"),s=(i=c)&&i.__esModule?i:{default:i},u=n("ar19"),d={out:l.bool,left:l.bool,right:l.bool,top:l.bool,bottom:l.bool,mirror:l.bool,opposite:l.bool,duration:l.number,timeout:l.number,delay:l.number,count:l.number,forever:l.bool},p={};o.propTypes=d,t.default=o,e.exports=t.default},L2L3:function(e,t,n){e.exports={title:"blog-post-module--title--taf5a",horizontalLine:"blog-post-module--horizontalLine--20qcL",publishDate:"blog-post-module--publishDate--ywUQM",browseAllButton:"blog-post-module--browseAllButton--3YqB5",links:"blog-post-module--links--3hIfu",bodyParent:"blog-post-module--bodyParent--30Mbn",body:"blog-post-module--body--3YIF0"}},LOWo:function(e,t,n){n("uKph")("flat")},QkGs:function(e,t,n){e.exports={whiteButton:"styled-button-module--whiteButton--LbBn9",primaryButton:"styled-button-module--primaryButton--33jVM",links:"styled-button-module--links--2A7r_"}},UZBW:function(e,t,n){e.exports={parent:"youtube-embed-module--parent--3tlER",iframeParent:"youtube-embed-module--iframeParent--2RUai"}},aWpR:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),i=n("9eSz"),l=n.n(i),c=n("D1b+"),s=n.n(c),u=(n("tANy"),n("17x9")),d=n.n(u),p=n("/eHF"),m=n.n(p),f=n("IFRj"),v=n.n(f),h=n("wBlv"),b=function(e){var t=e.article,n=e.index;return a.a.createElement(m.a,{delay:500*n},a.a.createElement("a",{onClick:function(){return Object(o.d)("/blog/"+t.slug)},className:s.a.alink,key:t.title},a.a.createElement("div",{className:s.a.preview},a.a.createElement("div",{className:s.a.previewImage},null!=t.imagePreview?a.a.createElement(l.a,{fluid:t.imagePreview.fluid,alt:t.imagePreview.description}):null),a.a.createElement("div",{className:s.a.previewText},a.a.createElement("small",{className:s.a.previewArticleType},t.articleType),a.a.createElement("h3",{className:s.a.previewTitle},t.title),a.a.createElement("small",{className:s.a.previewPublishDate},t.publishDate)))))},g=function(e,t){var n=0;return a.a.createElement("div",{className:s.a.updates},a.a.createElement(v.a,{left:!0},a.a.createElement("h2",null,"Keep updated with our latest articles")),a.a.createElement(m.a,null,a.a.createElement("div",{className:s.a.previewParent},e.map((function(e,r){return e.node.slug===t||n>=3?null:function(e,t){return n++,a.a.createElement(b,{article:e.node,key:e.node.title,index:t})}(e,r)})))),a.a.createElement(m.a,{delay:500},a.a.createElement(h.a,{buttonText:"Browse all updates",link:"/blog"})))},y=function(e){var t=e.excludeSlug;return a.a.createElement(o.b,{query:"3597298858",render:function(e){return g(e.allContentfulBlogPost.edges,t)}})};y.propTypes={excludeSlug:d.a.string},y.defaultProps={excludeSlug:""};t.a=y},bNlK:function(e,t,n){"use strict";var r=n("ZS3K"),a=n("AAQS"),o=n("17+C"),i=n("WD+B"),l=n("gQbX"),c=n("86Yh");r({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=o(this),n=i(t.length),r=c(t,0);return r.length=a(r,t,t,n,0,void 0===e?1:l(e)),r}})},ef1B:function(e,t,n){"use strict";n("JM9Q");var r=n("VbXa"),a=n.n(r),o=n("q1tI"),i=n.n(o),l=n("17x9"),c=n.n(l),s=n("ldhG"),u=n.n(s);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=Object(o.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,o=void 0===a?24:a,l=p(e,["color","size"]);return i.a.createElement("svg",d({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),i.a.createElement("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}))}));m.displayName="Twitter";var f=m;function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=Object(o.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,o=void 0===a?24:a,l=h(e,["color","size"]);return i.a.createElement("svg",v({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),i.a.createElement("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}))}));b.displayName="Facebook";var g=b;function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var k=Object(o.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,o=void 0===a?24:a,l=w(e,["color","size"]);return i.a.createElement("svg",y({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),i.a.createElement("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),i.a.createElement("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}))}));k.displayName="Link";var E=k;function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var j=Object(o.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,o=void 0===a?24:a,l=O(e,["color","size"]);return i.a.createElement("svg",x({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),i.a.createElement("polyline",{points:"20 6 9 17 4 12"}))}));j.displayName="Check";var S=j,B=n("5xdH"),N=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={linkCopied:!1,timer:-1},t.copyLink=function(){if(!t.state.linkCopied){var e=document.getElementById("linkAddress");e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),t.setState({linkCopied:!0},(function(){var e=setTimeout((function(){t.setState({linkCopied:!1,timer:e})}),3e3)}))}},t}a()(t,e);var n=t.prototype;return n.render=function(){var e=this;return i.a.createElement("div",{className:u.a.linkContainer},i.a.createElement("div",{className:u.a.socials},i.a.createElement("a",{className:u.a.twitterShareButton,href:"https://twitter.com/intent/tweet?url="+encodeURIComponent(this.props.location),target:"_blank",title:"Share on Twitter"},i.a.createElement(f,{size:20}),"Tweet"),i.a.createElement("a",{className:u.a.twitterShareButton,href:"https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(this.props.location),target:"_blank",title:"Share on Facebook"},i.a.createElement(g,{size:20}),"Share")),i.a.createElement("div",{className:u.a.link},i.a.createElement("div",{className:u.a.linkField},i.a.createElement("p",{className:u.a.linkIcon,onClick:this.state.linkCopied?function(){}:function(){return e.copyLink()},title:"Copy this page's link"},i.a.createElement(E,{size:20,color:"white"})),i.a.createElement("input",{type:"text",value:this.props.location,id:"linkAddress",readOnly:!0}),i.a.createElement("p",{className:u.a.linkCopyButton,onClick:this.state.linkCopied?function(){}:function(){return e.copyLink()},title:"Copy this page's link"},this.state.linkCopied?i.a.createElement(S,{color:"limegreen",size:25}):i.a.createElement(B.a,{size:20,color:"white"})))))},n.componentWillUnmount=function(){clearTimeout(this.state.timer)},t}(i.a.Component);N.propTypes={location:c.a.string.isRequired};t.a=N},kzGm:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("UZBW"),i=n.n(o);t.a=function(e){var t=e.node.data.target.fields.watchKey["en-US"];return a.a.createElement("div",{className:i.a.parent},a.a.createElement("iframe",{src:"https://www.youtube.com/embed/"+t,width:"560",height:"315",frameborder:"0"}))}},ldhG:function(e,t,n){e.exports={linkContainer:"link-sharing-module--linkContainer--3k-_h",socials:"link-sharing-module--socials--1eBtp",linkField:"link-sharing-module--linkField--37aoQ",linkFieldButtonNormal:"link-sharing-module--linkFieldButtonNormal---4oGI",linkFieldButtonClicked:"link-sharing-module--linkFieldButtonClicked--3I7vL",link:"link-sharing-module--link--30K-w",facebookShareButton:"link-sharing-module--facebookShareButton--UeduP",twitterShareButton:"link-sharing-module--twitterShareButton--2OlIh",linkIcon:"link-sharing-module--linkIcon--1Cfjy",linkCopyButton:"link-sharing-module--linkCopyButton--2RZSJ"}},wBlv:function(e,t,n){"use strict";n("JM9Q");var r=n("q1tI"),a=n.n(r),o=(n("Wbzz"),n("17x9")),i=n.n(o),l=n("QkGs"),c=n.n(l),s=function(e){var t=e.buttonText,n=e.link,r=e.isWhite,o=e.openInNewTab;return a.a.createElement("a",{href:n,className:r?c.a.whiteButton:c.a.primaryButton,target:o?"_blank":"",rel:"noopener noreferrer"},t)};s.propTypes={buttonText:i.a.string.isRequired,link:i.a.string.isRequired,isWhite:i.a.bool,openInNewTab:i.a.bool},s.defaultProps={isWhite:!1,openInNewTab:!1},t.a=s},yZlL:function(e,t,n){"use strict";n.r(t);n("6bMU");var r=n("VbXa"),a=n.n(r),o=n("q1tI"),i=n.n(o),l=(n("Wbzz"),n("EYWl")),c=n("mwIZ"),s=n.n(c),u=n("Bl7J"),d=n("aWpR"),p=n("ef1B"),m=n("vbKG"),f=n("R8uD"),v=n("L2L3"),h=n.n(v),b=n("tANy"),g=n("5jch"),y=n("FRg3"),w=n("kzGm"),k=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e,t=s()(this.props,"data.contentfulBlogPost"),n={renderNode:(e={},e[m.BLOCKS.EMBEDDED_ASSET]=function(e){var t=e.data.target.fields;if(t.file["en-US"].contentType.startsWith("image/"))return i.a.createElement(g.a,{fields:t})},e[m.BLOCKS.EMBEDDED_ENTRY]=function(e){"inlineSpotifyEmbed"===e.data.target.sys.contentType.sys.id?y.a:"youtubeEmbed"===e.data.target.sys.contentType.sys.id&&w.a},e)},r=[i.a.createElement("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8",key:"twitter-widget"}),i.a.createElement("div",{id:"fb-root",key:"fb-root"}),i.a.createElement("script",{async:!0,defer:!0,crossorigin:"anonymous",src:"https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0",nonce:"9bOR49xF",key:"facebook-widget"})];return i.a.createElement(u.a,{location:this.props.location},i.a.createElement("div",{className:"white-background"},i.a.createElement(l.a,{title:t.title,metaType:"article",description:t.publishDate+" - "+t.description.childMarkdownRemark.rawMarkdownBody,childElements:r,metaImage:t.socialMediaLinkPreview.file.url,doNotCrawl:Boolean(t.previewOnly)}),i.a.createElement("div",{className:"wrapper"},i.a.createElement("h1",{className:h.a.title},t.title),i.a.createElement(b.a,{tags:t.tags,clickable:!0}),i.a.createElement("p",{className:h.a.publishDate},"by ",t.authorName),i.a.createElement("p",{className:h.a.publishDate},t.publishDate),i.a.createElement("div",{className:"richText "+h.a.bodyParent},i.a.createElement("div",{className:h.a.body},null!=t.richTextBody?Object(f.documentToReactComponents)(t.richTextBody.json,n):i.a.createElement("p",null,"Error: Article not found."))),i.a.createElement(p.a,{location:"https://blanketsforto.ca/blog/"+t.slug}),i.a.createElement("hr",{className:h.a.horizontalLine}),i.a.createElement(d.a,{excludeSlug:t.slug}))))},t}(i.a.Component);t.default=k},zHhC:function(e,t,n){e.exports={parent:"spotify-embed-module--parent--lcrkl",iframeParent:"spotify-embed-module--iframeParent--RPkN4"}},zw02:function(e,t,n){e.exports={imgFigure:"captioned-figure-module--imgFigure--1vWHd"}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-acced0645d3647536857.js.map