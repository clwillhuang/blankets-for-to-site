(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"Cuy+":function(e,t,a){"use strict";a.r(t);var n=a("VbXa"),r=a.n(n),o=a("q1tI"),i=a.n(o),l=(a("Wbzz"),a("mwIZ")),c=a.n(l),s=a("EYWl"),u=a("Bl7J"),m=a("/eHF"),d=a.n(m),f=a("keC6"),p=a.n(f),h=a("QauV"),b=a.n(h),k=a("kQy3"),v=a.n(k),w=a("LPBh"),y=a.n(w),E=a("HrhG"),g=a.n(E),O=a("waAC"),x=a.n(O),N=a("wBlv");function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var B=Object(o.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,r=e.size,o=void 0===r?24:r,l=M(e,["color","size"]);return i.a.createElement("svg",T({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),i.a.createElement("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),i.a.createElement("polyline",{points:"15 3 21 3 21 9"}),i.a.createElement("line",{x1:"10",y1:"14",x2:"21",y2:"3"}))}));B.displayName="ExternalLink";var I=B,C=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=c()(this,"props.data.allContentfulOrganizationInformation.nodes")[0],t=c()(this,"props.data.allContentfulOrganizationInformationOfficeHoursTextNode.nodes"),a=["Email","Facebook","Instagram","Twitter","TikTok"],n=[e.emailAddress,e.facebook,e.instagram,e.twitter,e.tikTok],r=["mailto:"+e.emailAddress,e.facebookLink,e.instagramLink,e.twitterLink,e.tiktokLink],o=[p.a,v.a,y.a,b.a,g.a];return i.a.createElement(u.a,{location:this.props.location},i.a.createElement(s.a,{title:"Contact Us",description:"Want to reach out to Blankets for T.O. to join, collaborate, or ask a question? Connect to us through any of contact details or social media links shown here."}),i.a.createElement("div",{className:"white-background"},i.a.createElement("div",{className:"wrapper"},i.a.createElement(d.a,{left:!0,duration:400},i.a.createElement("h2",null,"Contact Us")),i.a.createElement(d.a,{delay:400},i.a.createElement("div",{className:x.a.socialMedia},n.map((function(e,t){return"null"!=e&&i.a.createElement("div",{className:x.a.socialMediaEntry},i.a.createElement("a",{href:""!=r[t]?r[t]:null,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:o[t],alt:a[t]+" Icon"}),i.a.createElement("p",{className:x.a.socialMediaLink},e," ",""!=r[t]&&i.a.createElement(I,null))))}))),i.a.createElement("div",{className:x.a.contactDetails},"null"!=e.officeAddress?i.a.createElement("div",null,i.a.createElement("h4",null,"Office"),i.a.createElement("a",null,e.officeAddress),i.a.createElement("div",{className:x.a.officeHours},i.a.createElement("div",{dangerouslySetInnerHTML:{__html:t[0].childMarkdownRemark.html}}))):null),i.a.createElement("div",{className:x.a.contactDirectly},i.a.createElement("h3",null,"Send Us a Direct Message"),i.a.createElement(N.a,{link:"https://us7.list-manage.com/contact-form?u=c190e10f2b62c767274e1197b&form_id=ff96bfbc82a7a31d98bb442faba2bbca",buttonText:"Fill out our contact form",openInNewTab:!0}))))))},t}(i.a.Component);t.default=C},JM9Q:function(e,t,a){"use strict";var n=a("ZS3K"),r=a("KaJK");n({target:"String",proto:!0,forced:a("Wvaq")("link")},{link:function(e){return r(this,"a","href",e)}})},KaJK:function(e,t,a){var n=a("4jnk"),r=/"/g;e.exports=function(e,t,a,o){var i=String(n(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(o).replace(r,"&quot;")+'"'),l+">"+i+"</"+t+">"}},QkGs:function(e,t,a){e.exports={whiteButton:"styled-button-module--whiteButton--LbBn9",primaryButton:"styled-button-module--primaryButton--33jVM",links:"styled-button-module--links--2A7r_"}},Wvaq:function(e,t,a){var n=a("JhOX");e.exports=function(e){return n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},wBlv:function(e,t,a){"use strict";a("JM9Q");var n=a("q1tI"),r=a.n(n),o=(a("Wbzz"),a("17x9")),i=a.n(o),l=a("QkGs"),c=a.n(l),s=function(e){var t=e.buttonText,a=e.link,n=e.isWhite,o=e.openInNewTab;return r.a.createElement("a",{href:a,className:n?c.a.whiteButton:c.a.primaryButton,target:o?"_blank":"",rel:"noopener noreferrer"},t)};s.propTypes={buttonText:i.a.string.isRequired,link:i.a.string.isRequired,isWhite:i.a.bool,openInNewTab:i.a.bool},s.defaultProps={isWhite:!1,openInNewTab:!1},t.a=s},waAC:function(e,t,a){e.exports={contactDetails:"contact-module--contactDetails--2c9U3",socialMedia:"contact-module--socialMedia--2J1Yr",socialMediaEntry:"contact-module--socialMediaEntry--23Hqk",contactDirectly:"contact-module--contactDirectly--3XcpH"}}}]);
//# sourceMappingURL=component---src-pages-contact-js-f426a395bece491445f8.js.map