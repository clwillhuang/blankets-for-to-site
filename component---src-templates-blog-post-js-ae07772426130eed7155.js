(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"D1b+":function(e,t,a){e.exports={updates:"article-preview-module--updates--2tWvO",previewParent:"article-preview-module--previewParent--zTD6v",previewImage:"article-preview-module--previewImage--18UBZ",preview:"article-preview-module--preview--35oKv",previewTitle:"article-preview-module--previewTitle--dtVfR",previewDescription:"article-preview-module--previewDescription--andbH",previewPublishDate:"article-preview-module--previewPublishDate--1_Kqg",alink:"article-preview-module--alink--3Zy_j",tag:"article-preview-module--tag--1jiS7"}},IFRj:function(e,t,a){"use strict";function n(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}function o(e,t){var a=t.left,n=t.right,o=t.up,r=t.down,i=t.top,l=t.bottom,s=t.mirror,c=t.opposite,u=(a?1:0)|(n?2:0)|(i||r?4:0)|(l||o?8:0)|(s?16:0)|(c?32:0)|(e?64:0);if(m.hasOwnProperty(u))return m[u];if(!s!=!(e&&c)){var p=[n,a,l,i,r,o];a=p[0],n=p[1],i=p[2],l=p[3],o=p[4],r=p[5]}var f,v=a||n,h=i||l||o||r,b=void 0,g=void 0,k=void 0,w=void 0,y=void 0,E=void 0,x=void 0,N=void 0,C=void 0,B=void 0,S=void 0,D=void 0,P=void 0;return e?(k=v?(n?"-":"")+"20px":0,w=h?(o||l?"":"-")+"10px":"0",y=(r||i?"":"-")+"20px",D=v?(a?"-":"")+"2000px":"0",P=h?(r||i?"-":"")+"2000px":"0"):(b=v?(a?"-":"")+"3000px":"0",g=h?(r||i?"-":"")+"3000px":"0",E=v?(n?"-":"")+"25px":"0",x=h?(o||l?"-":"")+"25px":"0",N=v?(a?"-":"")+"10px":"0",C=h?(r||i?"-":"")+"10px":"0",B=v?(n?"-":"")+"5px":"0",S=h?(o||l?"-":"")+"5px":"0"),f=v||h?e?"\n        20% {\n          transform: translate3d("+k+", "+w+", 0);\n          }\n        "+(h?"40%, 45% {\n            opacity: 1;\n            transform: translate3d(0, "+y+", 0);\n          }":"")+"\n          to {\n            opacity: 0;\n            transform: translate3d("+D+", "+P+", 0);\n        }\n      ":"from, 60%, 75%, 90%, to {\n        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n      }\n      from {\n        opacity: 0;\n        transform: translate3d("+b+", "+g+", 0);\n      }\n      60% {\n        opacity: 1;\n        transform: translate3d("+E+", "+x+", 0);\n      }\n      75% {\n        transform: translate3d("+N+", "+C+", 0);\n      }\n      90% {\n        transform: translate3d("+B+", "+S+", 0);\n      }\n      to {\n        transform: none;\n      }":e?"20% {\n          transform: scale3d(.9, .9, .9);\n        }\n        50%, 55% {\n          opacity: 1;\n          transform: scale3d(1.1, 1.1, 1.1);\n        }\n        to {\n          opacity: 0;\n          transform: scale3d(.3, .3, .3);\n      }":"from, 20%, 40%, 60%, 80%, to {\n        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n      }\n      0% {\n        opacity: 0;\n        transform: scale3d(.3, .3, .3);\n      }\n      20% {\n        transform: scale3d(1.1, 1.1, 1.1);\n      }\n      40% {\n        transform: scale3d(.9, .9, .9);\n      }\n      60% {\n        opacity: 1;\n        transform: scale3d(1.03, 1.03, 1.03);\n      }\n      80% {\n        transform: scale3d(.97, .97, .97);\n      }\n      to {\n        opacity: 1;\n        transform: scale3d(1, 1, 1);\n      }",m[u]=(0,d.animation)(f),m[u]}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.defaults,t=e.children,a=(e.out,e.forever),r=e.timeout,i=e.duration,l=void 0===i?d.defaults.duration:i,s=e.delay,u=void 0===s?d.defaults.delay:s,m=e.count,p=void 0===m?d.defaults.count:m,f=n(e,["children","out","forever","timeout","duration","delay","count"]),v={make:o,duration:void 0===r?l:r,delay:u,forever:a,count:p,style:{animationFillMode:"both"},reverse:f.left};return(0,c.default)(f,v,v,t)}Object.defineProperty(t,"__esModule",{value:!0});var i,l=a("17x9"),s=a("eH+L"),c=(i=s)&&i.__esModule?i:{default:i},d=a("ar19"),u={out:l.bool,left:l.bool,right:l.bool,top:l.bool,bottom:l.bool,mirror:l.bool,opposite:l.bool,duration:l.number,timeout:l.number,delay:l.number,count:l.number,forever:l.bool},m={};r.propTypes=u,t.default=r,e.exports=t.default},JM9Q:function(e,t,a){"use strict";var n=a("ZS3K"),o=a("KaJK");n({target:"String",proto:!0,forced:a("Wvaq")("link")},{link:function(e){return o(this,"a","href",e)}})},L2L3:function(e,t,a){e.exports={title:"blog-post-module--title--taf5a",horizontalLine:"blog-post-module--horizontalLine--20qcL",publishDate:"blog-post-module--publishDate--ywUQM",browseAllButton:"blog-post-module--browseAllButton--3YqB5",links:"blog-post-module--links--3hIfu"}},aWpR:function(e,t,a){"use strict";a("XCjP");var n=a("q1tI"),o=a.n(n),r=a("Wbzz"),i=a("D1b+"),l=a.n(i),s=a("tANy"),c=a("17x9"),d=a.n(c),u=a("/eHF"),m=a.n(u),p=a("IFRj"),f=a.n(p),v=function(e){var t=e.excludeSlug;return o.a.createElement(r.b,{query:"3348497635",render:function(e){return function(e,t){return o.a.createElement("div",{className:l.a.updates},o.a.createElement(f.a,{left:!0},o.a.createElement("h2",null,"Keep updated with our latest events")),o.a.createElement(m.a,null,o.a.createElement("div",{className:l.a.previewParent},e.map((function(e,a){return e.node.slug===t?null:o.a.createElement(m.a,{delay:100*a},o.a.createElement("a",{onClick:function(){return Object(r.d)("/blog/"+e.node.slug)},className:l.a.alink,key:e.node.title},o.a.createElement("div",{className:l.a.preview},o.a.createElement("div",{className:l.a.previewImage},null!=e.node.imagePreview?o.a.createElement("img",{src:e.node.imagePreview.fixed.src,alt:e.node.imagePreview.description}):o.a.createElement("img",{src:"",alt:"Image not found."})),o.a.createElement("div",null,o.a.createElement("h3",{className:l.a.previewTitle},e.node.title),o.a.createElement("small",{className:l.a.previewPublishDate},e.node.publishDate),o.a.createElement(s.a,{tags:e.node.tags,clickable:!1}),o.a.createElement("div",{className:l.a.previewDescription,dangerouslySetInnerHTML:{__html:e.node.description.childMarkdownRemark.html}})))))})))),o.a.createElement(m.a,{delay:500},o.a.createElement(r.a,{to:"/blog",className:"links"},o.a.createElement("button",{className:"btn",type:"submit"},"Browse all updates"))))}(e.allContentfulBlogPost.edges,t)}})};v.propTypes={excludeSlug:d.a.string},v.defaultProps={excludeSlug:""},t.a=v},ldhG:function(e,t,a){e.exports={linkContainer:"link-sharing-module--linkContainer--3k-_h",socials:"link-sharing-module--socials--1eBtp",linkField:"link-sharing-module--linkField--37aoQ",linkFieldButtonNormal:"link-sharing-module--linkFieldButtonNormal---4oGI",linkFieldButtonClicked:"link-sharing-module--linkFieldButtonClicked--3I7vL",link:"link-sharing-module--link--30K-w"}},yZlL:function(e,t,a){"use strict";a.r(t);var n=a("VbXa"),o=a.n(n),r=a("q1tI"),i=a.n(r),l=(a("Wbzz"),a("EYWl")),s=a("mwIZ"),c=a.n(s),d=a("Bl7J"),u=a("aWpR"),m=(a("JM9Q"),a("17x9")),p=a.n(m),f=a("ldhG"),v=a.n(f),h=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={linkCopied:!1,timer:-1},t.copyLink=function(){if(!t.state.linkCopied){var e=document.getElementById("linkAddress");e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),t.setState({linkCopied:!0},(function(){var e=setTimeout((function(){t.setState({linkCopied:!1,timer:e})}),1e3)}))}},t}o()(t,e);var a=t.prototype;return a.render=function(){var e=this;return i.a.createElement("div",{className:v.a.linkContainer},i.a.createElement("div",{className:v.a.socials},i.a.createElement("a",{href:"https://twitter.com/share?ref_src=twsrc%5Etfw",className:"twitter-share-button","data-size":"large","data-related":"blanketsforto","data-show-count":"false"},"Tweet"),i.a.createElement("div",{id:"fb-root"}),",",i.a.createElement("script",{async:!0,defer:!0,crossOrigin:"anonymous",src:"https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0",nonce:"9bOR49xF"}),i.a.createElement("div",{className:"fb-like","data-href":this.props.location,"data-width":"","data-layout":"button","data-action":"like","data-size":"large","data-share":"false"}),i.a.createElement("div",{className:"fb-share-button","data-href":this.props.location,"data-layout":"button","data-size":"large"},i.a.createElement("a",{href:"https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(this.props.location),target:"_blank",alt:"Share on Facebook",className:"fb-xfbml-parse-ignore"},"Share"))),i.a.createElement("div",{className:v.a.link},i.a.createElement("div",{className:v.a.linkField},i.a.createElement("input",{style:{width:this.props.location.length+"ch"},type:"text",value:this.props.location,id:"linkAddress",readOnly:!0}),i.a.createElement("button",{className:this.state.linkCopied?v.a.linkFieldButtonClicked:v.a.linkFieldButtonNormal,onClick:function(){return e.copyLink()}},this.state.linkCopied?"Copied!":"Copy URL"))))},a.componentWillUnmount=function(){clearTimeout(this.state.timer)},t}(i.a.Component);h.propTypes={location:p.a.string.isRequired};var b=h,g=a("vbKG"),k=a("R8uD"),w=a("L2L3"),y=a.n(w),E=a("tANy"),x=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e,t=c()(this.props,"data.contentfulBlogPost"),a=(c()(this,"props.data.allContentfulBlogPost.edges"),{renderNode:(e={},e[g.BLOCKS.EMBEDDED_ASSET]=function(e){var t=e.data.target.fields;return i.a.createElement("img",{src:t.file["en-US"].url,style:{width:t.file["en-US"].details.image.width},alt:t.description})},e)}),n=[i.a.createElement("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}),i.a.createElement("div",{id:"fb-root"}),i.a.createElement("script",{async:!0,defer:!0,crossorigin:"anonymous",src:"https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0",nonce:"9bOR49xF"})];return i.a.createElement(d.a,{location:this.props.location},i.a.createElement("div",{className:"white-background"},i.a.createElement(l.a,{title:t.title,metaType:"article",description:t.publishDate+" - "+t.description.childMarkdownRemark.rawMarkdownBody,childElements:n}),i.a.createElement("div",{className:"wrapper"},i.a.createElement("h1",{className:y.a.title},t.title),i.a.createElement("p",{className:y.a.publishDate}," ",t.publishDate," "),i.a.createElement(E.a,{tags:t.tags,clickable:!0}),i.a.createElement("div",{className:"richText"},null!=t.richTextBody?Object(k.documentToReactComponents)(t.richTextBody.json,a):i.a.createElement("p",null,"Error: Article not found.")),i.a.createElement(b,{location:"https://blanketsforto.ca/blog/"+t.slug}),i.a.createElement("hr",{className:y.a.horizontalLine}),i.a.createElement(u.a,{excludeSlug:t.slug}))))},t}(i.a.Component);t.default=x}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-ae07772426130eed7155.js.map