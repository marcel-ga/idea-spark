(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var Tr={},Vs={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ft=Symbol.for("react.element"),La=Symbol.for("react.portal"),Ma=Symbol.for("react.fragment"),Ua=Symbol.for("react.strict_mode"),xa=Symbol.for("react.profiler"),ja=Symbol.for("react.provider"),Fa=Symbol.for("react.context"),Va=Symbol.for("react.forward_ref"),Ba=Symbol.for("react.suspense"),$a=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy"),zi=Symbol.iterator;function Wa(r){return r===null||typeof r!="object"?null:(r=zi&&r[zi]||r["@@iterator"],typeof r=="function"?r:null)}var Bs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$s=Object.assign,Hs={};function lt(r,e,n){this.props=r,this.context=e,this.refs=Hs,this.updater=n||Bs}lt.prototype.isReactComponent={};lt.prototype.setState=function(r,e){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,e,"setState")};lt.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Ws(){}Ws.prototype=lt.prototype;function Sr(r,e,n){this.props=r,this.context=e,this.refs=Hs,this.updater=n||Bs}var Ar=Sr.prototype=new Ws;Ar.constructor=Sr;$s(Ar,lt.prototype);Ar.isPureReactComponent=!0;var Gi=Array.isArray,zs=Object.prototype.hasOwnProperty,br={current:null},Gs={key:!0,ref:!0,__self:!0,__source:!0};function qs(r,e,n){var i,o={},c=null,l=null;if(e!=null)for(i in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(c=""+e.key),e)zs.call(e,i)&&!Gs.hasOwnProperty(i)&&(o[i]=e[i]);var p=arguments.length-2;if(p===1)o.children=n;else if(1<p){for(var _=Array(p),E=0;E<p;E++)_[E]=arguments[E+2];o.children=_}if(r&&r.defaultProps)for(i in p=r.defaultProps,p)o[i]===void 0&&(o[i]=p[i]);return{$$typeof:Ft,type:r,key:c,ref:l,props:o,_owner:br.current}}function za(r,e){return{$$typeof:Ft,type:r.type,key:e,ref:r.ref,props:r.props,_owner:r._owner}}function Cr(r){return typeof r=="object"&&r!==null&&r.$$typeof===Ft}function Ga(r){var e={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(n){return e[n]})}var qi=/\/+/g;function sr(r,e){return typeof r=="object"&&r!==null&&r.key!=null?Ga(""+r.key):e.toString(36)}function gn(r,e,n,i,o){var c=typeof r;(c==="undefined"||c==="boolean")&&(r=null);var l=!1;if(r===null)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(r.$$typeof){case Ft:case La:l=!0}}if(l)return l=r,o=o(l),r=i===""?"."+sr(l,0):i,Gi(o)?(n="",r!=null&&(n=r.replace(qi,"$&/")+"/"),gn(o,e,n,"",function(E){return E})):o!=null&&(Cr(o)&&(o=za(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(qi,"$&/")+"/")+r)),e.push(o)),1;if(l=0,i=i===""?".":i+":",Gi(r))for(var p=0;p<r.length;p++){c=r[p];var _=i+sr(c,p);l+=gn(c,e,n,_,o)}else if(_=Wa(r),typeof _=="function")for(r=_.call(r),p=0;!(c=r.next()).done;)c=c.value,_=i+sr(c,p++),l+=gn(c,e,n,_,o);else if(c==="object")throw e=String(r),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function un(r,e,n){if(r==null)return r;var i=[],o=0;return gn(r,i,"","",function(c){return e.call(n,c,o++)}),i}function qa(r){if(r._status===-1){var e=r._result;e=e(),e.then(function(n){(r._status===0||r._status===-1)&&(r._status=1,r._result=n)},function(n){(r._status===0||r._status===-1)&&(r._status=2,r._result=n)}),r._status===-1&&(r._status=0,r._result=e)}if(r._status===1)return r._result.default;throw r._result}var Q={current:null},mn={transition:null},Ka={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:mn,ReactCurrentOwner:br};function Ks(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:un,forEach:function(r,e,n){un(r,function(){e.apply(this,arguments)},n)},count:function(r){var e=0;return un(r,function(){e++}),e},toArray:function(r){return un(r,function(e){return e})||[]},only:function(r){if(!Cr(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};R.Component=lt;R.Fragment=Ma;R.Profiler=xa;R.PureComponent=Sr;R.StrictMode=Ua;R.Suspense=Ba;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ka;R.act=Ks;R.cloneElement=function(r,e,n){if(r==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+r+".");var i=$s({},r.props),o=r.key,c=r.ref,l=r._owner;if(e!=null){if(e.ref!==void 0&&(c=e.ref,l=br.current),e.key!==void 0&&(o=""+e.key),r.type&&r.type.defaultProps)var p=r.type.defaultProps;for(_ in e)zs.call(e,_)&&!Gs.hasOwnProperty(_)&&(i[_]=e[_]===void 0&&p!==void 0?p[_]:e[_])}var _=arguments.length-2;if(_===1)i.children=n;else if(1<_){p=Array(_);for(var E=0;E<_;E++)p[E]=arguments[E+2];i.children=p}return{$$typeof:Ft,type:r.type,key:o,ref:c,props:i,_owner:l}};R.createContext=function(r){return r={$$typeof:Fa,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},r.Provider={$$typeof:ja,_context:r},r.Consumer=r};R.createElement=qs;R.createFactory=function(r){var e=qs.bind(null,r);return e.type=r,e};R.createRef=function(){return{current:null}};R.forwardRef=function(r){return{$$typeof:Va,render:r}};R.isValidElement=Cr;R.lazy=function(r){return{$$typeof:Ha,_payload:{_status:-1,_result:r},_init:qa}};R.memo=function(r,e){return{$$typeof:$a,type:r,compare:e===void 0?null:e}};R.startTransition=function(r){var e=mn.transition;mn.transition={};try{r()}finally{mn.transition=e}};R.unstable_act=Ks;R.useCallback=function(r,e){return Q.current.useCallback(r,e)};R.useContext=function(r){return Q.current.useContext(r)};R.useDebugValue=function(){};R.useDeferredValue=function(r){return Q.current.useDeferredValue(r)};R.useEffect=function(r,e){return Q.current.useEffect(r,e)};R.useId=function(){return Q.current.useId()};R.useImperativeHandle=function(r,e,n){return Q.current.useImperativeHandle(r,e,n)};R.useInsertionEffect=function(r,e){return Q.current.useInsertionEffect(r,e)};R.useLayoutEffect=function(r,e){return Q.current.useLayoutEffect(r,e)};R.useMemo=function(r,e){return Q.current.useMemo(r,e)};R.useReducer=function(r,e,n){return Q.current.useReducer(r,e,n)};R.useRef=function(r){return Q.current.useRef(r)};R.useState=function(r){return Q.current.useState(r)};R.useSyncExternalStore=function(r,e,n){return Q.current.useSyncExternalStore(r,e,n)};R.useTransition=function(){return Q.current.useTransition()};R.version="18.3.1";Vs.exports=R;var Ja=Vs.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xa=Ja,Ya=Symbol.for("react.element"),Za=Symbol.for("react.fragment"),Qa=Object.prototype.hasOwnProperty,ec=Xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tc={key:!0,ref:!0,__self:!0,__source:!0};function Js(r,e,n){var i,o={},c=null,l=null;n!==void 0&&(c=""+n),e.key!==void 0&&(c=""+e.key),e.ref!==void 0&&(l=e.ref);for(i in e)Qa.call(e,i)&&!tc.hasOwnProperty(i)&&(o[i]=e[i]);if(r&&r.defaultProps)for(i in e=r.defaultProps,e)o[i]===void 0&&(o[i]=e[i]);return{$$typeof:Ya,type:r,key:c,ref:l,props:o,_owner:ec.current}}Tr.Fragment=Za;Tr.jsx=Js;Tr.jsxs=Js;const nc=()=>{};var Ki={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=function(r){const e=[];let n=0;for(let i=0;i<r.length;i++){let o=r.charCodeAt(i);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&i+1<r.length&&(r.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++i)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},rc=function(r){const e=[];let n=0,i=0;for(;n<r.length;){const o=r[n++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const c=r[n++];e[i++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=r[n++],l=r[n++],p=r[n++],_=((o&7)<<18|(c&63)<<12|(l&63)<<6|p&63)-65536;e[i++]=String.fromCharCode(55296+(_>>10)),e[i++]=String.fromCharCode(56320+(_&1023))}else{const c=r[n++],l=r[n++];e[i++]=String.fromCharCode((o&15)<<12|(c&63)<<6|l&63)}}return e.join("")},Ys={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<r.length;o+=3){const c=r[o],l=o+1<r.length,p=l?r[o+1]:0,_=o+2<r.length,E=_?r[o+2]:0,A=c>>2,C=(c&3)<<4|p>>4;let S=(p&15)<<2|E>>6,j=E&63;_||(j=64,l||(S=64)),i.push(n[A],n[C],n[S],n[j])}return i.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Xs(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):rc(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<r.length;){const c=n[r.charAt(o++)],p=o<r.length?n[r.charAt(o)]:0;++o;const E=o<r.length?n[r.charAt(o)]:64;++o;const C=o<r.length?n[r.charAt(o)]:64;if(++o,c==null||p==null||E==null||C==null)throw new ic;const S=c<<2|p>>4;if(i.push(S),E!==64){const j=p<<4&240|E>>2;if(i.push(j),C!==64){const P=E<<6&192|C;i.push(P)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class ic extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sc=function(r){const e=Xs(r);return Ys.encodeByteArray(e,!0)},En=function(r){return sc(r).replace(/\./g,"")},Zs=function(r){try{return Ys.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=()=>oc().__FIREBASE_DEFAULTS__,cc=()=>{if(typeof process>"u"||typeof Ki>"u")return;const r=Ki.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},hc=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Zs(r[1]);return e&&JSON.parse(e)},Pr=()=>{try{return nc()||ac()||cc()||hc()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Qs=r=>{var e,n;return(n=(e=Pr())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[r]},lc=r=>{const e=Qs(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},eo=()=>{var r;return(r=Pr())===null||r===void 0?void 0:r.config},to=r=>{var e;return(e=Pr())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function no(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",o=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},r);return[En(JSON.stringify(n)),En(JSON.stringify(l)),""].join(".")}const Ot={};function fc(){const r={prod:[],emulator:[]};for(const e of Object.keys(Ot))Ot[e]?r.emulator.push(e):r.prod.push(e);return r}function pc(r){let e=document.getElementById(r),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),n=!0),{created:n,element:e}}let Ji=!1;function ro(r,e){if(typeof window>"u"||typeof document>"u"||!Vt(window.location.host)||Ot[r]===e||Ot[r]||Ji)return;Ot[r]=e;function n(S){return`__firebase__banner__${S}`}const i="__firebase__banner",c=fc().prod.length>0;function l(){const S=document.getElementById(i);S&&S.remove()}function p(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function _(S,j){S.setAttribute("width","24"),S.setAttribute("id",j),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function E(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{Ji=!0,l()},S}function A(S,j){S.setAttribute("id",j),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function C(){const S=pc(i),j=n("text"),P=document.getElementById(j)||document.createElement("span"),F=n("learnmore"),M=document.getElementById(F)||document.createElement("a"),ne=n("preprendIcon"),H=document.getElementById(ne)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const B=S.element;p(B),A(M,F);const te=E();_(H,ne),B.append(H,P,M,te),document.body.appendChild(B)}c?(P.innerText="Preview backend disconnected.",H.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(H.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",j)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",C):C()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Z())}function mc(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _c(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function yc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vc(){const r=Z();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function wc(){try{return typeof indexedDB=="object"}catch{return!1}}function Ic(){return new Promise((r,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(i),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var c;e(((c=o.error)===null||c===void 0?void 0:c.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec="FirebaseError";class Se extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Ec,Object.setPrototypeOf(this,Se.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bt.prototype.create)}}class Bt{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},o=`${this.service}/${e}`,c=this.errors[e],l=c?Tc(c,i):"Error",p=`${this.serviceName}: ${l} (${o}).`;return new Se(o,p,i)}}function Tc(r,e){return r.replace(Sc,(n,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const Sc=/\{\$([^}]+)}/g;function Ac(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function qe(r,e){if(r===e)return!0;const n=Object.keys(r),i=Object.keys(e);for(const o of n){if(!i.includes(o))return!1;const c=r[o],l=e[o];if(Xi(c)&&Xi(l)){if(!qe(c,l))return!1}else if(c!==l)return!1}for(const o of i)if(!n.includes(o))return!1;return!0}function Xi(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(r){const e=[];for(const[n,i]of Object.entries(r))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function bc(r,e){const n=new Cc(r,e);return n.subscribe.bind(n)}class Cc{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let o;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Pc(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:i},o.next===void 0&&(o.next=or),o.error===void 0&&(o.error=or),o.complete===void 0&&(o.complete=or);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pc(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function or(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(r){return r&&r._delegate?r._delegate:r}class Ke{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new uc;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(c){if(o)return null;throw c}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Oc(e))try{this.getOrInitializeService({instanceIdentifier:Be})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:o});i.resolve(c)}catch{}}}}clearInstance(e=Be){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Be){return this.instances.has(e)}getOptions(e=Be){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[c,l]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(c);i===p&&l.resolve(o)}return o}onInit(e,n){var i;const o=this.normalizeInstanceIdentifier(n),c=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;c.add(e),this.onInitCallbacks.set(o,c);const l=this.instances.get(o);return l&&e(l,o),()=>{c.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const o of i)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:kc(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Be){return this.component?this.component.multipleInstances?e:Be:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kc(r){return r===Be?void 0:r}function Oc(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Rc(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(L||(L={}));const Dc={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},Lc=L.INFO,Mc={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},Uc=(r,e,...n)=>{if(e<r.logLevel)return;const i=new Date().toISOString(),o=Mc[e];if(o)console[o](`[${i}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rr{constructor(e){this.name=e,this._logLevel=Lc,this._logHandler=Uc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in L))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Dc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...e),this._logHandler(this,L.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...e),this._logHandler(this,L.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,L.INFO,...e),this._logHandler(this,L.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,L.WARN,...e),this._logHandler(this,L.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...e),this._logHandler(this,L.ERROR,...e)}}const xc=(r,e)=>e.some(n=>r instanceof n);let Yi,Zi;function jc(){return Yi||(Yi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fc(){return Zi||(Zi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const io=new WeakMap,pr=new WeakMap,so=new WeakMap,ar=new WeakMap,kr=new WeakMap;function Vc(r){const e=new Promise((n,i)=>{const o=()=>{r.removeEventListener("success",c),r.removeEventListener("error",l)},c=()=>{n(Le(r.result)),o()},l=()=>{i(r.error),o()};r.addEventListener("success",c),r.addEventListener("error",l)});return e.then(n=>{n instanceof IDBCursor&&io.set(n,r)}).catch(()=>{}),kr.set(e,r),e}function Bc(r){if(pr.has(r))return;const e=new Promise((n,i)=>{const o=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",l),r.removeEventListener("abort",l)},c=()=>{n(),o()},l=()=>{i(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",c),r.addEventListener("error",l),r.addEventListener("abort",l)});pr.set(r,e)}let gr={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return pr.get(r);if(e==="objectStoreNames")return r.objectStoreNames||so.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Le(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function $c(r){gr=r(gr)}function Hc(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=r.call(cr(this),e,...n);return so.set(i,e.sort?e.sort():[e]),Le(i)}:Fc().includes(r)?function(...e){return r.apply(cr(this),e),Le(io.get(this))}:function(...e){return Le(r.apply(cr(this),e))}}function Wc(r){return typeof r=="function"?Hc(r):(r instanceof IDBTransaction&&Bc(r),xc(r,jc())?new Proxy(r,gr):r)}function Le(r){if(r instanceof IDBRequest)return Vc(r);if(ar.has(r))return ar.get(r);const e=Wc(r);return e!==r&&(ar.set(r,e),kr.set(e,r)),e}const cr=r=>kr.get(r);function zc(r,e,{blocked:n,upgrade:i,blocking:o,terminated:c}={}){const l=indexedDB.open(r,e),p=Le(l);return i&&l.addEventListener("upgradeneeded",_=>{i(Le(l.result),_.oldVersion,_.newVersion,Le(l.transaction),_)}),n&&l.addEventListener("blocked",_=>n(_.oldVersion,_.newVersion,_)),p.then(_=>{c&&_.addEventListener("close",()=>c()),o&&_.addEventListener("versionchange",E=>o(E.oldVersion,E.newVersion,E))}).catch(()=>{}),p}const Gc=["get","getKey","getAll","getAllKeys","count"],qc=["put","add","delete","clear"],hr=new Map;function Qi(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(hr.get(e))return hr.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,o=qc.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(o||Gc.includes(n)))return;const c=async function(l,...p){const _=this.transaction(l,o?"readwrite":"readonly");let E=_.store;return i&&(E=E.index(p.shift())),(await Promise.all([E[n](...p),o&&_.done]))[0]};return hr.set(e,c),c}$c(r=>({...r,get:(e,n,i)=>Qi(e,n)||r.get(e,n,i),has:(e,n)=>!!Qi(e,n)||r.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jc(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Jc(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mr="@firebase/app",es="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie=new Rr("@firebase/app"),Xc="@firebase/app-compat",Yc="@firebase/analytics-compat",Zc="@firebase/analytics",Qc="@firebase/app-check-compat",eh="@firebase/app-check",th="@firebase/auth",nh="@firebase/auth-compat",rh="@firebase/database",ih="@firebase/data-connect",sh="@firebase/database-compat",oh="@firebase/functions",ah="@firebase/functions-compat",ch="@firebase/installations",hh="@firebase/installations-compat",lh="@firebase/messaging",uh="@firebase/messaging-compat",dh="@firebase/performance",fh="@firebase/performance-compat",ph="@firebase/remote-config",gh="@firebase/remote-config-compat",mh="@firebase/storage",_h="@firebase/storage-compat",yh="@firebase/firestore",vh="@firebase/ai",wh="@firebase/firestore-compat",Ih="firebase",Eh="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r="[DEFAULT]",Th={[mr]:"fire-core",[Xc]:"fire-core-compat",[Zc]:"fire-analytics",[Yc]:"fire-analytics-compat",[eh]:"fire-app-check",[Qc]:"fire-app-check-compat",[th]:"fire-auth",[nh]:"fire-auth-compat",[rh]:"fire-rtdb",[ih]:"fire-data-connect",[sh]:"fire-rtdb-compat",[oh]:"fire-fn",[ah]:"fire-fn-compat",[ch]:"fire-iid",[hh]:"fire-iid-compat",[lh]:"fire-fcm",[uh]:"fire-fcm-compat",[dh]:"fire-perf",[fh]:"fire-perf-compat",[ph]:"fire-rc",[gh]:"fire-rc-compat",[mh]:"fire-gcs",[_h]:"fire-gcs-compat",[yh]:"fire-fst",[wh]:"fire-fst-compat",[vh]:"fire-vertex","fire-js":"fire-js",[Ih]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=new Map,Sh=new Map,yr=new Map;function ts(r,e){try{r.container.addComponent(e)}catch(n){Ie.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function at(r){const e=r.name;if(yr.has(e))return Ie.debug(`There were multiple attempts to register component ${e}.`),!1;yr.set(e,r);for(const n of Tn.values())ts(n,r);for(const n of Sh.values())ts(n,r);return!0}function Or(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function ue(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Me=new Bt("app","Firebase",Ah);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ke("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Me.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt=Eh;function oo(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const i=Object.assign({name:_r,automaticDataCollectionEnabled:!0},e),o=i.name;if(typeof o!="string"||!o)throw Me.create("bad-app-name",{appName:String(o)});if(n||(n=eo()),!n)throw Me.create("no-options");const c=Tn.get(o);if(c){if(qe(n,c.options)&&qe(i,c.config))return c;throw Me.create("duplicate-app",{appName:o})}const l=new Nc(o);for(const _ of yr.values())l.addComponent(_);const p=new bh(n,i,l);return Tn.set(o,p),p}function ao(r=_r){const e=Tn.get(r);if(!e&&r===_r&&eo())return oo();if(!e)throw Me.create("no-app",{appName:r});return e}function Ue(r,e,n){var i;let o=(i=Th[r])!==null&&i!==void 0?i:r;n&&(o+=`-${n}`);const c=o.match(/\s|\//),l=e.match(/\s|\//);if(c||l){const p=[`Unable to register library "${o}" with version "${e}":`];c&&p.push(`library name "${o}" contains illegal characters (whitespace or "/")`),c&&l&&p.push("and"),l&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ie.warn(p.join(" "));return}at(new Ke(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch="firebase-heartbeat-database",Ph=1,Ut="firebase-heartbeat-store";let lr=null;function co(){return lr||(lr=zc(Ch,Ph,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ut)}catch(n){console.warn(n)}}}}).catch(r=>{throw Me.create("idb-open",{originalErrorMessage:r.message})})),lr}async function Rh(r){try{const n=(await co()).transaction(Ut),i=await n.objectStore(Ut).get(ho(r));return await n.done,i}catch(e){if(e instanceof Se)Ie.warn(e.message);else{const n=Me.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ie.warn(n.message)}}}async function ns(r,e){try{const i=(await co()).transaction(Ut,"readwrite");await i.objectStore(Ut).put(e,ho(r)),await i.done}catch(n){if(n instanceof Se)Ie.warn(n.message);else{const i=Me.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ie.warn(i.message)}}}function ho(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh=1024,Oh=30;class Nh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Lh(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=rs();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(l=>l.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats.length>Oh){const l=Mh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Ie.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=rs(),{heartbeatsToSend:i,unsentEntries:o}=Dh(this._heartbeatsCache.heartbeats),c=En(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return Ie.warn(n),""}}}function rs(){return new Date().toISOString().substring(0,10)}function Dh(r,e=kh){const n=[];let i=r.slice();for(const o of r){const c=n.find(l=>l.agent===o.agent);if(c){if(c.dates.push(o.date),is(n)>e){c.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),is(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Lh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wc()?Ic().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Rh(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return ns(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return ns(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function is(r){return En(JSON.stringify({version:2,heartbeats:r})).length}function Mh(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let i=1;i<r.length;i++)r[i].date<n&&(n=r[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(r){at(new Ke("platform-logger",e=>new Kc(e),"PRIVATE")),at(new Ke("heartbeat",e=>new Nh(e),"PRIVATE")),Ue(mr,es,r),Ue(mr,es,"esm2017"),Ue("fire-js","")}Uh("");var xh="firebase",jh="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ue(xh,jh,"app");var ss=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nr;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(y,u){function f(){}f.prototype=u.prototype,y.D=u.prototype,y.prototype=new f,y.prototype.constructor=y,y.C=function(g,m,w){for(var d=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)d[ge-2]=arguments[ge];return u.prototype[m].apply(g,d)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(y,u,f){f||(f=0);var g=Array(16);if(typeof u=="string")for(var m=0;16>m;++m)g[m]=u.charCodeAt(f++)|u.charCodeAt(f++)<<8|u.charCodeAt(f++)<<16|u.charCodeAt(f++)<<24;else for(m=0;16>m;++m)g[m]=u[f++]|u[f++]<<8|u[f++]<<16|u[f++]<<24;u=y.g[0],f=y.g[1],m=y.g[2];var w=y.g[3],d=u+(w^f&(m^w))+g[0]+3614090360&4294967295;u=f+(d<<7&4294967295|d>>>25),d=w+(m^u&(f^m))+g[1]+3905402710&4294967295,w=u+(d<<12&4294967295|d>>>20),d=m+(f^w&(u^f))+g[2]+606105819&4294967295,m=w+(d<<17&4294967295|d>>>15),d=f+(u^m&(w^u))+g[3]+3250441966&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(w^f&(m^w))+g[4]+4118548399&4294967295,u=f+(d<<7&4294967295|d>>>25),d=w+(m^u&(f^m))+g[5]+1200080426&4294967295,w=u+(d<<12&4294967295|d>>>20),d=m+(f^w&(u^f))+g[6]+2821735955&4294967295,m=w+(d<<17&4294967295|d>>>15),d=f+(u^m&(w^u))+g[7]+4249261313&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(w^f&(m^w))+g[8]+1770035416&4294967295,u=f+(d<<7&4294967295|d>>>25),d=w+(m^u&(f^m))+g[9]+2336552879&4294967295,w=u+(d<<12&4294967295|d>>>20),d=m+(f^w&(u^f))+g[10]+4294925233&4294967295,m=w+(d<<17&4294967295|d>>>15),d=f+(u^m&(w^u))+g[11]+2304563134&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(w^f&(m^w))+g[12]+1804603682&4294967295,u=f+(d<<7&4294967295|d>>>25),d=w+(m^u&(f^m))+g[13]+4254626195&4294967295,w=u+(d<<12&4294967295|d>>>20),d=m+(f^w&(u^f))+g[14]+2792965006&4294967295,m=w+(d<<17&4294967295|d>>>15),d=f+(u^m&(w^u))+g[15]+1236535329&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(m^w&(f^m))+g[1]+4129170786&4294967295,u=f+(d<<5&4294967295|d>>>27),d=w+(f^m&(u^f))+g[6]+3225465664&4294967295,w=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(w^u))+g[11]+643717713&4294967295,m=w+(d<<14&4294967295|d>>>18),d=f+(w^u&(m^w))+g[0]+3921069994&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(m^w&(f^m))+g[5]+3593408605&4294967295,u=f+(d<<5&4294967295|d>>>27),d=w+(f^m&(u^f))+g[10]+38016083&4294967295,w=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(w^u))+g[15]+3634488961&4294967295,m=w+(d<<14&4294967295|d>>>18),d=f+(w^u&(m^w))+g[4]+3889429448&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(m^w&(f^m))+g[9]+568446438&4294967295,u=f+(d<<5&4294967295|d>>>27),d=w+(f^m&(u^f))+g[14]+3275163606&4294967295,w=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(w^u))+g[3]+4107603335&4294967295,m=w+(d<<14&4294967295|d>>>18),d=f+(w^u&(m^w))+g[8]+1163531501&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(m^w&(f^m))+g[13]+2850285829&4294967295,u=f+(d<<5&4294967295|d>>>27),d=w+(f^m&(u^f))+g[2]+4243563512&4294967295,w=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(w^u))+g[7]+1735328473&4294967295,m=w+(d<<14&4294967295|d>>>18),d=f+(w^u&(m^w))+g[12]+2368359562&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(f^m^w)+g[5]+4294588738&4294967295,u=f+(d<<4&4294967295|d>>>28),d=w+(u^f^m)+g[8]+2272392833&4294967295,w=u+(d<<11&4294967295|d>>>21),d=m+(w^u^f)+g[11]+1839030562&4294967295,m=w+(d<<16&4294967295|d>>>16),d=f+(m^w^u)+g[14]+4259657740&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(f^m^w)+g[1]+2763975236&4294967295,u=f+(d<<4&4294967295|d>>>28),d=w+(u^f^m)+g[4]+1272893353&4294967295,w=u+(d<<11&4294967295|d>>>21),d=m+(w^u^f)+g[7]+4139469664&4294967295,m=w+(d<<16&4294967295|d>>>16),d=f+(m^w^u)+g[10]+3200236656&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(f^m^w)+g[13]+681279174&4294967295,u=f+(d<<4&4294967295|d>>>28),d=w+(u^f^m)+g[0]+3936430074&4294967295,w=u+(d<<11&4294967295|d>>>21),d=m+(w^u^f)+g[3]+3572445317&4294967295,m=w+(d<<16&4294967295|d>>>16),d=f+(m^w^u)+g[6]+76029189&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(f^m^w)+g[9]+3654602809&4294967295,u=f+(d<<4&4294967295|d>>>28),d=w+(u^f^m)+g[12]+3873151461&4294967295,w=u+(d<<11&4294967295|d>>>21),d=m+(w^u^f)+g[15]+530742520&4294967295,m=w+(d<<16&4294967295|d>>>16),d=f+(m^w^u)+g[2]+3299628645&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(m^(f|~w))+g[0]+4096336452&4294967295,u=f+(d<<6&4294967295|d>>>26),d=w+(f^(u|~m))+g[7]+1126891415&4294967295,w=u+(d<<10&4294967295|d>>>22),d=m+(u^(w|~f))+g[14]+2878612391&4294967295,m=w+(d<<15&4294967295|d>>>17),d=f+(w^(m|~u))+g[5]+4237533241&4294967295,f=m+(d<<21&4294967295|d>>>11),d=u+(m^(f|~w))+g[12]+1700485571&4294967295,u=f+(d<<6&4294967295|d>>>26),d=w+(f^(u|~m))+g[3]+2399980690&4294967295,w=u+(d<<10&4294967295|d>>>22),d=m+(u^(w|~f))+g[10]+4293915773&4294967295,m=w+(d<<15&4294967295|d>>>17),d=f+(w^(m|~u))+g[1]+2240044497&4294967295,f=m+(d<<21&4294967295|d>>>11),d=u+(m^(f|~w))+g[8]+1873313359&4294967295,u=f+(d<<6&4294967295|d>>>26),d=w+(f^(u|~m))+g[15]+4264355552&4294967295,w=u+(d<<10&4294967295|d>>>22),d=m+(u^(w|~f))+g[6]+2734768916&4294967295,m=w+(d<<15&4294967295|d>>>17),d=f+(w^(m|~u))+g[13]+1309151649&4294967295,f=m+(d<<21&4294967295|d>>>11),d=u+(m^(f|~w))+g[4]+4149444226&4294967295,u=f+(d<<6&4294967295|d>>>26),d=w+(f^(u|~m))+g[11]+3174756917&4294967295,w=u+(d<<10&4294967295|d>>>22),d=m+(u^(w|~f))+g[2]+718787259&4294967295,m=w+(d<<15&4294967295|d>>>17),d=f+(w^(m|~u))+g[9]+3951481745&4294967295,y.g[0]=y.g[0]+u&4294967295,y.g[1]=y.g[1]+(m+(d<<21&4294967295|d>>>11))&4294967295,y.g[2]=y.g[2]+m&4294967295,y.g[3]=y.g[3]+w&4294967295}i.prototype.u=function(y,u){u===void 0&&(u=y.length);for(var f=u-this.blockSize,g=this.B,m=this.h,w=0;w<u;){if(m==0)for(;w<=f;)o(this,y,w),w+=this.blockSize;if(typeof y=="string"){for(;w<u;)if(g[m++]=y.charCodeAt(w++),m==this.blockSize){o(this,g),m=0;break}}else for(;w<u;)if(g[m++]=y[w++],m==this.blockSize){o(this,g),m=0;break}}this.h=m,this.o+=u},i.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var u=1;u<y.length-8;++u)y[u]=0;var f=8*this.o;for(u=y.length-8;u<y.length;++u)y[u]=f&255,f/=256;for(this.u(y),y=Array(16),u=f=0;4>u;++u)for(var g=0;32>g;g+=8)y[f++]=this.g[u]>>>g&255;return y};function c(y,u){var f=p;return Object.prototype.hasOwnProperty.call(f,y)?f[y]:f[y]=u(y)}function l(y,u){this.h=u;for(var f=[],g=!0,m=y.length-1;0<=m;m--){var w=y[m]|0;g&&w==u||(f[m]=w,g=!1)}this.g=f}var p={};function _(y){return-128<=y&&128>y?c(y,function(u){return new l([u|0],0>u?-1:0)}):new l([y|0],0>y?-1:0)}function E(y){if(isNaN(y)||!isFinite(y))return C;if(0>y)return M(E(-y));for(var u=[],f=1,g=0;y>=f;g++)u[g]=y/f|0,f*=4294967296;return new l(u,0)}function A(y,u){if(y.length==0)throw Error("number format error: empty string");if(u=u||10,2>u||36<u)throw Error("radix out of range: "+u);if(y.charAt(0)=="-")return M(A(y.substring(1),u));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var f=E(Math.pow(u,8)),g=C,m=0;m<y.length;m+=8){var w=Math.min(8,y.length-m),d=parseInt(y.substring(m,m+w),u);8>w?(w=E(Math.pow(u,w)),g=g.j(w).add(E(d))):(g=g.j(f),g=g.add(E(d)))}return g}var C=_(0),S=_(1),j=_(16777216);r=l.prototype,r.m=function(){if(F(this))return-M(this).m();for(var y=0,u=1,f=0;f<this.g.length;f++){var g=this.i(f);y+=(0<=g?g:4294967296+g)*u,u*=4294967296}return y},r.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(P(this))return"0";if(F(this))return"-"+M(this).toString(y);for(var u=E(Math.pow(y,6)),f=this,g="";;){var m=te(f,u).g;f=ne(f,m.j(u));var w=((0<f.g.length?f.g[0]:f.h)>>>0).toString(y);if(f=m,P(f))return w+g;for(;6>w.length;)w="0"+w;g=w+g}},r.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function P(y){if(y.h!=0)return!1;for(var u=0;u<y.g.length;u++)if(y.g[u]!=0)return!1;return!0}function F(y){return y.h==-1}r.l=function(y){return y=ne(this,y),F(y)?-1:P(y)?0:1};function M(y){for(var u=y.g.length,f=[],g=0;g<u;g++)f[g]=~y.g[g];return new l(f,~y.h).add(S)}r.abs=function(){return F(this)?M(this):this},r.add=function(y){for(var u=Math.max(this.g.length,y.g.length),f=[],g=0,m=0;m<=u;m++){var w=g+(this.i(m)&65535)+(y.i(m)&65535),d=(w>>>16)+(this.i(m)>>>16)+(y.i(m)>>>16);g=d>>>16,w&=65535,d&=65535,f[m]=d<<16|w}return new l(f,f[f.length-1]&-2147483648?-1:0)};function ne(y,u){return y.add(M(u))}r.j=function(y){if(P(this)||P(y))return C;if(F(this))return F(y)?M(this).j(M(y)):M(M(this).j(y));if(F(y))return M(this.j(M(y)));if(0>this.l(j)&&0>y.l(j))return E(this.m()*y.m());for(var u=this.g.length+y.g.length,f=[],g=0;g<2*u;g++)f[g]=0;for(g=0;g<this.g.length;g++)for(var m=0;m<y.g.length;m++){var w=this.i(g)>>>16,d=this.i(g)&65535,ge=y.i(m)>>>16,pt=y.i(m)&65535;f[2*g+2*m]+=d*pt,H(f,2*g+2*m),f[2*g+2*m+1]+=w*pt,H(f,2*g+2*m+1),f[2*g+2*m+1]+=d*ge,H(f,2*g+2*m+1),f[2*g+2*m+2]+=w*ge,H(f,2*g+2*m+2)}for(g=0;g<u;g++)f[g]=f[2*g+1]<<16|f[2*g];for(g=u;g<2*u;g++)f[g]=0;return new l(f,0)};function H(y,u){for(;(y[u]&65535)!=y[u];)y[u+1]+=y[u]>>>16,y[u]&=65535,u++}function B(y,u){this.g=y,this.h=u}function te(y,u){if(P(u))throw Error("division by zero");if(P(y))return new B(C,C);if(F(y))return u=te(M(y),u),new B(M(u.g),M(u.h));if(F(u))return u=te(y,M(u)),new B(M(u.g),u.h);if(30<y.g.length){if(F(y)||F(u))throw Error("slowDivide_ only works with positive integers.");for(var f=S,g=u;0>=g.l(y);)f=xe(f),g=xe(g);var m=ee(f,1),w=ee(g,1);for(g=ee(g,2),f=ee(f,2);!P(g);){var d=w.add(g);0>=d.l(y)&&(m=m.add(f),w=d),g=ee(g,1),f=ee(f,1)}return u=ne(y,m.j(u)),new B(m,u)}for(m=C;0<=y.l(u);){for(f=Math.max(1,Math.floor(y.m()/u.m())),g=Math.ceil(Math.log(f)/Math.LN2),g=48>=g?1:Math.pow(2,g-48),w=E(f),d=w.j(u);F(d)||0<d.l(y);)f-=g,w=E(f),d=w.j(u);P(w)&&(w=S),m=m.add(w),y=ne(y,d)}return new B(m,y)}r.A=function(y){return te(this,y).h},r.and=function(y){for(var u=Math.max(this.g.length,y.g.length),f=[],g=0;g<u;g++)f[g]=this.i(g)&y.i(g);return new l(f,this.h&y.h)},r.or=function(y){for(var u=Math.max(this.g.length,y.g.length),f=[],g=0;g<u;g++)f[g]=this.i(g)|y.i(g);return new l(f,this.h|y.h)},r.xor=function(y){for(var u=Math.max(this.g.length,y.g.length),f=[],g=0;g<u;g++)f[g]=this.i(g)^y.i(g);return new l(f,this.h^y.h)};function xe(y){for(var u=y.g.length+1,f=[],g=0;g<u;g++)f[g]=y.i(g)<<1|y.i(g-1)>>>31;return new l(f,y.h)}function ee(y,u){var f=u>>5;u%=32;for(var g=y.g.length-f,m=[],w=0;w<g;w++)m[w]=0<u?y.i(w+f)>>>u|y.i(w+f+1)<<32-u:y.i(w+f);return new l(m,y.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=E,l.fromString=A,Nr=l}).apply(typeof ss<"u"?ss:typeof self<"u"?self:typeof window<"u"?window:{});var dn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,s,a){return t==Array.prototype||t==Object.prototype||(t[s]=a.value),t};function n(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof dn=="object"&&dn];for(var s=0;s<t.length;++s){var a=t[s];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var i=n(this);function o(t,s){if(s)e:{var a=i;t=t.split(".");for(var h=0;h<t.length-1;h++){var v=t[h];if(!(v in a))break e;a=a[v]}t=t[t.length-1],h=a[t],s=s(h),s!=h&&s!=null&&e(a,t,{configurable:!0,writable:!0,value:s})}}function c(t,s){t instanceof String&&(t+="");var a=0,h=!1,v={next:function(){if(!h&&a<t.length){var I=a++;return{value:s(I,t[I]),done:!1}}return h=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}o("Array.prototype.values",function(t){return t||function(){return c(this,function(s,a){return a})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},p=this||self;function _(t){var s=typeof t;return s=s!="object"?s:t?Array.isArray(t)?"array":s:"null",s=="array"||s=="object"&&typeof t.length=="number"}function E(t){var s=typeof t;return s=="object"&&t!=null||s=="function"}function A(t,s,a){return t.call.apply(t.bind,arguments)}function C(t,s,a){if(!t)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,h),t.apply(s,v)}}return function(){return t.apply(s,arguments)}}function S(t,s,a){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?A:C,S.apply(null,arguments)}function j(t,s){var a=Array.prototype.slice.call(arguments,1);return function(){var h=a.slice();return h.push.apply(h,arguments),t.apply(this,h)}}function P(t,s){function a(){}a.prototype=s.prototype,t.aa=s.prototype,t.prototype=new a,t.prototype.constructor=t,t.Qb=function(h,v,I){for(var T=Array(arguments.length-2),U=2;U<arguments.length;U++)T[U-2]=arguments[U];return s.prototype[v].apply(h,T)}}function F(t){const s=t.length;if(0<s){const a=Array(s);for(let h=0;h<s;h++)a[h]=t[h];return a}return[]}function M(t,s){for(let a=1;a<arguments.length;a++){const h=arguments[a];if(_(h)){const v=t.length||0,I=h.length||0;t.length=v+I;for(let T=0;T<I;T++)t[v+T]=h[T]}else t.push(h)}}class ne{constructor(s,a){this.i=s,this.j=a,this.h=0,this.g=null}get(){let s;return 0<this.h?(this.h--,s=this.g,this.g=s.next,s.next=null):s=this.i(),s}}function H(t){return/^[\s\xa0]*$/.test(t)}function B(){var t=p.navigator;return t&&(t=t.userAgent)?t:""}function te(t){return te[" "](t),t}te[" "]=function(){};var xe=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function ee(t,s,a){for(const h in t)s.call(a,t[h],h,t)}function y(t,s){for(const a in t)s.call(void 0,t[a],a,t)}function u(t){const s={};for(const a in t)s[a]=t[a];return s}const f="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function g(t,s){let a,h;for(let v=1;v<arguments.length;v++){h=arguments[v];for(a in h)t[a]=h[a];for(let I=0;I<f.length;I++)a=f[I],Object.prototype.hasOwnProperty.call(h,a)&&(t[a]=h[a])}}function m(t){var s=1;t=t.split(":");const a=[];for(;0<s&&t.length;)a.push(t.shift()),s--;return t.length&&a.push(t.join(":")),a}function w(t){p.setTimeout(()=>{throw t},0)}function d(){var t=Dn;let s=null;return t.g&&(s=t.g,t.g=t.g.next,t.g||(t.h=null),s.next=null),s}class ge{constructor(){this.h=this.g=null}add(s,a){const h=pt.get();h.set(s,a),this.h?this.h.next=h:this.g=h,this.h=h}}var pt=new ne(()=>new Yo,t=>t.reset());class Yo{constructor(){this.next=this.g=this.h=null}set(s,a){this.h=s,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let gt,mt=!1,Dn=new ge,qr=()=>{const t=p.Promise.resolve(void 0);gt=()=>{t.then(Zo)}};var Zo=()=>{for(var t;t=d();){try{t.h.call(t.g)}catch(a){w(a)}var s=pt;s.j(t),100>s.h&&(s.h++,t.next=s.g,s.g=t)}mt=!1};function Ae(){this.s=this.s,this.C=this.C}Ae.prototype.s=!1,Ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function z(t,s){this.type=t,this.g=this.target=s,this.defaultPrevented=!1}z.prototype.h=function(){this.defaultPrevented=!0};var Qo=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var t=!1,s=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const a=()=>{};p.addEventListener("test",a,s),p.removeEventListener("test",a,s)}catch{}return t}();function _t(t,s){if(z.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var a=this.type=t.type,h=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=s,s=t.relatedTarget){if(xe){e:{try{te(s.nodeName);var v=!0;break e}catch{}v=!1}v||(s=null)}}else a=="mouseover"?s=t.fromElement:a=="mouseout"&&(s=t.toElement);this.relatedTarget=s,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ea[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&_t.aa.h.call(this)}}P(_t,z);var ea={2:"touch",3:"pen",4:"mouse"};_t.prototype.h=function(){_t.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Kt="closure_listenable_"+(1e6*Math.random()|0),ta=0;function na(t,s,a,h,v){this.listener=t,this.proxy=null,this.src=s,this.type=a,this.capture=!!h,this.ha=v,this.key=++ta,this.da=this.fa=!1}function Jt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Xt(t){this.src=t,this.g={},this.h=0}Xt.prototype.add=function(t,s,a,h,v){var I=t.toString();t=this.g[I],t||(t=this.g[I]=[],this.h++);var T=Mn(t,s,h,v);return-1<T?(s=t[T],a||(s.fa=!1)):(s=new na(s,this.src,I,!!h,v),s.fa=a,t.push(s)),s};function Ln(t,s){var a=s.type;if(a in t.g){var h=t.g[a],v=Array.prototype.indexOf.call(h,s,void 0),I;(I=0<=v)&&Array.prototype.splice.call(h,v,1),I&&(Jt(s),t.g[a].length==0&&(delete t.g[a],t.h--))}}function Mn(t,s,a,h){for(var v=0;v<t.length;++v){var I=t[v];if(!I.da&&I.listener==s&&I.capture==!!a&&I.ha==h)return v}return-1}var Un="closure_lm_"+(1e6*Math.random()|0),xn={};function Kr(t,s,a,h,v){if(Array.isArray(s)){for(var I=0;I<s.length;I++)Kr(t,s[I],a,h,v);return null}return a=Yr(a),t&&t[Kt]?t.K(s,a,E(h)?!!h.capture:!1,v):ra(t,s,a,!1,h,v)}function ra(t,s,a,h,v,I){if(!s)throw Error("Invalid event type");var T=E(v)?!!v.capture:!!v,U=Fn(t);if(U||(t[Un]=U=new Xt(t)),a=U.add(s,a,h,T,I),a.proxy)return a;if(h=ia(),a.proxy=h,h.src=t,h.listener=a,t.addEventListener)Qo||(v=T),v===void 0&&(v=!1),t.addEventListener(s.toString(),h,v);else if(t.attachEvent)t.attachEvent(Xr(s.toString()),h);else if(t.addListener&&t.removeListener)t.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return a}function ia(){function t(a){return s.call(t.src,t.listener,a)}const s=sa;return t}function Jr(t,s,a,h,v){if(Array.isArray(s))for(var I=0;I<s.length;I++)Jr(t,s[I],a,h,v);else h=E(h)?!!h.capture:!!h,a=Yr(a),t&&t[Kt]?(t=t.i,s=String(s).toString(),s in t.g&&(I=t.g[s],a=Mn(I,a,h,v),-1<a&&(Jt(I[a]),Array.prototype.splice.call(I,a,1),I.length==0&&(delete t.g[s],t.h--)))):t&&(t=Fn(t))&&(s=t.g[s.toString()],t=-1,s&&(t=Mn(s,a,h,v)),(a=-1<t?s[t]:null)&&jn(a))}function jn(t){if(typeof t!="number"&&t&&!t.da){var s=t.src;if(s&&s[Kt])Ln(s.i,t);else{var a=t.type,h=t.proxy;s.removeEventListener?s.removeEventListener(a,h,t.capture):s.detachEvent?s.detachEvent(Xr(a),h):s.addListener&&s.removeListener&&s.removeListener(h),(a=Fn(s))?(Ln(a,t),a.h==0&&(a.src=null,s[Un]=null)):Jt(t)}}}function Xr(t){return t in xn?xn[t]:xn[t]="on"+t}function sa(t,s){if(t.da)t=!0;else{s=new _t(s,this);var a=t.listener,h=t.ha||t.src;t.fa&&jn(t),t=a.call(h,s)}return t}function Fn(t){return t=t[Un],t instanceof Xt?t:null}var Vn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yr(t){return typeof t=="function"?t:(t[Vn]||(t[Vn]=function(s){return t.handleEvent(s)}),t[Vn])}function G(){Ae.call(this),this.i=new Xt(this),this.M=this,this.F=null}P(G,Ae),G.prototype[Kt]=!0,G.prototype.removeEventListener=function(t,s,a,h){Jr(this,t,s,a,h)};function J(t,s){var a,h=t.F;if(h)for(a=[];h;h=h.F)a.push(h);if(t=t.M,h=s.type||s,typeof s=="string")s=new z(s,t);else if(s instanceof z)s.target=s.target||t;else{var v=s;s=new z(h,t),g(s,v)}if(v=!0,a)for(var I=a.length-1;0<=I;I--){var T=s.g=a[I];v=Yt(T,h,!0,s)&&v}if(T=s.g=t,v=Yt(T,h,!0,s)&&v,v=Yt(T,h,!1,s)&&v,a)for(I=0;I<a.length;I++)T=s.g=a[I],v=Yt(T,h,!1,s)&&v}G.prototype.N=function(){if(G.aa.N.call(this),this.i){var t=this.i,s;for(s in t.g){for(var a=t.g[s],h=0;h<a.length;h++)Jt(a[h]);delete t.g[s],t.h--}}this.F=null},G.prototype.K=function(t,s,a,h){return this.i.add(String(t),s,!1,a,h)},G.prototype.L=function(t,s,a,h){return this.i.add(String(t),s,!0,a,h)};function Yt(t,s,a,h){if(s=t.i.g[String(s)],!s)return!0;s=s.concat();for(var v=!0,I=0;I<s.length;++I){var T=s[I];if(T&&!T.da&&T.capture==a){var U=T.listener,W=T.ha||T.src;T.fa&&Ln(t.i,T),v=U.call(W,h)!==!1&&v}}return v&&!h.defaultPrevented}function Zr(t,s,a){if(typeof t=="function")a&&(t=S(t,a));else if(t&&typeof t.handleEvent=="function")t=S(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(s)?-1:p.setTimeout(t,s||0)}function Qr(t){t.g=Zr(()=>{t.g=null,t.i&&(t.i=!1,Qr(t))},t.l);const s=t.h;t.h=null,t.m.apply(null,s)}class oa extends Ae{constructor(s,a){super(),this.m=s,this.l=a,this.h=null,this.i=!1,this.g=null}j(s){this.h=arguments,this.g?this.i=!0:Qr(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yt(t){Ae.call(this),this.h=t,this.g={}}P(yt,Ae);var ei=[];function ti(t){ee(t.g,function(s,a){this.g.hasOwnProperty(a)&&jn(s)},t),t.g={}}yt.prototype.N=function(){yt.aa.N.call(this),ti(this)},yt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Bn=p.JSON.stringify,aa=p.JSON.parse,ca=class{stringify(t){return p.JSON.stringify(t,void 0)}parse(t){return p.JSON.parse(t,void 0)}};function $n(){}$n.prototype.h=null;function ni(t){return t.h||(t.h=t.i())}function ha(){}var vt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Hn(){z.call(this,"d")}P(Hn,z);function Wn(){z.call(this,"c")}P(Wn,z);var Ye={},ri=null;function zn(){return ri=ri||new G}Ye.La="serverreachability";function ii(t){z.call(this,Ye.La,t)}P(ii,z);function wt(t){const s=zn();J(s,new ii(s))}Ye.STAT_EVENT="statevent";function si(t,s){z.call(this,Ye.STAT_EVENT,t),this.stat=s}P(si,z);function X(t){const s=zn();J(s,new si(s,t))}Ye.Ma="timingevent";function oi(t,s){z.call(this,Ye.Ma,t),this.size=s}P(oi,z);function It(t,s){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){t()},s)}function Et(){this.g=!0}Et.prototype.xa=function(){this.g=!1};function la(t,s,a,h,v,I){t.info(function(){if(t.g)if(I)for(var T="",U=I.split("&"),W=0;W<U.length;W++){var D=U[W].split("=");if(1<D.length){var q=D[0];D=D[1];var K=q.split("_");T=2<=K.length&&K[1]=="type"?T+(q+"="+D+"&"):T+(q+"=redacted&")}}else T=null;else T=I;return"XMLHTTP REQ ("+h+") [attempt "+v+"]: "+s+`
`+a+`
`+T})}function ua(t,s,a,h,v,I,T){t.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+v+"]: "+s+`
`+a+`
`+I+" "+T})}function Ze(t,s,a,h){t.info(function(){return"XMLHTTP TEXT ("+s+"): "+fa(t,a)+(h?" "+h:"")})}function da(t,s){t.info(function(){return"TIMEOUT: "+s})}Et.prototype.info=function(){};function fa(t,s){if(!t.g)return s;if(!s)return null;try{var a=JSON.parse(s);if(a){for(t=0;t<a.length;t++)if(Array.isArray(a[t])){var h=a[t];if(!(2>h.length)){var v=h[1];if(Array.isArray(v)&&!(1>v.length)){var I=v[0];if(I!="noop"&&I!="stop"&&I!="close")for(var T=1;T<v.length;T++)v[T]=""}}}}return Bn(a)}catch{return s}}var Gn={NO_ERROR:0,TIMEOUT:8},pa={},qn;function Zt(){}P(Zt,$n),Zt.prototype.g=function(){return new XMLHttpRequest},Zt.prototype.i=function(){return{}},qn=new Zt;function be(t,s,a,h){this.j=t,this.i=s,this.l=a,this.R=h||1,this.U=new yt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ai}function ai(){this.i=null,this.g="",this.h=!1}var ci={},Kn={};function Jn(t,s,a){t.L=1,t.v=nn(me(s)),t.m=a,t.P=!0,hi(t,null)}function hi(t,s){t.F=Date.now(),Qt(t),t.A=me(t.v);var a=t.A,h=t.R;Array.isArray(h)||(h=[String(h)]),Ti(a.i,"t",h),t.C=0,a=t.j.J,t.h=new ai,t.g=Bi(t.j,a?s:null,!t.m),0<t.O&&(t.M=new oa(S(t.Y,t,t.g),t.O)),s=t.U,a=t.g,h=t.ca;var v="readystatechange";Array.isArray(v)||(v&&(ei[0]=v.toString()),v=ei);for(var I=0;I<v.length;I++){var T=Kr(a,v[I],h||s.handleEvent,!1,s.h||s);if(!T)break;s.g[T.key]=T}s=t.H?u(t.H):{},t.m?(t.u||(t.u="POST"),s["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,s)):(t.u="GET",t.g.ea(t.A,t.u,null,s)),wt(),la(t.i,t.u,t.A,t.l,t.R,t.m)}be.prototype.ca=function(t){t=t.target;const s=this.M;s&&_e(t)==3?s.j():this.Y(t)},be.prototype.Y=function(t){try{if(t==this.g)e:{const K=_e(this.g);var s=this.g.Ba();const tt=this.g.Z();if(!(3>K)&&(K!=3||this.g&&(this.h.h||this.g.oa()||ki(this.g)))){this.J||K!=4||s==7||(s==8||0>=tt?wt(3):wt(2)),Xn(this);var a=this.g.Z();this.X=a;t:if(li(this)){var h=ki(this.g);t="";var v=h.length,I=_e(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){je(this),Tt(this);var T="";break t}this.h.i=new p.TextDecoder}for(s=0;s<v;s++)this.h.h=!0,t+=this.h.i.decode(h[s],{stream:!(I&&s==v-1)});h.length=0,this.h.g+=t,this.C=0,T=this.h.g}else T=this.g.oa();if(this.o=a==200,ua(this.i,this.u,this.A,this.l,this.R,K,a),this.o){if(this.T&&!this.K){t:{if(this.g){var U,W=this.g;if((U=W.g?W.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(U)){var D=U;break t}}D=null}if(a=D)Ze(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yn(this,a);else{this.o=!1,this.s=3,X(12),je(this),Tt(this);break e}}if(this.P){a=!0;let ie;for(;!this.J&&this.C<T.length;)if(ie=ga(this,T),ie==Kn){K==4&&(this.s=4,X(14),a=!1),Ze(this.i,this.l,null,"[Incomplete Response]");break}else if(ie==ci){this.s=4,X(15),Ze(this.i,this.l,T,"[Invalid Chunk]"),a=!1;break}else Ze(this.i,this.l,ie,null),Yn(this,ie);if(li(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),K!=4||T.length!=0||this.h.h||(this.s=1,X(16),a=!1),this.o=this.o&&a,!a)Ze(this.i,this.l,T,"[Invalid Chunked Response]"),je(this),Tt(this);else if(0<T.length&&!this.W){this.W=!0;var q=this.j;q.g==this&&q.ba&&!q.M&&(q.j.info("Great, no buffering proxy detected. Bytes received: "+T.length),rr(q),q.M=!0,X(11))}}else Ze(this.i,this.l,T,null),Yn(this,T);K==4&&je(this),this.o&&!this.J&&(K==4?xi(this.j,this):(this.o=!1,Qt(this)))}else Na(this.g),a==400&&0<T.indexOf("Unknown SID")?(this.s=3,X(12)):(this.s=0,X(13)),je(this),Tt(this)}}}catch{}finally{}};function li(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function ga(t,s){var a=t.C,h=s.indexOf(`
`,a);return h==-1?Kn:(a=Number(s.substring(a,h)),isNaN(a)?ci:(h+=1,h+a>s.length?Kn:(s=s.slice(h,h+a),t.C=h+a,s)))}be.prototype.cancel=function(){this.J=!0,je(this)};function Qt(t){t.S=Date.now()+t.I,ui(t,t.I)}function ui(t,s){if(t.B!=null)throw Error("WatchDog timer not null");t.B=It(S(t.ba,t),s)}function Xn(t){t.B&&(p.clearTimeout(t.B),t.B=null)}be.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(da(this.i,this.A),this.L!=2&&(wt(),X(17)),je(this),this.s=2,Tt(this)):ui(this,this.S-t)};function Tt(t){t.j.G==0||t.J||xi(t.j,t)}function je(t){Xn(t);var s=t.M;s&&typeof s.ma=="function"&&s.ma(),t.M=null,ti(t.U),t.g&&(s=t.g,t.g=null,s.abort(),s.ma())}function Yn(t,s){try{var a=t.j;if(a.G!=0&&(a.g==t||Zn(a.h,t))){if(!t.K&&Zn(a.h,t)&&a.G==3){try{var h=a.Da.g.parse(s)}catch{h=null}if(Array.isArray(h)&&h.length==3){var v=h;if(v[0]==0){e:if(!a.u){if(a.g)if(a.g.F+3e3<t.F)hn(a),an(a);else break e;nr(a),X(18)}}else a.za=v[1],0<a.za-a.T&&37500>v[2]&&a.F&&a.v==0&&!a.C&&(a.C=It(S(a.Za,a),6e3));if(1>=pi(a.h)&&a.ca){try{a.ca()}catch{}a.ca=void 0}}else Ve(a,11)}else if((t.K||a.g==t)&&hn(a),!H(s))for(v=a.Da.g.parse(s),s=0;s<v.length;s++){let D=v[s];if(a.T=D[0],D=D[1],a.G==2)if(D[0]=="c"){a.K=D[1],a.ia=D[2];const q=D[3];q!=null&&(a.la=q,a.j.info("VER="+a.la));const K=D[4];K!=null&&(a.Aa=K,a.j.info("SVER="+a.Aa));const tt=D[5];tt!=null&&typeof tt=="number"&&0<tt&&(h=1.5*tt,a.L=h,a.j.info("backChannelRequestTimeoutMs_="+h)),h=a;const ie=t.g;if(ie){const ln=ie.g?ie.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ln){var I=h.h;I.g||ln.indexOf("spdy")==-1&&ln.indexOf("quic")==-1&&ln.indexOf("h2")==-1||(I.j=I.l,I.g=new Set,I.h&&(Qn(I,I.h),I.h=null))}if(h.D){const ir=ie.g?ie.g.getResponseHeader("X-HTTP-Session-Id"):null;ir&&(h.ya=ir,x(h.I,h.D,ir))}}a.G=3,a.l&&a.l.ua(),a.ba&&(a.R=Date.now()-t.F,a.j.info("Handshake RTT: "+a.R+"ms")),h=a;var T=t;if(h.qa=Vi(h,h.J?h.ia:null,h.W),T.K){gi(h.h,T);var U=T,W=h.L;W&&(U.I=W),U.B&&(Xn(U),Qt(U)),h.g=T}else Mi(h);0<a.i.length&&cn(a)}else D[0]!="stop"&&D[0]!="close"||Ve(a,7);else a.G==3&&(D[0]=="stop"||D[0]=="close"?D[0]=="stop"?Ve(a,7):tr(a):D[0]!="noop"&&a.l&&a.l.ta(D),a.v=0)}}wt(4)}catch{}}var ma=class{constructor(t,s){this.g=t,this.map=s}};function di(t){this.l=t||10,p.PerformanceNavigationTiming?(t=p.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fi(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function pi(t){return t.h?1:t.g?t.g.size:0}function Zn(t,s){return t.h?t.h==s:t.g?t.g.has(s):!1}function Qn(t,s){t.g?t.g.add(s):t.h=s}function gi(t,s){t.h&&t.h==s?t.h=null:t.g&&t.g.has(s)&&t.g.delete(s)}di.prototype.cancel=function(){if(this.i=mi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function mi(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let s=t.i;for(const a of t.g.values())s=s.concat(a.D);return s}return F(t.i)}function _a(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(_(t)){for(var s=[],a=t.length,h=0;h<a;h++)s.push(t[h]);return s}s=[],a=0;for(h in t)s[a++]=t[h];return s}function ya(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(_(t)||typeof t=="string"){var s=[];t=t.length;for(var a=0;a<t;a++)s.push(a);return s}s=[],a=0;for(const h in t)s[a++]=h;return s}}}function _i(t,s){if(t.forEach&&typeof t.forEach=="function")t.forEach(s,void 0);else if(_(t)||typeof t=="string")Array.prototype.forEach.call(t,s,void 0);else for(var a=ya(t),h=_a(t),v=h.length,I=0;I<v;I++)s.call(void 0,h[I],a&&a[I],t)}var yi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function va(t,s){if(t){t=t.split("&");for(var a=0;a<t.length;a++){var h=t[a].indexOf("="),v=null;if(0<=h){var I=t[a].substring(0,h);v=t[a].substring(h+1)}else I=t[a];s(I,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function Fe(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof Fe){this.h=t.h,en(this,t.j),this.o=t.o,this.g=t.g,tn(this,t.s),this.l=t.l;var s=t.i,a=new bt;a.i=s.i,s.g&&(a.g=new Map(s.g),a.h=s.h),vi(this,a),this.m=t.m}else t&&(s=String(t).match(yi))?(this.h=!1,en(this,s[1]||"",!0),this.o=St(s[2]||""),this.g=St(s[3]||"",!0),tn(this,s[4]),this.l=St(s[5]||"",!0),vi(this,s[6]||"",!0),this.m=St(s[7]||"")):(this.h=!1,this.i=new bt(null,this.h))}Fe.prototype.toString=function(){var t=[],s=this.j;s&&t.push(At(s,wi,!0),":");var a=this.g;return(a||s=="file")&&(t.push("//"),(s=this.o)&&t.push(At(s,wi,!0),"@"),t.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.s,a!=null&&t.push(":",String(a))),(a=this.l)&&(this.g&&a.charAt(0)!="/"&&t.push("/"),t.push(At(a,a.charAt(0)=="/"?Ea:Ia,!0))),(a=this.i.toString())&&t.push("?",a),(a=this.m)&&t.push("#",At(a,Sa)),t.join("")};function me(t){return new Fe(t)}function en(t,s,a){t.j=a?St(s,!0):s,t.j&&(t.j=t.j.replace(/:$/,""))}function tn(t,s){if(s){if(s=Number(s),isNaN(s)||0>s)throw Error("Bad port number "+s);t.s=s}else t.s=null}function vi(t,s,a){s instanceof bt?(t.i=s,Aa(t.i,t.h)):(a||(s=At(s,Ta)),t.i=new bt(s,t.h))}function x(t,s,a){t.i.set(s,a)}function nn(t){return x(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function St(t,s){return t?s?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function At(t,s,a){return typeof t=="string"?(t=encodeURI(t).replace(s,wa),a&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function wa(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var wi=/[#\/\?@]/g,Ia=/[#\?:]/g,Ea=/[#\?]/g,Ta=/[#\?@]/g,Sa=/#/g;function bt(t,s){this.h=this.g=null,this.i=t||null,this.j=!!s}function Ce(t){t.g||(t.g=new Map,t.h=0,t.i&&va(t.i,function(s,a){t.add(decodeURIComponent(s.replace(/\+/g," ")),a)}))}r=bt.prototype,r.add=function(t,s){Ce(this),this.i=null,t=Qe(this,t);var a=this.g.get(t);return a||this.g.set(t,a=[]),a.push(s),this.h+=1,this};function Ii(t,s){Ce(t),s=Qe(t,s),t.g.has(s)&&(t.i=null,t.h-=t.g.get(s).length,t.g.delete(s))}function Ei(t,s){return Ce(t),s=Qe(t,s),t.g.has(s)}r.forEach=function(t,s){Ce(this),this.g.forEach(function(a,h){a.forEach(function(v){t.call(s,v,h,this)},this)},this)},r.na=function(){Ce(this);const t=Array.from(this.g.values()),s=Array.from(this.g.keys()),a=[];for(let h=0;h<s.length;h++){const v=t[h];for(let I=0;I<v.length;I++)a.push(s[h])}return a},r.V=function(t){Ce(this);let s=[];if(typeof t=="string")Ei(this,t)&&(s=s.concat(this.g.get(Qe(this,t))));else{t=Array.from(this.g.values());for(let a=0;a<t.length;a++)s=s.concat(t[a])}return s},r.set=function(t,s){return Ce(this),this.i=null,t=Qe(this,t),Ei(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[s]),this.h+=1,this},r.get=function(t,s){return t?(t=this.V(t),0<t.length?String(t[0]):s):s};function Ti(t,s,a){Ii(t,s),0<a.length&&(t.i=null,t.g.set(Qe(t,s),F(a)),t.h+=a.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],s=Array.from(this.g.keys());for(var a=0;a<s.length;a++){var h=s[a];const I=encodeURIComponent(String(h)),T=this.V(h);for(h=0;h<T.length;h++){var v=I;T[h]!==""&&(v+="="+encodeURIComponent(String(T[h]))),t.push(v)}}return this.i=t.join("&")};function Qe(t,s){return s=String(s),t.j&&(s=s.toLowerCase()),s}function Aa(t,s){s&&!t.j&&(Ce(t),t.i=null,t.g.forEach(function(a,h){var v=h.toLowerCase();h!=v&&(Ii(this,h),Ti(this,v,a))},t)),t.j=s}function ba(t,s){const a=new Et;if(p.Image){const h=new Image;h.onload=j(Pe,a,"TestLoadImage: loaded",!0,s,h),h.onerror=j(Pe,a,"TestLoadImage: error",!1,s,h),h.onabort=j(Pe,a,"TestLoadImage: abort",!1,s,h),h.ontimeout=j(Pe,a,"TestLoadImage: timeout",!1,s,h),p.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=t}else s(!1)}function Ca(t,s){const a=new Et,h=new AbortController,v=setTimeout(()=>{h.abort(),Pe(a,"TestPingServer: timeout",!1,s)},1e4);fetch(t,{signal:h.signal}).then(I=>{clearTimeout(v),I.ok?Pe(a,"TestPingServer: ok",!0,s):Pe(a,"TestPingServer: server error",!1,s)}).catch(()=>{clearTimeout(v),Pe(a,"TestPingServer: error",!1,s)})}function Pe(t,s,a,h,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),h(a)}catch{}}function Pa(){this.g=new ca}function Ra(t,s,a){const h=a||"";try{_i(t,function(v,I){let T=v;E(v)&&(T=Bn(v)),s.push(h+I+"="+encodeURIComponent(T))})}catch(v){throw s.push(h+"type="+encodeURIComponent("_badmap")),v}}function rn(t){this.l=t.Ub||null,this.j=t.eb||!1}P(rn,$n),rn.prototype.g=function(){return new sn(this.l,this.j)},rn.prototype.i=function(t){return function(){return t}}({});function sn(t,s){G.call(this),this.D=t,this.o=s,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(sn,G),r=sn.prototype,r.open=function(t,s){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=s,this.readyState=1,Pt(this)},r.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const s={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(s.body=t),(this.D||p).fetch(new Request(this.A,s)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ct(this)),this.readyState=0},r.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Pt(this)),this.g&&(this.readyState=3,Pt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Si(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function Si(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}r.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var s=t.value?t.value:new Uint8Array(0);(s=this.v.decode(s,{stream:!t.done}))&&(this.response=this.responseText+=s)}t.done?Ct(this):Pt(this),this.readyState==3&&Si(this)}},r.Ra=function(t){this.g&&(this.response=this.responseText=t,Ct(this))},r.Qa=function(t){this.g&&(this.response=t,Ct(this))},r.ga=function(){this.g&&Ct(this)};function Ct(t){t.readyState=4,t.l=null,t.j=null,t.v=null,Pt(t)}r.setRequestHeader=function(t,s){this.u.append(t,s)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],s=this.h.entries();for(var a=s.next();!a.done;)a=a.value,t.push(a[0]+": "+a[1]),a=s.next();return t.join(`\r
`)};function Pt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(sn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function Ai(t){let s="";return ee(t,function(a,h){s+=h,s+=":",s+=a,s+=`\r
`}),s}function er(t,s,a){e:{for(h in a){var h=!1;break e}h=!0}h||(a=Ai(a),typeof t=="string"?a!=null&&encodeURIComponent(String(a)):x(t,s,a))}function V(t){G.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(V,G);var ka=/^https?$/i,Oa=["POST","PUT"];r=V.prototype,r.Ha=function(t){this.J=t},r.ea=function(t,s,a,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);s=s?s.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():qn.g(),this.v=this.o?ni(this.o):ni(qn),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(s,String(t),!0),this.B=!1}catch(I){bi(this,I);return}if(t=a||"",a=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var v in h)a.set(v,h[v]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const I of h.keys())a.set(I,h.get(I));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(a.keys()).find(I=>I.toLowerCase()=="content-type"),v=p.FormData&&t instanceof p.FormData,!(0<=Array.prototype.indexOf.call(Oa,s,void 0))||h||v||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[I,T]of a)this.g.setRequestHeader(I,T);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ri(this),this.u=!0,this.g.send(t),this.u=!1}catch(I){bi(this,I)}};function bi(t,s){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=s,t.m=5,Ci(t),on(t)}function Ci(t){t.A||(t.A=!0,J(t,"complete"),J(t,"error"))}r.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,J(this,"complete"),J(this,"abort"),on(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),on(this,!0)),V.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Pi(this):this.bb())},r.bb=function(){Pi(this)};function Pi(t){if(t.h&&typeof l<"u"&&(!t.v[1]||_e(t)!=4||t.Z()!=2)){if(t.u&&_e(t)==4)Zr(t.Ea,0,t);else if(J(t,"readystatechange"),_e(t)==4){t.h=!1;try{const T=t.Z();e:switch(T){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var s=!0;break e;default:s=!1}var a;if(!(a=s)){var h;if(h=T===0){var v=String(t.D).match(yi)[1]||null;!v&&p.self&&p.self.location&&(v=p.self.location.protocol.slice(0,-1)),h=!ka.test(v?v.toLowerCase():"")}a=h}if(a)J(t,"complete"),J(t,"success");else{t.m=6;try{var I=2<_e(t)?t.g.statusText:""}catch{I=""}t.l=I+" ["+t.Z()+"]",Ci(t)}}finally{on(t)}}}}function on(t,s){if(t.g){Ri(t);const a=t.g,h=t.v[0]?()=>{}:null;t.g=null,t.v=null,s||J(t,"ready");try{a.onreadystatechange=h}catch{}}}function Ri(t){t.I&&(p.clearTimeout(t.I),t.I=null)}r.isActive=function(){return!!this.g};function _e(t){return t.g?t.g.readyState:0}r.Z=function(){try{return 2<_e(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(t){if(this.g){var s=this.g.responseText;return t&&s.indexOf(t)==0&&(s=s.substring(t.length)),aa(s)}};function ki(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Na(t){const s={};t=(t.g&&2<=_e(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<t.length;h++){if(H(t[h]))continue;var a=m(t[h]);const v=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const I=s[v]||[];s[v]=I,I.push(a)}y(s,function(h){return h.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Rt(t,s,a){return a&&a.internalChannelParams&&a.internalChannelParams[t]||s}function Oi(t){this.Aa=0,this.i=[],this.j=new Et,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Rt("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Rt("baseRetryDelayMs",5e3,t),this.cb=Rt("retryDelaySeedMs",1e4,t),this.Wa=Rt("forwardChannelMaxRetries",2,t),this.wa=Rt("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new di(t&&t.concurrentRequestLimit),this.Da=new Pa,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Oi.prototype,r.la=8,r.G=1,r.connect=function(t,s,a,h){X(0),this.W=t,this.H=s||{},a&&h!==void 0&&(this.H.OSID=a,this.H.OAID=h),this.F=this.X,this.I=Vi(this,null,this.W),cn(this)};function tr(t){if(Ni(t),t.G==3){var s=t.U++,a=me(t.I);if(x(a,"SID",t.K),x(a,"RID",s),x(a,"TYPE","terminate"),kt(t,a),s=new be(t,t.j,s),s.L=2,s.v=nn(me(a)),a=!1,p.navigator&&p.navigator.sendBeacon)try{a=p.navigator.sendBeacon(s.v.toString(),"")}catch{}!a&&p.Image&&(new Image().src=s.v,a=!0),a||(s.g=Bi(s.j,null),s.g.ea(s.v)),s.F=Date.now(),Qt(s)}Fi(t)}function an(t){t.g&&(rr(t),t.g.cancel(),t.g=null)}function Ni(t){an(t),t.u&&(p.clearTimeout(t.u),t.u=null),hn(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&p.clearTimeout(t.s),t.s=null)}function cn(t){if(!fi(t.h)&&!t.s){t.s=!0;var s=t.Ga;gt||qr(),mt||(gt(),mt=!0),Dn.add(s,t),t.B=0}}function Da(t,s){return pi(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=s.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=It(S(t.Ga,t,s),ji(t,t.B)),t.B++,!0)}r.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const v=new be(this,this.j,t);let I=this.o;if(this.S&&(I?(I=u(I),g(I,this.S)):I=this.S),this.m!==null||this.O||(v.H=I,I=null),this.P)e:{for(var s=0,a=0;a<this.i.length;a++){t:{var h=this.i[a];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break t}h=void 0}if(h===void 0)break;if(s+=h,4096<s){s=a;break e}if(s===4096||a===this.i.length-1){s=a+1;break e}}s=1e3}else s=1e3;s=Li(this,v,s),a=me(this.I),x(a,"RID",t),x(a,"CVER",22),this.D&&x(a,"X-HTTP-Session-Id",this.D),kt(this,a),I&&(this.O?s="headers="+encodeURIComponent(String(Ai(I)))+"&"+s:this.m&&er(a,this.m,I)),Qn(this.h,v),this.Ua&&x(a,"TYPE","init"),this.P?(x(a,"$req",s),x(a,"SID","null"),v.T=!0,Jn(v,a,null)):Jn(v,a,s),this.G=2}}else this.G==3&&(t?Di(this,t):this.i.length==0||fi(this.h)||Di(this))};function Di(t,s){var a;s?a=s.l:a=t.U++;const h=me(t.I);x(h,"SID",t.K),x(h,"RID",a),x(h,"AID",t.T),kt(t,h),t.m&&t.o&&er(h,t.m,t.o),a=new be(t,t.j,a,t.B+1),t.m===null&&(a.H=t.o),s&&(t.i=s.D.concat(t.i)),s=Li(t,a,1e3),a.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Qn(t.h,a),Jn(a,h,s)}function kt(t,s){t.H&&ee(t.H,function(a,h){x(s,h,a)}),t.l&&_i({},function(a,h){x(s,h,a)})}function Li(t,s,a){a=Math.min(t.i.length,a);var h=t.l?S(t.l.Na,t.l,t):null;e:{var v=t.i;let I=-1;for(;;){const T=["count="+a];I==-1?0<a?(I=v[0].g,T.push("ofs="+I)):I=0:T.push("ofs="+I);let U=!0;for(let W=0;W<a;W++){let D=v[W].g;const q=v[W].map;if(D-=I,0>D)I=Math.max(0,v[W].g-100),U=!1;else try{Ra(q,T,"req"+D+"_")}catch{h&&h(q)}}if(U){h=T.join("&");break e}}}return t=t.i.splice(0,a),s.D=t,h}function Mi(t){if(!t.g&&!t.u){t.Y=1;var s=t.Fa;gt||qr(),mt||(gt(),mt=!0),Dn.add(s,t),t.v=0}}function nr(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=It(S(t.Fa,t),ji(t,t.v)),t.v++,!0)}r.Fa=function(){if(this.u=null,Ui(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=It(S(this.ab,this),t)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,X(10),an(this),Ui(this))};function rr(t){t.A!=null&&(p.clearTimeout(t.A),t.A=null)}function Ui(t){t.g=new be(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var s=me(t.qa);x(s,"RID","rpc"),x(s,"SID",t.K),x(s,"AID",t.T),x(s,"CI",t.F?"0":"1"),!t.F&&t.ja&&x(s,"TO",t.ja),x(s,"TYPE","xmlhttp"),kt(t,s),t.m&&t.o&&er(s,t.m,t.o),t.L&&(t.g.I=t.L);var a=t.g;t=t.ia,a.L=1,a.v=nn(me(s)),a.m=null,a.P=!0,hi(a,t)}r.Za=function(){this.C!=null&&(this.C=null,an(this),nr(this),X(19))};function hn(t){t.C!=null&&(p.clearTimeout(t.C),t.C=null)}function xi(t,s){var a=null;if(t.g==s){hn(t),rr(t),t.g=null;var h=2}else if(Zn(t.h,s))a=s.D,gi(t.h,s),h=1;else return;if(t.G!=0){if(s.o)if(h==1){a=s.m?s.m.length:0,s=Date.now()-s.F;var v=t.B;h=zn(),J(h,new oi(h,a)),cn(t)}else Mi(t);else if(v=s.s,v==3||v==0&&0<s.X||!(h==1&&Da(t,s)||h==2&&nr(t)))switch(a&&0<a.length&&(s=t.h,s.i=s.i.concat(a)),v){case 1:Ve(t,5);break;case 4:Ve(t,10);break;case 3:Ve(t,6);break;default:Ve(t,2)}}}function ji(t,s){let a=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(a*=2),a*s}function Ve(t,s){if(t.j.info("Error code "+s),s==2){var a=S(t.fb,t),h=t.Xa;const v=!h;h=new Fe(h||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||en(h,"https"),nn(h),v?ba(h.toString(),a):Ca(h.toString(),a)}else X(2);t.G=0,t.l&&t.l.sa(s),Fi(t),Ni(t)}r.fb=function(t){t?(this.j.info("Successfully pinged google.com"),X(2)):(this.j.info("Failed to ping google.com"),X(1))};function Fi(t){if(t.G=0,t.ka=[],t.l){const s=mi(t.h);(s.length!=0||t.i.length!=0)&&(M(t.ka,s),M(t.ka,t.i),t.h.i.length=0,F(t.i),t.i.length=0),t.l.ra()}}function Vi(t,s,a){var h=a instanceof Fe?me(a):new Fe(a);if(h.g!="")s&&(h.g=s+"."+h.g),tn(h,h.s);else{var v=p.location;h=v.protocol,s=s?s+"."+v.hostname:v.hostname,v=+v.port;var I=new Fe(null);h&&en(I,h),s&&(I.g=s),v&&tn(I,v),a&&(I.l=a),h=I}return a=t.D,s=t.ya,a&&s&&x(h,a,s),x(h,"VER",t.la),kt(t,h),h}function Bi(t,s,a){if(s&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return s=t.Ca&&!t.pa?new V(new rn({eb:a})):new V(t.pa),s.Ha(t.J),s}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function $i(){}r=$i.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function re(t,s){G.call(this),this.g=new Oi(s),this.l=t,this.h=s&&s.messageUrlParams||null,t=s&&s.messageHeaders||null,s&&s.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=s&&s.initMessageHeaders||null,s&&s.messageContentType&&(t?t["X-WebChannel-Content-Type"]=s.messageContentType:t={"X-WebChannel-Content-Type":s.messageContentType}),s&&s.va&&(t?t["X-WebChannel-Client-Profile"]=s.va:t={"X-WebChannel-Client-Profile":s.va}),this.g.S=t,(t=s&&s.Sb)&&!H(t)&&(this.g.m=t),this.v=s&&s.supportsCrossDomainXhr||!1,this.u=s&&s.sendRawJson||!1,(s=s&&s.httpSessionIdParam)&&!H(s)&&(this.g.D=s,t=this.h,t!==null&&s in t&&(t=this.h,s in t&&delete t[s])),this.j=new et(this)}P(re,G),re.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},re.prototype.close=function(){tr(this.g)},re.prototype.o=function(t){var s=this.g;if(typeof t=="string"){var a={};a.__data__=t,t=a}else this.u&&(a={},a.__data__=Bn(t),t=a);s.i.push(new ma(s.Ya++,t)),s.G==3&&cn(s)},re.prototype.N=function(){this.g.l=null,delete this.j,tr(this.g),delete this.g,re.aa.N.call(this)};function Hi(t){Hn.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var s=t.__sm__;if(s){e:{for(const a in s){t=a;break e}t=void 0}(this.i=t)&&(t=this.i,s=s!==null&&t in s?s[t]:void 0),this.data=s}else this.data=t}P(Hi,Hn);function Wi(){Wn.call(this),this.status=1}P(Wi,Wn);function et(t){this.g=t}P(et,$i),et.prototype.ua=function(){J(this.g,"a")},et.prototype.ta=function(t){J(this.g,new Hi(t))},et.prototype.sa=function(t){J(this.g,new Wi)},et.prototype.ra=function(){J(this.g,"b")},re.prototype.send=re.prototype.o,re.prototype.open=re.prototype.m,re.prototype.close=re.prototype.close,Gn.NO_ERROR=0,Gn.TIMEOUT=8,Gn.HTTP_ERROR=6,pa.COMPLETE="complete",ha.EventType=vt,vt.OPEN="a",vt.CLOSE="b",vt.ERROR="c",vt.MESSAGE="d",G.prototype.listen=G.prototype.K,V.prototype.listenOnce=V.prototype.L,V.prototype.getLastError=V.prototype.Ka,V.prototype.getLastErrorCode=V.prototype.Ba,V.prototype.getStatus=V.prototype.Z,V.prototype.getResponseJson=V.prototype.Oa,V.prototype.getResponseText=V.prototype.oa,V.prototype.send=V.prototype.ea,V.prototype.setWithCredentials=V.prototype.Ha}).apply(typeof dn<"u"?dn:typeof self<"u"?self:typeof window<"u"?window:{});const os="@firebase/firestore",as="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Y.UNAUTHENTICATED=new Y(null),Y.GOOGLE_CREDENTIALS=new Y("google-credentials-uid"),Y.FIRST_PARTY=new Y("first-party-uid"),Y.MOCK_USER=new Y("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ht="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=new Rr("@firebase/firestore");function oe(r,...e){if(ct.logLevel<=L.DEBUG){const n=e.map(Dr);ct.debug(`Firestore (${Ht}): ${r}`,...n)}}function lo(r,...e){if(ct.logLevel<=L.ERROR){const n=e.map(Dr);ct.error(`Firestore (${Ht}): ${r}`,...n)}}function Fh(r,...e){if(ct.logLevel<=L.WARN){const n=e.map(Dr);ct.warn(`Firestore (${Ht}): ${r}`,...n)}}function Dr(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(r,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,uo(r,i,n)}function uo(r,e,n){let i=`FIRESTORE (${Ht}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw lo(i),new Error(i)}function Nt(r,e,n,i){let o="Unexpected state";typeof n=="string"?o=n:i=n,r||uo(e,o,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class N extends Se{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Vh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Y.UNAUTHENTICATED))}shutdown(){}}class Bh{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class $h{constructor(e){this.t=e,this.currentUser=Y.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Nt(this.o===void 0,42304);let i=this.i;const o=_=>this.i!==i?(i=this.i,n(_)):Promise.resolve();let c=new Dt;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Dt,e.enqueueRetryable(()=>o(this.currentUser))};const l=()=>{const _=c;e.enqueueRetryable(async()=>{await _.promise,await o(this.currentUser)})},p=_=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=_,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(_=>p(_)),setTimeout(()=>{if(!this.auth){const _=this.t.getImmediate({optional:!0});_?p(_):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Dt)}},0),l()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Nt(typeof i.accessToken=="string",31837,{l:i}),new fo(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Nt(e===null||typeof e=="string",2055,{h:e}),new Y(e)}}class Hh{constructor(e,n,i){this.P=e,this.T=n,this.I=i,this.type="FirstParty",this.user=Y.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Wh{constructor(e,n,i){this.P=e,this.T=n,this.I=i}getToken(){return Promise.resolve(new Hh(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Y.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cs{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zh{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ue(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Nt(this.o===void 0,3512);const i=c=>{c.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const l=c.token!==this.m;return this.m=c.token,oe("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>i(c))};const o=c=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(c=>o(c)),setTimeout(()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?o(c):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new cs(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Nt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new cs(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<r;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=Gh(40);for(let c=0;c<o.length;++c)i.length<20&&o[c]<n&&(i+=e.charAt(o[c]%62))}return i}}function ce(r,e){return r<e?-1:r>e?1:0}function Jh(r,e){let n=0;for(;n<r.length&&n<e.length;){const i=r.codePointAt(n),o=e.codePointAt(n);if(i!==o){if(i<128&&o<128)return ce(i,o);{const c=qh(),l=Xh(c.encode(hs(r,n)),c.encode(hs(e,n)));return l!==0?l:ce(i,o)}}n+=i>65535?2:1}return ce(r.length,e.length)}function hs(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function Xh(r,e){for(let n=0;n<r.length&&n<e.length;++n)if(r[n]!==e[n])return ce(r[n],e[n]);return ce(r.length,e.length)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls="__name__";class he{constructor(e,n,i){n===void 0?n=0:n>e.length&&xt(637,{offset:n,range:e.length}),i===void 0?i=e.length-n:i>e.length-n&&xt(1746,{length:i,range:e.length-n}),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return he.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof he?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let o=0;o<i;o++){const c=he.compareSegments(e.get(o),n.get(o));if(c!==0)return c}return ce(e.length,n.length)}static compareSegments(e,n){const i=he.isNumericId(e),o=he.isNumericId(n);return i&&!o?-1:!i&&o?1:i&&o?he.extractNumericId(e).compare(he.extractNumericId(n)):Jh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Nr.fromString(e.substring(4,e.length-2))}}class se extends he{construct(e,n,i){return new se(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new N(O.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(o=>o.length>0))}return new se(n)}static emptyPath(){return new se([])}}const Yh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends he{construct(e,n,i){return new $e(e,n,i)}static isValidIdentifier(e){return Yh.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ls}static keyField(){return new $e([ls])}static fromServerFormat(e){const n=[];let i="",o=0;const c=()=>{if(i.length===0)throw new N(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let l=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new N(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const _=e[o+1];if(_!=="\\"&&_!=="."&&_!=="`")throw new N(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=_,o+=2}else p==="`"?(l=!l,o++):p!=="."||l?(i+=p,o++):(c(),o++)}if(c(),l)throw new N(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(n)}static emptyPath(){return new $e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.path=e}static fromPath(e){return new He(se.fromString(e))}static fromName(e){return new He(se.fromString(e).popFirst(5))}static empty(){return new He(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new He(new se(e.slice()))}}function Zh(r,e,n,i){if(e===!0&&i===!0)throw new N(O.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function Qh(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function el(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":xt(12329,{type:typeof r})}function tl(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new N(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=el(r);throw new N(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(r,e){const n={typeString:r};return e&&(n.value=e),n}function Wt(r,e){if(!Qh(r))throw new N(O.INVALID_ARGUMENT,"JSON must be an object");let n;for(const i in e)if(e[i]){const o=e[i].typeString,c="value"in e[i]?{value:e[i].value}:void 0;if(!(i in r)){n=`JSON missing required field: '${i}'`;break}const l=r[i];if(o&&typeof l!==o){n=`JSON field '${i}' must be a ${o}.`;break}if(c!==void 0&&l!==c.value){n=`Expected '${i}' field to equal '${c.value}'`;break}}if(n)throw new N(O.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=-62135596800,ds=1e6;class le{static now(){return le.fromMillis(Date.now())}static fromDate(e){return le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor((e-1e3*n)*ds);return new le(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new N(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new N(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<us)throw new N(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ds}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:le._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Wt(e,le._jsonSchema))return new le(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-us;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}le._jsonSchemaVersion="firestore/timestamp/1.0",le._jsonSchema={type:$("string",le._jsonSchemaVersion),seconds:$("number"),nanoseconds:$("number")};function nl(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(o){try{return atob(o)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new rl("Invalid base64 string: "+c):c}}(e);return new Je(n)}static fromUint8Array(e){const n=function(o){let c="";for(let l=0;l<o.length;++l)c+=String.fromCharCode(o[l]);return c}(e);return new Je(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let o=0;o<n.length;o++)i[o]=n.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const vr="(default)";class Sn{constructor(e,n){this.projectId=e,this.database=n||vr}static empty(){return new Sn("","")}get isDefaultDatabase(){return this.database===vr}isEqual(e){return e instanceof Sn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n=null,i=[],o=[],c=null,l="F",p=null,_=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=o,this.limit=c,this.limitType=l,this.startAt=p,this.endAt=_,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function sl(r){return new il(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fs,k;(k=fs||(fs={}))[k.OK=0]="OK",k[k.CANCELLED=1]="CANCELLED",k[k.UNKNOWN=2]="UNKNOWN",k[k.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",k[k.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",k[k.NOT_FOUND=5]="NOT_FOUND",k[k.ALREADY_EXISTS=6]="ALREADY_EXISTS",k[k.PERMISSION_DENIED=7]="PERMISSION_DENIED",k[k.UNAUTHENTICATED=16]="UNAUTHENTICATED",k[k.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",k[k.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",k[k.ABORTED=10]="ABORTED",k[k.OUT_OF_RANGE=11]="OUT_OF_RANGE",k[k.UNIMPLEMENTED=12]="UNIMPLEMENTED",k[k.INTERNAL=13]="INTERNAL",k[k.UNAVAILABLE=14]="UNAVAILABLE",k[k.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Nr([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al=1048576;function ur(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n,i=1e3,o=1.5,c=6e4){this.Fi=e,this.timerId=n,this.d_=i,this.E_=o,this.A_=c,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),o=Math.max(0,n-i);o>0&&oe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n,i,o,c){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=o,this.removalCallback=c,this.deferred=new Dt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,o,c){const l=Date.now()+i,p=new Lr(e,n,l,o,c);return p.start(i),p}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var ps,gs;(gs=ps||(ps={})).Fa="default",gs.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po="firestore.googleapis.com",_s=!0;class ys{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new N(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=po,this.ssl=_s}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:_s;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ol;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<al)throw new N(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Zh("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hl((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new N(O.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new N(O.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new N(O.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class go{constructor(e,n,i,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ys({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new N(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ys(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Vh;switch(i.type){case"firstParty":return new Wh(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new N(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=ms.get(n);i&&(oe("ComponentProvider","Removing Datastore"),ms.delete(n),i.terminate())}(this),Promise.resolve()}}function ll(r,e,n,i={}){var o;r=tl(r,go);const c=Vt(e),l=r._getSettings(),p=Object.assign(Object.assign({},l),{emulatorOptions:r._getEmulatorOptions()}),_=`${e}:${n}`;c&&(no(`https://${_}`),ro("Firestore",!0)),l.host!==po&&l.host!==_&&Fh("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const E=Object.assign(Object.assign({},l),{host:_,ssl:c,emulatorOptions:i});if(!qe(E,p)&&(r._setSettings(E),i.mockUserToken)){let A,C;if(typeof i.mockUserToken=="string")A=i.mockUserToken,C=Y.MOCK_USER;else{A=dc(i.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const S=i.mockUserToken.sub||i.mockUserToken.user_id;if(!S)throw new N(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");C=new Y(S)}r._authCredentials=new Bh(new fo(A,C))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Mr(this.firestore,e,this._query)}}class de{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ur(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new de(this.firestore,e,this._key)}toJSON(){return{type:de._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,i){if(Wt(n,de._jsonSchema))return new de(e,i||null,new He(se.fromString(n.referencePath)))}}de._jsonSchemaVersion="firestore/documentReference/1.0",de._jsonSchema={type:$("string",de._jsonSchemaVersion),referencePath:$("string")};class Ur extends Mr{constructor(e,n,i){super(e,n,sl(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new de(this.firestore,null,new He(e))}withConverter(e){return new Ur(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs="AsyncQueue";class ws{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new cl(this,"async_queue_retry"),this.oc=()=>{const i=ur();i&&oe(vs,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=e;const n=ur();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=ur();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new Dt;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!nl(e))throw e;oe(vs,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(i=>{throw this.tc=i,this.nc=!1,lo("INTERNAL UNHANDLED ERROR: ",Is(i)),i}).then(i=>(this.nc=!1,i))));return this._c=n,n}enqueueAfterDelay(e,n,i){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const o=Lr.createAndSchedule(this,e,n,i,c=>this.lc(c));return this.ec.push(o),o}ac(){this.tc&&xt(47125,{hc:Is(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Is(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class ul extends go{constructor(e,n,i,o){super(e,n,i,o),this.type="firestore",this._queue=new ws,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ws(e),this._firestoreClient=void 0,await e}}}function dl(r,e){const n=typeof r=="object"?r:ao(),i=typeof r=="string"?r:vr,o=Or(n,"firestore").getImmediate({identifier:i});if(!o._initialized){const c=lc("firestore");c&&ll(o,...c)}return o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ye(Je.fromBase64String(e))}catch(n){throw new N(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ye(Je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ye._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Wt(e,ye._jsonSchema))return ye.fromBase64String(e.bytes)}}ye._jsonSchemaVersion="firestore/bytes/1.0",ye._jsonSchema={type:$("string",ye._jsonSchemaVersion),bytes:$("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new N(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new N(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new N(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:We._jsonSchemaVersion}}static fromJSON(e){if(Wt(e,We._jsonSchema))return new We(e.latitude,e.longitude)}}We._jsonSchemaVersion="firestore/geoPoint/1.0",We._jsonSchema={type:$("string",We._jsonSchemaVersion),latitude:$("number"),longitude:$("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let c=0;c<i.length;++c)if(i[c]!==o[c])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ze._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Wt(e,ze._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new ze(e.vectorValues);throw new N(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ze._jsonSchemaVersion="firestore/vectorValue/1.0",ze._jsonSchema={type:$("string",ze._jsonSchemaVersion),vectorValues:$("object")};const fl=new RegExp("[~\\*/\\[\\]]");function pl(r,e,n){if(e.search(fl)>=0)throw Es(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r);try{return new mo(...e.split("."))._internalPath}catch{throw Es(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r)}}function Es(r,e,n,i,o){let c=`Function ${e}() called with invalid data`;c+=". ";let l="";return new N(O.INVALID_ARGUMENT,c+r+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,n,i,o,c){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=o,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new de(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(yo("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class gl extends _o{data(){return super.data()}}function yo(r,e){return typeof e=="string"?pl(r,e):e instanceof mo?e._internalPath:e._delegate._internalPath}class fn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rt extends _o{constructor(e,n,i,o,c,l){super(e,n,i,o,l),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new _n(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(yo("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=rt._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}rt._jsonSchemaVersion="firestore/documentSnapshot/1.0",rt._jsonSchema={type:$("string",rt._jsonSchemaVersion),bundleSource:$("string","DocumentSnapshot"),bundleName:$("string"),bundle:$("string")};class _n extends rt{data(e={}){return super.data(e)}}class Lt{constructor(e,n,i,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new fn(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new _n(this._firestore,this._userDataWriter,i.key,i,new fn(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new N(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,c){if(o._snapshot.oldDocs.isEmpty()){let l=0;return o._snapshot.docChanges.map(p=>{const _=new _n(o._firestore,o._userDataWriter,p.doc.key,p.doc,new fn(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:_,oldIndex:-1,newIndex:l++}})}{let l=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(p=>c||p.type!==3).map(p=>{const _=new _n(o._firestore,o._userDataWriter,p.doc.key,p.doc,new fn(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let E=-1,A=-1;return p.type!==0&&(E=l.indexOf(p.doc.key),l=l.delete(p.doc.key)),p.type!==1&&(l=l.add(p.doc),A=l.indexOf(p.doc.key)),{type:ml(p.type),doc:_,oldIndex:E,newIndex:A}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Lt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Kh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],i=[],o=[];return this.docs.forEach(c=>{c._document!==null&&(n.push(c._document),i.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),o.push(c.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ml(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return xt(61501,{type:r})}}Lt._jsonSchemaVersion="firestore/querySnapshot/1.0",Lt._jsonSchema={type:$("string",Lt._jsonSchemaVersion),bundleSource:$("string","QuerySnapshot"),bundleName:$("string"),bundle:$("string")};(function(e,n=!0){(function(o){Ht=o})(dt),at(new Ke("firestore",(i,{instanceIdentifier:o,options:c})=>{const l=i.getProvider("app").getImmediate(),p=new ul(new $h(i.getProvider("auth-internal")),new zh(l,i.getProvider("app-check-internal")),function(E,A){if(!Object.prototype.hasOwnProperty.apply(E.options,["projectId"]))throw new N(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Sn(E.options.projectId,A)}(l,o),l);return c=Object.assign({useFetchStreams:n},c),p._setSettings(c),p},"PUBLIC").setMultipleInstances(!0)),Ue(os,as,e),Ue(os,as,"esm2017")})();function xr(r,e){var n={};for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&e.indexOf(i)<0&&(n[i]=r[i]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(r);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(r,i[o])&&(n[i[o]]=r[i[o]]);return n}function vo(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _l=vo,wo=new Bt("auth","Firebase",vo());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new Rr("@firebase/auth");function yl(r,...e){An.logLevel<=L.WARN&&An.warn(`Auth (${dt}): ${r}`,...e)}function yn(r,...e){An.logLevel<=L.ERROR&&An.error(`Auth (${dt}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(r,...e){throw jr(r,...e)}function fe(r,...e){return jr(r,...e)}function Io(r,e,n){const i=Object.assign(Object.assign({},_l()),{[e]:n});return new Bt("auth","Firebase",i).create(e,{appName:r.name})}function Ge(r){return Io(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jr(r,...e){if(typeof r!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=r.name),r._errorFactory.create(n,...i)}return wo.create(r,...e)}function b(r,e,...n){if(!r)throw jr(e,...n)}function ve(r){const e="INTERNAL ASSERTION FAILED: "+r;throw yn(e),new Error(e)}function Te(r,e){r||ve(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function vl(){return Ts()==="http:"||Ts()==="https:"}function Ts(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vl()||_c()||"connection"in navigator)?navigator.onLine:!0}function Il(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,n){this.shortDelay=e,this.longDelay=n,Te(n>e,"Short delay should be less than long delay!"),this.isMobile=gc()||yc()}get(){return wl()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(r,e){Te(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ve("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ve("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ve("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Sl=new zt(3e4,6e4);function Vr(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function ft(r,e,n,i,o={}){return To(r,o,async()=>{let c={},l={};i&&(e==="GET"?l=i:c={body:JSON.stringify(i)});const p=$t(Object.assign({key:r.config.apiKey},l)).slice(1),_=await r._getAdditionalHeaders();_["Content-Type"]="application/json",r.languageCode&&(_["X-Firebase-Locale"]=r.languageCode);const E=Object.assign({method:e,headers:_},c);return mc()||(E.referrerPolicy="no-referrer"),r.emulatorConfig&&Vt(r.emulatorConfig.host)&&(E.credentials="include"),Eo.fetch()(await So(r,r.config.apiHost,n,p),E)})}async function To(r,e,n){r._canInitEmulator=!1;const i=Object.assign(Object.assign({},El),e);try{const o=new bl(r),c=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const l=await c.json();if("needConfirmation"in l)throw pn(r,"account-exists-with-different-credential",l);if(c.ok&&!("errorMessage"in l))return l;{const p=c.ok?l.errorMessage:l.error.message,[_,E]=p.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw pn(r,"credential-already-in-use",l);if(_==="EMAIL_EXISTS")throw pn(r,"email-already-in-use",l);if(_==="USER_DISABLED")throw pn(r,"user-disabled",l);const A=i[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw Io(r,A,E);Ee(r,A)}}catch(o){if(o instanceof Se)throw o;Ee(r,"network-request-failed",{message:String(o)})}}async function Al(r,e,n,i,o={}){const c=await ft(r,e,n,i,o);return"mfaPendingCredential"in c&&Ee(r,"multi-factor-auth-required",{_serverResponse:c}),c}async function So(r,e,n,i){const o=`${e}${n}?${i}`,c=r,l=c.config.emulator?Fr(r.config,o):`${r.config.apiScheme}://${o}`;return Tl.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(l).toString():l}class bl{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(fe(this.auth,"network-request-failed")),Sl.get())})}}function pn(r,e,n){const i={appName:r.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const o=fe(r,e,i);return o.customData._tokenResponse=n,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cl(r,e){return ft(r,"POST","/v1/accounts:delete",e)}async function bn(r,e){return ft(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Pl(r,e=!1){const n=ut(r),i=await n.getIdToken(e),o=Br(i);b(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,l=c==null?void 0:c.sign_in_provider;return{claims:o,token:i,authTime:Mt(dr(o.auth_time)),issuedAtTime:Mt(dr(o.iat)),expirationTime:Mt(dr(o.exp)),signInProvider:l||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function dr(r){return Number(r)*1e3}function Br(r){const[e,n,i]=r.split(".");if(e===void 0||n===void 0||i===void 0)return yn("JWT malformed, contained fewer than 3 sections"),null;try{const o=Zs(n);return o?JSON.parse(o):(yn("Failed to decode base64 JWT payload"),null)}catch(o){return yn("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Ss(r){const e=Br(r);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jt(r,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Se&&Rl(i)&&r.auth.currentUser===r&&await r.auth.signOut(),i}}function Rl({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mt(this.lastLoginAt),this.creationTime=Mt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cn(r){var e;const n=r.auth,i=await r.getIdToken(),o=await jt(r,bn(n,{idToken:i}));b(o==null?void 0:o.users.length,n,"internal-error");const c=o.users[0];r._notifyReloadListener(c);const l=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?Ao(c.providerUserInfo):[],p=Nl(r.providerData,l),_=r.isAnonymous,E=!(r.email&&c.passwordHash)&&!(p!=null&&p.length),A=_?E:!1,C={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:p,metadata:new Ir(c.createdAt,c.lastLoginAt),isAnonymous:A};Object.assign(r,C)}async function Ol(r){const e=ut(r);await Cn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Nl(r,e){return[...r.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function Ao(r){return r.map(e=>{var{providerId:n}=e,i=xr(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dl(r,e){const n=await To(r,{},async()=>{const i=$t({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:c}=r.config,l=await So(r,o,"/v1/token",`key=${c}`),p=await r._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const _={method:"POST",headers:p,body:i};return r.emulatorConfig&&Vt(r.emulatorConfig.host)&&(_.credentials="include"),Eo.fetch()(l,_)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ll(r,e){return ft(r,"POST","/v2/accounts:revokeToken",Vr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ss(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){b(e.length!==0,"internal-error");const n=Ss(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(b(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:o,expiresIn:c}=await Dl(e,n);this.updateTokensAndExpiration(i,o,Number(c))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:o,expirationTime:c}=n,l=new it;return i&&(b(typeof i=="string","internal-error",{appName:e}),l.refreshToken=i),o&&(b(typeof o=="string","internal-error",{appName:e}),l.accessToken=o),c&&(b(typeof c=="number","internal-error",{appName:e}),l.expirationTime=c),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new it,this.toJSON())}_performRefresh(){return ve("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(r,e){b(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class ae{constructor(e){var{uid:n,auth:i,stsTokenManager:o}=e,c=xr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new Ir(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const n=await jt(this,this.stsTokenManager.getToken(this.auth,e));return b(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Pl(this,e)}reload(){return Ol(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ae(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Cn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ue(this.auth.app))return Promise.reject(Ge(this.auth));const e=await this.getIdToken();return await jt(this,Cl(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,o,c,l,p,_,E,A;const C=(i=n.displayName)!==null&&i!==void 0?i:void 0,S=(o=n.email)!==null&&o!==void 0?o:void 0,j=(c=n.phoneNumber)!==null&&c!==void 0?c:void 0,P=(l=n.photoURL)!==null&&l!==void 0?l:void 0,F=(p=n.tenantId)!==null&&p!==void 0?p:void 0,M=(_=n._redirectEventId)!==null&&_!==void 0?_:void 0,ne=(E=n.createdAt)!==null&&E!==void 0?E:void 0,H=(A=n.lastLoginAt)!==null&&A!==void 0?A:void 0,{uid:B,emailVerified:te,isAnonymous:xe,providerData:ee,stsTokenManager:y}=n;b(B&&y,e,"internal-error");const u=it.fromJSON(this.name,y);b(typeof B=="string",e,"internal-error"),Re(C,e.name),Re(S,e.name),b(typeof te=="boolean",e,"internal-error"),b(typeof xe=="boolean",e,"internal-error"),Re(j,e.name),Re(P,e.name),Re(F,e.name),Re(M,e.name),Re(ne,e.name),Re(H,e.name);const f=new ae({uid:B,auth:e,email:S,emailVerified:te,displayName:C,isAnonymous:xe,photoURL:P,phoneNumber:j,tenantId:F,stsTokenManager:u,createdAt:ne,lastLoginAt:H});return ee&&Array.isArray(ee)&&(f.providerData=ee.map(g=>Object.assign({},g))),M&&(f._redirectEventId=M),f}static async _fromIdTokenResponse(e,n,i=!1){const o=new it;o.updateFromServerResponse(n);const c=new ae({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Cn(c),c}static async _fromGetAccountInfoResponse(e,n,i){const o=n.users[0];b(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?Ao(o.providerUserInfo):[],l=!(o.email&&o.passwordHash)&&!(c!=null&&c.length),p=new it;p.updateFromIdToken(i);const _=new ae({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:l}),E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Ir(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(c!=null&&c.length)};return Object.assign(_,E),_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=new Map;function we(r){Te(r instanceof Function,"Expected a class definition");let e=As.get(r);return e?(Te(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,As.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}bo.type="NONE";const bs=bo;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(r,e,n){return`firebase:${r}:${e}:${n}`}class st{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:o,name:c}=this.auth;this.fullUserKey=vn(this.userKey,o.apiKey,c),this.fullPersistenceKey=vn("persistence",o.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await bn(this.auth,{idToken:e}).catch(()=>{});return n?ae._fromGetAccountInfoResponse(this.auth,n,e):null}return ae._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new st(we(bs),e,i);const o=(await Promise.all(n.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let c=o[0]||we(bs);const l=vn(i,e.config.apiKey,e.name);let p=null;for(const E of n)try{const A=await E._get(l);if(A){let C;if(typeof A=="string"){const S=await bn(e,{idToken:A}).catch(()=>{});if(!S)break;C=await ae._fromGetAccountInfoResponse(e,S,A)}else C=ae._fromJSON(e,A);E!==c&&(p=C),c=E;break}}catch{}const _=o.filter(E=>E._shouldAllowMigration);return!c._shouldAllowMigration||!_.length?new st(c,e,i):(c=_[0],p&&await c._set(l,p.toJSON()),await Promise.all(n.map(async E=>{if(E!==c)try{await E._remove(l)}catch{}})),new st(c,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ko(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Co(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(No(e))return"Blackberry";if(Do(e))return"Webos";if(Po(e))return"Safari";if((e.includes("chrome/")||Ro(e))&&!e.includes("edge/"))return"Chrome";if(Oo(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=r.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Co(r=Z()){return/firefox\//i.test(r)}function Po(r=Z()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ro(r=Z()){return/crios\//i.test(r)}function ko(r=Z()){return/iemobile/i.test(r)}function Oo(r=Z()){return/android/i.test(r)}function No(r=Z()){return/blackberry/i.test(r)}function Do(r=Z()){return/webos/i.test(r)}function $r(r=Z()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Ml(r=Z()){var e;return $r(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ul(){return vc()&&document.documentMode===10}function Lo(r=Z()){return $r(r)||Oo(r)||Do(r)||No(r)||/windows phone/i.test(r)||ko(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(r,e=[]){let n;switch(r){case"Browser":n=Cs(Z());break;case"Worker":n=`${Cs(Z())}-${r}`;break;default:n=r}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${dt}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=c=>new Promise((l,p)=>{try{const _=e(c);l(_)}catch(_){p(_)}});i.onAbort=n,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jl(r,e={}){return ft(r,"GET","/v2/passwordPolicy",Vr(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=6;class Vl{constructor(e){var n,i,o,c;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=l.minPasswordLength)!==null&&n!==void 0?n:Fl,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,o,c,l,p;const _={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,_),this.validatePasswordCharacterOptions(e,_),_.isValid&&(_.isValid=(n=_.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),_.isValid&&(_.isValid=(i=_.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),_.isValid&&(_.isValid=(o=_.containsLowercaseLetter)!==null&&o!==void 0?o:!0),_.isValid&&(_.isValid=(c=_.containsUppercaseLetter)!==null&&c!==void 0?c:!0),_.isValid&&(_.isValid=(l=_.containsNumericCharacter)!==null&&l!==void 0?l:!0),_.isValid&&(_.isValid=(p=_.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),_}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,o,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n,i,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ps(this),this.idTokenSubscription=new Ps(this),this.beforeStateQueue=new xl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wo,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=we(n)),this._initializationPromise=this.queue(async()=>{var i,o,c;if(!this._deleted&&(this.persistenceManager=await st.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((c=this.currentUser)===null||c===void 0?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await bn(this,{idToken:e}),i=await ae._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ue(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(p,p))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,p=o==null?void 0:o._redirectEventId,_=await this.tryRedirectSignIn(e);(!l||l===p)&&(_!=null&&_.user)&&(o=_.user,c=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(o)}catch(l){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Cn(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Il()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ue(this.app))return Promise.reject(Ge(this));const n=e?ut(e):null;return n&&b(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ue(this.app)?Promise.reject(Ge(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ue(this.app)?Promise.reject(Ge(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(we(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jl(this),n=new Vl(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Bt("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await Ll(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&we(e)||this._popupRedirectResolver;b(n,this,"argument-error"),this.redirectPersistenceManager=await st.create(this,[we(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,o){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let l=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(p,this,"internal-error"),p.then(()=>{l||c(this.currentUser)}),typeof n=="function"){const _=e.addObserver(n,i,o);return()=>{l=!0,_()}}else{const _=e.addObserver(n);return()=>{l=!0,_()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mo(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;if(ue(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&yl(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Hr(r){return ut(r)}class Ps{constructor(e){this.auth=e,this.observer=null,this.addObserver=bc(n=>this.observer=n)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $l(r){Wr=r}function Hl(r){return Wr.loadJS(r)}function Wl(){return Wr.gapiScript}function zl(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(r,e){const n=Or(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),c=n.getOptions();if(qe(c,e??{}))return o;Ee(o,"already-initialized")}return n.initialize({options:e})}function ql(r,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(we);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Kl(r,e,n){const i=Hr(r);b(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,c=Uo(e),{host:l,port:p}=Jl(e),_=p===null?"":`:${p}`,E={url:`${c}//${l}${_}/`},A=Object.freeze({host:l,port:p,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){b(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),b(qe(E,i.config.emulator)&&qe(A,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=E,i.emulatorConfig=A,i.settings.appVerificationDisabledForTesting=!0,Vt(l)?(no(`${c}//${l}${_}`),ro("Auth",!0)):Xl()}function Uo(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function Jl(r){const e=Uo(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const c=o[1];return{host:c,port:Rs(i.substr(c.length+1))}}else{const[c,l]=i.split(":");return{host:c,port:Rs(l)}}}function Rs(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function Xl(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ve("not implemented")}_getIdTokenResponse(e){return ve("not implemented")}_linkToIdToken(e,n){return ve("not implemented")}_getReauthenticationResolver(e){return ve("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(r,e){return Al(r,"POST","/v1/accounts:signInWithIdp",Vr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl="http://localhost";class Xe extends xo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ee("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=n,c=xr(n,["providerId","signInMethod"]);if(!i||!o)return null;const l=new Xe(i,o);return l.idToken=c.idToken||void 0,l.accessToken=c.accessToken||void 0,l.secret=c.secret,l.nonce=c.nonce,l.pendingToken=c.pendingToken||null,l}_getIdTokenResponse(e){const n=this.buildRequest();return ot(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,ot(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ot(e,n)}buildRequest(){const e={requestUri:Yl,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$t(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends jo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke extends Gt{constructor(){super("facebook.com")}static credential(e){return Xe._fromParams({providerId:ke.PROVIDER_ID,signInMethod:ke.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ke.credentialFromTaggedObject(e)}static credentialFromError(e){return ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ke.credential(e.oauthAccessToken)}catch{return null}}}ke.FACEBOOK_SIGN_IN_METHOD="facebook.com";ke.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends Gt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xe._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Oe.credential(n,i)}catch{return null}}}Oe.GOOGLE_SIGN_IN_METHOD="google.com";Oe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne extends Gt{constructor(){super("github.com")}static credential(e){return Xe._fromParams({providerId:Ne.PROVIDER_ID,signInMethod:Ne.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ne.credentialFromTaggedObject(e)}static credentialFromError(e){return Ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ne.credential(e.oauthAccessToken)}catch{return null}}}Ne.GITHUB_SIGN_IN_METHOD="github.com";Ne.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends Gt{constructor(){super("twitter.com")}static credential(e,n){return Xe._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return De.credential(n,i)}catch{return null}}}De.TWITTER_SIGN_IN_METHOD="twitter.com";De.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,o=!1){const c=await ae._fromIdTokenResponse(e,i,o),l=ks(i);return new ht({user:c,providerId:l,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const o=ks(i);return new ht({user:e,providerId:o,_tokenResponse:i,operationType:n})}}function ks(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends Se{constructor(e,n,i,o){var c;super(n.code,n.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Pn.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,o){return new Pn(e,n,i,o)}}function Fo(r,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Pn._fromErrorAndOperation(r,c,e,i):c})}async function Zl(r,e,n=!1){const i=await jt(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return ht._forOperation(r,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ql(r,e,n=!1){const{auth:i}=r;if(ue(i.app))return Promise.reject(Ge(i));const o="reauthenticate";try{const c=await jt(r,Fo(i,o,e,r),n);b(c.idToken,i,"internal-error");const l=Br(c.idToken);b(l,i,"internal-error");const{sub:p}=l;return b(r.uid===p,i,"user-mismatch"),ht._forOperation(r,o,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&Ee(i,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eu(r,e,n=!1){if(ue(r.app))return Promise.reject(Ge(r));const i="signIn",o=await Fo(r,i,e),c=await ht._fromIdTokenResponse(r,i,o);return n||await r._updateCurrentUser(c.user),c}function tu(r,e,n,i){return ut(r).onIdTokenChanged(e,n,i)}function nu(r,e,n){return ut(r).beforeAuthStateChanged(e,n)}const Rn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Rn,"1"),this.storage.removeItem(Rn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=1e3,iu=10;class Bo extends Vo{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Lo(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),o=this.localCache[n];i!==o&&e(n,o,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((l,p,_)=>{this.notifyListeners(l,_)});return}const i=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const l=this.storage.getItem(i);!n&&this.localCache[i]===l||this.notifyListeners(i,l)},c=this.storage.getItem(i);Ul()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,iu):o()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},ru)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Bo.type="LOCAL";const su=Bo;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o extends Vo{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$o.type="SESSION";const Ho=$o;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const i=new On(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:o,data:c}=n.data,l=this.handlersMap[o];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const p=Array.from(l).map(async E=>E(n.origin,c)),_=await ou(p);n.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:_})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}On.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(r="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,l;return new Promise((p,_)=>{const E=zr("",20);o.port1.start();const A=setTimeout(()=>{_(new Error("unsupported_event"))},i);l={messageChannel:o,onMessage(C){const S=C;if(S.data.eventId===E)switch(S.data.status){case"ack":clearTimeout(A),c=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),p(S.data.response);break;default:clearTimeout(A),clearTimeout(c),_(new Error("invalid_response"));break}}},this.handlers.add(l),o.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:E,data:n},[o.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(){return window}function cu(r){pe().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(){return typeof pe().WorkerGlobalScope<"u"&&typeof pe().importScripts=="function"}async function hu(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lu(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function uu(){return Wo()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo="firebaseLocalStorageDb",du=1,kn="firebaseLocalStorage",Go="fbase_key";class qt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Nn(r,e){return r.transaction([kn],e?"readwrite":"readonly").objectStore(kn)}function fu(){const r=indexedDB.deleteDatabase(zo);return new qt(r).toPromise()}function Er(){const r=indexedDB.open(zo,du);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const i=r.result;try{i.createObjectStore(kn,{keyPath:Go})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const i=r.result;i.objectStoreNames.contains(kn)?e(i):(i.close(),await fu(),e(await Er()))})})}async function Os(r,e,n){const i=Nn(r,!0).put({[Go]:e,value:n});return new qt(i).toPromise()}async function pu(r,e){const n=Nn(r,!1).get(e),i=await new qt(n).toPromise();return i===void 0?null:i.value}function Ns(r,e){const n=Nn(r,!0).delete(e);return new qt(n).toPromise()}const gu=800,mu=3;class qo{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Er(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>mu)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wo()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=On._getInstance(uu()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await hu(),!this.activeServiceWorker)return;this.sender=new au(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lu()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Er();return await Os(e,Rn,"1"),await Ns(e,Rn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Os(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>pu(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ns(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const c=Nn(o,!1).getAll();return new qt(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:c}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qo.type="LOCAL";const _u=qo;new zt(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(r,e){return e?we(e):(b(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends xo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ot(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ot(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ot(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function vu(r){return eu(r.auth,new Gr(r),r.bypassAuthState)}function wu(r){const{auth:e,user:n}=r;return b(n,e,"internal-error"),Ql(n,new Gr(r),r.bypassAuthState)}async function Iu(r){const{auth:e,user:n}=r;return b(n,e,"internal-error"),Zl(n,new Gr(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n,i,o,c=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:o,tenantId:c,error:l,type:p}=e;if(l){this.reject(l);return}const _={auth:this.auth,requestUri:n,sessionId:i,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(_))}catch(E){this.reject(E)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vu;case"linkViaPopup":case"linkViaRedirect":return Iu;case"reauthViaPopup":case"reauthViaRedirect":return wu;default:Ee(this.auth,"internal-error")}}resolve(e){Te(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Te(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu=new zt(2e3,1e4);class nt extends Ko{constructor(e,n,i,o,c){super(e,n,o,c),this.provider=i,this.authWindow=null,this.pollId=null,nt.currentPopupAction&&nt.currentPopupAction.cancel(),nt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){Te(this.filter.length===1,"Popup operations only handle one event");const e=zr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Eu.get())};e()}}nt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu="pendingRedirect",wn=new Map;class Su extends Ko{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=wn.get(this.auth._key());if(!e){try{const i=await Au(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}wn.set(this.auth._key(),e)}return this.bypassAuthState||wn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Au(r,e){const n=Pu(e),i=Cu(r);if(!await i._isAvailable())return!1;const o=await i._get(n)==="true";return await i._remove(n),o}function bu(r,e){wn.set(r._key(),e)}function Cu(r){return we(r._redirectPersistence)}function Pu(r){return vn(Tu,r.config.apiKey,r.name)}async function Ru(r,e,n=!1){if(ue(r.app))return Promise.reject(Ge(r));const i=Hr(r),o=yu(i,e),l=await new Su(i,o,n).execute();return l&&!n&&(delete l.user._redirectEventId,await i._persistUserIfCurrent(l.user),await i._setRedirectUser(null,e)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku=10*60*1e3;class Ou{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Nu(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Jo(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(fe(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ku&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ds(e))}saveEventToCache(e){this.cachedEventUids.add(Ds(e)),this.lastProcessedEventTime=Date.now()}}function Ds(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Jo({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Nu(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jo(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Du(r,e={}){return ft(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Mu=/^https?/;async function Uu(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Du(r);for(const n of e)try{if(xu(n))return}catch{}Ee(r,"unauthorized-domain")}function xu(r){const e=wr(),{protocol:n,hostname:i}=new URL(e);if(r.startsWith("chrome-extension://")){const l=new URL(r);return l.hostname===""&&i===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===i}if(!Mu.test(n))return!1;if(Lu.test(r))return i===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=new zt(3e4,6e4);function Ls(){const r=pe().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function Fu(r){return new Promise((e,n)=>{var i,o,c;function l(){Ls(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ls(),n(fe(r,"network-request-failed"))},timeout:ju.get()})}if(!((o=(i=pe().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((c=pe().gapi)===null||c===void 0)&&c.load)l();else{const p=zl("iframefcb");return pe()[p]=()=>{gapi.load?l():n(fe(r,"network-request-failed"))},Hl(`${Wl()}?onload=${p}`).catch(_=>n(_))}}).catch(e=>{throw In=null,e})}let In=null;function Vu(r){return In=In||Fu(r),In}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=new zt(5e3,15e3),$u="__/auth/iframe",Hu="emulator/auth/iframe",Wu={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zu=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gu(r){const e=r.config;b(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?Fr(e,Hu):`https://${r.config.authDomain}/${$u}`,i={apiKey:e.apiKey,appName:r.name,v:dt},o=zu.get(r.config.apiHost);o&&(i.eid=o);const c=r._getFrameworks();return c.length&&(i.fw=c.join(",")),`${n}?${$t(i).slice(1)}`}async function qu(r){const e=await Vu(r),n=pe().gapi;return b(n,r,"internal-error"),e.open({where:document.body,url:Gu(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wu,dontclear:!0},i=>new Promise(async(o,c)=>{await i.restyle({setHideOnLeave:!1});const l=fe(r,"network-request-failed"),p=pe().setTimeout(()=>{c(l)},Bu.get());function _(){pe().clearTimeout(p),o(i)}i.ping(_).then(_,()=>{c(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ju=500,Xu=600,Yu="_blank",Zu="http://localhost";class Ms{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Qu(r,e,n,i=Ju,o=Xu){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),l=Math.max((window.screen.availWidth-i)/2,0).toString();let p="";const _=Object.assign(Object.assign({},Ku),{width:i.toString(),height:o.toString(),top:c,left:l}),E=Z().toLowerCase();n&&(p=Ro(E)?Yu:n),Co(E)&&(e=e||Zu,_.scrollbars="yes");const A=Object.entries(_).reduce((S,[j,P])=>`${S}${j}=${P},`,"");if(Ml(E)&&p!=="_self")return ed(e||"",p),new Ms(null);const C=window.open(e||"",p,A);b(C,r,"popup-blocked");try{C.focus()}catch{}return new Ms(C)}function ed(r,e){const n=document.createElement("a");n.href=r,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td="__/auth/handler",nd="emulator/auth/handler",rd=encodeURIComponent("fac");async function Us(r,e,n,i,o,c){b(r.config.authDomain,r,"auth-domain-config-required"),b(r.config.apiKey,r,"invalid-api-key");const l={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:i,v:dt,eventId:o};if(e instanceof jo){e.setDefaultLanguage(r.languageCode),l.providerId=e.providerId||"",Ac(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[A,C]of Object.entries({}))l[A]=C}if(e instanceof Gt){const A=e.getScopes().filter(C=>C!=="");A.length>0&&(l.scopes=A.join(","))}r.tenantId&&(l.tid=r.tenantId);const p=l;for(const A of Object.keys(p))p[A]===void 0&&delete p[A];const _=await r._getAppCheckToken(),E=_?`#${rd}=${encodeURIComponent(_)}`:"";return`${id(r)}?${$t(p).slice(1)}${E}`}function id({config:r}){return r.emulator?Fr(r,nd):`https://${r.authDomain}/${td}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr="webStorageSupport";class sd{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ho,this._completeRedirectFn=Ru,this._overrideRedirectResult=bu}async _openPopup(e,n,i,o){var c;Te((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const l=await Us(e,n,i,wr(),o);return Qu(e,l,zr())}async _openRedirect(e,n,i,o){await this._originValidation(e);const c=await Us(e,n,i,wr(),o);return cu(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:c}=this.eventManagers[n];return o?Promise.resolve(o):(Te(c,"If manager is not set, promise should be"),c)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await qu(e),i=new Ou(e);return n.register("authEvent",o=>(b(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fr,{type:fr},o=>{var c;const l=(c=o==null?void 0:o[0])===null||c===void 0?void 0:c[fr];l!==void 0&&n(!!l),Ee(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Uu(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Lo()||Po()||$r()}}const od=sd;var xs="@firebase/auth",js="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hd(r){at(new Ke("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:l,authDomain:p}=i.options;b(l&&!l.includes(":"),"invalid-api-key",{appName:i.name});const _={apiKey:l,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mo(r)},E=new Bl(i,o,c,_);return ql(E,n),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),at(new Ke("auth-internal",e=>{const n=Hr(e.getProvider("auth").getImmediate());return(i=>new ad(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ue(xs,js,cd(r)),Ue(xs,js,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld=5*60,ud=to("authIdTokenMaxAge")||ld;let Fs=null;const dd=r=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>ud)return;const o=n==null?void 0:n.token;Fs!==o&&(Fs=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function fd(r=ao()){const e=Or(r,"auth");if(e.isInitialized())return e.getImmediate();const n=Gl(r,{popupRedirectResolver:od,persistence:[_u,su,Ho]}),i=to("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(i,location.origin);if(location.origin===c.origin){const l=dd(c.toString());nu(n,l,()=>l(n.currentUser)),tu(n,p=>l(p))}}const o=Qs("auth");return o&&Kl(n,`http://${o}`),n}function pd(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}$l({loadJS(r){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",r),i.onload=e,i.onerror=o=>{const c=fe("internal-error");c.customData=o,n(c)},i.type="text/javascript",i.charset="UTF-8",pd().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hd("Browser");const gd=JSON.parse(__firebase_config),Xo=oo(gd);fd(Xo);dl(Xo);
