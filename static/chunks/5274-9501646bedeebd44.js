(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5274],{48418:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,i=!1,a=void 0;try{for(var s,c=e[Symbol.iterator]();!(t=(s=c.next()).done)&&(r.push(s.value),!n||r.length!==n);t=!0);}catch(l){i=!0,a=l}finally{try{t||null==c.return||c.return()}finally{if(i)throw a}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var i,a=(i=r(67294))&&i.__esModule?i:{default:i},s=r(76273),c=r(90387),l=r(57190);var o={};function d(e,n,r,t){if(e&&s.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var i=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;o[n+"%"+r+(i?"%"+i:"")]=!0}}var u=function(e){var n,r=!1!==e.prefetch,i=c.useRouter(),u=a.default.useMemo((function(){var n=t(s.resolveHref(i,e.href,!0),2),r=n[0],a=n[1];return{href:r,as:e.as?s.resolveHref(i,e.as):a||r}}),[i,e.href,e.as]),f=u.href,p=u.as,m=e.children,h=e.replace,j=e.shallow,v=e.scroll,g=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var x=(n=a.default.Children.only(m))&&"object"===typeof n&&n.ref,N=t(l.useIntersection({rootMargin:"200px"}),2),y=N[0],b=N[1],w=a.default.useCallback((function(e){y(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,y]);a.default.useEffect((function(){var e=b&&r&&s.isLocalURL(f),n="undefined"!==typeof g?g:i&&i.locale,t=o[f+"%"+p+(n?"%"+n:"")];e&&!t&&d(i,f,p,{locale:n})}),[p,f,b,g,r,i]);var k={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,i,a,c,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(r))&&(e.preventDefault(),null==c&&t.indexOf("#")>=0&&(c=!1),n[i?"replace":"push"](r,t,{shallow:a,locale:l,scroll:c}))}(e,i,f,p,h,j,v,g)},onMouseEnter:function(e){s.isLocalURL(f)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),d(i,f,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var L="undefined"!==typeof g?g:i&&i.locale,I=i&&i.isLocaleDomain&&s.getDomainLocale(p,L,i&&i.locales,i&&i.domainLocales);k.href=I||s.addBasePath(s.addLocale(p,L,i&&i.defaultLocale))}return a.default.cloneElement(n,k)};n.default=u},57190:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,i=!1,a=void 0;try{for(var s,c=e[Symbol.iterator]();!(t=(s=c.next()).done)&&(r.push(s.value),!n||r.length!==n);t=!0);}catch(l){i=!0,a=l}finally{try{t||null==c.return||c.return()}finally{if(i)throw a}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!s,l=i.useRef(),o=t(i.useState(!1),2),d=o[0],u=o[1],f=i.useCallback((function(e){l.current&&(l.current(),l.current=void 0),r||d||e&&e.tagName&&(l.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=c.get(n);if(r)return r;var t=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return c.set(n,r={id:n,observer:i,elements:t}),r}(r),i=t.id,a=t.observer,s=t.elements;return s.set(e,n),a.observe(e),function(){s.delete(e),a.unobserve(e),0===s.size&&(a.disconnect(),c.delete(i))}}(e,(function(e){return e&&u(e)}),{rootMargin:n}))}),[r,n,d]);return i.useEffect((function(){if(!s&&!d){var e=a.requestIdleCallback((function(){return u(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),[f,d]};var i=r(67294),a=r(9311),s="undefined"!==typeof IntersectionObserver;var c=new Map},21095:function(e,n,r){"use strict";var t=r(85893);r(67294);n.Z=function(){return(0,t.jsx)("section",{className:"next-prog section-padding",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-12",children:(0,t.jsx)("div",{className:"box",children:(0,t.jsxs)("div",{className:"bg-img valign",style:{backgroundImage:"url(/img/portfolio/project2/6.jpg)"},"data-overlay-dark":"4",children:[(0,t.jsx)("div",{className:"caption ontop valign",children:(0,t.jsx)("div",{className:"o-hidden full-width",children:(0,t.jsx)("h1",{children:(0,t.jsx)("a",{href:"",children:(0,t.jsx)("div",{className:"stroke",children:"Natural plus modern."})})})})}),(0,t.jsx)("div",{className:"copy-cap valign",children:(0,t.jsx)("div",{className:"cap full-width",children:(0,t.jsx)("h1",{children:(0,t.jsx)("a",{href:"",children:(0,t.jsx)("span",{children:"Natural plus modern."})})})})})]})})})})})})}},62351:function(e,n,r){"use strict";var t=r(85893);r(67294);n.Z=function(e){var n=e.projectDescriptionData;return(0,t.jsx)("section",{className:"intro-section section-padding",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-3 col-md-4",children:(0,t.jsx)("div",{className:"htit",children:(0,t.jsxs)("h4",{children:[(0,t.jsx)("span",{children:"02 "})," Description"]})})}),(0,t.jsx)("div",{className:"col-lg-8 offset-lg-1 col-md-8",children:(0,t.jsx)("div",{className:"text js-scroll__content",children:(0,t.jsx)("p",{className:"extra-text",children:n.content})})})]})})})}},69965:function(e,n,r){"use strict";var t=r(85893),i=(r(67294),r(41664));n.Z=function(e){var n=e.projectHeaderData;return(0,t.jsx)("section",{className:"page-header proj-det bg-img parallaxie valign",style:{backgroundImage:"url(".concat(n.projectHeaderImage,")")},"data-overlay-dark":"4",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-lg-7 col-md-9",children:(0,t.jsxs)("div",{className:"cont",children:[(0,t.jsx)("h6",{children:n.title.small}),(0,t.jsx)("h2",{children:n.title.big})]})})}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-3",children:(0,t.jsxs)("div",{className:"item mt-30",children:[(0,t.jsx)("h6",{children:"Client"}),(0,t.jsx)("p",{children:(0,t.jsx)(i.default,{href:n.clientURLLink,children:(0,t.jsx)("a",{children:n.clientURLName})})})]})}),(0,t.jsx)("div",{className:"col-lg-3",children:(0,t.jsxs)("div",{className:"item mt-30",children:[(0,t.jsx)("h6",{children:"Date"}),(0,t.jsx)("p",{children:n.date})]})}),(0,t.jsx)("div",{className:"col-lg-3",children:(0,t.jsxs)("div",{className:"item mt-30",children:[(0,t.jsx)("h6",{children:"Categories"}),(0,t.jsx)("p",{children:n.categories.map((function(e,r){return(0,t.jsx)(i.default,{href:e.link,children:(0,t.jsxs)("a",{children:[e.name,n.categories.length!=r+1?" ,":""]})},e.id)}))})]})}),(0,t.jsx)("div",{className:"col-lg-3",children:(0,t.jsxs)("div",{className:"item mt-30",children:[(0,t.jsx)("h6",{children:"Tags"}),(0,t.jsx)("p",{children:n.tags.map((function(e,r){return(0,t.jsx)(i.default,{href:e.link,children:(0,t.jsxs)("a",{children:[e.name,n.tags.length!=r+1?" ,":""]})},e.id)}))})]})})]})]})})}},63769:function(e,n,r){"use strict";var t=r(85893);r(67294);n.Z=function(){return(0,t.jsx)("section",{className:"projdtal",children:(0,t.jsx)("div",{className:"popup-img",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("a",{href:"#",className:"col-md-3 popimg",children:(0,t.jsx)("img",{alt:"",src:"/img/portfolio/project2/1.jpg"})}),(0,t.jsx)("a",{href:"#",className:"col-md-3 popimg",children:(0,t.jsx)("img",{alt:"",src:"/img/portfolio/project2/2.jpg"})}),(0,t.jsx)("a",{href:"#",className:"col-md-3 popimg",children:(0,t.jsx)("img",{alt:"",src:"/img/portfolio/project2/3.jpg"})}),(0,t.jsx)("a",{href:"#",className:"col-md-3 popimg",children:(0,t.jsx)("img",{alt:"",src:"/img/portfolio/project2/5.jpg"})}),(0,t.jsx)("a",{href:"#",className:"col-md-12 popimg",children:(0,t.jsx)("img",{alt:"",src:"/img/portfolio/project2/7.jpg"})})]})})})}},61946:function(e,n,r){"use strict";var t=r(85893);r(67294);n.Z=function(e){var n=e.projectIntroductionData;return(0,t.jsx)("section",{className:"intro-section section-padding",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-3 col-md-4",children:(0,t.jsx)("div",{className:"htit",children:(0,t.jsxs)("h4",{children:[(0,t.jsx)("span",{children:"01 "})," Introduction"]})})}),(0,t.jsx)("div",{className:"col-lg-8 offset-lg-1 col-md-8",children:(0,t.jsxs)("div",{className:"text js-scroll__content",children:[(0,t.jsx)("p",{className:"extra-text",children:n.content}),(0,t.jsx)("ul",{className:"smp-list mt-30",children:n.spmList.map((function(e){return(0,t.jsx)("li",{children:e.name},e.id)}))})]})})]})})})}},72658:function(e,n,r){"use strict";var t=r(85893),i=r(67294),a=r(61239);r(45607);function s(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,i=!1,a=void 0;try{for(var s,c=e[Symbol.iterator]();!(t=(s=c.next()).done)&&(r.push(s.value),!n||r.length!==n);t=!0);}catch(l){i=!0,a=l}finally{try{t||null==c.return||c.return()}finally{if(i)throw a}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.Z=function(e){var n=e.projectVideoDate;console.clear();var r=s(i.useState(!1),2),c=r[0],l=r[1];return(0,t.jsx)("section",{children:(0,t.jsx)("div",{className:"container-fluid",children:(0,t.jsx)("div",{className:"video-wrapper section-padding bg-img parallaxie valign",style:{backgroundImage:"url(".concat(n.projectHeaderImage,")")},"data-overlay-dark":"4",children:(0,t.jsxs)("div",{className:"full-width text-center",children:[(0,t.jsx)(a.Z,{channel:"vimeo",autoplay:!0,isOpen:c,videoId:"127203262",onClose:function(){return l(!1)}}),(0,t.jsx)("a",{className:"vid",onClick:function(e){e.preventDefault(),l(!0)},children:(0,t.jsx)("div",{className:"vid-butn",children:(0,t.jsx)("span",{className:"icon",children:(0,t.jsx)("i",{className:"fas fa-play"})})})})]})})})})}},41664:function(e,n,r){e.exports=r(48418)},34268:function(e){"use strict";e.exports=JSON.parse('{"id":1,"title":{"small":"art & illustration","big":"Inspiring new space."},"clientURLLink":"#","projectHeaderImage":"/img/portfolio/project2/bg.jpg","videoLink":"https://vimeo.com/127203262","clientURLName":"Envato.com","date":"6 August 2019","categories":[{"id":1,"name":"Web Design","link":"#"},{"id":2,"name":"WordPress","link":"#"}],"tags":[{"id":1,"name":"Minimal","link":"#"},{"id":2,"name":"Modern","link":"#"},{"id":3,"name":"Design","link":"#"}],"intro":{"content":"We are a Creative Agency & Startup Studio that provides Digital Products and Services turns to focus on client success. We specialize in user interface design, including front-end development which we consider to be an integral part.","spmList":[{"id":1,"name":"Aenean sollicitudin"},{"id":2,"name":"lorem quis bibendum auctor"},{"id":31,"name":"nisi elit conseq uat ipsum"},{"id":4,"name":"nec sagittis sem nibh id elit"}]},"gallery":["/img/portfolio/project2/1.jpg","/img/portfolio/project2/2.jpg","/img/portfolio/project2/3.jpg","/img/portfolio/project2/5.jpg","/img/portfolio/project2/7.jpg"],"description":{"content":"We are a Creative Agency & Startup Studio that provides Digital Products and Services turns to focus on client success. We specialize in user interface design, including front-end development which we consider to be an integral part."}}')}}]);