(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8412],{48418:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(s){a=!0,o=s}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var a,o=(a=r(67294))&&a.__esModule?a:{default:a},i=r(76273),c=r(90387),s=r(57190);var u={};function l(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,a=c.useRouter(),f=o.default.useMemo((function(){var t=n(i.resolveHref(a,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?i.resolveHref(a,e.as):o||r}}),[a,e.href,e.as]),p=f.href,d=f.as,h=e.children,y=e.replace,v=e.shallow,g=e.scroll,k=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var b=(t=o.default.Children.only(h))&&"object"===typeof t&&t.ref,m=n(s.useIntersection({rootMargin:"200px"}),2),w=m[0],C=m[1],R=o.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);o.default.useEffect((function(){var e=C&&r&&i.isLocalURL(p),t="undefined"!==typeof k?k:a&&a.locale,n=u[p+"%"+d+(t?"%"+t:"")];e&&!n&&l(a,p,d,{locale:t})}),[d,p,C,k,r,a]);var x={ref:R,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==c&&n.indexOf("#")>=0&&(c=!1),t[a?"replace":"push"](r,n,{shallow:o,locale:s,scroll:c}))}(e,a,p,d,y,v,g,k)},onMouseEnter:function(e){i.isLocalURL(p)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(a,p,d,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var P="undefined"!==typeof k?k:a&&a.locale,E=a&&a.isLocaleDomain&&i.getDomainLocale(d,P,a&&a.locales,a&&a.domainLocales);x.href=E||i.addBasePath(i.addLocale(d,P,a&&a.defaultLocale))}return o.default.cloneElement(t,x)};t.default=f},57190:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(s){a=!0,o=s}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,s=a.useRef(),u=n(a.useState(!1),2),l=u[0],f=u[1],p=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||l||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,o=n.observer,i=n.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),c.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,l]);return a.useEffect((function(){if(!i&&!l){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[l]),[p,l]};var a=r(67294),o=r(9311),i="undefined"!==typeof IntersectionObserver;var c=new Map},2661:function(){},41664:function(e,t,r){e.exports=r(48418)},95774:function(e,t,r){"use strict";r.d(t,{Ip:function(){return s}});var n=r(67294),a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function o(e){var t=e.className,r=e.counterClockwise,a=e.dashRatio,o=e.pathRadius,s=e.strokeWidth,u=e.style;return(0,n.createElement)("path",{className:t,style:Object.assign({},u,c({pathRadius:o,dashRatio:a,counterClockwise:r})),d:i({pathRadius:o,counterClockwise:r}),strokeWidth:s,fillOpacity:0})}function i(e){var t=e.pathRadius,r=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+r+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+r+" 1 1 0,-"+2*t+"\n    "}function c(e){var t=e.counterClockwise,r=e.dashRatio,n=e.pathRadius,a=2*Math.PI*n,o=(1-r)*a;return{strokeDasharray:a+"px "+a+"px",strokeDashoffset:(t?-o:o)+"px"}}var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,r=e.minValue,n=e.maxValue;return(Math.min(Math.max(t,r),n)-r)/(n-r)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,r=e.className,a=e.classes,i=e.counterClockwise,c=e.styles,s=e.strokeWidth,u=e.text,l=this.getPathRadius(),f=this.getPathRatio();return(0,n.createElement)("svg",{className:a.root+" "+r,style:c.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,n.createElement)("circle",{className:a.background,style:c.background,cx:50,cy:50,r:50}):null,(0,n.createElement)(o,{className:a.trail,counterClockwise:i,dashRatio:t,pathRadius:l,strokeWidth:s,style:c.trail}),(0,n.createElement)(o,{className:a.path,counterClockwise:i,dashRatio:f*t,pathRadius:l,strokeWidth:s,style:c.path}),u?(0,n.createElement)("text",{className:a.text,style:c.text,x:50,y:50},u):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(n.Component)}}]);