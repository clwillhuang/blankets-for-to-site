(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"0YDr":function(e,t,a){var r=a("7Paf"),n=a("zZ0H");e.exports=function(e){return e&&e.length?r(e,n):0}},"7Paf":function(e,t){e.exports=function(e,t){for(var a,r=-1,n=e.length;++r<n;){var o=t(e[r]);void 0!==o&&(a=void 0===a?o:a+o)}return a}},"8qrf":function(e,t,a){e.exports={catalogueContainer:"store-module--catalogueContainer--fZ1S6",catalogue:"store-module--catalogue--PL-fJ",headerLayout:"store-module--headerLayout--9ONdB",headerText:"store-module--headerText--2Rr86",headerImage:"store-module--headerImage--1la2F",subtitle:"store-module--subtitle--3vRBG",description:"store-module--description--33q64",catalogueTitle:"store-module--catalogueTitle--1NLno",cartDisplayInfo:"store-module--cartDisplayInfo--3KDJC",cartDisplay:"store-module--cartDisplay--9efBb"}},Ga68:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return k}));var r=a("VbXa"),n=a.n(r),o=a("0YDr"),i=a.n(o),s=a("q1tI"),l=a.n(s),c=a("mwIZ"),u=a.n(c),m=a("EYWl"),d=a("9eSz"),p=a.n(d),h=a("Bl7J"),f=a("8qrf"),v=a.n(f),w=(a("VSsl"),a("Wbzz"),a("Pgxw")),g=a.n(w),y=function(e){var t=e.storeitem;return l.a.createElement("a",{href:"/store/"+t.slug,className:g.a.alink,key:t.title},l.a.createElement("div",{className:g.a.preview},l.a.createElement("div",{className:g.a.previewImage},null!=t.mainPreview?l.a.createElement(p.a,{fluid:t.mainPreview.fluid,alt:t.mainPreview.description}):null),l.a.createElement("div",{className:g.a.text},l.a.createElement("h3",{className:g.a.name},t.itemName),l.a.createElement("div",{className:g.a.price},l.a.createElement("p",{className:g.a.priceAmount},"$",t.itemPrice.toFixed(2)),l.a.createElement("p",{className:g.a.priceCurrency},"CAD")))))},E=a("WjWU"),b=a("9ONQ"),N=a("wBlv"),k=function(e){function t(){for(var t,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))||this).state={cartItems:[]},t}n()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=void 0===typeof window?new b.a(req.headers.cookie):new b.a;this.setState({cartItems:e.get("cart-items")})},a.render=function(){var e=u()(this,"props.data.allContentfulMerchItem.nodes"),t=Array.isArray(this.state.cartItems)&&this.state.cartItems.length>0;return l.a.createElement(h.a,{location:this.props.location},l.a.createElement(m.a,{title:"Browse merchandise for Blankets for T.O.",description:"Browse Blankets for T.O. merchandise including masks and stickers. Purchases go towards funding donations and events.",doNotCrawl:!0}),l.a.createElement("div",{className:"white-background"},l.a.createElement("div",{className:"wrapper"},l.a.createElement("h2",null,"Store")),t?null:l.a.createElement("div",{className:"wideWrapper"},l.a.createElement("div",{className:v.a.headerLayout},l.a.createElement("div",{className:v.a.headerImage},l.a.createElement(p.a,{fluid:this.props.data.file.childImageSharp.fluid})),l.a.createElement("div",{className:v.a.headerText},l.a.createElement("h3",{className:v.a.subtitle},"Every purchase helps alleviate homelessness"),l.a.createElement("p",{className:v.a.description},"Every mask or sticker purchased goes towards funding blankets and other necessities that will be donated to homeless individuals, as we work to alleviate homelessness in the GTA.")))),l.a.createElement("div",{className:v.a.cartDisplay},l.a.createElement("div",{className:v.a.cartDisplayInfo},l.a.createElement(E.a,{size:64}),l.a.createElement("p",null,t?"There are "+i()(this.state.cartItems.map((function(e){return e.count})))+" items in your shopping cart.":"Browse items below and add them to your cart for checkout.")),t?l.a.createElement(N.a,{buttonText:"View shopping cart",link:"/cart",openInNewTab:!1}):null),l.a.createElement("div",{className:v.a.catalogue},l.a.createElement("h3",{className:v.a.catalogueTitle},"Our Catalogue"),l.a.createElement("div",{className:v.a.catalogueContainer},e.map((function(e){return l.a.createElement(y,{storeitem:e})}))))))},t}(l.a.Component)},Pgxw:function(e,t,a){e.exports={preview:"store-item-preview-module--preview--2QE6b",text:"store-item-preview-module--text--2yZhB",previewImage:"store-item-preview-module--previewImage--1ZN8o",alink:"store-item-preview-module--alink--2mPC2",name:"store-item-preview-module--name--GxrIn",updates:"store-item-preview-module--updates--3U31_",price:"store-item-preview-module--price--1Dxn0",priceAmount:"store-item-preview-module--priceAmount--2Xj4d",priceCurrency:"store-item-preview-module--priceCurrency--3NlYr"}},QkGs:function(e,t,a){e.exports={whiteButton:"styled-button-module--whiteButton--LbBn9",primaryButton:"styled-button-module--primaryButton--33jVM",links:"styled-button-module--links--2A7r_"}},VSsl:function(e,t,a){var r=a("IvzW"),n=a("jekk").f,o=Function.prototype,i=o.toString,s=/^\s*function ([^ (]*)/;r&&!("name"in o)&&n(o,"name",{configurable:!0,get:function(){try{return i.call(this).match(s)[1]}catch(e){return""}}})},WjWU:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=Object(r.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,s=e.size,l=void 0===s?24:s,c=i(e,["color","size"]);return n.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),n.a.createElement("circle",{cx:"9",cy:"21",r:"1"}),n.a.createElement("circle",{cx:"20",cy:"21",r:"1"}),n.a.createElement("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"}))}));s.displayName="ShoppingCart",t.a=s},wBlv:function(e,t,a){"use strict";a("JM9Q");var r=a("q1tI"),n=a.n(r),o=(a("Wbzz"),a("17x9")),i=a.n(o),s=a("QkGs"),l=a.n(s),c=function(e){var t=e.buttonText,a=e.link,r=e.isWhite,o=e.openInNewTab;return n.a.createElement("a",{href:a,className:r?l.a.whiteButton:l.a.primaryButton,target:o?"_blank":"",rel:"noopener noreferrer"},t)};c.propTypes={buttonText:i.a.string.isRequired,link:i.a.string.isRequired,isWhite:i.a.bool,openInNewTab:i.a.bool},c.defaultProps={isWhite:!1,openInNewTab:!1},t.a=c},zZ0H:function(e,t){e.exports=function(e){return e}}}]);
//# sourceMappingURL=component---src-pages-store-js-e082c686f87f7f3d48b9.js.map