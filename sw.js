if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const c=e=>i(e,o),d={module:{uri:o},exports:t,require:c};s[o]=Promise.all(n.map((e=>d[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3d63e799"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/icon-192.png",revision:"b01a229876d604cd111ed50b6e584c94"},{url:"assets/icon-384.png",revision:"34b91aa4cc576aa4aa9ed56c1eeb3de1"},{url:"assets/icon-512.png",revision:"b5da64f7ac9e0fae8e0b724599f7319b"},{url:"index.css",revision:"e7594785db4cdbb66fa81b898056de35"},{url:"index.html",revision:"e56af9d9051d7b27cb063a052e6820ff"},{url:"index.js",revision:"5f0bfc323e19032372f760920652ac8a"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map