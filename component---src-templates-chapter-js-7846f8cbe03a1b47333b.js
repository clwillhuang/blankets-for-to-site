(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"3jNO":function(e,t,n){var r=n("ehR5"),a=n("8mzz"),o=n("17+C"),i=n("WD+B"),l=n("86Yh"),c=[].push,s=function(e){var t=1==e,n=2==e,s=3==e,u=4==e,f=6==e,p=7==e,d=5==e||f;return function(m,h,v,g){for(var y,k,w=o(m),b=a(w),E=r(h,v,3),O=i(b.length),S=0,C=g||l,j=t?C(m,O):n||p?C(m,0):void 0;O>S;S++)if((d||S in b)&&(k=E(y=b[S],S,w),e))if(t)j[S]=k;else if(k)switch(e){case 3:return!0;case 5:return y;case 6:return S;case 2:c.call(j,y)}else switch(e){case 4:return!1;case 7:c.call(j,y)}return f?-1:s||u?u:j}};e.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},"48MS":function(e,t,n){var r=n("bmrq");e.exports=Array.isArray||function(e){return"Array"==r(e)}},"5jch":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("EVdn"),i=n.n(o),l=n("zw02"),c=n.n(l);t.a=function(e){var t=e.fields,n=e.hideCaption,r=void 0!==n&&n,o="undefined"!=typeof window?i()(window).width():760,l=Math.min(o,760),s="https:"+t.file["en-US"].url+"?w="+String(l);console.log(t);var u=void 0!==t.description?t.description["en-US"]:"",f=t.title["en-US"];return a.a.createElement("figure",{className:c.a.imgFigure,style:{width:l}},a.a.createElement("img",{src:s,alt:f}),!r&&a.a.createElement("figcaption",null,u))}},"86Yh":function(e,t,n){var r=n("ckLD"),a=n("48MS"),o=n("QD2z")("species");e.exports=function(e,t){var n;return a(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!a(n.prototype)?r(n)&&null===(n=n[o])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},AAQS:function(e,t,n){"use strict";var r=n("48MS"),a=n("WD+B"),o=n("ehR5"),i=function(e,t,n,l,c,s,u,f){for(var p,d=c,m=0,h=!!u&&o(u,f,3);m<l;){if(m in n){if(p=h?h(n[m],m,t):n[m],s>0&&r(p))d=i(e,t,p,a(p.length),d,s-1)-1;else{if(d>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[d]=p}d++}m++}return d};e.exports=i},CwS1:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,l=e.size,c=void 0===l?24:l,s=i(e,["color","size"]);return a.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),a.a.createElement("polyline",{points:"15 18 9 12 15 6"}))}));l.displayName="ChevronLeft",t.a=l},LOWo:function(e,t,n){n("uKph")("flat")},Z7m2:function(e,t,n){"use strict";var r=n("ZS3K"),a=n("3jNO").find,o=n("uKph"),i=n("xvWs"),l=!0,c=i("find");"find"in[]&&Array(1).find((function(){l=!1})),r({target:"Array",proto:!0,forced:l||!c},{find:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),o("find")},bNlK:function(e,t,n){"use strict";var r=n("ZS3K"),a=n("AAQS"),o=n("17+C"),i=n("WD+B"),l=n("gQbX"),c=n("86Yh");r({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=o(this),n=i(t.length),r=c(t,0);return r.length=a(r,t,t,n,0,void 0===e?1:l(e)),r}})},ef1B:function(e,t,n){"use strict";n("JM9Q");var r=n("VbXa"),a=n.n(r),o=n("q1tI"),i=n.n(o),l=n("17x9"),c=n.n(l),s=n("ldhG"),u=n.n(s);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=Object(o.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,o=void 0===a?24:a,l=p(e,["color","size"]);return i.a.createElement("svg",f({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),i.a.createElement("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}))}));d.displayName="Twitter";var m=d;function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=Object(o.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,o=void 0===a?24:a,l=v(e,["color","size"]);return i.a.createElement("svg",h({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),i.a.createElement("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}))}));g.displayName="Facebook";var y=g,k=n("isoJ"),w=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={linkCopied:!1,timer:-1},t.copyLink=function(){if(!t.state.linkCopied){var e=document.getElementById("linkAddress");e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),t.setState({linkCopied:!0},(function(){var e=setTimeout((function(){t.setState({linkCopied:!1,timer:e})}),3e3)}))}},t}a()(t,e);var n=t.prototype;return n.render=function(){var e=this;return i.a.createElement("div",{className:u.a.linkContainer},i.a.createElement("div",{className:u.a.socials},i.a.createElement("a",{className:u.a.twitterShareButton,href:"https://twitter.com/intent/tweet?url="+encodeURIComponent(this.props.location),target:"_blank",title:"Share on Twitter"},i.a.createElement(m,{size:15}),"Tweet"),i.a.createElement("a",{className:u.a.twitterShareButton,href:"https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(this.props.location),target:"_blank",title:"Share on Facebook"},i.a.createElement(y,{size:15}),"Share")),i.a.createElement("div",{className:u.a.link},i.a.createElement("div",{className:u.a.linkField},i.a.createElement("p",{className:u.a.linkCopyButton},i.a.createElement(k.a,{size:15,color:"white"})),i.a.createElement("input",{type:"text",value:this.props.location,id:"linkAddress",readOnly:!0}),i.a.createElement("button",{className:this.state.linkCopied?u.a.linkFieldButtonClicked:u.a.linkFieldButtonNormal,onClick:function(){return e.copyLink()}},this.state.linkCopied?"Copied!":"Copy link"))))},n.componentWillUnmount=function(){clearTimeout(this.state.timer)},t}(i.a.Component);w.propTypes={location:c.a.string.isRequired};t.a=w},h6GW:function(e,t,n){"use strict";n.r(t);n("Z7m2"),n("6bMU");var r=n("VbXa"),a=n.n(r),o=n("q1tI"),i=n.n(o),l=(n("Wbzz"),n("9eSz")),c=n.n(l),s=n("EYWl"),u=n("mwIZ"),f=n.n(u),p=n("Bl7J"),d=n("ef1B"),m=n("vbKG"),h=n("R8uD"),v=n("lYvg"),g=n.n(v),y=n("uAwv"),k=n("ue6a"),w=n("5jch"),b=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e,t=f()(this.props,"data.contentfulBtoChapter"),n=t.slug,r=t.chapterName,a=t.location,o=t.childContentfulBtoChapterDescriptionRichTextNode,l=t.instagramUsername,u=t.emailAddress,v=t.membershipFormLink,b=t.chapterLogo,E=t.chapterLogoFluid,O=k.contactTemplates,S=[{platform:"Email",linkSuffix:u,displayText:u,entry:u},{platform:"Instagram",linkSuffix:l,displayText:"@"+l,entry:l}].filter((function(e){return null!=e.entry})),C={renderNode:(e={},e[m.BLOCKS.EMBEDDED_ASSET]=function(e){var t=e.data.target.fields;if(t.file["en-US"].contentType.startsWith("image/"))return i.a.createElement(w.a,{fields:t})},e)},j=[i.a.createElement("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}),i.a.createElement("div",{id:"fb-root"}),i.a.createElement("script",{async:!0,defer:!0,crossorigin:"anonymous",src:"https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0",nonce:"9bOR49xF"})];return i.a.createElement(p.a,{location:this.props.location},i.a.createElement("div",{className:"white-background"},i.a.createElement(s.a,{title:r,metaType:"article",description:"Connect with "+r+", the official Blankets for T.O. local chapter at "+a,childElements:j,metaImage:b.file.url,doNotCrawl:!0}),i.a.createElement("div",{className:"wrapper"},i.a.createElement("h1",{className:g.a.title},r),i.a.createElement("div",{className:g.a.horizontal},i.a.createElement("div",{className:g.a.logo},i.a.createElement(c.a,{fluid:E.fluid})),i.a.createElement("div",{className:g.a.info},i.a.createElement("h4",{className:g.a.subtitle},"Location"),i.a.createElement("p",{className:g.a.subtitleContent},a),i.a.createElement("h4",{className:g.a.subtitle},"Membership Application Link"),v?i.a.createElement("a",{href:v},"Access the application form here."):i.a.createElement("p",{className:g.a.subtitleContent},"Please contact the chapter via email or social media for how to join and contribute."),i.a.createElement("h4",{className:g.a.subtitle},"Contact Links"),S.map((function(e){var t=O.find((function(t){return t.platform===e.platform}));return i.a.createElement("div",{className:g.a.socialMediaEntry,key:t.platform},i.a.createElement("a",{href:""+t.linkRoot+e.linkSuffix,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:t.icon,alt:t.platform+"Icon"}),e.displayText))})))),i.a.createElement("div",{className:"richText"},null!=o?Object(h.documentToReactComponents)(o.json,C):i.a.createElement("p",null,"Error: Description not found.")),i.a.createElement(y.a,{text:"View other chapters",link:"/chapters"}),i.a.createElement(d.a,{location:"https://blanketsforto.ca/chapter/"+n}))))},t}(i.a.Component);t.default=b},isoJ:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,l=e.size,c=void 0===l?24:l,s=i(e,["color","size"]);return a.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),a.a.createElement("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),a.a.createElement("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}))}));l.displayName="Link",t.a=l},jOk4:function(e,t,n){e.exports={arrowStyles:"back-arrow-module--arrowStyles--3Z1dG"}},lYvg:function(e,t,n){e.exports={title:"chapter-module--title--1bfnp",subtitle:"chapter-module--subtitle--3Ys3y",descriptionHeader:"chapter-module--descriptionHeader--jhG3D",subtitleContent:"chapter-module--subtitleContent--1wsRN",info:"chapter-module--info--3fyt5",horizontal:"chapter-module--horizontal--3IuX8",logo:"chapter-module--logo--1-qZX",socialMediaEntry:"chapter-module--socialMediaEntry--3VHgK"}},ldhG:function(e,t,n){e.exports={linkContainer:"link-sharing-module--linkContainer--3k-_h",socials:"link-sharing-module--socials--1eBtp",linkField:"link-sharing-module--linkField--37aoQ",linkFieldButtonNormal:"link-sharing-module--linkFieldButtonNormal---4oGI",linkFieldButtonClicked:"link-sharing-module--linkFieldButtonClicked--3I7vL",link:"link-sharing-module--link--30K-w",facebookShareButton:"link-sharing-module--facebookShareButton--UeduP",twitterShareButton:"link-sharing-module--twitterShareButton--2OlIh",linkCopyButton:"link-sharing-module--linkCopyButton--2RZSJ"}},uAwv:function(e,t,n){"use strict";n("JM9Q");var r=n("q1tI"),a=n.n(r),o=n("jOk4"),i=n.n(o),l=n("CwS1");t.a=function(e){var t=e.text,n=e.link;return a.a.createElement("a",{href:n,className:i.a.arrowStyles},a.a.createElement(l.a,null),t)}},zw02:function(e,t,n){e.exports={imgFigure:"captioned-figure-module--imgFigure--1vWHd"}}}]);
//# sourceMappingURL=component---src-templates-chapter-js-7846f8cbe03a1b47333b.js.map