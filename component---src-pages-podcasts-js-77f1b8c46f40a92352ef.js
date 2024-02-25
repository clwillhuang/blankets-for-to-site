"use strict";(self.webpackChunkblankets_for_to_site=self.webpackChunkblankets_for_to_site||[]).push([[253],{4129:function(e,t,n){var r,E=n(7294),o=(r=E)&&"object"==typeof r&&"default"in r?r.default:r,l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var E in t=arguments[n])Object.prototype.hasOwnProperty.call(t,E)&&(e[E]=t[E]);return e},l.apply(this,arguments)},a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function u(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function c(e,t){return e(t={exports:{}},t.exports),t.exports}var i=c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.EMBEDDED_RESOURCE="embedded-resource-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))}));u(i);i.BLOCKS;var L=c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(t.INLINES||(t.INLINES={}))}));u(L);L.INLINES;var d=c((function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code",e.SUPERSCRIPT="superscript",e.SUBSCRIPT="subscript"}(n||(n={})),t.default=n}));u(d);var S=c((function(e,t){var n,r=a&&a.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,E=0,o=t.length;E<o;E++)!r&&E in t||(r||(r=Array.prototype.slice.call(t,0,E)),r[E]=t[E]);return e.concat(r||Array.prototype.slice.call(t))},E=a&&a.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var o=E(d);t.TOP_LEVEL_BLOCKS=[i.BLOCKS.PARAGRAPH,i.BLOCKS.HEADING_1,i.BLOCKS.HEADING_2,i.BLOCKS.HEADING_3,i.BLOCKS.HEADING_4,i.BLOCKS.HEADING_5,i.BLOCKS.HEADING_6,i.BLOCKS.OL_LIST,i.BLOCKS.UL_LIST,i.BLOCKS.HR,i.BLOCKS.QUOTE,i.BLOCKS.EMBEDDED_ENTRY,i.BLOCKS.EMBEDDED_ASSET,i.BLOCKS.EMBEDDED_RESOURCE,i.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[i.BLOCKS.PARAGRAPH,i.BLOCKS.HEADING_1,i.BLOCKS.HEADING_2,i.BLOCKS.HEADING_3,i.BLOCKS.HEADING_4,i.BLOCKS.HEADING_5,i.BLOCKS.HEADING_6,i.BLOCKS.OL_LIST,i.BLOCKS.UL_LIST,i.BLOCKS.HR,i.BLOCKS.QUOTE,i.BLOCKS.EMBEDDED_ENTRY,i.BLOCKS.EMBEDDED_ASSET,i.BLOCKS.EMBEDDED_RESOURCE],t.TABLE_BLOCKS=[i.BLOCKS.TABLE,i.BLOCKS.TABLE_ROW,i.BLOCKS.TABLE_CELL,i.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[i.BLOCKS.HR,i.BLOCKS.EMBEDDED_ENTRY,i.BLOCKS.EMBEDDED_ASSET,i.BLOCKS.EMBEDDED_RESOURCE],t.CONTAINERS=((n={})[i.BLOCKS.OL_LIST]=[i.BLOCKS.LIST_ITEM],n[i.BLOCKS.UL_LIST]=[i.BLOCKS.LIST_ITEM],n[i.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,n[i.BLOCKS.QUOTE]=[i.BLOCKS.PARAGRAPH],n[i.BLOCKS.TABLE]=[i.BLOCKS.TABLE_ROW],n[i.BLOCKS.TABLE_ROW]=[i.BLOCKS.TABLE_CELL,i.BLOCKS.TABLE_HEADER_CELL],n[i.BLOCKS.TABLE_CELL]=[i.BLOCKS.PARAGRAPH],n[i.BLOCKS.TABLE_HEADER_CELL]=[i.BLOCKS.PARAGRAPH],n),t.HEADINGS=[i.BLOCKS.HEADING_1,i.BLOCKS.HEADING_2,i.BLOCKS.HEADING_3,i.BLOCKS.HEADING_4,i.BLOCKS.HEADING_5,i.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=r([i.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[i.BLOCKS.DOCUMENT,i.BLOCKS.PARAGRAPH,i.BLOCKS.HEADING_1,i.BLOCKS.HEADING_2,i.BLOCKS.HEADING_3,i.BLOCKS.HEADING_4,i.BLOCKS.HEADING_5,i.BLOCKS.HEADING_6,i.BLOCKS.OL_LIST,i.BLOCKS.UL_LIST,i.BLOCKS.LIST_ITEM,i.BLOCKS.HR,i.BLOCKS.QUOTE,i.BLOCKS.EMBEDDED_ENTRY,i.BLOCKS.EMBEDDED_ASSET,L.INLINES.HYPERLINK,L.INLINES.ENTRY_HYPERLINK,L.INLINES.ASSET_HYPERLINK,L.INLINES.EMBEDDED_ENTRY,"text"],t.V1_MARKS=[o.default.BOLD,o.default.CODE,o.default.ITALIC,o.default.UNDERLINE]}));u(S);S.V1_MARKS,S.V1_NODE_TYPES,S.TEXT_CONTAINERS,S.HEADINGS,S.CONTAINERS,S.VOID_BLOCKS,S.TABLE_BLOCKS,S.LIST_ITEM_BLOCKS,S.TOP_LEVEL_BLOCKS;var _=c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));u(_);var O=c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));u(O);var s=c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={nodeType:i.BLOCKS.DOCUMENT,data:{},content:[{nodeType:i.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=n}));u(s);var B=c((function(e,t){function n(e,t){for(var n=0,r=Object.keys(e);n<r.length;n++){if(t===e[r[n]])return!0}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0,t.isInline=function(e){return n(L.INLINES,e.nodeType)},t.isBlock=function(e){return n(i.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}}));u(B);B.isText,B.isBlock,B.isInline;var f=c((function(e,t){var n=a&&a.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var E=Object.getOwnPropertyDescriptor(t,n);E&&!("get"in E?!t.__esModule:E.writable||E.configurable)||(E={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,E)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),r=a&&a.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),E=a&&a.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},o=a&&a.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var E in e)"default"!==E&&Object.prototype.hasOwnProperty.call(e,E)&&n(t,e,E);return r(t,e),t},l=a&&a.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0,Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return i.BLOCKS}}),Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return L.INLINES}}),Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return l(d).default}}),E(S,t),E(_,t),E(O,t),Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return l(s).default}});var u=o(B);t.helpers=u}));u(f);var T,C,I=f.helpers,N=(f.EMPTY_DOCUMENT,f.MARKS),D=f.INLINES,p=f.BLOCKS;function A(e,t){return e.map((function(e,n){return r=K(e,t),o=n,E.isValidElement(r)&&null===r.key?E.cloneElement(r,{key:o}):r;var r,o}))}function K(e,t){var n=t.renderNode,r=t.renderMark,E=t.renderText;if(I.isText(e))return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),E?E(e.value):e.value);var l=A(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,l):o.createElement(o.Fragment,null,l)}var m=((T={})[p.DOCUMENT]=function(e,t){return t},T[p.PARAGRAPH]=function(e,t){return o.createElement("p",null,t)},T[p.HEADING_1]=function(e,t){return o.createElement("h1",null,t)},T[p.HEADING_2]=function(e,t){return o.createElement("h2",null,t)},T[p.HEADING_3]=function(e,t){return o.createElement("h3",null,t)},T[p.HEADING_4]=function(e,t){return o.createElement("h4",null,t)},T[p.HEADING_5]=function(e,t){return o.createElement("h5",null,t)},T[p.HEADING_6]=function(e,t){return o.createElement("h6",null,t)},T[p.EMBEDDED_ENTRY]=function(e,t){return o.createElement("div",null,t)},T[p.EMBEDDED_RESOURCE]=function(e,t){return o.createElement("div",null,t)},T[p.UL_LIST]=function(e,t){return o.createElement("ul",null,t)},T[p.OL_LIST]=function(e,t){return o.createElement("ol",null,t)},T[p.LIST_ITEM]=function(e,t){return o.createElement("li",null,t)},T[p.QUOTE]=function(e,t){return o.createElement("blockquote",null,t)},T[p.HR]=function(){return o.createElement("hr",null)},T[p.TABLE]=function(e,t){return o.createElement("table",null,o.createElement("tbody",null,t))},T[p.TABLE_ROW]=function(e,t){return o.createElement("tr",null,t)},T[p.TABLE_HEADER_CELL]=function(e,t){return o.createElement("th",null,t)},T[p.TABLE_CELL]=function(e,t){return o.createElement("td",null,t)},T[D.ASSET_HYPERLINK]=function(e){return b(D.ASSET_HYPERLINK,e)},T[D.ENTRY_HYPERLINK]=function(e){return b(D.ENTRY_HYPERLINK,e)},T[D.EMBEDDED_ENTRY]=function(e){return b(D.EMBEDDED_ENTRY,e)},T[D.HYPERLINK]=function(e,t){return o.createElement("a",{href:e.data.uri},t)},T),R=((C={})[N.BOLD]=function(e){return o.createElement("b",null,e)},C[N.ITALIC]=function(e){return o.createElement("i",null,e)},C[N.UNDERLINE]=function(e){return o.createElement("u",null,e)},C[N.CODE]=function(e){return o.createElement("code",null,e)},C[N.SUPERSCRIPT]=function(e){return o.createElement("sup",null,e)},C[N.SUBSCRIPT]=function(e){return o.createElement("sub",null,e)},C);function b(e,t){return o.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.h=function(e,t){return void 0===t&&(t={}),e?K(e,{renderNode:l(l({},m),t.renderNode),renderMark:l(l({},R),t.renderMark),renderText:t.renderText}):null}},5158:function(e,t,n){var r=n(7294),E=n(3936);const o=e=>{let{buttonText:t,link:n,isWhite:o,openInNewTab:l,children:a}=e;return r.createElement("a",{href:n,className:o?E.rY:E.ud,target:l?"_blank":"",rel:"noopener noreferrer"},t,a)};o.defaultProps={isWhite:!1,openInNewTab:!1},t.Z=o},4661:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(7294),E=n(7361),o=n.n(E),l=n(5739),a=n(2851),u=n(4033),c=n(4160),i=n(4129),L=n(5158);var d=e=>{let{podcast:t}=e;const n="/podcasts/beyond-the-blankets/"+t.slug;return r.createElement("div",{onClick:()=>(0,c.c4)(n),className:"podcast-card-module--alink--c12cb",key:t.episodeName},r.createElement("div",{className:"podcast-card-module--previewText--91784"},r.createElement("h3",{className:"podcast-card-module--previewTitle--e58d7"},"Episode "+t.episodeNumber+": "+t.episodeName),r.createElement("span",{className:"podcast-card-module--previewPublishDate--87837"},t.publishDate),r.createElement("div",{className:"richText"},void 0!==t.richDescription.raw?(0,i.h)(JSON.parse(t.richDescription.raw)):r.createElement("p",null,"Error: Articles not found."))),r.createElement(L.Z,{buttonText:"Listen now",link:n}))},S=n(7227),_=n(2245);class O extends r.Component{render(){const e=o()(this,"props.data.allContentfulHeaderImage.nodes[0].image.gatsbyImageData"),t=o()(this,"props.data.allContentfulPodcast.nodes"),n=[{title:"Browse podcast collaborations",link:"/podcast-collaborations",description:"View podcasts featuring guest appearances of some of our members.",gatsbyImageData:e}];return r.createElement(a.Z,{location:this.props.location},r.createElement(l.Z,{title:"Listen to the Beyond the Blankets podcast",description:"Browse and listen to episodes of Beyond the Blankets, the official Blankets for T.O. podcast."}),r.createElement("div",{className:"white-background"},r.createElement(u.Z,{imgFluid:e,headerTitle:"Beyond the Blankets",headerSubtitle:"Listen to the Beyond the Blankets podcast, the official podcast from Blankets for T.O."}),r.createElement("div",{className:"wrapper"},r.createElement("h1",{className:_.T},"Beyond the Blankets: The Official Podcast by Blankets for T.O."),t.map(((e,t)=>r.createElement(d,{key:t,podcast:e}))),r.createElement("h1",{className:_.T},"Other Podcasts"),r.createElement(S.Z,{content:n}))))}}var s=O},3936:function(e,t,n){n.d(t,{rY:function(){return E},ud:function(){return r}});var r="styled-button-module--primaryButton--0f3e8",E="styled-button-module--whiteButton--08a43"},2245:function(e,t,n){n.d(t,{G:function(){return r},T:function(){return E}});var r="podcasts-module--podcastTitle--0fce6",E="podcasts-module--title--59f73"}}]);
//# sourceMappingURL=component---src-pages-podcasts-js-77f1b8c46f40a92352ef.js.map