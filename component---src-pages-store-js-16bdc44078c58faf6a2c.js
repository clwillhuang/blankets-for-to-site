(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"0YDr":function(e,t,a){var r=a("7Paf"),n=a("zZ0H");e.exports=function(e){return e&&e.length?r(e,n):0}},"7Paf":function(e,t){e.exports=function(e,t){for(var a,r=-1,n=e.length;++r<n;){var o=t(e[r]);void 0!==o&&(a=void 0===a?o:a+o)}return a}},"8qrf":function(e,t,a){e.exports={catalogueContainer:"store-module--catalogueContainer--fZ1S6",catalogue:"store-module--catalogue--PL-fJ",headerLayout:"store-module--headerLayout--9ONdB",headerText:"store-module--headerText--2Rr86",headerImage:"store-module--headerImage--1la2F",subtitle:"store-module--subtitle--3vRBG",description:"store-module--description--33q64",catalogueTitle:"store-module--catalogueTitle--1NLno",cartDisplayInfo:"store-module--cartDisplayInfo--3KDJC",cartDisplay:"store-module--cartDisplay--9efBb"}},Ga68:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return k}));var r=a("VbXa"),n=a.n(r),o=a("0YDr"),i=a.n(o),l=a("q1tI"),s=a.n(l),c=a("mwIZ"),u=a.n(c),m=a("EYWl"),d=a("9eSz"),p=a.n(d),f=a("Bl7J"),h=a("8qrf"),v=a.n(h),w=(a("VSsl"),a("Wbzz"),a("Pgxw")),g=a.n(w),y=function(e){var t=e.storeitem;return s.a.createElement("a",{href:"/store/"+t.slug,className:g.a.alink,key:t.title},s.a.createElement("div",{className:g.a.preview},s.a.createElement("div",{className:g.a.previewImage},null!=t.mainPreview?s.a.createElement(p.a,{fluid:t.mainPreview.fluid,alt:t.mainPreview.description}):null),s.a.createElement("div",{className:g.a.text},s.a.createElement("h3",{className:g.a.name},t.itemName),s.a.createElement("div",{className:g.a.price},s.a.createElement("p",{className:g.a.priceAmount},"$",t.itemPrice.toFixed(2)),s.a.createElement("p",{className:g.a.priceCurrency},"CAD")))))},E=a("WjWU"),b=a("9ONQ"),N=a("wBlv"),k=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=u()(this,"props.data.allContentfulMerchItem.nodes"),t=[];void 0!==typeof window&&(t=(new b.a).get("cart-items"));return s.a.createElement(f.a,{location:this.props.location},s.a.createElement(m.a,{title:"Browse merchandise for Blankets for T.O.",description:"Browse Blankets for T.O. merchandise including masks and stickers. Purchases go towards funding donations and events.",doNotCrawl:!0}),s.a.createElement("div",{className:"white-background"},s.a.createElement("div",{className:"wrapper"},s.a.createElement("h2",null,"Store")),0===(Array.isArray(t)&&t.length)?s.a.createElement("div",{className:"wideWrapper"},s.a.createElement("div",{className:v.a.headerLayout},s.a.createElement("div",{className:v.a.headerImage},s.a.createElement(p.a,{fluid:this.props.data.file.childImageSharp.fluid})),s.a.createElement("div",{className:v.a.headerText},s.a.createElement("h3",{className:v.a.subtitle},"Every purchase helps alleviate homelessness"),s.a.createElement("p",{className:v.a.description},"Every mask or sticker purchased goes towards funding blankets and other necessities that will be donated to homeless individuals, as we work to alleviate homelessness in the GTA.")))):null,s.a.createElement("div",{className:v.a.cartDisplay},s.a.createElement("div",{className:v.a.cartDisplayInfo},s.a.createElement(E.a,{size:64}),Array.isArray(t)&&t.length>0?s.a.createElement("p",null,"There are ",i()(t.map((function(e){return e.count})))," items in your shopping cart."):s.a.createElement("p",null,"Browse items below and add them to your cart for checkout.")),s.a.createElement(N.a,{buttonText:"View shopping cart",link:"/cart",openInNewTab:!1})),s.a.createElement("div",{className:v.a.catalogue},s.a.createElement("h3",{className:v.a.catalogueTitle},"Our Catalogue"),s.a.createElement("div",{className:v.a.catalogueContainer},e.map((function(e){return s.a.createElement(y,{storeitem:e})}))))))},t}(s.a.Component)},Pgxw:function(e,t,a){e.exports={preview:"store-item-preview-module--preview--2QE6b",text:"store-item-preview-module--text--2yZhB",previewImage:"store-item-preview-module--previewImage--1ZN8o",alink:"store-item-preview-module--alink--2mPC2",name:"store-item-preview-module--name--GxrIn",updates:"store-item-preview-module--updates--3U31_",price:"store-item-preview-module--price--1Dxn0",priceAmount:"store-item-preview-module--priceAmount--2Xj4d",priceCurrency:"store-item-preview-module--priceCurrency--3NlYr"}},QkGs:function(e,t,a){e.exports={whiteButton:"styled-button-module--whiteButton--LbBn9",primaryButton:"styled-button-module--primaryButton--33jVM",links:"styled-button-module--links--2A7r_"}},VSsl:function(e,t,a){var r=a("IvzW"),n=a("jekk").f,o=Function.prototype,i=o.toString,l=/^\s*function ([^ (]*)/;r&&!("name"in o)&&n(o,"name",{configurable:!0,get:function(){try{return i.call(this).match(l)[1]}catch(e){return""}}})},WjWU:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=Object(r.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,l=e.size,s=void 0===l?24:l,c=i(e,["color","size"]);return n.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),n.a.createElement("circle",{cx:"9",cy:"21",r:"1"}),n.a.createElement("circle",{cx:"20",cy:"21",r:"1"}),n.a.createElement("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"}))}));l.displayName="ShoppingCart",t.a=l},wBlv:function(e,t,a){"use strict";a("JM9Q");var r=a("q1tI"),n=a.n(r),o=(a("Wbzz"),a("17x9")),i=a.n(o),l=a("QkGs"),s=a.n(l),c=function(e){var t=e.buttonText,a=e.link,r=e.isWhite,o=e.openInNewTab;return n.a.createElement("a",{href:a,className:r?s.a.whiteButton:s.a.primaryButton,target:o?"_blank":"",rel:"noopener noreferrer"},t)};c.propTypes={buttonText:i.a.string.isRequired,link:i.a.string.isRequired,isWhite:i.a.bool,openInNewTab:i.a.bool},c.defaultProps={isWhite:!1,openInNewTab:!1},t.a=c},zZ0H:function(e,t){e.exports=function(e){return e}}}]);
//# sourceMappingURL=component---src-pages-store-js-16bdc44078c58faf6a2c.js.map