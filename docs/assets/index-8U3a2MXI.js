(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function dr(e,t){const n=new Set(e.split(","));return t?r=>n.has(r.toLowerCase()):r=>n.has(r)}const k={},ut=[],he=()=>{},Ai=()=>!1,nn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),hr=e=>e.startsWith("onUpdate:"),ee=Object.assign,pr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},xi=Object.prototype.hasOwnProperty,$=(e,t)=>xi.call(e,t),x=Array.isArray,ft=e=>rn(e)==="[object Map]",ks=e=>rn(e)==="[object Set]",M=e=>typeof e=="function",X=e=>typeof e=="string",_t=e=>typeof e=="symbol",K=e=>e!==null&&typeof e=="object",Us=e=>(K(e)||M(e))&&M(e.then)&&M(e.catch),Ws=Object.prototype.toString,rn=e=>Ws.call(e),Mi=e=>rn(e).slice(8,-1),Ks=e=>rn(e)==="[object Object]",gr=e=>X(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ut=dr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Di=/-(\w)/g,pt=sn(e=>e.replace(Di,(t,n)=>n?n.toUpperCase():"")),Oi=/\B([A-Z])/g,bt=sn(e=>e.replace(Oi,"-$1").toLowerCase()),qs=sn(e=>e.charAt(0).toUpperCase()+e.slice(1)),En=sn(e=>e?`on${qs(e)}`:""),Qe=(e,t)=>!Object.is(e,t),Cn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},qt=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},$i=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Kr;const Gs=()=>Kr||(Kr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function mr(e){if(x(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=X(r)?Bi(r):mr(r);if(s)for(const o in s)t[o]=s[o]}return t}else if(X(e)||K(e))return e}const Ri=/;(?![^(]*\))/g,Pi=/:([^]+)/,Li=/\/\*[^]*?\*\//g;function Bi(e){const t={};return e.replace(Li,"").split(Ri).forEach(n=>{if(n){const r=n.split(Pi);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function _r(e){let t="";if(X(e))t=e;else if(x(e))for(let n=0;n<e.length;n++){const r=_r(e[n]);r&&(t+=r+" ")}else if(K(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Fi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ni=dr(Fi);function Ys(e){return!!e||e===""}const zi=e=>X(e)?e:e==null?"":x(e)||K(e)&&(e.toString===Ws||!M(e.toString))?JSON.stringify(e,Js,2):String(e),Js=(e,t)=>t&&t.__v_isRef?Js(e,t.value):ft(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],o)=>(n[Tn(r,o)+" =>"]=s,n),{})}:ks(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Tn(n))}:_t(t)?Tn(t):K(t)&&!x(t)&&!Ks(t)?String(t):t,Tn=(e,t="")=>{var n;return _t(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ge;class ji{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ge,!t&&ge&&(this.index=(ge.scopes||(ge.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ge;try{return ge=this,t()}finally{ge=n}}}on(){ge=this}off(){ge=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Hi(e,t=ge){t&&t.active&&t.effects.push(e)}function Vi(){return ge}let Xe;class br{constructor(t,n,r,s){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Hi(this,s)}get dirty(){if(this._dirtyLevel===1){st();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(ki(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),ot()}return this._dirtyLevel>=2}set dirty(t){this._dirtyLevel=t?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Le,n=Xe;try{return Le=!0,Xe=this,this._runnings++,qr(this),this.fn()}finally{Gr(this),this._runnings--,Xe=n,Le=t}}stop(){var t;this.active&&(qr(this),Gr(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function ki(e){return e.value}function qr(e){e._trackId++,e._depsLength=0}function Gr(e){if(e.deps&&e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Xs(e.deps[t],e);e.deps.length=e._depsLength}}function Xs(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let Le=!0,Wn=0;const Zs=[];function st(){Zs.push(Le),Le=!1}function ot(){const e=Zs.pop();Le=e===void 0?!0:e}function yr(){Wn++}function wr(){for(Wn--;!Wn&&Kn.length;)Kn.shift()()}function Qs(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&Xs(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Kn=[];function eo(e,t,n){yr();for(const r of e.keys())if(r._dirtyLevel<t&&e.get(r)===r._trackId){const s=r._dirtyLevel;r._dirtyLevel=t,s===0&&(r._shouldSchedule=!0,r.trigger())}to(e),wr()}function to(e){for(const t of e.keys())t.scheduler&&t._shouldSchedule&&(!t._runnings||t.allowRecurse)&&e.get(t)===t._trackId&&(t._shouldSchedule=!1,Kn.push(t.scheduler))}const no=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},qn=new WeakMap,Ze=Symbol(""),Gn=Symbol("");function ae(e,t,n){if(Le&&Xe){let r=qn.get(e);r||qn.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=no(()=>r.delete(n))),Qs(Xe,s)}}function xe(e,t,n,r,s,o){const i=qn.get(e);if(!i)return;let a=[];if(t==="clear")a=[...i.values()];else if(n==="length"&&x(e)){const c=Number(r);i.forEach((f,h)=>{(h==="length"||!_t(h)&&h>=c)&&a.push(f)})}else switch(n!==void 0&&a.push(i.get(n)),t){case"add":x(e)?gr(n)&&a.push(i.get("length")):(a.push(i.get(Ze)),ft(e)&&a.push(i.get(Gn)));break;case"delete":x(e)||(a.push(i.get(Ze)),ft(e)&&a.push(i.get(Gn)));break;case"set":ft(e)&&a.push(i.get(Ze));break}yr();for(const c of a)c&&eo(c,2);wr()}const Ui=dr("__proto__,__v_isRef,__isVue"),ro=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(_t)),Yr=Wi();function Wi(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=L(this);for(let o=0,i=this.length;o<i;o++)ae(r,"get",o+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(L)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){st(),yr();const r=L(this)[t].apply(this,n);return wr(),ot(),r}}),e}function Ki(e){const t=L(this);return ae(t,"has",e),t.hasOwnProperty(e)}class so{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const s=this._isReadonly,o=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return o;if(n==="__v_raw")return r===(s?o?oa:co:o?ao:io).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const i=x(t);if(!s){if(i&&$(Yr,n))return Reflect.get(Yr,n,r);if(n==="hasOwnProperty")return Ki}const a=Reflect.get(t,n,r);return(_t(n)?ro.has(n):Ui(n))||(s||ae(t,"get",n),o)?a:fe(a)?i&&gr(n)?a:a.value:K(a)?s?lo(a):Er(a):a}}class oo extends so{constructor(t=!1){super(!1,t)}set(t,n,r,s){let o=t[n];if(!this._shallow){const c=xt(o);if(!Yn(r)&&!xt(r)&&(o=L(o),r=L(r)),!x(t)&&fe(o)&&!fe(r))return c?!1:(o.value=r,!0)}const i=x(t)&&gr(n)?Number(n)<t.length:$(t,n),a=Reflect.set(t,n,r,s);return t===L(s)&&(i?Qe(r,o)&&xe(t,"set",n,r):xe(t,"add",n,r)),a}deleteProperty(t,n){const r=$(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&xe(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!_t(n)||!ro.has(n))&&ae(t,"has",n),r}ownKeys(t){return ae(t,"iterate",x(t)?"length":Ze),Reflect.ownKeys(t)}}class qi extends so{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Gi=new oo,Yi=new qi,Ji=new oo(!0),vr=e=>e,on=e=>Reflect.getPrototypeOf(e);function Nt(e,t,n=!1,r=!1){e=e.__v_raw;const s=L(e),o=L(t);n||(Qe(t,o)&&ae(s,"get",t),ae(s,"get",o));const{has:i}=on(s),a=r?vr:n?Sr:Tr;if(i.call(s,t))return a(e.get(t));if(i.call(s,o))return a(e.get(o));e!==s&&e.get(t)}function zt(e,t=!1){const n=this.__v_raw,r=L(n),s=L(e);return t||(Qe(e,s)&&ae(r,"has",e),ae(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function jt(e,t=!1){return e=e.__v_raw,!t&&ae(L(e),"iterate",Ze),Reflect.get(e,"size",e)}function Jr(e){e=L(e);const t=L(this);return on(t).has.call(t,e)||(t.add(e),xe(t,"add",e,e)),this}function Xr(e,t){t=L(t);const n=L(this),{has:r,get:s}=on(n);let o=r.call(n,e);o||(e=L(e),o=r.call(n,e));const i=s.call(n,e);return n.set(e,t),o?Qe(t,i)&&xe(n,"set",e,t):xe(n,"add",e,t),this}function Zr(e){const t=L(this),{has:n,get:r}=on(t);let s=n.call(t,e);s||(e=L(e),s=n.call(t,e)),r&&r.call(t,e);const o=t.delete(e);return s&&xe(t,"delete",e,void 0),o}function Qr(){const e=L(this),t=e.size!==0,n=e.clear();return t&&xe(e,"clear",void 0,void 0),n}function Ht(e,t){return function(r,s){const o=this,i=o.__v_raw,a=L(i),c=t?vr:e?Sr:Tr;return!e&&ae(a,"iterate",Ze),i.forEach((f,h)=>r.call(s,c(f),c(h),o))}}function Vt(e,t,n){return function(...r){const s=this.__v_raw,o=L(s),i=ft(o),a=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,f=s[e](...r),h=n?vr:t?Sr:Tr;return!t&&ae(o,"iterate",c?Gn:Ze),{next(){const{value:_,done:I}=f.next();return I?{value:_,done:I}:{value:a?[h(_[0]),h(_[1])]:h(_),done:I}},[Symbol.iterator](){return this}}}}function Oe(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Xi(){const e={get(o){return Nt(this,o)},get size(){return jt(this)},has:zt,add:Jr,set:Xr,delete:Zr,clear:Qr,forEach:Ht(!1,!1)},t={get(o){return Nt(this,o,!1,!0)},get size(){return jt(this)},has:zt,add:Jr,set:Xr,delete:Zr,clear:Qr,forEach:Ht(!1,!0)},n={get(o){return Nt(this,o,!0)},get size(){return jt(this,!0)},has(o){return zt.call(this,o,!0)},add:Oe("add"),set:Oe("set"),delete:Oe("delete"),clear:Oe("clear"),forEach:Ht(!0,!1)},r={get(o){return Nt(this,o,!0,!0)},get size(){return jt(this,!0)},has(o){return zt.call(this,o,!0)},add:Oe("add"),set:Oe("set"),delete:Oe("delete"),clear:Oe("clear"),forEach:Ht(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=Vt(o,!1,!1),n[o]=Vt(o,!0,!1),t[o]=Vt(o,!1,!0),r[o]=Vt(o,!0,!0)}),[e,n,t,r]}const[Zi,Qi,ea,ta]=Xi();function Ir(e,t){const n=t?e?ta:ea:e?Qi:Zi;return(r,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get($(n,s)&&s in r?n:r,s,o)}const na={get:Ir(!1,!1)},ra={get:Ir(!1,!0)},sa={get:Ir(!0,!1)},io=new WeakMap,ao=new WeakMap,co=new WeakMap,oa=new WeakMap;function ia(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function aa(e){return e.__v_skip||!Object.isExtensible(e)?0:ia(Mi(e))}function Er(e){return xt(e)?e:Cr(e,!1,Gi,na,io)}function ca(e){return Cr(e,!1,Ji,ra,ao)}function lo(e){return Cr(e,!0,Yi,sa,co)}function Cr(e,t,n,r,s){if(!K(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=s.get(e);if(o)return o;const i=aa(e);if(i===0)return e;const a=new Proxy(e,i===2?r:n);return s.set(e,a),a}function dt(e){return xt(e)?dt(e.__v_raw):!!(e&&e.__v_isReactive)}function xt(e){return!!(e&&e.__v_isReadonly)}function Yn(e){return!!(e&&e.__v_isShallow)}function uo(e){return dt(e)||xt(e)}function L(e){const t=e&&e.__v_raw;return t?L(t):e}function fo(e){return qt(e,"__v_skip",!0),e}const Tr=e=>K(e)?Er(e):e,Sr=e=>K(e)?lo(e):e;class ho{constructor(t,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new br(()=>t(this._value),()=>Sn(this,1),()=>this.dep&&to(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=L(this);return(!t._cacheable||t.effect.dirty)&&Qe(t._value,t._value=t.effect.run())&&Sn(t,2),ua(t),t.effect._dirtyLevel>=1&&Sn(t,1),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function la(e,t,n=!1){let r,s;const o=M(e);return o?(r=e,s=he):(r=e.get,s=e.set),new ho(r,s,o||!s,n)}function ua(e){Le&&Xe&&(e=L(e),Qs(Xe,e.dep||(e.dep=no(()=>e.dep=void 0,e instanceof ho?e:void 0))))}function Sn(e,t=2,n){e=L(e);const r=e.dep;r&&eo(r,t)}function fe(e){return!!(e&&e.__v_isRef===!0)}function fa(e){return fe(e)?e.value:e}const da={get:(e,t,n)=>fa(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return fe(s)&&!fe(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function po(e){return dt(e)?e:new Proxy(e,da)}/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Be(e,t,n,r){let s;try{s=r?e(...r):e()}catch(o){an(o,t,n)}return s}function _e(e,t,n,r){if(M(e)){const o=Be(e,t,n,r);return o&&Us(o)&&o.catch(i=>{an(i,t,n)}),o}const s=[];for(let o=0;o<e.length;o++)s.push(_e(e[o],t,n,r));return s}function an(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let o=t.parent;const i=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const f=o.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](e,i,a)===!1)return}o=o.parent}const c=t.appContext.config.errorHandler;if(c){Be(c,null,10,[e,i,a]);return}}ha(e,n,s,r)}function ha(e,t,n,r=!0){console.error(e)}let Mt=!1,Jn=!1;const Q=[];let Ce=0;const ht=[];let $e=null,Ye=0;const go=Promise.resolve();let Ar=null;function pa(e){const t=Ar||go;return e?t.then(this?e.bind(this):e):t}function ga(e){let t=Ce+1,n=Q.length;for(;t<n;){const r=t+n>>>1,s=Q[r],o=Dt(s);o<e||o===e&&s.pre?t=r+1:n=r}return t}function xr(e){(!Q.length||!Q.includes(e,Mt&&e.allowRecurse?Ce+1:Ce))&&(e.id==null?Q.push(e):Q.splice(ga(e.id),0,e),mo())}function mo(){!Mt&&!Jn&&(Jn=!0,Ar=go.then(bo))}function ma(e){const t=Q.indexOf(e);t>Ce&&Q.splice(t,1)}function _a(e){x(e)?ht.push(...e):(!$e||!$e.includes(e,e.allowRecurse?Ye+1:Ye))&&ht.push(e),mo()}function es(e,t,n=Mt?Ce+1:0){for(;n<Q.length;n++){const r=Q[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;Q.splice(n,1),n--,r()}}}function _o(e){if(ht.length){const t=[...new Set(ht)].sort((n,r)=>Dt(n)-Dt(r));if(ht.length=0,$e){$e.push(...t);return}for($e=t,Ye=0;Ye<$e.length;Ye++)$e[Ye]();$e=null,Ye=0}}const Dt=e=>e.id==null?1/0:e.id,ba=(e,t)=>{const n=Dt(e)-Dt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function bo(e){Jn=!1,Mt=!0,Q.sort(ba);try{for(Ce=0;Ce<Q.length;Ce++){const t=Q[Ce];t&&t.active!==!1&&Be(t,null,14)}}finally{Ce=0,Q.length=0,_o(),Mt=!1,Ar=null,(Q.length||ht.length)&&bo()}}function ya(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||k;let s=n;const o=t.startsWith("update:"),i=o&&t.slice(7);if(i&&i in r){const h=`${i==="modelValue"?"model":i}Modifiers`,{number:_,trim:I}=r[h]||k;I&&(s=n.map(C=>X(C)?C.trim():C)),_&&(s=n.map($i))}let a,c=r[a=En(t)]||r[a=En(pt(t))];!c&&o&&(c=r[a=En(bt(t))]),c&&_e(c,e,6,s);const f=r[a+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,_e(f,e,6,s)}}function yo(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const o=e.emits;let i={},a=!1;if(!M(e)){const c=f=>{const h=yo(f,t,!0);h&&(a=!0,ee(i,h))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!o&&!a?(K(e)&&r.set(e,null),null):(x(o)?o.forEach(c=>i[c]=null):ee(i,o),K(e)&&r.set(e,i),i)}function cn(e,t){return!e||!nn(t)?!1:(t=t.slice(2).replace(/Once$/,""),$(e,t[0].toLowerCase()+t.slice(1))||$(e,bt(t))||$(e,t))}let oe=null,ln=null;function Gt(e){const t=oe;return oe=e,ln=e&&e.type.__scopeId||null,t}function wo(e){ln=e}function vo(){ln=null}function Z(e,t=oe,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&us(-1);const o=Gt(t);let i;try{i=e(...s)}finally{Gt(o),r._d&&us(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function An(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[i],slots:a,attrs:c,emit:f,render:h,renderCache:_,data:I,setupState:C,ctx:W,inheritAttrs:F}=e;let H,G;const be=Gt(e);try{if(n.shapeFlag&4){const Y=s||r,de=Y;H=Ee(h.call(de,Y,_,o,C,I,W)),G=c}else{const Y=t;H=Ee(Y.length>1?Y(o,{attrs:c,slots:a,emit:f}):Y(o,null)),G=t.props?c:wa(c)}}catch(Y){St.length=0,an(Y,e,1),H=q(gt)}let N=H;if(G&&F!==!1){const Y=Object.keys(G),{shapeFlag:de}=N;Y.length&&de&7&&(i&&Y.some(hr)&&(G=va(G,i)),N=mt(N,G))}return n.dirs&&(N=mt(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),H=N,Gt(be),H}const wa=e=>{let t;for(const n in e)(n==="class"||n==="style"||nn(n))&&((t||(t={}))[n]=e[n]);return t},va=(e,t)=>{const n={};for(const r in e)(!hr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Ia(e,t,n){const{props:r,children:s,component:o}=e,{props:i,children:a,patchFlag:c}=t,f=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ts(r,i,f):!!i;if(c&8){const h=t.dynamicProps;for(let _=0;_<h.length;_++){const I=h[_];if(i[I]!==r[I]&&!cn(f,I))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===i?!1:r?i?ts(r,i,f):!0:!!i;return!1}function ts(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(t[o]!==e[o]&&!cn(n,o))return!0}return!1}function Ea({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ca=Symbol.for("v-ndc"),Ta=e=>e.__isSuspense;function Sa(e,t){t&&t.pendingBranch?x(e)?t.effects.push(...e):t.effects.push(e):_a(e)}const Aa=Symbol.for("v-scx"),xa=()=>Wt(Aa),kt={};function xn(e,t,n){return Io(e,t,n)}function Io(e,t,{immediate:n,deep:r,flush:s,once:o,onTrack:i,onTrigger:a}=k){if(t&&o){const P=t;t=(...Se)=>{P(...Se),de()}}const c=re,f=P=>r===!0?P:lt(P,r===!1?1:void 0);let h,_=!1,I=!1;if(fe(e)?(h=()=>e.value,_=Yn(e)):dt(e)?(h=()=>f(e),_=!0):x(e)?(I=!0,_=e.some(P=>dt(P)||Yn(P)),h=()=>e.map(P=>{if(fe(P))return P.value;if(dt(P))return f(P);if(M(P))return Be(P,c,2)})):M(e)?t?h=()=>Be(e,c,2):h=()=>(C&&C(),_e(e,c,3,[W])):h=he,t&&r){const P=h;h=()=>lt(P())}let C,W=P=>{C=N.onStop=()=>{Be(P,c,4),C=N.onStop=void 0}},F;if(hn)if(W=he,t?n&&_e(t,c,3,[h(),I?[]:void 0,W]):h(),s==="sync"){const P=xa();F=P.__watcherHandles||(P.__watcherHandles=[])}else return he;let H=I?new Array(e.length).fill(kt):kt;const G=()=>{if(!(!N.active||!N.dirty))if(t){const P=N.run();(r||_||(I?P.some((Se,ye)=>Qe(Se,H[ye])):Qe(P,H)))&&(C&&C(),_e(t,c,3,[P,H===kt?void 0:I&&H[0]===kt?[]:H,W]),H=P)}else N.run()};G.allowRecurse=!!t;let be;s==="sync"?be=G:s==="post"?be=()=>se(G,c&&c.suspense):(G.pre=!0,c&&(G.id=c.uid),be=()=>xr(G));const N=new br(h,he,be),Y=Vi(),de=()=>{N.stop(),Y&&pr(Y.effects,N)};return t?n?G():H=N.run():s==="post"?se(N.run.bind(N),c&&c.suspense):N.run(),F&&F.push(de),de}function Ma(e,t,n){const r=this.proxy,s=X(e)?e.includes(".")?Eo(r,e):()=>r[e]:e.bind(r,r);let o;M(t)?o=t:(o=t.handler,n=t);const i=Rt(this),a=Io(s,o.bind(r),n);return i(),a}function Eo(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function lt(e,t,n=0,r){if(!K(e)||e.__v_skip)return e;if(t&&t>0){if(n>=t)return e;n++}if(r=r||new Set,r.has(e))return e;if(r.add(e),fe(e))lt(e.value,t,n,r);else if(x(e))for(let s=0;s<e.length;s++)lt(e[s],t,n,r);else if(ks(e)||ft(e))e.forEach(s=>{lt(s,t,n,r)});else if(Ks(e))for(const s in e)lt(e[s],t,n,r);return e}function Ke(e,t,n,r){const s=e.dirs,o=t&&t.dirs;for(let i=0;i<s.length;i++){const a=s[i];o&&(a.oldValue=o[i].value);let c=a.dir[r];c&&(st(),_e(c,n,8,[e.el,a,e,t]),ot())}}const Ct=e=>!!e.type.__asyncLoader,Co=e=>e.type.__isKeepAlive;function Da(e,t){To(e,"a",t)}function Oa(e,t){To(e,"da",t)}function To(e,t,n=re){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(un(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Co(s.parent.vnode)&&$a(r,t,n,s),s=s.parent}}function $a(e,t,n,r){const s=un(t,e,r,!0);So(()=>{pr(r[t],s)},n)}function un(e,t,n=re,r=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;st();const a=Rt(n),c=_e(t,n,e,i);return a(),ot(),c});return r?s.unshift(o):s.push(o),o}}const Me=e=>(t,n=re)=>(!hn||e==="sp")&&un(e,(...r)=>t(...r),n),Ra=Me("bm"),Pa=Me("m"),La=Me("bu"),Ba=Me("u"),Fa=Me("bum"),So=Me("um"),Na=Me("sp"),za=Me("rtg"),ja=Me("rtc");function Ha(e,t=re){un("ec",e,t)}function Mn(e,t,n={},r,s){if(oe.isCE||oe.parent&&Ct(oe.parent)&&oe.parent.isCE)return t!=="default"&&(n.name=t),q("slot",n,r&&r());let o=e[t];o&&o._c&&(o._d=!1),Te();const i=o&&Ao(o(n)),a=cc(le,{key:n.key||i&&i.key||`_${t}`},i||(r?r():[]),i&&e._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),o&&o._c&&(o._d=!0),a}function Ao(e){return e.some(t=>No(t)?!(t.type===gt||t.type===le&&!Ao(t.children)):!0)?e:null}const Xn=e=>e?jo(e)?$r(e)||e.proxy:Xn(e.parent):null,Tt=ee(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Xn(e.parent),$root:e=>Xn(e.root),$emit:e=>e.emit,$options:e=>Mr(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,xr(e.update)}),$nextTick:e=>e.n||(e.n=pa.bind(e.proxy)),$watch:e=>Ma.bind(e)}),Dn=(e,t)=>e!==k&&!e.__isScriptSetup&&$(e,t),Va={get({_:e},t){const{ctx:n,setupState:r,data:s,props:o,accessCache:i,type:a,appContext:c}=e;let f;if(t[0]!=="$"){const C=i[t];if(C!==void 0)switch(C){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(Dn(r,t))return i[t]=1,r[t];if(s!==k&&$(s,t))return i[t]=2,s[t];if((f=e.propsOptions[0])&&$(f,t))return i[t]=3,o[t];if(n!==k&&$(n,t))return i[t]=4,n[t];Zn&&(i[t]=0)}}const h=Tt[t];let _,I;if(h)return t==="$attrs"&&ae(e,"get",t),h(e);if((_=a.__cssModules)&&(_=_[t]))return _;if(n!==k&&$(n,t))return i[t]=4,n[t];if(I=c.config.globalProperties,$(I,t))return I[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return Dn(s,t)?(s[t]=n,!0):r!==k&&$(r,t)?(r[t]=n,!0):$(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},i){let a;return!!n[i]||e!==k&&$(e,i)||Dn(t,i)||(a=o[0])&&$(a,i)||$(r,i)||$(Tt,i)||$(s.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ns(e){return x(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Zn=!0;function ka(e){const t=Mr(e),n=e.proxy,r=e.ctx;Zn=!1,t.beforeCreate&&rs(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:i,watch:a,provide:c,inject:f,created:h,beforeMount:_,mounted:I,beforeUpdate:C,updated:W,activated:F,deactivated:H,beforeDestroy:G,beforeUnmount:be,destroyed:N,unmounted:Y,render:de,renderTracked:P,renderTriggered:Se,errorCaptured:ye,serverPrefetch:bn,expose:ke,inheritAttrs:yt,components:Pt,directives:Lt,filters:yn}=t;if(f&&Ua(f,r,null),i)for(const U in i){const z=i[U];M(z)&&(r[U]=z.bind(n))}if(s){const U=s.call(n,n);K(U)&&(e.data=Er(U))}if(Zn=!0,o)for(const U in o){const z=o[U],Ue=M(z)?z.bind(n,n):M(z.get)?z.get.bind(n,n):he,Bt=!M(z)&&M(z.set)?z.set.bind(n):he,We=wc({get:Ue,set:Bt});Object.defineProperty(r,U,{enumerable:!0,configurable:!0,get:()=>We.value,set:we=>We.value=we})}if(a)for(const U in a)xo(a[U],r,n,U);if(c){const U=M(c)?c.call(n):c;Reflect.ownKeys(U).forEach(z=>{Ja(z,U[z])})}h&&rs(h,e,"c");function te(U,z){x(z)?z.forEach(Ue=>U(Ue.bind(n))):z&&U(z.bind(n))}if(te(Ra,_),te(Pa,I),te(La,C),te(Ba,W),te(Da,F),te(Oa,H),te(Ha,ye),te(ja,P),te(za,Se),te(Fa,be),te(So,Y),te(Na,bn),x(ke))if(ke.length){const U=e.exposed||(e.exposed={});ke.forEach(z=>{Object.defineProperty(U,z,{get:()=>n[z],set:Ue=>n[z]=Ue})})}else e.exposed||(e.exposed={});de&&e.render===he&&(e.render=de),yt!=null&&(e.inheritAttrs=yt),Pt&&(e.components=Pt),Lt&&(e.directives=Lt)}function Ua(e,t,n=he){x(e)&&(e=Qn(e));for(const r in e){const s=e[r];let o;K(s)?"default"in s?o=Wt(s.from||r,s.default,!0):o=Wt(s.from||r):o=Wt(s),fe(o)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[r]=o}}function rs(e,t,n){_e(x(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function xo(e,t,n,r){const s=r.includes(".")?Eo(n,r):()=>n[r];if(X(e)){const o=t[e];M(o)&&xn(s,o)}else if(M(e))xn(s,e.bind(n));else if(K(e))if(x(e))e.forEach(o=>xo(o,t,n,r));else{const o=M(e.handler)?e.handler.bind(n):t[e.handler];M(o)&&xn(s,o,e)}}function Mr(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,a=o.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(f=>Yt(c,f,i,!0)),Yt(c,t,i)),K(t)&&o.set(t,c),c}function Yt(e,t,n,r=!1){const{mixins:s,extends:o}=t;o&&Yt(e,o,n,!0),s&&s.forEach(i=>Yt(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const a=Wa[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const Wa={data:ss,props:os,emits:os,methods:Et,computed:Et,beforeCreate:ne,created:ne,beforeMount:ne,mounted:ne,beforeUpdate:ne,updated:ne,beforeDestroy:ne,beforeUnmount:ne,destroyed:ne,unmounted:ne,activated:ne,deactivated:ne,errorCaptured:ne,serverPrefetch:ne,components:Et,directives:Et,watch:qa,provide:ss,inject:Ka};function ss(e,t){return t?e?function(){return ee(M(e)?e.call(this,this):e,M(t)?t.call(this,this):t)}:t:e}function Ka(e,t){return Et(Qn(e),Qn(t))}function Qn(e){if(x(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ne(e,t){return e?[...new Set([].concat(e,t))]:t}function Et(e,t){return e?ee(Object.create(null),e,t):t}function os(e,t){return e?x(e)&&x(t)?[...new Set([...e,...t])]:ee(Object.create(null),ns(e),ns(t??{})):t}function qa(e,t){if(!e)return t;if(!t)return e;const n=ee(Object.create(null),e);for(const r in t)n[r]=ne(e[r],t[r]);return n}function Mo(){return{app:null,config:{isNativeTag:Ai,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ga=0;function Ya(e,t){return function(r,s=null){M(r)||(r=ee({},r)),s!=null&&!K(s)&&(s=null);const o=Mo(),i=new WeakSet;let a=!1;const c=o.app={_uid:Ga++,_component:r,_props:s,_container:null,_context:o,_instance:null,version:vc,get config(){return o.config},set config(f){},use(f,...h){return i.has(f)||(f&&M(f.install)?(i.add(f),f.install(c,...h)):M(f)&&(i.add(f),f(c,...h))),c},mixin(f){return o.mixins.includes(f)||o.mixins.push(f),c},component(f,h){return h?(o.components[f]=h,c):o.components[f]},directive(f,h){return h?(o.directives[f]=h,c):o.directives[f]},mount(f,h,_){if(!a){const I=q(r,s);return I.appContext=o,_===!0?_="svg":_===!1&&(_=void 0),h&&t?t(I,f):e(I,f,_),a=!0,c._container=f,f.__vue_app__=c,$r(I.component)||I.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(f,h){return o.provides[f]=h,c},runWithContext(f){Jt=c;try{return f()}finally{Jt=null}}};return c}}let Jt=null;function Ja(e,t){if(re){let n=re.provides;const r=re.parent&&re.parent.provides;r===n&&(n=re.provides=Object.create(r)),n[e]=t}}function Wt(e,t,n=!1){const r=re||oe;if(r||Jt){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Jt._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&M(t)?t.call(r&&r.proxy):t}}function Xa(e,t,n,r=!1){const s={},o={};qt(o,dn,1),e.propsDefaults=Object.create(null),Do(e,t,s,o);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=r?s:ca(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function Za(e,t,n,r){const{props:s,attrs:o,vnode:{patchFlag:i}}=e,a=L(s),[c]=e.propsOptions;let f=!1;if((r||i>0)&&!(i&16)){if(i&8){const h=e.vnode.dynamicProps;for(let _=0;_<h.length;_++){let I=h[_];if(cn(e.emitsOptions,I))continue;const C=t[I];if(c)if($(o,I))C!==o[I]&&(o[I]=C,f=!0);else{const W=pt(I);s[W]=er(c,a,W,C,e,!1)}else C!==o[I]&&(o[I]=C,f=!0)}}}else{Do(e,t,s,o)&&(f=!0);let h;for(const _ in a)(!t||!$(t,_)&&((h=bt(_))===_||!$(t,h)))&&(c?n&&(n[_]!==void 0||n[h]!==void 0)&&(s[_]=er(c,a,_,void 0,e,!0)):delete s[_]);if(o!==a)for(const _ in o)(!t||!$(t,_))&&(delete o[_],f=!0)}f&&xe(e,"set","$attrs")}function Do(e,t,n,r){const[s,o]=e.propsOptions;let i=!1,a;if(t)for(let c in t){if(Ut(c))continue;const f=t[c];let h;s&&$(s,h=pt(c))?!o||!o.includes(h)?n[h]=f:(a||(a={}))[h]=f:cn(e.emitsOptions,c)||(!(c in r)||f!==r[c])&&(r[c]=f,i=!0)}if(o){const c=L(n),f=a||k;for(let h=0;h<o.length;h++){const _=o[h];n[_]=er(s,c,_,f[_],e,!$(f,_))}}return i}function er(e,t,n,r,s,o){const i=e[n];if(i!=null){const a=$(i,"default");if(a&&r===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&M(c)){const{propsDefaults:f}=s;if(n in f)r=f[n];else{const h=Rt(s);r=f[n]=c.call(null,t),h()}}else r=c}i[0]&&(o&&!a?r=!1:i[1]&&(r===""||r===bt(n))&&(r=!0))}return r}function Oo(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,i={},a=[];let c=!1;if(!M(e)){const h=_=>{c=!0;const[I,C]=Oo(_,t,!0);ee(i,I),C&&a.push(...C)};!n&&t.mixins.length&&t.mixins.forEach(h),e.extends&&h(e.extends),e.mixins&&e.mixins.forEach(h)}if(!o&&!c)return K(e)&&r.set(e,ut),ut;if(x(o))for(let h=0;h<o.length;h++){const _=pt(o[h]);is(_)&&(i[_]=k)}else if(o)for(const h in o){const _=pt(h);if(is(_)){const I=o[h],C=i[_]=x(I)||M(I)?{type:I}:ee({},I);if(C){const W=ls(Boolean,C.type),F=ls(String,C.type);C[0]=W>-1,C[1]=F<0||W<F,(W>-1||$(C,"default"))&&a.push(_)}}}const f=[i,a];return K(e)&&r.set(e,f),f}function is(e){return e[0]!=="$"}function as(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function cs(e,t){return as(e)===as(t)}function ls(e,t){return x(t)?t.findIndex(n=>cs(n,e)):M(t)&&cs(t,e)?0:-1}const $o=e=>e[0]==="_"||e==="$stable",Dr=e=>x(e)?e.map(Ee):[Ee(e)],Qa=(e,t,n)=>{if(t._n)return t;const r=Z((...s)=>Dr(t(...s)),n);return r._c=!1,r},Ro=(e,t,n)=>{const r=e._ctx;for(const s in e){if($o(s))continue;const o=e[s];if(M(o))t[s]=Qa(s,o,r);else if(o!=null){const i=Dr(o);t[s]=()=>i}}},Po=(e,t)=>{const n=Dr(t);e.slots.default=()=>n},ec=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=L(t),qt(t,"_",n)):Ro(t,e.slots={})}else e.slots={},t&&Po(e,t);qt(e.slots,dn,1)},tc=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,i=k;if(r.shapeFlag&32){const a=t._;a?n&&a===1?o=!1:(ee(s,t),!n&&a===1&&delete s._):(o=!t.$stable,Ro(t,s)),i=t}else t&&(Po(e,t),i={default:1});if(o)for(const a in s)!$o(a)&&i[a]==null&&delete s[a]};function tr(e,t,n,r,s=!1){if(x(e)){e.forEach((I,C)=>tr(I,t&&(x(t)?t[C]:t),n,r,s));return}if(Ct(r)&&!s)return;const o=r.shapeFlag&4?$r(r.component)||r.component.proxy:r.el,i=s?null:o,{i:a,r:c}=e,f=t&&t.r,h=a.refs===k?a.refs={}:a.refs,_=a.setupState;if(f!=null&&f!==c&&(X(f)?(h[f]=null,$(_,f)&&(_[f]=null)):fe(f)&&(f.value=null)),M(c))Be(c,a,12,[i,h]);else{const I=X(c),C=fe(c),W=e.f;if(I||C){const F=()=>{if(W){const H=I?$(_,c)?_[c]:h[c]:c.value;s?x(H)&&pr(H,o):x(H)?H.includes(o)||H.push(o):I?(h[c]=[o],$(_,c)&&(_[c]=h[c])):(c.value=[o],e.k&&(h[e.k]=c.value))}else I?(h[c]=i,$(_,c)&&(_[c]=i)):C&&(c.value=i,e.k&&(h[e.k]=i))};s||W?F():(F.id=-1,se(F,n))}}}const se=Sa;function nc(e){return rc(e)}function rc(e,t){const n=Gs();n.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:i,createText:a,createComment:c,setText:f,setElementText:h,parentNode:_,nextSibling:I,setScopeId:C=he,insertStaticContent:W}=e,F=(l,u,d,p=null,g=null,y=null,v=void 0,b=null,w=!!u.dynamicChildren)=>{if(l===u)return;l&&!vt(l,u)&&(p=Ft(l),we(l,g,y,!0),l=null),u.patchFlag===-2&&(w=!1,u.dynamicChildren=null);const{type:m,ref:E,shapeFlag:S}=u;switch(m){case fn:H(l,u,d,p);break;case gt:G(l,u,d,p);break;case $n:l==null&&be(u,d,p,v);break;case le:Pt(l,u,d,p,g,y,v,b,w);break;default:S&1?de(l,u,d,p,g,y,v,b,w):S&6?Lt(l,u,d,p,g,y,v,b,w):(S&64||S&128)&&m.process(l,u,d,p,g,y,v,b,w,at)}E!=null&&g&&tr(E,l&&l.ref,y,u||l,!u)},H=(l,u,d,p)=>{if(l==null)r(u.el=a(u.children),d,p);else{const g=u.el=l.el;u.children!==l.children&&f(g,u.children)}},G=(l,u,d,p)=>{l==null?r(u.el=c(u.children||""),d,p):u.el=l.el},be=(l,u,d,p)=>{[l.el,l.anchor]=W(l.children,u,d,p,l.el,l.anchor)},N=({el:l,anchor:u},d,p)=>{let g;for(;l&&l!==u;)g=I(l),r(l,d,p),l=g;r(u,d,p)},Y=({el:l,anchor:u})=>{let d;for(;l&&l!==u;)d=I(l),s(l),l=d;s(u)},de=(l,u,d,p,g,y,v,b,w)=>{u.type==="svg"?v="svg":u.type==="math"&&(v="mathml"),l==null?P(u,d,p,g,y,v,b,w):bn(l,u,g,y,v,b,w)},P=(l,u,d,p,g,y,v,b)=>{let w,m;const{props:E,shapeFlag:S,transition:T,dirs:A}=l;if(w=l.el=i(l.type,y,E&&E.is,E),S&8?h(w,l.children):S&16&&ye(l.children,w,null,p,g,On(l,y),v,b),A&&Ke(l,null,p,"created"),Se(w,l,l.scopeId,v,p),E){for(const B in E)B!=="value"&&!Ut(B)&&o(w,B,null,E[B],y,l.children,p,g,Ae);"value"in E&&o(w,"value",null,E.value,y),(m=E.onVnodeBeforeMount)&&Ie(m,p,l)}A&&Ke(l,null,p,"beforeMount");const D=sc(g,T);D&&T.beforeEnter(w),r(w,u,d),((m=E&&E.onVnodeMounted)||D||A)&&se(()=>{m&&Ie(m,p,l),D&&T.enter(w),A&&Ke(l,null,p,"mounted")},g)},Se=(l,u,d,p,g)=>{if(d&&C(l,d),p)for(let y=0;y<p.length;y++)C(l,p[y]);if(g){let y=g.subTree;if(u===y){const v=g.vnode;Se(l,v,v.scopeId,v.slotScopeIds,g.parent)}}},ye=(l,u,d,p,g,y,v,b,w=0)=>{for(let m=w;m<l.length;m++){const E=l[m]=b?Re(l[m]):Ee(l[m]);F(null,E,u,d,p,g,y,v,b)}},bn=(l,u,d,p,g,y,v)=>{const b=u.el=l.el;let{patchFlag:w,dynamicChildren:m,dirs:E}=u;w|=l.patchFlag&16;const S=l.props||k,T=u.props||k;let A;if(d&&qe(d,!1),(A=T.onVnodeBeforeUpdate)&&Ie(A,d,u,l),E&&Ke(u,l,d,"beforeUpdate"),d&&qe(d,!0),m?ke(l.dynamicChildren,m,b,d,p,On(u,g),y):v||z(l,u,b,null,d,p,On(u,g),y,!1),w>0){if(w&16)yt(b,u,S,T,d,p,g);else if(w&2&&S.class!==T.class&&o(b,"class",null,T.class,g),w&4&&o(b,"style",S.style,T.style,g),w&8){const D=u.dynamicProps;for(let B=0;B<D.length;B++){const V=D[B],J=S[V],pe=T[V];(pe!==J||V==="value")&&o(b,V,J,pe,g,l.children,d,p,Ae)}}w&1&&l.children!==u.children&&h(b,u.children)}else!v&&m==null&&yt(b,u,S,T,d,p,g);((A=T.onVnodeUpdated)||E)&&se(()=>{A&&Ie(A,d,u,l),E&&Ke(u,l,d,"updated")},p)},ke=(l,u,d,p,g,y,v)=>{for(let b=0;b<u.length;b++){const w=l[b],m=u[b],E=w.el&&(w.type===le||!vt(w,m)||w.shapeFlag&70)?_(w.el):d;F(w,m,E,null,p,g,y,v,!0)}},yt=(l,u,d,p,g,y,v)=>{if(d!==p){if(d!==k)for(const b in d)!Ut(b)&&!(b in p)&&o(l,b,d[b],null,v,u.children,g,y,Ae);for(const b in p){if(Ut(b))continue;const w=p[b],m=d[b];w!==m&&b!=="value"&&o(l,b,m,w,v,u.children,g,y,Ae)}"value"in p&&o(l,"value",d.value,p.value,v)}},Pt=(l,u,d,p,g,y,v,b,w)=>{const m=u.el=l?l.el:a(""),E=u.anchor=l?l.anchor:a("");let{patchFlag:S,dynamicChildren:T,slotScopeIds:A}=u;A&&(b=b?b.concat(A):A),l==null?(r(m,d,p),r(E,d,p),ye(u.children||[],d,E,g,y,v,b,w)):S>0&&S&64&&T&&l.dynamicChildren?(ke(l.dynamicChildren,T,d,g,y,v,b),(u.key!=null||g&&u===g.subTree)&&Lo(l,u,!0)):z(l,u,d,E,g,y,v,b,w)},Lt=(l,u,d,p,g,y,v,b,w)=>{u.slotScopeIds=b,l==null?u.shapeFlag&512?g.ctx.activate(u,d,p,v,w):yn(u,d,p,g,y,v,w):jr(l,u,w)},yn=(l,u,d,p,g,y,v)=>{const b=l.component=pc(l,p,g);if(Co(l)&&(b.ctx.renderer=at),gc(b),b.asyncDep){if(g&&g.registerDep(b,te),!l.el){const w=b.subTree=q(gt);G(null,w,u,d)}}else te(b,l,u,d,g,y,v)},jr=(l,u,d)=>{const p=u.component=l.component;if(Ia(l,u,d))if(p.asyncDep&&!p.asyncResolved){U(p,u,d);return}else p.next=u,ma(p.update),p.effect.dirty=!0,p.update();else u.el=l.el,p.vnode=u},te=(l,u,d,p,g,y,v)=>{const b=()=>{if(l.isMounted){let{next:E,bu:S,u:T,parent:A,vnode:D}=l;{const ct=Bo(l);if(ct){E&&(E.el=D.el,U(l,E,v)),ct.asyncDep.then(()=>{l.isUnmounted||b()});return}}let B=E,V;qe(l,!1),E?(E.el=D.el,U(l,E,v)):E=D,S&&Cn(S),(V=E.props&&E.props.onVnodeBeforeUpdate)&&Ie(V,A,E,D),qe(l,!0);const J=An(l),pe=l.subTree;l.subTree=J,F(pe,J,_(pe.el),Ft(pe),l,g,y),E.el=J.el,B===null&&Ea(l,J.el),T&&se(T,g),(V=E.props&&E.props.onVnodeUpdated)&&se(()=>Ie(V,A,E,D),g)}else{let E;const{el:S,props:T}=u,{bm:A,m:D,parent:B}=l,V=Ct(u);if(qe(l,!1),A&&Cn(A),!V&&(E=T&&T.onVnodeBeforeMount)&&Ie(E,B,u),qe(l,!0),S&&In){const J=()=>{l.subTree=An(l),In(S,l.subTree,l,g,null)};V?u.type.__asyncLoader().then(()=>!l.isUnmounted&&J()):J()}else{const J=l.subTree=An(l);F(null,J,d,p,l,g,y),u.el=J.el}if(D&&se(D,g),!V&&(E=T&&T.onVnodeMounted)){const J=u;se(()=>Ie(E,B,J),g)}(u.shapeFlag&256||B&&Ct(B.vnode)&&B.vnode.shapeFlag&256)&&l.a&&se(l.a,g),l.isMounted=!0,u=d=p=null}},w=l.effect=new br(b,he,()=>xr(m),l.scope),m=l.update=()=>{w.dirty&&w.run()};m.id=l.uid,qe(l,!0),m()},U=(l,u,d)=>{u.component=l;const p=l.vnode.props;l.vnode=u,l.next=null,Za(l,u.props,p,d),tc(l,u.children,d),st(),es(l),ot()},z=(l,u,d,p,g,y,v,b,w=!1)=>{const m=l&&l.children,E=l?l.shapeFlag:0,S=u.children,{patchFlag:T,shapeFlag:A}=u;if(T>0){if(T&128){Bt(m,S,d,p,g,y,v,b,w);return}else if(T&256){Ue(m,S,d,p,g,y,v,b,w);return}}A&8?(E&16&&Ae(m,g,y),S!==m&&h(d,S)):E&16?A&16?Bt(m,S,d,p,g,y,v,b,w):Ae(m,g,y,!0):(E&8&&h(d,""),A&16&&ye(S,d,p,g,y,v,b,w))},Ue=(l,u,d,p,g,y,v,b,w)=>{l=l||ut,u=u||ut;const m=l.length,E=u.length,S=Math.min(m,E);let T;for(T=0;T<S;T++){const A=u[T]=w?Re(u[T]):Ee(u[T]);F(l[T],A,d,null,g,y,v,b,w)}m>E?Ae(l,g,y,!0,!1,S):ye(u,d,p,g,y,v,b,w,S)},Bt=(l,u,d,p,g,y,v,b,w)=>{let m=0;const E=u.length;let S=l.length-1,T=E-1;for(;m<=S&&m<=T;){const A=l[m],D=u[m]=w?Re(u[m]):Ee(u[m]);if(vt(A,D))F(A,D,d,null,g,y,v,b,w);else break;m++}for(;m<=S&&m<=T;){const A=l[S],D=u[T]=w?Re(u[T]):Ee(u[T]);if(vt(A,D))F(A,D,d,null,g,y,v,b,w);else break;S--,T--}if(m>S){if(m<=T){const A=T+1,D=A<E?u[A].el:p;for(;m<=T;)F(null,u[m]=w?Re(u[m]):Ee(u[m]),d,D,g,y,v,b,w),m++}}else if(m>T)for(;m<=S;)we(l[m],g,y,!0),m++;else{const A=m,D=m,B=new Map;for(m=D;m<=T;m++){const ce=u[m]=w?Re(u[m]):Ee(u[m]);ce.key!=null&&B.set(ce.key,m)}let V,J=0;const pe=T-D+1;let ct=!1,kr=0;const wt=new Array(pe);for(m=0;m<pe;m++)wt[m]=0;for(m=A;m<=S;m++){const ce=l[m];if(J>=pe){we(ce,g,y,!0);continue}let ve;if(ce.key!=null)ve=B.get(ce.key);else for(V=D;V<=T;V++)if(wt[V-D]===0&&vt(ce,u[V])){ve=V;break}ve===void 0?we(ce,g,y,!0):(wt[ve-D]=m+1,ve>=kr?kr=ve:ct=!0,F(ce,u[ve],d,null,g,y,v,b,w),J++)}const Ur=ct?oc(wt):ut;for(V=Ur.length-1,m=pe-1;m>=0;m--){const ce=D+m,ve=u[ce],Wr=ce+1<E?u[ce+1].el:p;wt[m]===0?F(null,ve,d,Wr,g,y,v,b,w):ct&&(V<0||m!==Ur[V]?We(ve,d,Wr,2):V--)}}},We=(l,u,d,p,g=null)=>{const{el:y,type:v,transition:b,children:w,shapeFlag:m}=l;if(m&6){We(l.component.subTree,u,d,p);return}if(m&128){l.suspense.move(u,d,p);return}if(m&64){v.move(l,u,d,at);return}if(v===le){r(y,u,d);for(let S=0;S<w.length;S++)We(w[S],u,d,p);r(l.anchor,u,d);return}if(v===$n){N(l,u,d);return}if(p!==2&&m&1&&b)if(p===0)b.beforeEnter(y),r(y,u,d),se(()=>b.enter(y),g);else{const{leave:S,delayLeave:T,afterLeave:A}=b,D=()=>r(y,u,d),B=()=>{S(y,()=>{D(),A&&A()})};T?T(y,D,B):B()}else r(y,u,d)},we=(l,u,d,p=!1,g=!1)=>{const{type:y,props:v,ref:b,children:w,dynamicChildren:m,shapeFlag:E,patchFlag:S,dirs:T}=l;if(b!=null&&tr(b,null,d,l,!0),E&256){u.ctx.deactivate(l);return}const A=E&1&&T,D=!Ct(l);let B;if(D&&(B=v&&v.onVnodeBeforeUnmount)&&Ie(B,u,l),E&6)Si(l.component,d,p);else{if(E&128){l.suspense.unmount(d,p);return}A&&Ke(l,null,u,"beforeUnmount"),E&64?l.type.remove(l,u,d,g,at,p):m&&(y!==le||S>0&&S&64)?Ae(m,u,d,!1,!0):(y===le&&S&384||!g&&E&16)&&Ae(w,u,d),p&&Hr(l)}(D&&(B=v&&v.onVnodeUnmounted)||A)&&se(()=>{B&&Ie(B,u,l),A&&Ke(l,null,u,"unmounted")},d)},Hr=l=>{const{type:u,el:d,anchor:p,transition:g}=l;if(u===le){Ti(d,p);return}if(u===$n){Y(l);return}const y=()=>{s(d),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(l.shapeFlag&1&&g&&!g.persisted){const{leave:v,delayLeave:b}=g,w=()=>v(d,y);b?b(l.el,y,w):w()}else y()},Ti=(l,u)=>{let d;for(;l!==u;)d=I(l),s(l),l=d;s(u)},Si=(l,u,d)=>{const{bum:p,scope:g,update:y,subTree:v,um:b}=l;p&&Cn(p),g.stop(),y&&(y.active=!1,we(v,l,u,d)),b&&se(b,u),se(()=>{l.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Ae=(l,u,d,p=!1,g=!1,y=0)=>{for(let v=y;v<l.length;v++)we(l[v],u,d,p,g)},Ft=l=>l.shapeFlag&6?Ft(l.component.subTree):l.shapeFlag&128?l.suspense.next():I(l.anchor||l.el);let wn=!1;const Vr=(l,u,d)=>{l==null?u._vnode&&we(u._vnode,null,null,!0):F(u._vnode||null,l,u,null,null,null,d),wn||(wn=!0,es(),_o(),wn=!1),u._vnode=l},at={p:F,um:we,m:We,r:Hr,mt:yn,mc:ye,pc:z,pbc:ke,n:Ft,o:e};let vn,In;return t&&([vn,In]=t(at)),{render:Vr,hydrate:vn,createApp:Ya(Vr,vn)}}function On({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function qe({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function sc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Lo(e,t,n=!1){const r=e.children,s=t.children;if(x(r)&&x(s))for(let o=0;o<r.length;o++){const i=r[o];let a=s[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[o]=Re(s[o]),a.el=i.el),n||Lo(i,a)),a.type===fn&&(a.el=i.el)}}function oc(e){const t=e.slice(),n=[0];let r,s,o,i,a;const c=e.length;for(r=0;r<c;r++){const f=e[r];if(f!==0){if(s=n[n.length-1],e[s]<f){t[r]=s,n.push(r);continue}for(o=0,i=n.length-1;o<i;)a=o+i>>1,e[n[a]]<f?o=a+1:i=a;f<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}function Bo(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Bo(t)}const ic=e=>e.__isTeleport,le=Symbol.for("v-fgt"),fn=Symbol.for("v-txt"),gt=Symbol.for("v-cmt"),$n=Symbol.for("v-stc"),St=[];let me=null;function Te(e=!1){St.push(me=e?null:[])}function ac(){St.pop(),me=St[St.length-1]||null}let Ot=1;function us(e){Ot+=e}function Fo(e){return e.dynamicChildren=Ot>0?me||ut:null,ac(),Ot>0&&me&&me.push(e),e}function De(e,t,n,r,s,o){return Fo(O(e,t,n,r,s,o,!0))}function cc(e,t,n,r,s){return Fo(q(e,t,n,r,s,!0))}function No(e){return e?e.__v_isVNode===!0:!1}function vt(e,t){return e.type===t.type&&e.key===t.key}const dn="__vInternal",zo=({key:e})=>e??null,Kt=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?X(e)||fe(e)||M(e)?{i:oe,r:e,k:t,f:!!n}:e:null);function O(e,t=null,n=null,r=0,s=null,o=e===le?0:1,i=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&zo(t),ref:t&&Kt(t),scopeId:ln,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:oe};return a?(Or(c,n),o&128&&e.normalize(c)):n&&(c.shapeFlag|=X(n)?8:16),Ot>0&&!i&&me&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&me.push(c),c}const q=lc;function lc(e,t=null,n=null,r=0,s=null,o=!1){if((!e||e===Ca)&&(e=gt),No(e)){const a=mt(e,t,!0);return n&&Or(a,n),Ot>0&&!o&&me&&(a.shapeFlag&6?me[me.indexOf(e)]=a:me.push(a)),a.patchFlag|=-2,a}if(yc(e)&&(e=e.__vccOpts),t){t=uc(t);let{class:a,style:c}=t;a&&!X(a)&&(t.class=_r(a)),K(c)&&(uo(c)&&!x(c)&&(c=ee({},c)),t.style=mr(c))}const i=X(e)?1:Ta(e)?128:ic(e)?64:K(e)?4:M(e)?2:0;return O(e,t,n,r,s,i,o,!0)}function uc(e){return e?uo(e)||dn in e?ee({},e):e:null}function mt(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:i}=e,a=t?fc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&zo(a),ref:t&&t.ref?n&&s?x(s)?s.concat(Kt(t)):[s,Kt(t)]:Kt(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==le?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&mt(e.ssContent),ssFallback:e.ssFallback&&mt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function R(e=" ",t=0){return q(fn,null,e,t)}function Ee(e){return e==null||typeof e=="boolean"?q(gt):x(e)?q(le,null,e.slice()):typeof e=="object"?Re(e):q(fn,null,String(e))}function Re(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:mt(e)}function Or(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(x(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Or(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(dn in t)?t._ctx=oe:s===3&&oe&&(oe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else M(t)?(t={default:t,_ctx:oe},n=32):(t=String(t),r&64?(n=16,t=[R(t)]):n=8);e.children=t,e.shapeFlag|=n}function fc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=_r([t.class,r.class]));else if(s==="style")t.style=mr([t.style,r.style]);else if(nn(s)){const o=t[s],i=r[s];i&&o!==i&&!(x(o)&&o.includes(i))&&(t[s]=o?[].concat(o,i):i)}else s!==""&&(t[s]=r[s])}return t}function Ie(e,t,n,r=null){_e(e,t,7,[n,r])}const dc=Mo();let hc=0;function pc(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||dc,o={uid:hc++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new ji(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Oo(r,s),emitsOptions:yo(r,s),emit:null,emitted:null,propsDefaults:k,inheritAttrs:r.inheritAttrs,ctx:k,data:k,props:k,attrs:k,slots:k,refs:k,setupState:k,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=ya.bind(null,o),e.ce&&e.ce(o),o}let re=null,Xt,nr;{const e=Gs(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),o=>{s.length>1?s.forEach(i=>i(o)):s[0](o)}};Xt=t("__VUE_INSTANCE_SETTERS__",n=>re=n),nr=t("__VUE_SSR_SETTERS__",n=>hn=n)}const Rt=e=>{const t=re;return Xt(e),e.scope.on(),()=>{e.scope.off(),Xt(t)}},fs=()=>{re&&re.scope.off(),Xt(null)};function jo(e){return e.vnode.shapeFlag&4}let hn=!1;function gc(e,t=!1){t&&nr(t);const{props:n,children:r}=e.vnode,s=jo(e);Xa(e,n,s,t),ec(e,r);const o=s?mc(e,t):void 0;return t&&nr(!1),o}function mc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=fo(new Proxy(e.ctx,Va));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?bc(e):null,o=Rt(e);st();const i=Be(r,e,0,[e.props,s]);if(ot(),o(),Us(i)){if(i.then(fs,fs),t)return i.then(a=>{ds(e,a,t)}).catch(a=>{an(a,e,0)});e.asyncDep=i}else ds(e,i,t)}else Ho(e,t)}function ds(e,t,n){M(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:K(t)&&(e.setupState=po(t)),Ho(e,n)}let hs;function Ho(e,t,n){const r=e.type;if(!e.render){if(!t&&hs&&!r.render){const s=r.template||Mr(e).template;if(s){const{isCustomElement:o,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,f=ee(ee({isCustomElement:o,delimiters:a},i),c);r.render=hs(s,f)}}e.render=r.render||he}{const s=Rt(e);st();try{ka(e)}finally{ot(),s()}}}function _c(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ae(e,"get","$attrs"),t[n]}}))}function bc(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return _c(e)},slots:e.slots,emit:e.emit,expose:t}}function $r(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(po(fo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Tt)return Tt[n](e)},has(t,n){return n in t||n in Tt}}))}function yc(e){return M(e)&&"__vccOpts"in e}const wc=(e,t)=>la(e,t,hn),vc="3.4.15";/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Ic="http://www.w3.org/2000/svg",Ec="http://www.w3.org/1998/Math/MathML",Pe=typeof document<"u"?document:null,ps=Pe&&Pe.createElement("template"),Cc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?Pe.createElementNS(Ic,e):t==="mathml"?Pe.createElementNS(Ec,e):Pe.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Pe.createTextNode(e),createComment:e=>Pe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Pe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,o){const i=n?n.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{ps.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const a=ps.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Tc=Symbol("_vtc");function Sc(e,t,n){const r=e[Tc];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ac=Symbol("_vod"),xc=Symbol("");function Mc(e,t,n){const r=e.style,s=r.display,o=X(n);if(n&&!o){if(t&&!X(t))for(const i in t)n[i]==null&&rr(r,i,"");for(const i in n)rr(r,i,n[i])}else if(o){if(t!==n){const i=r[xc];i&&(n+=";"+i),r.cssText=n}}else t&&e.removeAttribute("style");Ac in e&&(r.display=s)}const gs=/\s*!important$/;function rr(e,t,n){if(x(n))n.forEach(r=>rr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Dc(e,t);gs.test(n)?e.setProperty(bt(r),n.replace(gs,""),"important"):e[r]=n}}const ms=["Webkit","Moz","ms"],Rn={};function Dc(e,t){const n=Rn[t];if(n)return n;let r=pt(t);if(r!=="filter"&&r in e)return Rn[t]=r;r=qs(r);for(let s=0;s<ms.length;s++){const o=ms[s]+r;if(o in e)return Rn[t]=o}return t}const _s="http://www.w3.org/1999/xlink";function Oc(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(_s,t.slice(6,t.length)):e.setAttributeNS(_s,t,n);else{const o=Ni(t);n==null||o&&!Ys(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function $c(e,t,n,r,s,o,i){if(t==="innerHTML"||t==="textContent"){r&&i(r,s,o),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const f=a==="OPTION"?e.getAttribute("value"):e.value,h=n??"";f!==h&&(e.value=h),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=Ys(n):n==null&&f==="string"?(n="",c=!0):f==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function Rc(e,t,n,r){e.addEventListener(t,n,r)}function Pc(e,t,n,r){e.removeEventListener(t,n,r)}const bs=Symbol("_vei");function Lc(e,t,n,r,s=null){const o=e[bs]||(e[bs]={}),i=o[t];if(r&&i)i.value=r;else{const[a,c]=Bc(t);if(r){const f=o[t]=zc(r,s);Rc(e,a,f,c)}else i&&(Pc(e,a,i,c),o[t]=void 0)}}const ys=/(?:Once|Passive|Capture)$/;function Bc(e){let t;if(ys.test(e)){t={};let r;for(;r=e.match(ys);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):bt(e.slice(2)),t]}let Pn=0;const Fc=Promise.resolve(),Nc=()=>Pn||(Fc.then(()=>Pn=0),Pn=Date.now());function zc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;_e(jc(r,n.value),t,5,[r])};return n.value=e,n.attached=Nc(),n}function jc(e,t){if(x(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const ws=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Hc=(e,t,n,r,s,o,i,a,c)=>{const f=s==="svg";t==="class"?Sc(e,r,f):t==="style"?Mc(e,n,r):nn(t)?hr(t)||Lc(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Vc(e,t,r,f))?$c(e,t,r,o,i,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Oc(e,t,r,f))};function Vc(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&ws(t)&&M(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ws(t)&&X(n)?!1:t in e}const kc=ee({patchProp:Hc},Cc);let vs;function Uc(){return vs||(vs=nc(kc))}const Wc=(...e)=>{const t=Uc().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=qc(r);if(!s)return;const o=t._component;!M(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.innerHTML="";const i=n(s,!1,Kc(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},t};function Kc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function qc(e){return X(e)?document.querySelector(e):e}const Gc="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e",Ve=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},Yc=e=>(wo("data-v-531db362"),e=e(),vo(),e),Jc={class:"greetings"},Xc={class:"green"},Zc=Yc(()=>O("h3",null,[R(" You’ve successfully created a project with "),O("a",{href:"https://vitejs.dev/",target:"_blank",rel:"noopener"},"Vite"),R(" + "),O("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"Vue 3"),R(". ")],-1)),Qc={__name:"HelloWorld",props:{msg:{type:String,required:!0}},setup(e){return(t,n)=>(Te(),De("div",Jc,[O("h1",Xc,zi(e.msg),1),Zc]))}},el=Ve(Qc,[["__scopeId","data-v-531db362"]]),tl={},nl={class:"item"},rl={class:"details"};function sl(e,t){return Te(),De("div",nl,[O("i",null,[Mn(e.$slots,"icon",{},void 0,!0)]),O("div",rl,[O("h3",null,[Mn(e.$slots,"heading",{},void 0,!0)]),Mn(e.$slots,"default",{},void 0,!0)])])}const It=Ve(tl,[["render",sl],["__scopeId","data-v-fd0742eb"]]),ol={},il={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"},al=O("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1),cl=[al];function ll(e,t){return Te(),De("svg",il,cl)}const ul=Ve(ol,[["render",ll]]),fl={},dl={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},hl=O("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1),pl=[hl];function gl(e,t){return Te(),De("svg",dl,pl)}const ml=Ve(fl,[["render",gl]]),_l={},bl={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"20",fill:"currentColor"},yl=O("path",{d:"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"},null,-1),wl=[yl];function vl(e,t){return Te(),De("svg",bl,wl)}const Il=Ve(_l,[["render",vl]]),El={},Cl={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},Tl=O("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1),Sl=[Tl];function Al(e,t){return Te(),De("svg",Cl,Sl)}const xl=Ve(El,[["render",Al]]),Ml={},Dl={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},Ol=O("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1),$l=[Ol];function Rl(e,t){return Te(),De("svg",Dl,$l)}const Pl=Ve(Ml,[["render",Rl]]),Ll=O("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"official documentation",-1),Bl=O("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener"},"Vite",-1),Fl=O("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener"},"VSCode",-1),Nl=O("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank",rel:"noopener"},"Volar",-1),zl=O("a",{href:"https://www.cypress.io/",target:"_blank",rel:"noopener"},"Cypress",-1),jl=O("a",{href:"https://on.cypress.io/component",target:"_blank",rel:"noopener"},"Cypress Component Testing",-1),Hl=O("br",null,null,-1),Vl=O("code",null,"README.md",-1),kl=O("a",{href:"https://pinia.vuejs.org/",target:"_blank",rel:"noopener"},"Pinia",-1),Ul=O("a",{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Router",-1),Wl=O("a",{href:"https://test-utils.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Test Utils",-1),Kl=O("a",{href:"https://github.com/vuejs/devtools",target:"_blank",rel:"noopener"},"Vue Dev Tools",-1),ql=O("a",{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"},"Awesome Vue",-1),Gl=O("a",{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"},"Vue Land",-1),Yl=O("a",{href:"https://stackoverflow.com/questions/tagged/vue.js",target:"_blank",rel:"noopener"},"StackOverflow",-1),Jl=O("a",{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"},"our mailing list",-1),Xl=O("a",{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"},"@vuejs",-1),Zl=O("a",{href:"https://vuejs.org/sponsor/",target:"_blank",rel:"noopener"},"becoming a sponsor",-1),Ql={__name:"TheWelcome",setup(e){return(t,n)=>(Te(),De(le,null,[q(It,null,{icon:Z(()=>[q(ul)]),heading:Z(()=>[R("Documentation")]),default:Z(()=>[R(" Vue’s "),Ll,R(" provides you with all information you need to get started. ")]),_:1}),q(It,null,{icon:Z(()=>[q(ml)]),heading:Z(()=>[R("Tooling")]),default:Z(()=>[R(" This project is served and bundled with "),Bl,R(". The recommended IDE setup is "),Fl,R(" + "),Nl,R(". If you need to test your components and web pages, check out "),zl,R(" and "),jl,R(". "),Hl,R(" More instructions are available in "),Vl,R(". ")]),_:1}),q(It,null,{icon:Z(()=>[q(Il)]),heading:Z(()=>[R("Ecosystem")]),default:Z(()=>[R(" Get official tools and libraries for your project: "),kl,R(", "),Ul,R(", "),Wl,R(", and "),Kl,R(". If you need more resources, we suggest paying "),ql,R(" a visit. ")]),_:1}),q(It,null,{icon:Z(()=>[q(xl)]),heading:Z(()=>[R("Community")]),default:Z(()=>[R(" Got stuck? Ask your question on "),Gl,R(", our official Discord server, or "),Yl,R(". You should also subscribe to "),Jl,R(" and follow the official "),Xl,R(" twitter account for latest news in the Vue world. ")]),_:1}),q(It,null,{icon:Z(()=>[q(Pl)]),heading:Z(()=>[R("Support Vue")]),default:Z(()=>[R(" As an independent project, Vue relies on community backing for its sustainability. You can help us by "),Zl,R(". ")]),_:1})],64))}},eu=e=>(wo("data-v-7f576311"),e=e(),vo(),e),tu=eu(()=>O("img",{alt:"Vue logo",class:"logo",src:Gc,width:"125",height:"125"},null,-1)),nu={class:"wrapper"},ru={__name:"App",setup(e){return(t,n)=>(Te(),De(le,null,[O("header",null,[tu,O("div",nu,[q(el,{msg:"You did it!"})])]),O("main",null,[q(Ql)])],64))}},su=Ve(ru,[["__scopeId","data-v-7f576311"]]);var Is={};/**
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
 */const Vo=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},ou=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=e[n++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=e[n++],i=e[n++],a=e[n++],c=((s&7)<<18|(o&63)<<12|(i&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const o=e[n++],i=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|i&63)}}return t.join("")},ko={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const o=e[s],i=s+1<e.length,a=i?e[s+1]:0,c=s+2<e.length,f=c?e[s+2]:0,h=o>>2,_=(o&3)<<4|a>>4;let I=(a&15)<<2|f>>6,C=f&63;c||(C=64,i||(I=64)),r.push(n[h],n[_],n[I],n[C])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Vo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):ou(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const o=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const f=s<e.length?n[e.charAt(s)]:64;++s;const _=s<e.length?n[e.charAt(s)]:64;if(++s,o==null||a==null||f==null||_==null)throw new iu;const I=o<<2|a>>4;if(r.push(I),f!==64){const C=a<<4&240|f>>2;if(r.push(C),_!==64){const W=f<<6&192|_;r.push(W)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class iu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const au=function(e){const t=Vo(e);return ko.encodeByteArray(t,!0)},Uo=function(e){return au(e).replace(/\./g,"")},cu=function(e){try{return ko.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function lu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const uu=()=>lu().__FIREBASE_DEFAULTS__,fu=()=>{if(typeof process>"u"||typeof Is>"u")return;const e=Is.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},du=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&cu(e[1]);return t&&JSON.parse(t)},hu=()=>{try{return uu()||fu()||du()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Wo=()=>{var e;return(e=hu())===null||e===void 0?void 0:e.config};/**
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
 */class pu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function gu(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Ko(){try{return typeof indexedDB=="object"}catch{return!1}}function qo(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function mu(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const _u="FirebaseError";class it extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=_u,Object.setPrototypeOf(this,it.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pn.prototype.create)}}class pn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,o=this.errors[t],i=o?bu(o,r):"Error",a=`${this.serviceName}: ${i} (${s}).`;return new it(s,a,r)}}function bu(e,t){return e.replace(yu,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const yu=/\{\$([^}]+)}/g;function Zt(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const o=e[s],i=t[s];if(Es(o)&&Es(i)){if(!Zt(o,i))return!1}else if(o!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Es(e){return e!==null&&typeof e=="object"}/**
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
 */const wu=1e3,vu=2,Iu=4*60*60*1e3,Eu=.5;function Cs(e,t=wu,n=vu){const r=t*Math.pow(n,e),s=Math.round(Eu*r*(Math.random()-.5)*2);return Math.min(Iu,r+s)}/**
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
 */function Go(e){return e&&e._delegate?e._delegate:e}class He{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ge="[DEFAULT]";/**
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
 */class Cu{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new pu;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Su(t))try{this.getOrInitializeService({instanceIdentifier:Ge})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Ge){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ge){return this.instances.has(t)}getOptions(t=Ge){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&i.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const i=this.instances.get(s);return i&&t(i,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Tu(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ge){return this.component?this.component.multipleInstances?t:Ge:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Tu(e){return e===Ge?void 0:e}function Su(e){return e.instantiationMode==="EAGER"}/**
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
 */class Au{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Cu(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var j;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(j||(j={}));const xu={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},Mu=j.INFO,Du={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},Ou=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Du[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Yo{constructor(t){this.name=t,this._logLevel=Mu,this._logHandler=Ou,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in j))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?xu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...t),this._logHandler(this,j.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...t),this._logHandler(this,j.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,j.INFO,...t),this._logHandler(this,j.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,j.WARN,...t),this._logHandler(this,j.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...t),this._logHandler(this,j.ERROR,...t)}}const $u=(e,t)=>t.some(n=>e instanceof n);let Ts,Ss;function Ru(){return Ts||(Ts=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pu(){return Ss||(Ss=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jo=new WeakMap,sr=new WeakMap,Xo=new WeakMap,Ln=new WeakMap,Rr=new WeakMap;function Lu(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{n(Fe(e.result)),s()},i=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&Jo.set(n,e)}).catch(()=>{}),Rr.set(t,e),t}function Bu(e){if(sr.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});sr.set(e,t)}let or={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return sr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Xo.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fe(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Fu(e){or=e(or)}function Nu(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Bn(this),t,...n);return Xo.set(r,t.sort?t.sort():[t]),Fe(r)}:Pu().includes(e)?function(...t){return e.apply(Bn(this),t),Fe(Jo.get(this))}:function(...t){return Fe(e.apply(Bn(this),t))}}function zu(e){return typeof e=="function"?Nu(e):(e instanceof IDBTransaction&&Bu(e),$u(e,Ru())?new Proxy(e,or):e)}function Fe(e){if(e instanceof IDBRequest)return Lu(e);if(Ln.has(e))return Ln.get(e);const t=zu(e);return t!==e&&(Ln.set(e,t),Rr.set(t,e)),t}const Bn=e=>Rr.get(e);function ju(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(e,t),a=Fe(i);return r&&i.addEventListener("upgradeneeded",c=>{r(Fe(i.result),c.oldVersion,c.newVersion,Fe(i.transaction),c)}),n&&i.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),a}const Hu=["get","getKey","getAll","getAllKeys","count"],Vu=["put","add","delete","clear"],Fn=new Map;function As(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Fn.get(t))return Fn.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Vu.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Hu.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,s?"readwrite":"readonly");let f=c.store;return r&&(f=f.index(a.shift())),(await Promise.all([f[n](...a),s&&c.done]))[0]};return Fn.set(t,o),o}Fu(e=>({...e,get:(t,n,r)=>As(t,n)||e.get(t,n,r),has:(t,n)=>!!As(t,n)||e.has(t,n)}));/**
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
 */class ku{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Uu(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Uu(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ir="@firebase/app",xs="0.9.26";/**
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
 */const et=new Yo("@firebase/app"),Wu="@firebase/app-compat",Ku="@firebase/analytics-compat",qu="@firebase/analytics",Gu="@firebase/app-check-compat",Yu="@firebase/app-check",Ju="@firebase/auth",Xu="@firebase/auth-compat",Zu="@firebase/database",Qu="@firebase/database-compat",ef="@firebase/functions",tf="@firebase/functions-compat",nf="@firebase/installations",rf="@firebase/installations-compat",sf="@firebase/messaging",of="@firebase/messaging-compat",af="@firebase/performance",cf="@firebase/performance-compat",lf="@firebase/remote-config",uf="@firebase/remote-config-compat",ff="@firebase/storage",df="@firebase/storage-compat",hf="@firebase/firestore",pf="@firebase/firestore-compat",gf="firebase";/**
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
 */const ar="[DEFAULT]",mf={[ir]:"fire-core",[Wu]:"fire-core-compat",[qu]:"fire-analytics",[Ku]:"fire-analytics-compat",[Yu]:"fire-app-check",[Gu]:"fire-app-check-compat",[Ju]:"fire-auth",[Xu]:"fire-auth-compat",[Zu]:"fire-rtdb",[Qu]:"fire-rtdb-compat",[ef]:"fire-fn",[tf]:"fire-fn-compat",[nf]:"fire-iid",[rf]:"fire-iid-compat",[sf]:"fire-fcm",[of]:"fire-fcm-compat",[af]:"fire-perf",[cf]:"fire-perf-compat",[lf]:"fire-rc",[uf]:"fire-rc-compat",[ff]:"fire-gcs",[df]:"fire-gcs-compat",[hf]:"fire-fst",[pf]:"fire-fst-compat","fire-js":"fire-js",[gf]:"fire-js-all"};/**
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
 */const Qt=new Map,cr=new Map;function _f(e,t){try{e.container.addComponent(t)}catch(n){et.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function tt(e){const t=e.name;if(cr.has(t))return et.debug(`There were multiple attempts to register component ${t}.`),!1;cr.set(t,e);for(const n of Qt.values())_f(n,e);return!0}function gn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const bf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ne=new pn("app","Firebase",bf);/**
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
 */class yf{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new He("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ne.create("app-deleted",{appName:this._name})}}function Zo(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ar,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Ne.create("bad-app-name",{appName:String(s)});if(n||(n=Wo()),!n)throw Ne.create("no-options");const o=Qt.get(s);if(o){if(Zt(n,o.options)&&Zt(r,o.config))return o;throw Ne.create("duplicate-app",{appName:s})}const i=new Au(s);for(const c of cr.values())i.addComponent(c);const a=new yf(n,r,i);return Qt.set(s,a),a}function wf(e=ar){const t=Qt.get(e);if(!t&&e===ar&&Wo())return Zo();if(!t)throw Ne.create("no-app",{appName:e});return t}function ze(e,t,n){var r;let s=(r=mf[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),i=t.match(/\s|\//);if(o||i){const a=[`Unable to register library "${s}" with version "${t}":`];o&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),et.warn(a.join(" "));return}tt(new He(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const vf="firebase-heartbeat-database",If=1,$t="firebase-heartbeat-store";let Nn=null;function Qo(){return Nn||(Nn=ju(vf,If,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore($t)}catch(n){console.warn(n)}}}}).catch(e=>{throw Ne.create("idb-open",{originalErrorMessage:e.message})})),Nn}async function Ef(e){try{return await(await Qo()).transaction($t).objectStore($t).get(ei(e))}catch(t){if(t instanceof it)et.warn(t.message);else{const n=Ne.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});et.warn(n.message)}}}async function Ms(e,t){try{const r=(await Qo()).transaction($t,"readwrite");await r.objectStore($t).put(t,ei(e)),await r.done}catch(n){if(n instanceof it)et.warn(n.message);else{const r=Ne.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});et.warn(r.message)}}}function ei(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Cf=1024,Tf=30*24*60*60*1e3;class Sf{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xf(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ds();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(i=>i.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=Tf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ds(),{heartbeatsToSend:r,unsentEntries:s}=Af(this._heartbeatsCache.heartbeats),o=Uo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Ds(){return new Date().toISOString().substring(0,10)}function Af(e,t=Cf){const n=[];let r=e.slice();for(const s of e){const o=n.find(i=>i.agent===s.agent);if(o){if(o.dates.push(s.date),Os(n)>t){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Os(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ko()?qo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ef(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ms(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ms(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Os(e){return Uo(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Mf(e){tt(new He("platform-logger",t=>new ku(t),"PRIVATE")),tt(new He("heartbeat",t=>new Sf(t),"PRIVATE")),ze(ir,xs,e),ze(ir,xs,"esm2017"),ze("fire-js","")}Mf("");var Df="firebase",Of="10.7.2";/**
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
 */ze(Df,Of,"app");const $f=(e,t)=>t.some(n=>e instanceof n);let $s,Rs;function Rf(){return $s||($s=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pf(){return Rs||(Rs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ti=new WeakMap,lr=new WeakMap,ni=new WeakMap,zn=new WeakMap,Pr=new WeakMap;function Lf(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{n(je(e.result)),s()},i=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&ti.set(n,e)}).catch(()=>{}),Pr.set(t,e),t}function Bf(e){if(lr.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});lr.set(e,t)}let ur={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return lr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ni.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return je(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ff(e){ur=e(ur)}function Nf(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(jn(this),t,...n);return ni.set(r,t.sort?t.sort():[t]),je(r)}:Pf().includes(e)?function(...t){return e.apply(jn(this),t),je(ti.get(this))}:function(...t){return je(e.apply(jn(this),t))}}function zf(e){return typeof e=="function"?Nf(e):(e instanceof IDBTransaction&&Bf(e),$f(e,Rf())?new Proxy(e,ur):e)}function je(e){if(e instanceof IDBRequest)return Lf(e);if(zn.has(e))return zn.get(e);const t=zf(e);return t!==e&&(zn.set(e,t),Pr.set(t,e)),t}const jn=e=>Pr.get(e);function jf(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(e,t),a=je(i);return r&&i.addEventListener("upgradeneeded",c=>{r(je(i.result),c.oldVersion,c.newVersion,je(i.transaction))}),n&&i.addEventListener("blocked",()=>n()),a.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Hf=["get","getKey","getAll","getAllKeys","count"],Vf=["put","add","delete","clear"],Hn=new Map;function Ps(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Hn.get(t))return Hn.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Vf.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Hf.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,s?"readwrite":"readonly");let f=c.store;return r&&(f=f.index(a.shift())),(await Promise.all([f[n](...a),s&&c.done]))[0]};return Hn.set(t,o),o}Ff(e=>({...e,get:(t,n,r)=>Ps(t,n)||e.get(t,n,r),has:(t,n)=>!!Ps(t,n)||e.has(t,n)}));const ri="@firebase/installations",Lr="0.6.4";/**
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
 */const si=1e4,oi=`w:${Lr}`,ii="FIS_v2",kf="https://firebaseinstallations.googleapis.com/v1",Uf=60*60*1e3,Wf="installations",Kf="Installations";/**
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
 */const qf={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},nt=new pn(Wf,Kf,qf);function ai(e){return e instanceof it&&e.code.includes("request-failed")}/**
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
 */function ci({projectId:e}){return`${kf}/projects/${e}/installations`}function li(e){return{token:e.token,requestStatus:2,expiresIn:Yf(e.expiresIn),creationTime:Date.now()}}async function ui(e,t){const r=(await t.json()).error;return nt.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function fi({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Gf(e,{refreshToken:t}){const n=fi(e);return n.append("Authorization",Jf(t)),n}async function di(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Yf(e){return Number(e.replace("s","000"))}function Jf(e){return`${ii} ${e}`}/**
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
 */async function Xf({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=ci(e),s=fi(e),o=t.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const i={fid:n,authVersion:ii,appId:e.appId,sdkVersion:oi},a={method:"POST",headers:s,body:JSON.stringify(i)},c=await di(()=>fetch(r,a));if(c.ok){const f=await c.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:li(f.authToken)}}else throw await ui("Create Installation",c)}/**
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
 */function hi(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function Zf(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Qf=/^[cdef][\w-]{21}$/,fr="";function ed(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=td(e);return Qf.test(n)?n:fr}catch{return fr}}function td(e){return Zf(e).substr(0,22)}/**
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
 */function mn(e){return`${e.appName}!${e.appId}`}/**
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
 */const pi=new Map;function gi(e,t){const n=mn(e);mi(n,t),nd(n,t)}function mi(e,t){const n=pi.get(e);if(n)for(const r of n)r(t)}function nd(e,t){const n=rd();n&&n.postMessage({key:e,fid:t}),sd()}let Je=null;function rd(){return!Je&&"BroadcastChannel"in self&&(Je=new BroadcastChannel("[Firebase] FID Change"),Je.onmessage=e=>{mi(e.data.key,e.data.fid)}),Je}function sd(){pi.size===0&&Je&&(Je.close(),Je=null)}/**
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
 */const od="firebase-installations-database",id=1,rt="firebase-installations-store";let Vn=null;function Br(){return Vn||(Vn=jf(od,id,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(rt)}}})),Vn}async function en(e,t){const n=mn(e),s=(await Br()).transaction(rt,"readwrite"),o=s.objectStore(rt),i=await o.get(n);return await o.put(t,n),await s.done,(!i||i.fid!==t.fid)&&gi(e,t.fid),t}async function _i(e){const t=mn(e),r=(await Br()).transaction(rt,"readwrite");await r.objectStore(rt).delete(t),await r.done}async function _n(e,t){const n=mn(e),s=(await Br()).transaction(rt,"readwrite"),o=s.objectStore(rt),i=await o.get(n),a=t(i);return a===void 0?await o.delete(n):await o.put(a,n),await s.done,a&&(!i||i.fid!==a.fid)&&gi(e,a.fid),a}/**
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
 */async function Fr(e){let t;const n=await _n(e.appConfig,r=>{const s=ad(r),o=cd(e,s);return t=o.registrationPromise,o.installationEntry});return n.fid===fr?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function ad(e){const t=e||{fid:ed(),registrationStatus:0};return bi(t)}function cd(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(nt.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=ld(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:ud(e)}:{installationEntry:t}}async function ld(e,t){try{const n=await Xf(e,t);return en(e.appConfig,n)}catch(n){throw ai(n)&&n.customData.serverCode===409?await _i(e.appConfig):await en(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function ud(e){let t=await Ls(e.appConfig);for(;t.registrationStatus===1;)await hi(100),t=await Ls(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Fr(e);return r||n}return t}function Ls(e){return _n(e,t=>{if(!t)throw nt.create("installation-not-found");return bi(t)})}function bi(e){return fd(e)?{fid:e.fid,registrationStatus:0}:e}function fd(e){return e.registrationStatus===1&&e.registrationTime+si<Date.now()}/**
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
 */async function dd({appConfig:e,heartbeatServiceProvider:t},n){const r=hd(e,n),s=Gf(e,n),o=t.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const i={installation:{sdkVersion:oi,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(i)},c=await di(()=>fetch(r,a));if(c.ok){const f=await c.json();return li(f)}else throw await ui("Generate Auth Token",c)}function hd(e,{fid:t}){return`${ci(e)}/${t}/authTokens:generate`}/**
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
 */async function Nr(e,t=!1){let n;const r=await _n(e.appConfig,o=>{if(!yi(o))throw nt.create("not-registered");const i=o.authToken;if(!t&&md(i))return o;if(i.requestStatus===1)return n=pd(e,t),o;{if(!navigator.onLine)throw nt.create("app-offline");const a=bd(o);return n=gd(e,a),a}});return n?await n:r.authToken}async function pd(e,t){let n=await Bs(e.appConfig);for(;n.authToken.requestStatus===1;)await hi(100),n=await Bs(e.appConfig);const r=n.authToken;return r.requestStatus===0?Nr(e,t):r}function Bs(e){return _n(e,t=>{if(!yi(t))throw nt.create("not-registered");const n=t.authToken;return yd(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function gd(e,t){try{const n=await dd(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await en(e.appConfig,r),n}catch(n){if(ai(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await _i(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await en(e.appConfig,r)}throw n}}function yi(e){return e!==void 0&&e.registrationStatus===2}function md(e){return e.requestStatus===2&&!_d(e)}function _d(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Uf}function bd(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function yd(e){return e.requestStatus===1&&e.requestTime+si<Date.now()}/**
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
 */async function wd(e){const t=e,{installationEntry:n,registrationPromise:r}=await Fr(t);return r?r.catch(console.error):Nr(t).catch(console.error),n.fid}/**
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
 */async function vd(e,t=!1){const n=e;return await Id(n),(await Nr(n,t)).token}async function Id(e){const{registrationPromise:t}=await Fr(e);t&&await t}/**
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
 */function Ed(e){if(!e||!e.options)throw kn("App Configuration");if(!e.name)throw kn("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw kn(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function kn(e){return nt.create("missing-app-config-values",{valueName:e})}/**
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
 */const wi="installations",Cd="installations-internal",Td=e=>{const t=e.getProvider("app").getImmediate(),n=Ed(t),r=gn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Sd=e=>{const t=e.getProvider("app").getImmediate(),n=gn(t,wi).getImmediate();return{getId:()=>wd(n),getToken:s=>vd(n,s)}};function Ad(){tt(new He(wi,Td,"PUBLIC")),tt(new He(Cd,Sd,"PRIVATE"))}Ad();ze(ri,Lr);ze(ri,Lr,"esm2017");/**
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
 */const tn="analytics",xd="firebase_id",Md="origin",Dd=60*1e3,Od="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",zr="https://www.googletagmanager.com/gtag/js";/**
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
 */const ie=new Yo("@firebase/analytics");/**
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
 */const $d={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ue=new pn("analytics","Analytics",$d);/**
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
 */function Rd(e){if(!e.startsWith(zr)){const t=ue.create("invalid-gtag-resource",{gtagURL:e});return ie.warn(t.message),""}return e}function vi(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Pd(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Ld(e,t){const n=Pd("firebase-js-sdk-policy",{createScriptURL:Rd}),r=document.createElement("script"),s=`${zr}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Bd(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Fd(e,t,n,r,s,o){const i=r[s];try{if(i)await t[i];else{const c=(await vi(n)).find(f=>f.measurementId===s);c&&await t[c.appId]}}catch(a){ie.error(a)}e("config",s,o)}async function Nd(e,t,n,r,s){try{let o=[];if(s&&s.send_to){let i=s.send_to;Array.isArray(i)||(i=[i]);const a=await vi(n);for(const c of i){const f=a.find(_=>_.measurementId===c),h=f&&t[f.appId];if(h)o.push(h);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,s||{})}catch(o){ie.error(o)}}function zd(e,t,n,r){async function s(o,...i){try{if(o==="event"){const[a,c]=i;await Nd(e,t,n,a,c)}else if(o==="config"){const[a,c]=i;await Fd(e,t,n,r,a,c)}else if(o==="consent"){const[a]=i;e("consent","update",a)}else if(o==="get"){const[a,c,f]=i;e("get",a,c,f)}else if(o==="set"){const[a]=i;e("set",a)}else e(o,...i)}catch(a){ie.error(a)}}return s}function jd(e,t,n,r,s){let o=function(...i){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=zd(o,e,t,n),{gtagCore:o,wrappedGtag:window[s]}}function Hd(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(zr)&&n.src.includes(e))return n;return null}/**
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
 */const Vd=30,kd=1e3;class Ud{constructor(t={},n=kd){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Ii=new Ud;function Wd(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Kd(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:Wd(r)},o=Od.replace("{app-id}",n),i=await fetch(o,s);if(i.status!==200&&i.status!==304){let a="";try{const c=await i.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw ue.create("config-fetch-failed",{httpStatus:i.status,responseMessage:a})}return i.json()}async function qd(e,t=Ii,n){const{appId:r,apiKey:s,measurementId:o}=e.options;if(!r)throw ue.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:r};throw ue.create("no-api-key")}const i=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Jd;return setTimeout(async()=>{a.abort()},n!==void 0?n:Dd),Ei({appId:r,apiKey:s,measurementId:o},i,a,t)}async function Ei(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=Ii){var o;const{appId:i,measurementId:a}=e;try{await Gd(r,t)}catch(c){if(a)return ie.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:i,measurementId:a};throw c}try{const c=await Kd(e);return s.deleteThrottleMetadata(i),c}catch(c){const f=c;if(!Yd(f)){if(s.deleteThrottleMetadata(i),a)return ie.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:i,measurementId:a};throw c}const h=Number((o=f==null?void 0:f.customData)===null||o===void 0?void 0:o.httpStatus)===503?Cs(n,s.intervalMillis,Vd):Cs(n,s.intervalMillis),_={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return s.setThrottleMetadata(i,_),ie.debug(`Calling attemptFetch again in ${h} millis`),Ei(e,_,r,s)}}function Gd(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(o),r(ue.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Yd(e){if(!(e instanceof it)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Jd{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Xd(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const o=await t,i=Object.assign(Object.assign({},r),{send_to:o});e("event",n,i)}}/**
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
 */async function Zd(){if(Ko())try{await qo()}catch(e){return ie.warn(ue.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return ie.warn(ue.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Qd(e,t,n,r,s,o,i){var a;const c=qd(e);c.then(C=>{n[C.measurementId]=C.appId,e.options.measurementId&&C.measurementId!==e.options.measurementId&&ie.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${C.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(C=>ie.error(C)),t.push(c);const f=Zd().then(C=>{if(C)return r.getId()}),[h,_]=await Promise.all([c,f]);Hd(o)||Ld(o,h.measurementId),s("js",new Date);const I=(a=i==null?void 0:i.config)!==null&&a!==void 0?a:{};return I[Md]="firebase",I.update=!0,_!=null&&(I[xd]=_),s("config",h.measurementId,I),h.measurementId}/**
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
 */class eh{constructor(t){this.app=t}_delete(){return delete At[this.app.options.appId],Promise.resolve()}}let At={},Fs=[];const Ns={};let Un="dataLayer",th="gtag",zs,Ci,js=!1;function nh(){const e=[];if(gu()&&e.push("This is a browser extension environment."),mu()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=ue.create("invalid-analytics-context",{errorInfo:t});ie.warn(n.message)}}function rh(e,t,n){nh();const r=e.options.appId;if(!r)throw ue.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)ie.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ue.create("no-api-key");if(At[r]!=null)throw ue.create("already-exists",{id:r});if(!js){Bd(Un);const{wrappedGtag:o,gtagCore:i}=jd(At,Fs,Ns,Un,th);Ci=o,zs=i,js=!0}return At[r]=Qd(e,Fs,Ns,t,zs,Un,n),new eh(e)}function sh(e=wf()){e=Go(e);const t=gn(e,tn);return t.isInitialized()?t.getImmediate():oh(e)}function oh(e,t={}){const n=gn(e,tn);if(n.isInitialized()){const s=n.getImmediate();if(Zt(t,n.getOptions()))return s;throw ue.create("already-initialized")}return n.initialize({options:t})}function ih(e,t,n,r){e=Go(e),Xd(Ci,At[e.app.options.appId],t,n,r).catch(s=>ie.error(s))}const Hs="@firebase/analytics",Vs="0.10.0";function ah(){tt(new He(tn,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return rh(r,s,n)},"PUBLIC")),tt(new He("analytics-internal",e,"PRIVATE")),ze(Hs,Vs),ze(Hs,Vs,"esm2017");function e(t){try{const n=t.getProvider(tn).getImmediate();return{logEvent:(r,s,o)=>ih(n,r,s,o)}}catch(n){throw ue.create("interop-component-reg-failed",{reason:n})}}}ah();const ch={apiKey:"AIzaSyBx-rR0SqJ9WpHYXjci1o4XpTZapPlDndM",authDomain:"sproject-f2667.firebaseapp.com",projectId:"sproject-f2667",storageBucket:"sproject-f2667.appspot.com",messagingSenderId:"659975981756",appId:"1:659975981756:web:c8497852b10a68d591deb9",measurementId:"G-3S2T64EHRH"},lh=Zo(ch);sh(lh);Wc(su).mount("#app");
