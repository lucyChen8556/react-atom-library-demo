import{c}from"./createLucideIcon-e0PjoWs3.js";/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],y=c("chevron-left",f);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],w=c("chevron-right",i),u=new Date(Date.UTC(2026,0,5));function r(t){const e=new Date(t);return e.setHours(0,0,0,0),e}function l(t){return new Date(t.getFullYear(),t.getMonth(),1)}function M(t,e){return new Date(t.getFullYear(),t.getMonth()+e,1)}function h(t){return new Date(t.getFullYear(),t.getMonth()+1,0)}function d(t,e){return!t||!e?!1:r(t).getTime()===r(e).getTime()}function g(t,e){return r(t).getTime()<r(e).getTime()}function m(t,e){return r(t).getTime()>r(e).getTime()}function T(t,e){return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()}function F(t,e,a){const n=r(t);return e&&g(n,e)?r(e):a&&m(n,a)?r(a):n}function Y(t){const e=new Intl.DateTimeFormat(t,{weekday:"short"});return Array.from({length:7},(a,n)=>{const s=new Date(u);return s.setUTCDate(u.getUTCDate()+n),e.format(s)})}function _(t,e){return new Intl.DateTimeFormat(e,{month:"long",year:"numeric"}).format(t)}function p(t){const e=new Intl.DateTimeFormat(t,{month:"short"});return Array.from({length:12},(a,n)=>e.format(new Date(2026,n,1)))}function A(t){const e=Math.floor(t/10)*10;return Array.from({length:10},(a,n)=>e+n)}function k(t){const e=l(t),a=h(t),n=[],s=(e.getDay()+6)%7;for(let o=0;o<s;o+=1)n.push(null);for(let o=1;o<=a.getDate();o+=1)n.push(new Date(t.getFullYear(),t.getMonth(),o));for(;n.length%7!==0;)n.push(null);return n}export{y as C,l as a,p as b,F as c,A as d,M as e,w as f,Y as g,k as h,T as i,_ as j,g as k,m as l,d as m,h as n,r as s};
