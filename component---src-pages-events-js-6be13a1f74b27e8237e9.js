(self.webpackChunkblankets_for_to_site=self.webpackChunkblankets_for_to_site||[]).push([[651],{782:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(7294),o=n(7059),r=n(6656),l=function(e){var t=e.imgFluid,n=e.headerTitle,l=e.headerSubtitle;return a.createElement("div",{className:"header-image-module--parent--fa4fc"},a.createElement(o.G,{image:t,className:"header-image-module--fluidImage--55cc4",alt:"Header image for "+n}),a.createElement("div",{className:"header-image-module--textBox--79e28"},a.createElement(r.Z,{fade:!0},a.createElement("h1",{className:"header-image-module--title--b14b3"},n),void 0===l||""!==l?a.createElement("p",{className:"header-image-module--subtitle--5b149"},l):a.createElement("p",null))))}},5526:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var a=n(4578),o=n(7294),r=n(3370),l=n(945),i=n(782),c=n(7059),m="event-popup-module--subtitle--1d8eb",u=n(2130),s=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.eventData,n=e.onClose;return t.articles=t.articles.map((function(e){var t=e.sys.contentType.sys.id;return"blogPost"===t?Object.assign({},e,{type:e.articleType,fullSlug:"/blog/"+e.slug}):"page"===t?Object.assign({},e,{type:"Page",fullSlug:"/pages/"+e.slug}):Object.assign({},e,{type:"Link",fullSlug:"/"+slug})})),o.createElement("div",{className:"event-popup-module--background--623c9"},o.createElement("div",{className:"event-popup-module--blocker--db879",onClick:n,ref:this.popupBlocker}),o.createElement("div",{ref:this.modalRef,className:"event-popup-module--modal--5782b"},o.createElement("div",{className:"event-popup-module--modalPadding--d3803"},o.createElement("div",{className:"event-popup-module--modalContent--24fb9"},o.createElement("h1",{className:"event-popup-module--title--0d69f"},t.eventName),o.createElement("div",{className:"event-popup-module--modalLayout--1ddbb"},o.createElement("div",{className:"event-popup-module--image--620d4"},o.createElement(c.G,{alt:t.smallPreviewImage.description,image:t.smallPreviewImage.gatsbyImageData})),o.createElement("div",{className:"event-popup-module--textContent--e473e"},o.createElement("div",{className:"event-popup-module--description--9c19f",dangerouslySetInnerHTML:{__html:t.description.childMarkdownRemark.html}}),o.createElement("strong",{className:m},"When is it?"),o.createElement("p",{className:"event-popup-module--datetime--b2217"},"Date and time to be announced"!==t.eventDate?t.eventDate+" to "+t.endDate:"Date and time to be announced."),o.createElement("strong",{className:m},"Where is it?"),o.createElement("div",{className:"event-popup-module--location--3f925",dangerouslySetInnerHTML:{__html:t.location.childMarkdownRemark.html}}),o.createElement("strong",{className:m},"Read more"),t.articles.map((function(e){return o.createElement("div",{key:e.fullSlug},o.createElement("span",null,"(",e.type,") ",o.createElement("a",{className:"event-popup-module--articleLink--96f47",href:e.fullSlug},e.title)))})))),o.createElement(u.Z,{className:"event-popup-module--closeButton--1127e",onClick:n,size:40})))))},t}(o.Component),d=s,p=function(e){var t=e.eventData,n=e.onClickEvent;return o.createElement("div",{className:"event-card-module--card--40355",onClick:n},o.createElement("div",{className:"event-card-module--image--76f18"},o.createElement(c.G,{image:t.smallPreviewImage.gatsbyImageData,alt:t.smallPreviewImage.description})),o.createElement("div",{className:"event-card-module--textContent--51fe4"},o.createElement("h3",{className:"event-card-module--title--27f4b"},t.eventName),o.createElement("p",{className:"event-card-module--datetime--b9fec"},t.eventDate)),o.createElement("p",{className:"event-card-module--readMoreLine--4d6fd"},"Read more"))},v="events-module--gridLayout--18120",f=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClickEvent=function(e,t){document.getElementsByTagName("body")[0].style.overflowY="hidden",n.setState({popupActive:!0,popupCategory:e,popupIndex:t})},n.onClosePopup=function(){n.setState({popupActive:!1}),document.getElementsByTagName("body")[0].style.overflowY="scroll"},n.dateTimeFormatter=Intl.DateTimeFormat("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit",timeZoneName:"short"}),n.dateFormatter=Intl.DateTimeFormat("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"}),n.timeFormatter=Intl.DateTimeFormat("en-US",{hour:"2-digit",minute:"2-digit",timeZoneName:"short"}),n.state={popupActive:!1,popupCategory:void 0,popupIndex:void 0},n.UPCOMING="upcoming",n.PAST="past",n}return(0,a.Z)(t,e),t.prototype.render=function(){var e=this,t=this.props.data.allContentfulHeaderImage.nodes[0].image.gatsbyImageData,n="Events Calendar",a=this.props.data.allContentfulEvents.nodes,c=Date.now(),m=(a=a.map((function(t){var n=new Date(t.eventDate),a=new Date(t.endDate);return t.eventDate&&t.endDate?n.getMonth()!=a.getMonth()||n.getDate()!=a.getDate()?Object.assign({},t,{eventDateVal:new Date(t.eventDate),endDateVal:new Date(t.endDate),startDate:e.dateTimeFormatter.format(new Date(t.startDate)),eventDate:e.dateFormatter.format(n),endDate:e.dateFormatter.format(a)}):Object.assign({},t,{eventDateVal:new Date(t.eventDate),endDateVal:new Date(t.endDate),startDate:e.dateTimeFormatter.format(new Date(t.startDate)),eventDate:e.dateTimeFormatter.format(n),endDate:e.timeFormatter.format(a)}):Object.assign({},t,{eventDateVal:0,endDateVal:0,startDate:e.dateTimeFormatter.format(new Date(t.startDate)),eventDate:"Date and time to be announced",endDate:"Date and time to be announced"})}))).filter((function(e){return 0===e.eventDateVal||e.endDateVal>c})).sort((function(e,t){var n=e.eventDateVal,a=t.eventDateVal;return n===a?0:0===n?1:0===a||n<a?-1:1})),u=a.filter((function(e){return 0!==e.eventDateVal&&e.endDateVal<c})).sort((function(e,t){return t.eventDateVal-e.eventDateVal}));return o.createElement(l.Z,{location:this.props.location},o.createElement(r.Z,{title:n,description:"Browse upcoming and past events from Blankets for T.O."}),o.createElement(i.Z,{imgFluid:t,headerTitle:n}),this.state.popupActive&&this.state.popupCategory==this.UPCOMING&&o.createElement(d,{eventData:m[this.state.popupIndex],onClose:function(){return e.onClosePopup()}}),this.state.popupActive&&this.state.popupCategory==this.PAST&&o.createElement(d,{eventData:u[this.state.popupIndex],onClose:function(){return e.onClosePopup()}}),o.createElement("div",{className:"wrapper"},o.createElement("h2",null,"Upcoming"),o.createElement("div",{className:v},m.map((function(t,n){return o.createElement(p,{key:"Upcoming Event "+n,eventData:t,onClickEvent:function(){return e.onClickEvent(e.UPCOMING,n)}})})),0===m.length&&o.createElement("p",null,"Unfortunately, there are no upcoming events scheduled soon. Check back soon, follow us or join our mailing list for event announcements.")),o.createElement("div",null),u.length>0&&o.createElement("div",null,o.createElement("h2",null,"Recent"),o.createElement("div",{className:v},u.map((function(t,n){return o.createElement(p,{key:"Recent Event "+n,eventData:t,onClickEvent:function(){return e.onClickEvent(e.PAST,n)}})}))))))},t}(o.Component),g=f},2705:function(e,t,n){var a=n(5639).Symbol;e.exports=a},9932:function(e){e.exports=function(e,t){for(var n=-1,a=null==e?0:e.length,o=Array(a);++n<a;)o[n]=t(e[n],n,e);return o}},4239:function(e,t,n){var a=n(2705),o=n(9607),r=n(2333),l=a?a.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":l&&l in Object(e)?o(e):r(e)}},531:function(e,t,n){var a=n(2705),o=n(9932),r=n(1469),l=n(3448),i=a?a.prototype:void 0,c=i?i.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(r(t))return o(t,e)+"";if(l(t))return c?c.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}},1957:function(e,t,n){var a="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=a},9607:function(e,t,n){var a=n(2705),o=Object.prototype,r=o.hasOwnProperty,l=o.toString,i=a?a.toStringTag:void 0;e.exports=function(e){var t=r.call(e,i),n=e[i];try{e[i]=void 0;var a=!0}catch(c){}var o=l.call(e);return a&&(t?e[i]=n:delete e[i]),o}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,n){var a=n(1957),o="object"==typeof self&&self&&self.Object===Object&&self,r=a||o||Function("return this")();e.exports=r},1469:function(e){var t=Array.isArray;e.exports=t},3218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,n){var a=n(4239),o=n(7005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==a(e)}},9833:function(e,t,n){var a=n(531);e.exports=function(e){return null==e?"":a(e)}}}]);
//# sourceMappingURL=component---src-pages-events-js-6be13a1f74b27e8237e9.js.map