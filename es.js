/*! (c) Andrea Giammarchi - ISC */
const{parse:t,stringify:e}=JSON,{defineProperty:n,getOwnPropertyDescriptor:o}=Object,r={get:(e,n)=>{const o=e[n];return"json"===n&&null!=o?t(o):o},set:(t,n,o)=>(t[n]="json"===n?e(o):o,!0)},s=new WeakMap;for(const t of[HTMLElement.prototype,SVGElement.prototype]){const{get:e}=o(t,"dataset");n(t,"dataset",{get(){let t=s.get(this);return t||s.set(this,t=new Proxy(e.call(this),r)),t}})}
