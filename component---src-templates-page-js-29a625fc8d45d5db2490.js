(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"D1b+":function(e,t,n){e.exports={updates:"article-preview-module--updates--2tWvO",previewParent:"article-preview-module--previewParent--zTD6v",preview:"article-preview-module--preview--35oKv",previewText:"article-preview-module--previewText--2t-lu",previewImage:"article-preview-module--previewImage--18UBZ",alink:"article-preview-module--alink--3Zy_j",previewTitle:"article-preview-module--previewTitle--dtVfR",previewDescription:"article-preview-module--previewDescription--andbH",previewPublishDate:"article-preview-module--previewPublishDate--1_Kqg",previewArticleType:"article-preview-module--previewArticleType--1Ykbp",tag:"article-preview-module--tag--1jiS7"}},IFRj:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){var n=t.left,r=t.right,a=t.up,o=t.down,i=t.top,l=t.bottom,s=t.mirror,c=t.opposite,d=(n?1:0)|(r?2:0)|(i||o?4:0)|(l||a?8:0)|(s?16:0)|(c?32:0)|(e?64:0);if(p.hasOwnProperty(d))return p[d];if(!s!=!(e&&c)){var m=[r,n,l,i,o,a];n=m[0],r=m[1],i=m[2],l=m[3],a=m[4],o=m[5]}var f,v=n||r,h=i||l||a||o,w=void 0,b=void 0,y=void 0,g=void 0,k=void 0,E=void 0,x=void 0,O=void 0,B=void 0,j=void 0,N=void 0,C=void 0,S=void 0;return e?(y=v?(r?"-":"")+"20px":0,g=h?(a||l?"":"-")+"10px":"0",k=(o||i?"":"-")+"20px",C=v?(n?"-":"")+"2000px":"0",S=h?(o||i?"-":"")+"2000px":"0"):(w=v?(n?"-":"")+"3000px":"0",b=h?(o||i?"-":"")+"3000px":"0",E=v?(r?"-":"")+"25px":"0",x=h?(a||l?"-":"")+"25px":"0",O=v?(n?"-":"")+"10px":"0",B=h?(o||i?"-":"")+"10px":"0",j=v?(r?"-":"")+"5px":"0",N=h?(a||l?"-":"")+"5px":"0"),f=v||h?e?"\n        20% {\n          transform: translate3d("+y+", "+g+", 0);\n          }\n        "+(h?"40%, 45% {\n            opacity: 1;\n            transform: translate3d(0, "+k+", 0);\n          }":"")+"\n          to {\n            opacity: 0;\n            transform: translate3d("+C+", "+S+", 0);\n        }\n      ":"from, 60%, 75%, 90%, to {\n        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n      }\n      from {\n        opacity: 0;\n        transform: translate3d("+w+", "+b+", 0);\n      }\n      60% {\n        opacity: 1;\n        transform: translate3d("+E+", "+x+", 0);\n      }\n      75% {\n        transform: translate3d("+O+", "+B+", 0);\n      }\n      90% {\n        transform: translate3d("+j+", "+N+", 0);\n      }\n      to {\n        transform: none;\n      }":e?"20% {\n          transform: scale3d(.9, .9, .9);\n        }\n        50%, 55% {\n          opacity: 1;\n          transform: scale3d(1.1, 1.1, 1.1);\n        }\n        to {\n          opacity: 0;\n          transform: scale3d(.3, .3, .3);\n      }":"from, 20%, 40%, 60%, 80%, to {\n        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n      }\n      0% {\n        opacity: 0;\n        transform: scale3d(.3, .3, .3);\n      }\n      20% {\n        transform: scale3d(1.1, 1.1, 1.1);\n      }\n      40% {\n        transform: scale3d(.9, .9, .9);\n      }\n      60% {\n        opacity: 1;\n        transform: scale3d(1.03, 1.03, 1.03);\n      }\n      80% {\n        transform: scale3d(.97, .97, .97);\n      }\n      to {\n        opacity: 1;\n        transform: scale3d(1, 1, 1);\n      }",p[d]=(0,u.animation)(f),p[d]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.defaults,t=e.children,n=(e.out,e.forever),o=e.timeout,i=e.duration,l=void 0===i?u.defaults.duration:i,s=e.delay,d=void 0===s?u.defaults.delay:s,p=e.count,m=void 0===p?u.defaults.count:p,f=r(e,["children","out","forever","timeout","duration","delay","count"]),v={make:a,duration:void 0===o?l:o,delay:d,forever:n,count:m,style:{animationFillMode:"both"},reverse:f.left};return(0,c.default)(f,v,v,t)}Object.defineProperty(t,"__esModule",{value:!0});var i,l=n("17x9"),s=n("eH+L"),c=(i=s)&&i.__esModule?i:{default:i},u=n("ar19"),d={out:l.bool,left:l.bool,right:l.bool,top:l.bool,bottom:l.bool,mirror:l.bool,opposite:l.bool,duration:l.number,timeout:l.number,delay:l.number,count:l.number,forever:l.bool},p={};o.propTypes=d,t.default=o,e.exports=t.default},L2L3:function(e,t,n){e.exports={title:"blog-post-module--title--taf5a",horizontalLine:"blog-post-module--horizontalLine--20qcL",publishDate:"blog-post-module--publishDate--ywUQM",browseAllButton:"blog-post-module--browseAllButton--3YqB5",links:"blog-post-module--links--3hIfu",bodyParent:"blog-post-module--bodyParent--30Mbn",body:"blog-post-module--body--3YIF0"}},QkGs:function(e,t,n){e.exports={whiteButton:"styled-button-module--whiteButton--LbBn9",primaryButton:"styled-button-module--primaryButton--33jVM",links:"styled-button-module--links--2A7r_"}},aWpR:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),i=n("9eSz"),l=n.n(i),s=n("D1b+"),c=n.n(s),u=(n("tANy"),n("17x9")),d=n.n(u),p=n("/eHF"),m=n.n(p),f=n("IFRj"),v=n.n(f),h=n("wBlv"),w=function(e){var t=e.article;return a.a.createElement("a",{onClick:function(){return Object(o.d)("/blog/"+t.slug)},className:c.a.alink,key:t.title},a.a.createElement("div",{className:c.a.preview},a.a.createElement("div",{className:c.a.previewImage},null!=t.imagePreview?a.a.createElement(l.a,{fluid:t.imagePreview.fluid,alt:t.imagePreview.description}):null),a.a.createElement("div",{className:c.a.previewText},a.a.createElement("small",{className:c.a.previewArticleType},t.articleType),a.a.createElement("h3",{className:c.a.previewTitle},t.title),a.a.createElement("small",{className:c.a.previewPublishDate},t.publishDate))))},b=function(e,t){var n=0;return a.a.createElement("div",{className:c.a.updates},a.a.createElement(v.a,{left:!0},a.a.createElement("h2",null,"Keep updated with our latest articles")),a.a.createElement(m.a,null,a.a.createElement("div",{className:c.a.previewParent},e.map((function(e,r){return e.node.slug===t||n>=3?null:(o=e,n++,a.a.createElement(w,{article:o.node,key:o.node.title}));var o})))),a.a.createElement(m.a,{delay:500},a.a.createElement(h.a,{buttonText:"Browse all updates",link:"/blog"})))},y=function(e){var t=e.excludeSlug;return a.a.createElement(o.b,{query:"3597298858",render:function(e){return b(e.allContentfulBlogPost.edges,t)}})};y.propTypes={excludeSlug:d.a.string},y.defaultProps={excludeSlug:""};t.a=y},ef1B:function(e,t,n){"use strict";n("JM9Q");var r=n("VbXa"),a=n.n(r),o=n("q1tI"),i=n.n(o),l=n("17x9"),s=n.n(l),c=n("ldhG"),u=n.n(c);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=Object(o.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,o=void 0===a?24:a,l=p(e,["color","size"]);return i.a.createElement("svg",d({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),i.a.createElement("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}))}));m.displayName="Twitter";var f=m;function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var w=Object(o.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,o=void 0===a?24:a,l=h(e,["color","size"]);return i.a.createElement("svg",v({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),i.a.createElement("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}))}));w.displayName="Facebook";var b=w,y=n("isoJ"),g=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={linkCopied:!1,timer:-1},t.copyLink=function(){if(!t.state.linkCopied){var e=document.getElementById("linkAddress");e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),t.setState({linkCopied:!0},(function(){var e=setTimeout((function(){t.setState({linkCopied:!1,timer:e})}),3e3)}))}},t}a()(t,e);var n=t.prototype;return n.render=function(){var e=this;return i.a.createElement("div",{className:u.a.linkContainer},i.a.createElement("div",{className:u.a.socials},i.a.createElement("a",{className:u.a.twitterShareButton,href:"https://twitter.com/intent/tweet?url="+encodeURIComponent(this.props.location),target:"_blank",title:"Share on Twitter"},i.a.createElement(f,{size:15}),"Tweet"),i.a.createElement("a",{className:u.a.twitterShareButton,href:"https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(this.props.location),target:"_blank",title:"Share on Facebook"},i.a.createElement(b,{size:15}),"Share")),i.a.createElement("div",{className:u.a.link},i.a.createElement("div",{className:u.a.linkField},i.a.createElement("p",{className:u.a.linkCopyButton},i.a.createElement(y.a,{size:15,color:"white"})),i.a.createElement("input",{type:"text",value:this.props.location,id:"linkAddress",readOnly:!0}),i.a.createElement("button",{className:this.state.linkCopied?u.a.linkFieldButtonClicked:u.a.linkFieldButtonNormal,onClick:function(){return e.copyLink()}},this.state.linkCopied?"Copied!":"Copy link"))))},n.componentWillUnmount=function(){clearTimeout(this.state.timer)},t}(i.a.Component);g.propTypes={location:s.a.string.isRequired};t.a=g},isoJ:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,l=e.size,s=void 0===l?24:l,c=i(e,["color","size"]);return a.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),a.a.createElement("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),a.a.createElement("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}))}));l.displayName="Link",t.a=l},ldhG:function(e,t,n){e.exports={linkContainer:"link-sharing-module--linkContainer--3k-_h",socials:"link-sharing-module--socials--1eBtp",linkField:"link-sharing-module--linkField--37aoQ",linkFieldButtonNormal:"link-sharing-module--linkFieldButtonNormal---4oGI",linkFieldButtonClicked:"link-sharing-module--linkFieldButtonClicked--3I7vL",link:"link-sharing-module--link--30K-w",facebookShareButton:"link-sharing-module--facebookShareButton--UeduP",twitterShareButton:"link-sharing-module--twitterShareButton--2OlIh",linkCopyButton:"link-sharing-module--linkCopyButton--2RZSJ"}},sweJ:function(e,t,n){"use strict";n.r(t);var r=n("VbXa"),a=n.n(r),o=n("q1tI"),i=n.n(o),l=n("EYWl"),s=n("mwIZ"),c=n.n(s),u=n("Bl7J"),d=n("aWpR"),p=n("ef1B"),m=n("vbKG"),f=n("R8uD"),v=n("L2L3"),h=n.n(v),w=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e,t=c()(this.props,"data.contentfulPage"),n={renderNode:(e={},e[m.BLOCKS.EMBEDDED_ASSET]=function(e){var t=e.data.target.fields;return i.a.createElement("img",{src:t.file["en-US"].url,style:{width:t.file["en-US"].details.image.width},alt:t.description})},e)},r=[i.a.createElement("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}),i.a.createElement("div",{id:"fb-root"}),i.a.createElement("script",{async:!0,defer:!0,crossorigin:"anonymous",src:"https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0",nonce:"9bOR49xF"})];return i.a.createElement(u.a,{location:this.props.location},i.a.createElement("div",{className:"white-background"},i.a.createElement(l.a,{title:t.title,metaType:"article",description:t.description.childMarkdownRemark.rawMarkdownBody,childElements:r,doNotCrawl:!t.enableSearchCrawling,metaImage:t.imagePreview.fluid.src}),i.a.createElement("div",{className:"wrapper"},i.a.createElement("h1",{className:h.a.title},t.title),i.a.createElement("div",{className:"richText",styles:{maxWidth:"800px"}},null!=t.richTextBody?Object(f.documentToReactComponents)(t.richTextBody.json,n):i.a.createElement("p",null,"Error: Article not found.")),i.a.createElement(p.a,{location:"https://blanketsforto.ca/blog/"+t.slug}),i.a.createElement("hr",{className:h.a.horizontalLine}),i.a.createElement(d.a,{excludeSlug:t.slug}))))},t}(i.a.Component);t.default=w},wBlv:function(e,t,n){"use strict";n("JM9Q");var r=n("q1tI"),a=n.n(r),o=(n("Wbzz"),n("17x9")),i=n.n(o),l=n("QkGs"),s=n.n(l),c=function(e){var t=e.buttonText,n=e.link,r=e.isWhite,o=e.openInNewTab;return a.a.createElement("a",{href:n,className:r?s.a.whiteButton:s.a.primaryButton,target:o?"_blank":"",rel:"noopener noreferrer"},t)};c.propTypes={buttonText:i.a.string.isRequired,link:i.a.string.isRequired,isWhite:i.a.bool,openInNewTab:i.a.bool},c.defaultProps={isWhite:!1,openInNewTab:!1},t.a=c}}]);
//# sourceMappingURL=component---src-templates-page-js-29a625fc8d45d5db2490.js.map