(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4599],{48418:function(e,t,n){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,i=!1,r=void 0;try{for(var s,l=e[Symbol.iterator]();!(a=(s=l.next()).done)&&(n.push(s.value),!t||n.length!==t);a=!0);}catch(o){i=!0,r=o}finally{try{a||null==l.return||l.return()}finally{if(i)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var i,r=(i=n(67294))&&i.__esModule?i:{default:i},s=n(76273),l=n(90387),o=n(57190);var c={};function d(e,t,n,a){if(e&&s.isLocalURL(t)){e.prefetch(t,n,a).catch((function(e){0}));var i=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;c[t+"%"+n+(i?"%"+i:"")]=!0}}var u=function(e){var t,n=!1!==e.prefetch,i=l.useRouter(),u=r.default.useMemo((function(){var t=a(s.resolveHref(i,e.href,!0),2),n=t[0],r=t[1];return{href:n,as:e.as?s.resolveHref(i,e.as):r||n}}),[i,e.href,e.as]),f=u.href,h=u.as,p=e.children,m=e.replace,g=e.shallow,v=e.scroll,b=e.locale;"string"===typeof p&&(p=r.default.createElement("a",null,p));var y=(t=r.default.Children.only(p))&&"object"===typeof t&&t.ref,j=a(o.useIntersection({rootMargin:"200px"}),2),x=j[0],k=j[1],N=r.default.useCallback((function(e){x(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,x]);r.default.useEffect((function(){var e=k&&n&&s.isLocalURL(f),t="undefined"!==typeof b?b:i&&i.locale,a=c[f+"%"+h+(t?"%"+t:"")];e&&!a&&d(i,f,h,{locale:t})}),[h,f,k,b,n,i]);var w={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,a,i,r,l,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(n))&&(e.preventDefault(),null==l&&a.indexOf("#")>=0&&(l=!1),t[i?"replace":"push"](n,a,{shallow:r,locale:o,scroll:l}))}(e,i,f,h,m,g,v,b)},onMouseEnter:function(e){s.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),d(i,f,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof b?b:i&&i.locale,I=i&&i.isLocaleDomain&&s.getDomainLocale(h,E,i&&i.locales,i&&i.domainLocales);w.href=I||s.addBasePath(s.addLocale(h,E,i&&i.defaultLocale))}return r.default.cloneElement(t,w)};t.default=u},57190:function(e,t,n){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,i=!1,r=void 0;try{for(var s,l=e[Symbol.iterator]();!(a=(s=l.next()).done)&&(n.push(s.value),!t||n.length!==t);a=!0);}catch(o){i=!0,r=o}finally{try{a||null==l.return||l.return()}finally{if(i)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,o=i.useRef(),c=a(i.useState(!1),2),d=c[0],u=c[1],f=i.useCallback((function(e){o.current&&(o.current(),o.current=void 0),n||d||e&&e.tagName&&(o.current=function(e,t,n){var a=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var a=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:i,elements:a}),n}(n),i=a.id,r=a.observer,s=a.elements;return s.set(e,t),r.observe(e),function(){s.delete(e),r.unobserve(e),0===s.size&&(r.disconnect(),l.delete(i))}}(e,(function(e){return e&&u(e)}),{rootMargin:t}))}),[n,t,d]);return i.useEffect((function(){if(!s&&!d){var e=r.requestIdleCallback((function(){return u(!0)}));return function(){return r.cancelIdleCallback(e)}}}),[d]),[f,d]};var i=n(67294),r=n(9311),s="undefined"!==typeof IntersectionObserver;var l=new Map},41605:function(e,t,n){"use strict";var a=n(85893),i=(n(67294),n(41664));t.Z=function(e){var t=e.blogs;return(0,a.jsx)("section",{className:"blog-pg section-padding pt-0",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row justify-content-center",children:(0,a.jsx)("div",{className:"col-lg-11",children:(0,a.jsxs)("div",{className:"posts",children:[t.map((function(e,n){return(0,a.jsxs)("div",{className:"item ".concat(n===t.length-1?"":"mb-80"),children:[(0,a.jsx)("div",{className:"img",children:(0,a.jsx)(i.default,{href:"/blog-details/blog-details-dark",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:e.image,alt:""})})})}),(0,a.jsx)("div",{className:"content",children:(0,a.jsx)("div",{className:"row justify-content-center",children:(0,a.jsxs)("div",{className:"col-10",children:[(0,a.jsx)(i.default,{href:"/blog/blog-dark",children:(0,a.jsxs)("a",{className:"date",children:[(0,a.jsx)("span",{className:"num",children:e.date.day}),(0,a.jsx)("span",{children:e.date.month})]})}),(0,a.jsx)("div",{className:"tags",children:e.tags.map((function(e,t){return(0,a.jsx)(i.default,{href:"/",children:e},t)}))}),(0,a.jsx)("h4",{className:"title",children:(0,a.jsx)(i.default,{href:"/blog-details/blog-details-dark",children:e.title})}),(0,a.jsx)("p",{children:e.content}),(0,a.jsx)(i.default,{href:"/blog-details/blog-details-dark",children:(0,a.jsx)("a",{className:"butn bord curve mt-30",children:"Read More"})})]})})})]},e.id)})),(0,a.jsxs)("div",{className:"pagination",children:[(0,a.jsx)("span",{className:"active",children:(0,a.jsx)(i.default,{href:"/blog/blog-dark",children:"1"})}),(0,a.jsx)("span",{children:(0,a.jsx)(i.default,{href:"/blog/blog-dark",children:"2"})}),(0,a.jsx)("span",{children:(0,a.jsx)(i.default,{href:"/blog/blog-dark",children:(0,a.jsx)("a",{children:(0,a.jsx)("i",{className:"fas fa-angle-right"})})})})]})]})})})})})}},16990:function(e,t,n){"use strict";var a=n(85893);n(67294);t.Z=function(e){var t=e.title,n=e.paragraph,i=e.className;return(0,a.jsx)("section",{className:"page-header ".concat(i&&i),children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row justify-content-center",children:(0,a.jsx)("div",{className:"col-lg-7 col-md-9",children:(0,a.jsxs)("div",{className:"cont text-center",children:[(0,a.jsx)("h1",{className:"mb-10 color-font",children:t}),(0,a.jsx)("p",{children:n})]})})})})})}},41664:function(e,t,n){e.exports=n(48418)},29577:function(e){"use strict";e.exports=JSON.parse('[{"id":1,"title":"Build a Beautiful Blog With Ease","content":"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.","image":"/img/blog/b1.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}},{"id":2,"title":"Build a Beautiful Blog With Ease","content":"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.","image":"/img/blog/b2.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}},{"id":3,"title":"Build a Beautiful Blog With Ease","content":"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.","image":"/img/blog/b3.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}},{"id":4,"title":"Build a Beautiful Blog With Ease","content":"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.","image":"/img/blog/b4.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}}]')}}]);