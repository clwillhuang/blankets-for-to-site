(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1bYO":function(e,t,a){e.exports={title:"index-module--title--286qy",backgroundImage:"index-module--backgroundImage--1kN2-",description:"index-module--description--2FQj_",updates:"index-module--updates--2S-yv",contactBox:"index-module--contactBox--3o11v",contactBoxSide:"index-module--contactBoxSide--2N1is",whiteBtn:"index-module--whiteBtn--oc1xd",btn:"index-module--btn--2q5In",links:"index-module--links--2x29L",btnRow:"index-module--btnRow--27pa3"}},C7VN:function(e,t,a){e.exports={previewTitle:"blog-list-module--previewTitle--A_cHE",previewPublishDate:"blog-list-module--previewPublishDate--2q-DJ",previewDescription:"blog-list-module--previewDescription--2QyI4",alink:"blog-list-module--alink--2aG-o",preview:"blog-list-module--preview--2xZhq",tag:"blog-list-module--tag--3r1Ur"}},"D1b+":function(e,t,a){e.exports={previewParent:"article-preview-module--previewParent--zTD6v",alink:"article-preview-module--alink--3Zy_j",previewTitle:"article-preview-module--previewTitle--dtVfR",previewDescription:"article-preview-module--previewDescription--andbH",previewPublishDate:"article-preview-module--previewPublishDate--1_Kqg",preview:"article-preview-module--preview--35oKv",tag:"article-preview-module--tag--1jiS7"}},GeE8:function(e,t,a){e.exports=a.p+"static/skyline-3ed34978ba224a565ac046e4ecb5ffe9.jpg"},He4Z:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),l=a("Wbzz"),o=(a("9eSz"),a("C7VN")),r=a.n(o);t.a=function(e){var t=e.article;return i.a.createElement("a",{onClick:function(){return Object(l.c)("/blog/"+t.slug)},className:r.a.alink,key:t.title},i.a.createElement("div",{className:r.a.preview},i.a.createElement("h3",{className:r.a.previewTitle},t.title),i.a.createElement("small",{className:r.a.previewPublishDate},t.publishDate),i.a.createElement("div",{className:r.a.previewDescription,dangerouslySetInnerHTML:{__html:t.description.childMarkdownRemark.html}})))}},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("VbXa"),i=a.n(n),l=a("q1tI"),o=a.n(l),r=a("9eSz"),s=a.n(r),c=(a("GeE8"),a("Wbzz")),m=a("mwIZ"),u=a.n(m),d=(a("qhky"),a("Bl7J")),p=a("aWpR"),v=(a("He4Z"),a("1bYO")),b=a.n(v),w=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){u()(this,"props.data.site.siteMetadata.title");var e=u()(this,"props.data.allContentfulBlogPost.edges"),t=u()(this,"props.data.allContentfulOrganizationInformation.edges");return o.a.createElement(d.a,{location:this.props.location},o.a.createElement("div",{className:"white-background"},o.a.createElement("div",{className:b.a.title},o.a.createElement(s.a,{className:b.a.backgroundImage,fluid:t[0].node.frontPageImage.fluid}),o.a.createElement("h1",null,"Blankets for Toronto")),o.a.createElement("div",{className:b.a.description},o.a.createElement("h2",null,"Our Organization"),o.a.createElement("p",null,t[0].node.childContentfulOrganizationInformationOrganizationFrontBlurbTextNode.organizationFrontBlurb),o.a.createElement("div",{className:b.a.btnRow},o.a.createElement(c.a,{to:"/about",className:b.a.links},o.a.createElement("button",{className:b.a.whiteBtn,type:"submit"},"Learn More")),o.a.createElement(c.a,{to:"/team",className:b.a.links},o.a.createElement("button",{className:b.a.whiteBtn,type:"submit"},"Meet The Team")))),o.a.createElement("div",{className:b.a.updates},o.a.createElement("h2",null,"News and Updates"),o.a.createElement(p.a,{articles:e}),o.a.createElement(c.a,{to:"/blog",className:b.a.links},o.a.createElement("button",{className:b.a.btn,type:"submit"},"Browse all updates"))),o.a.createElement("div",{className:b.a.contactBox},o.a.createElement("div",{className:b.a.contactBoxSide},o.a.createElement("div",null,o.a.createElement("h2",null,"Join Us"),o.a.createElement("p",null,"Become part of the Blankets for Toronto community and be part of the change! Looking to join as a member? Interested in volunteering at events? Click below."),o.a.createElement(c.a,{to:"/positions",className:b.a.links},o.a.createElement("button",{className:b.a.btn,type:"submit"},"More Information")))),o.a.createElement("div",{className:b.a.contactBoxSide},o.a.createElement("div",null,o.a.createElement("h2",null,"Contact Us"),o.a.createElement("p",null,"Keep in touch with our organization to join the community and stay updated! Got an idea for an initiative? Want to collaborate with BTO? Send us a message via email or message us over social media!"),o.a.createElement(c.a,{to:"/contact",className:b.a.links},o.a.createElement("button",{className:b.a.btn,type:"submit"},"Contact Us")))))))},t}(o.a.Component);t.default=w},aWpR:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),l=a("Wbzz"),o=(a("9eSz"),a("D1b+")),r=a.n(o);t.a=function(e){var t=e.articles;return i.a.createElement("div",{className:r.a.previewParent},t.map((function(e){return i.a.createElement("a",{onClick:function(){return Object(l.c)("/blog/"+e.node.slug)},className:r.a.alink,key:e.node.title},i.a.createElement("div",{className:r.a.preview},i.a.createElement("h3",{className:r.a.previewTitle},e.node.title),i.a.createElement("small",{className:r.a.previewPublishDate},e.node.publishDate),i.a.createElement("div",{className:r.a.previewDescription,dangerouslySetInnerHTML:{__html:e.node.description.childMarkdownRemark.html}})))})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-21458ae7767487882595.js.map