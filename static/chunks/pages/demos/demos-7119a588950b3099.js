(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9736],{90508:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demos/demos",function(){return n(57543)}])},48418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,u=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(a){o=!0,u=a}finally{try{r||null==c.return||c.return()}finally{if(o)throw u}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var o,u=(o=n(67294))&&o.__esModule?o:{default:o},i=n(76273),c=n(90387),a=n(57190);var f={};function l(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var s=function(e){var t,n=!1!==e.prefetch,o=c.useRouter(),s=u.default.useMemo((function(){var t=r(i.resolveHref(o,e.href,!0),2),n=t[0],u=t[1];return{href:n,as:e.as?i.resolveHref(o,e.as):u||n}}),[o,e.href,e.as]),p=s.href,d=s.as,v=e.children,y=e.replace,h=e.shallow,b=e.scroll,g=e.locale;"string"===typeof v&&(v=u.default.createElement("a",null,v));var m=(t=u.default.Children.only(v))&&"object"===typeof t&&t.ref,w=r(a.useIntersection({rootMargin:"200px"}),2),_=w[0],E=w[1],O=u.default.useCallback((function(e){_(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,_]);u.default.useEffect((function(){var e=E&&n&&i.isLocalURL(p),t="undefined"!==typeof g?g:o&&o.locale,r=f[p+"%"+d+(t?"%"+t:"")];e&&!r&&l(o,p,d,{locale:t})}),[d,p,E,g,n,o]);var R={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,u,c,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[o?"replace":"push"](n,r,{shallow:u,locale:a,scroll:c}))}(e,o,p,d,y,h,b,g)},onMouseEnter:function(e){i.isLocalURL(p)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(o,p,d,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof g?g:o&&o.locale,L=o&&o.isLocaleDomain&&i.getDomainLocale(d,k,o&&o.locales,o&&o.domainLocales);R.href=L||i.addBasePath(i.addLocale(d,k,o&&o.defaultLocale))}return u.default.cloneElement(t,R)};t.default=s},57190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,u=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(a){o=!0,u=a}finally{try{r||null==c.return||c.return()}finally{if(o)throw u}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,a=o.useRef(),f=r(o.useState(!1),2),l=f[0],s=f[1],p=o.useCallback((function(e){a.current&&(a.current(),a.current=void 0),n||l||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,u=r.observer,i=r.elements;return i.set(e,t),u.observe(e),function(){i.delete(e),u.unobserve(e),0===i.size&&(u.disconnect(),c.delete(o))}}(e,(function(e){return e&&s(e)}),{rootMargin:t}))}),[n,t,l]);return o.useEffect((function(){if(!i&&!l){var e=u.requestIdleCallback((function(){return s(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[l]),[p,l]};var o=n(67294),u=n(9311),i="undefined"!==typeof IntersectionObserver;var c=new Map},38636:function(e,t,n){"use strict";var r=n(85893),o=n(67294);function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?u(e):t}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}var v=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(p,e);var t,n,f,l=d(p);function p(){var e;return i(this,p),a(u(e=l.apply(this,arguments)),"target",o.createRef()),a(u(e),"split",(function(){e.target.current&&Splitting({target:e.target.current})})),a(u(e),"componentDidMount",e.split),a(u(e),"componentDidUpdate",e.split),e}return t=p,(n=[{key:"render",value:function(){return(0,r.jsx)("div",{ref:this.target,children:this.props.children})}}])&&c(t.prototype,n),f&&c(t,f),p}(o.Component);t.Z=v},41664:function(e,t,n){e.exports=n(48418)}},function(e){e.O(0,[6868,7543,9774,2888,179],(function(){return t=90508,e(e.s=t);var t}));var t=e.O();_N_E=t}]);