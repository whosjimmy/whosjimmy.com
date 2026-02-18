const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DXRuHb9K.js","./Bio.BaV4dkSc.css","./C57wmf0d.js","./index.32WehS37.css","./D2DJ6yJ7.js","./BZvIfGt4.js","./Login.Dn_TlE6G.css","./BL164NOX.js","./HhUBZAGN.js","./Gallery.Czay4GFJ.css","./0xCGIh_I.js","./Contact.Bq_tjq4M.css","./CcXDQBTs.js","./Bgm44Z4w.js","./BoCQxQlW.js","./CpcvAPpO.js","./index.ASLudlX-.css","./BEfjvpEG.js","./Users.xD9FK16m.css","./Di3KLCoW.js","./index.EfND0qCY.css","./PL5YCUQM.js","./Clocks.CaZdgkmv.css","./C6PPux7_.js","./Xhdq1SHB.js","./Film.Ck2fAW-2.css","./Lc0X6M1q.js","./index.SWL0PKs2.css","./CXo2I6FG.js","./CK3CTZV7.js","./Clocks.Dmp-oUCd.css","./SKraRC9d.js","./Videos.Bqy61xGA.css","./Qpa2HU1k.js","./DDY2MG3H.js","./BQR2tly5.js","./Film.CyscwsSS.css","./CPQ_kh9h.js","./Celebrities.BS01JuXe.css","./BnuxbvY9.js","./default.C5oIgVt-.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ad(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const je={},vi=[],Fn=()=>{},II=()=>!1,Ca=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ld=t=>t.startsWith("onUpdate:"),gt=Object.assign,cd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},SI=Object.prototype.hasOwnProperty,Le=(t,e)=>SI.call(t,e),ce=Array.isArray,Ei=t=>Ji(t)==="[object Map]",Qi=t=>Ji(t)==="[object Set]",qm=t=>Ji(t)==="[object Date]",RI=t=>Ji(t)==="[object RegExp]",pe=t=>typeof t=="function",Qe=t=>typeof t=="string",Sn=t=>typeof t=="symbol",Ue=t=>t!==null&&typeof t=="object",ud=t=>(Ue(t)||pe(t))&&pe(t.then)&&pe(t.catch),$v=Object.prototype.toString,Ji=t=>$v.call(t),CI=t=>Ji(t).slice(8,-1),jv=t=>Ji(t)==="[object Object]",fd=t=>Qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,wi=ad(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},PI=/-(\w)/g,mn=Mc(t=>t.replace(PI,(e,n)=>n?n.toUpperCase():"")),kI=/\B([A-Z])/g,Ws=Mc(t=>t.replace(kI,"-$1").toLowerCase()),Vc=Mc(t=>t.charAt(0).toUpperCase()+t.slice(1)),ju=Mc(t=>t?`on${Vc(t)}`:""),Kr=(t,e)=>!Object.is(t,e),bi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Uf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ec=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Bv=t=>{const e=Qe(t)?Number(t):NaN;return isNaN(e)?t:e};let zm;const Fc=()=>zm||(zm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Uc(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Qe(r)?DI(r):Uc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Qe(t)||Ue(t))return t}const OI=/;(?![^(]*\))/g,NI=/:([^]+)/,xI=/\/\*[^]*?\*\//g;function DI(t){const e={};return t.replace(xI,"").split(OI).forEach(n=>{if(n){const r=n.split(NI);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Pa(t){let e="";if(Qe(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=Pa(t[n]);r&&(e+=r+" ")}else if(Ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function O9(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Qe(e)&&(t.class=Pa(e)),n&&(t.style=Uc(n)),t}const LI="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",MI=ad(LI);function Hv(t){return!!t||t===""}function VI(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ka(t[r],e[r]);return n}function ka(t,e){if(t===e)return!0;let n=qm(t),r=qm(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Sn(t),r=Sn(e),n||r)return t===e;if(n=ce(t),r=ce(e),n||r)return n&&r?VI(t,e):!1;if(n=Ue(t),r=Ue(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!ka(t[o],e[o]))return!1}}return String(t)===String(e)}function hd(t,e){return t.findIndex(n=>ka(n,e))}const qv=t=>!!(t&&t.__v_isRef===!0),dd=t=>Qe(t)?t:t==null?"":ce(t)||Ue(t)&&(t.toString===$v||!pe(t.toString))?qv(t)?dd(t.value):JSON.stringify(t,zv,2):String(t),zv=(t,e)=>qv(e)?zv(t,e.value):Ei(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Bu(r,i)+" =>"]=s,n),{})}:Qi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Bu(n))}:Sn(e)?Bu(e):Ue(e)&&!ce(e)&&!jv(e)?String(e):e,Bu=(t,e="")=>{var n;return Sn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xt;class Wv{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=xt,!e&&xt&&(this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=xt;try{return xt=this,e()}finally{xt=n}}}on(){++this._on===1&&(this.prevScope=xt,xt=this)}off(){this._on>0&&--this._on===0&&(xt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function pd(t){return new Wv(t)}function Xi(){return xt}function ra(t,e=!1){xt&&xt.cleanups.push(t)}let He;const Hu=new WeakSet;class Gv{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,xt&&xt.active&&xt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Hu.has(this)&&(Hu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Yv(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Wm(this),Qv(this);const e=He,n=An;He=this,An=!0;try{return this.fn()}finally{Jv(this),He=e,An=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)yd(e);this.deps=this.depsTail=void 0,Wm(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Hu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){$f(this)&&this.run()}get dirty(){return $f(this)}}let Kv=0,Fo,Uo;function Yv(t,e=!1){if(t.flags|=8,e){t.next=Uo,Uo=t;return}t.next=Fo,Fo=t}function md(){Kv++}function gd(){if(--Kv>0)return;if(Uo){let e=Uo;for(Uo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Fo;){let e=Fo;for(Fo=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Qv(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Jv(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),yd(r),FI(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function $f(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Xv(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Xv(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===sa)||(t.globalVersion=sa,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!$f(t))))return;t.flags|=2;const e=t.dep,n=He,r=An;He=t,An=!0;try{Qv(t);const s=t.fn(t._value);(e.version===0||Kr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{He=n,An=r,Jv(t),t.flags&=-3}}function yd(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)yd(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function FI(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let An=!0;const Zv=[];function pr(){Zv.push(An),An=!1}function mr(){const t=Zv.pop();An=t===void 0?!0:t}function Wm(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=He;He=void 0;try{e()}finally{He=n}}}let sa=0;class UI{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class $c{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!He||!An||He===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==He)n=this.activeLink=new UI(He,this),He.deps?(n.prevDep=He.depsTail,He.depsTail.nextDep=n,He.depsTail=n):He.deps=He.depsTail=n,eE(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=He.depsTail,n.nextDep=void 0,He.depsTail.nextDep=n,He.depsTail=n,He.deps===n&&(He.deps=r)}return n}trigger(e){this.version++,sa++,this.notify(e)}notify(e){md();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{gd()}}}function eE(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)eE(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const tc=new WeakMap,ks=Symbol(""),jf=Symbol(""),ia=Symbol("");function Lt(t,e,n){if(An&&He){let r=tc.get(t);r||tc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new $c),s.map=r,s.key=n),s.track()}}function ir(t,e,n,r,s,i){const o=tc.get(t);if(!o){sa++;return}const a=c=>{c&&c.trigger()};if(md(),e==="clear")o.forEach(a);else{const c=ce(t),u=c&&fd(n);if(c&&n==="length"){const f=Number(r);o.forEach((h,p)=>{(p==="length"||p===ia||!Sn(p)&&p>=f)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(ia)),e){case"add":c?u&&a(o.get("length")):(a(o.get(ks)),Ei(t)&&a(o.get(jf)));break;case"delete":c||(a(o.get(ks)),Ei(t)&&a(o.get(jf)));break;case"set":Ei(t)&&a(o.get(ks));break}}gd()}function $I(t,e){const n=tc.get(t);return n&&n.get(e)}function ai(t){const e=Pe(t);return e===t?e:(Lt(e,"iterate",ia),dn(t)?e:e.map(bt))}function jc(t){return Lt(t=Pe(t),"iterate",ia),t}const jI={__proto__:null,[Symbol.iterator](){return qu(this,Symbol.iterator,bt)},concat(...t){return ai(this).concat(...t.map(e=>ce(e)?ai(e):e))},entries(){return qu(this,"entries",t=>(t[1]=bt(t[1]),t))},every(t,e){return tr(this,"every",t,e,void 0,arguments)},filter(t,e){return tr(this,"filter",t,e,n=>n.map(bt),arguments)},find(t,e){return tr(this,"find",t,e,bt,arguments)},findIndex(t,e){return tr(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return tr(this,"findLast",t,e,bt,arguments)},findLastIndex(t,e){return tr(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return tr(this,"forEach",t,e,void 0,arguments)},includes(...t){return zu(this,"includes",t)},indexOf(...t){return zu(this,"indexOf",t)},join(t){return ai(this).join(t)},lastIndexOf(...t){return zu(this,"lastIndexOf",t)},map(t,e){return tr(this,"map",t,e,void 0,arguments)},pop(){return To(this,"pop")},push(...t){return To(this,"push",t)},reduce(t,...e){return Gm(this,"reduce",t,e)},reduceRight(t,...e){return Gm(this,"reduceRight",t,e)},shift(){return To(this,"shift")},some(t,e){return tr(this,"some",t,e,void 0,arguments)},splice(...t){return To(this,"splice",t)},toReversed(){return ai(this).toReversed()},toSorted(t){return ai(this).toSorted(t)},toSpliced(...t){return ai(this).toSpliced(...t)},unshift(...t){return To(this,"unshift",t)},values(){return qu(this,"values",bt)}};function qu(t,e,n){const r=jc(t),s=r[e]();return r!==t&&!dn(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const BI=Array.prototype;function tr(t,e,n,r,s,i){const o=jc(t),a=o!==t&&!dn(t),c=o[e];if(c!==BI[e]){const h=c.apply(t,i);return a?bt(h):h}let u=n;o!==t&&(a?u=function(h,p){return n.call(this,bt(h),p,t)}:n.length>2&&(u=function(h,p){return n.call(this,h,p,t)}));const f=c.call(o,u,r);return a&&s?s(f):f}function Gm(t,e,n,r){const s=jc(t);let i=n;return s!==t&&(dn(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,bt(a),c,t)}),s[e](i,...r)}function zu(t,e,n){const r=Pe(t);Lt(r,"iterate",ia);const s=r[e](...n);return(s===-1||s===!1)&&Ed(n[0])?(n[0]=Pe(n[0]),r[e](...n)):s}function To(t,e,n=[]){pr(),md();const r=Pe(t)[e].apply(t,n);return gd(),mr(),r}const HI=ad("__proto__,__v_isRef,__isVue"),tE=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Sn));function qI(t){Sn(t)||(t=String(t));const e=Pe(this);return Lt(e,"has",t),e.hasOwnProperty(t)}class nE{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?e1:oE:i?iE:sE).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ce(e);if(!s){let c;if(o&&(c=jI[n]))return c;if(n==="hasOwnProperty")return qI}const a=Reflect.get(e,n,Ye(e)?e:r);return(Sn(n)?tE.has(n):HI(n))||(s||Lt(e,"get",n),i)?a:Ye(a)?o&&fd(n)?a:a.value:Ue(a)?s?aE(a):Tr(a):a}}class rE extends nE{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=gr(i);if(!dn(r)&&!gr(r)&&(i=Pe(i),r=Pe(r)),!ce(e)&&Ye(i)&&!Ye(r))return c?!1:(i.value=r,!0)}const o=ce(e)&&fd(n)?Number(n)<e.length:Le(e,n),a=Reflect.set(e,n,r,Ye(e)?e:s);return e===Pe(s)&&(o?Kr(r,i)&&ir(e,"set",n,r):ir(e,"add",n,r)),a}deleteProperty(e,n){const r=Le(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&ir(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Sn(n)||!tE.has(n))&&Lt(e,"has",n),r}ownKeys(e){return Lt(e,"iterate",ce(e)?"length":ks),Reflect.ownKeys(e)}}class zI extends nE{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const WI=new rE,GI=new zI,KI=new rE(!0);const Bf=t=>t,dl=t=>Reflect.getPrototypeOf(t);function YI(t,e,n){return function(...r){const s=this.__v_raw,i=Pe(s),o=Ei(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?Bf:e?nc:bt;return!e&&Lt(i,"iterate",c?jf:ks),{next(){const{value:h,done:p}=u.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function pl(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function QI(t,e){const n={get(s){const i=this.__v_raw,o=Pe(i),a=Pe(s);t||(Kr(s,a)&&Lt(o,"get",s),Lt(o,"get",a));const{has:c}=dl(o),u=e?Bf:t?nc:bt;if(c.call(o,s))return u(i.get(s));if(c.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Lt(Pe(s),"iterate",ks),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Pe(i),a=Pe(s);return t||(Kr(s,a)&&Lt(o,"has",s),Lt(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=Pe(a),u=e?Bf:t?nc:bt;return!t&&Lt(c,"iterate",ks),a.forEach((f,h)=>s.call(i,u(f),u(h),o))}};return gt(n,t?{add:pl("add"),set:pl("set"),delete:pl("delete"),clear:pl("clear")}:{add(s){!e&&!dn(s)&&!gr(s)&&(s=Pe(s));const i=Pe(this);return dl(i).has.call(i,s)||(i.add(s),ir(i,"add",s,s)),this},set(s,i){!e&&!dn(i)&&!gr(i)&&(i=Pe(i));const o=Pe(this),{has:a,get:c}=dl(o);let u=a.call(o,s);u||(s=Pe(s),u=a.call(o,s));const f=c.call(o,s);return o.set(s,i),u?Kr(i,f)&&ir(o,"set",s,i):ir(o,"add",s,i),this},delete(s){const i=Pe(this),{has:o,get:a}=dl(i);let c=o.call(i,s);c||(s=Pe(s),c=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return c&&ir(i,"delete",s,void 0),u},clear(){const s=Pe(this),i=s.size!==0,o=s.clear();return i&&ir(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=YI(s,t,e)}),n}function _d(t,e){const n=QI(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Le(n,s)&&s in r?n:r,s,i)}const JI={get:_d(!1,!1)},XI={get:_d(!1,!0)},ZI={get:_d(!0,!1)};const sE=new WeakMap,iE=new WeakMap,oE=new WeakMap,e1=new WeakMap;function t1(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function n1(t){return t.__v_skip||!Object.isExtensible(t)?0:t1(CI(t))}function Tr(t){return gr(t)?t:vd(t,!1,WI,JI,sE)}function Ln(t){return vd(t,!1,KI,XI,iE)}function aE(t){return vd(t,!0,GI,ZI,oE)}function vd(t,e,n,r,s){if(!Ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=n1(t);if(i===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,i===2?r:n);return s.set(t,a),a}function Un(t){return gr(t)?Un(t.__v_raw):!!(t&&t.__v_isReactive)}function gr(t){return!!(t&&t.__v_isReadonly)}function dn(t){return!!(t&&t.__v_isShallow)}function Ed(t){return t?!!t.__v_raw:!1}function Pe(t){const e=t&&t.__v_raw;return e?Pe(e):t}function wd(t){return!Le(t,"__v_skip")&&Object.isExtensible(t)&&Uf(t,"__v_skip",!0),t}const bt=t=>Ue(t)?Tr(t):t,nc=t=>Ue(t)?aE(t):t;function Ye(t){return t?t.__v_isRef===!0:!1}function nt(t){return lE(t,!1)}function Gn(t){return lE(t,!0)}function lE(t,e){return Ye(t)?t:new r1(t,e)}class r1{constructor(e,n){this.dep=new $c,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Pe(e),this._value=n?e:bt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||dn(e)||gr(e);e=r?e:Pe(e),Kr(e,n)&&(this._rawValue=e,this._value=r?e:bt(e),this.dep.trigger())}}function lt(t){return Ye(t)?t.value:t}function cE(t){return pe(t)?t():lt(t)}const s1={get:(t,e,n)=>e==="__v_raw"?t:lt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ye(s)&&!Ye(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function uE(t){return Un(t)?t:new Proxy(t,s1)}class i1{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new $c,{get:r,set:s}=e(n.track.bind(n),n.trigger.bind(n));this._get=r,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function o1(t){return new i1(t)}function a1(t){const e=ce(t)?new Array(t.length):{};for(const n in t)e[n]=fE(t,n);return e}class l1{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return $I(Pe(this._object),this._key)}}class c1{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function bd(t,e,n){return Ye(t)?t:pe(t)?new c1(t):Ue(t)&&arguments.length>1?fE(t,e,n):nt(t)}function fE(t,e,n){const r=t[e];return Ye(r)?r:new l1(t,e,n)}class u1{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new $c(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=sa-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&He!==this)return Yv(this,!0),!0}get value(){const e=this.dep.track();return Xv(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function f1(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new u1(r,s,n)}const ml={},rc=new WeakMap;let As;function h1(t,e=!1,n=As){if(n){let r=rc.get(n);r||rc.set(n,r=[]),r.push(t)}}function d1(t,e,n=je){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,u=I=>s?I:dn(I)||s===!1||s===0?or(I,1):or(I);let f,h,p,m,y=!1,b=!1;if(Ye(t)?(h=()=>t.value,y=dn(t)):Un(t)?(h=()=>u(t),y=!0):ce(t)?(b=!0,y=t.some(I=>Un(I)||dn(I)),h=()=>t.map(I=>{if(Ye(I))return I.value;if(Un(I))return u(I);if(pe(I))return c?c(I,2):I()})):pe(t)?e?h=c?()=>c(t,2):t:h=()=>{if(p){pr();try{p()}finally{mr()}}const I=As;As=f;try{return c?c(t,3,[m]):t(m)}finally{As=I}}:h=Fn,e&&s){const I=h,D=s===!0?1/0:s;h=()=>or(I(),D)}const P=Xi(),O=()=>{f.stop(),P&&P.active&&cd(P.effects,f)};if(i&&e){const I=e;e=(...D)=>{I(...D),O()}}let C=b?new Array(t.length).fill(ml):ml;const v=I=>{if(!(!(f.flags&1)||!f.dirty&&!I))if(e){const D=f.run();if(s||y||(b?D.some((F,S)=>Kr(F,C[S])):Kr(D,C))){p&&p();const F=As;As=f;try{const S=[D,C===ml?void 0:b&&C[0]===ml?[]:C,m];C=D,c?c(e,3,S):e(...S)}finally{As=F}}}else f.run()};return a&&a(v),f=new Gv(h),f.scheduler=o?()=>o(v,!1):v,m=I=>h1(I,!1,f),p=f.onStop=()=>{const I=rc.get(f);if(I){if(c)c(I,4);else for(const D of I)D();rc.delete(f)}},e?r?v(!0):C=f.run():o?o(v.bind(null,!0),!0):f.run(),O.pause=f.pause.bind(f),O.resume=f.resume.bind(f),O.stop=O,O}function or(t,e=1/0,n){if(e<=0||!Ue(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ye(t))or(t.value,e,n);else if(ce(t))for(let r=0;r<t.length;r++)or(t[r],e,n);else if(Qi(t)||Ei(t))t.forEach(r=>{or(r,e,n)});else if(jv(t)){for(const r in t)or(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&or(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Oa(t,e,n,r){try{return r?t(...r):t()}catch(s){Zi(s,e,n)}}function Rn(t,e,n,r){if(pe(t)){const s=Oa(t,e,n,r);return s&&ud(s)&&s.catch(i=>{Zi(i,e,n)}),s}if(ce(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Rn(t[i],e,n,r));return s}}function Zi(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||je;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](t,c,u)===!1)return}a=a.parent}if(i){pr(),Oa(i,null,10,[t,c,u]),mr();return}}p1(t,n,s,r,o)}function p1(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const qt=[];let Nn=-1;const Ti=[];let Lr=null,fi=0;const hE=Promise.resolve();let sc=null;function Kn(t){const e=sc||hE;return t?e.then(this?t.bind(this):t):e}function m1(t){let e=Nn+1,n=qt.length;for(;e<n;){const r=e+n>>>1,s=qt[r],i=oa(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Td(t){if(!(t.flags&1)){const e=oa(t),n=qt[qt.length-1];!n||!(t.flags&2)&&e>=oa(n)?qt.push(t):qt.splice(m1(e),0,t),t.flags|=1,dE()}}function dE(){sc||(sc=hE.then(pE))}function Hf(t){ce(t)?Ti.push(...t):Lr&&t.id===-1?Lr.splice(fi+1,0,t):t.flags&1||(Ti.push(t),t.flags|=1),dE()}function Km(t,e,n=Nn+1){for(;n<qt.length;n++){const r=qt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;qt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ic(t){if(Ti.length){const e=[...new Set(Ti)].sort((n,r)=>oa(n)-oa(r));if(Ti.length=0,Lr){Lr.push(...e);return}for(Lr=e,fi=0;fi<Lr.length;fi++){const n=Lr[fi];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Lr=null,fi=0}}const oa=t=>t.id==null?t.flags&2?-1:1/0:t.id;function pE(t){try{for(Nn=0;Nn<qt.length;Nn++){const e=qt[Nn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Oa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Nn<qt.length;Nn++){const e=qt[Nn];e&&(e.flags&=-2)}Nn=-1,qt.length=0,ic(),sc=null,(qt.length||Ti.length)&&pE()}}let It=null,mE=null;function oc(t){const e=It;return It=t,mE=t&&t.type.__scopeId||null,e}function en(t,e=It,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&og(-1);const i=oc(e);let o;try{o=t(...s)}finally{oc(i),r._d&&og(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function N9(t,e){if(It===null)return t;const n=zc(It),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=je]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&or(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function xn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(pr(),Rn(c,n,8,[t.el,a,t,e]),mr())}}const g1=Symbol("_vte"),gE=t=>t.__isTeleport,Mr=Symbol("_leaveCb"),gl=Symbol("_enterCb");function y1(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Li(()=>{t.isMounted=!0}),eo(()=>{t.isUnmounting=!0}),t}const un=[Function,Array],yE={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:un,onEnter:un,onAfterEnter:un,onEnterCancelled:un,onBeforeLeave:un,onLeave:un,onAfterLeave:un,onLeaveCancelled:un,onBeforeAppear:un,onAppear:un,onAfterAppear:un,onAppearCancelled:un},_E=t=>{const e=t.subTree;return e.component?_E(e.component):e},_1={name:"BaseTransition",props:yE,setup(t,{slots:e}){const n=Gs(),r=y1();return()=>{const s=e.default&&wE(e.default(),!0);if(!s||!s.length)return;const i=vE(s),o=Pe(t),{mode:a}=o;if(r.isLeaving)return Wu(i);const c=Ym(i);if(!c)return Wu(i);let u=qf(c,o,r,n,h=>u=h);c.type!==ct&&Di(c,u);let f=n.subTree&&Ym(n.subTree);if(f&&f.type!==ct&&!wn(c,f)&&_E(n).type!==ct){let h=qf(f,o,r,n);if(Di(f,h),a==="out-in"&&c.type!==ct)return r.isLeaving=!0,h.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete h.afterLeave,f=void 0},Wu(i);a==="in-out"&&c.type!==ct?h.delayLeave=(p,m,y)=>{const b=EE(r,f);b[String(f.key)]=f,p[Mr]=()=>{m(),p[Mr]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{y(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function vE(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==ct){e=n;break}}return e}const v1=_1;function EE(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function qf(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:f,onEnterCancelled:h,onBeforeLeave:p,onLeave:m,onAfterLeave:y,onLeaveCancelled:b,onBeforeAppear:P,onAppear:O,onAfterAppear:C,onAppearCancelled:v}=e,I=String(t.key),D=EE(n,t),F=(_,T)=>{_&&Rn(_,r,9,T)},S=(_,T)=>{const N=T[1];F(_,T),ce(_)?_.every(k=>k.length<=1)&&N():_.length<=1&&N()},E={mode:o,persisted:a,beforeEnter(_){let T=c;if(!n.isMounted)if(i)T=P||c;else return;_[Mr]&&_[Mr](!0);const N=D[I];N&&wn(t,N)&&N.el[Mr]&&N.el[Mr](),F(T,[_])},enter(_){let T=u,N=f,k=h;if(!n.isMounted)if(i)T=O||u,N=C||f,k=v||h;else return;let A=!1;const ge=_[gl]=Ee=>{A||(A=!0,Ee?F(k,[_]):F(N,[_]),E.delayedLeave&&E.delayedLeave(),_[gl]=void 0)};T?S(T,[_,ge]):ge()},leave(_,T){const N=String(t.key);if(_[gl]&&_[gl](!0),n.isUnmounting)return T();F(p,[_]);let k=!1;const A=_[Mr]=ge=>{k||(k=!0,T(),ge?F(b,[_]):F(y,[_]),_[Mr]=void 0,D[N]===t&&delete D[N])};D[N]=t,m?S(m,[_,A]):A()},clone(_){const T=qf(_,e,n,r,s);return s&&s(T),T}};return E}function Wu(t){if(Na(t))return t=pn(t),t.children=null,t}function Ym(t){if(!Na(t))return gE(t.type)&&t.children?vE(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&pe(n.default))return n.default()}}function Di(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Di(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function wE(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Mt?(o.patchFlag&128&&s++,r=r.concat(wE(o.children,e,a))):(e||o.type!==ct)&&r.push(a!=null?pn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function yn(t,e){return pe(t)?gt({name:t.name},e,{setup:t}):t}function Ad(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ai(t,e,n,r,s=!1){if(ce(t)){t.forEach((y,b)=>Ai(y,e&&(ce(e)?e[b]:e),n,r,s));return}if(Yr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ai(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?zc(r.component):r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,f=a.refs===je?a.refs={}:a.refs,h=a.setupState,p=Pe(h),m=h===je?()=>!1:y=>Le(p,y);if(u!=null&&u!==c&&(Qe(u)?(f[u]=null,m(u)&&(h[u]=null)):Ye(u)&&(u.value=null)),pe(c))Oa(c,a,12,[o,f]);else{const y=Qe(c),b=Ye(c);if(y||b){const P=()=>{if(t.f){const O=y?m(c)?h[c]:f[c]:c.value;s?ce(O)&&cd(O,i):ce(O)?O.includes(i)||O.push(i):y?(f[c]=[i],m(c)&&(h[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else y?(f[c]=o,m(c)&&(h[c]=o)):b&&(c.value=o,t.k&&(f[t.k]=o))};o?(P.id=-1,Et(P,n)):P()}}}let Qm=!1;const li=()=>{Qm||(console.error("Hydration completed but contains mismatches."),Qm=!0)},E1=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",w1=t=>t.namespaceURI.includes("MathML"),yl=t=>{if(t.nodeType===1){if(E1(t))return"svg";if(w1(t))return"mathml"}},yi=t=>t.nodeType===8;function b1(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:u}}=t,f=(v,I)=>{if(!I.hasChildNodes()){n(null,v,I),ic(),I._vnode=v;return}h(I.firstChild,v,null,null,null),ic(),I._vnode=v},h=(v,I,D,F,S,E=!1)=>{E=E||!!I.dynamicChildren;const _=yi(v)&&v.data==="[",T=()=>b(v,I,D,F,S,_),{type:N,ref:k,shapeFlag:A,patchFlag:ge}=I;let Ee=v.nodeType;I.el=v,ge===-2&&(E=!1,I.dynamicChildren=null);let ee=null;switch(N){case Ns:Ee!==3?I.children===""?(c(I.el=s(""),o(v),v),ee=v):ee=T():(v.data!==I.children&&(li(),v.data=I.children),ee=i(v));break;case ct:C(v)?(ee=i(v),O(I.el=v.content.firstChild,v,D)):Ee!==8||_?ee=T():ee=i(v);break;case jo:if(_&&(v=i(v),Ee=v.nodeType),Ee===1||Ee===3){ee=v;const ie=!I.children.length;for(let re=0;re<I.staticCount;re++)ie&&(I.children+=ee.nodeType===1?ee.outerHTML:ee.data),re===I.staticCount-1&&(I.anchor=ee),ee=i(ee);return _?i(ee):ee}else T();break;case Mt:_?ee=y(v,I,D,F,S,E):ee=T();break;default:if(A&1)(Ee!==1||I.type.toLowerCase()!==v.tagName.toLowerCase())&&!C(v)?ee=T():ee=p(v,I,D,F,S,E);else if(A&6){I.slotScopeIds=S;const ie=o(v);if(_?ee=P(v):yi(v)&&v.data==="teleport start"?ee=P(v,v.data,"teleport end"):ee=i(v),e(I,ie,null,D,F,yl(ie),E),Yr(I)&&!I.type.__asyncResolved){let re;_?(re=ve(Mt),re.anchor=ee?ee.previousSibling:ie.lastChild):re=v.nodeType===3?Qt(""):ve("div"),re.el=v,I.component.subTree=re}}else A&64?Ee!==8?ee=T():ee=I.type.hydrate(v,I,D,F,S,E,t,m):A&128&&(ee=I.type.hydrate(v,I,D,F,yl(o(v)),S,E,t,h))}return k!=null&&Ai(k,null,F,I),ee},p=(v,I,D,F,S,E)=>{E=E||!!I.dynamicChildren;const{type:_,props:T,patchFlag:N,shapeFlag:k,dirs:A,transition:ge}=I,Ee=_==="input"||_==="option";if(Ee||N!==-1){A&&xn(I,null,D,"created");let ee=!1;if(C(v)){ee=qE(null,ge)&&D&&D.vnode.props&&D.vnode.props.appear;const re=v.content.firstChild;if(ee){const Be=re.getAttribute("class");Be&&(re.$cls=Be),ge.beforeEnter(re)}O(re,v,D),I.el=v=re}if(k&16&&!(T&&(T.innerHTML||T.textContent))){let re=m(v.firstChild,I,v,D,F,S,E);for(;re;){_l(v,1)||li();const Be=re;re=re.nextSibling,a(Be)}}else if(k&8){let re=I.children;re[0]===`
`&&(v.tagName==="PRE"||v.tagName==="TEXTAREA")&&(re=re.slice(1)),v.textContent!==re&&(_l(v,0)||li(),v.textContent=I.children)}if(T){if(Ee||!E||N&48){const re=v.tagName.includes("-");for(const Be in T)(Ee&&(Be.endsWith("value")||Be==="indeterminate")||Ca(Be)&&!wi(Be)||Be[0]==="."||re)&&r(v,Be,null,T[Be],void 0,D)}else if(T.onClick)r(v,"onClick",null,T.onClick,void 0,D);else if(N&4&&Un(T.style))for(const re in T.style)T.style[re]}let ie;(ie=T&&T.onVnodeBeforeMount)&&Kt(ie,D,I),A&&xn(I,null,D,"beforeMount"),((ie=T&&T.onVnodeMounted)||A||ee)&&QE(()=>{ie&&Kt(ie,D,I),ee&&ge.enter(v),A&&xn(I,null,D,"mounted")},F)}return v.nextSibling},m=(v,I,D,F,S,E,_)=>{_=_||!!I.dynamicChildren;const T=I.children,N=T.length;for(let k=0;k<N;k++){const A=_?T[k]:T[k]=tn(T[k]),ge=A.type===Ns;v?(ge&&!_&&k+1<N&&tn(T[k+1]).type===Ns&&(c(s(v.data.slice(A.children.length)),D,i(v)),v.data=A.children),v=h(v,A,F,S,E,_)):ge&&!A.children?c(A.el=s(""),D):(_l(D,1)||li(),n(null,A,D,null,F,S,yl(D),E))}return v},y=(v,I,D,F,S,E)=>{const{slotScopeIds:_}=I;_&&(S=S?S.concat(_):_);const T=o(v),N=m(i(v),I,T,D,F,S,E);return N&&yi(N)&&N.data==="]"?i(I.anchor=N):(li(),c(I.anchor=u("]"),T,N),N)},b=(v,I,D,F,S,E)=>{if(_l(v.parentElement,1)||li(),I.el=null,E){const N=P(v);for(;;){const k=i(v);if(k&&k!==N)a(k);else break}}const _=i(v),T=o(v);return a(v),n(null,I,T,_,D,F,yl(T),S),D&&(D.vnode.el=I.el,qc(D,I.el)),_},P=(v,I="[",D="]")=>{let F=0;for(;v;)if(v=i(v),v&&yi(v)&&(v.data===I&&F++,v.data===D)){if(F===0)return i(v);F--}return v},O=(v,I,D)=>{const F=I.parentNode;F&&F.replaceChild(v,I);let S=D;for(;S;)S.vnode.el===I&&(S.vnode.el=S.subTree.el=v),S=S.parent},C=v=>v.nodeType===1&&v.tagName==="TEMPLATE";return[f,h]}const Jm="data-allow-mismatch",T1={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function _l(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(Jm);)t=t.parentElement;const n=t&&t.getAttribute(Jm);if(n==null)return!1;if(n==="")return!0;{const r=n.split(",");return e===0&&r.includes("children")?!0:r.includes(T1[e])}}Fc().requestIdleCallback;Fc().cancelIdleCallback;function A1(t,e){if(yi(t)&&t.data==="["){let n=1,r=t.nextSibling;for(;r;){if(r.nodeType===1){if(e(r)===!1)break}else if(yi(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else e(t)}const Yr=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function I1(t){pe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:i,timeout:o,suspensible:a=!0,onError:c}=t;let u=null,f,h=0;const p=()=>(h++,u=null,m()),m=()=>{let y;return u||(y=u=e().catch(b=>{if(b=b instanceof Error?b:new Error(String(b)),c)return new Promise((P,O)=>{c(b,()=>P(p()),()=>O(b),h+1)});throw b}).then(b=>y!==u&&u?u:(b&&(b.__esModule||b[Symbol.toStringTag]==="Module")&&(b=b.default),f=b,b)))};return yn({name:"AsyncComponentWrapper",__asyncLoader:m,__asyncHydrate(y,b,P){let O=!1;(b.bu||(b.bu=[])).push(()=>O=!0);const C=()=>{O||P()},v=i?()=>{const I=i(C,D=>A1(y,D));I&&(b.bum||(b.bum=[])).push(I)}:C;f?v():m().then(()=>!b.isUnmounted&&v())},get __asyncResolved(){return f},setup(){const y=Tt;if(Ad(y),f)return()=>Gu(f,y);const b=v=>{u=null,Zi(v,y,13,!r)};if(a&&y.suspense||Vi)return m().then(v=>()=>Gu(v,y)).catch(v=>(b(v),()=>r?ve(r,{error:v}):null));const P=nt(!1),O=nt(),C=nt(!!s);return s&&setTimeout(()=>{C.value=!1},s),o!=null&&setTimeout(()=>{if(!P.value&&!O.value){const v=new Error(`Async component timed out after ${o}ms.`);b(v),O.value=v}},o),m().then(()=>{P.value=!0,y.parent&&Na(y.parent.vnode)&&y.parent.update()}).catch(v=>{b(v),O.value=v}),()=>{if(P.value&&f)return Gu(f,y);if(O.value&&r)return ve(r,{error:O.value});if(n&&!C.value)return ve(n)}}})}function Gu(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=ve(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const Na=t=>t.type.__isKeepAlive,S1={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Gs(),r=n.ctx;if(!r.renderer)return()=>{const C=e.default&&e.default();return C&&C.length===1?C[0]:C};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:u,um:f,o:{createElement:h}}}=r,p=h("div");r.activate=(C,v,I,D,F)=>{const S=C.component;u(C,v,I,0,a),c(S.vnode,C,v,I,S,a,D,C.slotScopeIds,F),Et(()=>{S.isDeactivated=!1,S.a&&bi(S.a);const E=C.props&&C.props.onVnodeMounted;E&&Kt(E,S.parent,C)},a)},r.deactivate=C=>{const v=C.component;lc(v.m),lc(v.a),u(C,p,null,1,a),Et(()=>{v.da&&bi(v.da);const I=C.props&&C.props.onVnodeUnmounted;I&&Kt(I,v.parent,C),v.isDeactivated=!0},a)};function m(C){Ku(C),f(C,n,a,!0)}function y(C){s.forEach((v,I)=>{const D=Xf(v.type);D&&!C(D)&&b(I)})}function b(C){const v=s.get(C);v&&(!o||!wn(v,o))?m(v):o&&Ku(o),s.delete(C),i.delete(C)}$n(()=>[t.include,t.exclude],([C,v])=>{C&&y(I=>Co(C,I)),v&&y(I=>!Co(v,I))},{flush:"post",deep:!0});let P=null;const O=()=>{P!=null&&(cc(n.subTree.type)?Et(()=>{s.set(P,vl(n.subTree))},n.subTree.suspense):s.set(P,vl(n.subTree)))};return Li(O),IE(O),eo(()=>{s.forEach(C=>{const{subTree:v,suspense:I}=n,D=vl(v);if(C.type===D.type&&C.key===D.key){Ku(D);const F=D.component.da;F&&Et(F,I);return}m(C)})}),()=>{if(P=null,!e.default)return o=null;const C=e.default(),v=C[0];if(C.length>1)return o=null,C;if(!Ms(v)||!(v.shapeFlag&4)&&!(v.shapeFlag&128))return o=null,v;let I=vl(v);if(I.type===ct)return o=null,I;const D=I.type,F=Xf(Yr(I)?I.type.__asyncResolved||{}:D),{include:S,exclude:E,max:_}=t;if(S&&(!F||!Co(S,F))||E&&F&&Co(E,F))return I.shapeFlag&=-257,o=I,v;const T=I.key==null?D:I.key,N=s.get(T);return I.el&&(I=pn(I),v.shapeFlag&128&&(v.ssContent=I)),P=T,N?(I.el=N.el,I.component=N.component,I.transition&&Di(I,I.transition),I.shapeFlag|=512,i.delete(T),i.add(T)):(i.add(T),_&&i.size>parseInt(_,10)&&b(i.values().next().value)),I.shapeFlag|=256,o=I,cc(v.type)?v:I}}},R1=S1;function Co(t,e){return ce(t)?t.some(n=>Co(n,e)):Qe(t)?t.split(",").includes(e):RI(t)?(t.lastIndex=0,t.test(e)):!1}function bE(t,e){AE(t,"a",e)}function TE(t,e){AE(t,"da",e)}function AE(t,e,n=Tt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Bc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Na(s.parent.vnode)&&C1(r,e,n,s),s=s.parent}}function C1(t,e,n,r){const s=Bc(e,t,r,!0);SE(()=>{cd(r[e],s)},n)}function Ku(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function vl(t){return t.shapeFlag&128?t.ssContent:t}function Bc(t,e,n=Tt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{pr();const a=Da(n),c=Rn(e,n,t,o);return a(),mr(),c});return r?s.unshift(i):s.push(i),i}}const Ar=t=>(e,n=Tt)=>{(!Vi||t==="sp")&&Bc(t,(...r)=>e(...r),n)},P1=Ar("bm"),Li=Ar("m"),k1=Ar("bu"),IE=Ar("u"),eo=Ar("bum"),SE=Ar("um"),O1=Ar("sp"),N1=Ar("rtg"),x1=Ar("rtc");function RE(t,e=Tt){Bc("ec",t,e)}const CE="components";function aa(t,e){return kE(CE,t,!0,e)||t}const PE=Symbol.for("v-ndc");function D1(t){return Qe(t)?kE(CE,t,!1)||t:t||PE}function kE(t,e,n=!0,r=!1){const s=It||Tt;if(s){const i=s.type;{const a=Xf(i,!1);if(a&&(a===e||a===mn(e)||a===Vc(mn(e))))return i}const o=Xm(s[t]||i[t],e)||Xm(s.appContext[t],e);return!o&&r?i:o}}function Xm(t,e){return t&&(t[e]||t[mn(e)]||t[Vc(mn(e))])}function x9(t,e,n,r){let s;const i=n,o=ce(t);if(o||Qe(t)){const a=o&&Un(t);let c=!1,u=!1;a&&(c=!dn(t),u=gr(t),t=jc(t)),s=new Array(t.length);for(let f=0,h=t.length;f<h;f++)s[f]=e(c?u?nc(bt(t[f])):bt(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(Ue(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const f=a[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}function D9(t,e,n={},r,s){if(It.ce||It.parent&&Yr(It.parent)&&It.parent.ce)return zt(),ar(Mt,null,[ve("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),zt();const o=i&&OE(i(n)),a=n.key||o&&o.key,c=ar(Mt,{key:(a&&!Sn(a)?a:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),c}function OE(t){return t.some(e=>Ms(e)?!(e.type===ct||e.type===Mt&&!OE(e.children)):!0)?t:null}const zf=t=>t?tw(t)?zc(t):zf(t.parent):null,$o=gt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>zf(t.parent),$root:t=>zf(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>xE(t),$forceUpdate:t=>t.f||(t.f=()=>{Td(t.update)}),$nextTick:t=>t.n||(t.n=Kn.bind(t.proxy)),$watch:t=>tS.bind(t)}),Yu=(t,e)=>t!==je&&!t.__isScriptSetup&&Le(t,e),L1={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Yu(r,e))return o[e]=1,r[e];if(s!==je&&Le(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Le(u,e))return o[e]=3,i[e];if(n!==je&&Le(n,e))return o[e]=4,n[e];Wf&&(o[e]=0)}}const f=$o[e];let h,p;if(f)return e==="$attrs"&&Lt(t.attrs,"get",""),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==je&&Le(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Le(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Yu(s,e)?(s[e]=n,!0):r!==je&&Le(r,e)?(r[e]=n,!0):Le(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==je&&Le(t,o)||Yu(e,o)||(a=i[0])&&Le(a,o)||Le(r,o)||Le($o,o)||Le(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Zm(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Wf=!0;function M1(t){const e=xE(t),n=t.proxy,r=t.ctx;Wf=!1,e.beforeCreate&&eg(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:f,beforeMount:h,mounted:p,beforeUpdate:m,updated:y,activated:b,deactivated:P,beforeDestroy:O,beforeUnmount:C,destroyed:v,unmounted:I,render:D,renderTracked:F,renderTriggered:S,errorCaptured:E,serverPrefetch:_,expose:T,inheritAttrs:N,components:k,directives:A,filters:ge}=e;if(u&&V1(u,r,null),o)for(const ie in o){const re=o[ie];pe(re)&&(r[ie]=re.bind(n))}if(s){const ie=s.call(n,n);Ue(ie)&&(t.data=Tr(ie))}if(Wf=!0,i)for(const ie in i){const re=i[ie],Be=pe(re)?re.bind(n,n):pe(re.get)?re.get.bind(n,n):Fn,_n=!pe(re)&&pe(re.set)?re.set.bind(n):Fn,ln=Se({get:Be,set:_n});Object.defineProperty(r,ie,{enumerable:!0,configurable:!0,get:()=>ln.value,set:Xe=>ln.value=Xe})}if(a)for(const ie in a)NE(a[ie],r,n,ie);if(c){const ie=pe(c)?c.call(n):c;Reflect.ownKeys(ie).forEach(re=>{Qr(re,ie[re])})}f&&eg(f,t,"c");function ee(ie,re){ce(re)?re.forEach(Be=>ie(Be.bind(n))):re&&ie(re.bind(n))}if(ee(P1,h),ee(Li,p),ee(k1,m),ee(IE,y),ee(bE,b),ee(TE,P),ee(RE,E),ee(x1,F),ee(N1,S),ee(eo,C),ee(SE,I),ee(O1,_),ce(T))if(T.length){const ie=t.exposed||(t.exposed={});T.forEach(re=>{Object.defineProperty(ie,re,{get:()=>n[re],set:Be=>n[re]=Be,enumerable:!0})})}else t.exposed||(t.exposed={});D&&t.render===Fn&&(t.render=D),N!=null&&(t.inheritAttrs=N),k&&(t.components=k),A&&(t.directives=A),_&&Ad(t)}function V1(t,e,n=Fn){ce(t)&&(t=Gf(t));for(const r in t){const s=t[r];let i;Ue(s)?"default"in s?i=mt(s.from||r,s.default,!0):i=mt(s.from||r):i=mt(s),Ye(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function eg(t,e,n){Rn(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function NE(t,e,n,r){let s=r.includes(".")?GE(n,r):()=>n[r];if(Qe(t)){const i=e[t];pe(i)&&$n(s,i)}else if(pe(t))$n(s,t.bind(n));else if(Ue(t))if(ce(t))t.forEach(i=>NE(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&$n(s,i,t)}}function xE(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>ac(c,u,o,!0)),ac(c,e,o)),Ue(e)&&i.set(e,c),c}function ac(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ac(t,i,n,!0),s&&s.forEach(o=>ac(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=F1[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const F1={data:tg,props:ng,emits:ng,methods:Po,computed:Po,beforeCreate:Ht,created:Ht,beforeMount:Ht,mounted:Ht,beforeUpdate:Ht,updated:Ht,beforeDestroy:Ht,beforeUnmount:Ht,destroyed:Ht,unmounted:Ht,activated:Ht,deactivated:Ht,errorCaptured:Ht,serverPrefetch:Ht,components:Po,directives:Po,watch:$1,provide:tg,inject:U1};function tg(t,e){return e?t?function(){return gt(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function U1(t,e){return Po(Gf(t),Gf(e))}function Gf(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ht(t,e){return t?[...new Set([].concat(t,e))]:e}function Po(t,e){return t?gt(Object.create(null),t,e):e}function ng(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:gt(Object.create(null),Zm(t),Zm(e??{})):e}function $1(t,e){if(!t)return e;if(!e)return t;const n=gt(Object.create(null),t);for(const r in e)n[r]=Ht(t[r],e[r]);return n}function DE(){return{app:null,config:{isNativeTag:II,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let j1=0;function B1(t,e){return function(r,s=null){pe(r)||(r=gt({},r)),s!=null&&!Ue(s)&&(s=null);const i=DE(),o=new WeakSet,a=[];let c=!1;const u=i.app={_uid:j1++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:SS,get config(){return i.config},set config(f){},use(f,...h){return o.has(f)||(f&&pe(f.install)?(o.add(f),f.install(u,...h)):pe(f)&&(o.add(f),f(u,...h))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,h){return h?(i.components[f]=h,u):i.components[f]},directive(f,h){return h?(i.directives[f]=h,u):i.directives[f]},mount(f,h,p){if(!c){const m=u._ceVNode||ve(r,s);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),h&&e?e(m,f):t(m,f,p),c=!0,u._container=f,f.__vue_app__=u,zc(m.component)}},onUnmount(f){a.push(f)},unmount(){c&&(Rn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,h){return i.provides[f]=h,u},runWithContext(f){const h=Os;Os=u;try{return f()}finally{Os=h}}};return u}}let Os=null;function Qr(t,e){if(Tt){let n=Tt.provides;const r=Tt.parent&&Tt.parent.provides;r===n&&(n=Tt.provides=Object.create(r)),n[t]=e}}function mt(t,e,n=!1){const r=Gs();if(r||Os){let s=Os?Os._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}function xa(){return!!(Gs()||Os)}const LE={},ME=()=>Object.create(LE),VE=t=>Object.getPrototypeOf(t)===LE;function H1(t,e,n,r=!1){const s={},i=ME();t.propsDefaults=Object.create(null),FE(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ln(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function q1(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Pe(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(Hc(t.emitsOptions,p))continue;const m=e[p];if(c)if(Le(i,p))m!==i[p]&&(i[p]=m,u=!0);else{const y=mn(p);s[y]=Kf(c,a,y,m,t,!1)}else m!==i[p]&&(i[p]=m,u=!0)}}}else{FE(t,e,s,i)&&(u=!0);let f;for(const h in a)(!e||!Le(e,h)&&((f=Ws(h))===h||!Le(e,f)))&&(c?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=Kf(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!Le(e,h))&&(delete i[h],u=!0)}u&&ir(t.attrs,"set","")}function FE(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(wi(c))continue;const u=e[c];let f;s&&Le(s,f=mn(c))?!i||!i.includes(f)?n[f]=u:(a||(a={}))[f]=u:Hc(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Pe(n),u=a||je;for(let f=0;f<i.length;f++){const h=i[f];n[h]=Kf(s,c,h,u[h],t,!Le(u,h))}}return o}function Kf(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Le(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&pe(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Da(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ws(n))&&(r=!0))}return r}const z1=new WeakMap;function UE(t,e,n=!1){const r=n?z1:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!pe(t)){const f=h=>{c=!0;const[p,m]=UE(h,e,!0);gt(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Ue(t)&&r.set(t,vi),vi;if(ce(i))for(let f=0;f<i.length;f++){const h=mn(i[f]);rg(h)&&(o[h]=je)}else if(i)for(const f in i){const h=mn(f);if(rg(h)){const p=i[f],m=o[h]=ce(p)||pe(p)?{type:p}:gt({},p),y=m.type;let b=!1,P=!0;if(ce(y))for(let O=0;O<y.length;++O){const C=y[O],v=pe(C)&&C.name;if(v==="Boolean"){b=!0;break}else v==="String"&&(P=!1)}else b=pe(y)&&y.name==="Boolean";m[0]=b,m[1]=P,(b||Le(m,"default"))&&a.push(h)}}const u=[o,a];return Ue(t)&&r.set(t,u),u}function rg(t){return t[0]!=="$"&&!wi(t)}const Id=t=>t==="_"||t==="__"||t==="_ctx"||t==="$stable",Sd=t=>ce(t)?t.map(tn):[tn(t)],W1=(t,e,n)=>{if(e._n)return e;const r=en((...s)=>Sd(e(...s)),n);return r._c=!1,r},$E=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Id(s))continue;const i=t[s];if(pe(i))e[s]=W1(s,i,r);else if(i!=null){const o=Sd(i);e[s]=()=>o}}},jE=(t,e)=>{const n=Sd(e);t.slots.default=()=>n},BE=(t,e,n)=>{for(const r in e)(n||!Id(r))&&(t[r]=e[r])},G1=(t,e,n)=>{const r=t.slots=ME();if(t.vnode.shapeFlag&32){const s=e.__;s&&Uf(r,"__",s,!0);const i=e._;i?(BE(r,e,n),n&&Uf(r,"_",i,!0)):$E(e,r)}else e&&jE(t,e)},K1=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=je;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:BE(s,e,n):(i=!e.$stable,$E(e,s)),o=e}else e&&(jE(t,e),o={default:1});if(i)for(const a in s)!Id(a)&&o[a]==null&&delete s[a]},Et=QE;function Y1(t){return HE(t)}function Q1(t){return HE(t,b1)}function HE(t,e){const n=Fc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:f,parentNode:h,nextSibling:p,setScopeId:m=Fn,insertStaticContent:y}=t,b=(R,x,M,H=null,$=null,q=null,Q=void 0,K=null,G=!!x.dynamicChildren)=>{if(R===x)return;R&&!wn(R,x)&&(H=j(R),Xe(R,$,q,!0),R=null),x.patchFlag===-2&&(G=!1,x.dynamicChildren=null);const{type:z,ref:le,shapeFlag:J}=x;switch(z){case Ns:P(R,x,M,H);break;case ct:O(R,x,M,H);break;case jo:R==null&&C(x,M,H,Q);break;case Mt:k(R,x,M,H,$,q,Q,K,G);break;default:J&1?D(R,x,M,H,$,q,Q,K,G):J&6?A(R,x,M,H,$,q,Q,K,G):(J&64||J&128)&&z.process(R,x,M,H,$,q,Q,K,G,se)}le!=null&&$?Ai(le,R&&R.ref,q,x||R,!x):le==null&&R&&R.ref!=null&&Ai(R.ref,null,q,R,!0)},P=(R,x,M,H)=>{if(R==null)r(x.el=a(x.children),M,H);else{const $=x.el=R.el;x.children!==R.children&&u($,x.children)}},O=(R,x,M,H)=>{R==null?r(x.el=c(x.children||""),M,H):x.el=R.el},C=(R,x,M,H)=>{[R.el,R.anchor]=y(R.children,x,M,H,R.el,R.anchor)},v=({el:R,anchor:x},M,H)=>{let $;for(;R&&R!==x;)$=p(R),r(R,M,H),R=$;r(x,M,H)},I=({el:R,anchor:x})=>{let M;for(;R&&R!==x;)M=p(R),s(R),R=M;s(x)},D=(R,x,M,H,$,q,Q,K,G)=>{x.type==="svg"?Q="svg":x.type==="math"&&(Q="mathml"),R==null?F(x,M,H,$,q,Q,K,G):_(R,x,$,q,Q,K,G)},F=(R,x,M,H,$,q,Q,K)=>{let G,z;const{props:le,shapeFlag:J,transition:ae,dirs:oe}=R;if(G=R.el=o(R.type,q,le&&le.is,le),J&8?f(G,R.children):J&16&&E(R.children,G,null,H,$,Qu(R,q),Q,K),oe&&xn(R,null,H,"created"),S(G,R,R.scopeId,Q,H),le){for(const Ne in le)Ne!=="value"&&!wi(Ne)&&i(G,Ne,null,le[Ne],q,H);"value"in le&&i(G,"value",null,le.value,q),(z=le.onVnodeBeforeMount)&&Kt(z,H,R)}oe&&xn(R,null,H,"beforeMount");const he=qE($,ae);he&&ae.beforeEnter(G),r(G,x,M),((z=le&&le.onVnodeMounted)||he||oe)&&Et(()=>{z&&Kt(z,H,R),he&&ae.enter(G),oe&&xn(R,null,H,"mounted")},$)},S=(R,x,M,H,$)=>{if(M&&m(R,M),H)for(let q=0;q<H.length;q++)m(R,H[q]);if($){let q=$.subTree;if(x===q||cc(q.type)&&(q.ssContent===x||q.ssFallback===x)){const Q=$.vnode;S(R,Q,Q.scopeId,Q.slotScopeIds,$.parent)}}},E=(R,x,M,H,$,q,Q,K,G=0)=>{for(let z=G;z<R.length;z++){const le=R[z]=K?Vr(R[z]):tn(R[z]);b(null,le,x,M,H,$,q,Q,K)}},_=(R,x,M,H,$,q,Q)=>{const K=x.el=R.el;let{patchFlag:G,dynamicChildren:z,dirs:le}=x;G|=R.patchFlag&16;const J=R.props||je,ae=x.props||je;let oe;if(M&&Es(M,!1),(oe=ae.onVnodeBeforeUpdate)&&Kt(oe,M,x,R),le&&xn(x,R,M,"beforeUpdate"),M&&Es(M,!0),(J.innerHTML&&ae.innerHTML==null||J.textContent&&ae.textContent==null)&&f(K,""),z?T(R.dynamicChildren,z,K,M,H,Qu(x,$),q):Q||re(R,x,K,null,M,H,Qu(x,$),q,!1),G>0){if(G&16)N(K,J,ae,M,$);else if(G&2&&J.class!==ae.class&&i(K,"class",null,ae.class,$),G&4&&i(K,"style",J.style,ae.style,$),G&8){const he=x.dynamicProps;for(let Ne=0;Ne<he.length;Ne++){const ke=he[Ne],yt=J[ke],dt=ae[ke];(dt!==yt||ke==="value")&&i(K,ke,yt,dt,$,M)}}G&1&&R.children!==x.children&&f(K,x.children)}else!Q&&z==null&&N(K,J,ae,M,$);((oe=ae.onVnodeUpdated)||le)&&Et(()=>{oe&&Kt(oe,M,x,R),le&&xn(x,R,M,"updated")},H)},T=(R,x,M,H,$,q,Q)=>{for(let K=0;K<x.length;K++){const G=R[K],z=x[K],le=G.el&&(G.type===Mt||!wn(G,z)||G.shapeFlag&198)?h(G.el):M;b(G,z,le,null,H,$,q,Q,!0)}},N=(R,x,M,H,$)=>{if(x!==M){if(x!==je)for(const q in x)!wi(q)&&!(q in M)&&i(R,q,x[q],null,$,H);for(const q in M){if(wi(q))continue;const Q=M[q],K=x[q];Q!==K&&q!=="value"&&i(R,q,K,Q,$,H)}"value"in M&&i(R,"value",x.value,M.value,$)}},k=(R,x,M,H,$,q,Q,K,G)=>{const z=x.el=R?R.el:a(""),le=x.anchor=R?R.anchor:a("");let{patchFlag:J,dynamicChildren:ae,slotScopeIds:oe}=x;oe&&(K=K?K.concat(oe):oe),R==null?(r(z,M,H),r(le,M,H),E(x.children||[],M,le,$,q,Q,K,G)):J>0&&J&64&&ae&&R.dynamicChildren?(T(R.dynamicChildren,ae,M,$,q,Q,K),(x.key!=null||$&&x===$.subTree)&&zE(R,x,!0)):re(R,x,M,le,$,q,Q,K,G)},A=(R,x,M,H,$,q,Q,K,G)=>{x.slotScopeIds=K,R==null?x.shapeFlag&512?$.ctx.activate(x,M,H,Q,G):ge(x,M,H,$,q,Q,G):Ee(R,x,G)},ge=(R,x,M,H,$,q,Q)=>{const K=R.component=ES(R,H,$);if(Na(R)&&(K.ctx.renderer=se),wS(K,!1,Q),K.asyncDep){if($&&$.registerDep(K,ee,Q),!R.el){const G=K.subTree=ve(ct);O(null,G,x,M),R.placeholder=G.el}}else ee(K,R,x,M,$,q,Q)},Ee=(R,x,M)=>{const H=x.component=R.component;if(aS(R,x,M))if(H.asyncDep&&!H.asyncResolved){ie(H,x,M);return}else H.next=x,H.update();else x.el=R.el,H.vnode=x},ee=(R,x,M,H,$,q,Q)=>{const K=()=>{if(R.isMounted){let{next:J,bu:ae,u:oe,parent:he,vnode:Ne}=R;{const Ct=WE(R);if(Ct){J&&(J.el=Ne.el,ie(R,J,Q)),Ct.asyncDep.then(()=>{R.isUnmounted||K()});return}}let ke=J,yt;Es(R,!1),J?(J.el=Ne.el,ie(R,J,Q)):J=Ne,ae&&bi(ae),(yt=J.props&&J.props.onVnodeBeforeUpdate)&&Kt(yt,he,J,Ne),Es(R,!0);const dt=Ju(R),_t=R.subTree;R.subTree=dt,b(_t,dt,h(_t.el),j(_t),R,$,q),J.el=dt.el,ke===null&&qc(R,dt.el),oe&&Et(oe,$),(yt=J.props&&J.props.onVnodeUpdated)&&Et(()=>Kt(yt,he,J,Ne),$)}else{let J;const{el:ae,props:oe}=x,{bm:he,m:Ne,parent:ke,root:yt,type:dt}=R,_t=Yr(x);if(Es(R,!1),he&&bi(he),!_t&&(J=oe&&oe.onVnodeBeforeMount)&&Kt(J,ke,x),Es(R,!0),ae&&Ve){const Ct=()=>{R.subTree=Ju(R),Ve(ae,R.subTree,R,$,null)};_t&&dt.__asyncHydrate?dt.__asyncHydrate(ae,R,Ct):Ct()}else{yt.ce&&yt.ce._def.shadowRoot!==!1&&yt.ce._injectChildStyle(dt);const Ct=R.subTree=Ju(R);b(null,Ct,M,H,R,$,q),x.el=Ct.el}if(Ne&&Et(Ne,$),!_t&&(J=oe&&oe.onVnodeMounted)){const Ct=x;Et(()=>Kt(J,ke,Ct),$)}(x.shapeFlag&256||ke&&Yr(ke.vnode)&&ke.vnode.shapeFlag&256)&&R.a&&Et(R.a,$),R.isMounted=!0,x=M=H=null}};R.scope.on();const G=R.effect=new Gv(K);R.scope.off();const z=R.update=G.run.bind(G),le=R.job=G.runIfDirty.bind(G);le.i=R,le.id=R.uid,G.scheduler=()=>Td(le),Es(R,!0),z()},ie=(R,x,M)=>{x.component=R;const H=R.vnode.props;R.vnode=x,R.next=null,q1(R,x.props,H,M),K1(R,x.children,M),pr(),Km(R),mr()},re=(R,x,M,H,$,q,Q,K,G=!1)=>{const z=R&&R.children,le=R?R.shapeFlag:0,J=x.children,{patchFlag:ae,shapeFlag:oe}=x;if(ae>0){if(ae&128){_n(z,J,M,H,$,q,Q,K,G);return}else if(ae&256){Be(z,J,M,H,$,q,Q,K,G);return}}oe&8?(le&16&&Gt(z,$,q),J!==z&&f(M,J)):le&16?oe&16?_n(z,J,M,H,$,q,Q,K,G):Gt(z,$,q,!0):(le&8&&f(M,""),oe&16&&E(J,M,H,$,q,Q,K,G))},Be=(R,x,M,H,$,q,Q,K,G)=>{R=R||vi,x=x||vi;const z=R.length,le=x.length,J=Math.min(z,le);let ae;for(ae=0;ae<J;ae++){const oe=x[ae]=G?Vr(x[ae]):tn(x[ae]);b(R[ae],oe,M,null,$,q,Q,K,G)}z>le?Gt(R,$,q,!0,!1,J):E(x,M,H,$,q,Q,K,G,J)},_n=(R,x,M,H,$,q,Q,K,G)=>{let z=0;const le=x.length;let J=R.length-1,ae=le-1;for(;z<=J&&z<=ae;){const oe=R[z],he=x[z]=G?Vr(x[z]):tn(x[z]);if(wn(oe,he))b(oe,he,M,null,$,q,Q,K,G);else break;z++}for(;z<=J&&z<=ae;){const oe=R[J],he=x[ae]=G?Vr(x[ae]):tn(x[ae]);if(wn(oe,he))b(oe,he,M,null,$,q,Q,K,G);else break;J--,ae--}if(z>J){if(z<=ae){const oe=ae+1,he=oe<le?x[oe].el:H;for(;z<=ae;)b(null,x[z]=G?Vr(x[z]):tn(x[z]),M,he,$,q,Q,K,G),z++}}else if(z>ae)for(;z<=J;)Xe(R[z],$,q,!0),z++;else{const oe=z,he=z,Ne=new Map;for(z=he;z<=ae;z++){const $t=x[z]=G?Vr(x[z]):tn(x[z]);$t.key!=null&&Ne.set($t.key,z)}let ke,yt=0;const dt=ae-he+1;let _t=!1,Ct=0;const Rr=new Array(dt);for(z=0;z<dt;z++)Rr[z]=0;for(z=oe;z<=J;z++){const $t=R[z];if(yt>=dt){Xe($t,$,q,!0);continue}let cn;if($t.key!=null)cn=Ne.get($t.key);else for(ke=he;ke<=ae;ke++)if(Rr[ke-he]===0&&wn($t,x[ke])){cn=ke;break}cn===void 0?Xe($t,$,q,!0):(Rr[cn-he]=z+1,cn>=Ct?Ct=cn:_t=!0,b($t,x[cn],M,null,$,q,Q,K,G),yt++)}const ti=_t?J1(Rr):vi;for(ke=ti.length-1,z=dt-1;z>=0;z--){const $t=he+z,cn=x[$t],ni=x[$t+1],co=$t+1<le?ni.el||ni.placeholder:H;Rr[z]===0?b(null,cn,M,co,$,q,Q,K,G):_t&&(ke<0||z!==ti[ke]?ln(cn,M,co,2):ke--)}}},ln=(R,x,M,H,$=null)=>{const{el:q,type:Q,transition:K,children:G,shapeFlag:z}=R;if(z&6){ln(R.component.subTree,x,M,H);return}if(z&128){R.suspense.move(x,M,H);return}if(z&64){Q.move(R,x,M,se);return}if(Q===Mt){r(q,x,M);for(let J=0;J<G.length;J++)ln(G[J],x,M,H);r(R.anchor,x,M);return}if(Q===jo){v(R,x,M);return}if(H!==2&&z&1&&K)if(H===0)K.beforeEnter(q),r(q,x,M),Et(()=>K.enter(q),$);else{const{leave:J,delayLeave:ae,afterLeave:oe}=K,he=()=>{R.ctx.isUnmounted?s(q):r(q,x,M)},Ne=()=>{J(q,()=>{he(),oe&&oe()})};ae?ae(q,he,Ne):Ne()}else r(q,x,M)},Xe=(R,x,M,H=!1,$=!1)=>{const{type:q,props:Q,ref:K,children:G,dynamicChildren:z,shapeFlag:le,patchFlag:J,dirs:ae,cacheIndex:oe}=R;if(J===-2&&($=!1),K!=null&&(pr(),Ai(K,null,M,R,!0),mr()),oe!=null&&(x.renderCache[oe]=void 0),le&256){x.ctx.deactivate(R);return}const he=le&1&&ae,Ne=!Yr(R);let ke;if(Ne&&(ke=Q&&Q.onVnodeBeforeUnmount)&&Kt(ke,x,R),le&6)On(R.component,M,H);else{if(le&128){R.suspense.unmount(M,H);return}he&&xn(R,null,x,"beforeUnmount"),le&64?R.type.remove(R,x,M,se,H):z&&!z.hasOnce&&(q!==Mt||J>0&&J&64)?Gt(z,x,M,!1,!0):(q===Mt&&J&384||!$&&le&16)&&Gt(G,x,M),H&&Ze(R)}(Ne&&(ke=Q&&Q.onVnodeUnmounted)||he)&&Et(()=>{ke&&Kt(ke,x,R),he&&xn(R,null,x,"unmounted")},M)},Ze=R=>{const{type:x,el:M,anchor:H,transition:$}=R;if(x===Mt){Sr(M,H);return}if(x===jo){I(R);return}const q=()=>{s(M),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(R.shapeFlag&1&&$&&!$.persisted){const{leave:Q,delayLeave:K}=$,G=()=>Q(M,q);K?K(R.el,q,G):G()}else q()},Sr=(R,x)=>{let M;for(;R!==x;)M=p(R),s(R),R=M;s(x)},On=(R,x,M)=>{const{bum:H,scope:$,job:q,subTree:Q,um:K,m:G,a:z,parent:le,slots:{__:J}}=R;lc(G),lc(z),H&&bi(H),le&&ce(J)&&J.forEach(ae=>{le.renderCache[ae]=void 0}),$.stop(),q&&(q.flags|=8,Xe(Q,R,x,M)),K&&Et(K,x),Et(()=>{R.isUnmounted=!0},x),x&&x.pendingBranch&&!x.isUnmounted&&R.asyncDep&&!R.asyncResolved&&R.suspenseId===x.pendingId&&(x.deps--,x.deps===0&&x.resolve())},Gt=(R,x,M,H=!1,$=!1,q=0)=>{for(let Q=q;Q<R.length;Q++)Xe(R[Q],x,M,H,$)},j=R=>{if(R.shapeFlag&6)return j(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const x=p(R.anchor||R.el),M=x&&x[g1];return M?p(M):x};let te=!1;const Z=(R,x,M)=>{R==null?x._vnode&&Xe(x._vnode,null,null,!0):b(x._vnode||null,R,x,null,null,null,M),x._vnode=R,te||(te=!0,Km(),ic(),te=!1)},se={p:b,um:Xe,m:ln,r:Ze,mt:ge,mc:E,pc:re,pbc:T,n:j,o:t};let Ae,Ve;return e&&([Ae,Ve]=e(se)),{render:Z,hydrate:Ae,createApp:B1(Z,Ae)}}function Qu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Es({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function qE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function zE(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Vr(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&zE(o,a)),a.type===Ns&&(a.el=o.el),a.type===ct&&!a.el&&(a.el=o.el)}}function J1(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function WE(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:WE(e)}function lc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const X1=Symbol.for("v-scx"),Z1=()=>mt(X1);function eS(t,e){return Rd(t,null,e)}function $n(t,e,n){return Rd(t,e,n)}function Rd(t,e,n=je){const{immediate:r,deep:s,flush:i,once:o}=n,a=gt({},n),c=e&&r||!e&&i!=="post";let u;if(Vi){if(i==="sync"){const m=Z1();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=Fn,m.resume=Fn,m.pause=Fn,m}}const f=Tt;a.call=(m,y,b)=>Rn(m,f,y,b);let h=!1;i==="post"?a.scheduler=m=>{Et(m,f&&f.suspense)}:i!=="sync"&&(h=!0,a.scheduler=(m,y)=>{y?m():Td(m)}),a.augmentJob=m=>{e&&(m.flags|=4),h&&(m.flags|=2,f&&(m.id=f.uid,m.i=f))};const p=d1(t,e,a);return Vi&&(u?u.push(p):c&&p()),p}function tS(t,e,n){const r=this.proxy,s=Qe(t)?t.includes(".")?GE(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=Da(this),a=Rd(s,i.bind(r),n);return o(),a}function GE(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const nS=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${mn(e)}Modifiers`]||t[`${Ws(e)}Modifiers`];function rS(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||je;let s=n;const i=e.startsWith("update:"),o=i&&nS(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Qe(f)?f.trim():f)),o.number&&(s=n.map(ec)));let a,c=r[a=ju(e)]||r[a=ju(mn(e))];!c&&i&&(c=r[a=ju(Ws(e))]),c&&Rn(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Rn(u,t,6,s)}}function KE(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!pe(t)){const c=u=>{const f=KE(u,e,!0);f&&(a=!0,gt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ue(t)&&r.set(t,null),null):(ce(i)?i.forEach(c=>o[c]=null):gt(o,i),Ue(t)&&r.set(t,o),o)}function Hc(t,e){return!t||!Ca(e)?!1:(e=e.slice(2).replace(/Once$/,""),Le(t,e[0].toLowerCase()+e.slice(1))||Le(t,Ws(e))||Le(t,e))}function Ju(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:f,props:h,data:p,setupState:m,ctx:y,inheritAttrs:b}=t,P=oc(t);let O,C;try{if(n.shapeFlag&4){const I=s||r,D=I;O=tn(u.call(D,I,f,h,m,p,y)),C=a}else{const I=e;O=tn(I.length>1?I(h,{attrs:a,slots:o,emit:c}):I(h,null)),C=e.props?a:iS(a)}}catch(I){Bo.length=0,Zi(I,t,1),O=ve(ct)}let v=O;if(C&&b!==!1){const I=Object.keys(C),{shapeFlag:D}=v;I.length&&D&7&&(i&&I.some(ld)&&(C=oS(C,i)),v=pn(v,C,!1,!0))}return n.dirs&&(v=pn(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&Di(v,n.transition),O=v,oc(P),O}function sS(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Ms(s)){if(s.type!==ct||s.children==="v-if"){if(n)return;n=s}}else return}return n}const iS=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ca(n))&&((e||(e={}))[n]=t[n]);return e},oS=(t,e)=>{const n={};for(const r in t)(!ld(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function aS(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?sg(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==r[p]&&!Hc(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?sg(r,o,u):!0:!!o;return!1}function sg(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Hc(n,i))return!0}return!1}function qc({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const cc=t=>t.__isSuspense;let Yf=0;const lS={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,c,u){if(t==null)cS(e,n,r,s,i,o,a,c,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}uS(t,e,n,r,s,o,a,c,u)}},hydrate:fS,normalize:hS},Cd=lS;function la(t,e){const n=t.props&&t.props[e];pe(n)&&n()}function cS(t,e,n,r,s,i,o,a,c){const{p:u,o:{createElement:f}}=c,h=f("div"),p=t.suspense=YE(t,s,r,e,h,n,i,o,a,c);u(null,p.pendingBranch=t.ssContent,h,null,r,p,i,o),p.deps>0?(la(t,"onPending"),la(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),Ii(p,t.ssFallback)):p.resolve(!1,!0)}function uS(t,e,n,r,s,i,o,a,{p:c,um:u,o:{createElement:f}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const p=e.ssContent,m=e.ssFallback,{activeBranch:y,pendingBranch:b,isInFallback:P,isHydrating:O}=h;if(b)h.pendingBranch=p,wn(p,b)?(c(b,p,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():P&&(O||(c(y,m,n,r,s,null,i,o,a),Ii(h,m)))):(h.pendingId=Yf++,O?(h.isHydrating=!1,h.activeBranch=b):u(b,s,h),h.deps=0,h.effects.length=0,h.hiddenContainer=f("div"),P?(c(null,p,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():(c(y,m,n,r,s,null,i,o,a),Ii(h,m))):y&&wn(p,y)?(c(y,p,n,r,s,h,i,o,a),h.resolve(!0)):(c(null,p,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0&&h.resolve()));else if(y&&wn(p,y))c(y,p,n,r,s,h,i,o,a),Ii(h,p);else if(la(e,"onPending"),h.pendingBranch=p,p.shapeFlag&512?h.pendingId=p.component.suspenseId:h.pendingId=Yf++,c(null,p,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:C,pendingId:v}=h;C>0?setTimeout(()=>{h.pendingId===v&&h.fallback(m)},C):C===0&&h.fallback(m)}}function YE(t,e,n,r,s,i,o,a,c,u,f=!1){const{p:h,m:p,um:m,n:y,o:{parentNode:b,remove:P}}=u;let O;const C=dS(t);C&&e&&e.pendingBranch&&(O=e.pendingId,e.deps++);const v=t.props?Bv(t.props.timeout):void 0,I=i,D={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:Yf++,timeout:typeof v=="number"?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!f,isHydrating:f,isUnmounted:!1,effects:[],resolve(F=!1,S=!1){const{vnode:E,activeBranch:_,pendingBranch:T,pendingId:N,effects:k,parentComponent:A,container:ge}=D;let Ee=!1;D.isHydrating?D.isHydrating=!1:F||(Ee=_&&T.transition&&T.transition.mode==="out-in",Ee&&(_.transition.afterLeave=()=>{N===D.pendingId&&(p(T,ge,i===I?y(_):i,0),Hf(k))}),_&&(b(_.el)===ge&&(i=y(_)),m(_,A,D,!0)),Ee||p(T,ge,i,0)),Ii(D,T),D.pendingBranch=null,D.isInFallback=!1;let ee=D.parent,ie=!1;for(;ee;){if(ee.pendingBranch){ee.effects.push(...k),ie=!0;break}ee=ee.parent}!ie&&!Ee&&Hf(k),D.effects=[],C&&e&&e.pendingBranch&&O===e.pendingId&&(e.deps--,e.deps===0&&!S&&e.resolve()),la(E,"onResolve")},fallback(F){if(!D.pendingBranch)return;const{vnode:S,activeBranch:E,parentComponent:_,container:T,namespace:N}=D;la(S,"onFallback");const k=y(E),A=()=>{D.isInFallback&&(h(null,F,T,k,_,null,N,a,c),Ii(D,F))},ge=F.transition&&F.transition.mode==="out-in";ge&&(E.transition.afterLeave=A),D.isInFallback=!0,m(E,_,null,!0),ge||A()},move(F,S,E){D.activeBranch&&p(D.activeBranch,F,S,E),D.container=F},next(){return D.activeBranch&&y(D.activeBranch)},registerDep(F,S,E){const _=!!D.pendingBranch;_&&D.deps++;const T=F.vnode.el;F.asyncDep.catch(N=>{Zi(N,F,0)}).then(N=>{if(F.isUnmounted||D.isUnmounted||D.pendingId!==F.suspenseId)return;F.asyncResolved=!0;const{vnode:k}=F;Jf(F,N),T&&(k.el=T);const A=!T&&F.subTree.el;S(F,k,b(T||F.subTree.el),T?null:y(F.subTree),D,o,E),A&&P(A),qc(F,k.el),_&&--D.deps===0&&D.resolve()})},unmount(F,S){D.isUnmounted=!0,D.activeBranch&&m(D.activeBranch,n,F,S),D.pendingBranch&&m(D.pendingBranch,n,F,S)}};return D}function fS(t,e,n,r,s,i,o,a,c){const u=e.suspense=YE(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),f=c(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),f}function hS(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=ig(r?n.default:n),t.ssFallback=r?ig(n.fallback):ve(ct)}function ig(t){let e;if(pe(t)){const n=Mi&&t._c;n&&(t._d=!1,zt()),t=t(),n&&(t._d=!0,e=Xt,JE())}return ce(t)&&(t=sS(t)),t=tn(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function QE(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):Hf(t)}function Ii(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,qc(r,s))}function dS(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const Mt=Symbol.for("v-fgt"),Ns=Symbol.for("v-txt"),ct=Symbol.for("v-cmt"),jo=Symbol.for("v-stc"),Bo=[];let Xt=null;function zt(t=!1){Bo.push(Xt=t?null:[])}function JE(){Bo.pop(),Xt=Bo[Bo.length-1]||null}let Mi=1;function og(t,e=!1){Mi+=t,t<0&&Xt&&e&&(Xt.hasOnce=!0)}function XE(t){return t.dynamicChildren=Mi>0?Xt||vi:null,JE(),Mi>0&&Xt&&Xt.push(t),t}function ca(t,e,n,r,s,i){return XE(Fe(t,e,n,r,s,i,!0))}function ar(t,e,n,r,s){return XE(ve(t,e,n,r,s,!0))}function Ms(t){return t?t.__v_isVNode===!0:!1}function wn(t,e){return t.type===e.type&&t.key===e.key}const ZE=({key:t})=>t??null,Vl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Qe(t)||Ye(t)||pe(t)?{i:It,r:t,k:e,f:!!n}:t:null);function Fe(t,e=null,n=null,r=0,s=null,i=t===Mt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ZE(e),ref:e&&Vl(e),scopeId:mE,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:It};return a?(Pd(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Qe(n)?8:16),Mi>0&&!o&&Xt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Xt.push(c),c}const ve=pS;function pS(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===PE)&&(t=ct),Ms(t)){const a=pn(t,e,!0);return n&&Pd(a,n),Mi>0&&!i&&Xt&&(a.shapeFlag&6?Xt[Xt.indexOf(t)]=a:Xt.push(a)),a.patchFlag=-2,a}if(IS(t)&&(t=t.__vccOpts),e){e=mS(e);let{class:a,style:c}=e;a&&!Qe(a)&&(e.class=Pa(a)),Ue(c)&&(Ed(c)&&!ce(c)&&(c=gt({},c)),e.style=Uc(c))}const o=Qe(t)?1:cc(t)?128:gE(t)?64:Ue(t)?4:pe(t)?2:0;return Fe(t,e,n,r,s,o,i,!0)}function mS(t){return t?Ed(t)||VE(t)?gt({},t):t:null}function pn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,u=e?ew(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&ZE(u),ref:e&&e.ref?n&&i?ce(i)?i.concat(Vl(e)):[i,Vl(e)]:Vl(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Mt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&pn(t.ssContent),ssFallback:t.ssFallback&&pn(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Di(f,c.clone(f)),f}function Qt(t=" ",e=0){return ve(Ns,null,t,e)}function gS(t,e){const n=ve(jo,null,t);return n.staticCount=e,n}function yS(t="",e=!1){return e?(zt(),ar(ct,null,t)):ve(ct,null,t)}function tn(t){return t==null||typeof t=="boolean"?ve(ct):ce(t)?ve(Mt,null,t.slice()):Ms(t)?Vr(t):ve(Ns,null,String(t))}function Vr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:pn(t)}function Pd(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Pd(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!VE(e)?e._ctx=It:s===3&&It&&(It.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:It},n=32):(e=String(e),r&64?(n=16,e=[Qt(e)]):n=8);t.children=e,t.shapeFlag|=n}function ew(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Pa([e.class,r.class]));else if(s==="style")e.style=Uc([e.style,r.style]);else if(Ca(s)){const i=e[s],o=r[s];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Kt(t,e,n,r=null){Rn(t,e,7,[n,r])}const _S=DE();let vS=0;function ES(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||_S,i={uid:vS++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Wv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:UE(r,s),emitsOptions:KE(r,s),emit:null,emitted:null,propsDefaults:je,inheritAttrs:r.inheritAttrs,ctx:je,data:je,props:je,attrs:je,slots:je,refs:je,setupState:je,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=rS.bind(null,i),t.ce&&t.ce(i),i}let Tt=null;const Gs=()=>Tt||It;let uc,Qf;{const t=Fc(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};uc=e("__VUE_INSTANCE_SETTERS__",n=>Tt=n),Qf=e("__VUE_SSR_SETTERS__",n=>Vi=n)}const Da=t=>{const e=Tt;return uc(t),t.scope.on(),()=>{t.scope.off(),uc(e)}},ag=()=>{Tt&&Tt.scope.off(),uc(null)};function tw(t){return t.vnode.shapeFlag&4}let Vi=!1;function wS(t,e=!1,n=!1){e&&Qf(e);const{props:r,children:s}=t.vnode,i=tw(t);H1(t,r,i,e),G1(t,s,n||e);const o=i?bS(t,e):void 0;return e&&Qf(!1),o}function bS(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,L1);const{setup:r}=n;if(r){pr();const s=t.setupContext=r.length>1?AS(t):null,i=Da(t),o=Oa(r,t,0,[t.props,s]),a=ud(o);if(mr(),i(),(a||t.sp)&&!Yr(t)&&Ad(t),a){if(o.then(ag,ag),e)return o.then(c=>{Jf(t,c)}).catch(c=>{Zi(c,t,0)});t.asyncDep=o}else Jf(t,o)}else nw(t)}function Jf(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ue(e)&&(t.setupState=uE(e)),nw(t)}function nw(t,e,n){const r=t.type;t.render||(t.render=r.render||Fn);{const s=Da(t);pr();try{M1(t)}finally{mr(),s()}}}const TS={get(t,e){return Lt(t,"get",""),t[e]}};function AS(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,TS),slots:t.slots,emit:t.emit,expose:e}}function zc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(uE(wd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in $o)return $o[n](t)},has(e,n){return n in e||n in $o}})):t.proxy}function Xf(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function IS(t){return pe(t)&&"__vccOpts"in t}const Se=(t,e)=>f1(t,e,Vi);function Ge(t,e,n){const r=arguments.length;return r===2?Ue(e)&&!ce(e)?Ms(e)?ve(t,null,[e]):ve(t,e):ve(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ms(n)&&(n=[n]),ve(t,e,n))}const SS="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zf;const lg=typeof window<"u"&&window.trustedTypes;if(lg)try{Zf=lg.createPolicy("vue",{createHTML:t=>t})}catch{}const rw=Zf?t=>Zf.createHTML(t):t=>t,RS="http://www.w3.org/2000/svg",CS="http://www.w3.org/1998/Math/MathML",sr=typeof document<"u"?document:null,cg=sr&&sr.createElement("template"),PS={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?sr.createElementNS(RS,t):e==="mathml"?sr.createElementNS(CS,t):n?sr.createElement(t,{is:n}):sr.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>sr.createTextNode(t),createComment:t=>sr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>sr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{cg.innerHTML=rw(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=cg.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Or="transition",Ao="animation",ua=Symbol("_vtc"),sw={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},kS=gt({},yE,sw),OS=t=>(t.displayName="Transition",t.props=kS,t),NS=OS((t,{slots:e})=>Ge(v1,xS(t),e)),ws=(t,e=[])=>{ce(t)?t.forEach(n=>n(...e)):t&&t(...e)},ug=t=>t?ce(t)?t.some(e=>e.length>1):t.length>1:!1;function xS(t){const e={};for(const k in t)k in sw||(e[k]=t[k]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:f=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,y=DS(s),b=y&&y[0],P=y&&y[1],{onBeforeEnter:O,onEnter:C,onEnterCancelled:v,onLeave:I,onLeaveCancelled:D,onBeforeAppear:F=O,onAppear:S=C,onAppearCancelled:E=v}=e,_=(k,A,ge,Ee)=>{k._enterCancelled=Ee,bs(k,A?f:a),bs(k,A?u:o),ge&&ge()},T=(k,A)=>{k._isLeaving=!1,bs(k,h),bs(k,m),bs(k,p),A&&A()},N=k=>(A,ge)=>{const Ee=k?S:C,ee=()=>_(A,k,ge);ws(Ee,[A,ee]),fg(()=>{bs(A,k?c:i),nr(A,k?f:a),ug(Ee)||hg(A,r,b,ee)})};return gt(e,{onBeforeEnter(k){ws(O,[k]),nr(k,i),nr(k,o)},onBeforeAppear(k){ws(F,[k]),nr(k,c),nr(k,u)},onEnter:N(!1),onAppear:N(!0),onLeave(k,A){k._isLeaving=!0;const ge=()=>T(k,A);nr(k,h),k._enterCancelled?(nr(k,p),mg()):(mg(),nr(k,p)),fg(()=>{k._isLeaving&&(bs(k,h),nr(k,m),ug(I)||hg(k,r,P,ge))}),ws(I,[k,ge])},onEnterCancelled(k){_(k,!1,void 0,!0),ws(v,[k])},onAppearCancelled(k){_(k,!0,void 0,!0),ws(E,[k])},onLeaveCancelled(k){T(k),ws(D,[k])}})}function DS(t){if(t==null)return null;if(Ue(t))return[Xu(t.enter),Xu(t.leave)];{const e=Xu(t);return[e,e]}}function Xu(t){return Bv(t)}function nr(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ua]||(t[ua]=new Set)).add(e)}function bs(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[ua];n&&(n.delete(e),n.size||(t[ua]=void 0))}function fg(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let LS=0;function hg(t,e,n,r){const s=t._endId=++LS,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=MS(t,e);if(!o)return r();const u=o+"end";let f=0;const h=()=>{t.removeEventListener(u,p),i()},p=m=>{m.target===t&&++f>=c&&h()};setTimeout(()=>{f<c&&h()},a+1),t.addEventListener(u,p)}function MS(t,e){const n=window.getComputedStyle(t),r=y=>(n[y]||"").split(", "),s=r(`${Or}Delay`),i=r(`${Or}Duration`),o=dg(s,i),a=r(`${Ao}Delay`),c=r(`${Ao}Duration`),u=dg(a,c);let f=null,h=0,p=0;e===Or?o>0&&(f=Or,h=o,p=i.length):e===Ao?u>0&&(f=Ao,h=u,p=c.length):(h=Math.max(o,u),f=h>0?o>u?Or:Ao:null,p=f?f===Or?i.length:c.length:0);const m=f===Or&&/\b(transform|all)(,|$)/.test(r(`${Or}Property`).toString());return{type:f,timeout:h,propCount:p,hasTransform:m}}function dg(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>pg(n)+pg(t[r])))}function pg(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function mg(){return document.body.offsetHeight}function VS(t,e,n){const r=t[ua];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const gg=Symbol("_vod"),FS=Symbol("_vsh"),US=Symbol(""),$S=/(^|;)\s*display\s*:/;function jS(t,e,n){const r=t.style,s=Qe(n);let i=!1;if(n&&!s){if(e)if(Qe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Fl(r,a,"")}else for(const o in e)n[o]==null&&Fl(r,o,"");for(const o in n)o==="display"&&(i=!0),Fl(r,o,n[o])}else if(s){if(e!==n){const o=r[US];o&&(n+=";"+o),r.cssText=n,i=$S.test(n)}}else e&&t.removeAttribute("style");gg in t&&(t[gg]=i?r.display:"",t[FS]&&(r.display="none"))}const yg=/\s*!important$/;function Fl(t,e,n){if(ce(n))n.forEach(r=>Fl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=BS(t,e);yg.test(n)?t.setProperty(Ws(r),n.replace(yg,""),"important"):t[r]=n}}const _g=["Webkit","Moz","ms"],Zu={};function BS(t,e){const n=Zu[e];if(n)return n;let r=mn(e);if(r!=="filter"&&r in t)return Zu[e]=r;r=Vc(r);for(let s=0;s<_g.length;s++){const i=_g[s]+r;if(i in t)return Zu[e]=i}return e}const vg="http://www.w3.org/1999/xlink";function Eg(t,e,n,r,s,i=MI(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(vg,e.slice(6,e.length)):t.setAttributeNS(vg,e,n):n==null||i&&!Hv(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Sn(n)?String(n):n)}function wg(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?rw(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Hv(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function $r(t,e,n,r){t.addEventListener(e,n,r)}function HS(t,e,n,r){t.removeEventListener(e,n,r)}const bg=Symbol("_vei");function qS(t,e,n,r,s=null){const i=t[bg]||(t[bg]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=zS(e);if(r){const u=i[e]=KS(r,s);$r(t,a,u,c)}else o&&(HS(t,a,o,c),i[e]=void 0)}}const Tg=/(?:Once|Passive|Capture)$/;function zS(t){let e;if(Tg.test(t)){e={};let r;for(;r=t.match(Tg);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ws(t.slice(2)),e]}let ef=0;const WS=Promise.resolve(),GS=()=>ef||(WS.then(()=>ef=0),ef=Date.now());function KS(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Rn(YS(r,n.value),e,5,[r])};return n.value=t,n.attached=GS(),n}function YS(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ag=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,QS=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?VS(t,r,o):e==="style"?jS(t,n,r):Ca(e)?ld(e)||qS(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):JS(t,e,r,o))?(wg(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Eg(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Qe(r))?wg(t,mn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Eg(t,e,r,o))};function JS(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ag(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ag(e)&&Qe(n)?!1:e in t}const Fi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>bi(e,n):e};function XS(t){t.target.composing=!0}function Ig(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const hr=Symbol("_assign"),L9={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[hr]=Fi(s);const i=r||s.props&&s.props.type==="number";$r(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ec(a)),t[hr](a)}),n&&$r(t,"change",()=>{t.value=t.value.trim()}),e||($r(t,"compositionstart",XS),$r(t,"compositionend",Ig),$r(t,"change",Ig))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[hr]=Fi(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?ec(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},M9={deep:!0,created(t,e,n){t[hr]=Fi(n),$r(t,"change",()=>{const r=t._modelValue,s=fa(t),i=t.checked,o=t[hr];if(ce(r)){const a=hd(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(a,1),o(u)}}else if(Qi(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(iw(t,i))})},mounted:Sg,beforeUpdate(t,e,n){t[hr]=Fi(n),Sg(t,e,n)}};function Sg(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ce(e))s=hd(e,r.props.value)>-1;else if(Qi(e))s=e.has(r.props.value);else{if(e===n)return;s=ka(e,iw(t,!0))}t.checked!==s&&(t.checked=s)}const V9={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Qi(e);$r(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ec(fa(o)):fa(o));t[hr](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Kn(()=>{t._assigning=!1})}),t[hr]=Fi(r)},mounted(t,{value:e}){Rg(t,e)},beforeUpdate(t,e,n){t[hr]=Fi(n)},updated(t,{value:e}){t._assigning||Rg(t,e)}};function Rg(t,e){const n=t.multiple,r=ce(e);if(!(n&&!r&&!Qi(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],a=fa(o);if(n)if(r){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=hd(e,a)>-1}else o.selected=e.has(a);else if(ka(fa(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function fa(t){return"_value"in t?t._value:t.value}function iw(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const ZS=["ctrl","shift","alt","meta"],eR={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ZS.some(n=>t[`${n}Key`]&&!e.includes(n))},F9=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=eR[e[o]];if(a&&a(s,e))return}return t(s,...i)})},ow=gt({patchProp:QS},PS);let Ho,Cg=!1;function tR(){return Ho||(Ho=Y1(ow))}function nR(){return Ho=Cg?Ho:Q1(ow),Cg=!0,Ho}const rR=(...t)=>{const e=tR().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=lw(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,aw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},sR=(...t)=>{const e=nR().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=lw(r);if(s)return n(s,!0,aw(s))},e};function aw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function lw(t){return Qe(t)?document.querySelector(t):t}const iR=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,oR=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,aR=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function lR(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){cR(t);return}return e}function cR(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function ha(t,e={}){if(typeof t!="string")return t;if(t[0]==='"'&&t[t.length-1]==='"'&&t.indexOf("\\")===-1)return t.slice(1,-1);const n=t.trim();if(n.length<=9)switch(n.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!aR.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(iR.test(t)||oR.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,lR)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const uR=/#/g,fR=/&/g,hR=/\//g,dR=/=/g,kd=/\+/g,pR=/%5e/gi,mR=/%60/gi,gR=/%7c/gi,yR=/%20/gi;function _R(t){return encodeURI(""+t).replace(gR,"|")}function eh(t){return _R(typeof t=="string"?t:JSON.stringify(t)).replace(kd,"%2B").replace(yR,"+").replace(uR,"%23").replace(fR,"%26").replace(mR,"`").replace(pR,"^").replace(hR,"%2F")}function tf(t){return eh(t).replace(dR,"%3D")}function fc(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function vR(t){return fc(t.replace(kd," "))}function ER(t){return fc(t.replace(kd," "))}function Od(t=""){const e=Object.create(null);t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=vR(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=ER(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function wR(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${tf(t)}=${eh(n)}`).join("&"):`${tf(t)}=${eh(e)}`:tf(t)}function bR(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>wR(e,t[e])).filter(Boolean).join("&")}const TR=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,cw=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,AR=/^([/\\]\s*){2,}[^/\\]/,IR=/^[\s\0]*(blob|data|javascript|vbscript):$/i,SR=/\/$|\/\?|\/#/,RR=/^\.?\//;function Jn(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?TR.test(t):cw.test(t)||(e.acceptRelative?AR.test(t):!1)}function CR(t){return!!t&&IR.test(t)}function th(t="",e){return e?SR.test(t):t.endsWith("/")}function Ui(t="",e){if(!e)return(th(t)?t.slice(0,-1):t)||"/";if(!th(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s!==-1&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function uw(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(th(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s!==-1&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function PR(t,e){if(hw(e)||Jn(t))return t;const n=Ui(e);return t.startsWith(n)?t:Wc(n,t)}function Pg(t,e){if(hw(e))return t;const n=Ui(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function fw(t,e){const n=mw(t),r={...Od(n.search),...e};return n.search=bR(r),DR(n)}function hw(t){return!t||t==="/"}function kR(t){return t&&t!=="/"}function Wc(t,...e){let n=t||"";for(const r of e.filter(s=>kR(s)))if(n){const s=r.replace(RR,"");n=uw(n)+s}else n=r;return n}function dw(...t){const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const o of n)if(!(!o||o==="/")){for(const[a,c]of o.split(e).entries())if(!(!c||c===".")){if(c===".."){if(r.length===1&&Jn(r[0]))continue;r.pop(),s--;continue}if(a===1&&r[r.length-1]?.endsWith(":/")){r[r.length-1]+="/"+c;continue}r.push(c),s++}}let i=r.join("/");return s>=0?n[0]?.startsWith("/")&&!i.startsWith("/")?i="/"+i:n[0]?.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,n[n.length-1]?.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function OR(t){return NR(t,"https://")}function NR(t,e){let n=t.match(cw);return n||(n=t.match(/^\/{2,}/)),n?e+t.slice(n[0].length):e+t}function xR(t,e){return fc(Ui(t))===fc(Ui(e))}const pw=Symbol.for("ufo:protocolRelative");function mw(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,h,p=""]=n;return{protocol:h.toLowerCase(),pathname:p,href:h+p,auth:"",host:"",search:"",hash:""}}if(!Jn(t,{acceptRelative:!0}))return kg(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:c,search:u,hash:f}=kg(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:c,search:u,hash:f,[pw]:!r}}function kg(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function DR(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[pw]?(t.protocol||"")+"//":"")+s+i+e+n+r}class LR extends Error{constructor(e,n){super(e,n),this.name="FetchError",n?.cause&&!this.cause&&(this.cause=n.cause)}}function MR(t){const e=t.error?.message||t.error?.toString()||"",n=t.request?.method||t.options?.method||"GET",r=t.request?.url||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new LR(o,t.error?{cause:t.error}:void 0);for(const c of["request","options","response"])Object.defineProperty(a,c,{get(){return t[c]}});for(const[c,u]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,c,{get(){return t.response&&t.response[u]}});return a}const VR=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Og(t="GET"){return VR.has(t.toUpperCase())}function FR(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const UR=new Set(["image/svg","application/xml","application/xhtml","application/html"]),$R=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function jR(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return $R.test(e)?"json":UR.has(e)||e.startsWith("text/")?"text":"blob"}function BR(t,e,n,r){const s=HR(e?.headers??t?.headers,n?.headers,r);let i;return(n?.query||n?.params||e?.params||e?.query)&&(i={...n?.params,...n?.query,...e?.params,...e?.query}),{...n,...e,query:i,params:i,headers:s}}function HR(t,e,n){if(!e)return new n(t);const r=new n(e);if(t)for(const[s,i]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))r.set(s,i);return r}async function El(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const qR=new Set([408,409,425,429,500,502,503,504]),zR=new Set([101,204,205,304]);function gw(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const c=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!c){let f;typeof a.options.retry=="number"?f=a.options.retry:f=Og(a.options.method)?0:1;const h=a.response&&a.response.status||500;if(f>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(h):qR.has(h))){const p=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return p>0&&await new Promise(m=>setTimeout(m,p)),i(a.request,{...a.options,retry:f-1})}}const u=MR(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(c,u={}){const f={request:c,options:BR(c,u,t.defaults,n),response:void 0,error:void 0};f.options.method&&(f.options.method=f.options.method.toUpperCase()),f.options.onRequest&&await El(f,f.options.onRequest),typeof f.request=="string"&&(f.options.baseURL&&(f.request=PR(f.request,f.options.baseURL)),f.options.query&&(f.request=fw(f.request,f.options.query),delete f.options.query),"query"in f.options&&delete f.options.query,"params"in f.options&&delete f.options.params),f.options.body&&Og(f.options.method)&&(FR(f.options.body)?(f.options.body=typeof f.options.body=="string"?f.options.body:JSON.stringify(f.options.body),f.options.headers=new n(f.options.headers||{}),f.options.headers.has("content-type")||f.options.headers.set("content-type","application/json"),f.options.headers.has("accept")||f.options.headers.set("accept","application/json")):("pipeTo"in f.options.body&&typeof f.options.body.pipeTo=="function"||typeof f.options.body.pipe=="function")&&("duplex"in f.options||(f.options.duplex="half")));let h;if(!f.options.signal&&f.options.timeout){const m=new r;h=setTimeout(()=>{const y=new Error("[TimeoutError]: The operation was aborted due to timeout");y.name="TimeoutError",y.code=23,m.abort(y)},f.options.timeout),f.options.signal=m.signal}try{f.response=await e(f.request,f.options)}catch(m){return f.error=m,f.options.onRequestError&&await El(f,f.options.onRequestError),await s(f)}finally{h&&clearTimeout(h)}if((f.response.body||f.response._bodyInit)&&!zR.has(f.response.status)&&f.options.method!=="HEAD"){const m=(f.options.parseResponse?"json":f.options.responseType)||jR(f.response.headers.get("content-type")||"");switch(m){case"json":{const y=await f.response.text(),b=f.options.parseResponse||ha;f.response._data=b(y);break}case"stream":{f.response._data=f.response.body||f.response._bodyInit;break}default:f.response._data=await f.response[m]()}}return f.options.onResponse&&await El(f,f.options.onResponse),!f.options.ignoreResponseError&&f.response.status>=400&&f.response.status<600?(f.options.onResponseError&&await El(f,f.options.onResponseError),await s(f)):f.response},o=async function(c,u){return(await i(c,u))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={},c={})=>gw({...t,...c,defaults:{...t.defaults,...c.defaults,...a}}),o}const hc=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),WR=hc.fetch?(...t)=>hc.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),GR=hc.Headers,KR=hc.AbortController,YR=gw({fetch:WR,Headers:GR,AbortController:KR}),QR=YR,JR=()=>window?.__NUXT__?.config||{},Nd=()=>JR().app,XR=()=>Nd().baseURL,ZR=()=>Nd().buildAssetsDir,xd=(...t)=>dw(Gc(),ZR(),...t),Gc=(...t)=>{const e=Nd(),n=e.cdnURL||e.baseURL;return t.length?dw(n,...t):n};globalThis.__buildAssetsURL=xd,globalThis.__publicAssetsURL=Gc;globalThis.$fetch||(globalThis.$fetch=QR.create({baseURL:XR()}));"global"in globalThis||(globalThis.global=globalThis);function nh(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?nh(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const eC={run:t=>t()},tC=()=>eC,yw=typeof console.createTask<"u"?console.createTask:tC;function nC(t,e){const n=e.shift(),r=yw(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function rC(t,e){const n=e.shift(),r=yw(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function nf(t,e){for(const n of[...t])n(e)}class sC{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=nh(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=nh(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(nC,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(rC,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&nf(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&nf(this._after,s)}):(this._after&&s&&nf(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function _w(){return new sC}function iC(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const c=()=>{e=o},u=()=>e===o?c:void 0;rh.add(u);try{const f=s?s.run(o,a):a();return n||(e=void 0),await f}finally{rh.delete(u)}}}}function oC(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=iC({...t,...r})),e[n]}}}const dc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Ng="__unctx__",aC=dc[Ng]||(dc[Ng]=oC()),lC=(t,e={})=>aC.get(t,e),xg="__unctx_async_handlers__",rh=dc[xg]||(dc[xg]=new Set);function Si(t){const e=[];for(const s of rh){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const Dg={name:"page",mode:"out-in"},cC=!1,uC=!1,fC={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},hC=null,dC="#__nuxt",vw="nuxt-app",Lg=36e5,pC="vite:preloadError";function Ew(t=vw){return lC(t,{asyncContext:!1})}const mC="__nuxt_plugin";function gC(t){let e=0;const n={_id:t.id||vw||"nuxt-app",_scope:pd(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.18.0"},get vue(){return n.vueApp.version}},payload:Ln({...t.ssrContext?.payload||{},data:Ln({}),state:Tr({}),once:new Set,_errors:Ln({})}),static:{data:{}},runWithContext(s){return n._scope.active&&!Xi()?n._scope.run(()=>Mg(n,s)):Mg(n,s)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let s=!1;return()=>{if(!s&&(s=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Ln({}),_payloadRevivers:{},...t};{const s=window.__NUXT__;if(s)for(const i in s)switch(i){case"data":case"state":case"_errors":Object.assign(n.payload[i],s[i]);break;default:n.payload[i]=s[i]}}n.hooks=_w(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(s,i)=>{const o="$"+s;wl(n,o,i),wl(n.vueApp.config.globalProperties,o,i)},wl(n.vueApp,"$nuxt",n),wl(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(pC,i=>{n.callHook("app:chunkError",{error:i.payload}),i.payload.message.includes("Unable to preload CSS")&&i.preventDefault()}),window.useNuxtApp||=xe;const s=n.hook("app:error",(...i)=>{console.error("[nuxt] error caught during app initialization",...i)});n.hook("app:mounted",s)}const r=n.payload.config;return n.provide("config",r),n}function yC(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function _C(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function vC(t,e){const n=new Set,r=[],s=[];let i,o=0;async function a(c){const u=c.dependsOn?.filter(f=>e.some(h=>h._name===f)&&!n.has(f))??[];if(u.length>0)r.push([new Set(u),c]);else{const f=_C(t,c).then(async()=>{c._name&&(n.add(c._name),await Promise.all(r.map(async([h,p])=>{h.has(c._name)&&(h.delete(c._name),h.size===0&&(o++,await a(p)))})))}).catch(h=>{if(!c.parallel&&!t.payload.error)throw i;i||=h});c.parallel?s.push(f):await f}}for(const c of e)yC(t,c);for(const c of e)await a(c);if(await Promise.all(s),o)for(let c=0;c<o;c++)await Promise.all(s);if(i)throw t.payload.error||i}function Wt(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[mC]:!0,_name:e})}const EC=Wt;function Mg(t,e,n){const r=()=>e();return Ew(t._id).set(t),t.vueApp.runWithContext(r)}function ww(t){let e;return xa()&&(e=Gs()?.appContext.app.$nuxt),e||=Ew(t).tryUse(),e||null}function xe(t){const e=ww(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function Ks(t){return xe().$config}function wl(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function wC(t,e){return{ctx:{table:t},matchAll:n=>Tw(n,t)}}function bw(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,bw(s)])):new Map(Object.entries(t[n]));return e}function bC(t){return wC(bw(t))}function Tw(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of Vg(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of Vg(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...Tw(a,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function Vg(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function rf(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function sh(t,e,n=".",r){if(!rf(e))return sh(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:rf(o)&&rf(s[i])?s[i]=sh(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function TC(t){return(...e)=>e.reduce((n,r)=>sh(n,r,"",t),{})}const Aw=TC();function AC(t,e){try{return e in t}catch{return!1}}class Fg extends Error{static __h3_error__=!0;statusCode=500;fatal=!1;unhandled=!1;statusMessage;data;cause;constructor(e,n={}){super(e,n),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:ih(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=Iw(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}function IC(t){if(typeof t=="string")return new Fg(t);if(SC(t))return t;const e=new Fg(t.message??t.statusMessage??"",{cause:t.cause||t});if(AC(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=ih(t.statusCode,e.statusCode):t.status&&(e.statusCode=ih(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;Iw(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function SC(t){return t?.constructor?.__h3_error__===!0}const RC=/[^\u0009\u0020-\u007E]/g;function Iw(t=""){return t.replace(RC,"")}function ih(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const Sw=Symbol("layout-meta"),Vs=Symbol("route"),St=()=>xe()?.$router,La=()=>xa()?mt(Vs,xe()._route):xe()._route;function U9(t){return t}const CC=()=>{try{if(xe()._processingMiddleware)return!0}catch{return!1}return!1},PC=(t,e)=>{t||="/";const n=typeof t=="string"?t:"path"in t?oh(t):St().resolve(t).href;if(e?.open){const{target:c="_blank",windowFeatures:u={}}=e.open,f=Object.entries(u).filter(([h,p])=>p!==void 0).map(([h,p])=>`${h.toLowerCase()}=${p}`).join(", ");return open(n,c,f),Promise.resolve()}const r=Jn(n,{acceptRelative:!0}),s=e?.external||r;if(s){if(!e?.external)throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:c}=new URL(n,window.location.href);if(c&&CR(c))throw new Error(`Cannot navigate to a URL with '${c}' protocol.`)}const i=CC();if(!s&&i){if(e?.replace){if(typeof t=="string"){const{pathname:c,search:u,hash:f}=mw(t);return{path:c,...u&&{query:Od(u)},...f&&{hash:f},replace:!0}}return{...t,replace:!0}}return t}const o=St(),a=xe();return s?(a._scope.stop(),e?.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e?.replace?o.replace(t):o.push(t)};function oh(t){return fw(t.path||"",t.query||{})+(t.hash||"")}const Rw="__nuxt_error",Kc=()=>bd(xe().payload,"error"),Is=t=>{const e=xs(t);try{const n=xe(),r=Kc();n.hooks.callHook("app:error",e),r.value||=e}catch{throw e}return e},Cw=async(t={})=>{const e=xe(),n=Kc();e.callHook("app:error:cleared",t),t.redirect&&await St().replace(t.redirect),n.value=hC},Pw=t=>!!t&&typeof t=="object"&&Rw in t,xs=t=>{const e=IC(t);return Object.defineProperty(e,Rw,{value:!0,configurable:!1,writable:!1}),e};/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let kw;const Ma=t=>kw=t,Ow=Symbol();function ah(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var qo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(qo||(qo={}));function kC(){const t=pd(!0),e=t.run(()=>nt({}));let n=[],r=[];const s=wd({install(i){Ma(s),s._a=i,i.provide(Ow,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Nw=()=>{};function Ug(t,e,n,r=Nw){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Xi()&&ra(s),s}function ci(t,...e){t.slice().forEach(n=>{n(...e)})}const OC=t=>t(),$g=Symbol(),sf=Symbol();function lh(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];ah(s)&&ah(r)&&t.hasOwnProperty(n)&&!Ye(r)&&!Un(r)?t[n]=lh(s,r):t[n]=r}return t}const NC=Symbol();function xC(t){return!ah(t)||!t.hasOwnProperty(NC)}const{assign:Dr}=Object;function DC(t){return!!(Ye(t)&&t.effect)}function LC(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=s?s():{});const f=a1(n.state.value[t]);return Dr(f,i,Object.keys(o||{}).reduce((h,p)=>(h[p]=wd(Se(()=>{Ma(n);const m=n._s.get(t);return o[p].call(m,m)})),h),{}))}return c=xw(t,u,e,n,r,!0),c}function xw(t,e,n={},r,s,i){let o;const a=Dr({actions:{}},n),c={deep:!0};let u,f,h=[],p=[],m;const y=r.state.value[t];!i&&!y&&(r.state.value[t]={}),nt({});let b;function P(E){let _;u=f=!1,typeof E=="function"?(E(r.state.value[t]),_={type:qo.patchFunction,storeId:t,events:m}):(lh(r.state.value[t],E),_={type:qo.patchObject,payload:E,storeId:t,events:m});const T=b=Symbol();Kn().then(()=>{b===T&&(u=!0)}),f=!0,ci(h,_,r.state.value[t])}const O=i?function(){const{state:_}=n,T=_?_():{};this.$patch(N=>{Dr(N,T)})}:Nw;function C(){o.stop(),h=[],p=[],r._s.delete(t)}const v=(E,_="")=>{if($g in E)return E[sf]=_,E;const T=function(){Ma(r);const N=Array.from(arguments),k=[],A=[];function ge(ie){k.push(ie)}function Ee(ie){A.push(ie)}ci(p,{args:N,name:T[sf],store:D,after:ge,onError:Ee});let ee;try{ee=E.apply(this&&this.$id===t?this:D,N)}catch(ie){throw ci(A,ie),ie}return ee instanceof Promise?ee.then(ie=>(ci(k,ie),ie)).catch(ie=>(ci(A,ie),Promise.reject(ie))):(ci(k,ee),ee)};return T[$g]=!0,T[sf]=_,T},I={_p:r,$id:t,$onAction:Ug.bind(null,p),$patch:P,$reset:O,$subscribe(E,_={}){const T=Ug(h,E,_.detached,()=>N()),N=o.run(()=>$n(()=>r.state.value[t],k=>{(_.flush==="sync"?f:u)&&E({storeId:t,type:qo.direct,events:m},k)},Dr({},c,_)));return T},$dispose:C},D=Tr(I);r._s.set(t,D);const S=(r._a&&r._a.runWithContext||OC)(()=>r._e.run(()=>(o=pd()).run(()=>e({action:v}))));for(const E in S){const _=S[E];if(Ye(_)&&!DC(_)||Un(_))i||(y&&xC(_)&&(Ye(_)?_.value=y[E]:lh(_,y[E])),r.state.value[t][E]=_);else if(typeof _=="function"){const T=v(_,E);S[E]=T,a.actions[E]=_}}return Dr(D,S),Dr(Pe(D),S),Object.defineProperty(D,"$state",{get:()=>r.state.value[t],set:E=>{P(_=>{Dr(_,E)})}}),r._p.forEach(E=>{Dr(D,o.run(()=>E({store:D,app:r._a,pinia:r,options:a})))}),y&&i&&n.hydrate&&n.hydrate(D.$state,y),u=!0,f=!0,D}/*! #__NO_SIDE_EFFECTS__ */function Dw(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const u=xa();return a=a||(u?mt(Ow,null):null),a&&Ma(a),a=kw,a._s.has(r)||(i?xw(r,e,s,a):LC(r,s,a)),a._s.get(r)}return o.$id=r,o}function MC(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(){return t(this.$pinia)[r]},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(){const s=t(this.$pinia),i=e[r];return typeof i=="function"?i.call(this,s):s[i]},n),{})}function VC(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[r](...s)},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[e[r]](...s)},n),{})}function $9(t){{const e=Pe(t),n={};for(const r in e){const s=e[r];s.effect?n[r]=Se({get:()=>t[r],set(i){t[r]=i}}):(Ye(s)||Un(s))&&(n[r]=bd(t,r))}return n}}function jg(t){const e=UC(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let s=0;s<n.byteLength;s++)r.setUint8(s,e.charCodeAt(s));return n}const FC="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function UC(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let s=0;s<t.length;s++)n<<=6,n|=FC.indexOf(t[s]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const $C=-1,jC=-2,BC=-3,HC=-4,qC=-5,zC=-6;function WC(t,e){return GC(JSON.parse(t),e)}function GC(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===$C)return;if(i===BC)return NaN;if(i===HC)return 1/0;if(i===qC)return-1/0;if(i===zC)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const c=a[0],u=e?.[c];if(u)return r[i]=u(s(a[1]));switch(c){case"Date":r[i]=new Date(a[1]);break;case"Set":const f=new Set;r[i]=f;for(let m=1;m<a.length;m+=1)f.add(s(a[m]));break;case"Map":const h=new Map;r[i]=h;for(let m=1;m<a.length;m+=2)h.set(s(a[m]),s(a[m+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const p=Object.create(null);r[i]=p;for(let m=1;m<a.length;m+=2)p[a[m]]=s(a[m+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const m=globalThis[c],y=a[1],b=jg(y),P=new m(b);r[i]=P;break}case"ArrayBuffer":{const m=a[1],y=jg(m);r[i]=y;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(a.length);r[i]=c;for(let u=0;u<a.length;u+=1){const f=a[u];f!==jC&&(c[u]=s(f))}}else{const c={};r[i]=c;for(const u in a){const f=a[u];c[u]=s(f)}}return r[i]}return s(0)}const KC=new Set(["link","style","script","noscript"]),YC=new Set(["title","titleTemplate","script","style","noscript"]),Bg=new Set(["base","meta","link","style","script","noscript"]),QC=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),JC=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),XC=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),ZC=new Set(["templateParams","htmlAttrs","bodyAttrs"]),eP=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]);const tP=["name","property","http-equiv"],nP=new Set(["viewport","description","keywords","robots"]);function Lw(t){const e=t.split(":");return e.length?eP.has(e[1]):!1}function ch(t){const{props:e,tag:n}=t;if(JC.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(t.tag==="meta"){for(const r of tP)if(e[r]!==void 0){const s=e[r],i=s.includes(":"),o=nP.has(s),c=!(i||o)&&t.key?`:key:${t.key}`:"";return`${n}:${s}${c}`}}if(t.key)return`${n}:key:${t.key}`;if(e.id)return`${n}:id:${e.id}`;if(YC.has(n)){const r=t.textContent||t.innerHTML;if(r)return`${n}:content:${r}`}}function Hg(t){const e=t._h||t._d;if(e)return e;const n=t.textContent||t.innerHTML;return n||`${t.tag}:${Object.entries(t.props).map(([r,s])=>`${r}:${String(s)}`).join(",")}`}function pc(t,e,n){typeof t==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(t=t());let s;if(e&&(s=e(n,t)),Array.isArray(s))return s.map(i=>pc(i,e));if(s?.constructor===Object){const i={};for(const o of Object.keys(s))i[o]=pc(s[o],e,o);return i}return s}function rP(t,e){const n=t==="style"?new Map:new Set;function r(s){const i=s.trim();if(i)if(t==="style"){const[o,...a]=i.split(":").map(c=>c.trim());o&&a.length&&n.set(o,a.join(":"))}else i.split(" ").filter(Boolean).forEach(o=>n.add(o))}return typeof e=="string"?t==="style"?e.split(";").forEach(r):r(e):Array.isArray(e)?e.forEach(s=>r(s)):e&&typeof e=="object"&&Object.entries(e).forEach(([s,i])=>{i&&i!=="false"&&(t==="style"?n.set(s.trim(),i):r(s))}),n}function Mw(t,e){return t.props=t.props||{},e&&Object.entries(e).forEach(([n,r])=>{if(r===null){t.props[n]=null;return}if(n==="class"||n==="style"){t.props[n]=rP(n,r);return}if(XC.has(n)){if(["textContent","innerHTML"].includes(n)&&typeof r=="object"){let o=e.type;if(e.type||(o="application/json"),!o?.endsWith("json")&&o!=="speculationrules")return;e.type=o,t.props.type=o,t[n]=JSON.stringify(r)}else t[n]=r;return}const s=String(r),i=n.startsWith("data-");s==="true"||s===""?t.props[n]=i?s:!0:!r&&i&&s==="false"?t.props[n]="false":r!==void 0&&(t.props[n]=r)}),t}function sP(t,e){const n=typeof e=="object"&&typeof e!="function"?e:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},r=Mw({tag:t,props:{}},n);return r.key&&KC.has(r.tag)&&(r.props["data-hid"]=r._h=r.key),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r}function iP(t,e){if(!t)return[];typeof t=="function"&&(t=t());const n=(s,i)=>{for(let o=0;o<e.length;o++)i=e[o](s,i);return i};t=n(void 0,t);const r=[];return t=pc(t,n),Object.entries(t||{}).forEach(([s,i])=>{if(i!==void 0)for(const o of Array.isArray(i)?i:[i])r.push(sP(s,o))}),r.flat()}const uh=(t,e)=>t._w===e._w?t._p-e._p:t._w-e._w,qg={base:-10,title:10},oP={critical:-8,high:-1,low:2},zg={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},aP=/@import/,Io=t=>t===""||t===!0;function lP(t,e){if(typeof e.tagPriority=="number")return e.tagPriority;let n=100;const r=oP[e.tagPriority]||0,s=t.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:zg;if(e.tag in qg)n=qg[e.tag];else if(e.tag==="meta"){const i=e.props["http-equiv"]==="content-security-policy"?"content-security-policy":e.props.charset?"charset":e.props.name==="viewport"?"viewport":null;i&&(n=zg.meta[i])}else e.tag==="link"&&e.props.rel?n=s.link[e.props.rel]:e.tag==="script"?Io(e.props.async)?n=s.script.async:e.props.src&&!Io(e.props.defer)&&!Io(e.props.async)&&e.props.type!=="module"&&!e.props.type?.endsWith("json")?n=s.script.sync:Io(e.props.defer)&&e.props.src&&!Io(e.props.async)&&(n=s.script.defer):e.tag==="style"&&(n=e.innerHTML&&aP.test(e.innerHTML)?s.style.imported:s.style.sync);return(n||100)+r}function Wg(t,e){const n=typeof e=="function"?e(t):e,r=n.key||String(t.plugins.size+1);t.plugins.get(r)||(t.plugins.set(r,n),t.hooks.addHooks(n.hooks||{}))}function cP(t={}){const e=_w();e.addHooks(t.hooks||{});const n=!t.document,r=new Map,s=new Map,i=new Set,o={_entryCount:1,plugins:s,dirty:!1,resolvedOptions:t,hooks:e,ssr:n,entries:r,headEntries(){return[...r.values()]},use:a=>Wg(o,a),push(a,c){const u={...c||{}};delete u.head;const f=u._index??o._entryCount++,h={_i:f,input:a,options:u},p={_poll(m=!1){o.dirty=!0,!m&&i.add(f),e.callHook("entries:updated",o)},dispose(){r.delete(f)&&o.invalidate()},patch(m){(!u.mode||u.mode==="server"&&n||u.mode==="client"&&!n)&&(h.input=m,r.set(f,h),p._poll())}};return p.patch(a),p},async resolveTags(){const a={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await e.callHook("entries:resolve",a);i.size;){const p=i.values().next().value;i.delete(p);const m=r.get(p);if(m){const y={tags:iP(m.input,t.propResolvers||[]).map(b=>Object.assign(b,m.options)),entry:m};await e.callHook("entries:normalize",y),m._tags=y.tags.map((b,P)=>(b._w=lP(o,b),b._p=(m._i<<10)+P,b._d=ch(b),b))}}let c=!1;a.entries.flatMap(p=>(p._tags||[]).map(m=>({...m,props:{...m.props}}))).sort(uh).reduce((p,m)=>{const y=String(m._d||m._p);if(!p.has(y))return p.set(y,m);const b=p.get(y);if((m?.tagDuplicateStrategy||(ZC.has(m.tag)?"merge":null)||(m.key&&m.key===b.key?"merge":null))==="merge"){const O={...b.props};Object.entries(m.props).forEach(([C,v])=>O[C]=C==="style"?new Map([...b.props.style||new Map,...v]):C==="class"?new Set([...b.props.class||new Set,...v]):v),p.set(y,{...m,props:O})}else m._p>>10===b._p>>10&&m.tag==="meta"&&Lw(y)?(p.set(y,Object.assign([...Array.isArray(b)?b:[b],m],m)),c=!0):(m._w===b._w?m._p>b._p:m?._w<b?._w)&&p.set(y,m);return p},a.tagMap);const u=a.tagMap.get("title"),f=a.tagMap.get("titleTemplate");if(o._title=u?.textContent,f){const p=f?.textContent;if(o._titleTemplate=p,p){let m=typeof p=="function"?p(u?.textContent):p;typeof m=="string"&&!o.plugins.has("template-params")&&(m=m.replace("%s",u?.textContent||"")),u?m===null?a.tagMap.delete("title"):a.tagMap.set("title",{...u,textContent:m}):(f.tag="title",f.textContent=m)}}a.tags=Array.from(a.tagMap.values()),c&&(a.tags=a.tags.flat().sort(uh)),await e.callHook("tags:beforeResolve",a),await e.callHook("tags:resolve",a),await e.callHook("tags:afterResolve",a);const h=[];for(const p of a.tags){const{innerHTML:m,tag:y,props:b}=p;if(QC.has(y)&&!(Object.keys(b).length===0&&!p.innerHTML&&!p.textContent)&&!(y==="meta"&&!b.content&&!b["http-equiv"]&&!b.charset)){if(y==="script"&&m){if(b.type?.endsWith("json")){const P=typeof m=="string"?m:JSON.stringify(m);p.innerHTML=P.replace(/</g,"\\u003C")}else typeof m=="string"&&(p.innerHTML=m.replace(new RegExp(`</${y}`,"g"),`<\\/${y}`));p._d=ch(p)}h.push(p)}}return h},invalidate(){for(const a of r.values())i.add(a._i);o.dirty=!0,e.callHook("entries:updated",o)}};return(t?.plugins||[]).forEach(a=>Wg(o,a)),o.hooks.callHook("init",o),t.init?.forEach(a=>a&&o.push(a)),o}const Fr="%separator",uP=new RegExp(`${Fr}(?:\\s*${Fr})*`,"g");function fP(t,e,n=!1){let r;if(e==="s"||e==="pageTitle")r=t.pageTitle;else if(e.includes(".")){const s=e.indexOf(".");r=t[e.substring(0,s)]?.[e.substring(s+1)]}else r=t[e];if(r!==void 0)return n?(r||"").replace(/\\/g,"\\\\").replace(/</g,"\\u003C").replace(/"/g,'\\"'):r||""}function bl(t,e,n,r=!1){if(typeof t!="string"||!t.includes("%"))return t;let s=t;try{s=decodeURI(t)}catch{}const i=s.match(/%\w+(?:\.\w+)?/g);if(!i)return t;const o=t.includes(Fr);return t=t.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===Fr||!i.includes(a))return a;const c=fP(e,a.slice(1),r);return c!==void 0?c:a}).trim(),o&&(t.endsWith(Fr)&&(t=t.slice(0,-Fr.length)),t.startsWith(Fr)&&(t=t.slice(Fr.length)),t=t.replace(uP,n||"").trim()),t}const Gg=t=>t.includes(":key")?t:t.split(":").join(":key:"),hP={key:"aliasSorting",hooks:{"tags:resolve":t=>{let e=!1;for(const n of t.tags){const r=n.tagPriority;if(!r)continue;const s=String(r);if(s.startsWith("before:")){const i=Gg(s.slice(7)),o=t.tagMap.get(i);o&&(typeof o.tagPriority=="number"&&(n.tagPriority=o.tagPriority),n._p=o._p-1,e=!0)}else if(s.startsWith("after:")){const i=Gg(s.slice(6)),o=t.tagMap.get(i);o&&(typeof o.tagPriority=="number"&&(n.tagPriority=o.tagPriority),n._p=o._p+1,e=!0)}}e&&(t.tags=t.tags.sort(uh))}}},dP={key:"deprecations",hooks:{"entries:normalize":({tags:t})=>{for(const e of t)e.props.children&&(e.innerHTML=e.props.children,delete e.props.children),e.props.hid&&(e.key=e.props.hid,delete e.props.hid),e.props.vmid&&(e.key=e.props.vmid,delete e.props.vmid),e.props.body&&(e.tagPosition="bodyClose",delete e.props.body)}}};async function fh(t){if(typeof t==="function")return t;if(t instanceof Promise)return await t;if(Array.isArray(t))return await Promise.all(t.map(n=>fh(n)));if(t?.constructor===Object){const n={};for(const r of Object.keys(t))n[r]=await fh(t[r]);return n}return t}const pP={key:"promises",hooks:{"entries:resolve":async t=>{const e=[];for(const n in t.entries)t.entries[n]._promisesProcessed||e.push(fh(t.entries[n].input).then(r=>{t.entries[n].input=r,t.entries[n]._promisesProcessed=!0}));await Promise.all(e)}}},mP={meta:"content",link:"href",htmlAttrs:"lang"},gP=["innerHTML","textContent"],yP=t=>({key:"template-params",hooks:{"entries:normalize":e=>{const n=e.tags.filter(r=>r.tag==="templateParams"&&r.mode==="server")?.[0]?.props||{};Object.keys(n).length&&(t._ssrPayload={templateParams:{...t._ssrPayload?.templateParams||{},...n}})},"tags:resolve":({tagMap:e,tags:n})=>{const r=e.get("templateParams")?.props||{},s=r.separator||"|";delete r.separator,r.pageTitle=bl(r.pageTitle||t._title||"",r,s);for(const i of n){if(i.processTemplateParams===!1)continue;const o=mP[i.tag];if(o&&typeof i.props[o]=="string")i.props[o]=bl(i.props[o],r,s);else if(i.processTemplateParams||i.tag==="titleTemplate"||i.tag==="title")for(const a of gP)typeof i[a]=="string"&&(i[a]=bl(i[a],r,s,i.tag==="script"&&i.props.type.endsWith("json")))}t._templateParams=r,t._separator=s},"tags:afterResolve":({tagMap:e})=>{const n=e.get("title");n?.textContent&&n.processTemplateParams!==!1&&(n.textContent=bl(n.textContent,t._templateParams,t._separator))}}}),_P=(t,e)=>Ye(e)?cE(e):e,Dd="usehead";function vP(t){return{install(n){n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(Dd,t)}}.install}function EP(){if(xa()){const t=mt(Dd);if(!t)throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");return t}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function wP(t,e={}){const n=e.head||EP();return n.ssr?n.push(t||{},e):bP(n,t,e)}function bP(t,e,n={}){const r=nt(!1);let s;return eS(()=>{const o=r.value?{}:pc(e,_P);s?s.patch(o):s=t.push(o,n)}),Gs()&&(eo(()=>{s.dispose()}),TE(()=>{r.value=!0}),bE(()=>{r.value=!1})),s}function Vw(t){const e=t||ww();return e?.ssrContext?.head||e?.runWithContext(()=>{if(xa())return mt(Dd)})}function Kg(t,e={}){const n=Vw(e.nuxt);if(n)return wP(t,{head:n,...e})}const TP="modulepreload",AP=function(t,e){return new URL(t,e).href},Yg={},Ce=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let u=function(f){return Promise.all(f.map(h=>Promise.resolve(h).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");s=u(n.map(f=>{if(f=AP(f,r),f in Yg)return;Yg[f]=!0;const h=f.endsWith(".css"),p=h?'[rel="stylesheet"]':"";if(!!r)for(let b=o.length-1;b>=0;b--){const P=o[b];if(P.href===f&&(!h||P.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${p}`))return;const y=document.createElement("link");if(y.rel=h?"stylesheet":TP,h||(y.as="script"),y.crossOrigin="",y.href=f,c&&y.setAttribute("nonce",c),document.head.appendChild(y),h)return new Promise((b,P)=>{y.addEventListener("load",b),y.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${f}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};let Ul,$l;function IP(){return Ul=$fetch(xd(`builds/meta/${Ks().app.buildId}.json`),{responseType:"json"}),Ul.then(t=>{$l=bC(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),Ul}function Yc(){return Ul||IP()}async function Ld(t){const e=typeof t=="string"?t:t.path;if(await Yc(),!$l)return console.error("[nuxt] Error creating app manifest matcher.",$l),{};try{return Aw({},...$l.matchAll(e).reverse())}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function Qg(t,e={}){if(!await Uw(t))return null;const r=await RP(t,e);return await Fw(r)||null}const SP="_payload.json";async function RP(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||Jn(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=Ks(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await Uw(t)?i:r.app.baseURL;return Wc(o,n.pathname,SP+(s?`?${s}`:""))}async function Fw(t){const e=fetch(t,{cache:"force-cache"}).then(n=>n.text().then($w));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function Uw(t=La().path){const e=xe();return t=Ui(t),(await Yc()).prerendered.includes(t)?!0:e.runWithContext(async()=>{const r=await Ld({path:t});return!!r.prerender&&!r.redirect})}let Ts=null;async function CP(){if(Ts)return Ts;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await $w(t.textContent||""),n=t.dataset.src?await Fw(t.dataset.src):void 0;return Ts={...e,...n,...window.__NUXT__},Ts.config?.public&&(Ts.config.public=Tr(Ts.config.public)),Ts}async function $w(t){return await WC(t,xe()._payloadRevivers)}function jw(t,e){xe()._payloadRevivers[t]=e}const PP=EC(()=>{jw("skipHydrate",t=>{})}),kP=[["NuxtError",t=>xs(t)],["EmptyShallowRef",t=>Gn(t==="_"?void 0:t==="0n"?BigInt(0):ha(t))],["EmptyRef",t=>nt(t==="_"?void 0:t==="0n"?BigInt(0):ha(t))],["ShallowRef",t=>Gn(t)],["ShallowReactive",t=>Ln(t)],["Ref",t=>nt(t)],["Reactive",t=>Tr(t)]],OP=Wt({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[r,s]of kP)jw(r,s);Object.assign(t.payload,([e,n]=Si(()=>t.runWithContext(CP)),e=await e,n(),e)),window.__NUXT__=t.payload}});async function Md(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async s=>{const i=new Map,o=new Promise(m=>{t.resolveTags().then(y=>{m(y.map(b=>{const P=i.get(b._d)||0,O={tag:b,id:(P?`${b._d}:${P}`:b._d)||Hg(b),shouldRender:!0};return b._d&&Lw(b._d)&&i.set(b._d,P+1),O}))})});let a=t._dom;if(!a){a={title:n.title,elMap:new Map().set("htmlAttrs",n.documentElement).set("bodyAttrs",n.body)};for(const m of["body","head"]){const y=n[m]?.children;for(const b of y){const P=b.tagName.toLowerCase();if(!Bg.has(P))continue;const O=Mw({tag:P,props:{}},{innerHTML:b.innerHTML,...b.getAttributeNames().reduce((C,v)=>(C[v]=b.getAttribute(v),C),{})||{}});if(O.key=b.getAttribute("data-hid")||void 0,O._d=ch(O)||Hg(O),a.elMap.has(O._d)){let C=1,v=O._d;for(;a.elMap.has(v);)v=`${O._d}:${C++}`;a.elMap.set(v,b)}else a.elMap.set(O._d,b)}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function c(m,y,b){const P=`${m}:${y}`;a.sideEffects[P]=b,delete a.pendingSideEffects[P]}function u({id:m,$el:y,tag:b}){const P=b.tag.endsWith("Attrs");a.elMap.set(m,y),P||(b.textContent&&b.textContent!==y.textContent&&(y.textContent=b.textContent),b.innerHTML&&b.innerHTML!==y.innerHTML&&(y.innerHTML=b.innerHTML),c(m,"el",()=>{y?.remove(),a.elMap.delete(m)}));for(const O in b.props){if(!Object.prototype.hasOwnProperty.call(b.props,O))continue;const C=b.props[O];if(O.startsWith("on")&&typeof C=="function"){const I=y?.dataset;if(I&&I[`${O}fired`]){const D=O.slice(0,-5);C.call(y,new Event(D.substring(2)))}y.getAttribute(`data-${O}`)!==""&&((b.tag==="bodyAttrs"?n.defaultView:y).addEventListener(O.substring(2),C.bind(y)),y.setAttribute(`data-${O}`,""));continue}const v=`attr:${O}`;if(O==="class"){if(!C)continue;for(const I of C)P&&c(m,`${v}:${I}`,()=>y.classList.remove(I)),!y.classList.contains(I)&&y.classList.add(I)}else if(O==="style"){if(!C)continue;for(const[I,D]of C)c(m,`${v}:${I}`,()=>{y.style.removeProperty(I)}),y.style.setProperty(I,D)}else C!==!1&&C!==null&&(y.getAttribute(O)!==C&&y.setAttribute(O,C===!0?"":String(C)),P&&c(m,v,()=>y.removeAttribute(O)))}}const f=[],h={bodyClose:void 0,bodyOpen:void 0,head:void 0},p=await o;for(const m of p){const{tag:y,shouldRender:b,id:P}=m;if(b){if(y.tag==="title"){n.title=y.textContent,c("title","",()=>n.title=a.title);continue}m.$el=m.$el||a.elMap.get(P),m.$el?u(m):Bg.has(y.tag)&&f.push(m)}}for(const m of f){const y=m.tag.tagPosition||"head";m.$el=n.createElement(m.tag.tag),u(m),h[y]=h[y]||n.createDocumentFragment(),h[y].appendChild(m.$el)}for(const m of p)await t.hooks.callHook("dom:renderTag",m,n,c);h.head&&n.head.appendChild(h.head),h.bodyOpen&&n.body.insertBefore(h.bodyOpen,n.body.firstChild),h.bodyClose&&n.body.appendChild(h.bodyClose);for(const m in a.pendingSideEffects)a.pendingSideEffects[m]();t._dom=a,await t.hooks.callHook("dom:rendered",{renders:p}),s()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function NP(t={}){const e=t.domOptions?.render||Md;t.document=t.document||(typeof window<"u"?document:void 0);const n=t.document?.head.querySelector('script[id="unhead:payload"]')?.innerHTML||!1;return cP({...t,plugins:[...t.plugins||[],{key:"client",hooks:{"entries:updated":e}}],init:[n?JSON.parse(n):!1,...t.init||[]]})}function xP(t,e){let n=0;return()=>{const r=++n;e(()=>{n===r&&t()})}}function DP(t={}){const e=NP({domOptions:{render:xP(()=>Md(e),n=>setTimeout(n,0))},...t});return e.install=vP(e),e}const LP={disableDefaults:!0,disableCapoSorting:!1,plugins:[dP,pP,yP,hP]},MP=Wt({name:"nuxt:head",enforce:"pre",setup(t){const e=DP(LP);t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await Md(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const hi=typeof document<"u";function Bw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function VP(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Bw(t.default)}const De=Object.assign;function of(t,e){const n={};for(const r in e){const s=e[r];n[r]=Cn(s)?s.map(t):t(s)}return n}const zo=()=>{},Cn=Array.isArray,Hw=/#/g,FP=/&/g,UP=/\//g,$P=/=/g,jP=/\?/g,qw=/\+/g,BP=/%5B/g,HP=/%5D/g,zw=/%5E/g,qP=/%60/g,Ww=/%7B/g,zP=/%7C/g,Gw=/%7D/g,WP=/%20/g;function Vd(t){return encodeURI(""+t).replace(zP,"|").replace(BP,"[").replace(HP,"]")}function GP(t){return Vd(t).replace(Ww,"{").replace(Gw,"}").replace(zw,"^")}function hh(t){return Vd(t).replace(qw,"%2B").replace(WP,"+").replace(Hw,"%23").replace(FP,"%26").replace(qP,"`").replace(Ww,"{").replace(Gw,"}").replace(zw,"^")}function KP(t){return hh(t).replace($P,"%3D")}function YP(t){return Vd(t).replace(Hw,"%23").replace(jP,"%3F")}function QP(t){return t==null?"":YP(t).replace(UP,"%2F")}function da(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const JP=/\/$/,XP=t=>t.replace(JP,"");function af(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=nk(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:da(o)}}function ZP(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Jg(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ek(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&$i(e.matched[r],n.matched[s])&&Kw(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function $i(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Kw(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!tk(t[n],e[n]))return!1;return!0}function tk(t,e){return Cn(t)?Xg(t,e):Cn(e)?Xg(e,t):t===e}function Xg(t,e){return Cn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function nk(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const fn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var pa;(function(t){t.pop="pop",t.push="push"})(pa||(pa={}));var Wo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Wo||(Wo={}));function rk(t){if(!t)if(hi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),XP(t)}const sk=/^[^#]+#/;function ik(t,e){return t.replace(sk,"#")+e}function ok(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Qc=()=>({left:window.scrollX,top:window.scrollY});function ak(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=ok(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Zg(t,e){return(history.state?history.state.position-e:-1)+t}const dh=new Map;function lk(t,e){dh.set(t,e)}function ck(t){const e=dh.get(t);return dh.delete(t),e}let uk=()=>location.protocol+"//"+location.host;function Yw(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Jg(c,"")}return Jg(n,t)+r+s}function fk(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=Yw(t,location),y=n.value,b=e.value;let P=0;if(p){if(n.value=m,e.value=p,o&&o===y){o=null;return}P=b?p.position-b.position:0}else r(m);s.forEach(O=>{O(n.value,y,{delta:P,type:pa.pop,direction:P?P>0?Wo.forward:Wo.back:Wo.unknown})})};function c(){o=n.value}function u(p){s.push(p);const m=()=>{const y=s.indexOf(p);y>-1&&s.splice(y,1)};return i.push(m),m}function f(){const{history:p}=window;p.state&&p.replaceState(De({},p.state,{scroll:Qc()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:u,destroy:h}}function ey(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Qc():null}}function hk(t){const{history:e,location:n}=window,r={value:Yw(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:uk()+t+c;try{e[f?"replaceState":"pushState"](u,"",p),s.value=u}catch(m){console.error(m),n[f?"replace":"assign"](p)}}function o(c,u){const f=De({},e.state,ey(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,f,!0),r.value=c}function a(c,u){const f=De({},s.value,e.state,{forward:c,scroll:Qc()});i(f.current,f,!0);const h=De({},ey(r.value,c,null),{position:f.position+1},u);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function dk(t){t=rk(t);const e=hk(t),n=fk(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=De({location:"",base:t,go:r,createHref:ik.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function pk(t){return typeof t=="string"||t&&typeof t=="object"}function Qw(t){return typeof t=="string"||typeof t=="symbol"}const Jw=Symbol("");var ty;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ty||(ty={}));function ji(t,e){return De(new Error,{type:t,[Jw]:!0},e)}function rr(t,e){return t instanceof Error&&Jw in t&&(e==null||!!(t.type&e))}const ny="[^/]+?",mk={sensitive:!1,strict:!1,start:!0,end:!0},gk=/[.+*?^${}()[\]/\\]/g;function yk(t,e){const n=De({},mk,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const p=u[h];let m=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(gk,"\\$&"),m+=40;else if(p.type===1){const{value:y,repeatable:b,optional:P,regexp:O}=p;i.push({name:y,repeatable:b,optional:P});const C=O||ny;if(C!==ny){m+=10;try{new RegExp(`(${C})`)}catch(I){throw new Error(`Invalid custom RegExp for param "${y}" (${C}): `+I.message)}}let v=b?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;h||(v=P&&u.length<2?`(?:/${v})`:"/"+v),P&&(v+="?"),s+=v,m+=20,P&&(m+=-8),b&&(m+=-20),C===".*"&&(m+=-50)}f.push(m)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const f=u.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const m=f[p]||"",y=i[p-1];h[y.name]=m&&y.repeatable?m.split("/"):m}return h}function c(u){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const m of p)if(m.type===0)f+=m.value;else if(m.type===1){const{value:y,repeatable:b,optional:P}=m,O=y in u?u[y]:"";if(Cn(O)&&!b)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const C=Cn(O)?O.join("/"):O;if(!C)if(P)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);f+=C}}return f||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function _k(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Xw(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=_k(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ry(r))return 1;if(ry(s))return-1}return s.length-r.length}function ry(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const vk={type:0,value:""},Ek=/[a-zA-Z0-9_]/;function wk(t){if(!t)return[[]];if(t==="/")return[[vk]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",f="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Ek.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function bk(t,e,n){const r=yk(wk(t.path),n),s=De(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Tk(t,e){const n=[],r=new Map;e=ay({strict:!1,end:!0,sensitive:!1},e);function s(h){return r.get(h)}function i(h,p,m){const y=!m,b=iy(h);b.aliasOf=m&&m.record;const P=ay(e,h),O=[b];if("alias"in h){const I=typeof h.alias=="string"?[h.alias]:h.alias;for(const D of I)O.push(iy(De({},b,{components:m?m.record.components:b.components,path:D,aliasOf:m?m.record:b})))}let C,v;for(const I of O){const{path:D}=I;if(p&&D[0]!=="/"){const F=p.record.path,S=F[F.length-1]==="/"?"":"/";I.path=p.record.path+(D&&S+D)}if(C=bk(I,p,P),m?m.alias.push(C):(v=v||C,v!==C&&v.alias.push(C),y&&h.name&&!oy(C)&&o(h.name)),Zw(C)&&c(C),b.children){const F=b.children;for(let S=0;S<F.length;S++)i(F[S],C,m&&m.children[S])}m=m||C}return v?()=>{o(v)}:zo}function o(h){if(Qw(h)){const p=r.get(h);p&&(r.delete(h),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(h);p>-1&&(n.splice(p,1),h.record.name&&r.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function c(h){const p=Sk(h,n);n.splice(p,0,h),h.record.name&&!oy(h)&&r.set(h.record.name,h)}function u(h,p){let m,y={},b,P;if("name"in h&&h.name){if(m=r.get(h.name),!m)throw ji(1,{location:h});P=m.record.name,y=De(sy(p.params,m.keys.filter(v=>!v.optional).concat(m.parent?m.parent.keys.filter(v=>v.optional):[]).map(v=>v.name)),h.params&&sy(h.params,m.keys.map(v=>v.name))),b=m.stringify(y)}else if(h.path!=null)b=h.path,m=n.find(v=>v.re.test(b)),m&&(y=m.parse(b),P=m.record.name);else{if(m=p.name?r.get(p.name):n.find(v=>v.re.test(p.path)),!m)throw ji(1,{location:h,currentLocation:p});P=m.record.name,y=De({},p.params,h.params),b=m.stringify(y)}const O=[];let C=m;for(;C;)O.unshift(C.record),C=C.parent;return{name:P,path:b,params:y,matched:O,meta:Ik(O)}}t.forEach(h=>i(h));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:a,getRecordMatcher:s}}function sy(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function iy(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Ak(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Ak(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function oy(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Ik(t){return t.reduce((e,n)=>De(e,n.meta),{})}function ay(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Sk(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Xw(t,e[i])<0?r=i:n=i+1}const s=Rk(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Rk(t){let e=t;for(;e=e.parent;)if(Zw(e)&&Xw(t,e)===0)return e}function Zw({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Ck(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(qw," "),o=i.indexOf("="),a=da(o<0?i:i.slice(0,o)),c=o<0?null:da(i.slice(o+1));if(a in e){let u=e[a];Cn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function ly(t){let e="";for(let n in t){const r=t[n];if(n=KP(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Cn(r)?r.map(i=>i&&hh(i)):[r&&hh(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Pk(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Cn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const kk=Symbol(""),cy=Symbol(""),Fd=Symbol(""),Ud=Symbol(""),ph=Symbol("");function So(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ur(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const u=p=>{p===!1?c(ji(4,{from:n,to:e})):p instanceof Error?c(p):pk(p)?c(ji(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let h=Promise.resolve(f);t.length<3&&(h=h.then(u)),h.catch(p=>c(p))})}function lf(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Bw(c)){const f=(c.__vccOpts||c)[e];f&&i.push(Ur(f,n,r,o,a,s))}else{let u=c();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=VP(f)?f.default:f;o.mods[a]=f,o.components[a]=h;const m=(h.__vccOpts||h)[e];return m&&Ur(m,n,r,o,a,s)()}))}}return i}function uy(t){const e=mt(Fd),n=mt(Ud),r=Se(()=>{const c=lt(t.to);return e.resolve(c)}),s=Se(()=>{const{matched:c}=r.value,{length:u}=c,f=c[u-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex($i.bind(null,f));if(p>-1)return p;const m=fy(c[u-2]);return u>1&&fy(f)===m&&h[h.length-1].path!==m?h.findIndex($i.bind(null,c[u-2])):p}),i=Se(()=>s.value>-1&&Lk(n.params,r.value.params)),o=Se(()=>s.value>-1&&s.value===n.matched.length-1&&Kw(n.params,r.value.params));function a(c={}){if(Dk(c)){const u=e[lt(t.replace)?"replace":"push"](lt(t.to)).catch(zo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Se(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function Ok(t){return t.length===1?t[0]:t}const Nk=yn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:uy,setup(t,{slots:e}){const n=Tr(uy(t)),{options:r}=mt(Fd),s=Se(()=>({[hy(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[hy(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Ok(e.default(n));return t.custom?i:Ge("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),xk=Nk;function Dk(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Lk(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Cn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function fy(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const hy=(t,e,n)=>t??e??n,Mk=yn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=mt(ph),s=Se(()=>t.route||r.value),i=mt(cy,0),o=Se(()=>{let u=lt(i);const{matched:f}=s.value;let h;for(;(h=f[u])&&!h.components;)u++;return u}),a=Se(()=>s.value.matched[o.value]);Qr(cy,Se(()=>o.value+1)),Qr(kk,a),Qr(ph,s);const c=nt();return $n(()=>[c.value,a.value,t.name],([u,f,h],[p,m,y])=>{f&&(f.instances[h]=u,m&&m!==f&&u&&u===p&&(f.leaveGuards.size||(f.leaveGuards=m.leaveGuards),f.updateGuards.size||(f.updateGuards=m.updateGuards))),u&&f&&(!m||!$i(f,m)||!p)&&(f.enterCallbacks[h]||[]).forEach(b=>b(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,h=a.value,p=h&&h.components[f];if(!p)return dy(n.default,{Component:p,route:u});const m=h.props[f],y=m?m===!0?u.params:typeof m=="function"?m(u):m:null,P=Ge(p,De({},y,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(h.instances[f]=null)},ref:c}));return dy(n.default,{Component:P,route:u})||P}}});function dy(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const eb=Mk;function Vk(t){const e=Tk(t.routes,t),n=t.parseQuery||Ck,r=t.stringifyQuery||ly,s=t.history,i=So(),o=So(),a=So(),c=Gn(fn);let u=fn;hi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=of.bind(null,j=>""+j),h=of.bind(null,QP),p=of.bind(null,da);function m(j,te){let Z,se;return Qw(j)?(Z=e.getRecordMatcher(j),se=te):se=j,e.addRoute(se,Z)}function y(j){const te=e.getRecordMatcher(j);te&&e.removeRoute(te)}function b(){return e.getRoutes().map(j=>j.record)}function P(j){return!!e.getRecordMatcher(j)}function O(j,te){if(te=De({},te||c.value),typeof j=="string"){const x=af(n,j,te.path),M=e.resolve({path:x.path},te),H=s.createHref(x.fullPath);return De(x,M,{params:p(M.params),hash:da(x.hash),redirectedFrom:void 0,href:H})}let Z;if(j.path!=null)Z=De({},j,{path:af(n,j.path,te.path).path});else{const x=De({},j.params);for(const M in x)x[M]==null&&delete x[M];Z=De({},j,{params:h(x)}),te.params=h(te.params)}const se=e.resolve(Z,te),Ae=j.hash||"";se.params=f(p(se.params));const Ve=ZP(r,De({},j,{hash:GP(Ae),path:se.path})),R=s.createHref(Ve);return De({fullPath:Ve,hash:Ae,query:r===ly?Pk(j.query):j.query||{}},se,{redirectedFrom:void 0,href:R})}function C(j){return typeof j=="string"?af(n,j,c.value.path):De({},j)}function v(j,te){if(u!==j)return ji(8,{from:te,to:j})}function I(j){return S(j)}function D(j){return I(De(C(j),{replace:!0}))}function F(j){const te=j.matched[j.matched.length-1];if(te&&te.redirect){const{redirect:Z}=te;let se=typeof Z=="function"?Z(j):Z;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=C(se):{path:se},se.params={}),De({query:j.query,hash:j.hash,params:se.path!=null?{}:j.params},se)}}function S(j,te){const Z=u=O(j),se=c.value,Ae=j.state,Ve=j.force,R=j.replace===!0,x=F(Z);if(x)return S(De(C(x),{state:typeof x=="object"?De({},Ae,x.state):Ae,force:Ve,replace:R}),te||Z);const M=Z;M.redirectedFrom=te;let H;return!Ve&&ek(r,se,Z)&&(H=ji(16,{to:M,from:se}),ln(se,se,!0,!1)),(H?Promise.resolve(H):T(M,se)).catch($=>rr($)?rr($,2)?$:_n($):re($,M,se)).then($=>{if($){if(rr($,2))return S(De({replace:R},C($.to),{state:typeof $.to=="object"?De({},Ae,$.to.state):Ae,force:Ve}),te||M)}else $=k(M,se,!0,R,Ae);return N(M,se,$),$})}function E(j,te){const Z=v(j,te);return Z?Promise.reject(Z):Promise.resolve()}function _(j){const te=Sr.values().next().value;return te&&typeof te.runWithContext=="function"?te.runWithContext(j):j()}function T(j,te){let Z;const[se,Ae,Ve]=Fk(j,te);Z=lf(se.reverse(),"beforeRouteLeave",j,te);for(const x of se)x.leaveGuards.forEach(M=>{Z.push(Ur(M,j,te))});const R=E.bind(null,j,te);return Z.push(R),Gt(Z).then(()=>{Z=[];for(const x of i.list())Z.push(Ur(x,j,te));return Z.push(R),Gt(Z)}).then(()=>{Z=lf(Ae,"beforeRouteUpdate",j,te);for(const x of Ae)x.updateGuards.forEach(M=>{Z.push(Ur(M,j,te))});return Z.push(R),Gt(Z)}).then(()=>{Z=[];for(const x of Ve)if(x.beforeEnter)if(Cn(x.beforeEnter))for(const M of x.beforeEnter)Z.push(Ur(M,j,te));else Z.push(Ur(x.beforeEnter,j,te));return Z.push(R),Gt(Z)}).then(()=>(j.matched.forEach(x=>x.enterCallbacks={}),Z=lf(Ve,"beforeRouteEnter",j,te,_),Z.push(R),Gt(Z))).then(()=>{Z=[];for(const x of o.list())Z.push(Ur(x,j,te));return Z.push(R),Gt(Z)}).catch(x=>rr(x,8)?x:Promise.reject(x))}function N(j,te,Z){a.list().forEach(se=>_(()=>se(j,te,Z)))}function k(j,te,Z,se,Ae){const Ve=v(j,te);if(Ve)return Ve;const R=te===fn,x=hi?history.state:{};Z&&(se||R?s.replace(j.fullPath,De({scroll:R&&x&&x.scroll},Ae)):s.push(j.fullPath,Ae)),c.value=j,ln(j,te,Z,R),_n()}let A;function ge(){A||(A=s.listen((j,te,Z)=>{if(!On.listening)return;const se=O(j),Ae=F(se);if(Ae){S(De(Ae,{replace:!0,force:!0}),se).catch(zo);return}u=se;const Ve=c.value;hi&&lk(Zg(Ve.fullPath,Z.delta),Qc()),T(se,Ve).catch(R=>rr(R,12)?R:rr(R,2)?(S(De(C(R.to),{force:!0}),se).then(x=>{rr(x,20)&&!Z.delta&&Z.type===pa.pop&&s.go(-1,!1)}).catch(zo),Promise.reject()):(Z.delta&&s.go(-Z.delta,!1),re(R,se,Ve))).then(R=>{R=R||k(se,Ve,!1),R&&(Z.delta&&!rr(R,8)?s.go(-Z.delta,!1):Z.type===pa.pop&&rr(R,20)&&s.go(-1,!1)),N(se,Ve,R)}).catch(zo)}))}let Ee=So(),ee=So(),ie;function re(j,te,Z){_n(j);const se=ee.list();return se.length?se.forEach(Ae=>Ae(j,te,Z)):console.error(j),Promise.reject(j)}function Be(){return ie&&c.value!==fn?Promise.resolve():new Promise((j,te)=>{Ee.add([j,te])})}function _n(j){return ie||(ie=!j,ge(),Ee.list().forEach(([te,Z])=>j?Z(j):te()),Ee.reset()),j}function ln(j,te,Z,se){const{scrollBehavior:Ae}=t;if(!hi||!Ae)return Promise.resolve();const Ve=!Z&&ck(Zg(j.fullPath,0))||(se||!Z)&&history.state&&history.state.scroll||null;return Kn().then(()=>Ae(j,te,Ve)).then(R=>R&&ak(R)).catch(R=>re(R,j,te))}const Xe=j=>s.go(j);let Ze;const Sr=new Set,On={currentRoute:c,listening:!0,addRoute:m,removeRoute:y,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:b,resolve:O,options:t,push:I,replace:D,go:Xe,back:()=>Xe(-1),forward:()=>Xe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ee.add,isReady:Be,install(j){const te=this;j.component("RouterLink",xk),j.component("RouterView",eb),j.config.globalProperties.$router=te,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>lt(c)}),hi&&!Ze&&c.value===fn&&(Ze=!0,I(s.location).catch(Ae=>{}));const Z={};for(const Ae in fn)Object.defineProperty(Z,Ae,{get:()=>c.value[Ae],enumerable:!0});j.provide(Fd,te),j.provide(Ud,Ln(Z)),j.provide(ph,c);const se=j.unmount;Sr.add(j),j.unmount=function(){Sr.delete(j),Sr.size<1&&(u=fn,A&&A(),A=null,c.value=fn,Ze=!1,ie=!1),se()}}};function Gt(j){return j.reduce((te,Z)=>te.then(()=>_(Z)),Promise.resolve())}return On}function Fk(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>$i(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>$i(u,c))||s.push(c))}return[n,r,s]}function tb(t){return mt(Ud)}const Uk=/(:\w+)\([^)]+\)/g,$k=/(:\w+)[?+*]/g,jk=/:\w+/g,Bk=(t,e)=>e.path.replace(Uk,"$1").replace($k,"$1").replace(jk,n=>t.params[n.slice(1)]?.toString()||""),mh=(t,e)=>{const n=t.route.matched.find(s=>s.components?.default===t.Component.type),r=e??n?.meta.key??(n&&Bk(t.route,n));return typeof r=="function"?r(t.route):r},Hk=(t,e)=>({default:()=>t?Ge(R1,t===!0?{}:t,e):e});function $d(t){return Array.isArray(t)?t:[t]}const cf=[{name:"Bio",path:"/Bio",component:()=>Ce(()=>import("./DXRuHb9K.js"),__vite__mapDeps([0,1]),import.meta.url)},{name:"index",path:"/",component:()=>Ce(()=>import("./C57wmf0d.js"),__vite__mapDeps([2,3]),import.meta.url)},{name:"Login",path:"/Login",component:()=>Ce(()=>import("./D2DJ6yJ7.js"),__vite__mapDeps([4,5,6]),import.meta.url)},{name:"Stuff",path:"/Stuff",component:()=>Ce(()=>import("./BL164NOX.js"),__vite__mapDeps([7,8,9]),import.meta.url)},{name:"Terms",path:"/Terms",component:()=>Ce(()=>import("./Ckz-fFUy.js"),[],import.meta.url)},{name:"Contact",path:"/Contact",component:()=>Ce(()=>import("./0xCGIh_I.js"),__vite__mapDeps([10,11]),import.meta.url)},{name:"Privacy",path:"/Privacy",component:()=>Ce(()=>import("./C6oJNVWE.js"),[],import.meta.url)},{name:"Admin-Bio",path:"/Admin/Bio",component:()=>Ce(()=>import("./CcXDQBTs.js"),__vite__mapDeps([12,0,1]),import.meta.url)},{name:"Admin-Home",path:"/Admin/Home",meta:{middleware:"auth"},component:()=>Ce(()=>import("./Bgm44Z4w.js"),__vite__mapDeps([13,14]),import.meta.url)},{name:"Admin",path:"/Admin",meta:{middleware:"auth"},component:()=>Ce(()=>import("./CpcvAPpO.js"),__vite__mapDeps([15,16]),import.meta.url)},{name:"Admin-Stuff",path:"/Admin/Stuff",component:()=>Ce(()=>import("./tt2m_BE7.js"),[],import.meta.url)},{name:"Admin-Users",path:"/Admin/Users",component:()=>Ce(()=>import("./BEfjvpEG.js"),__vite__mapDeps([17,18]),import.meta.url)},{name:"Admin-Contact",path:"/Admin/Contact",component:()=>Ce(()=>import("./DnvMzra3.js"),[],import.meta.url)},{name:"Admin-ForSale",path:"/Admin/ForSale",component:()=>Ce(()=>import("./B56bZoOx.js"),[],import.meta.url)},{name:"ForSale",path:"/ForSale",component:()=>Ce(()=>import("./Di3KLCoW.js"),__vite__mapDeps([19,20]),import.meta.url)},{name:"ForSale-Stuff",path:"/ForSale/Stuff",component:()=>Ce(()=>import("./Cb4CQl-D.js"),[],import.meta.url)},{name:"ForSale-Clocks",path:"/ForSale/Clocks",component:()=>Ce(()=>import("./PL5YCUQM.js"),__vite__mapDeps([21,8,9,22]),import.meta.url)},{name:"Portfolio-Film",path:"/Portfolio/Film",component:()=>Ce(()=>import("./C6PPux7_.js"),__vite__mapDeps([23,24,8,9,25]),import.meta.url)},{name:"Portfolio",path:"/Portfolio",component:()=>Ce(()=>import("./Lc0X6M1q.js"),__vite__mapDeps([26,27]),import.meta.url)},{name:"Portfolio-Truck",path:"/Portfolio/Truck",component:()=>Ce(()=>import("./CXo2I6FG.js"),__vite__mapDeps([28,8,9]),import.meta.url)},{name:"Portfolio-Clocks",path:"/Portfolio/Clocks",component:()=>Ce(()=>import("./CK3CTZV7.js"),__vite__mapDeps([29,8,9,30]),import.meta.url)},{name:"Portfolio-Videos",path:"/Portfolio/Videos",component:()=>Ce(()=>import("./SKraRC9d.js"),__vite__mapDeps([31,5,32]),import.meta.url)},{name:"ForSale-Memorabilia",path:"/ForSale/Memorabilia",component:()=>Ce(()=>import("./Qpa2HU1k.js"),__vite__mapDeps([33,8,9]),import.meta.url)},{name:"Portfolio-Machinery",path:"/Portfolio/Machinery",component:()=>Ce(()=>import("./DDY2MG3H.js"),__vite__mapDeps([34,8,9]),import.meta.url)},{name:"Admin-Portfolio-Film",path:"/Admin/Portfolio/Film",meta:{middleware:"auth"},component:()=>Ce(()=>import("./BQR2tly5.js"),__vite__mapDeps([35,24,14,23,8,9,25,36]),import.meta.url)},{name:"Admin-Portfolio",path:"/Admin/Portfolio",component:()=>Ce(()=>import("./1hF7roZQ.js"),[],import.meta.url)},{name:"Admin-Portfolio-Truck",path:"/Admin/Portfolio/Truck",component:()=>Ce(()=>import("./Ckj2_f7Z.js"),[],import.meta.url)},{name:"Portfolio-Celebrities",path:"/Portfolio/Celebrities",component:()=>Ce(()=>import("./CPQ_kh9h.js"),__vite__mapDeps([37,8,9,38]),import.meta.url)},{name:"Admin-Portfolio-Celebs",path:"/Admin/Portfolio/Celebs",component:()=>Ce(()=>import("./DJjZSBZx.js"),[],import.meta.url)},{name:"Admin-Portfolio-Clocks",path:"/Admin/Portfolio/Clocks",component:()=>Ce(()=>import("./9JejiFWy.js"),[],import.meta.url)},{name:"Admin-Portfolio-Videos",path:"/Admin/Portfolio/Videos",component:()=>Ce(()=>import("./BaeAXdDr.js"),[],import.meta.url)},{name:"Admin-Portfolio-Machinery",path:"/Admin/Portfolio/Machinery",component:()=>Ce(()=>import("./U5U-502t.js"),[],import.meta.url)}],nb=(t,e)=>({default:()=>t?Ge(NS,t===!0?{}:t,e):e.default?.()}),qk=/(:\w+)\([^)]+\)/g,zk=/(:\w+)[?+*]/g,Wk=/:\w+/g;function py(t){const e=t?.meta.key??t.path.replace(qk,"$1").replace(zk,"$1").replace(Wk,n=>t.params[n.slice(1)]?.toString()||"");return typeof e=="function"?e(t):e}function Gk(t,e){return t===e||e===fn?!1:py(t)!==py(e)?!0:!t.matched.every((r,s)=>r.components&&r.components.default===e.matched[s]?.components?.default)}function Kk(t,e=!1){if(t){if(t.nodeName==="#comment"&&t.nodeValue==="[")return rb(t,[],e);if(e){const n=t.cloneNode(!0);return n.querySelectorAll("[data-island-slot]").forEach(r=>{r.innerHTML=""}),[n.outerHTML]}return[t.outerHTML]}}function rb(t,e=[],n=!1){if(t&&t.nodeName){if(Qk(t))return e;if(!Yk(t)){const r=t.cloneNode(!0);n&&r.querySelectorAll?.("[data-island-slot]").forEach(s=>{s.innerHTML=""}),e.push(r.outerHTML)}rb(t.nextSibling,e,n)}return e}function uf(t,e){const n=t?Kk(t):[e];return n?gS(n.join(""),n.length):Ge("div")}function Yk(t){return t.nodeName==="#comment"&&t.nodeValue==="["}function Qk(t){return t.nodeName==="#comment"&&t.nodeValue==="]"}const Jk={scrollBehavior(t,e,n){const r=xe(),s=St().options?.scrollBehaviorType??"auto";if(t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:sb(t.hash),behavior:s}:!1;if((typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop)===!1)return!1;const o=r._runningTransition?"page:transition:finish":"page:loading:end";return new Promise(a=>{if(e===fn){a(my(t,e,n,s));return}r.hooks.hookOnce(o,()=>{requestAnimationFrame(()=>a(my(t,e,n,s)))})})}};function sb(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}function my(t,e,n,r){if(n)return n;const s=Gk(t,e);return t.hash?{el:t.hash,top:sb(t.hash),behavior:s?r:"instant"}:{left:0,top:0}}const Xk={hashMode:!1,scrollBehaviorType:"auto"},Nr={...Xk,...Jk},Zk=async(t,e)=>{let n,r;if(!t.meta?.validate)return;const s=([n,r]=Si(()=>Promise.resolve(t.meta.validate(t))),n=await n,r(),n);if(s===!0)return;const i=xs({fatal:!0,statusCode:s&&s.statusCode||404,statusMessage:s&&s.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}});return typeof window<"u"&&window.history.pushState({},"",e.fullPath),i},eO=async t=>{let e,n;const r=([e,n]=Si(()=>Ld({path:t.path})),e=await e,n(),e);if(r.redirect)return Jn(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},tO=[Zk,eO],gh={auth:()=>Ce(()=>import("./DA74zBV2.js"),[],import.meta.url)};function nO(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let f=i.slice(u);return f[0]!=="/"&&(f="/"+f),Pg(f,"")}const a=Pg(r,t),c=!n||xR(a,n)?a:n;return c+(c.includes("?")?"":s)+i}const rO=Wt({name:"nuxt:router",enforce:"pre",async setup(t){let e,n,r=Ks().app.baseURL;const s=Nr.history?.(r)??dk(r),i=Nr.routes?([e,n]=Si(()=>Nr.routes(cf)),e=await e,n(),e??cf):cf;let o;const a=Vk({...Nr,scrollBehavior:(P,O,C)=>{if(O===fn){o=C;return}if(Nr.scrollBehavior){if(a.options.scrollBehavior=Nr.scrollBehavior,"scrollRestoration"in window.history){const v=a.beforeEach(()=>{v(),window.history.scrollRestoration="manual"})}return Nr.scrollBehavior(P,fn,o||C)}},history:s,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const c=Gn(a.currentRoute.value);a.afterEach((P,O)=>{c.value=O}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>c.value});const u=nO(r,window.location,t.payload.path),f=Gn(a.currentRoute.value),h=()=>{f.value=a.currentRoute.value};t.hook("page:finish",h),a.afterEach((P,O)=>{P.matched[0]?.components?.default===O.matched[0]?.components?.default&&h()});const p={};for(const P in f.value)Object.defineProperty(p,P,{get:()=>f.value[P],enumerable:!0});t._route=Ln(p),t._middleware||={global:[],named:{}};const m=Kc();a.afterEach(async(P,O,C)=>{delete t._processingMiddleware,!t.isHydrating&&m.value&&await t.runWithContext(Cw),C&&await t.callHook("page:loading:end")});try{[e,n]=Si(()=>a.isReady()),await e,n()}catch(P){[e,n]=Si(()=>t.runWithContext(()=>Is(P))),await e,n()}const y=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;h();const b=t.payload.state._layout;return a.beforeEach(async(P,O)=>{await t.callHook("page:loading:start"),P.meta=Tr(P.meta),t.isHydrating&&b&&!gr(P.meta.layout)&&(P.meta.layout=b),t._processingMiddleware=!0;{const C=new Set([...tO,...t._middleware.global]);for(const v of P.matched){const I=v.meta.middleware;if(I)for(const D of $d(I))C.add(D)}{const v=await t.runWithContext(()=>Ld({path:P.path}));if(v.appMiddleware)for(const I in v.appMiddleware)v.appMiddleware[I]?C.add(I):C.delete(I)}for(const v of C){const I=typeof v=="string"?t._middleware.named[v]||await gh[v]?.().then(D=>D.default||D):v;if(!I)throw new Error(`Unknown route middleware: '${v}'.`);try{const D=await t.runWithContext(()=>I(P,O));if(!t.payload.serverRendered&&t.isHydrating&&(D===!1||D instanceof Error)){const F=D||xs({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>Is(F)),!1}if(D===!0)continue;if(D===!1)return D;if(D)return Pw(D)&&D.fatal&&await t.runWithContext(()=>Is(D)),D}catch(D){const F=xs(D);return F.fatal&&await t.runWithContext(()=>Is(F)),F}}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),a.afterEach(async(P,O)=>{P.matched.length===0&&await t.runWithContext(()=>Is(xs({statusCode:404,fatal:!1,statusMessage:`Page not found: ${P.fullPath}`,data:{path:P.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in y&&(y.name=void 0),await a.replace({...y,force:!0}),a.options.scrollBehavior=Nr.scrollBehavior}catch(P){await t.runWithContext(()=>Is(P))}}),{provide:{router:a}}}});function gy(t){return typeof t=="string"?`'${t}'`:new sO().serialize(t)}const sO=function(){class t{#e=new Map;compare(n,r){const s=typeof n,i=typeof r;return s==="string"&&i==="string"?n.localeCompare(r):s==="number"&&i==="number"?n-r:String.prototype.localeCompare.call(this.serialize(n,!0),this.serialize(r,!0))}serialize(n,r){if(n===null)return"null";switch(typeof n){case"string":return r?n:`'${n}'`;case"bigint":return`${n}n`;case"object":return this.$object(n);case"function":return this.$function(n)}return String(n)}serializeObject(n){const r=Object.prototype.toString.call(n);if(r!=="[object Object]")return this.serializeBuiltInType(r.length<10?`unknown:${r}`:r.slice(8,-1),n);const s=n.constructor,i=s===Object||s===void 0?"":s.name;if(i!==""&&globalThis[i]===s)return this.serializeBuiltInType(i,n);if(typeof n.toJSON=="function"){const o=n.toJSON();return i+(o!==null&&typeof o=="object"?this.$object(o):`(${this.serialize(o)})`)}return this.serializeObjectEntries(i,Object.entries(n))}serializeBuiltInType(n,r){const s=this["$"+n];if(s)return s.call(this,r);if(typeof r?.entries=="function")return this.serializeObjectEntries(n,r.entries());throw new Error(`Cannot serialize ${n}`)}serializeObjectEntries(n,r){const s=Array.from(r).sort((o,a)=>this.compare(o[0],a[0]));let i=`${n}{`;for(let o=0;o<s.length;o++){const[a,c]=s[o];i+=`${this.serialize(a,!0)}:${this.serialize(c)}`,o<s.length-1&&(i+=",")}return i+"}"}$object(n){let r=this.#e.get(n);return r===void 0&&(this.#e.set(n,`#${this.#e.size}`),r=this.serializeObject(n),this.#e.set(n,r)),r}$function(n){const r=Function.prototype.toString.call(n);return r.slice(-15)==="[native code] }"?`${n.name||""}()[native]`:`${n.name}(${n.length})${r.replace(/\s*\n\s*/g,"")}`}$Array(n){let r="[";for(let s=0;s<n.length;s++)r+=this.serialize(n[s]),s<n.length-1&&(r+=",");return r+"]"}$Date(n){try{return`Date(${n.toISOString()})`}catch{return"Date(null)"}}$ArrayBuffer(n){return`ArrayBuffer[${new Uint8Array(n).join(",")}]`}$Set(n){return`Set${this.$Array(Array.from(n).sort((r,s)=>this.compare(r,s)))}`}$Map(n){return this.serializeObjectEntries("Map",n.entries())}}for(const e of["Error","RegExp","URL"])t.prototype["$"+e]=function(n){return`${e}(${n})`};for(const e of["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"])t.prototype["$"+e]=function(n){return`${e}[${n.join(",")}]`};for(const e of["BigInt64Array","BigUint64Array"])t.prototype["$"+e]=function(n){return`${e}[${n.join("n,")}${n.length>0?"n":""}]`};return t}();function iO(t,e){return t===e||gy(t)===gy(e)}const Tl="<div></div>",ff=new WeakMap;function oO(t){if(ff.has(t))return ff.get(t);const e={...t};return e.render?e.render=(n,r,s,i,o,a)=>{if(i.mounted$??n.mounted$){const c=t.render?.bind(n)(n,r,s,i,o,a);return c.children===null||typeof c.children=="string"?pn(c):Ge(c)}return uf(n._.vnode.el,Tl)}:e.template&&=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else>${Tl}</template>
    `,e.setup=(n,r)=>{const s=xe(),i=Gn(s.isHydrating===!1),o=Gs();if(s.isHydrating){const c={...o.attrs},u=aO(o);for(const f in c)delete o.attrs[f];Li(()=>{Object.assign(o.attrs,c),o.vnode.dirs=u})}Li(()=>{i.value=!0});const a=t.setup?.(n,r)||{};return ud(a)?Promise.resolve(a).then(c=>typeof c!="function"?(c||={},c.mounted$=i,c):(...u)=>{if(i.value||!s.isHydrating){const f=c(...u);return f.children===null||typeof f.children=="string"?pn(f):Ge(f)}return uf(o?.vnode.el,Tl)}):typeof a=="function"?(...c)=>{if(i.value){const u=a(...c),f=e.inheritAttrs!==!1?r.attrs:void 0;return u.children===null||typeof u.children=="string"?pn(u,f):Ge(u,f)}return uf(o?.vnode.el,Tl)}:Object.assign(a,{mounted$:i})},ff.set(t,e),e}function aO(t){if(!t||!t.vnode.dirs)return null;const e=t.vnode.dirs;return t.vnode.dirs=null,e}const yh=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),lO=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),Jc=t=>{const e=xe();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{yh(()=>t())}):yh(()=>t())},cO="$s";function uO(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,r]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(r!==void 0&&typeof r!="function")throw new Error("[nuxt] [useState] init must be a function: "+r);const s=cO+n,i=xe(),o=bd(i.payload.state,s);if(o.value===void 0&&r){const a=r();if(Ye(a))return i.payload.state[s]=a,a;o.value=a}return o}function fO(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");const n={},r=e||{},s=r.decode||hO;let i=0;for(;i<t.length;){const o=t.indexOf("=",i);if(o===-1)break;let a=t.indexOf(";",i);if(a===-1)a=t.length;else if(a<o){i=t.lastIndexOf(";",o-1)+1;continue}const c=t.slice(i,o).trim();if(r?.filter&&!r?.filter(c)){i=a+1;continue}if(n[c]===void 0){let u=t.slice(o+1,a).trim();u.codePointAt(0)===34&&(u=u.slice(1,-1)),n[c]=dO(u,s)}i=a+1}return n}function hO(t){return t.includes("%")?decodeURIComponent(t):t}function dO(t,e){try{return e(t)}catch{return t}}const Al=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function yy(t,e,n){const r=n||{},s=r.encode||encodeURIComponent;if(typeof s!="function")throw new TypeError("option encode is invalid");if(!Al.test(t))throw new TypeError("argument name is invalid");const i=s(e);if(i&&!Al.test(i))throw new TypeError("argument val is invalid");let o=t+"="+i;if(r.maxAge!==void 0&&r.maxAge!==null){const a=r.maxAge-0;if(Number.isNaN(a)||!Number.isFinite(a))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(a)}if(r.domain){if(!Al.test(r.domain))throw new TypeError("option domain is invalid");o+="; Domain="+r.domain}if(r.path){if(!Al.test(r.path))throw new TypeError("option path is invalid");o+="; Path="+r.path}if(r.expires){if(!pO(r.expires)||Number.isNaN(r.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.priority)switch(typeof r.priority=="string"?r.priority.toLowerCase():r.priority){case"low":{o+="; Priority=Low";break}case"medium":{o+="; Priority=Medium";break}case"high":{o+="; Priority=High";break}default:throw new TypeError("option priority is invalid")}if(r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:{o+="; SameSite=Strict";break}case"lax":{o+="; SameSite=Lax";break}case"strict":{o+="; SameSite=Strict";break}case"none":{o+="; SameSite=None";break}default:throw new TypeError("option sameSite is invalid")}return r.partitioned&&(o+="; Partitioned"),o}function pO(t){return Object.prototype.toString.call(t)==="[object Date]"||t instanceof Date}function En(t){if(typeof t!="object")return t;var e,n,r=Object.prototype.toString.call(t);if(r==="[object Object]"){if(t.constructor!==Object&&typeof t.constructor=="function"){n=new t.constructor;for(e in t)t.hasOwnProperty(e)&&n[e]!==t[e]&&(n[e]=En(t[e]))}else{n={};for(e in t)e==="__proto__"?Object.defineProperty(n,e,{value:En(t[e]),configurable:!0,enumerable:!0,writable:!0}):n[e]=En(t[e])}return n}if(r==="[object Array]"){for(e=t.length,n=Array(e);e--;)n[e]=En(t[e]);return n}return r==="[object Set]"?(n=new Set,t.forEach(function(s){n.add(En(s))}),n):r==="[object Map]"?(n=new Map,t.forEach(function(s,i){n.set(En(i),En(s))}),n):r==="[object Date]"?new Date(+t):r==="[object RegExp]"?(n=new RegExp(t.source,t.flags),n.lastIndex=t.lastIndex,n):r==="[object DataView]"?new t.constructor(En(t.buffer)):r==="[object ArrayBuffer]"?t.slice(0):r.slice(-6)==="Array]"?new t.constructor(t):t}const mO={path:"/",watch:!0,decode:t=>ha(decodeURIComponent(t)),encode:t=>encodeURIComponent(typeof t=="string"?t:JSON.stringify(t))},Il=window.cookieStore;function ib(t,e){const n={...mO,...e};n.filter??=u=>u===t;const r=_y(n)||{};let s;n.maxAge!==void 0?s=n.maxAge*1e3:n.expires&&(s=n.expires.getTime()-Date.now());const i=s!==void 0&&s<=0,o=i||r[t]===void 0||r[t]===null,a=En(i?void 0:r[t]??n.default?.()),c=s&&!i?_O(a,s,n.watch&&n.watch!=="shallow"):nt(a);{let u=null;try{!Il&&typeof BroadcastChannel<"u"&&(u=new BroadcastChannel(`nuxt:cookies:${t}`))}catch{}const f=(y=!1)=>{!y&&(n.readonly||iO(c.value,r[t]))||(yO(t,c.value,n),r[t]=En(c.value),u?.postMessage({value:n.encode(c.value)}))},h=y=>{const b=y.refresh?_y(n)?.[t]:n.decode(y.value);p=!0,c.value=b,r[t]=En(b),Kn(()=>{p=!1})};let p=!1;const m=!!Xi();if(m&&ra(()=>{p=!0,f(),u?.close()}),Il){const y=b=>{const P=b.changed.find(C=>C.name===t),O=b.deleted.find(C=>C.name===t);P&&h({value:P.value}),O&&h({value:null})};Il.addEventListener("change",y),m&&ra(()=>Il.removeEventListener("change",y))}else u&&(u.onmessage=({data:y})=>h(y));n.watch&&$n(c,()=>{p||f()},{deep:n.watch!=="shallow"}),o&&f(o)}return c}function _y(t={}){return fO(document.cookie,t)}function gO(t,e,n={}){return e==null?yy(t,e,{...n,maxAge:-1}):yy(t,e,n)}function yO(t,e,n={}){document.cookie=gO(t,e,n)}const vy=2147483647;function _O(t,e,n){let r,s,i=0;const o=n?nt(t):{value:t};return Xi()&&ra(()=>{s?.(),clearTimeout(r)}),o1((a,c)=>{n&&(s=$n(o,c));function u(){i=0,clearTimeout(r);const f=e-i,h=f<vy?f:vy;r=setTimeout(()=>{if(i+=h,i<e)return u();o.value=void 0,c()},h)}return{get(){return a(),o.value},set(f){u(),o.value=f,c()}}})}function vO(t){if(t?.__asyncLoader&&!t.__asyncResolved)return t.__asyncLoader()}async function ob(t,e=St()){const{path:n,matched:r}=e.resolve(t);if(!r.length||(e._routePreloaded||=new Set,e._routePreloaded.has(n)))return;const s=e._preloadPromises||=[];if(s.length>4)return Promise.all(s).then(()=>ob(t,e));e._routePreloaded.add(n);const i=r.map(o=>o.components?.default).filter(o=>typeof o=="function");for(const o of i){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>s.splice(s.indexOf(a)));s.push(a)}await Promise.all(s)}function EO(t={}){const e=t.path||window.location.pathname;let n={};try{n=ha(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||n?.path!==e||n?.expires<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:xe().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}function wO(t={}){const e=Gn(""),n=Gn(t.politeness||"polite"),r=Vw();function s(u="",f="polite"){e.value=u,n.value=f}function i(u){return s(u,"polite")}function o(u){return s(u,"assertive")}function a(){s(document?.title?.trim(),n.value)}function c(){r?.hooks?.removeHook("dom:rendered",a)}return a(),r?.hooks?.hook("dom:rendered",()=>{a()}),{_cleanup:c,message:e,politeness:n,set:s,polite:i,assertive:o}}function bO(t={}){const e=xe(),n=e._routeAnnouncer||=wO(t);return t.politeness!==n.politeness.value&&(n.politeness.value=t.politeness||"polite"),Xi()&&(e._routeAnnouncerDeps||=0,e._routeAnnouncerDeps++,ra(()=>{e._routeAnnouncerDeps--,e._routeAnnouncerDeps===0&&(n._cleanup(),delete e._routeAnnouncer)})),n}const TO=(...t)=>t.find(e=>e!==void 0);function AO(t){const e=t.componentName||"NuxtLink";function n(i){return typeof i=="string"&&i.startsWith("#")}function r(i,o,a){const c=a??t.trailingSlash;if(!i||c!=="append"&&c!=="remove")return i;if(typeof i=="string")return Sl(i,c);const u="path"in i&&i.path!==void 0?i.path:o(i).path;return{...i,name:void 0,path:Sl(u,c)}}function s(i){const o=St(),a=Ks(),c=Se(()=>!!i.target&&i.target!=="_self"),u=Se(()=>{const P=i.to||i.href||"";return typeof P=="string"&&Jn(P,{acceptRelative:!0})}),f=aa("RouterLink"),h=f&&typeof f!="string"?f.useLink:void 0,p=Se(()=>{if(i.external)return!0;const P=i.to||i.href||"";return typeof P=="object"?!1:P===""||u.value}),m=Se(()=>{const P=i.to||i.href||"";return p.value?P:r(P,o.resolve,i.trailingSlash)}),y=p.value?void 0:h?.({...i,to:m}),b=Se(()=>{const P=i.trailingSlash??t.trailingSlash;if(!m.value||u.value||n(m.value))return m.value;if(p.value){const O=typeof m.value=="object"&&"path"in m.value?oh(m.value):m.value,C=typeof O=="object"?o.resolve(O).href:O;return Sl(C,P)}return typeof m.value=="object"?o.resolve(m.value)?.href??null:Sl(Wc(a.app.baseURL,m.value),P)});return{to:m,hasTarget:c,isAbsoluteUrl:u,isExternal:p,href:b,isActive:y?.isActive??Se(()=>m.value===o.currentRoute.value.path),isExactActive:y?.isExactActive??Se(()=>m.value===o.currentRoute.value.path),route:y?.route??Se(()=>o.resolve(m.value)),async navigate(P){await PC(b.value,{replace:i.replace,external:p.value||c.value})}}}return yn({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1},trailingSlash:{type:String,default:void 0,required:!1}},useLink:s,setup(i,{slots:o}){const a=St(),{to:c,href:u,navigate:f,isExternal:h,hasTarget:p,isAbsoluteUrl:m}=s(i),y=Gn(!1),b=nt(null),P=v=>{b.value=i.custom?v?.$el?.nextElementSibling:v?.$el};function O(v){return!y.value&&(typeof i.prefetchOn=="string"?i.prefetchOn===v:i.prefetchOn?.[v]??t.prefetchOn?.[v])&&(i.prefetch??t.prefetch)!==!1&&i.noPrefetch!==!0&&i.target!=="_blank"&&!RO()}async function C(v=xe()){if(y.value)return;y.value=!0;const I=typeof c.value=="string"?c.value:h.value?oh(c.value):a.resolve(c.value).fullPath,D=h.value?new URL(I,window.location.href).href:I;await Promise.all([v.hooks.callHook("link:prefetch",D).catch(()=>{}),!h.value&&!p.value&&ob(c.value,a).catch(()=>{})])}if(O("visibility")){const v=xe();let I,D=null;Li(()=>{const F=IO();Jc(()=>{I=yh(()=>{b?.value?.tagName&&(D=F.observe(b.value,async()=>{D?.(),D=null,await C(v)}))})})}),eo(()=>{I&&lO(I),D?.(),D=null})}return()=>{if(!h.value&&!p.value&&!n(c.value)){const D={ref:P,to:c.value,activeClass:i.activeClass||t.activeClass,exactActiveClass:i.exactActiveClass||t.exactActiveClass,replace:i.replace,ariaCurrentValue:i.ariaCurrentValue,custom:i.custom};return i.custom||(O("interaction")&&(D.onPointerenter=C.bind(null,void 0),D.onFocus=C.bind(null,void 0)),y.value&&(D.class=i.prefetchedClass||t.prefetchedClass),D.rel=i.rel||void 0),Ge(aa("RouterLink"),D,o.default)}const v=i.target||null,I=TO(i.noRel?"":i.rel,t.externalRelAttribute,m.value||p.value?"noopener noreferrer":"")||null;return i.custom?o.default?o.default({href:u.value,navigate:f,prefetch:C,get route(){if(!u.value)return;const D=new URL(u.value,window.location.href);return{path:D.pathname,fullPath:D.pathname,get query(){return Od(D.search)},hash:D.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:u.value}},rel:I,target:v,isExternal:h.value||p.value,isActive:!1,isExactActive:!1}):null:Ge("a",{ref:b,href:u.value||null,rel:I,target:v,onClick:D=>{if(!(h.value||p.value))return D.preventDefault(),i.replace?a.replace(u.value):a.push(u.value)}},o.default?.())}}})}const ab=AO(fC);function Sl(t,e){const n=e==="append"?uw:Ui;return Jn(t)&&!t.startsWith("http")?t:n(t,!0)}function IO(){const t=xe();if(t._observer)return t._observer;let e=null;const n=new Map,r=(i,o)=>(e||=new IntersectionObserver(a=>{for(const c of a){const u=n.get(c.target);(c.isIntersecting||c.intersectionRatio>0)&&u&&u()}}),n.set(i,o),e.observe(i),()=>{n.delete(i),e?.unobserve(i),n.size===0&&(e?.disconnect(),e=null)});return t._observer={observe:r}}const SO=/2g/;function RO(){const t=navigator.connection;return!!(t&&(t.saveData||SO.test(t.effectiveType)))}function CO(t){typeof t.indexable<"u"&&(t.indexable=String(t.indexable)!=="false"),typeof t.trailingSlash<"u"&&!t.trailingSlash&&(t.trailingSlash=String(t.trailingSlash)!=="false"),t.url&&!Jn(String(t.url),{acceptRelative:!0,strict:!1})&&(t.url=OR(String(t.url)));const e=Object.keys(t).sort((r,s)=>r.localeCompare(s)),n={};for(const r of e)n[r]=t[r];return n}function PO(t){const n=[];function r(i){if(!i||typeof i!="object"||Object.keys(i).length===0)return()=>{};i._context;const o={};for(const c in i){const u=i[c];typeof u<"u"&&u!==""&&(o[c]=u)}let a;return Object.keys(o).filter(c=>!c.startsWith("_")).length>0&&(a=n.push(o)),()=>{typeof a<"u"&&n.splice(a-1,1)}}function s(i){const o={};i?.debug&&(o._context={}),o._priority={};for(const a in n.sort((c,u)=>(c._priority||0)-(u._priority||0)))for(const c in n[a]){const u=c,f=i?.resolveRefs?cE(n[a][c]):n[a][c];!c.startsWith("_")&&typeof f<"u"&&f!==""&&(o[c]=f,typeof n[a]._priority<"u"&&n[a]._priority!==-1&&(o._priority[u]=n[a]._priority),i?.debug&&(o._context[u]=n[a]._context?.[u]||n[a]._context||"anonymous"))}return i?.skipNormalize?o:CO(o)}return{stack:n,push:r,get:s}}const kO=Wt({name:"nuxt-site-config:init",enforce:"pre",async setup(t){const e=PO(),n=uO("site-config");{const r=n.value||window.__NUXT_SITE_CONFIG__||{};for(const s in r)s[0]!=="_"&&e.push({[s]:r[s],_priority:r._priority?.[s]||-1})}return{provide:{nuxtSiteConfig:e}}}}),OO=Wt({name:"nuxt:payload",setup(t){const e=new Set;St().beforeResolve(async(n,r)=>{if(n.path===r.path)return;const s=await Qg(n.path);if(s){for(const i of e)delete t.static.data[i];for(const i in s.data)i in t.static.data||e.add(i),t.static.data[i]=s.data[i]}}),Jc(()=>{t.hooks.hook("link:prefetch",async n=>{const{hostname:r}=new URL(n,window.location.href);r===window.location.hostname&&await Qg(n).catch(()=>{console.warn("[nuxt] Error preloading payload for",n)})}),navigator.connection?.effectiveType!=="slow-2g"&&setTimeout(Yc,1e3)})}}),NO=Wt(()=>{const t=St();Jc(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),xO=Wt(t=>{let e;async function n(){const r=await Yc();e&&clearTimeout(e),e=setTimeout(n,Lg);try{const s=await $fetch(xd("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}Jc(()=>{e=setTimeout(n,Lg)})}),DO=Wt({name:"nuxt:chunk-reload",setup(t){const e=St(),n=Ks(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const o=Wc(n.app.baseURL,i.fullPath);EO({path:o,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),LO=Wt({name:"pinia",setup(t){const e=kC();return t.vueApp.use(e),Ma(e),t.payload&&t.payload.pinia&&(e.state.value=t.payload.pinia),{provide:{pinia:e}}}}),MO=Wt({name:"nuxt:global-components"}),Wr={default:I1(()=>Ce(()=>import("./BnuxbvY9.js"),__vite__mapDeps([39,24,40]),import.meta.url).then(t=>t.default||t))},VO=Wt({name:"nuxt:prefetch",setup(t){const e=St();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{const r=n?.meta?.layout;r&&typeof Wr[r]=="function"&&await Wr[r]()})}),t.hooks.hook("link:prefetch",n=>{if(Jn(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=$d(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof gh[o]=="function"&&gh[o]();typeof s=="string"&&s in Wr&&vO(Wr[s])})}}),FO=()=>{};var Ey={};/**
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
 */const lb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},UO=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},cb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(p=64)),r.push(n[f],n[h],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lb(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):UO(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new $O;const p=i<<2|a>>4;if(r.push(p),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $O extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jO=function(t){const e=lb(t);return cb.encodeByteArray(e,!0)},mc=function(t){return jO(t).replace(/\./g,"")},ub=function(t){try{return cb.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function BO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const HO=()=>BO().__FIREBASE_DEFAULTS__,qO=()=>{if(typeof process>"u"||typeof Ey>"u")return;const t=Ey.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zO=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ub(t[1]);return e&&JSON.parse(e)},Xc=()=>{try{return FO()||HO()||qO()||zO()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},fb=t=>Xc()?.emulatorHosts?.[t],hb=t=>{const e=fb(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},db=()=>Xc()?.config,pb=t=>Xc()?.[`_${t}`];/**
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
 */class WO{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function hs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function jd(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function mb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[mc(JSON.stringify(n)),mc(JSON.stringify(o)),""].join(".")}const Go={};function GO(){const t={prod:[],emulator:[]};for(const e of Object.keys(Go))Go[e]?t.emulator.push(e):t.prod.push(e);return t}function KO(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let wy=!1;function Bd(t,e){if(typeof window>"u"||typeof document>"u"||!hs(window.location.host)||Go[t]===e||Go[t]||wy)return;Go[t]=e;function n(p){return`__firebase__banner__${p}`}const r="__firebase__banner",i=GO().prod.length>0;function o(){const p=document.getElementById(r);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function c(p,m){p.setAttribute("width","24"),p.setAttribute("id",m),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function u(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{wy=!0,o()},p}function f(p,m){p.setAttribute("id",m),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function h(){const p=KO(r),m=n("text"),y=document.getElementById(m)||document.createElement("span"),b=n("learnmore"),P=document.getElementById(b)||document.createElement("a"),O=n("preprendIcon"),C=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const v=p.element;a(v),f(P,b);const I=u();c(C,O),v.append(C,y,P,I),document.body.appendChild(v)}i?(y.innerText="Preview backend disconnected.",C.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(C.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,y.innerText="Preview backend running in this workspace."),y.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",h):h()}/**
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
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function YO(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function QO(){const t=Xc()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function JO(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function XO(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ZO(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eN(){const t=Ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tN(){return!QO()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function nN(){try{return typeof indexedDB=="object"}catch{return!1}}function rN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
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
 */const sN="FirebaseError";class Xn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=sN,Object.setPrototypeOf(this,Xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Va.prototype.create)}}class Va{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?iN(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Xn(s,a,r)}}function iN(t,e){return t.replace(oN,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const oN=/\{\$([^}]+)}/g;function aN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(by(i)&&by(o)){if(!Fs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function by(t){return t!==null&&typeof t=="object"}/**
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
 */function Fa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ko(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Oo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function lN(t,e){const n=new cN(t,e);return n.subscribe.bind(n)}class cN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");uN(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=hf),s.error===void 0&&(s.error=hf),s.complete===void 0&&(s.complete=hf);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function hf(){}/**
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
 */function Je(t){return t&&t._delegate?t._delegate:t}class ns{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ss="[DEFAULT]";/**
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
 */class fN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new WO;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dN(e))try{this.getOrInitializeService({instanceIdentifier:Ss})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ss){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ss){return this.instances.has(e)}getOptions(e=Ss){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ss){return this.component?this.component.multipleInstances?e:Ss:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hN(t){return t===Ss?void 0:t}function dN(t){return t.instantiationMode==="EAGER"}/**
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
 */class pN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new fN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const mN={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},gN=we.INFO,yN={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},_N=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=yN[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hd{constructor(e){this.name=e,this._logLevel=gN,this._logHandler=_N,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const vN=(t,e)=>e.some(n=>t instanceof n);let Ty,Ay;function EN(){return Ty||(Ty=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wN(){return Ay||(Ay=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gb=new WeakMap,_h=new WeakMap,yb=new WeakMap,df=new WeakMap,qd=new WeakMap;function bN(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Jr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&gb.set(n,t)}).catch(()=>{}),qd.set(e,t),e}function TN(t){if(_h.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});_h.set(t,e)}let vh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _h.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yb.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function AN(t){vh=t(vh)}function IN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(pf(this),e,...n);return yb.set(r,e.sort?e.sort():[e]),Jr(r)}:wN().includes(t)?function(...e){return t.apply(pf(this),e),Jr(gb.get(this))}:function(...e){return Jr(t.apply(pf(this),e))}}function SN(t){return typeof t=="function"?IN(t):(t instanceof IDBTransaction&&TN(t),vN(t,EN())?new Proxy(t,vh):t)}function Jr(t){if(t instanceof IDBRequest)return bN(t);if(df.has(t))return df.get(t);const e=SN(t);return e!==t&&(df.set(t,e),qd.set(e,t)),e}const pf=t=>qd.get(t);function RN(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Jr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Jr(o.result),c.oldVersion,c.newVersion,Jr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const CN=["get","getKey","getAll","getAllKeys","count"],PN=["put","add","delete","clear"],mf=new Map;function Iy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(mf.get(e))return mf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=PN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||CN.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return mf.set(e,i),i}AN(t=>({...t,get:(e,n,r)=>Iy(e,n)||t.get(e,n,r),has:(e,n)=>!!Iy(e,n)||t.has(e,n)}));/**
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
 */class kN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ON(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ON(t){return t.getComponent()?.type==="VERSION"}const Eh="@firebase/app",Sy="0.14.0";/**
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
 */const yr=new Hd("@firebase/app"),NN="@firebase/app-compat",xN="@firebase/analytics-compat",DN="@firebase/analytics",LN="@firebase/app-check-compat",MN="@firebase/app-check",VN="@firebase/auth",FN="@firebase/auth-compat",UN="@firebase/database",$N="@firebase/data-connect",jN="@firebase/database-compat",BN="@firebase/functions",HN="@firebase/functions-compat",qN="@firebase/installations",zN="@firebase/installations-compat",WN="@firebase/messaging",GN="@firebase/messaging-compat",KN="@firebase/performance",YN="@firebase/performance-compat",QN="@firebase/remote-config",JN="@firebase/remote-config-compat",XN="@firebase/storage",ZN="@firebase/storage-compat",ex="@firebase/firestore",tx="@firebase/ai",nx="@firebase/firestore-compat",rx="firebase",sx="12.0.0";/**
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
 */const wh="[DEFAULT]",ix={[Eh]:"fire-core",[NN]:"fire-core-compat",[DN]:"fire-analytics",[xN]:"fire-analytics-compat",[MN]:"fire-app-check",[LN]:"fire-app-check-compat",[VN]:"fire-auth",[FN]:"fire-auth-compat",[UN]:"fire-rtdb",[$N]:"fire-data-connect",[jN]:"fire-rtdb-compat",[BN]:"fire-fn",[HN]:"fire-fn-compat",[qN]:"fire-iid",[zN]:"fire-iid-compat",[WN]:"fire-fcm",[GN]:"fire-fcm-compat",[KN]:"fire-perf",[YN]:"fire-perf-compat",[QN]:"fire-rc",[JN]:"fire-rc-compat",[XN]:"fire-gcs",[ZN]:"fire-gcs-compat",[ex]:"fire-fst",[nx]:"fire-fst-compat",[tx]:"fire-vertex","fire-js":"fire-js",[rx]:"fire-js-all"};/**
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
 */const ma=new Map,ox=new Map,bh=new Map;function Ry(t,e){try{t.container.addComponent(e)}catch(n){yr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Us(t){const e=t.name;if(bh.has(e))return yr.debug(`There were multiple attempts to register component ${e}.`),!1;bh.set(e,t);for(const n of ma.values())Ry(n,t);for(const n of ox.values())Ry(n,t);return!0}function Zc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function nn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const ax={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xr=new Va("app","Firebase",ax);/**
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
 */class lx{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ns("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ys=sx;function _b(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:wh,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Xr.create("bad-app-name",{appName:String(s)});if(n||(n=db()),!n)throw Xr.create("no-options");const i=ma.get(s);if(i){if(Fs(n,i.options)&&Fs(r,i.config))return i;throw Xr.create("duplicate-app",{appName:s})}const o=new pN(s);for(const c of bh.values())o.addComponent(c);const a=new lx(n,r,o);return ma.set(s,a),a}function zd(t=wh){const e=ma.get(t);if(!e&&t===wh&&db())return _b();if(!e)throw Xr.create("no-app",{appName:t});return e}function cx(){return Array.from(ma.values())}function jn(t,e,n){let r=ix[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yr.warn(o.join(" "));return}Us(new ns(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const ux="firebase-heartbeat-database",fx=1,ga="firebase-heartbeat-store";let gf=null;function vb(){return gf||(gf=RN(ux,fx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ga)}catch(n){console.warn(n)}}}}).catch(t=>{throw Xr.create("idb-open",{originalErrorMessage:t.message})})),gf}async function hx(t){try{const n=(await vb()).transaction(ga),r=await n.objectStore(ga).get(Eb(t));return await n.done,r}catch(e){if(e instanceof Xn)yr.warn(e.message);else{const n=Xr.create("idb-get",{originalErrorMessage:e?.message});yr.warn(n.message)}}}async function Cy(t,e){try{const r=(await vb()).transaction(ga,"readwrite");await r.objectStore(ga).put(e,Eb(t)),await r.done}catch(n){if(n instanceof Xn)yr.warn(n.message);else{const r=Xr.create("idb-set",{originalErrorMessage:n?.message});yr.warn(r.message)}}}function Eb(t){return`${t.name}!${t.options.appId}`}/**
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
 */const dx=1024,px=30;class mx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Py();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>px){const s=_x(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){yr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Py(),{heartbeatsToSend:n,unsentEntries:r}=gx(this._heartbeatsCache.heartbeats),s=mc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return yr.warn(e),""}}}function Py(){return new Date().toISOString().substring(0,10)}function gx(t,e=dx){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ky(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ky(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nN()?rN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await hx(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Cy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Cy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ky(t){return mc(JSON.stringify({version:2,heartbeats:t})).length}function _x(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function vx(t){Us(new ns("platform-logger",e=>new kN(e),"PRIVATE")),Us(new ns("heartbeat",e=>new mx(e),"PRIVATE")),jn(Eh,Sy,t),jn(Eh,Sy,"esm2020"),jn("fire-js","")}vx("");var Ex="firebase",wx="12.0.0";/**
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
 */jn(Ex,wx,"app");function wb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bx=wb,bb=new Va("auth","Firebase",wb());/**
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
 */const gc=new Hd("@firebase/auth");function Tx(t,...e){gc.logLevel<=we.WARN&&gc.warn(`Auth (${Ys}): ${t}`,...e)}function jl(t,...e){gc.logLevel<=we.ERROR&&gc.error(`Auth (${Ys}): ${t}`,...e)}/**
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
 */function gn(t,...e){throw Gd(t,...e)}function In(t,...e){return Gd(t,...e)}function Wd(t,e,n){const r={...bx(),[e]:n};return new Va("auth","Firebase",r).create(e,{appName:t.name})}function Zr(t){return Wd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ax(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&gn(t,"argument-error"),Wd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Gd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return bb.create(t,...e)}function de(t,e,...n){if(!t)throw Gd(e,...n)}function ur(t){const e="INTERNAL ASSERTION FAILED: "+t;throw jl(e),new Error(e)}function _r(t,e){t||ur(e)}/**
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
 */function Th(){return typeof self<"u"&&self.location?.href||""}function Ix(){return Oy()==="http:"||Oy()==="https:"}function Oy(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function Sx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ix()||XO()||"connection"in navigator)?navigator.onLine:!0}function Rx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ua{constructor(e,n){this.shortDelay=e,this.longDelay=n,_r(n>e,"Short delay should be less than long delay!"),this.isMobile=YO()||ZO()}get(){return Sx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Kd(t,e){_r(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Tb{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ur("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ur("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ur("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Cx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Px=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],kx=new Ua(3e4,6e4);function Qs(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ds(t,e,n,r,s={}){return Ab(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Fa({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...i};return JO()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&hs(t.emulatorConfig.host)&&(u.credentials="include"),Tb.fetch()(await Ib(t,t.config.apiHost,n,a),u)})}async function Ab(t,e,n){t._canInitEmulator=!1;const r={...Cx,...e};try{const s=new Nx(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Rl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rl(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Rl(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Rl(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Wd(t,f,u);gn(t,f)}}catch(s){if(s instanceof Xn)throw s;gn(t,"network-request-failed",{message:String(s)})}}async function eu(t,e,n,r,s={}){const i=await ds(t,e,n,r,s);return"mfaPendingCredential"in i&&gn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Ib(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Kd(t.config,s):`${t.config.apiScheme}://${s}`;return Px.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Ox(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Nx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(In(this.auth,"network-request-failed")),kx.get())})}}function Rl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=In(t,e,r);return s.customData._tokenResponse=n,s}function Ny(t){return t!==void 0&&t.enterprise!==void 0}class xx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Ox(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Dx(t,e){return ds(t,"GET","/v2/recaptchaConfig",Qs(t,e))}/**
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
 */async function Lx(t,e){return ds(t,"POST","/v1/accounts:delete",e)}async function yc(t,e){return ds(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ko(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Mx(t,e=!1){const n=Je(t),r=await n.getIdToken(e),s=Yd(r);de(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Ko(yf(s.auth_time)),issuedAtTime:Ko(yf(s.iat)),expirationTime:Ko(yf(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function yf(t){return Number(t)*1e3}function Yd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return jl("JWT malformed, contained fewer than 3 sections"),null;try{const s=ub(n);return s?JSON.parse(s):(jl("Failed to decode base64 JWT payload"),null)}catch(s){return jl("Caught error parsing JWT payload as JSON",s?.toString()),null}}function xy(t){const e=Yd(t);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ya(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Xn&&Vx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Vx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Fx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ah{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ko(this.lastLoginAt),this.creationTime=Ko(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _c(t){const e=t.auth,n=await t.getIdToken(),r=await ya(t,yc(e,{idToken:n}));de(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?Sb(s.providerUserInfo):[],o=$x(t.providerData,i),a=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!o?.length,u=a?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ah(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function Ux(t){const e=Je(t);await _c(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $x(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Sb(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function jx(t,e){const n=await Ab(t,{},async()=>{const r=Fa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Ib(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:r};return t.emulatorConfig&&hs(t.emulatorConfig.host)&&(c.credentials="include"),Tb.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Bx(t,e){return ds(t,"POST","/v2/accounts:revokeToken",Qs(t,e))}/**
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
 */class Ri{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){de(e.length!==0,"internal-error");const n=xy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await jx(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ri;return r&&(de(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(de(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(de(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ri,this.toJSON())}_performRefresh(){return ur("not implemented")}}/**
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
 */function xr(t,e){de(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Fx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ah(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ya(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Mx(this,e)}reload(){return Ux(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await _c(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nn(this.auth.app))return Promise.reject(Zr(this.auth));const e=await this.getIdToken();return await ya(this,Lx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:h,emailVerified:p,isAnonymous:m,providerData:y,stsTokenManager:b}=n;de(h&&b,e,"internal-error");const P=Ri.fromJSON(this.name,b);de(typeof h=="string",e,"internal-error"),xr(r,e.name),xr(s,e.name),de(typeof p=="boolean",e,"internal-error"),de(typeof m=="boolean",e,"internal-error"),xr(i,e.name),xr(o,e.name),xr(a,e.name),xr(c,e.name),xr(u,e.name),xr(f,e.name);const O=new bn({uid:h,auth:e,email:s,emailVerified:p,displayName:r,isAnonymous:m,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:P,createdAt:u,lastLoginAt:f});return y&&Array.isArray(y)&&(O.providerData=y.map(C=>({...C}))),c&&(O._redirectEventId=c),O}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ri;s.updateFromServerResponse(n);const i=new bn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await _c(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];de(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Sb(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new Ri;a.updateFromIdToken(r);const c=new bn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ah(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,u),c}}/**
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
 */const Dy=new Map;function fr(t){_r(t instanceof Function,"Expected a class definition");let e=Dy.get(t);return e?(_r(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Dy.set(t,e),e)}/**
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
 */class Rb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Rb.type="NONE";const Ly=Rb;/**
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
 */function Bl(t,e,n){return`firebase:${t}:${e}:${n}`}class Ci{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Bl(this.userKey,s.apiKey,i),this.fullPersistenceKey=Bl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await yc(this.auth,{idToken:e}).catch(()=>{});return n?bn._fromGetAccountInfoResponse(this.auth,n,e):null}return bn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ci(fr(Ly),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||fr(Ly);const o=Bl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const f=await u._get(o);if(f){let h;if(typeof f=="string"){const p=await yc(e,{idToken:f}).catch(()=>{});if(!p)break;h=await bn._fromGetAccountInfoResponse(e,p,f)}else h=bn._fromJSON(e,f);u!==i&&(a=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ci(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ci(i,e,r))}}/**
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
 */function My(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ob(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xb(e))return"Blackberry";if(Db(e))return"Webos";if(Pb(e))return"Safari";if((e.includes("chrome/")||kb(e))&&!e.includes("edge/"))return"Chrome";if(Nb(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function Cb(t=Ft()){return/firefox\//i.test(t)}function Pb(t=Ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kb(t=Ft()){return/crios\//i.test(t)}function Ob(t=Ft()){return/iemobile/i.test(t)}function Nb(t=Ft()){return/android/i.test(t)}function xb(t=Ft()){return/blackberry/i.test(t)}function Db(t=Ft()){return/webos/i.test(t)}function Qd(t=Ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Hx(t=Ft()){return Qd(t)&&!!window.navigator?.standalone}function qx(){return eN()&&document.documentMode===10}function Lb(t=Ft()){return Qd(t)||Nb(t)||Db(t)||xb(t)||/windows phone/i.test(t)||Ob(t)}/**
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
 */function Mb(t,e=[]){let n;switch(t){case"Browser":n=My(Ft());break;case"Worker":n=`${My(Ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ys}/${r}`}/**
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
 */class zx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function Wx(t,e={}){return ds(t,"GET","/v2/passwordPolicy",Qs(t,e))}/**
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
 */const Gx=6;class Kx{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Gx,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Yx{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vy(this),this.idTokenSubscription=new Vy(this),this.beforeStateQueue=new zx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fr(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ci.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await yc(this,{idToken:e}),r=await bn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(nn(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,a=await this.tryRedirectSignIn(e);(!i||i===o)&&a?.user&&(r=a.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _c(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Rx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nn(this.app))return Promise.reject(Zr(this));const n=e?Je(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nn(this.app)?Promise.reject(Zr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nn(this.app)?Promise.reject(Zr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Wx(this),n=new Kx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Va("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Bx(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fr(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await Ci.create(this,[fr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(nn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Tx(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Js(t){return Je(t)}class Vy{constructor(e){this.auth=e,this.observer=null,this.addObserver=lN(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let tu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Qx(t){tu=t}function Vb(t){return tu.loadJS(t)}function Jx(){return tu.recaptchaEnterpriseScript}function Xx(){return tu.gapiScript}function Zx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class e2{constructor(){this.enterprise=new t2}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class t2{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const n2="recaptcha-enterprise",Fb="NO_RECAPTCHA";class r2{constructor(e){this.type=n2,this.auth=Js(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Dx(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new xx(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Ny(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Fb)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new e2().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Ny(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Jx();c.length!==0&&(c+=a),Vb(c).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Fy(t,e,n,r=!1,s=!1){const i=new r2(t);let o;if(s)o=Fb;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Uy(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Fy(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Fy(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function s2(t,e){const n=Zc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Fs(i,e??{}))return s;gn(s,"already-initialized")}return n.initialize({options:e})}function i2(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(fr);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function o2(t,e,n){const r=Js(t);de(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Ub(e),{host:o,port:a}=a2(e),c=a===null?"":`:${a}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){de(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),de(Fs(u,r.config.emulator)&&Fs(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,hs(o)?(jd(`${i}//${o}${c}`),Bd("Auth",!0)):l2()}function Ub(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function a2(t){const e=Ub(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:$y(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:$y(o)}}}function $y(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function l2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Jd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ur("not implemented")}_getIdTokenResponse(e){return ur("not implemented")}_linkToIdToken(e,n){return ur("not implemented")}_getReauthenticationResolver(e){return ur("not implemented")}}async function c2(t,e){return ds(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function u2(t,e){return eu(t,"POST","/v1/accounts:signInWithPassword",Qs(t,e))}/**
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
 */async function f2(t,e){return eu(t,"POST","/v1/accounts:signInWithEmailLink",Qs(t,e))}async function h2(t,e){return eu(t,"POST","/v1/accounts:signInWithEmailLink",Qs(t,e))}/**
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
 */class _a extends Jd{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new _a(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new _a(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uy(e,n,"signInWithPassword",u2);case"emailLink":return f2(e,{email:this._email,oobCode:this._password});default:gn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uy(e,r,"signUpPassword",c2);case"emailLink":return h2(e,{idToken:n,email:this._email,oobCode:this._password});default:gn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Pi(t,e){return eu(t,"POST","/v1/accounts:signInWithIdp",Qs(t,e))}/**
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
 */const d2="http://localhost";class $s extends Jd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $s(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new $s(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Pi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Pi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Pi(e,n)}buildRequest(){const e={requestUri:d2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fa(n)}return e}}/**
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
 */function p2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function m2(t){const e=ko(Oo(t)).link,n=e?ko(Oo(e)).deep_link_id:null,r=ko(Oo(t)).deep_link_id;return(r?ko(Oo(r)).link:null)||r||n||e||t}class Xd{constructor(e){const n=ko(Oo(e)),r=n.apiKey??null,s=n.oobCode??null,i=p2(n.mode??null);de(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=m2(e);try{return new Xd(n)}catch{return null}}}/**
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
 */class to{constructor(){this.providerId=to.PROVIDER_ID}static credential(e,n){return _a._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Xd.parseLink(n);return de(r,"argument-error"),_a._fromEmailAndCode(e,r.code,r.tenantId)}}to.PROVIDER_ID="password";to.EMAIL_PASSWORD_SIGN_IN_METHOD="password";to.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Zd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $a extends Zd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class jr extends $a{constructor(){super("facebook.com")}static credential(e){return $s._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jr.credential(e.oauthAccessToken)}catch{return null}}}jr.FACEBOOK_SIGN_IN_METHOD="facebook.com";jr.PROVIDER_ID="facebook.com";/**
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
 */class Br extends $a{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $s._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Br.credential(n,r)}catch{return null}}}Br.GOOGLE_SIGN_IN_METHOD="google.com";Br.PROVIDER_ID="google.com";/**
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
 */class Hr extends $a{constructor(){super("github.com")}static credential(e){return $s._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hr.credential(e.oauthAccessToken)}catch{return null}}}Hr.GITHUB_SIGN_IN_METHOD="github.com";Hr.PROVIDER_ID="github.com";/**
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
 */class qr extends $a{constructor(){super("twitter.com")}static credential(e,n){return $s._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return qr.credential(n,r)}catch{return null}}}qr.TWITTER_SIGN_IN_METHOD="twitter.com";qr.PROVIDER_ID="twitter.com";/**
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
 */class Bi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await bn._fromIdTokenResponse(e,r,s),o=jy(r);return new Bi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=jy(r);return new Bi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function jy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class vc extends Xn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,vc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new vc(e,n,r,s)}}function $b(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?vc._fromErrorAndOperation(t,i,e,r):i})}async function g2(t,e,n=!1){const r=await ya(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Bi._forOperation(t,"link",r)}/**
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
 */async function y2(t,e,n=!1){const{auth:r}=t;if(nn(r.app))return Promise.reject(Zr(r));const s="reauthenticate";try{const i=await ya(t,$b(r,s,e,t),n);de(i.idToken,r,"internal-error");const o=Yd(i.idToken);de(o,r,"internal-error");const{sub:a}=o;return de(t.uid===a,r,"user-mismatch"),Bi._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&gn(r,"user-mismatch"),i}}/**
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
 */async function jb(t,e,n=!1){if(nn(t.app))return Promise.reject(Zr(t));const r="signIn",s=await $b(t,r,e),i=await Bi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function _2(t,e){return jb(Js(t),e)}/**
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
 */async function v2(t){const e=Js(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function E2(t,e,n){return nn(t.app)?Promise.reject(Zr(t)):_2(Je(t),to.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&v2(t),r})}function w2(t,e,n,r){return Je(t).onIdTokenChanged(e,n,r)}function b2(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}function T2(t,e,n,r){return Je(t).onAuthStateChanged(e,n,r)}function A2(t){return Je(t).signOut()}const Ec="__sak";/**
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
 */class Bb{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ec,"1"),this.storage.removeItem(Ec),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const I2=1e3,S2=10;class Hb extends Bb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Lb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);qx()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,S2):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},I2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hb.type="LOCAL";const R2=Hb;/**
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
 */class qb extends Bb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qb.type="SESSION";const zb=qb;/**
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
 */function C2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class nu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new nu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await C2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nu.receivers=[];/**
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
 */function ep(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class P2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=ep("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Bn(){return window}function k2(t){Bn().location.href=t}/**
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
 */function Wb(){return typeof Bn().WorkerGlobalScope<"u"&&typeof Bn().importScripts=="function"}async function O2(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function N2(){return navigator?.serviceWorker?.controller||null}function x2(){return Wb()?self:null}/**
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
 */const Gb="firebaseLocalStorageDb",D2=1,wc="firebaseLocalStorage",Kb="fbase_key";class ja{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ru(t,e){return t.transaction([wc],e?"readwrite":"readonly").objectStore(wc)}function L2(){const t=indexedDB.deleteDatabase(Gb);return new ja(t).toPromise()}function Ih(){const t=indexedDB.open(Gb,D2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wc,{keyPath:Kb})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wc)?e(r):(r.close(),await L2(),e(await Ih()))})})}async function By(t,e,n){const r=ru(t,!0).put({[Kb]:e,value:n});return new ja(r).toPromise()}async function M2(t,e){const n=ru(t,!1).get(e),r=await new ja(n).toPromise();return r===void 0?null:r.value}function Hy(t,e){const n=ru(t,!0).delete(e);return new ja(n).toPromise()}const V2=800,F2=3;class Yb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ih(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>F2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nu._getInstance(x2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await O2(),!this.activeServiceWorker)return;this.sender=new P2(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||N2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ih();return await By(e,Ec,"1"),await Hy(e,Ec),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>By(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>M2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ru(s,!1).getAll();return new ja(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),V2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yb.type="LOCAL";const U2=Yb;new Ua(3e4,6e4);/**
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
 */function Qb(t,e){return e?fr(e):(de(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class tp extends Jd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Pi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Pi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $2(t){return jb(t.auth,new tp(t),t.bypassAuthState)}function j2(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),y2(n,new tp(t),t.bypassAuthState)}async function B2(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),g2(n,new tp(t),t.bypassAuthState)}/**
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
 */class Jb{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $2;case"linkViaPopup":case"linkViaRedirect":return B2;case"reauthViaPopup":case"reauthViaRedirect":return j2;default:gn(this.auth,"internal-error")}}resolve(e){_r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const H2=new Ua(2e3,1e4);async function j9(t,e,n){if(nn(t.app))return Promise.reject(In(t,"operation-not-supported-in-this-environment"));const r=Js(t);Ax(t,e,Zd);const s=Qb(r,n);return new Rs(r,"signInViaPopup",e,s).executeNotNull()}class Rs extends Jb{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Rs.currentPopupAction&&Rs.currentPopupAction.cancel(),Rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){_r(this.filter.length===1,"Popup operations only handle one event");const e=ep();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(In(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(In(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(In(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,H2.get())};e()}}Rs.currentPopupAction=null;/**
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
 */const q2="pendingRedirect",Hl=new Map;class z2 extends Jb{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Hl.get(this.auth._key());if(!e){try{const r=await W2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Hl.set(this.auth._key(),e)}return this.bypassAuthState||Hl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function W2(t,e){const n=Y2(e),r=K2(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function G2(t,e){Hl.set(t._key(),e)}function K2(t){return fr(t._redirectPersistence)}function Y2(t){return Bl(q2,t.config.apiKey,t.name)}async function Q2(t,e,n=!1){if(nn(t.app))return Promise.reject(Zr(t));const r=Js(t),s=Qb(r,e),o=await new z2(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const J2=600*1e3;class X2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Z2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!Xb(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(In(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=J2&&this.cachedEventUids.clear(),this.cachedEventUids.has(qy(e))}saveEventToCache(e){this.cachedEventUids.add(qy(e)),this.lastProcessedEventTime=Date.now()}}function qy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Xb({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function Z2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xb(t);default:return!1}}/**
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
 */async function eD(t,e={}){return ds(t,"GET","/v1/projects",e)}/**
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
 */const tD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nD=/^https?/;async function rD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await eD(t);for(const n of e)try{if(sD(n))return}catch{}gn(t,"unauthorized-domain")}function sD(t){const e=Th(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!nD.test(n))return!1;if(tD.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const iD=new Ua(3e4,6e4);function zy(){const t=Bn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function oD(t){return new Promise((e,n)=>{function r(){zy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zy(),n(In(t,"network-request-failed"))},timeout:iD.get()})}if(Bn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Bn().gapi?.load)r();else{const s=Zx("iframefcb");return Bn()[s]=()=>{gapi.load?r():n(In(t,"network-request-failed"))},Vb(`${Xx()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw ql=null,e})}let ql=null;function aD(t){return ql=ql||oD(t),ql}/**
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
 */const lD=new Ua(5e3,15e3),cD="__/auth/iframe",uD="emulator/auth/iframe",fD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dD(t){const e=t.config;de(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Kd(e,uD):`https://${t.config.authDomain}/${cD}`,r={apiKey:e.apiKey,appName:t.name,v:Ys},s=hD.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Fa(r).slice(1)}`}async function pD(t){const e=await aD(t),n=Bn().gapi;return de(n,t,"internal-error"),e.open({where:document.body,url:dD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fD,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=In(t,"network-request-failed"),a=Bn().setTimeout(()=>{i(o)},lD.get());function c(){Bn().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const mD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gD=500,yD=600,_D="_blank",vD="http://localhost";class Wy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ED(t,e,n,r=gD,s=yD){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c={...mD,width:r.toString(),height:s.toString(),top:i,left:o},u=Ft().toLowerCase();n&&(a=kb(u)?_D:n),Cb(u)&&(e=e||vD,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[m,y])=>`${p}${m}=${y},`,"");if(Hx(u)&&a!=="_self")return wD(e||"",a),new Wy(null);const h=window.open(e||"",a,f);de(h,t,"popup-blocked");try{h.focus()}catch{}return new Wy(h)}function wD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const bD="__/auth/handler",TD="emulator/auth/handler",AD=encodeURIComponent("fac");async function Gy(t,e,n,r,s,i){de(t.config.authDomain,t,"auth-domain-config-required"),de(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ys,eventId:s};if(e instanceof Zd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",aN(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,h]of Object.entries({}))o[f]=h}if(e instanceof $a){const f=e.getScopes().filter(h=>h!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const c=await t._getAppCheckToken(),u=c?`#${AD}=${encodeURIComponent(c)}`:"";return`${ID(t)}?${Fa(a).slice(1)}${u}`}function ID({config:t}){return t.emulator?Kd(t,TD):`https://${t.authDomain}/${bD}`}/**
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
 */const _f="webStorageSupport";class SD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zb,this._completeRedirectFn=Q2,this._overrideRedirectResult=G2}async _openPopup(e,n,r,s){_r(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Gy(e,n,r,Th(),s);return ED(e,i,ep())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Gy(e,n,r,Th(),s);return k2(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(_r(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await pD(e),r=new X2(e);return n.register("authEvent",s=>(de(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_f,{type:_f},s=>{const i=s?.[0]?.[_f];i!==void 0&&n(!!i),gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Lb()||Pb()||Qd()}}const RD=SD;var Ky="@firebase/auth",Yy="1.11.0";/**
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
 */class CD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function PD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kD(t){Us(new ns("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;de(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mb(t)},u=new Yx(r,s,i,c);return i2(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Us(new ns("auth-internal",e=>{const n=Js(e.getProvider("auth").getImmediate());return(r=>new CD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jn(Ky,Yy,PD(t)),jn(Ky,Yy,"esm2020")}/**
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
 */const OD=300,ND=pb("authIdTokenMaxAge")||OD;let Qy=null;const xD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ND)return;const s=n?.token;Qy!==s&&(Qy=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function DD(t=zd()){const e=Zc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=s2(t,{popupRedirectResolver:RD,persistence:[U2,R2,zb]}),r=pb("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=xD(i.toString());b2(n,o,()=>o(n.currentUser)),w2(n,a=>o(a))}}const s=fb("auth");return s&&o2(n,`http://${s}`),n}function LD(){return document.getElementsByTagName("head")?.[0]??document}Qx({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=In("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",LD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kD("Browser");var Jy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var es,Zb;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,E){function _(){}_.prototype=E.prototype,S.D=E.prototype,S.prototype=new _,S.prototype.constructor=S,S.C=function(T,N,k){for(var A=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)A[ge-2]=arguments[ge];return E.prototype[N].apply(T,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(S,E,_){_||(_=0);var T=Array(16);if(typeof E=="string")for(var N=0;16>N;++N)T[N]=E.charCodeAt(_++)|E.charCodeAt(_++)<<8|E.charCodeAt(_++)<<16|E.charCodeAt(_++)<<24;else for(N=0;16>N;++N)T[N]=E[_++]|E[_++]<<8|E[_++]<<16|E[_++]<<24;E=S.g[0],_=S.g[1],N=S.g[2];var k=S.g[3],A=E+(k^_&(N^k))+T[0]+3614090360&4294967295;E=_+(A<<7&4294967295|A>>>25),A=k+(N^E&(_^N))+T[1]+3905402710&4294967295,k=E+(A<<12&4294967295|A>>>20),A=N+(_^k&(E^_))+T[2]+606105819&4294967295,N=k+(A<<17&4294967295|A>>>15),A=_+(E^N&(k^E))+T[3]+3250441966&4294967295,_=N+(A<<22&4294967295|A>>>10),A=E+(k^_&(N^k))+T[4]+4118548399&4294967295,E=_+(A<<7&4294967295|A>>>25),A=k+(N^E&(_^N))+T[5]+1200080426&4294967295,k=E+(A<<12&4294967295|A>>>20),A=N+(_^k&(E^_))+T[6]+2821735955&4294967295,N=k+(A<<17&4294967295|A>>>15),A=_+(E^N&(k^E))+T[7]+4249261313&4294967295,_=N+(A<<22&4294967295|A>>>10),A=E+(k^_&(N^k))+T[8]+1770035416&4294967295,E=_+(A<<7&4294967295|A>>>25),A=k+(N^E&(_^N))+T[9]+2336552879&4294967295,k=E+(A<<12&4294967295|A>>>20),A=N+(_^k&(E^_))+T[10]+4294925233&4294967295,N=k+(A<<17&4294967295|A>>>15),A=_+(E^N&(k^E))+T[11]+2304563134&4294967295,_=N+(A<<22&4294967295|A>>>10),A=E+(k^_&(N^k))+T[12]+1804603682&4294967295,E=_+(A<<7&4294967295|A>>>25),A=k+(N^E&(_^N))+T[13]+4254626195&4294967295,k=E+(A<<12&4294967295|A>>>20),A=N+(_^k&(E^_))+T[14]+2792965006&4294967295,N=k+(A<<17&4294967295|A>>>15),A=_+(E^N&(k^E))+T[15]+1236535329&4294967295,_=N+(A<<22&4294967295|A>>>10),A=E+(N^k&(_^N))+T[1]+4129170786&4294967295,E=_+(A<<5&4294967295|A>>>27),A=k+(_^N&(E^_))+T[6]+3225465664&4294967295,k=E+(A<<9&4294967295|A>>>23),A=N+(E^_&(k^E))+T[11]+643717713&4294967295,N=k+(A<<14&4294967295|A>>>18),A=_+(k^E&(N^k))+T[0]+3921069994&4294967295,_=N+(A<<20&4294967295|A>>>12),A=E+(N^k&(_^N))+T[5]+3593408605&4294967295,E=_+(A<<5&4294967295|A>>>27),A=k+(_^N&(E^_))+T[10]+38016083&4294967295,k=E+(A<<9&4294967295|A>>>23),A=N+(E^_&(k^E))+T[15]+3634488961&4294967295,N=k+(A<<14&4294967295|A>>>18),A=_+(k^E&(N^k))+T[4]+3889429448&4294967295,_=N+(A<<20&4294967295|A>>>12),A=E+(N^k&(_^N))+T[9]+568446438&4294967295,E=_+(A<<5&4294967295|A>>>27),A=k+(_^N&(E^_))+T[14]+3275163606&4294967295,k=E+(A<<9&4294967295|A>>>23),A=N+(E^_&(k^E))+T[3]+4107603335&4294967295,N=k+(A<<14&4294967295|A>>>18),A=_+(k^E&(N^k))+T[8]+1163531501&4294967295,_=N+(A<<20&4294967295|A>>>12),A=E+(N^k&(_^N))+T[13]+2850285829&4294967295,E=_+(A<<5&4294967295|A>>>27),A=k+(_^N&(E^_))+T[2]+4243563512&4294967295,k=E+(A<<9&4294967295|A>>>23),A=N+(E^_&(k^E))+T[7]+1735328473&4294967295,N=k+(A<<14&4294967295|A>>>18),A=_+(k^E&(N^k))+T[12]+2368359562&4294967295,_=N+(A<<20&4294967295|A>>>12),A=E+(_^N^k)+T[5]+4294588738&4294967295,E=_+(A<<4&4294967295|A>>>28),A=k+(E^_^N)+T[8]+2272392833&4294967295,k=E+(A<<11&4294967295|A>>>21),A=N+(k^E^_)+T[11]+1839030562&4294967295,N=k+(A<<16&4294967295|A>>>16),A=_+(N^k^E)+T[14]+4259657740&4294967295,_=N+(A<<23&4294967295|A>>>9),A=E+(_^N^k)+T[1]+2763975236&4294967295,E=_+(A<<4&4294967295|A>>>28),A=k+(E^_^N)+T[4]+1272893353&4294967295,k=E+(A<<11&4294967295|A>>>21),A=N+(k^E^_)+T[7]+4139469664&4294967295,N=k+(A<<16&4294967295|A>>>16),A=_+(N^k^E)+T[10]+3200236656&4294967295,_=N+(A<<23&4294967295|A>>>9),A=E+(_^N^k)+T[13]+681279174&4294967295,E=_+(A<<4&4294967295|A>>>28),A=k+(E^_^N)+T[0]+3936430074&4294967295,k=E+(A<<11&4294967295|A>>>21),A=N+(k^E^_)+T[3]+3572445317&4294967295,N=k+(A<<16&4294967295|A>>>16),A=_+(N^k^E)+T[6]+76029189&4294967295,_=N+(A<<23&4294967295|A>>>9),A=E+(_^N^k)+T[9]+3654602809&4294967295,E=_+(A<<4&4294967295|A>>>28),A=k+(E^_^N)+T[12]+3873151461&4294967295,k=E+(A<<11&4294967295|A>>>21),A=N+(k^E^_)+T[15]+530742520&4294967295,N=k+(A<<16&4294967295|A>>>16),A=_+(N^k^E)+T[2]+3299628645&4294967295,_=N+(A<<23&4294967295|A>>>9),A=E+(N^(_|~k))+T[0]+4096336452&4294967295,E=_+(A<<6&4294967295|A>>>26),A=k+(_^(E|~N))+T[7]+1126891415&4294967295,k=E+(A<<10&4294967295|A>>>22),A=N+(E^(k|~_))+T[14]+2878612391&4294967295,N=k+(A<<15&4294967295|A>>>17),A=_+(k^(N|~E))+T[5]+4237533241&4294967295,_=N+(A<<21&4294967295|A>>>11),A=E+(N^(_|~k))+T[12]+1700485571&4294967295,E=_+(A<<6&4294967295|A>>>26),A=k+(_^(E|~N))+T[3]+2399980690&4294967295,k=E+(A<<10&4294967295|A>>>22),A=N+(E^(k|~_))+T[10]+4293915773&4294967295,N=k+(A<<15&4294967295|A>>>17),A=_+(k^(N|~E))+T[1]+2240044497&4294967295,_=N+(A<<21&4294967295|A>>>11),A=E+(N^(_|~k))+T[8]+1873313359&4294967295,E=_+(A<<6&4294967295|A>>>26),A=k+(_^(E|~N))+T[15]+4264355552&4294967295,k=E+(A<<10&4294967295|A>>>22),A=N+(E^(k|~_))+T[6]+2734768916&4294967295,N=k+(A<<15&4294967295|A>>>17),A=_+(k^(N|~E))+T[13]+1309151649&4294967295,_=N+(A<<21&4294967295|A>>>11),A=E+(N^(_|~k))+T[4]+4149444226&4294967295,E=_+(A<<6&4294967295|A>>>26),A=k+(_^(E|~N))+T[11]+3174756917&4294967295,k=E+(A<<10&4294967295|A>>>22),A=N+(E^(k|~_))+T[2]+718787259&4294967295,N=k+(A<<15&4294967295|A>>>17),A=_+(k^(N|~E))+T[9]+3951481745&4294967295,S.g[0]=S.g[0]+E&4294967295,S.g[1]=S.g[1]+(N+(A<<21&4294967295|A>>>11))&4294967295,S.g[2]=S.g[2]+N&4294967295,S.g[3]=S.g[3]+k&4294967295}r.prototype.u=function(S,E){E===void 0&&(E=S.length);for(var _=E-this.blockSize,T=this.B,N=this.h,k=0;k<E;){if(N==0)for(;k<=_;)s(this,S,k),k+=this.blockSize;if(typeof S=="string"){for(;k<E;)if(T[N++]=S.charCodeAt(k++),N==this.blockSize){s(this,T),N=0;break}}else for(;k<E;)if(T[N++]=S[k++],N==this.blockSize){s(this,T),N=0;break}}this.h=N,this.o+=E},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var E=1;E<S.length-8;++E)S[E]=0;var _=8*this.o;for(E=S.length-8;E<S.length;++E)S[E]=_&255,_/=256;for(this.u(S),S=Array(16),E=_=0;4>E;++E)for(var T=0;32>T;T+=8)S[_++]=this.g[E]>>>T&255;return S};function i(S,E){var _=a;return Object.prototype.hasOwnProperty.call(_,S)?_[S]:_[S]=E(S)}function o(S,E){this.h=E;for(var _=[],T=!0,N=S.length-1;0<=N;N--){var k=S[N]|0;T&&k==E||(_[N]=k,T=!1)}this.g=_}var a={};function c(S){return-128<=S&&128>S?i(S,function(E){return new o([E|0],0>E?-1:0)}):new o([S|0],0>S?-1:0)}function u(S){if(isNaN(S)||!isFinite(S))return h;if(0>S)return P(u(-S));for(var E=[],_=1,T=0;S>=_;T++)E[T]=S/_|0,_*=4294967296;return new o(E,0)}function f(S,E){if(S.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(S.charAt(0)=="-")return P(f(S.substring(1),E));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(E,8)),T=h,N=0;N<S.length;N+=8){var k=Math.min(8,S.length-N),A=parseInt(S.substring(N,N+k),E);8>k?(k=u(Math.pow(E,k)),T=T.j(k).add(u(A))):(T=T.j(_),T=T.add(u(A)))}return T}var h=c(0),p=c(1),m=c(16777216);t=o.prototype,t.m=function(){if(b(this))return-P(this).m();for(var S=0,E=1,_=0;_<this.g.length;_++){var T=this.i(_);S+=(0<=T?T:4294967296+T)*E,E*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(y(this))return"0";if(b(this))return"-"+P(this).toString(S);for(var E=u(Math.pow(S,6)),_=this,T="";;){var N=I(_,E).g;_=O(_,N.j(E));var k=((0<_.g.length?_.g[0]:_.h)>>>0).toString(S);if(_=N,y(_))return k+T;for(;6>k.length;)k="0"+k;T=k+T}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function y(S){if(S.h!=0)return!1;for(var E=0;E<S.g.length;E++)if(S.g[E]!=0)return!1;return!0}function b(S){return S.h==-1}t.l=function(S){return S=O(this,S),b(S)?-1:y(S)?0:1};function P(S){for(var E=S.g.length,_=[],T=0;T<E;T++)_[T]=~S.g[T];return new o(_,~S.h).add(p)}t.abs=function(){return b(this)?P(this):this},t.add=function(S){for(var E=Math.max(this.g.length,S.g.length),_=[],T=0,N=0;N<=E;N++){var k=T+(this.i(N)&65535)+(S.i(N)&65535),A=(k>>>16)+(this.i(N)>>>16)+(S.i(N)>>>16);T=A>>>16,k&=65535,A&=65535,_[N]=A<<16|k}return new o(_,_[_.length-1]&-2147483648?-1:0)};function O(S,E){return S.add(P(E))}t.j=function(S){if(y(this)||y(S))return h;if(b(this))return b(S)?P(this).j(P(S)):P(P(this).j(S));if(b(S))return P(this.j(P(S)));if(0>this.l(m)&&0>S.l(m))return u(this.m()*S.m());for(var E=this.g.length+S.g.length,_=[],T=0;T<2*E;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var N=0;N<S.g.length;N++){var k=this.i(T)>>>16,A=this.i(T)&65535,ge=S.i(N)>>>16,Ee=S.i(N)&65535;_[2*T+2*N]+=A*Ee,C(_,2*T+2*N),_[2*T+2*N+1]+=k*Ee,C(_,2*T+2*N+1),_[2*T+2*N+1]+=A*ge,C(_,2*T+2*N+1),_[2*T+2*N+2]+=k*ge,C(_,2*T+2*N+2)}for(T=0;T<E;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=E;T<2*E;T++)_[T]=0;return new o(_,0)};function C(S,E){for(;(S[E]&65535)!=S[E];)S[E+1]+=S[E]>>>16,S[E]&=65535,E++}function v(S,E){this.g=S,this.h=E}function I(S,E){if(y(E))throw Error("division by zero");if(y(S))return new v(h,h);if(b(S))return E=I(P(S),E),new v(P(E.g),P(E.h));if(b(E))return E=I(S,P(E)),new v(P(E.g),E.h);if(30<S.g.length){if(b(S)||b(E))throw Error("slowDivide_ only works with positive integers.");for(var _=p,T=E;0>=T.l(S);)_=D(_),T=D(T);var N=F(_,1),k=F(T,1);for(T=F(T,2),_=F(_,2);!y(T);){var A=k.add(T);0>=A.l(S)&&(N=N.add(_),k=A),T=F(T,1),_=F(_,1)}return E=O(S,N.j(E)),new v(N,E)}for(N=h;0<=S.l(E);){for(_=Math.max(1,Math.floor(S.m()/E.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),k=u(_),A=k.j(E);b(A)||0<A.l(S);)_-=T,k=u(_),A=k.j(E);y(k)&&(k=p),N=N.add(k),S=O(S,A)}return new v(N,S)}t.A=function(S){return I(this,S).h},t.and=function(S){for(var E=Math.max(this.g.length,S.g.length),_=[],T=0;T<E;T++)_[T]=this.i(T)&S.i(T);return new o(_,this.h&S.h)},t.or=function(S){for(var E=Math.max(this.g.length,S.g.length),_=[],T=0;T<E;T++)_[T]=this.i(T)|S.i(T);return new o(_,this.h|S.h)},t.xor=function(S){for(var E=Math.max(this.g.length,S.g.length),_=[],T=0;T<E;T++)_[T]=this.i(T)^S.i(T);return new o(_,this.h^S.h)};function D(S){for(var E=S.g.length+1,_=[],T=0;T<E;T++)_[T]=S.i(T)<<1|S.i(T-1)>>>31;return new o(_,S.h)}function F(S,E){var _=E>>5;E%=32;for(var T=S.g.length-_,N=[],k=0;k<T;k++)N[k]=0<E?S.i(k+_)>>>E|S.i(k+_+1)<<32-E:S.i(k+_);return new o(N,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Zb=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,es=o}).apply(typeof Jy<"u"?Jy:typeof self<"u"?self:typeof window<"u"?window:{});var Cl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var eT,No,tT,zl,Sh,nT,rT,sT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,g){return l==Array.prototype||l==Object.prototype||(l[d]=g.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cl=="object"&&Cl];for(var d=0;d<l.length;++d){var g=l[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function s(l,d){if(d)e:{var g=r;l=l.split(".");for(var w=0;w<l.length-1;w++){var L=l[w];if(!(L in g))break e;g=g[L]}l=l[l.length-1],w=g[l],d=d(w),d!=w&&d!=null&&e(g,l,{configurable:!0,writable:!0,value:d})}}function i(l,d){l instanceof String&&(l+="");var g=0,w=!1,L={next:function(){if(!w&&g<l.length){var V=g++;return{value:d(V,l[V]),done:!1}}return w=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}s("Array.prototype.values",function(l){return l||function(){return i(this,function(d,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function u(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function f(l,d,g){return l.call.apply(l.bind,arguments)}function h(l,d,g){if(!l)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,w),l.apply(d,L)}}return function(){return l.apply(d,arguments)}}function p(l,d,g){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:h,p.apply(null,arguments)}function m(l,d){var g=Array.prototype.slice.call(arguments,1);return function(){var w=g.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function y(l,d){function g(){}g.prototype=d.prototype,l.aa=d.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(w,L,V){for(var Y=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)Y[$e-2]=arguments[$e];return d.prototype[L].apply(w,Y)}}function b(l){const d=l.length;if(0<d){const g=Array(d);for(let w=0;w<d;w++)g[w]=l[w];return g}return[]}function P(l,d){for(let g=1;g<arguments.length;g++){const w=arguments[g];if(c(w)){const L=l.length||0,V=w.length||0;l.length=L+V;for(let Y=0;Y<V;Y++)l[L+Y]=w[Y]}else l.push(w)}}class O{constructor(d,g){this.i=d,this.j=g,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function C(l){return/^[\s\xa0]*$/.test(l)}function v(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function I(l){return I[" "](l),l}I[" "]=function(){};var D=v().indexOf("Gecko")!=-1&&!(v().toLowerCase().indexOf("webkit")!=-1&&v().indexOf("Edge")==-1)&&!(v().indexOf("Trident")!=-1||v().indexOf("MSIE")!=-1)&&v().indexOf("Edge")==-1;function F(l,d,g){for(const w in l)d.call(g,l[w],w,l)}function S(l,d){for(const g in l)d.call(void 0,l[g],g,l)}function E(l){const d={};for(const g in l)d[g]=l[g];return d}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(l,d){let g,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(g in w)l[g]=w[g];for(let V=0;V<_.length;V++)g=_[V],Object.prototype.hasOwnProperty.call(w,g)&&(l[g]=w[g])}}function N(l){var d=1;l=l.split(":");const g=[];for(;0<d&&l.length;)g.push(l.shift()),d--;return l.length&&g.push(l.join(":")),g}function k(l){a.setTimeout(()=>{throw l},0)}function A(){var l=Be;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class ge{constructor(){this.h=this.g=null}add(d,g){const w=Ee.get();w.set(d,g),this.h?this.h.next=w:this.g=w,this.h=w}}var Ee=new O(()=>new ee,l=>l.reset());class ee{constructor(){this.next=this.g=this.h=null}set(d,g){this.h=d,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let ie,re=!1,Be=new ge,_n=()=>{const l=a.Promise.resolve(void 0);ie=()=>{l.then(ln)}};var ln=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(g){k(g)}var d=Ee;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}re=!1};function Xe(){this.s=this.s,this.C=this.C}Xe.prototype.s=!1,Xe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Xe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ze(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}Ze.prototype.h=function(){this.defaultPrevented=!0};var Sr=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};a.addEventListener("test",g,d),a.removeEventListener("test",g,d)}catch{}return l}();function On(l,d){if(Ze.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(D){e:{try{I(d.nodeName);var L=!0;break e}catch{}L=!1}L||(d=null)}}else g=="mouseover"?d=l.fromElement:g=="mouseout"&&(d=l.toElement);this.relatedTarget=d,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Gt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&On.aa.h.call(this)}}y(On,Ze);var Gt={2:"touch",3:"pen",4:"mouse"};On.prototype.h=function(){On.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var j="closure_listenable_"+(1e6*Math.random()|0),te=0;function Z(l,d,g,w,L){this.listener=l,this.proxy=null,this.src=d,this.type=g,this.capture=!!w,this.ha=L,this.key=++te,this.da=this.fa=!1}function se(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ae(l){this.src=l,this.g={},this.h=0}Ae.prototype.add=function(l,d,g,w,L){var V=l.toString();l=this.g[V],l||(l=this.g[V]=[],this.h++);var Y=R(l,d,w,L);return-1<Y?(d=l[Y],g||(d.fa=!1)):(d=new Z(d,this.src,V,!!w,L),d.fa=g,l.push(d)),d};function Ve(l,d){var g=d.type;if(g in l.g){var w=l.g[g],L=Array.prototype.indexOf.call(w,d,void 0),V;(V=0<=L)&&Array.prototype.splice.call(w,L,1),V&&(se(d),l.g[g].length==0&&(delete l.g[g],l.h--))}}function R(l,d,g,w){for(var L=0;L<l.length;++L){var V=l[L];if(!V.da&&V.listener==d&&V.capture==!!g&&V.ha==w)return L}return-1}var x="closure_lm_"+(1e6*Math.random()|0),M={};function H(l,d,g,w,L){if(Array.isArray(d)){for(var V=0;V<d.length;V++)H(l,d[V],g,w,L);return null}return g=ae(g),l&&l[j]?l.K(d,g,u(w)?!!w.capture:!1,L):$(l,d,g,!1,w,L)}function $(l,d,g,w,L,V){if(!d)throw Error("Invalid event type");var Y=u(L)?!!L.capture:!!L,$e=le(l);if($e||(l[x]=$e=new Ae(l)),g=$e.add(d,g,w,Y,V),g.proxy)return g;if(w=q(),g.proxy=w,w.src=l,w.listener=g,l.addEventListener)Sr||(L=Y),L===void 0&&(L=!1),l.addEventListener(d.toString(),w,L);else if(l.attachEvent)l.attachEvent(G(d.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return g}function q(){function l(g){return d.call(l.src,l.listener,g)}const d=z;return l}function Q(l,d,g,w,L){if(Array.isArray(d))for(var V=0;V<d.length;V++)Q(l,d[V],g,w,L);else w=u(w)?!!w.capture:!!w,g=ae(g),l&&l[j]?(l=l.i,d=String(d).toString(),d in l.g&&(V=l.g[d],g=R(V,g,w,L),-1<g&&(se(V[g]),Array.prototype.splice.call(V,g,1),V.length==0&&(delete l.g[d],l.h--)))):l&&(l=le(l))&&(d=l.g[d.toString()],l=-1,d&&(l=R(d,g,w,L)),(g=-1<l?d[l]:null)&&K(g))}function K(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[j])Ve(d.i,l);else{var g=l.type,w=l.proxy;d.removeEventListener?d.removeEventListener(g,w,l.capture):d.detachEvent?d.detachEvent(G(g),w):d.addListener&&d.removeListener&&d.removeListener(w),(g=le(d))?(Ve(g,l),g.h==0&&(g.src=null,d[x]=null)):se(l)}}}function G(l){return l in M?M[l]:M[l]="on"+l}function z(l,d){if(l.da)l=!0;else{d=new On(d,this);var g=l.listener,w=l.ha||l.src;l.fa&&K(l),l=g.call(w,d)}return l}function le(l){return l=l[x],l instanceof Ae?l:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(l){return typeof l=="function"?l:(l[J]||(l[J]=function(d){return l.handleEvent(d)}),l[J])}function oe(){Xe.call(this),this.i=new Ae(this),this.M=this,this.F=null}y(oe,Xe),oe.prototype[j]=!0,oe.prototype.removeEventListener=function(l,d,g,w){Q(this,l,d,g,w)};function he(l,d){var g,w=l.F;if(w)for(g=[];w;w=w.F)g.push(w);if(l=l.M,w=d.type||d,typeof d=="string")d=new Ze(d,l);else if(d instanceof Ze)d.target=d.target||l;else{var L=d;d=new Ze(w,l),T(d,L)}if(L=!0,g)for(var V=g.length-1;0<=V;V--){var Y=d.g=g[V];L=Ne(Y,w,!0,d)&&L}if(Y=d.g=l,L=Ne(Y,w,!0,d)&&L,L=Ne(Y,w,!1,d)&&L,g)for(V=0;V<g.length;V++)Y=d.g=g[V],L=Ne(Y,w,!1,d)&&L}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var g=l.g[d],w=0;w<g.length;w++)se(g[w]);delete l.g[d],l.h--}}this.F=null},oe.prototype.K=function(l,d,g,w){return this.i.add(String(l),d,!1,g,w)},oe.prototype.L=function(l,d,g,w){return this.i.add(String(l),d,!0,g,w)};function Ne(l,d,g,w){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var L=!0,V=0;V<d.length;++V){var Y=d[V];if(Y&&!Y.da&&Y.capture==g){var $e=Y.listener,vt=Y.ha||Y.src;Y.fa&&Ve(l.i,Y),L=$e.call(vt,w)!==!1&&L}}return L&&!w.defaultPrevented}function ke(l,d,g){if(typeof l=="function")g&&(l=p(l,g));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function yt(l){l.g=ke(()=>{l.g=null,l.i&&(l.i=!1,yt(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class dt extends Xe{constructor(d,g){super(),this.m=d,this.l=g,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:yt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _t(l){Xe.call(this),this.h=l,this.g={}}y(_t,Xe);var Ct=[];function Rr(l){F(l.g,function(d,g){this.g.hasOwnProperty(g)&&K(d)},l),l.g={}}_t.prototype.N=function(){_t.aa.N.call(this),Rr(this)},_t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ti=a.JSON.stringify,$t=a.JSON.parse,cn=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function ni(){}ni.prototype.h=null;function co(l){return l.h||(l.h=l.i())}function em(){}var uo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ru(){Ze.call(this,"d")}y(Ru,Ze);function Cu(){Ze.call(this,"c")}y(Cu,Ze);var gs={},tm=null;function Xa(){return tm=tm||new oe}gs.La="serverreachability";function nm(l){Ze.call(this,gs.La,l)}y(nm,Ze);function fo(l){const d=Xa();he(d,new nm(d))}gs.STAT_EVENT="statevent";function rm(l,d){Ze.call(this,gs.STAT_EVENT,l),this.stat=d}y(rm,Ze);function jt(l){const d=Xa();he(d,new rm(d,l))}gs.Ma="timingevent";function sm(l,d){Ze.call(this,gs.Ma,l),this.size=d}y(sm,Ze);function ho(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function po(){this.g=!0}po.prototype.xa=function(){this.g=!1};function nI(l,d,g,w,L,V){l.info(function(){if(l.g)if(V)for(var Y="",$e=V.split("&"),vt=0;vt<$e.length;vt++){var Oe=$e[vt].split("=");if(1<Oe.length){var Pt=Oe[0];Oe=Oe[1];var kt=Pt.split("_");Y=2<=kt.length&&kt[1]=="type"?Y+(Pt+"="+Oe+"&"):Y+(Pt+"=redacted&")}}else Y=null;else Y=V;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+d+`
`+g+`
`+Y})}function rI(l,d,g,w,L,V,Y){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+d+`
`+g+`
`+V+" "+Y})}function ri(l,d,g,w){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+iI(l,g)+(w?" "+w:"")})}function sI(l,d){l.info(function(){return"TIMEOUT: "+d})}po.prototype.info=function(){};function iI(l,d){if(!l.g)return d;if(!d)return null;try{var g=JSON.parse(d);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var w=g[l];if(!(2>w.length)){var L=w[1];if(Array.isArray(L)&&!(1>L.length)){var V=L[0];if(V!="noop"&&V!="stop"&&V!="close")for(var Y=1;Y<L.length;Y++)L[Y]=""}}}}return ti(g)}catch{return d}}var Za={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},im={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pu;function el(){}y(el,ni),el.prototype.g=function(){return new XMLHttpRequest},el.prototype.i=function(){return{}},Pu=new el;function Cr(l,d,g,w){this.j=l,this.i=d,this.l=g,this.R=w||1,this.U=new _t(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new om}function om(){this.i=null,this.g="",this.h=!1}var am={},ku={};function Ou(l,d,g){l.L=1,l.v=sl(Zn(d)),l.m=g,l.P=!0,lm(l,null)}function lm(l,d){l.F=Date.now(),tl(l),l.A=Zn(l.v);var g=l.A,w=l.R;Array.isArray(w)||(w=[String(w)]),bm(g.i,"t",w),l.C=0,g=l.j.J,l.h=new om,l.g=$m(l.j,g?d:null,!l.m),0<l.O&&(l.M=new dt(p(l.Y,l,l.g),l.O)),d=l.U,g=l.g,w=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(Ct[0]=L.toString()),L=Ct);for(var V=0;V<L.length;V++){var Y=H(g,L[V],w||d.handleEvent,!1,d.h||d);if(!Y)break;d.g[Y.key]=Y}d=l.H?E(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),fo(),nI(l.i,l.u,l.A,l.l,l.R,l.m)}Cr.prototype.ca=function(l){l=l.target;const d=this.M;d&&er(l)==3?d.j():this.Y(l)},Cr.prototype.Y=function(l){try{if(l==this.g)e:{const kt=er(this.g);var d=this.g.Ba();const oi=this.g.Z();if(!(3>kt)&&(kt!=3||this.g&&(this.h.h||this.g.oa()||Pm(this.g)))){this.J||kt!=4||d==7||(d==8||0>=oi?fo(3):fo(2)),Nu(this);var g=this.g.Z();this.X=g;t:if(cm(this)){var w=Pm(this.g);l="";var L=w.length,V=er(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ys(this),mo(this);var Y="";break t}this.h.i=new a.TextDecoder}for(d=0;d<L;d++)this.h.h=!0,l+=this.h.i.decode(w[d],{stream:!(V&&d==L-1)});w.length=0,this.h.g+=l,this.C=0,Y=this.h.g}else Y=this.g.oa();if(this.o=g==200,rI(this.i,this.u,this.A,this.l,this.R,kt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var $e,vt=this.g;if(($e=vt.g?vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C($e)){var Oe=$e;break t}}Oe=null}if(g=Oe)ri(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xu(this,g);else{this.o=!1,this.s=3,jt(12),ys(this),mo(this);break e}}if(this.P){g=!0;let vn;for(;!this.J&&this.C<Y.length;)if(vn=oI(this,Y),vn==ku){kt==4&&(this.s=4,jt(14),g=!1),ri(this.i,this.l,null,"[Incomplete Response]");break}else if(vn==am){this.s=4,jt(15),ri(this.i,this.l,Y,"[Invalid Chunk]"),g=!1;break}else ri(this.i,this.l,vn,null),xu(this,vn);if(cm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),kt!=4||Y.length!=0||this.h.h||(this.s=1,jt(16),g=!1),this.o=this.o&&g,!g)ri(this.i,this.l,Y,"[Invalid Chunked Response]"),ys(this),mo(this);else if(0<Y.length&&!this.W){this.W=!0;var Pt=this.j;Pt.g==this&&Pt.ba&&!Pt.M&&(Pt.j.info("Great, no buffering proxy detected. Bytes received: "+Y.length),Uu(Pt),Pt.M=!0,jt(11))}}else ri(this.i,this.l,Y,null),xu(this,Y);kt==4&&ys(this),this.o&&!this.J&&(kt==4?Mm(this.j,this):(this.o=!1,tl(this)))}else TI(this.g),g==400&&0<Y.indexOf("Unknown SID")?(this.s=3,jt(12)):(this.s=0,jt(13)),ys(this),mo(this)}}}catch{}finally{}};function cm(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function oI(l,d){var g=l.C,w=d.indexOf(`
`,g);return w==-1?ku:(g=Number(d.substring(g,w)),isNaN(g)?am:(w+=1,w+g>d.length?ku:(d=d.slice(w,w+g),l.C=w+g,d)))}Cr.prototype.cancel=function(){this.J=!0,ys(this)};function tl(l){l.S=Date.now()+l.I,um(l,l.I)}function um(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=ho(p(l.ba,l),d)}function Nu(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Cr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(sI(this.i,this.A),this.L!=2&&(fo(),jt(17)),ys(this),this.s=2,mo(this)):um(this,this.S-l)};function mo(l){l.j.G==0||l.J||Mm(l.j,l)}function ys(l){Nu(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,Rr(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function xu(l,d){try{var g=l.j;if(g.G!=0&&(g.g==l||Du(g.h,l))){if(!l.K&&Du(g.h,l)&&g.G==3){try{var w=g.Da.g.parse(d)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)ul(g),ll(g);else break e;Fu(g),jt(18)}}else g.za=L[1],0<g.za-g.T&&37500>L[2]&&g.F&&g.v==0&&!g.C&&(g.C=ho(p(g.Za,g),6e3));if(1>=dm(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else vs(g,11)}else if((l.K||g.g==l)&&ul(g),!C(d))for(L=g.Da.g.parse(d),d=0;d<L.length;d++){let Oe=L[d];if(g.T=Oe[0],Oe=Oe[1],g.G==2)if(Oe[0]=="c"){g.K=Oe[1],g.ia=Oe[2];const Pt=Oe[3];Pt!=null&&(g.la=Pt,g.j.info("VER="+g.la));const kt=Oe[4];kt!=null&&(g.Aa=kt,g.j.info("SVER="+g.Aa));const oi=Oe[5];oi!=null&&typeof oi=="number"&&0<oi&&(w=1.5*oi,g.L=w,g.j.info("backChannelRequestTimeoutMs_="+w)),w=g;const vn=l.g;if(vn){const hl=vn.g?vn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(hl){var V=w.h;V.g||hl.indexOf("spdy")==-1&&hl.indexOf("quic")==-1&&hl.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Lu(V,V.h),V.h=null))}if(w.D){const $u=vn.g?vn.g.getResponseHeader("X-HTTP-Session-Id"):null;$u&&(w.ya=$u,ze(w.I,w.D,$u))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),w=g;var Y=l;if(w.qa=Um(w,w.J?w.ia:null,w.W),Y.K){pm(w.h,Y);var $e=Y,vt=w.L;vt&&($e.I=vt),$e.B&&(Nu($e),tl($e)),w.g=Y}else Dm(w);0<g.i.length&&cl(g)}else Oe[0]!="stop"&&Oe[0]!="close"||vs(g,7);else g.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?vs(g,7):Vu(g):Oe[0]!="noop"&&g.l&&g.l.ta(Oe),g.v=0)}}fo(4)}catch{}}var aI=class{constructor(l,d){this.g=l,this.map=d}};function fm(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function hm(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function dm(l){return l.h?1:l.g?l.g.size:0}function Du(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function Lu(l,d){l.g?l.g.add(d):l.h=d}function pm(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}fm.prototype.cancel=function(){if(this.i=mm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function mm(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const g of l.g.values())d=d.concat(g.D);return d}return b(l.i)}function lI(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var d=[],g=l.length,w=0;w<g;w++)d.push(l[w]);return d}d=[],g=0;for(w in l)d[g++]=l[w];return d}function cI(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var d=[];l=l.length;for(var g=0;g<l;g++)d.push(g);return d}d=[],g=0;for(const w in l)d[g++]=w;return d}}}function gm(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var g=cI(l),w=lI(l),L=w.length,V=0;V<L;V++)d.call(void 0,w[V],g&&g[V],l)}var ym=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uI(l,d){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var w=l[g].indexOf("="),L=null;if(0<=w){var V=l[g].substring(0,w);L=l[g].substring(w+1)}else V=l[g];d(V,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function _s(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof _s){this.h=l.h,nl(this,l.j),this.o=l.o,this.g=l.g,rl(this,l.s),this.l=l.l;var d=l.i,g=new _o;g.i=d.i,d.g&&(g.g=new Map(d.g),g.h=d.h),_m(this,g),this.m=l.m}else l&&(d=String(l).match(ym))?(this.h=!1,nl(this,d[1]||"",!0),this.o=go(d[2]||""),this.g=go(d[3]||"",!0),rl(this,d[4]),this.l=go(d[5]||"",!0),_m(this,d[6]||"",!0),this.m=go(d[7]||"")):(this.h=!1,this.i=new _o(null,this.h))}_s.prototype.toString=function(){var l=[],d=this.j;d&&l.push(yo(d,vm,!0),":");var g=this.g;return(g||d=="file")&&(l.push("//"),(d=this.o)&&l.push(yo(d,vm,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(yo(g,g.charAt(0)=="/"?dI:hI,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",yo(g,mI)),l.join("")};function Zn(l){return new _s(l)}function nl(l,d,g){l.j=g?go(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function rl(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function _m(l,d,g){d instanceof _o?(l.i=d,gI(l.i,l.h)):(g||(d=yo(d,pI)),l.i=new _o(d,l.h))}function ze(l,d,g){l.i.set(d,g)}function sl(l){return ze(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function go(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function yo(l,d,g){return typeof l=="string"?(l=encodeURI(l).replace(d,fI),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function fI(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var vm=/[#\/\?@]/g,hI=/[#\?:]/g,dI=/[#\?]/g,pI=/[#\?@]/g,mI=/#/g;function _o(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function Pr(l){l.g||(l.g=new Map,l.h=0,l.i&&uI(l.i,function(d,g){l.add(decodeURIComponent(d.replace(/\+/g," ")),g)}))}t=_o.prototype,t.add=function(l,d){Pr(this),this.i=null,l=si(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(d),this.h+=1,this};function Em(l,d){Pr(l),d=si(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function wm(l,d){return Pr(l),d=si(l,d),l.g.has(d)}t.forEach=function(l,d){Pr(this),this.g.forEach(function(g,w){g.forEach(function(L){l.call(d,L,w,this)},this)},this)},t.na=function(){Pr(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),g=[];for(let w=0;w<d.length;w++){const L=l[w];for(let V=0;V<L.length;V++)g.push(d[w])}return g},t.V=function(l){Pr(this);let d=[];if(typeof l=="string")wm(this,l)&&(d=d.concat(this.g.get(si(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)d=d.concat(l[g])}return d},t.set=function(l,d){return Pr(this),this.i=null,l=si(this,l),wm(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function bm(l,d,g){Em(l,d),0<g.length&&(l.i=null,l.g.set(si(l,d),b(g)),l.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var g=0;g<d.length;g++){var w=d[g];const V=encodeURIComponent(String(w)),Y=this.V(w);for(w=0;w<Y.length;w++){var L=V;Y[w]!==""&&(L+="="+encodeURIComponent(String(Y[w]))),l.push(L)}}return this.i=l.join("&")};function si(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function gI(l,d){d&&!l.j&&(Pr(l),l.i=null,l.g.forEach(function(g,w){var L=w.toLowerCase();w!=L&&(Em(this,w),bm(this,L,g))},l)),l.j=d}function yI(l,d){const g=new po;if(a.Image){const w=new Image;w.onload=m(kr,g,"TestLoadImage: loaded",!0,d,w),w.onerror=m(kr,g,"TestLoadImage: error",!1,d,w),w.onabort=m(kr,g,"TestLoadImage: abort",!1,d,w),w.ontimeout=m(kr,g,"TestLoadImage: timeout",!1,d,w),a.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else d(!1)}function _I(l,d){const g=new po,w=new AbortController,L=setTimeout(()=>{w.abort(),kr(g,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:w.signal}).then(V=>{clearTimeout(L),V.ok?kr(g,"TestPingServer: ok",!0,d):kr(g,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(L),kr(g,"TestPingServer: error",!1,d)})}function kr(l,d,g,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(g)}catch{}}function vI(){this.g=new cn}function EI(l,d,g){const w=g||"";try{gm(l,function(L,V){let Y=L;u(L)&&(Y=ti(L)),d.push(w+V+"="+encodeURIComponent(Y))})}catch(L){throw d.push(w+"type="+encodeURIComponent("_badmap")),L}}function il(l){this.l=l.Ub||null,this.j=l.eb||!1}y(il,ni),il.prototype.g=function(){return new ol(this.l,this.j)},il.prototype.i=function(l){return function(){return l}}({});function ol(l,d){oe.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}y(ol,oe),t=ol.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,Eo(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vo(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Eo(this)),this.g&&(this.readyState=3,Eo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Tm(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Tm(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?vo(this):Eo(this),this.readyState==3&&Tm(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,vo(this))},t.Qa=function(l){this.g&&(this.response=l,vo(this))},t.ga=function(){this.g&&vo(this)};function vo(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Eo(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var g=d.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=d.next();return l.join(`\r
`)};function Eo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(ol.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Am(l){let d="";return F(l,function(g,w){d+=w,d+=":",d+=g,d+=`\r
`}),d}function Mu(l,d,g){e:{for(w in g){var w=!1;break e}w=!0}w||(g=Am(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):ze(l,d,g))}function tt(l){oe.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}y(tt,oe);var wI=/^https?$/i,bI=["POST","PUT"];t=tt.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,g,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pu.g(),this.v=this.o?co(this.o):co(Pu),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(V){Im(this,V);return}if(l=g||"",g=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)g.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const V of w.keys())g.set(V,w.get(V));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(g.keys()).find(V=>V.toLowerCase()=="content-type"),L=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(bI,d,void 0))||w||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,Y]of g)this.g.setRequestHeader(V,Y);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Cm(this),this.u=!0,this.g.send(l),this.u=!1}catch(V){Im(this,V)}};function Im(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,Sm(l),al(l)}function Sm(l){l.A||(l.A=!0,he(l,"complete"),he(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,he(this,"complete"),he(this,"abort"),al(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),al(this,!0)),tt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Rm(this):this.bb())},t.bb=function(){Rm(this)};function Rm(l){if(l.h&&typeof o<"u"&&(!l.v[1]||er(l)!=4||l.Z()!=2)){if(l.u&&er(l)==4)ke(l.Ea,0,l);else if(he(l,"readystatechange"),er(l)==4){l.h=!1;try{const Y=l.Z();e:switch(Y){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var g;if(!(g=d)){var w;if(w=Y===0){var L=String(l.D).match(ym)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),w=!wI.test(L?L.toLowerCase():"")}g=w}if(g)he(l,"complete"),he(l,"success");else{l.m=6;try{var V=2<er(l)?l.g.statusText:""}catch{V=""}l.l=V+" ["+l.Z()+"]",Sm(l)}}finally{al(l)}}}}function al(l,d){if(l.g){Cm(l);const g=l.g,w=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||he(l,"ready");try{g.onreadystatechange=w}catch{}}}function Cm(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function er(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<er(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),$t(d)}};function Pm(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function TI(l){const d={};l=(l.g&&2<=er(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(C(l[w]))continue;var g=N(l[w]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const V=d[L]||[];d[L]=V,V.push(g)}S(d,function(w){return w.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function wo(l,d,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||d}function km(l){this.Aa=0,this.i=[],this.j=new po,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=wo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=wo("baseRetryDelayMs",5e3,l),this.cb=wo("retryDelaySeedMs",1e4,l),this.Wa=wo("forwardChannelMaxRetries",2,l),this.wa=wo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new fm(l&&l.concurrentRequestLimit),this.Da=new vI,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=km.prototype,t.la=8,t.G=1,t.connect=function(l,d,g,w){jt(0),this.W=l,this.H=d||{},g&&w!==void 0&&(this.H.OSID=g,this.H.OAID=w),this.F=this.X,this.I=Um(this,null,this.W),cl(this)};function Vu(l){if(Om(l),l.G==3){var d=l.U++,g=Zn(l.I);if(ze(g,"SID",l.K),ze(g,"RID",d),ze(g,"TYPE","terminate"),bo(l,g),d=new Cr(l,l.j,d),d.L=2,d.v=sl(Zn(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!g&&a.Image&&(new Image().src=d.v,g=!0),g||(d.g=$m(d.j,null),d.g.ea(d.v)),d.F=Date.now(),tl(d)}Fm(l)}function ll(l){l.g&&(Uu(l),l.g.cancel(),l.g=null)}function Om(l){ll(l),l.u&&(a.clearTimeout(l.u),l.u=null),ul(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function cl(l){if(!hm(l.h)&&!l.s){l.s=!0;var d=l.Ga;ie||_n(),re||(ie(),re=!0),Be.add(d,l),l.B=0}}function AI(l,d){return dm(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=ho(p(l.Ga,l,d),Vm(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new Cr(this,this.j,l);let V=this.o;if(this.S&&(V?(V=E(V),T(V,this.S)):V=this.S),this.m!==null||this.O||(L.H=V,V=null),this.P)e:{for(var d=0,g=0;g<this.i.length;g++){t:{var w=this.i[g];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(d+=w,4096<d){d=g;break e}if(d===4096||g===this.i.length-1){d=g+1;break e}}d=1e3}else d=1e3;d=xm(this,L,d),g=Zn(this.I),ze(g,"RID",l),ze(g,"CVER",22),this.D&&ze(g,"X-HTTP-Session-Id",this.D),bo(this,g),V&&(this.O?d="headers="+encodeURIComponent(String(Am(V)))+"&"+d:this.m&&Mu(g,this.m,V)),Lu(this.h,L),this.Ua&&ze(g,"TYPE","init"),this.P?(ze(g,"$req",d),ze(g,"SID","null"),L.T=!0,Ou(L,g,null)):Ou(L,g,d),this.G=2}}else this.G==3&&(l?Nm(this,l):this.i.length==0||hm(this.h)||Nm(this))};function Nm(l,d){var g;d?g=d.l:g=l.U++;const w=Zn(l.I);ze(w,"SID",l.K),ze(w,"RID",g),ze(w,"AID",l.T),bo(l,w),l.m&&l.o&&Mu(w,l.m,l.o),g=new Cr(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),d&&(l.i=d.D.concat(l.i)),d=xm(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Lu(l.h,g),Ou(g,w,d)}function bo(l,d){l.H&&F(l.H,function(g,w){ze(d,w,g)}),l.l&&gm({},function(g,w){ze(d,w,g)})}function xm(l,d,g){g=Math.min(l.i.length,g);var w=l.l?p(l.l.Na,l.l,l):null;e:{var L=l.i;let V=-1;for(;;){const Y=["count="+g];V==-1?0<g?(V=L[0].g,Y.push("ofs="+V)):V=0:Y.push("ofs="+V);let $e=!0;for(let vt=0;vt<g;vt++){let Oe=L[vt].g;const Pt=L[vt].map;if(Oe-=V,0>Oe)V=Math.max(0,L[vt].g-100),$e=!1;else try{EI(Pt,Y,"req"+Oe+"_")}catch{w&&w(Pt)}}if($e){w=Y.join("&");break e}}}return l=l.i.splice(0,g),d.D=l,w}function Dm(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;ie||_n(),re||(ie(),re=!0),Be.add(d,l),l.v=0}}function Fu(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=ho(p(l.Fa,l),Vm(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Lm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=ho(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,jt(10),ll(this),Lm(this))};function Uu(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Lm(l){l.g=new Cr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=Zn(l.qa);ze(d,"RID","rpc"),ze(d,"SID",l.K),ze(d,"AID",l.T),ze(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&ze(d,"TO",l.ja),ze(d,"TYPE","xmlhttp"),bo(l,d),l.m&&l.o&&Mu(d,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=sl(Zn(d)),g.m=null,g.P=!0,lm(g,l)}t.Za=function(){this.C!=null&&(this.C=null,ll(this),Fu(this),jt(19))};function ul(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Mm(l,d){var g=null;if(l.g==d){ul(l),Uu(l),l.g=null;var w=2}else if(Du(l.h,d))g=d.D,pm(l.h,d),w=1;else return;if(l.G!=0){if(d.o)if(w==1){g=d.m?d.m.length:0,d=Date.now()-d.F;var L=l.B;w=Xa(),he(w,new sm(w,g)),cl(l)}else Dm(l);else if(L=d.s,L==3||L==0&&0<d.X||!(w==1&&AI(l,d)||w==2&&Fu(l)))switch(g&&0<g.length&&(d=l.h,d.i=d.i.concat(g)),L){case 1:vs(l,5);break;case 4:vs(l,10);break;case 3:vs(l,6);break;default:vs(l,2)}}}function Vm(l,d){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*d}function vs(l,d){if(l.j.info("Error code "+d),d==2){var g=p(l.fb,l),w=l.Xa;const L=!w;w=new _s(w||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||nl(w,"https"),sl(w),L?yI(w.toString(),g):_I(w.toString(),g)}else jt(2);l.G=0,l.l&&l.l.sa(d),Fm(l),Om(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),jt(2)):(this.j.info("Failed to ping google.com"),jt(1))};function Fm(l){if(l.G=0,l.ka=[],l.l){const d=mm(l.h);(d.length!=0||l.i.length!=0)&&(P(l.ka,d),P(l.ka,l.i),l.h.i.length=0,b(l.i),l.i.length=0),l.l.ra()}}function Um(l,d,g){var w=g instanceof _s?Zn(g):new _s(g);if(w.g!="")d&&(w.g=d+"."+w.g),rl(w,w.s);else{var L=a.location;w=L.protocol,d=d?d+"."+L.hostname:L.hostname,L=+L.port;var V=new _s(null);w&&nl(V,w),d&&(V.g=d),L&&rl(V,L),g&&(V.l=g),w=V}return g=l.D,d=l.ya,g&&d&&ze(w,g,d),ze(w,"VER",l.la),bo(l,w),w}function $m(l,d,g){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new tt(new il({eb:g})):new tt(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function jm(){}t=jm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function fl(){}fl.prototype.g=function(l,d){return new Zt(l,d)};function Zt(l,d){oe.call(this),this.g=new km(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!C(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!C(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new ii(this)}y(Zt,oe),Zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Zt.prototype.close=function(){Vu(this.g)},Zt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=ti(l),l=g);d.i.push(new aI(d.Ya++,l)),d.G==3&&cl(d)},Zt.prototype.N=function(){this.g.l=null,delete this.j,Vu(this.g),delete this.g,Zt.aa.N.call(this)};function Bm(l){Ru.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const g in d){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}y(Bm,Ru);function Hm(){Cu.call(this),this.status=1}y(Hm,Cu);function ii(l){this.g=l}y(ii,jm),ii.prototype.ua=function(){he(this.g,"a")},ii.prototype.ta=function(l){he(this.g,new Bm(l))},ii.prototype.sa=function(l){he(this.g,new Hm)},ii.prototype.ra=function(){he(this.g,"b")},fl.prototype.createWebChannel=fl.prototype.g,Zt.prototype.send=Zt.prototype.o,Zt.prototype.open=Zt.prototype.m,Zt.prototype.close=Zt.prototype.close,sT=function(){return new fl},rT=function(){return Xa()},nT=gs,Sh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Za.NO_ERROR=0,Za.TIMEOUT=8,Za.HTTP_ERROR=6,zl=Za,im.COMPLETE="complete",tT=im,em.EventType=uo,uo.OPEN="a",uo.CLOSE="b",uo.ERROR="c",uo.MESSAGE="d",oe.prototype.listen=oe.prototype.K,No=em,tt.prototype.listenOnce=tt.prototype.L,tt.prototype.getLastError=tt.prototype.Ka,tt.prototype.getLastErrorCode=tt.prototype.Ba,tt.prototype.getStatus=tt.prototype.Z,tt.prototype.getResponseJson=tt.prototype.Oa,tt.prototype.getResponseText=tt.prototype.oa,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Ha,eT=tt}).apply(typeof Cl<"u"?Cl:typeof self<"u"?self:typeof window<"u"?window:{});const Xy="@firebase/firestore",Zy="4.9.0";/**
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
 */class Dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Dt.UNAUTHENTICATED=new Dt(null),Dt.GOOGLE_CREDENTIALS=new Dt("google-credentials-uid"),Dt.FIRST_PARTY=new Dt("first-party-uid"),Dt.MOCK_USER=new Dt("mock-user");/**
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
 */let no="12.0.0";/**
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
 */const js=new Hd("@firebase/firestore");function di(){return js.logLevel}function ne(t,...e){if(js.logLevel<=we.DEBUG){const n=e.map(np);js.debug(`Firestore (${no}): ${t}`,...n)}}function vr(t,...e){if(js.logLevel<=we.ERROR){const n=e.map(np);js.error(`Firestore (${no}): ${t}`,...n)}}function Hi(t,...e){if(js.logLevel<=we.WARN){const n=e.map(np);js.warn(`Firestore (${no}): ${t}`,...n)}}function np(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function me(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,iT(t,r,n)}function iT(t,e,n){let r=`FIRESTORE (${no}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw vr(r),new Error(r)}function Me(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||iT(e,s,r)}function _e(t,e){return t}/**
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
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends Xn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class dr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class oT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class MD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Dt.UNAUTHENTICATED))}shutdown(){}}class VD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class FD{constructor(e){this.t=e,this.currentUser=Dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Me(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new dr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new dr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new dr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Me(typeof r.accessToken=="string",31837,{l:r}),new oT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string",2055,{h:e}),new Dt(e)}}class UD{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Dt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class $D{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new UD(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class e_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jD{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,nn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Me(this.o===void 0,3512);const r=i=>{i.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new e_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new e_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function BD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class rp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=BD(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function be(t,e){return t<e?-1:t>e?1:0}function Rh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return vf(s)===vf(i)?be(s,i):vf(s)?1:-1}return be(t.length,e.length)}const HD=55296,qD=57343;function vf(t){const e=t.charCodeAt(0);return e>=HD&&e<=qD}function qi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const t_="__name__";class Dn{constructor(e,n,r){n===void 0?n=0:n>e.length&&me(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&me(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Dn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Dn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Dn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return be(e.length,n.length)}static compareSegments(e,n){const r=Dn.isNumericId(e),s=Dn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Dn.extractNumericId(e).compare(Dn.extractNumericId(n)):Rh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return es.fromString(e.substring(4,e.length-2))}}class qe extends Dn{construct(e,n,r){return new qe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new qe(n)}static emptyPath(){return new qe([])}}const zD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class At extends Dn{construct(e,n,r){return new At(e,n,r)}static isValidIdentifier(e){return zD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),At.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===t_}static keyField(){return new At([t_])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new X(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new X(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new X(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new At(n)}static emptyPath(){return new At([])}}/**
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
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(qe.fromString(e))}static fromName(e){return new ue(qe.fromString(e).popFirst(5))}static empty(){return new ue(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new qe(e.slice()))}}/**
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
 */function aT(t,e,n){if(!n)throw new X(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function WD(t,e,n,r){if(e===!0&&r===!0)throw new X(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function n_(t){if(!ue.isDocumentKey(t))throw new X(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function r_(t){if(ue.isDocumentKey(t))throw new X(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function lT(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function su(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me(12329,{type:typeof t})}function Yn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=su(t);throw new X(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function ft(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ba(t,e){if(!lT(t))throw new X(U.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new X(U.INVALID_ARGUMENT,n);return!0}/**
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
 */const s_=-62135596800,i_=1e6;class We{static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*i_);return new We(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<s_)throw new X(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/i_}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:We._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ba(e,We._jsonSchema))return new We(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-s_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}We._jsonSchemaVersion="firestore/timestamp/1.0",We._jsonSchema={type:ft("string",We._jsonSchemaVersion),seconds:ft("number"),nanoseconds:ft("number")};/**
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
 */class ye{static fromTimestamp(e){return new ye(e)}static min(){return new ye(new We(0,0))}static max(){return new ye(new We(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const va=-1;function GD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ye.fromTimestamp(r===1e9?new We(n+1,0):new We(n,r));return new rs(s,ue.empty(),e)}function KD(t){return new rs(t.readTime,t.key,va)}class rs{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new rs(ye.min(),ue.empty(),va)}static max(){return new rs(ye.max(),ue.empty(),va)}}function YD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ue.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
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
 */const QD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class JD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ro(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==QD)throw t;ne("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(s=>s?B.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new B((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++a,a===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new B((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function XD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function so(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class iu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}iu.ce=-1;/**
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
 */const sp=-1;function ou(t){return t==null}function bc(t){return t===0&&1/t==-1/0}function ZD(t){return typeof t=="number"&&Number.isInteger(t)&&!bc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const cT="";function eL(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=o_(e)),e=tL(t.get(n),e);return o_(e)}function tL(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case cT:n+="";break;default:n+=i}}return n}function o_(t){return t+cT+""}/**
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
 */function a_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ps(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function uT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class et{constructor(e,n){this.comparator=e,this.root=n||wt.EMPTY}insert(e,n){return new et(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,wt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,wt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pl(this.root,e,this.comparator,!0)}}class Pl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class wt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??wt.RED,this.left=s??wt.EMPTY,this.right=i??wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new wt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return wt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return wt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw me(43730,{key:this.key,value:this.value});if(this.right.isRed())throw me(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw me(27949);return e+(this.isRed()?0:1)}}wt.EMPTY=null,wt.RED=!0,wt.BLACK=!1;wt.EMPTY=new class{constructor(){this.size=0}get key(){throw me(57766)}get value(){throw me(16141)}get color(){throw me(16727)}get left(){throw me(29726)}get right(){throw me(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new wt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ht{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new l_(this.data.getIterator())}getIteratorFrom(e){return new l_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ht)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ht(this.comparator);return n.data=e,n}}class l_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class rn{constructor(e){this.fields=e,e.sort(At.comparator)}static empty(){return new rn([])}unionWith(e){let n=new ht(At.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new rn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return qi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class fT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new fT("Invalid base64 string: "+i):i}}(e);return new Rt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const nL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ss(t){if(Me(!!t,39018),typeof t=="string"){let e=0;const n=nL.exec(t);if(Me(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:it(t.seconds),nanos:it(t.nanos)}}function it(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function is(t){return typeof t=="string"?Rt.fromBase64String(t):Rt.fromUint8Array(t)}/**
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
 */const hT="server_timestamp",dT="__type__",pT="__previous_value__",mT="__local_write_time__";function ip(t){return(t?.mapValue?.fields||{})[dT]?.stringValue===hT}function au(t){const e=t.mapValue.fields[pT];return ip(e)?au(e):e}function Ea(t){const e=ss(t.mapValue.fields[mT].timestampValue);return new We(e.seconds,e.nanos)}/**
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
 */class rL{constructor(e,n,r,s,i,o,a,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const Tc="(default)";class wa{constructor(e,n){this.projectId=e,this.database=n||Tc}static empty(){return new wa("","")}get isDefaultDatabase(){return this.database===Tc}isEqual(e){return e instanceof wa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const gT="__type__",sL="__max__",kl={mapValue:{}},yT="__vector__",Ac="value";function os(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ip(t)?4:oL(t)?9007199254740991:iL(t)?10:11:me(28295,{value:t})}function Qn(t,e){if(t===e)return!0;const n=os(t);if(n!==os(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ea(t).isEqual(Ea(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ss(s.timestampValue),a=ss(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return is(s.bytesValue).isEqual(is(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return it(s.geoPointValue.latitude)===it(i.geoPointValue.latitude)&&it(s.geoPointValue.longitude)===it(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return it(s.integerValue)===it(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=it(s.doubleValue),a=it(i.doubleValue);return o===a?bc(o)===bc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return qi(t.arrayValue.values||[],e.arrayValue.values||[],Qn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(a_(o)!==a_(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Qn(o[c],a[c])))return!1;return!0}(t,e);default:return me(52216,{left:t})}}function ba(t,e){return(t.values||[]).find(n=>Qn(n,e))!==void 0}function zi(t,e){if(t===e)return 0;const n=os(t),r=os(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=it(i.integerValue||i.doubleValue),c=it(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return c_(t.timestampValue,e.timestampValue);case 4:return c_(Ea(t),Ea(e));case 5:return Rh(t.stringValue,e.stringValue);case 6:return function(i,o){const a=is(i),c=is(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const f=be(a[u],c[u]);if(f!==0)return f}return be(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=be(it(i.latitude),it(o.latitude));return a!==0?a:be(it(i.longitude),it(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return u_(t.arrayValue,e.arrayValue);case 10:return function(i,o){const a=i.fields||{},c=o.fields||{},u=a[Ac]?.arrayValue,f=c[Ac]?.arrayValue,h=be(u?.values?.length||0,f?.values?.length||0);return h!==0?h:u_(u,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===kl.mapValue&&o===kl.mapValue)return 0;if(i===kl.mapValue)return 1;if(o===kl.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let h=0;h<c.length&&h<f.length;++h){const p=Rh(c[h],f[h]);if(p!==0)return p;const m=zi(a[c[h]],u[f[h]]);if(m!==0)return m}return be(c.length,f.length)}(t.mapValue,e.mapValue);default:throw me(23264,{he:n})}}function c_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=ss(t),r=ss(e),s=be(n.seconds,r.seconds);return s!==0?s:be(n.nanos,r.nanos)}function u_(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=zi(n[s],r[s]);if(i)return i}return be(n.length,r.length)}function Wi(t){return Ch(t)}function Ch(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ss(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return is(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ue.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ch(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ch(n.fields[o])}`;return s+"}"}(t.mapValue):me(61005,{value:t})}function Wl(t){switch(os(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=au(t);return e?16+Wl(e):16;case 5:return 2*t.stringValue.length;case 6:return is(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Wl(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return ps(r.fields,(i,o)=>{s+=i.length+Wl(o)}),s}(t.mapValue);default:throw me(13486,{value:t})}}function f_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ph(t){return!!t&&"integerValue"in t}function op(t){return!!t&&"arrayValue"in t}function h_(t){return!!t&&"nullValue"in t}function d_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Gl(t){return!!t&&"mapValue"in t}function iL(t){return(t?.mapValue?.fields||{})[gT]?.stringValue===yT}function Yo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ps(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Yo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Yo(t.arrayValue.values[n]);return e}return{...t}}function oL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===sL}/**
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
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Gl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yo(n)}setAll(e){let n=At.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Yo(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Gl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Qn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Gl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ps(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Jt(Yo(this.value))}}function _T(t){const e=[];return ps(t.fields,(n,r)=>{const s=new At([n]);if(Gl(r)){const i=_T(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new rn(e)}/**
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
 */class Vt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Vt(e,0,ye.min(),ye.min(),ye.min(),Jt.empty(),0)}static newFoundDocument(e,n,r,s){return new Vt(e,1,n,ye.min(),r,s,0)}static newNoDocument(e,n){return new Vt(e,2,n,ye.min(),ye.min(),Jt.empty(),0)}static newUnknownDocument(e,n){return new Vt(e,3,n,ye.min(),ye.min(),Jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ic{constructor(e,n){this.position=e,this.inclusive=n}}function p_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ue.comparator(ue.fromName(o.referenceValue),n.key):r=zi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function m_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Qn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ta{constructor(e,n="asc"){this.field=e,this.dir=n}}function aL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class vT{}class ut extends vT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new cL(e,n,r):n==="array-contains"?new hL(e,r):n==="in"?new dL(e,r):n==="not-in"?new pL(e,r):n==="array-contains-any"?new mL(e,r):new ut(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new uL(e,r):new fL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(zi(n,this.value)):n!==null&&os(this.value)===os(n)&&this.matchesComparison(zi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Pn extends vT{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Pn(e,n)}matches(e){return ET(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ET(t){return t.op==="and"}function wT(t){return lL(t)&&ET(t)}function lL(t){for(const e of t.filters)if(e instanceof Pn)return!1;return!0}function kh(t){if(t instanceof ut)return t.field.canonicalString()+t.op.toString()+Wi(t.value);if(wT(t))return t.filters.map(e=>kh(e)).join(",");{const e=t.filters.map(n=>kh(n)).join(",");return`${t.op}(${e})`}}function bT(t,e){return t instanceof ut?function(r,s){return s instanceof ut&&r.op===s.op&&r.field.isEqual(s.field)&&Qn(r.value,s.value)}(t,e):t instanceof Pn?function(r,s){return s instanceof Pn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&bT(o,s.filters[a]),!0):!1}(t,e):void me(19439)}function TT(t){return t instanceof ut?function(n){return`${n.field.canonicalString()} ${n.op} ${Wi(n.value)}`}(t):t instanceof Pn?function(n){return n.op.toString()+" {"+n.getFilters().map(TT).join(" ,")+"}"}(t):"Filter"}class cL extends ut{constructor(e,n,r){super(e,n,r),this.key=ue.fromName(r.referenceValue)}matches(e){const n=ue.comparator(e.key,this.key);return this.matchesComparison(n)}}class uL extends ut{constructor(e,n){super(e,"in",n),this.keys=AT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class fL extends ut{constructor(e,n){super(e,"not-in",n),this.keys=AT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function AT(t,e){return(e.arrayValue?.values||[]).map(n=>ue.fromName(n.referenceValue))}class hL extends ut{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return op(n)&&ba(n.arrayValue,this.value)}}class dL extends ut{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ba(this.value.arrayValue,n)}}class pL extends ut{constructor(e,n){super(e,"not-in",n)}matches(e){if(ba(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ba(this.value.arrayValue,n)}}class mL extends ut{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!op(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ba(this.value.arrayValue,r))}}/**
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
 */class gL{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Te=null}}function g_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new gL(t,e,n,r,s,i,o)}function ap(t){const e=_e(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>kh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ou(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Wi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Wi(r)).join(",")),e.Te=n}return e.Te}function lp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!aL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!bT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!m_(t.startAt,e.startAt)&&m_(t.endAt,e.endAt)}function Oh(t){return ue.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class io{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function yL(t,e,n,r,s,i,o,a){return new io(t,e,n,r,s,i,o,a)}function cp(t){return new io(t)}function y_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function IT(t){return t.collectionGroup!==null}function Qo(t){const e=_e(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ht(At.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Ta(i,r))}),n.has(At.keyField().canonicalString())||e.Ie.push(new Ta(At.keyField(),r))}return e.Ie}function Hn(t){const e=_e(t);return e.Ee||(e.Ee=_L(e,Qo(t))),e.Ee}function _L(t,e){if(t.limitType==="F")return g_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ta(s.field,i)});const n=t.endAt?new Ic(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ic(t.startAt.position,t.startAt.inclusive):null;return g_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Nh(t,e){const n=t.filters.concat([e]);return new io(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function xh(t,e,n){return new io(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function lu(t,e){return lp(Hn(t),Hn(e))&&t.limitType===e.limitType}function ST(t){return`${ap(Hn(t))}|lt:${t.limitType}`}function pi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>TT(s)).join(", ")}]`),ou(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Wi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Wi(s)).join(",")),`Target(${r})`}(Hn(t))}; limitType=${t.limitType})`}function cu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ue.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Qo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const u=p_(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,Qo(r),s)||r.endAt&&!function(o,a,c){const u=p_(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,Qo(r),s))}(t,e)}function vL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function RT(t){return(e,n)=>{let r=!1;for(const s of Qo(t)){const i=EL(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function EL(t,e,n){const r=t.field.isKeyField()?ue.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?zi(c,u):me(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return me(19790,{direction:t.dir})}}/**
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
 */class Xs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ps(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return uT(this.inner)}size(){return this.innerSize}}/**
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
 */const wL=new et(ue.comparator);function Er(){return wL}const CT=new et(ue.comparator);function xo(...t){let e=CT;for(const n of t)e=e.insert(n.key,n);return e}function PT(t){let e=CT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Cs(){return Jo()}function kT(){return Jo()}function Jo(){return new Xs(t=>t.toString(),(t,e)=>t.isEqual(e))}const bL=new et(ue.comparator),TL=new ht(ue.comparator);function Te(...t){let e=TL;for(const n of t)e=e.add(n);return e}const AL=new ht(be);function IL(){return AL}/**
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
 */function up(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bc(e)?"-0":e}}function OT(t){return{integerValue:""+t}}function SL(t,e){return ZD(e)?OT(e):up(t,e)}/**
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
 */class uu{constructor(){this._=void 0}}function RL(t,e,n){return t instanceof Aa?function(s,i){const o={fields:{[dT]:{stringValue:hT},[mT]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ip(i)&&(i=au(i)),i&&(o.fields[pT]=i),{mapValue:o}}(n,e):t instanceof Ia?xT(t,e):t instanceof Sa?DT(t,e):function(s,i){const o=NT(s,i),a=__(o)+__(s.Ae);return Ph(o)&&Ph(s.Ae)?OT(a):up(s.serializer,a)}(t,e)}function CL(t,e,n){return t instanceof Ia?xT(t,e):t instanceof Sa?DT(t,e):n}function NT(t,e){return t instanceof Sc?function(r){return Ph(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Aa extends uu{}class Ia extends uu{constructor(e){super(),this.elements=e}}function xT(t,e){const n=LT(e);for(const r of t.elements)n.some(s=>Qn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Sa extends uu{constructor(e){super(),this.elements=e}}function DT(t,e){let n=LT(e);for(const r of t.elements)n=n.filter(s=>!Qn(s,r));return{arrayValue:{values:n}}}class Sc extends uu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function __(t){return it(t.integerValue||t.doubleValue)}function LT(t){return op(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class PL{constructor(e,n){this.field=e,this.transform=n}}function kL(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ia&&s instanceof Ia||r instanceof Sa&&s instanceof Sa?qi(r.elements,s.elements,Qn):r instanceof Sc&&s instanceof Sc?Qn(r.Ae,s.Ae):r instanceof Aa&&s instanceof Aa}(t.transform,e.transform)}class OL{constructor(e,n){this.version=e,this.transformResults=n}}class on{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new on}static exists(e){return new on(void 0,e)}static updateTime(e){return new on(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Kl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class fu{}function MT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new fp(t.key,on.none()):new Ha(t.key,t.data,on.none());{const n=t.data,r=Jt.empty();let s=new ht(At.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ms(t.key,r,new rn(s.toArray()),on.none())}}function NL(t,e,n){t instanceof Ha?function(s,i,o){const a=s.value.clone(),c=E_(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ms?function(s,i,o){if(!Kl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=E_(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(VT(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Xo(t,e,n,r){return t instanceof Ha?function(i,o,a,c){if(!Kl(i.precondition,o))return a;const u=i.value.clone(),f=w_(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ms?function(i,o,a,c){if(!Kl(i.precondition,o))return a;const u=w_(i.fieldTransforms,c,o),f=o.data;return f.setAll(VT(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return Kl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function xL(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=NT(r.transform,s||null);i!=null&&(n===null&&(n=Jt.empty()),n.set(r.field,i))}return n||null}function v_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&qi(r,s,(i,o)=>kL(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ha extends fu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ms extends fu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function VT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function E_(t,e,n){const r=new Map;Me(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,CL(o,a,n[s]))}return r}function w_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,RL(i,o,e))}return r}class fp extends fu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class DL extends fu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class LL{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&NL(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Xo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Xo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=kT();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=MT(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ye.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&qi(this.mutations,e.mutations,(n,r)=>v_(n,r))&&qi(this.baseMutations,e.baseMutations,(n,r)=>v_(n,r))}}class hp{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Me(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return bL}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new hp(e,n,r,s)}}/**
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
 */class ML{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class VL{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var at,Re;function FL(t){switch(t){case U.OK:return me(64938);case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return me(15467,{code:t})}}function FT(t){if(t===void 0)return vr("GRPC error has no .code"),U.UNKNOWN;switch(t){case at.OK:return U.OK;case at.CANCELLED:return U.CANCELLED;case at.UNKNOWN:return U.UNKNOWN;case at.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case at.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case at.INTERNAL:return U.INTERNAL;case at.UNAVAILABLE:return U.UNAVAILABLE;case at.UNAUTHENTICATED:return U.UNAUTHENTICATED;case at.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case at.NOT_FOUND:return U.NOT_FOUND;case at.ALREADY_EXISTS:return U.ALREADY_EXISTS;case at.PERMISSION_DENIED:return U.PERMISSION_DENIED;case at.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case at.ABORTED:return U.ABORTED;case at.OUT_OF_RANGE:return U.OUT_OF_RANGE;case at.UNIMPLEMENTED:return U.UNIMPLEMENTED;case at.DATA_LOSS:return U.DATA_LOSS;default:return me(39323,{code:t})}}(Re=at||(at={}))[Re.OK=0]="OK",Re[Re.CANCELLED=1]="CANCELLED",Re[Re.UNKNOWN=2]="UNKNOWN",Re[Re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Re[Re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Re[Re.NOT_FOUND=5]="NOT_FOUND",Re[Re.ALREADY_EXISTS=6]="ALREADY_EXISTS",Re[Re.PERMISSION_DENIED=7]="PERMISSION_DENIED",Re[Re.UNAUTHENTICATED=16]="UNAUTHENTICATED",Re[Re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Re[Re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Re[Re.ABORTED=10]="ABORTED",Re[Re.OUT_OF_RANGE=11]="OUT_OF_RANGE",Re[Re.UNIMPLEMENTED=12]="UNIMPLEMENTED",Re[Re.INTERNAL=13]="INTERNAL",Re[Re.UNAVAILABLE=14]="UNAVAILABLE",Re[Re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function UL(){return new TextEncoder}/**
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
 */const $L=new es([4294967295,4294967295],0);function b_(t){const e=UL().encode(t),n=new Zb;return n.update(e),new Uint8Array(n.digest())}function T_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new es([n,r],0),new es([s,i],0)]}class dp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Do(`Invalid padding: ${n}`);if(r<0)throw new Do(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Do(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Do(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=es.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(es.fromNumber(r)));return s.compare($L)===1&&(s=new es([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=b_(e),[r,s]=T_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new dp(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.ge===0)return;const n=b_(e),[r,s]=T_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Do extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class hu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,qa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new hu(ye.min(),s,new et(be),Er(),Te())}}class qa{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new qa(r,n,Te(),Te(),Te())}}/**
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
 */class Yl{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class UT{constructor(e,n){this.targetId=e,this.Ce=n}}class $T{constructor(e,n,r=Rt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class A_{constructor(){this.ve=0,this.Fe=I_(),this.Me=Rt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Te(),n=Te(),r=Te();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:me(38017,{changeType:i})}}),new qa(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=I_()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Me(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class jL{constructor(e){this.Ge=e,this.ze=new Map,this.je=Er(),this.Je=Ol(),this.He=Ol(),this.Ye=new et(be)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:me(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Oh(i))if(r===0){const o=new ue(i.path);this.et(n,o,Vt.newNoDocument(o,ye.min()))}else Me(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const a=this.ut(e),c=a?this.ct(a,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=is(r).toUint8Array()}catch(c){if(c instanceof fT)return Hi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new dp(o,s,i)}catch(c){return Hi(c instanceof Do?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.ge===0?null:a}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const a=this.ot(o);if(a){if(i.current&&Oh(a.target)){const c=new ue(a.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,Vt.newNoDocument(c,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=Te();this.He.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new hu(e,n,this.Ye,this.je,r);return this.je=Er(),this.Je=Ol(),this.He=Ol(),this.Ye=new et(be),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new A_,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new ht(be),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new ht(be),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||ne("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new A_),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ol(){return new et(ue.comparator)}function I_(){return new et(ue.comparator)}const BL={asc:"ASCENDING",desc:"DESCENDING"},HL={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},qL={and:"AND",or:"OR"};class zL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Dh(t,e){return t.useProto3Json||ou(e)?e:{value:e}}function Rc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function WL(t,e){return Rc(t,e.toTimestamp())}function qn(t){return Me(!!t,49232),ye.fromTimestamp(function(n){const r=ss(n);return new We(r.seconds,r.nanos)}(t))}function pp(t,e){return Lh(t,e).canonicalString()}function Lh(t,e){const n=function(s){return new qe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function BT(t){const e=qe.fromString(t);return Me(GT(e),10190,{key:e.toString()}),e}function Mh(t,e){return pp(t.databaseId,e.path)}function Ef(t,e){const n=BT(e);if(n.get(1)!==t.databaseId.projectId)throw new X(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ue(qT(n))}function HT(t,e){return pp(t.databaseId,e)}function GL(t){const e=BT(t);return e.length===4?qe.emptyPath():qT(e)}function Vh(t){return new qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qT(t){return Me(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function S_(t,e,n){return{name:Mh(t,e),fields:n.value.mapValue.fields}}function KL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:me(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(Me(f===void 0||typeof f=="string",58123),Rt.fromBase64String(f||"")):(Me(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Rt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const f=u.code===void 0?U.UNKNOWN:FT(u.code);return new X(f,u.message||"")}(o);n=new $T(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ef(t,r.document.name),i=qn(r.document.updateTime),o=r.document.createTime?qn(r.document.createTime):ye.min(),a=new Jt({mapValue:{fields:r.document.fields}}),c=Vt.newFoundDocument(s,i,o,a),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Yl(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ef(t,r.document),i=r.readTime?qn(r.readTime):ye.min(),o=Vt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Yl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ef(t,r.document),i=r.removedTargetIds||[];n=new Yl([],i,s,null)}else{if(!("filter"in e))return me(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new VL(s,i),a=r.targetId;n=new UT(a,o)}}return n}function YL(t,e){let n;if(e instanceof Ha)n={update:S_(t,e.key,e.value)};else if(e instanceof fp)n={delete:Mh(t,e.key)};else if(e instanceof ms)n={update:S_(t,e.key,e.data),updateMask:sM(e.fieldMask)};else{if(!(e instanceof DL))return me(16599,{Vt:e.type});n={verify:Mh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Aa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ia)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Sa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Sc)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw me(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:WL(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:me(27497)}(t,e.precondition)),n}function QL(t,e){return t&&t.length>0?(Me(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?qn(s.updateTime):qn(i);return o.isEqual(ye.min())&&(o=qn(i)),new OL(o,s.transformResults||[])}(n,e))):[]}function JL(t,e){return{documents:[HT(t,e.path)]}}function XL(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=HT(t,s);const i=function(u){if(u.length!==0)return WT(Pn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(p){return{field:mi(p.field),direction:tM(p.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Dh(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:s}}function ZL(t){let e=GL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Me(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(h){const p=zT(h);return p instanceof Pn&&wT(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(p=>function(y){return new Ta(gi(y.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(h){let p;return p=typeof h=="object"?h.value:h,ou(p)?null:p}(n.limit));let c=null;n.startAt&&(c=function(h){const p=!!h.before,m=h.values||[];return new Ic(m,p)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const p=!h.before,m=h.values||[];return new Ic(m,p)}(n.endAt)),yL(e,s,o,i,a,"F",c,u)}function eM(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function zT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=gi(n.unaryFilter.field);return ut.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=gi(n.unaryFilter.field);return ut.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=gi(n.unaryFilter.field);return ut.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=gi(n.unaryFilter.field);return ut.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return me(61313);default:return me(60726)}}(t):t.fieldFilter!==void 0?function(n){return ut.create(gi(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return me(58110);default:return me(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Pn.create(n.compositeFilter.filters.map(r=>zT(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return me(1026)}}(n.compositeFilter.op))}(t):me(30097,{filter:t})}function tM(t){return BL[t]}function nM(t){return HL[t]}function rM(t){return qL[t]}function mi(t){return{fieldPath:t.canonicalString()}}function gi(t){return At.fromServerFormat(t.fieldPath)}function WT(t){return t instanceof ut?function(n){if(n.op==="=="){if(d_(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NAN"}};if(h_(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(d_(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NOT_NAN"}};if(h_(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mi(n.field),op:nM(n.op),value:n.value}}}(t):t instanceof Pn?function(n){const r=n.getFilters().map(s=>WT(s));return r.length===1?r[0]:{compositeFilter:{op:rM(n.op),filters:r}}}(t):me(54877,{filter:t})}function sM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function GT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Gr{constructor(e,n,r,s,i=ye.min(),o=ye.min(),a=Rt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class iM{constructor(e){this.yt=e}}function oM(t){const e=ZL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xh(e,e.limit,"L"):e}/**
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
 */class aM{constructor(){this.Cn=new lM}addToCollectionParentIndex(e,n){return this.Cn.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(rs.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(rs.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class lM{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ht(qe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ht(qe.comparator)).toArray()}}/**
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
 */const R_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},KT=41943040;class Yt{static withCacheSize(e){return new Yt(e,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Yt.DEFAULT_COLLECTION_PERCENTILE=10,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Yt.DEFAULT=new Yt(KT,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Yt.DISABLED=new Yt(-1,0,0);/**
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
 */class Gi{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Gi(0)}static cr(){return new Gi(-1)}}/**
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
 */const C_="LruGarbageCollector",cM=1048576;function P_([t,e],[n,r]){const s=be(t,n);return s===0?be(e,r):s}class uM{constructor(e){this.Ir=e,this.buffer=new ht(P_),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();P_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class fM{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ne(C_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){so(n)?ne(C_,"Ignoring IndexedDB error during garbage collection: ",n):await ro(n)}await this.Vr(3e5)})}}class hM{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return B.resolve(iu.ce);const r=new uM(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(R_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),R_):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,a,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(e,s))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(i=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),di()<=we.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:h})))}}function dM(t,e){return new hM(t,e)}/**
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
 */class pM{constructor(){this.changes=new Xs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class mM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class gM{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Xo(r.mutation,s,rn.empty(),We.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Te()){const s=Cs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=xo();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Cs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Er();const o=Jo(),a=function(){return Jo()}();return n.forEach((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof ms)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Xo(f.mutation,u,f.mutation.getFieldMask(),We.now())):o.set(u.key,rn.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>a.set(u,new mM(f,o.get(u)??null))),a))}recalculateAndSaveOverlays(e,n){const r=Jo();let s=new et((o,a)=>o-a),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||rn.empty();f=a.applyToLocalView(u,f),r.set(c,f);const h=(s.get(a.batchId)||Te()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,f=c.value,h=kT();f.forEach(p=>{if(!i.has(p)){const m=MT(n.get(p),r.get(p));m!==null&&h.set(p,m),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ue.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):IT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):B.resolve(Cs());let a=va,c=i;return o.next(u=>B.forEach(u,(f,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(f)?B.resolve():this.remoteDocumentCache.getEntry(e,f).next(p=>{c=c.insert(f,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Te())).next(f=>({batchId:a,changes:PT(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ue(n)).next(r=>{let s=xo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=xo();return this.indexManager.getCollectionParents(e,i).next(a=>B.forEach(a,c=>{const u=function(h,p){return new io(p,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((h,p)=>{o=o.insert(h,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Vt.newInvalidDocument(f)))});let a=xo();return o.forEach((c,u)=>{const f=i.get(c);f!==void 0&&Xo(f.mutation,u,rn.empty(),We.now()),cu(n,u)&&(a=a.insert(c,u))}),a})}}/**
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
 */class yM{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return B.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:qn(s.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:oM(s.bundledQuery),readTime:qn(s.readTime)}}(n)),B.resolve()}}/**
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
 */class _M{constructor(){this.overlays=new et(ue.comparator),this.qr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Cs();return B.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const s=Cs(),i=n.length+1,o=new ue(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return B.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new et((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Cs(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const a=Cs(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>a.set(u,f)),!(a.size()>=s)););return B.resolve(a)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ML(n,r));let i=this.qr.get(n);i===void 0&&(i=Te(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class vM{constructor(){this.sessionToken=Rt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
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
 */class mp{constructor(){this.Qr=new ht(pt.$r),this.Ur=new ht(pt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new pt(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new pt(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new ue(new qe([])),r=new pt(n,e),s=new pt(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ue(new qe([])),r=new pt(n,e),s=new pt(n,e+1);let i=Te();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new pt(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class pt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ue.comparator(e.key,n.key)||be(e.Yr,n.Yr)}static Kr(e,n){return be(e.Yr,n.Yr)||ue.comparator(e.key,n.key)}}/**
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
 */class EM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new ht(pt.$r)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new LL(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Zr=this.Zr.add(new pt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?sp:this.tr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new pt(n,0),s=new pt(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const a=this.Xr(o.Yr);i.push(a)}),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ht(be);return n.forEach(s=>{const i=new pt(s,0),o=new pt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],a=>{r=r.add(a.Yr)})}),B.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ue.isDocumentKey(i)||(i=i.child(""));const o=new pt(new ue(i),0);let a=new ht(be);return this.Zr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.Yr)),!0)},o),B.resolve(this.ti(a))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Me(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return B.forEach(n.mutations,s=>{const i=new pt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new pt(n,0),s=this.Zr.firstAfterOrEqual(r);return B.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class wM{constructor(e){this.ri=e,this.docs=function(){return new et(ue.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():Vt.newInvalidDocument(n))}getEntries(e,n){let r=Er();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Vt.newInvalidDocument(s))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Er();const o=n.path,a=new ue(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||YD(KD(f),r)<=0||(s.has(f.key)||cu(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,n,r,s){me(9500)}ii(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new bM(this)}getSize(e){return B.resolve(this.size)}}class bM extends pM{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class TM{constructor(e){this.persistence=e,this.si=new Xs(n=>ap(n),lp),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.oi=0,this._i=new mp,this.targetCount=0,this.ai=Gi.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),B.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Gi(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Pr(n),B.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),B.waitFor(i).next(()=>s)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),B.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this._i.containsKey(n))}}/**
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
 */class YT{constructor(e,n){this.ui={},this.overlays={},this.ci=new iu(0),this.li=!1,this.li=!0,this.hi=new vM,this.referenceDelegate=e(this),this.Pi=new TM(this),this.indexManager=new aM,this.remoteDocumentCache=function(s){return new wM(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new iM(n),this.Ii=new yM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new _M,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new EM(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){ne("MemoryPersistence","Starting transaction:",e);const s=new AM(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return B.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class AM extends JD{constructor(e){super(),this.currentSequenceNumber=e}}class gp{constructor(e){this.persistence=e,this.Ri=new mp,this.Vi=null}static mi(e){return new gp(e)}get fi(){if(this.Vi)return this.Vi;throw me(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),B.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.fi,r=>{const s=ue.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,ye.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return B.or([()=>B.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Cc{constructor(e,n){this.persistence=e,this.pi=new Xs(r=>eL(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=dM(this,n)}static mi(e,n){return new Cc(e,n)}Ei(){}di(e){return B.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return B.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?B.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(a=>{a||(r++,i.removeEntry(o,ye.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),B.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),B.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),B.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Wl(e.data.value)),n}br(e,n,r){return B.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return B.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class yp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=Te(),s=Te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new yp(e,n.fromCache,r,s)}}/**
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
 */class IM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class SM{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return tN()?8:XD(Ft())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new IM;return this.Ss(e,n,o).next(a=>{if(i.result=a,this.Vs)return this.bs(e,n,o,a.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(di()<=we.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",pi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),B.resolve()):(di()<=we.DEBUG&&ne("QueryEngine","Query:",pi(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(di()<=we.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",pi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Hn(n))):B.resolve())}ys(e,n){if(y_(n))return B.resolve(null);let r=Hn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=xh(n,null,"F"),r=Hn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Te(...i);return this.ps.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Ds(n,a);return this.Cs(n,u,o,c.readTime)?this.ys(e,xh(n,null,"F")):this.vs(e,u,n,c)}))})))}ws(e,n,r,s){return y_(n)||s.isEqual(ye.min())?B.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?B.resolve(null):(di()<=we.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),pi(n)),this.vs(e,o,n,GD(s,va)).next(a=>a))})}Ds(e,n){let r=new ht(RT(e));return n.forEach((s,i)=>{cu(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return di()<=we.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",pi(n)),this.ps.getDocumentsMatchingQuery(e,n,rs.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const _p="LocalStore",RM=3e8;class CM{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new et(be),this.xs=new Xs(i=>ap(i),lp),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gM(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function PM(t,e,n,r){return new CM(t,e,n,r)}async function QT(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=Te();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){a.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ls:u,removedBatchIds:o,addedBatchIds:a}))})})}function kM(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(a,c,u,f){const h=u.batch,p=h.keys();let m=B.resolve();return p.forEach(y=>{m=m.next(()=>f.getEntry(c,y)).next(b=>{const P=u.docVersions.get(y);Me(P!==null,48541),b.version.compareTo(P)<0&&(h.applyToRemoteDocument(b,u),b.isValidDocument()&&(b.setReadTime(u.commitVersion),f.addEntry(b)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=Te();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function JT(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function OM(t,e){const n=_e(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const a=[];e.targetChanges.forEach((f,h)=>{const p=s.get(h);if(!p)return;a.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,h).next(()=>n.Pi.addMatchingKeys(i,f.addedDocuments,h)));let m=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(Rt.EMPTY_BYTE_STRING,ye.min()).withLastLimboFreeSnapshotVersion(ye.min()):f.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(f.resumeToken,r)),s=s.insert(h,m),function(b,P,O){return b.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=RM?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(p,m,f)&&a.push(n.Pi.updateTargetData(i,m))});let c=Er(),u=Te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),a.push(NM(i,o,e.documentUpdates).next(f=>{c=f.ks,u=f.qs})),!r.isEqual(ye.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next(h=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(f)}return B.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ms=s,i))}function NM(t,e,n){let r=Te(),s=Te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Er();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(ye.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):ne(_p,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{ks:o,qs:s}})}function xM(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=sp),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function DM(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,B.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new Gr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Fh(t,e,n){const r=_e(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!so(o))throw o;ne(_p,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function k_(t,e,n){const r=_e(t);let s=ye.min(),i=Te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const h=_e(c),p=h.xs.get(f);return p!==void 0?B.resolve(h.Ms.get(p)):h.Pi.getTargetData(u,f)}(r,o,Hn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:ye.min(),n?i:Te())).next(a=>(LM(r,vL(e),a),{documents:a,Qs:i})))}function LM(t,e,n){let r=t.Os.get(e)||ye.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class O_{constructor(){this.activeTargetIds=IL()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class MM{constructor(){this.Mo=new O_,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new O_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class VM{Oo(e){}shutdown(){}}/**
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
 */const N_="ConnectivityMonitor";class x_{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ne(N_,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ne(N_,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Nl=null;function Uh(){return Nl===null?Nl=function(){return 268435456+Math.round(2147483648*Math.random())}():Nl++,"0x"+Nl.toString(16)}/**
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
 */const wf="RestConnection",FM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class UM{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Tc?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Uh(),a=this.zo(e,n.toUriEncodedString());ne(wf,`Sending RPC '${e}' ${o}:`,a,r);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,s,i);const{host:u}=new URL(a),f=hs(u);return this.Jo(e,a,c,r,f).then(h=>(ne(wf,`Received RPC '${e}' ${o}: `,h),h),h=>{throw Hi(wf,`RPC '${e}' ${o} failed with error: `,h,"url: ",a,"request:",r),h})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+no}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=FM[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class $M{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Ot="WebChannelConnection";class jM extends UM{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Uh();return new Promise((a,c)=>{const u=new eT;u.setWithCredentials(!0),u.listenOnce(tT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case zl.NO_ERROR:const h=u.getResponseJson();ne(Ot,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(h)),a(h);break;case zl.TIMEOUT:ne(Ot,`RPC '${e}' ${o} timed out`),c(new X(U.DEADLINE_EXCEEDED,"Request time out"));break;case zl.HTTP_ERROR:const p=u.getStatus();if(ne(Ot,`RPC '${e}' ${o} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const y=m?.error;if(y&&y.status&&y.message){const b=function(O){const C=O.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(C)>=0?C:U.UNKNOWN}(y.status);c(new X(b,y.message))}else c(new X(U.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new X(U.UNAVAILABLE,"Connection failed."));break;default:me(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{ne(Ot,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);ne(Ot,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Uh(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=sT(),a=rT(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");ne(Ot,`Creating RPC '${e}' stream ${s}: ${f}`,c);const h=o.createWebChannel(f,c);this.I_(h);let p=!1,m=!1;const y=new $M({Yo:P=>{m?ne(Ot,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(p||(ne(Ot,`Opening RPC '${e}' stream ${s} transport.`),h.open(),p=!0),ne(Ot,`RPC '${e}' stream ${s} sending:`,P),h.send(P))},Zo:()=>h.close()}),b=(P,O,C)=>{P.listen(O,v=>{try{C(v)}catch(I){setTimeout(()=>{throw I},0)}})};return b(h,No.EventType.OPEN,()=>{m||(ne(Ot,`RPC '${e}' stream ${s} transport opened.`),y.o_())}),b(h,No.EventType.CLOSE,()=>{m||(m=!0,ne(Ot,`RPC '${e}' stream ${s} transport closed`),y.a_(),this.E_(h))}),b(h,No.EventType.ERROR,P=>{m||(m=!0,Hi(Ot,`RPC '${e}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),y.a_(new X(U.UNAVAILABLE,"The operation could not be completed")))}),b(h,No.EventType.MESSAGE,P=>{if(!m){const O=P.data[0];Me(!!O,16349);const C=O,v=C?.error||C[0]?.error;if(v){ne(Ot,`RPC '${e}' stream ${s} received error:`,v);const I=v.status;let D=function(E){const _=at[E];if(_!==void 0)return FT(_)}(I),F=v.message;D===void 0&&(D=U.INTERNAL,F="Unknown error status: "+I+" with message "+v.message),m=!0,y.a_(new X(D,F)),h.close()}else ne(Ot,`RPC '${e}' stream ${s} received:`,O),y.u_(O)}}),b(a,nT.STAT_EVENT,P=>{P.stat===Sh.PROXY?ne(Ot,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===Sh.NOPROXY&&ne(Ot,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{y.__()},0),y}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function bf(){return typeof document<"u"?document:null}/**
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
 */function du(t){return new zL(t,!0)}/**
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
 */class XT{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&ne("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const D_="PersistentStream";class ZT{constructor(e,n,r,s,i,o,a,c){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new XT(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(vr(n.toString()),vr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new X(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return ne(D_,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(ne(D_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class BM extends ZT{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=KL(this.serializer,e),r=function(i){if(!("targetChange"in i))return ye.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ye.min():o.readTime?qn(o.readTime):ye.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Vh(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Oh(c)?{documents:JL(i,c)}:{query:XL(i,c).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=jT(i,o.resumeToken);const u=Dh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ye.min())>0){a.readTime=Rc(i,o.snapshotVersion.toTimestamp());const u=Dh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=eM(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Vh(this.serializer),n.removeTarget=e,this.q_(n)}}class HM extends ZT{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Me(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Me(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Me(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=QL(e.writeResults,e.commitTime),r=qn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Vh(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>YL(this.serializer,r))};this.q_(n)}}/**
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
 */class qM{}class zM extends qM{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new X(U.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,Lh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(U.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Ho(e,Lh(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X(U.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class WM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(vr(n),this.aa=!1):ne("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Bs="RemoteStore";class GM{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Zs(this)&&(ne(Bs,"Restarting streams for network reachability change."),await async function(c){const u=_e(c);u.Ea.add(4),await za(u),u.Ra.set("Unknown"),u.Ea.delete(4),await pu(u)}(this))})}),this.Ra=new WM(r,s)}}async function pu(t){if(Zs(t))for(const e of t.da)await e(!0)}async function za(t){for(const e of t.da)await e(!1)}function e0(t,e){const n=_e(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),bp(n)?wp(n):oo(n).O_()&&Ep(n,e))}function vp(t,e){const n=_e(t),r=oo(n);n.Ia.delete(e),r.O_()&&t0(n,e),n.Ia.size===0&&(r.O_()?r.L_():Zs(n)&&n.Ra.set("Unknown"))}function Ep(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ye.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}oo(t).Y_(e)}function t0(t,e){t.Va.Ue(e),oo(t).Z_(e)}function wp(t){t.Va=new jL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),oo(t).start(),t.Ra.ua()}function bp(t){return Zs(t)&&!oo(t).x_()&&t.Ia.size>0}function Zs(t){return _e(t).Ea.size===0}function n0(t){t.Va=void 0}async function KM(t){t.Ra.set("Online")}async function YM(t){t.Ia.forEach((e,n)=>{Ep(t,e)})}async function QM(t,e){n0(t),bp(t)?(t.Ra.ha(e),wp(t)):t.Ra.set("Unknown")}async function JM(t,e,n){if(t.Ra.set("Online"),e instanceof $T&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.Ia.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ia.delete(a),s.Va.removeTarget(a))}(t,e)}catch(r){ne(Bs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Pc(t,r)}else if(e instanceof Yl?t.Va.Ze(e):e instanceof UT?t.Va.st(e):t.Va.tt(e),!n.isEqual(ye.min()))try{const r=await JT(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.Va.Tt(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const f=i.Ia.get(c);if(!f)return;i.Ia.set(c,f.withResumeToken(Rt.EMPTY_BYTE_STRING,f.snapshotVersion)),t0(i,c);const h=new Gr(f.target,c,u,f.sequenceNumber);Ep(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){ne(Bs,"Failed to raise snapshot:",r),await Pc(t,r)}}async function Pc(t,e,n){if(!so(e))throw e;t.Ea.add(1),await za(t),t.Ra.set("Offline"),n||(n=()=>JT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ne(Bs,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await pu(t)})}function r0(t,e){return e().catch(n=>Pc(t,n,e))}async function mu(t){const e=_e(t),n=as(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:sp;for(;XM(e);)try{const s=await xM(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,ZM(e,s)}catch(s){await Pc(e,s)}s0(e)&&i0(e)}function XM(t){return Zs(t)&&t.Ta.length<10}function ZM(t,e){t.Ta.push(e);const n=as(t);n.O_()&&n.X_&&n.ea(e.mutations)}function s0(t){return Zs(t)&&!as(t).x_()&&t.Ta.length>0}function i0(t){as(t).start()}async function eV(t){as(t).ra()}async function tV(t){const e=as(t);for(const n of t.Ta)e.ea(n.mutations)}async function nV(t,e,n){const r=t.Ta.shift(),s=hp.from(r,e,n);await r0(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await mu(t)}async function rV(t,e){e&&as(t).X_&&await async function(r,s){if(function(o){return FL(o)&&o!==U.ABORTED}(s.code)){const i=r.Ta.shift();as(r).B_(),await r0(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await mu(r)}}(t,e),s0(t)&&i0(t)}async function L_(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),ne(Bs,"RemoteStore received new credentials");const r=Zs(n);n.Ea.add(3),await za(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await pu(n)}async function sV(t,e){const n=_e(t);e?(n.Ea.delete(2),await pu(n)):e||(n.Ea.add(2),await za(n),n.Ra.set("Unknown"))}function oo(t){return t.ma||(t.ma=function(n,r,s){const i=_e(n);return i.sa(),new BM(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:KM.bind(null,t),t_:YM.bind(null,t),r_:QM.bind(null,t),H_:JM.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),bp(t)?wp(t):t.Ra.set("Unknown")):(await t.ma.stop(),n0(t))})),t.ma}function as(t){return t.fa||(t.fa=function(n,r,s){const i=_e(n);return i.sa(),new HM(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:eV.bind(null,t),r_:rV.bind(null,t),ta:tV.bind(null,t),na:nV.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await mu(t)):(await t.fa.stop(),t.Ta.length>0&&(ne(Bs,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class Tp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new dr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Tp(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ap(t,e){if(vr("AsyncQueue",`${e}: ${t}`),so(t))return new X(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ki{static emptySet(e){return new ki(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ue.comparator(n.key,r.key):(n,r)=>ue.comparator(n.key,r.key),this.keyedMap=xo(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ki)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ki;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class M_{constructor(){this.ga=new et(ue.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):me(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ki{constructor(e,n,r,s,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ki(e,n,ki.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&lu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class iV{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class oV{constructor(){this.queries=V_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=_e(n),i=s.queries;s.queries=V_(),i.forEach((o,a)=>{for(const c of a.Sa)c.onError(r)})})(this,new X(U.ABORTED,"Firestore shutting down"))}}function V_(){return new Xs(t=>ST(t),lu)}async function o0(t,e){const n=_e(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new iV,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Ap(o,`Initialization of query '${pi(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Ip(n)}async function a0(t,e){const n=_e(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function aV(t,e){const n=_e(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Sa)a.Fa(s)&&(r=!0);o.wa=s}}r&&Ip(n)}function lV(t,e,n){const r=_e(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Ip(t){t.Ca.forEach(e=>{e.next()})}var $h,F_;(F_=$h||($h={})).Ma="default",F_.Cache="cache";class l0{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ki(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ki.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==$h.Cache}}/**
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
 */class c0{constructor(e){this.key=e}}class u0{constructor(e){this.key=e}}class cV{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Te(),this.mutatedKeys=Te(),this.eu=RT(e),this.tu=new ki(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new M_,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,h)=>{const p=s.get(f),m=cu(this.query,h)?h:null,y=!!p&&this.mutatedKeys.has(p.key),b=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let P=!1;p&&m?p.data.isEqual(m.data)?y!==b&&(r.track({type:3,doc:m}),P=!0):this.su(p,m)||(r.track({type:2,doc:m}),P=!0,(c&&this.eu(m,c)>0||u&&this.eu(m,u)<0)&&(a=!0)):!p&&m?(r.track({type:0,doc:m}),P=!0):p&&!m&&(r.track({type:1,doc:p}),P=!0,(c||u)&&(a=!0)),P&&(m?(o=o.add(m),i=b?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:a,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,h)=>function(m,y){const b=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me(20277,{Rt:P})}};return b(m)-b(y)}(f.type,h.type)||this.eu(f.doc,h.doc)),this.ou(r),s=s??!1;const a=n&&!s?this._u():[],c=this.Xa.size===0&&this.current&&!s?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new Ki(this.query,e.tu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new M_,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Te(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new u0(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new c0(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=Te();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ki.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Sp="SyncEngine";class uV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class fV{constructor(e){this.key=e,this.hu=!1}}class hV{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Xs(a=>ST(a),lu),this.Iu=new Map,this.Eu=new Set,this.du=new et(ue.comparator),this.Au=new Map,this.Ru=new mp,this.Vu={},this.mu=new Map,this.fu=Gi.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function dV(t,e,n=!0){const r=g0(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await f0(r,e,n,!0),s}async function pV(t,e){const n=g0(t);await f0(n,e,!0,!1)}async function f0(t,e,n,r){const s=await DM(t.localStore,Hn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await mV(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&e0(t.remoteStore,s),a}async function mV(t,e,n,r,s){t.pu=(h,p,m)=>async function(b,P,O,C){let v=P.view.ru(O);v.Cs&&(v=await k_(b.localStore,P.query,!1).then(({documents:S})=>P.view.ru(S,v)));const I=C&&C.targetChanges.get(P.targetId),D=C&&C.targetMismatches.get(P.targetId)!=null,F=P.view.applyChanges(v,b.isPrimaryClient,I,D);return $_(b,P.targetId,F.au),F.snapshot}(t,h,p,m);const i=await k_(t.localStore,e,!0),o=new cV(e,i.Qs),a=o.ru(i.documents),c=qa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,c);$_(t,n,u.au);const f=new uV(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function gV(t,e,n){const r=_e(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!lu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Fh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&vp(r.remoteStore,s.targetId),jh(r,s.targetId)}).catch(ro)):(jh(r,s.targetId),await Fh(r.localStore,s.targetId,!0))}async function yV(t,e){const n=_e(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),vp(n.remoteStore,r.targetId))}async function _V(t,e,n){const r=IV(t);try{const s=await function(o,a){const c=_e(o),u=We.now(),f=a.reduce((m,y)=>m.add(y.key),Te());let h,p;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let y=Er(),b=Te();return c.Ns.getEntries(m,f).next(P=>{y=P,y.forEach((O,C)=>{C.isValidDocument()||(b=b.add(O))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,y)).next(P=>{h=P;const O=[];for(const C of a){const v=xL(C,h.get(C.key).overlayedDocument);v!=null&&O.push(new ms(C.key,v,_T(v.value.mapValue),on.exists(!0)))}return c.mutationQueue.addMutationBatch(m,u,O,a)}).next(P=>{p=P;const O=P.applyToLocalDocumentSet(h,b);return c.documentOverlayCache.saveOverlays(m,P.batchId,O)})}).then(()=>({batchId:p.batchId,changes:PT(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let u=o.Vu[o.currentUser.toKey()];u||(u=new et(be)),u=u.insert(a,c),o.Vu[o.currentUser.toKey()]=u}(r,s.batchId,n),await Wa(r,s.changes),await mu(r.remoteStore)}catch(s){const i=Ap(s,"Failed to persist write");n.reject(i)}}async function h0(t,e){const n=_e(t);try{const r=await OM(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(Me(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Me(o.hu,14607):s.removedDocuments.size>0&&(Me(o.hu,42227),o.hu=!1))}),await Wa(n,r,e)}catch(r){await ro(r)}}function U_(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const a=o.view.va(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=_e(o);c.onlineState=a;let u=!1;c.queries.forEach((f,h)=>{for(const p of h.Sa)p.va(a)&&(u=!0)}),u&&Ip(c)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function vV(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new et(ue.comparator);o=o.insert(i,Vt.newNoDocument(i,ye.min()));const a=Te().add(i),c=new hu(ye.min(),new Map,new et(be),o,a);await h0(r,c),r.du=r.du.remove(i),r.Au.delete(e),Rp(r)}else await Fh(r.localStore,e,!1).then(()=>jh(r,e,n)).catch(ro)}async function EV(t,e){const n=_e(t),r=e.batch.batchId;try{const s=await kM(n.localStore,e);p0(n,r,null),d0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Wa(n,s)}catch(s){await ro(s)}}async function wV(t,e,n){const r=_e(t);try{const s=await function(o,a){const c=_e(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(Me(h!==null,37113),f=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);p0(r,e,n),d0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Wa(r,s)}catch(s){await ro(s)}}function d0(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function p0(t,e,n){const r=_e(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function jh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||m0(t,r)})}function m0(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(vp(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Rp(t))}function $_(t,e,n){for(const r of n)r instanceof c0?(t.Ru.addReference(r.key,e),bV(t,r)):r instanceof u0?(ne(Sp,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||m0(t,r.key)):me(19791,{wu:r})}function bV(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(ne(Sp,"New document in limbo: "+n),t.Eu.add(r),Rp(t))}function Rp(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ue(qe.fromString(e)),r=t.fu.next();t.Au.set(r,new fV(n)),t.du=t.du.insert(n,r),e0(t.remoteStore,new Gr(Hn(cp(n.path)),r,"TargetPurposeLimboResolution",iu.ce))}}async function Wa(t,e,n){const r=_e(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((a,c)=>{o.push(r.pu(c,e,n).then(u=>{if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:n?.targetChanges.get(c.targetId)?.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){s.push(u);const f=yp.As(c.targetId,u);i.push(f)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(c,u){const f=_e(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>B.forEach(u,p=>B.forEach(p.Es,m=>f.persistence.referenceDelegate.addReference(h,p.targetId,m)).next(()=>B.forEach(p.ds,m=>f.persistence.referenceDelegate.removeReference(h,p.targetId,m)))))}catch(h){if(!so(h))throw h;ne(_p,"Failed to update sequence numbers: "+h)}for(const h of u){const p=h.targetId;if(!h.fromCache){const m=f.Ms.get(p),y=m.snapshotVersion,b=m.withLastLimboFreeSnapshotVersion(y);f.Ms=f.Ms.insert(p,b)}}}(r.localStore,i))}async function TV(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){ne(Sp,"User change. New user:",e.toKey());const r=await QT(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(a=>{a.forEach(c=>{c.reject(new X(U.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Wa(n,r.Ls)}}function AV(t,e){const n=_e(t),r=n.Au.get(e);if(r&&r.hu)return Te().add(r.key);{let s=Te();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const a=n.Tu.get(o);s=s.unionWith(a.view.nu)}return s}}function g0(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=h0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=AV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vV.bind(null,e),e.Pu.H_=aV.bind(null,e.eventManager),e.Pu.yu=lV.bind(null,e.eventManager),e}function IV(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=EV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wV.bind(null,e),e}class kc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=du(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return PM(this.persistence,new SM,e.initialUser,this.serializer)}Cu(e){return new YT(gp.mi,this.serializer)}Du(e){return new MM}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}kc.provider={build:()=>new kc};class SV extends kc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Me(this.persistence.referenceDelegate instanceof Cc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new fM(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Yt.withCacheSize(this.cacheSizeBytes):Yt.DEFAULT;return new YT(r=>Cc.mi(r,n),this.serializer)}}class Bh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>U_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=TV.bind(null,this.syncEngine),await sV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new oV}()}createDatastore(e){const n=du(e.databaseInfo.databaseId),r=function(i){return new jM(i)}(e.databaseInfo);return function(i,o,a,c){return new zM(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new GM(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>U_(this.syncEngine,n,0),function(){return x_.v()?new x_:new VM}())}createSyncEngine(e,n){return function(s,i,o,a,c,u,f){const h=new hV(s,i,o,a,c,u);return f&&(h.gu=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await async function(n){const r=_e(n);ne(Bs,"RemoteStore shutting down."),r.Ea.add(5),await za(r),r.Aa.shutdown(),r.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Bh.provider={build:()=>new Bh};/**
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
 *//**
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
 */class y0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):vr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const ls="FirestoreClient";class RV{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Dt.UNAUTHENTICATED,this.clientId=rp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ne(ls,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ne(ls,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new dr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ap(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Tf(t,e){t.asyncQueue.verifyOperationInProgress(),ne(ls,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await QT(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function j_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await CV(t);ne(ls,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>L_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>L_(e.remoteStore,s)),t._onlineComponents=e}async function CV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ne(ls,"Using user provided OfflineComponentProvider");try{await Tf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Hi("Error using user provided cache. Falling back to memory cache: "+n),await Tf(t,new kc)}}else ne(ls,"Using default OfflineComponentProvider"),await Tf(t,new SV(void 0));return t._offlineComponents}async function _0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ne(ls,"Using user provided OnlineComponentProvider"),await j_(t,t._uninitializedComponentsProvider._online)):(ne(ls,"Using default OnlineComponentProvider"),await j_(t,new Bh))),t._onlineComponents}function PV(t){return _0(t).then(e=>e.syncEngine)}async function v0(t){const e=await _0(t),n=e.eventManager;return n.onListen=dV.bind(null,e.syncEngine),n.onUnlisten=gV.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=pV.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=yV.bind(null,e.syncEngine),n}function kV(t,e,n={}){const r=new dr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const f=new y0({next:p=>{f.Nu(),o.enqueueAndForget(()=>a0(i,h));const m=p.docs.has(a);!m&&p.fromCache?u.reject(new X(U.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&p.fromCache&&c&&c.source==="server"?u.reject(new X(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),h=new l0(cp(a.path),f,{includeMetadataChanges:!0,qa:!0});return o0(i,h)}(await v0(t),t.asyncQueue,e,n,r)),r.promise}function OV(t,e,n={}){const r=new dr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const f=new y0({next:p=>{f.Nu(),o.enqueueAndForget(()=>a0(i,h)),p.fromCache&&c.source==="server"?u.reject(new X(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),h=new l0(a,f,{includeMetadataChanges:!0,qa:!0});return o0(i,h)}(await v0(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function E0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const B_=new Map;/**
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
 */const w0="firestore.googleapis.com",H_=!0;class q_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new X(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=w0,this.ssl=H_}else this.host=e.host,this.ssl=e.ssl??H_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=KT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<cM)throw new X(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}WD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=E0(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new X(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new X(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new X(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new q_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new q_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new MD;switch(r.type){case"firstParty":return new $D(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=B_.get(n);r&&(ne("ComponentProvider","Removing Datastore"),B_.delete(n),r.terminate())}(this),Promise.resolve()}}function NV(t,e,n,r={}){t=Yn(t,gu);const s=hs(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;s&&(jd(`https://${a}`),Bd("Firestore",!0)),i.host!==w0&&i.host!==a&&Hi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:a,ssl:s,emulatorOptions:r};if(!Fs(c,o)&&(t._setSettings(c),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=Dt.MOCK_USER;else{u=mb(r.mockUserToken,t._app?.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new X(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Dt(h)}t._authCredentials=new VD(new oT(u,f))}}/**
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
 */class ei{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ei(this.firestore,e,this._query)}}class ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ts(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}toJSON(){return{type:ot._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ba(n,ot._jsonSchema))return new ot(e,r||null,new ue(qe.fromString(n.referencePath)))}}ot._jsonSchemaVersion="firestore/documentReference/1.0",ot._jsonSchema={type:ft("string",ot._jsonSchemaVersion),referencePath:ft("string")};class ts extends ei{constructor(e,n,r){super(e,n,cp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new ue(e))}withConverter(e){return new ts(this.firestore,e,this._path)}}function xV(t,e,...n){if(t=Je(t),aT("collection","path",e),t instanceof gu){const r=qe.fromString(e,...n);return r_(r),new ts(t,null,r)}{if(!(t instanceof ot||t instanceof ts))throw new X(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return r_(r),new ts(t.firestore,null,r)}}function Zo(t,e,...n){if(t=Je(t),arguments.length===1&&(e=rp.newId()),aT("doc","path",e),t instanceof gu){const r=qe.fromString(e,...n);return n_(r),new ot(t,null,new ue(r))}{if(!(t instanceof ot||t instanceof ts))throw new X(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return n_(r),new ot(t.firestore,t instanceof ts?t.converter:null,new ue(r))}}/**
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
 */const z_="AsyncQueue";class W_{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new XT(this,"async_queue_retry"),this._c=()=>{const r=bf();r&&ne(z_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=bf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=bf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new dr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!so(e))throw e;ne(z_,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,vr("INTERNAL UNHANDLED ERROR: ",G_(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Tp.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&me(47125,{Pc:G_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function G_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ao extends gu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new W_,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new W_(e),this._firestoreClient=void 0,await e}}}function DV(t,e){const n=typeof t=="object"?t:zd(),r=typeof t=="string"?t:Tc,s=Zc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=hb("firestore");i&&NV(s,...i)}return s}function yu(t){if(t._terminated)throw new X(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||LV(t),t._firestoreClient}function LV(t){const e=t._freezeSettings(),n=function(s,i,o,a){return new rL(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,E0(a.experimentalLongPollingOptions),a.useFetchStreams,a.isUsingEmulator)}(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new RV(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}}(t._componentsProvider))}/**
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
 */class hn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hn(Rt.fromBase64String(e))}catch(n){throw new X(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new hn(Rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:hn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ba(e,hn._jsonSchema))return hn.fromBase64String(e.bytes)}}hn._jsonSchemaVersion="firestore/bytes/1.0",hn._jsonSchema={type:ft("string",hn._jsonSchemaVersion),bytes:ft("string")};/**
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
 */class Ga{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new At(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class _u{constructor(e){this._methodName=e}}/**
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
 */class zn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:zn._jsonSchemaVersion}}static fromJSON(e){if(Ba(e,zn._jsonSchema))return new zn(e.latitude,e.longitude)}}zn._jsonSchemaVersion="firestore/geoPoint/1.0",zn._jsonSchema={type:ft("string",zn._jsonSchemaVersion),latitude:ft("number"),longitude:ft("number")};/**
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
 */class Wn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Wn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ba(e,Wn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Wn(e.vectorValues);throw new X(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Wn._jsonSchemaVersion="firestore/vectorValue/1.0",Wn._jsonSchema={type:ft("string",Wn._jsonSchemaVersion),vectorValues:ft("object")};/**
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
 */const MV=/^__.*__$/;class VV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ms(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ha(e,this.data,n,this.fieldTransforms)}}class b0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ms(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function T0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me(40011,{Ac:t})}}class Cp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Cp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Oc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(T0(this.Ac)&&MV.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class FV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||du(e)}Cc(e,n,r,s=!1){return new Cp({Ac:e,methodName:n,Dc:r,path:At.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vu(t){const e=t._freezeSettings(),n=du(t._databaseId);return new FV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function A0(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);kp("Data must be an object, but it was:",o,r);const a=R0(r,o);let c,u;if(i.merge)c=new rn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const h of i.mergeFields){const p=Hh(e,h,n);if(!o.contains(p))throw new X(U.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);P0(f,p)||f.push(p)}c=new rn(f),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new VV(new Jt(a),c,u)}class Eu extends _u{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Eu}}class Pp extends _u{_toFieldTransform(e){return new PL(e.path,new Aa)}isEqual(e){return e instanceof Pp}}function I0(t,e,n,r){const s=t.Cc(1,e,n);kp("Data must be an object, but it was:",s,r);const i=[],o=Jt.empty();ps(r,(c,u)=>{const f=Op(e,c,n);u=Je(u);const h=s.yc(f);if(u instanceof Eu)i.push(f);else{const p=Ka(u,h);p!=null&&(i.push(f),o.set(f,p))}});const a=new rn(i);return new b0(o,a,s.fieldTransforms)}function S0(t,e,n,r,s,i){const o=t.Cc(1,e,n),a=[Hh(e,r,n)],c=[s];if(i.length%2!=0)throw new X(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(Hh(e,i[p])),c.push(i[p+1]);const u=[],f=Jt.empty();for(let p=a.length-1;p>=0;--p)if(!P0(u,a[p])){const m=a[p];let y=c[p];y=Je(y);const b=o.yc(m);if(y instanceof Eu)u.push(m);else{const P=Ka(y,b);P!=null&&(u.push(m),f.set(m,P))}}const h=new rn(u);return new b0(f,h,o.fieldTransforms)}function UV(t,e,n,r=!1){return Ka(n,t.Cc(r?4:3,e))}function Ka(t,e){if(C0(t=Je(t)))return kp("Unsupported field value:",e,t),R0(t,e);if(t instanceof _u)return function(r,s){if(!T0(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Ka(a,s.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return SL(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=We.fromDate(r);return{timestampValue:Rc(s.serializer,i)}}if(r instanceof We){const i=new We(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Rc(s.serializer,i)}}if(r instanceof zn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof hn)return{bytesValue:jT(s.serializer,r._byteString)};if(r instanceof ot){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:pp(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Wn)return function(o,a){return{mapValue:{fields:{[gT]:{stringValue:yT},[Ac]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Sc("VectorValues must only contain numeric values.");return up(a.serializer,u)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${su(r)}`)}(t,e)}function R0(t,e){const n={};return uT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ps(t,(r,s)=>{const i=Ka(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function C0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof We||t instanceof zn||t instanceof hn||t instanceof ot||t instanceof _u||t instanceof Wn)}function kp(t,e,n){if(!C0(n)||!lT(n)){const r=su(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Hh(t,e,n){if((e=Je(e))instanceof Ga)return e._internalPath;if(typeof e=="string")return Op(t,e);throw Oc("Field path arguments must be of type string or ",t,!1,void 0,n)}const $V=new RegExp("[~\\*/\\[\\]]");function Op(t,e,n){if(e.search($V)>=0)throw Oc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ga(...e.split("."))._internalPath}catch{throw Oc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Oc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new X(U.INVALID_ARGUMENT,a+t+c)}function P0(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class k0{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Np("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class jV extends k0{data(){return super.data()}}function Np(t,e){return typeof e=="string"?Op(t,e):e instanceof Ga?e._internalPath:e._delegate._internalPath}/**
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
 */function BV(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xp{}class O0 extends xp{}function H9(t,e,...n){let r=[];e instanceof xp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Lp).length,a=i.filter(c=>c instanceof Dp).length;if(o>1||o>0&&a>0)throw new X(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Dp extends O0{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Dp(e,n,r)}_apply(e){const n=this._parse(e);return N0(e._query,n),new ei(e.firestore,e.converter,Nh(e._query,n))}_parse(e){const n=vu(e.firestore);return function(i,o,a,c,u,f,h){let p;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new X(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Y_(h,f);const y=[];for(const b of h)y.push(K_(c,i,b));p={arrayValue:{values:y}}}else p=K_(c,i,h)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Y_(h,f),p=UV(a,o,h,f==="in"||f==="not-in");return ut.create(u,f,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Lp extends xp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Lp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Pn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)N0(o,c),o=Nh(o,c)}(e._query,n),new ei(e.firestore,e.converter,Nh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Mp extends O0{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Mp(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new X(U.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new X(U.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ta(i,o)}(e._query,this._field,this._direction);return new ei(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new io(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function q9(t,e="asc"){const n=e,r=Np("orderBy",t);return Mp._create(r,n)}function K_(t,e,n){if(typeof(n=Je(n))=="string"){if(n==="")throw new X(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!IT(e)&&n.indexOf("/")!==-1)throw new X(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(qe.fromString(n));if(!ue.isDocumentKey(r))throw new X(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return f_(t,new ue(r))}if(n instanceof ot)return f_(t,n._key);throw new X(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${su(n)}.`)}function Y_(t,e){if(!Array.isArray(t)||t.length===0)throw new X(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function N0(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new X(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new X(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class HV{convertValue(e,n="none"){switch(os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(is(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw me(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ps(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){const n=e.fields?.[Ac].arrayValue?.values?.map(r=>it(r.doubleValue));return new Wn(n)}convertGeoPoint(e){return new zn(it(e.latitude),it(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=au(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ea(e));default:return null}}convertTimestamp(e){const n=ss(e);return new We(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=qe.fromString(e);Me(GT(r),9688,{name:e});const s=new wa(r.get(1),r.get(3)),i=new ue(r.popFirst(5));return s.isEqual(n)||vr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function x0(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Lo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ds extends k0{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ql(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Np("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new X(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ds._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ds._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ds._jsonSchema={type:ft("string",Ds._jsonSchemaVersion),bundleSource:ft("string","DocumentSnapshot"),bundleName:ft("string"),bundle:ft("string")};class Ql extends Ds{data(e={}){return super.data(e)}}class Oi{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Lo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ql(this._firestore,this._userDataWriter,r.key,r,new Lo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Ql(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Lo(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Ql(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Lo(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),f=o.indexOf(a.doc.key)),{type:qV(a.type),doc:c,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new X(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Oi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=rp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function qV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me(61501,{type:t})}}/**
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
 */function zV(t){t=Yn(t,ot);const e=Yn(t.firestore,ao);return kV(yu(e),t._key).then(n=>KV(e,t,n))}Oi._jsonSchemaVersion="firestore/querySnapshot/1.0",Oi._jsonSchema={type:ft("string",Oi._jsonSchemaVersion),bundleSource:ft("string","QuerySnapshot"),bundleName:ft("string"),bundle:ft("string")};class D0 extends HV{constructor(e){super(),this.firestore=e}convertBytes(e){return new hn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function WV(t){t=Yn(t,ei);const e=Yn(t.firestore,ao),n=yu(e),r=new D0(e);return BV(t._query),OV(n,t._query).then(s=>new Oi(e,r,t,s))}function qh(t,e,n){t=Yn(t,ot);const r=Yn(t.firestore,ao),s=x0(t.converter,e,n);return Vp(r,[A0(vu(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,on.none())])}function GV(t,e,n,...r){t=Yn(t,ot);const s=Yn(t.firestore,ao),i=vu(s);let o;return o=typeof(e=Je(e))=="string"||e instanceof Ga?S0(i,"updateDoc",t._key,e,n,r):I0(i,"updateDoc",t._key,e),Vp(s,[o.toMutation(t._key,on.exists(!0))])}function Vp(t,e){return function(r,s){const i=new dr;return r.asyncQueue.enqueueAndForget(async()=>_V(await PV(r),s,i)),i.promise}(yu(t),e)}function KV(t,e,n){const r=n.docs.get(e._key),s=new D0(t);return new Ds(t,s,e._key,r,new Lo(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class YV{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=vu(e)}set(e,n,r){this._verifyNotCommitted();const s=Af(e,this._firestore),i=x0(s.converter,n,r),o=A0(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,on.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Af(e,this._firestore);let o;return o=typeof(n=Je(n))=="string"||n instanceof Ga?S0(this._dataReader,"WriteBatch.update",i._key,n,r,s):I0(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,on.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Af(e,this._firestore);return this._mutations=this._mutations.concat(new fp(n._key,on.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new X(U.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Af(t,e){if((t=Je(t)).firestore!==e)throw new X(U.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function If(){return new Pp("serverTimestamp")}/**
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
 */function QV(t){return yu(t=Yn(t,ao)),new YV(t,e=>Vp(t,e))}(function(e,n=!0){(function(s){no=s})(Ys),Us(new ns("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new ao(new FD(r.getProvider("auth-internal")),new jD(o,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new X(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wa(u.options.projectId,f)}(o,s),o);return i={useFetchStreams:n,...i},a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),jn(Xy,Zy,e),jn(Xy,Zy,"esm2020")})();/**
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
 */const L0="firebasestorage.googleapis.com",M0="storageBucket",JV=120*1e3,XV=600*1e3;/**
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
 */class st extends Xn{constructor(e,n,r=0){super(Sf(e),`Firebase Storage: ${n} (${Sf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,st.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Sf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var rt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(rt||(rt={}));function Sf(t){return"storage/"+t}function Fp(){const t="An unknown error occurred, please check the error payload for server response.";return new st(rt.UNKNOWN,t)}function ZV(t){return new st(rt.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function e4(t){return new st(rt.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function t4(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new st(rt.UNAUTHENTICATED,t)}function n4(){return new st(rt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function r4(t){return new st(rt.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function s4(){return new st(rt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function i4(){return new st(rt.CANCELED,"User canceled the upload/download.")}function o4(t){return new st(rt.INVALID_URL,"Invalid URL '"+t+"'.")}function a4(t){return new st(rt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function l4(){return new st(rt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+M0+"' property when initializing the app?")}function c4(){return new st(rt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function u4(){return new st(rt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function f4(t){return new st(rt.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function zh(t){return new st(rt.INVALID_ARGUMENT,t)}function V0(){return new st(rt.APP_DELETED,"The Firebase app was deleted.")}function h4(t){return new st(rt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ea(t,e){return new st(rt.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ro(t){throw new st(rt.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class sn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=sn.makeFromUrl(e,n)}catch{return new sn(e,"")}if(r.path==="")return r;throw a4(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(I){I.path.charAt(I.path.length-1)==="/"&&(I.path_=I.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(I){I.path_=decodeURIComponent(I.path)}const f="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${f}/b/${s}/o${p}`,"i"),y={bucket:1,path:3},b=n===L0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",O=new RegExp(`^https?://${b}/${s}/${P}`,"i"),v=[{regex:a,indices:c,postModify:i},{regex:m,indices:y,postModify:u},{regex:O,indices:{bucket:1,path:2},postModify:u}];for(let I=0;I<v.length;I++){const D=v[I],F=D.regex.exec(e);if(F){const S=F[D.indices.bucket];let E=F[D.indices.path];E||(E=""),r=new sn(S,E),D.postModify(r);break}}if(r==null)throw o4(e);return r}}class d4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function p4(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function f(...P){u||(u=!0,e.apply(null,P))}function h(P){s=setTimeout(()=>{s=null,t(m,c())},P)}function p(){i&&clearTimeout(i)}function m(P,...O){if(u){p();return}if(P){p(),f.call(null,P,...O);return}if(c()||o){p(),f.call(null,P,...O);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,h(v)}let y=!1;function b(P){y||(y=!0,p(),!u&&(s!==null?(P||(a=2),clearTimeout(s),h(0)):P||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,b(!0)},n),b}function m4(t){t(!1)}/**
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
 */function g4(t){return t!==void 0}function y4(t){return typeof t=="object"&&!Array.isArray(t)}function Up(t){return typeof t=="string"||t instanceof String}function Q_(t){return $p()&&t instanceof Blob}function $p(){return typeof Blob<"u"}function J_(t,e,n,r){if(r<e)throw zh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw zh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function jp(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function F0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Ls;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ls||(Ls={}));/**
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
 */function _4(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class v4{constructor(e,n,r,s,i,o,a,c,u,f,h,p=!0,m=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=h,this.retry=p,this.isUsingEmulator=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,b)=>{this.resolve_=y,this.reject_=b,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new xl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Ls.NO_ERROR,c=i.getStatus();if(!a||_4(c,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Ls.ABORT;r(!1,new xl(!1,null,f));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new xl(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());g4(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Fp();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?V0():i4();o(c)}else{const c=s4();o(c)}};this.canceled_?n(!1,new xl(!1,null,!0)):this.backoffId_=p4(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&m4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class xl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function E4(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function w4(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function b4(t,e){e&&(t["X-Firebase-GMPID"]=e)}function T4(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function A4(t,e,n,r,s,i,o=!0,a=!1){const c=F0(t.urlParams),u=t.url+c,f=Object.assign({},t.headers);return b4(f,e),E4(f,n),w4(f,i),T4(f,r),new v4(u,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,a)}/**
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
 */function I4(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function S4(...t){const e=I4();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if($p())return new Blob(t);throw new st(rt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function R4(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function C4(t){if(typeof atob>"u")throw f4("base-64");return atob(t)}/**
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
 */const Mn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Rf{constructor(e,n){this.data=e,this.contentType=n||null}}function P4(t,e){switch(t){case Mn.RAW:return new Rf(U0(e));case Mn.BASE64:case Mn.BASE64URL:return new Rf($0(t,e));case Mn.DATA_URL:return new Rf(O4(e),N4(e))}throw Fp()}function U0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function k4(t){let e;try{e=decodeURIComponent(t)}catch{throw ea(Mn.DATA_URL,"Malformed data URL.")}return U0(e)}function $0(t,e){switch(t){case Mn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ea(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Mn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ea(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=C4(e)}catch(s){throw s.message.includes("polyfill")?s:ea(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class j0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ea(Mn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=x4(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function O4(t){const e=new j0(t);return e.base64?$0(Mn.BASE64,e.rest):k4(e.rest)}function N4(t){return new j0(t).contentType}function x4(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class zr{constructor(e,n){let r=0,s="";Q_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Q_(this.data_)){const r=this.data_,s=R4(r,e,n);return s===null?null:new zr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new zr(r,!0)}}static getBlob(...e){if($p()){const n=e.map(r=>r instanceof zr?r.data_:r);return new zr(S4.apply(null,n))}else{const n=e.map(o=>Up(o)?P4(Mn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new zr(s,!0)}}uploadData(){return this.data_}}/**
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
 */function B0(t){let e;try{e=JSON.parse(t)}catch{return null}return y4(e)?e:null}/**
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
 */function D4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function L4(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function H0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function M4(t,e){return e}class Bt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||M4}}let Dl=null;function V4(t){return!Up(t)||t.length<2?t:H0(t)}function q0(){if(Dl)return Dl;const t=[];t.push(new Bt("bucket")),t.push(new Bt("generation")),t.push(new Bt("metageneration")),t.push(new Bt("name","fullPath",!0));function e(i,o){return V4(o)}const n=new Bt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Bt("size");return s.xform=r,t.push(s),t.push(new Bt("timeCreated")),t.push(new Bt("updated")),t.push(new Bt("md5Hash",null,!0)),t.push(new Bt("cacheControl",null,!0)),t.push(new Bt("contentDisposition",null,!0)),t.push(new Bt("contentEncoding",null,!0)),t.push(new Bt("contentLanguage",null,!0)),t.push(new Bt("contentType",null,!0)),t.push(new Bt("metadata","customMetadata",!0)),Dl=t,Dl}function F4(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new sn(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function U4(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return F4(r,t),r}function z0(t,e,n){const r=B0(e);return r===null?null:U4(t,r,n)}function $4(t,e,n,r){const s=B0(e);if(s===null||!Up(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const f=t.bucket,h=t.fullPath,p="/b/"+o(f)+"/o/"+o(h),m=jp(p,n,r),y=F0({alt:"media",token:u});return m+y})[0]}function j4(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class W0{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function G0(t){if(!t)throw Fp()}function B4(t,e){function n(r,s){const i=z0(t,s,e);return G0(i!==null),i}return n}function H4(t,e){function n(r,s){const i=z0(t,s,e);return G0(i!==null),$4(i,s,t.host,t._protocol)}return n}function K0(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=n4():s=t4():n.getStatus()===402?s=e4(t.bucket):n.getStatus()===403?s=r4(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function q4(t){const e=K0(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=ZV(t.path)),i.serverResponse=s.serverResponse,i}return n}function z4(t,e,n){const r=e.fullServerUrl(),s=jp(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new W0(s,i,H4(t,n),o);return a.errorHandler=q4(e),a}function W4(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function G4(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=W4(null,e)),r}function K4(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let I=0;I<2;I++)v=v+Math.random().toString().slice(2);return v}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=G4(e,r,s),f=j4(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+c+"--",m=zr.getBlob(h,r,p);if(m===null)throw c4();const y={name:u.fullPath},b=jp(i,t.host,t._protocol),P="POST",O=t.maxUploadRetryTime,C=new W0(b,P,B4(t,n),O);return C.urlParams=y,C.headers=o,C.body=m.uploadData(),C.errorHandler=K0(e),C}class Y4{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ls.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ls.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ls.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw Ro("cannot .send() more than once");if(hs(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ro("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ro("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ro("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ro("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Q4 extends Y4{initXhr(){this.xhr_.responseType="text"}}function Y0(){return new Q4}/**
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
 */class Hs{constructor(e,n){this._service=e,n instanceof sn?this._location=n:this._location=sn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Hs(e,n)}get root(){const e=new sn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return H0(this._location.path)}get storage(){return this._service}get parent(){const e=D4(this._location.path);if(e===null)return null;const n=new sn(this._location.bucket,e);return new Hs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw h4(e)}}function J4(t,e,n){t._throwIfRoot("uploadBytes");const r=K4(t.storage,t._location,q0(),new zr(e,!0),n);return t.storage.makeRequestWithTokens(r,Y0).then(s=>({metadata:s,ref:t}))}function X4(t){t._throwIfRoot("getDownloadURL");const e=z4(t.storage,t._location,q0());return t.storage.makeRequestWithTokens(e,Y0).then(n=>{if(n===null)throw u4();return n})}function Z4(t,e){const n=L4(t._location.path,e),r=new sn(t._location.bucket,n);return new Hs(t.storage,r)}/**
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
 */function eF(t){return/^[A-Za-z]+:\/\//.test(t)}function tF(t,e){return new Hs(t,e)}function Q0(t,e){if(t instanceof Bp){const n=t;if(n._bucket==null)throw l4();const r=new Hs(n,n._bucket);return e!=null?Q0(r,e):r}else return e!==void 0?Z4(t,e):t}function nF(t,e){if(e&&eF(e)){if(t instanceof Bp)return tF(t,e);throw zh("To use ref(service, url), the first argument must be a Storage instance.")}else return Q0(t,e)}function X_(t,e){const n=e?.[M0];return n==null?null:sn.makeFromBucketSpec(n,t)}function rF(t,e,n,r={}){t.host=`${e}:${n}`;const s=hs(e);s&&(jd(`https://${t.host}/b`),Bd("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:mb(i,t.app.options.projectId))}class Bp{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=L0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=JV,this._maxUploadRetryTime=XV,this._requests=new Set,s!=null?this._bucket=sn.makeFromBucketSpec(s,this._host):this._bucket=X_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=sn.makeFromBucketSpec(this._url,e):this._bucket=X_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){J_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){J_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(nn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Hs(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new d4(V0());{const o=A4(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Z_="@firebase/storage",ev="0.14.0";/**
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
 */const J0="storage";function z9(t,e,n){return t=Je(t),J4(t,e,n)}function W9(t){return t=Je(t),X4(t)}function G9(t,e){return t=Je(t),nF(t,e)}function sF(t=zd(),e){t=Je(t);const r=Zc(t,J0).getImmediate({identifier:e}),s=hb("storage");return s&&iF(r,...s),r}function iF(t,e,n,r={}){rF(t,e,n,r)}function oF(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Bp(n,r,s,e,Ys)}function aF(){Us(new ns(J0,oF,"PUBLIC").setMultipleInstances(!0)),jn(Z_,ev,""),jn(Z_,ev,"esm2020")}aF();const lF=Wt(()=>{const t=Ks().public;if(!t.FIREBASE_API_KEY||!t.FIREBASE_PROJECT_ID){console.warn("[Firebase] Missing config — plugin skipped");return}const e=cx(),n=e.length>0?e[0]:_b({apiKey:t.FIREBASE_API_KEY,authDomain:t.FIREBASE_AUTH_DOMAIN,projectId:t.FIREBASE_PROJECT_ID,storageBucket:t.FIREBASE_STORAGE_BUCKET,messagingSenderId:t.FIREBASE_MESSAGING_SENDER_ID,appId:t.FIREBASE_APP_ID,measurementId:t.FIREBASE_MEASUREMENT_ID}),r=DD(n),s=DV(n),i=sF(n);return{provide:{firebase:{app:n,auth:r,firestore:s,storage:i},auth:r,firestore:s,storage:i}}});/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function Wh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function cF(t){if(Array.isArray(t))return t}function uF(t){if(Array.isArray(t))return Wh(t)}function fF(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function hF(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,X0(r.key),r)}}function dF(t,e,n){return e&&hF(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Jl(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=Hp(t))||e){n&&(t=n);var r=0,s=function(){};return{s,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(c){throw c},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var c=n.next();return o=c.done,c},e:function(c){a=!0,i=c},f:function(){try{o||n.return==null||n.return()}finally{if(a)throw i}}}}function Ie(t,e,n){return(e=X0(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function pF(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function mF(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,s,i,o,a=[],c=!0,u=!1;try{if(i=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(f){u=!0,s=f}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw s}}return a}}function gF(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function W(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?tv(Object(n),!0).forEach(function(r){Ie(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):tv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function wu(t,e){return cF(t)||mF(t,e)||Hp(t,e)||gF()}function kn(t){return uF(t)||pF(t)||Hp(t)||yF()}function _F(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function X0(t){var e=_F(t,"string");return typeof e=="symbol"?e:e+""}function Nc(t){"@babel/helpers - typeof";return Nc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Nc(t)}function Hp(t,e){if(t){if(typeof t=="string")return Wh(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Wh(t,e):void 0}}var nv=function(){},qp={},Z0={},eA=null,tA={mark:nv,measure:nv};try{typeof window<"u"&&(qp=window),typeof document<"u"&&(Z0=document),typeof MutationObserver<"u"&&(eA=MutationObserver),typeof performance<"u"&&(tA=performance)}catch{}var vF=qp.navigator||{},rv=vF.userAgent,sv=rv===void 0?"":rv,cs=qp,Ke=Z0,iv=eA,Ll=tA;cs.document;var Ir=!!Ke.documentElement&&!!Ke.head&&typeof Ke.addEventListener=="function"&&typeof Ke.createElement=="function",nA=~sv.indexOf("MSIE")||~sv.indexOf("Trident/"),Cf,EF=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,wF=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,rA={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},bF={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},sA=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],Ut="classic",Ya="duotone",iA="sharp",oA="sharp-duotone",aA="chisel",lA="etch",cA="jelly",uA="jelly-duo",fA="jelly-fill",hA="notdog",dA="notdog-duo",pA="slab",mA="slab-press",gA="thumbprint",yA="whiteboard",TF="Classic",AF="Duotone",IF="Sharp",SF="Sharp Duotone",RF="Chisel",CF="Etch",PF="Jelly",kF="Jelly Duo",OF="Jelly Fill",NF="Notdog",xF="Notdog Duo",DF="Slab",LF="Slab Press",MF="Thumbprint",VF="Whiteboard",_A=[Ut,Ya,iA,oA,aA,lA,cA,uA,fA,hA,dA,pA,mA,gA,yA];Cf={},Ie(Ie(Ie(Ie(Ie(Ie(Ie(Ie(Ie(Ie(Cf,Ut,TF),Ya,AF),iA,IF),oA,SF),aA,RF),lA,CF),cA,PF),uA,kF),fA,OF),hA,NF),Ie(Ie(Ie(Ie(Ie(Cf,dA,xF),pA,DF),mA,LF),gA,MF),yA,VF);var FF={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},UF={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},$F=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),jF={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},vA=["fak","fa-kit","fakd","fa-kit-duotone"],ov={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},BF=["kit"],HF="kit",qF="kit-duotone",zF="Kit",WF="Kit Duotone";Ie(Ie({},HF,zF),qF,WF);var GF={kit:{"fa-kit":"fak"}},KF={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},YF={kit:{fak:"fa-kit"}},av={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Pf,Ml={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},QF=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],JF="classic",XF="duotone",ZF="sharp",e6="sharp-duotone",t6="chisel",n6="etch",r6="jelly",s6="jelly-duo",i6="jelly-fill",o6="notdog",a6="notdog-duo",l6="slab",c6="slab-press",u6="thumbprint",f6="whiteboard",h6="Classic",d6="Duotone",p6="Sharp",m6="Sharp Duotone",g6="Chisel",y6="Etch",_6="Jelly",v6="Jelly Duo",E6="Jelly Fill",w6="Notdog",b6="Notdog Duo",T6="Slab",A6="Slab Press",I6="Thumbprint",S6="Whiteboard";Pf={},Ie(Ie(Ie(Ie(Ie(Ie(Ie(Ie(Ie(Ie(Pf,JF,h6),XF,d6),ZF,p6),e6,m6),t6,g6),n6,y6),r6,_6),s6,v6),i6,E6),o6,w6),Ie(Ie(Ie(Ie(Ie(Pf,a6,b6),l6,T6),c6,A6),u6,I6),f6,S6);var R6="kit",C6="kit-duotone",P6="Kit",k6="Kit Duotone";Ie(Ie({},R6,P6),C6,k6);var O6={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},N6={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},Gh={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},x6=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],EA=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(QF,x6),D6=["solid","regular","light","thin","duotone","brands","semibold"],wA=[1,2,3,4,5,6,7,8,9,10],L6=wA.concat([11,12,13,14,15,16,17,18,19,20]),M6=["aw","fw","pull-left","pull-right"],V6=[].concat(kn(Object.keys(N6)),D6,M6,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Ml.GROUP,Ml.SWAP_OPACITY,Ml.PRIMARY,Ml.SECONDARY]).concat(wA.map(function(t){return"".concat(t,"x")})).concat(L6.map(function(t){return"w-".concat(t)})),F6={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},wr="___FONT_AWESOME___",Kh=16,bA="fa",TA="svg-inline--fa",qs="data-fa-i2svg",Yh="data-fa-pseudo-element",U6="data-fa-pseudo-element-pending",zp="data-prefix",Wp="data-icon",lv="fontawesome-i2svg",$6="async",j6=["HTML","HEAD","STYLE","SCRIPT"],AA=["::before","::after",":before",":after"],IA=function(){try{return!0}catch{return!1}}();function Qa(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Ut]}})}var SA=W({},rA);SA[Ut]=W(W(W(W({},{"fa-duotone":"duotone"}),rA[Ut]),ov.kit),ov["kit-duotone"]);var B6=Qa(SA),Qh=W({},jF);Qh[Ut]=W(W(W(W({},{duotone:"fad"}),Qh[Ut]),av.kit),av["kit-duotone"]);var cv=Qa(Qh),Jh=W({},Gh);Jh[Ut]=W(W({},Jh[Ut]),YF.kit);var RA=Qa(Jh),Xh=W({},O6);Xh[Ut]=W(W({},Xh[Ut]),GF.kit);Qa(Xh);var H6=EF,CA="fa-layers-text",q6=wF,z6=W({},FF);Qa(z6);var W6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],kf=bF,G6=[].concat(kn(BF),kn(V6)),ta=cs.FontAwesomeConfig||{};function K6(t){var e=Ke.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Y6(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ke&&typeof Ke.querySelector=="function"){var Q6=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Q6.forEach(function(t){var e=wu(t,2),n=e[0],r=e[1],s=Y6(K6(n));s!=null&&(ta[r]=s)})}var PA={styleDefault:"solid",familyDefault:Ut,cssPrefix:bA,replacementClass:TA,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ta.familyPrefix&&(ta.cssPrefix=ta.familyPrefix);var Yi=W(W({},PA),ta);Yi.autoReplaceSvg||(Yi.observeMutations=!1);var fe={};Object.keys(PA).forEach(function(t){Object.defineProperty(fe,t,{enumerable:!0,set:function(n){Yi[t]=n,na.forEach(function(r){return r(fe)})},get:function(){return Yi[t]}})});Object.defineProperty(fe,"familyPrefix",{enumerable:!0,set:function(e){Yi.cssPrefix=e,na.forEach(function(n){return n(fe)})},get:function(){return Yi.cssPrefix}});cs.FontAwesomeConfig=fe;var na=[];function J6(t){return na.push(t),function(){na.splice(na.indexOf(t),1)}}var ui=Kh,Vn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function X6(t){if(!(!t||!Ir)){var e=Ke.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ke.head.childNodes,r=null,s=n.length-1;s>-1;s--){var i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return Ke.head.insertBefore(e,r),t}}var Z6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function uv(){for(var t=12,e="";t-- >0;)e+=Z6[Math.random()*62|0];return e}function lo(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Gp(t){return t.classList?lo(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function kA(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function e3(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(kA(t[n]),'" ')},"").trim()}function bu(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Kp(t){return t.size!==Vn.size||t.x!==Vn.x||t.y!==Vn.y||t.rotate!==Vn.rotate||t.flipX||t.flipY}function t3(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:c,path:u}}function n3(t){var e=t.transform,n=t.width,r=n===void 0?Kh:n,s=t.height,i=s===void 0?Kh:s,o="";return nA?o+="translate(".concat(e.x/ui-r/2,"em, ").concat(e.y/ui-i/2,"em) "):o+="translate(calc(-50% + ".concat(e.x/ui,"em), calc(-50% + ").concat(e.y/ui,"em)) "),o+="scale(".concat(e.size/ui*(e.flipX?-1:1),", ").concat(e.size/ui*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var r3=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}`;function OA(){var t=bA,e=TA,n=fe.cssPrefix,r=fe.replacementClass,s=r3;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}var fv=!1;function Of(){fe.autoAddCss&&!fv&&(X6(OA()),fv=!0)}var s3={mixout:function(){return{dom:{css:OA,insertCss:Of}}},hooks:function(){return{beforeDOMElementCreation:function(){Of()},beforeI2svg:function(){Of()}}}},br=cs||{};br[wr]||(br[wr]={});br[wr].styles||(br[wr].styles={});br[wr].hooks||(br[wr].hooks={});br[wr].shims||(br[wr].shims=[]);var Tn=br[wr],NA=[],xA=function(){Ke.removeEventListener("DOMContentLoaded",xA),xc=1,NA.map(function(e){return e()})},xc=!1;Ir&&(xc=(Ke.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ke.readyState),xc||Ke.addEventListener("DOMContentLoaded",xA));function i3(t){Ir&&(xc?setTimeout(t,0):NA.push(t))}function Ja(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,s=t.children,i=s===void 0?[]:s;return typeof t=="string"?kA(t):"<".concat(e," ").concat(e3(r),">").concat(i.map(Ja).join(""),"</").concat(e,">")}function hv(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Nf=function(e,n,r,s){var i=Object.keys(e),o=i.length,a=n,c,u,f;for(r===void 0?(c=1,f=e[i[0]]):(c=0,f=r);c<o;c++)u=i[c],f=a(f,e[u],u,e);return f};function DA(t){return kn(t).length!==1?null:t.codePointAt(0).toString(16)}function dv(t){return Object.keys(t).reduce(function(e,n){var r=t[n],s=!!r.icon;return s?e[r.iconName]=r.icon:e[n]=r,e},{})}function LA(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,s=r===void 0?!1:r,i=dv(e);typeof Tn.hooks.addPack=="function"&&!s?Tn.hooks.addPack(t,dv(e)):Tn.styles[t]=W(W({},Tn.styles[t]||{}),i),t==="fas"&&LA("fa",e)}var Ra=Tn.styles,o3=Tn.shims,MA=Object.keys(RA),a3=MA.reduce(function(t,e){return t[e]=Object.keys(RA[e]),t},{}),Yp=null,VA={},FA={},UA={},$A={},jA={};function l3(t){return~G6.indexOf(t)}function c3(t,e){var n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!l3(s)?s:null}var BA=function(){var e=function(i){return Nf(Ra,function(o,a,c){return o[c]=Nf(a,i,{}),o},{})};VA=e(function(s,i,o){if(i[3]&&(s[i[3]]=o),i[2]){var a=i[2].filter(function(c){return typeof c=="number"});a.forEach(function(c){s[c.toString(16)]=o})}return s}),FA=e(function(s,i,o){if(s[o]=o,i[2]){var a=i[2].filter(function(c){return typeof c=="string"});a.forEach(function(c){s[c]=o})}return s}),jA=e(function(s,i,o){var a=i[2];return s[o]=o,a.forEach(function(c){s[c]=o}),s});var n="far"in Ra||fe.autoFetchSvg,r=Nf(o3,function(s,i){var o=i[0],a=i[1],c=i[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(s.names[o]={prefix:a,iconName:c}),typeof o=="number"&&(s.unicodes[o.toString(16)]={prefix:a,iconName:c}),s},{names:{},unicodes:{}});UA=r.names,$A=r.unicodes,Yp=Tu(fe.styleDefault,{family:fe.familyDefault})};J6(function(t){Yp=Tu(t.styleDefault,{family:fe.familyDefault})});BA();function Qp(t,e){return(VA[t]||{})[e]}function u3(t,e){return(FA[t]||{})[e]}function Ps(t,e){return(jA[t]||{})[e]}function HA(t){return UA[t]||{prefix:null,iconName:null}}function f3(t){var e=$A[t],n=Qp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function us(){return Yp}var qA=function(){return{prefix:null,iconName:null,rest:[]}};function h3(t){var e=Ut,n=MA.reduce(function(r,s){return r[s]="".concat(fe.cssPrefix,"-").concat(s),r},{});return _A.forEach(function(r){(t.includes(n[r])||t.some(function(s){return a3[r].includes(s)}))&&(e=r)}),e}function Tu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Ut:n,s=B6[r][t];if(r===Ya&&!t)return"fad";var i=cv[r][t]||cv[r][s],o=t in Tn.styles?t:null,a=i||o||null;return a}function d3(t){var e=[],n=null;return t.forEach(function(r){var s=c3(fe.cssPrefix,r);s?n=s:r&&e.push(r)}),{iconName:n,rest:e}}function pv(t){return t.sort().filter(function(e,n,r){return r.indexOf(e)===n})}var mv=EA.concat(vA);function Au(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,s=null,i=pv(t.filter(function(m){return mv.includes(m)})),o=pv(t.filter(function(m){return!mv.includes(m)})),a=i.filter(function(m){return s=m,!sA.includes(m)}),c=wu(a,1),u=c[0],f=u===void 0?null:u,h=h3(i),p=W(W({},d3(o)),{},{prefix:Tu(f,{family:h})});return W(W(W({},p),y3({values:t,family:h,styles:Ra,config:fe,canonical:p,givenPrefix:s})),p3(r,s,p))}function p3(t,e,n){var r=n.prefix,s=n.iconName;if(t||!r||!s)return{prefix:r,iconName:s};var i=e==="fa"?HA(s):{},o=Ps(r,s);return s=i.iconName||o||s,r=i.prefix||r,r==="far"&&!Ra.far&&Ra.fas&&!fe.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}var m3=_A.filter(function(t){return t!==Ut||t!==Ya}),g3=Object.keys(Gh).filter(function(t){return t!==Ut}).map(function(t){return Object.keys(Gh[t])}).flat();function y3(t){var e=t.values,n=t.family,r=t.canonical,s=t.givenPrefix,i=s===void 0?"":s,o=t.styles,a=o===void 0?{}:o,c=t.config,u=c===void 0?{}:c,f=n===Ya,h=e.includes("fa-duotone")||e.includes("fad"),p=u.familyDefault==="duotone",m=r.prefix==="fad"||r.prefix==="fa-duotone";if(!f&&(h||p||m)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&m3.includes(n)){var y=Object.keys(a).find(function(P){return g3.includes(P)});if(y||u.autoFetchSvg){var b=$F.get(n).defaultShortPrefixId;r.prefix=b,r.iconName=Ps(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||i==="fa")&&(r.prefix=us()||"fas"),r}var _3=function(){function t(){fF(this,t),this.definitions={}}return dF(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];var o=s.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=W(W({},n.definitions[a]||{}),o[a]),LA(a,o[a]),BA()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(i){var o=s[i],a=o.prefix,c=o.iconName,u=o.icon,f=u[2];n[a]||(n[a]={}),f.length>0&&f.forEach(function(h){typeof h=="string"&&(n[a][h]=u)}),n[a][c]=u}),n}}])}(),gv=[],_i={},Ni={},v3=Object.keys(Ni);function E3(t,e){var n=e.mixoutsTo;return gv=t,_i={},Object.keys(Ni).forEach(function(r){v3.indexOf(r)===-1&&delete Ni[r]}),gv.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(o){typeof s[o]=="function"&&(n[o]=s[o]),Nc(s[o])==="object"&&Object.keys(s[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=s[o][a]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){_i[o]||(_i[o]=[]),_i[o].push(i[o])})}r.provides&&r.provides(Ni)}),n}function Zh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];var i=_i[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function zs(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var s=_i[t]||[];s.forEach(function(i){i.apply(null,n)})}function fs(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ni[t]?Ni[t].apply(null,e):void 0}function ed(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||us();if(e)return e=Ps(n,e)||e,hv(zA.definitions,n,e)||hv(Tn.styles,n,e)}var zA=new _3,w3=function(){fe.autoReplaceSvg=!1,fe.observeMutations=!1,zs("noAuto")},b3={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ir?(zs("beforeI2svg",e),fs("pseudoElements2svg",e),fs("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;fe.autoReplaceSvg===!1&&(fe.autoReplaceSvg=!0),fe.observeMutations=!0,i3(function(){A3({autoReplaceSvgRoot:n}),zs("watch",e)})}},T3={icon:function(e){if(e===null)return null;if(Nc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ps(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Tu(e[0]);return{prefix:r,iconName:Ps(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(fe.cssPrefix,"-"))>-1||e.match(H6))){var s=Au(e.split(" "),{skipLookups:!0});return{prefix:s.prefix||us(),iconName:Ps(s.prefix,s.iconName)||s.iconName}}if(typeof e=="string"){var i=us();return{prefix:i,iconName:Ps(i,e)||e}}}},an={noAuto:w3,config:fe,dom:b3,parse:T3,library:zA,findIconDefinition:ed,toHtml:Ja},A3=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Ke:n;(Object.keys(Tn.styles).length>0||fe.autoFetchSvg)&&Ir&&fe.autoReplaceSvg&&an.dom.i2svg({node:r})};function Iu(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Ja(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Ir){var r=Ke.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function I3(t){var e=t.children,n=t.main,r=t.mask,s=t.attributes,i=t.styles,o=t.transform;if(Kp(o)&&n.found&&!r.found){var a=n.width,c=n.height,u={x:a/c/2,y:.5};s.style=bu(W(W({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function S3(t){var e=t.prefix,n=t.iconName,r=t.children,s=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(fe.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:W(W({},s),{},{id:o}),children:r}]}]}function R3(t){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(n){return n in t})}function Jp(t){var e=t.icons,n=e.main,r=e.mask,s=t.prefix,i=t.iconName,o=t.transform,a=t.symbol,c=t.maskId,u=t.extra,f=t.watchable,h=f===void 0?!1:f,p=r.found?r:n,m=p.width,y=p.height,b=[fe.replacementClass,i?"".concat(fe.cssPrefix,"-").concat(i):""].filter(function(D){return u.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(u.classes).join(" "),P={children:[],attributes:W(W({},u.attributes),{},{"data-prefix":s,"data-icon":i,class:b,role:u.attributes.role||"img",viewBox:"0 0 ".concat(m," ").concat(y)})};!R3(u.attributes)&&!u.attributes["aria-hidden"]&&(P.attributes["aria-hidden"]="true"),h&&(P.attributes[qs]="");var O=W(W({},P),{},{prefix:s,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:a,styles:W({},u.styles)}),C=r.found&&n.found?fs("generateAbstractMask",O)||{children:[],attributes:{}}:fs("generateAbstractIcon",O)||{children:[],attributes:{}},v=C.children,I=C.attributes;return O.children=v,O.attributes=I,a?S3(O):I3(O)}function yv(t){var e=t.content,n=t.width,r=t.height,s=t.transform,i=t.extra,o=t.watchable,a=o===void 0?!1:o,c=W(W({},i.attributes),{},{class:i.classes.join(" ")});a&&(c[qs]="");var u=W({},i.styles);Kp(s)&&(u.transform=n3({transform:s,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=bu(u);f.length>0&&(c.style=f);var h=[];return h.push({tag:"span",attributes:c,children:[e]}),h}function C3(t){var e=t.content,n=t.extra,r=W(W({},n.attributes),{},{class:n.classes.join(" ")}),s=bu(n.styles);s.length>0&&(r.style=s);var i=[];return i.push({tag:"span",attributes:r,children:[e]}),i}var xf=Tn.styles;function td(t){var e=t[0],n=t[1],r=t.slice(4),s=wu(r,1),i=s[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(fe.cssPrefix,"-").concat(kf.GROUP)},children:[{tag:"path",attributes:{class:"".concat(fe.cssPrefix,"-").concat(kf.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(fe.cssPrefix,"-").concat(kf.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var P3={found:!1,width:512,height:512};function k3(t,e){!IA&&!fe.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function nd(t,e){var n=e;return e==="fa"&&fe.styleDefault!==null&&(e=us()),new Promise(function(r,s){if(n==="fa"){var i=HA(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&xf[e]&&xf[e][t]){var o=xf[e][t];return r(td(o))}k3(t,e),r(W(W({},P3),{},{icon:fe.showMissingIcons&&t?fs("missingIconAbstract")||{}:{}}))})}var _v=function(){},rd=fe.measurePerformance&&Ll&&Ll.mark&&Ll.measure?Ll:{mark:_v,measure:_v},Mo='FA "7.0.0"',O3=function(e){return rd.mark("".concat(Mo," ").concat(e," begins")),function(){return WA(e)}},WA=function(e){rd.mark("".concat(Mo," ").concat(e," ends")),rd.measure("".concat(Mo," ").concat(e),"".concat(Mo," ").concat(e," begins"),"".concat(Mo," ").concat(e," ends"))},Xp={begin:O3,end:WA},Xl=function(){};function vv(t){var e=t.getAttribute?t.getAttribute(qs):null;return typeof e=="string"}function N3(t){var e=t.getAttribute?t.getAttribute(zp):null,n=t.getAttribute?t.getAttribute(Wp):null;return e&&n}function x3(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(fe.replacementClass)}function D3(){if(fe.autoReplaceSvg===!0)return Zl.replace;var t=Zl[fe.autoReplaceSvg];return t||Zl.replace}function L3(t){return Ke.createElementNS("http://www.w3.org/2000/svg",t)}function M3(t){return Ke.createElement(t)}function GA(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?L3:M3:n;if(typeof t=="string")return Ke.createTextNode(t);var s=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){s.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){s.appendChild(GA(o,{ceFn:r}))}),s}function V3(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Zl={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(s){n.parentNode.insertBefore(GA(s),n)}),n.getAttribute(qs)===null&&fe.keepOriginalSource){var r=Ke.createComment(V3(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Gp(n).indexOf(fe.replacementClass))return Zl.replace(e);var s=new RegExp("".concat(fe.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(a,c){return c===fe.replacementClass||c.match(s)?a.toSvg.push(c):a.toNode.push(c),a},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(a){return Ja(a)}).join(`
`);n.setAttribute(qs,""),n.innerHTML=o}};function Ev(t){t()}function KA(t,e){var n=typeof e=="function"?e:Xl;if(t.length===0)n();else{var r=Ev;fe.mutateApproach===$6&&(r=cs.requestAnimationFrame||Ev),r(function(){var s=D3(),i=Xp.begin("mutate");t.map(s),i(),n()})}}var Zp=!1;function YA(){Zp=!0}function sd(){Zp=!1}var Dc=null;function wv(t){if(iv&&fe.observeMutations){var e=t.treeCallback,n=e===void 0?Xl:e,r=t.nodeCallback,s=r===void 0?Xl:r,i=t.pseudoElementsCallback,o=i===void 0?Xl:i,a=t.observeMutationsRoot,c=a===void 0?Ke:a;Dc=new iv(function(u){if(!Zp){var f=us();lo(u).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!vv(h.addedNodes[0])&&(fe.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&fe.searchPseudoElements&&o([h.target],!0),h.type==="attributes"&&vv(h.target)&&~W6.indexOf(h.attributeName))if(h.attributeName==="class"&&N3(h.target)){var p=Au(Gp(h.target)),m=p.prefix,y=p.iconName;h.target.setAttribute(zp,m||f),y&&h.target.setAttribute(Wp,y)}else x3(h.target)&&s(h.target)})}}),Ir&&Dc.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function F3(){Dc&&Dc.disconnect()}function U3(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,s){var i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function $3(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",s=Au(Gp(t));return s.prefix||(s.prefix=us()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=u3(s.prefix,t.innerText)||Qp(s.prefix,DA(t.innerText))),!s.iconName&&fe.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function j3(t){var e=lo(t.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{});return e}function B3(){return{iconName:null,prefix:null,transform:Vn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function bv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=$3(t),r=n.iconName,s=n.prefix,i=n.rest,o=j3(t),a=Zh("parseNodeAttributes",{},t),c=e.styleParser?U3(t):[];return W({iconName:r,prefix:s,transform:Vn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:o}},a)}var H3=Tn.styles;function QA(t){var e=fe.autoReplaceSvg==="nest"?bv(t,{styleParser:!1}):bv(t);return~e.extra.classes.indexOf(CA)?fs("generateLayersText",t,e):fs("generateSvgReplacementMutation",t,e)}function q3(){return[].concat(kn(vA),kn(EA))}function Tv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ir)return Promise.resolve();var n=Ke.documentElement.classList,r=function(h){return n.add("".concat(lv,"-").concat(h))},s=function(h){return n.remove("".concat(lv,"-").concat(h))},i=fe.autoFetchSvg?q3():sA.concat(Object.keys(H3));i.includes("fa")||i.push("fa");var o=[".".concat(CA,":not([").concat(qs,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(qs,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=lo(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();var c=Xp.begin("onTree"),u=a.reduce(function(f,h){try{var p=QA(h);p&&f.push(p)}catch(m){IA||m.name==="MissingIcon"&&console.error(m)}return f},[]);return new Promise(function(f,h){Promise.all(u).then(function(p){KA(p,function(){r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),c(),f()})}).catch(function(p){c(),h(p)})})}function z3(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;QA(t).then(function(n){n&&KA([n],e)})}function W3(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:ed(e||{}),s=n.mask;return s&&(s=(s||{}).icon?s:ed(s||{})),t(r,W(W({},n),{},{mask:s}))}}var G3=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,s=r===void 0?Vn:r,i=n.symbol,o=i===void 0?!1:i,a=n.mask,c=a===void 0?null:a,u=n.maskId,f=u===void 0?null:u,h=n.classes,p=h===void 0?[]:h,m=n.attributes,y=m===void 0?{}:m,b=n.styles,P=b===void 0?{}:b;if(e){var O=e.prefix,C=e.iconName,v=e.icon;return Iu(W({type:"icon"},e),function(){return zs("beforeDOMElementCreation",{iconDefinition:e,params:n}),Jp({icons:{main:td(v),mask:c?td(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:C,transform:W(W({},Vn),s),symbol:o,maskId:f,extra:{attributes:y,styles:P,classes:p}})})}},K3={mixout:function(){return{icon:W3(G3)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Tv,n.nodeCallback=z3,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,s=r===void 0?Ke:r,i=n.callback,o=i===void 0?function(){}:i;return Tv(s,o)},e.generateSvgReplacementMutation=function(n,r){var s=r.iconName,i=r.prefix,o=r.transform,a=r.symbol,c=r.mask,u=r.maskId,f=r.extra;return new Promise(function(h,p){Promise.all([nd(s,i),c.iconName?nd(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(m){var y=wu(m,2),b=y[0],P=y[1];h([n,Jp({icons:{main:b,mask:P},prefix:i,iconName:s,transform:o,symbol:a,maskId:u,extra:f,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(n){var r=n.children,s=n.attributes,i=n.main,o=n.transform,a=n.styles,c=bu(a);c.length>0&&(s.style=c);var u;return Kp(o)&&(u=fs("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:s}}}},Y3={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,i=s===void 0?[]:s;return Iu({type:"layer"},function(){zs("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(c){o=o.concat(c.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(fe.cssPrefix,"-layers")].concat(kn(i)).join(" ")},children:o}]})}}}},Q3={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var s=r.classes,i=s===void 0?[]:s,o=r.attributes,a=o===void 0?{}:o,c=r.styles,u=c===void 0?{}:c;return Iu({type:"counter",content:n},function(){return zs("beforeDOMElementCreation",{content:n,params:r}),C3({content:n.toString(),extra:{attributes:a,styles:u,classes:["".concat(fe.cssPrefix,"-layers-counter")].concat(kn(i))}})})}}}},J3={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,i=s===void 0?Vn:s,o=r.classes,a=o===void 0?[]:o,c=r.attributes,u=c===void 0?{}:c,f=r.styles,h=f===void 0?{}:f;return Iu({type:"text",content:n},function(){return zs("beforeDOMElementCreation",{content:n,params:r}),yv({content:n,transform:W(W({},Vn),i),extra:{attributes:u,styles:h,classes:["".concat(fe.cssPrefix,"-layers-text")].concat(kn(a))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var s=r.transform,i=r.extra,o=null,a=null;if(nA){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();o=u.width/c,a=u.height/c}return Promise.resolve([n,yv({content:n.innerHTML,width:o,height:a,transform:s,extra:i,watchable:!0})])}}},JA=new RegExp('"',"ug"),Av=[1105920,1112319],Iv=W(W(W(W({},{FontAwesome:{normal:"fas",400:"fas"}}),UF),F6),KF),id=Object.keys(Iv).reduce(function(t,e){return t[e.toLowerCase()]=Iv[e],t},{}),X3=Object.keys(id).reduce(function(t,e){var n=id[e];return t[e]=n[900]||kn(Object.entries(n))[0][1],t},{});function Z3(t){var e=t.replace(JA,"");return DA(kn(e)[0]||"")}function eU(t){var e=t.getPropertyValue("font-feature-settings").includes("ss01"),n=t.getPropertyValue("content"),r=n.replace(JA,""),s=r.codePointAt(0),i=s>=Av[0]&&s<=Av[1],o=r.length===2?r[0]===r[1]:!1;return i||o||e}function tU(t,e){var n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(id[n]||{})[s]||X3[n]}function Sv(t,e){var n="".concat(U6).concat(e.replace(":","-"));return new Promise(function(r,s){if(t.getAttribute(n)!==null)return r();var i=lo(t.children),o=i.filter(function(F){return F.getAttribute(Yh)===e})[0],a=cs.getComputedStyle(t,e),c=a.getPropertyValue("font-family"),u=c.match(q6),f=a.getPropertyValue("font-weight"),h=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&h!=="none"&&h!==""){var p=a.getPropertyValue("content"),m=tU(c,f),y=Z3(p),b=u[0].startsWith("FontAwesome"),P=eU(a),O=Qp(m,y),C=O;if(b){var v=f3(y);v.iconName&&v.prefix&&(O=v.iconName,m=v.prefix)}if(O&&!P&&(!o||o.getAttribute(zp)!==m||o.getAttribute(Wp)!==C)){t.setAttribute(n,C),o&&t.removeChild(o);var I=B3(),D=I.extra;D.attributes[Yh]=e,nd(O,m).then(function(F){var S=Jp(W(W({},I),{},{icons:{main:F,mask:qA()},prefix:m,iconName:C,extra:D,watchable:!0})),E=Ke.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(E,t.firstChild):t.appendChild(E),E.outerHTML=S.map(function(_){return Ja(_)}).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function nU(t){return Promise.all([Sv(t,"::before"),Sv(t,"::after")])}function rU(t){return t.parentNode!==document.head&&!~j6.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Yh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}var sU=function(e){return!!e&&AA.some(function(n){return e.includes(n)})},iU=function(e){if(!e)return[];for(var n=new Set,r=[e],s=[/(?=\s:)/,new RegExp("(?<=\\)\\)?[^,]*,)")],i=function(){var m=a[o];r=r.flatMap(function(y){return y.split(m).map(function(b){return b.replace(/,\s*$/,"").trim()})})},o=0,a=s;o<a.length;o++)i();r=r.flatMap(function(p){return p.includes("(")?p:p.split(",").map(function(m){return m.trim()})});var c=Jl(r),u;try{for(c.s();!(u=c.n()).done;){var f=u.value;if(sU(f)){var h=AA.reduce(function(p,m){return p.replace(m,"")},f);h!==""&&h!=="*"&&n.add(h)}}}catch(p){c.e(p)}finally{c.f()}return n};function Rv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Ir){var n;if(e)n=t;else if(fe.searchPseudoElementsFullScan)n=t.querySelectorAll("*");else{var r=new Set,s=Jl(document.styleSheets),i;try{for(s.s();!(i=s.n()).done;){var o=i.value;try{var a=Jl(o.cssRules),c;try{for(a.s();!(c=a.n()).done;){var u=c.value,f=iU(u.selectorText),h=Jl(f),p;try{for(h.s();!(p=h.n()).done;){var m=p.value;r.add(m)}}catch(b){h.e(b)}finally{h.f()}}}catch(b){a.e(b)}finally{a.f()}}catch(b){fe.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(b.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(b){s.e(b)}finally{s.f()}if(!r.size)return;var y=Array.from(r).join(", ");try{n=t.querySelectorAll(y)}catch{}}return new Promise(function(b,P){var O=lo(n).filter(rU).map(nU),C=Xp.begin("searchPseudoElements");YA(),Promise.all(O).then(function(){C(),sd(),b()}).catch(function(){C(),sd(),P()})})}}var oU={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Rv,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,s=r===void 0?Ke:r;fe.searchPseudoElements&&Rv(s)}}},Cv=!1,aU={mixout:function(){return{dom:{unwatch:function(){YA(),Cv=!0}}}},hooks:function(){return{bootstrap:function(){wv(Zh("mutationObserverCallbacks",{}))},noAuto:function(){F3()},watch:function(n){var r=n.observeMutationsRoot;Cv?sd():wv(Zh("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Pv=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,s){var i=s.toLowerCase().split("-"),o=i[0],a=i.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},lU={mixout:function(){return{parse:{transform:function(n){return Pv(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-transform");return s&&(n.transform=Pv(s)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,s=n.transform,i=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(s.x*32,", ").concat(s.y*32,") "),u="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),f="rotate(".concat(s.rotate," 0 0)"),h={transform:"".concat(c," ").concat(u," ").concat(f)},p={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:h,path:p};return{tag:"g",attributes:W({},m.outer),children:[{tag:"g",attributes:W({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:W(W({},r.icon.attributes),m.path)}]}]}}}},Df={x:0,y:0,width:"100%",height:"100%"};function kv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function cU(t){return t.tag==="g"?t.children:[t]}var uU={hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-mask"),i=s?Au(s.split(" ").map(function(o){return o.trim()})):qA();return i.prefix||(i.prefix=us()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,s=n.attributes,i=n.main,o=n.mask,a=n.maskId,c=n.transform,u=i.width,f=i.icon,h=o.width,p=o.icon,m=t3({transform:c,containerWidth:h,iconWidth:u}),y={tag:"rect",attributes:W(W({},Df),{},{fill:"white"})},b=f.children?{children:f.children.map(kv)}:{},P={tag:"g",attributes:W({},m.inner),children:[kv(W({tag:f.tag,attributes:W(W({},f.attributes),m.path)},b))]},O={tag:"g",attributes:W({},m.outer),children:[P]},C="mask-".concat(a||uv()),v="clip-".concat(a||uv()),I={tag:"mask",attributes:W(W({},Df),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,O]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:cU(p)},I]};return r.push(D,{tag:"rect",attributes:W({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(C,")")},Df)}),{children:r,attributes:s}}}},fU={provides:function(e){var n=!1;cs.matchMedia&&(n=cs.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],s={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:W(W({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=W(W({},i),{},{attributeName:"opacity"}),a={tag:"circle",attributes:W(W({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:W(W({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:W(W({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:W(W({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:W(W({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:W(W({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:W(W({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},hU={hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-symbol"),i=s===null?!1:s===""?!0:s;return n.symbol=i,n}}}},dU=[s3,K3,Y3,Q3,J3,oU,aU,lU,uU,fU,hU];E3(dU,{mixoutsTo:an});an.noAuto;var pU=an.config,mU=an.library;an.dom;var od=an.parse;an.findIconDefinition;an.toHtml;var gU=an.icon;an.layer;an.text;an.counter;function Nt(t,e,n){return(e=EU(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ov(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function lr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ov(Object(n),!0).forEach(function(r){Nt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ov(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function yU(t,e){if(t==null)return{};var n,r,s=_U(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}function _U(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function vU(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function EU(t){var e=vU(t,"string");return typeof e=="symbol"?e:e+""}function Lc(t){"@babel/helpers - typeof";return Lc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Lc(t)}function Lf(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Nt({},t,e):{}}function wU(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Nt(Nt(Nt(Nt(Nt(Nt(Nt(Nt(Nt(Nt(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-rotate-by",t.rotateBy),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),Nt(Nt(Nt(Nt(e,"fa-flash",t.flash),"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse),"fa-width-auto",t.widthAuto));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}var bU=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},XA={exports:{}};(function(t){(function(e){var n=function(O,C,v){if(!u(C)||h(C)||p(C)||m(C)||c(C))return C;var I,D=0,F=0;if(f(C))for(I=[],F=C.length;D<F;D++)I.push(n(O,C[D],v));else{I={};for(var S in C)Object.prototype.hasOwnProperty.call(C,S)&&(I[O(S,v)]=n(O,C[S],v))}return I},r=function(O,C){C=C||{};var v=C.separator||"_",I=C.split||/(?=[A-Z])/;return O.split(I).join(v)},s=function(O){return y(O)?O:(O=O.replace(/[\-_\s]+(.)?/g,function(C,v){return v?v.toUpperCase():""}),O.substr(0,1).toLowerCase()+O.substr(1))},i=function(O){var C=s(O);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(O,C){return r(O,C).toLowerCase()},a=Object.prototype.toString,c=function(O){return typeof O=="function"},u=function(O){return O===Object(O)},f=function(O){return a.call(O)=="[object Array]"},h=function(O){return a.call(O)=="[object Date]"},p=function(O){return a.call(O)=="[object RegExp]"},m=function(O){return a.call(O)=="[object Boolean]"},y=function(O){return O=O-0,O===O},b=function(O,C){var v=C&&"process"in C?C.process:C;return typeof v!="function"?O:function(I,D){return v(I,O,D)}},P={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(O,C){return n(b(s,C),O)},decamelizeKeys:function(O,C){return n(b(o,C),O,C)},pascalizeKeys:function(O,C){return n(b(i,C),O)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=P:e.humps=P})(bU)})(XA);var TU=XA.exports,AU=["class","style"];function IU(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=TU.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function SU(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function ZA(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return ZA(c)}),s=Object.keys(t.attributes||{}).reduce(function(c,u){var f=t.attributes[u];switch(u){case"class":c.class=SU(f);break;case"style":c.style=IU(f);break;default:c.attrs[u]=f}return c},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=yU(n,AU);return Ge(t.tag,lr(lr(lr({},e),{},{class:s.class,style:lr(lr({},s.style),o)},s.attrs),a),r)}var eI=!1;try{eI=!0}catch{}function RU(){if(!eI&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Nv(t){if(t&&Lc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(od.icon)return od.icon(t);if(t===null)return null;if(Lc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var CU=yn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Se(function(){return Nv(e.icon)}),i=Se(function(){return Lf("classes",wU(e))}),o=Se(function(){return Lf("transform",typeof e.transform=="string"?od.transform(e.transform):e.transform)}),a=Se(function(){return Lf("mask",Nv(e.mask))}),c=Se(function(){var f=lr(lr(lr(lr({},i.value),o.value),a.value),{},{symbol:e.symbol,maskId:e.maskId});return f.title=e.title,f.titleId=e.titleId,gU(s.value,f)});$n(c,function(f){if(!f)return RU("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var u=Se(function(){return c.value?ZA(c.value.abstract[0],{},r):null});return function(){return u.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const PU={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const kU={prefix:"fab",iconName:"square-facebook",icon:[448,512,["facebook-square"],"f082","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]},OU=kU,NU={prefix:"fab",iconName:"imdb",icon:[448,512,[],"f2d8","M89.5 323.6H53.93V186.2H89.5V323.6zM156.1 250.5L165.2 186.2H211.5V323.6H180.5V230.9L167.1 323.6H145.8L132.8 232.9L132.7 323.6H101.5V186.2H147.6C148.1 194.5 150.4 204.3 151.9 215.6L156.1 250.5zM223.7 323.6V186.2H250.3C267.3 186.2 277.3 187.1 283.3 188.6C289.4 190.3 294 192.8 297.2 196.5C300.3 199.8 302.3 203.1 303 208.5C303.9 212.9 304.4 221.6 304.4 234.7V282.9C304.4 295.2 303.7 303.4 302.5 307.6C301.4 311.7 299.4 315 296.5 317.3C293.7 319.7 290.1 321.4 285.8 322.3C281.6 323.1 275.2 323.6 266.7 323.6H223.7zM259.2 209.7V299.1C264.3 299.1 267.5 298.1 268.6 296.8C269.7 294.8 270.4 289.2 270.4 280.1V226.8C270.4 220.6 270.3 216.6 269.7 214.8C269.4 213 268.5 211.8 267.1 210.1C265.7 210.1 263 209.7 259.2 209.7V209.7zM316.5 323.6V186.2H350.6V230.1C353.5 227.7 356.7 225.2 360.1 223.5C363.7 222 368.9 221.1 372.9 221.1C377.7 221.1 381.8 221.9 385.2 223.3C388.6 224.8 391.2 226.8 393.2 229.5C394.9 232.1 395.9 234.8 396.3 237.3C396.7 239.9 396.1 245.3 396.1 253.5V292.1C396.1 300.3 396.3 306.4 395.3 310.5C394.2 314.5 391.5 318.1 387.5 320.1C383.4 324 378.6 325.4 372.9 325.4C368.9 325.4 363.7 324.5 360.2 322.9C356.7 321.1 353.5 318.4 350.6 314.9L348.5 323.6L316.5 323.6zM361.6 302.9C362.3 301.1 362.6 296.9 362.6 290.4V255C362.6 249.4 362.3 245.5 361.5 243.8C360.8 241.9 357.8 241.1 355.7 241.1C353.7 241.1 352.3 241.9 351.6 243.4C351 244.9 350.6 248.8 350.6 255V291.4C350.6 297.5 351 301.4 351.8 303C352.4 304.7 353.9 305.5 355.9 305.5C358.1 305.5 360.1 304.7 361.6 302.9L361.6 302.9zM418.4 32.04C434.1 33.27 447.1 47.28 447.1 63.92V448.1C447.1 464.5 435.2 478.5 418.9 479.1C418.6 479.1 418.4 480 418.1 480H29.88C29.6 480 29.32 479.1 29.04 479.9C13.31 478.5 1.093 466.1 0 449.7L.0186 61.78C1.081 45.88 13.82 33.09 30.26 31.1H417.7C417.9 31.1 418.2 32.01 418.4 32.04L418.4 32.04zM30.27 41.26C19 42.01 10.02 51.01 9.257 62.4V449.7C9.63 455.1 11.91 460.2 15.7 464C19.48 467.9 24.51 470.3 29.89 470.7H418.1C429.6 469.7 438.7 459.1 438.7 448.1V63.91C438.7 58.17 436.6 52.65 432.7 48.45C428.8 44.24 423.4 41.67 417.7 41.26L30.27 41.26z"]},xU={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},DU={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};pU.autoAddCss=!1;mU.add(PU,xU,OU,DU,NU);const LU=Wt(t=>{t.vueApp.component("font-awesome-icon",CU)});var xv=/^(GTM|G)-[0-9A-Z]+$/;function Mf(t){if(typeof t!="string"||!xv.test(t)){let e=String(t).toUpperCase().replace(/.*-|[^0-9A-Z]/g,""),n=e.length===0?"":` Did you mean 'GTM-${e}' or 'G-${e}'?`;throw new Error(`'${t}' is not a valid GTM-ID (${xv}).${n}`)}}function Vo(t,e="dataLayer"){return t[e]||(t[e]=[]),t[e]}function xi(t,e){let n=document,r=n.createElement("script"),s=u=>{e.onReady?.({id:t,script:r}),r.removeEventListener("load",s)};r.addEventListener("load",s);let i=e.dataLayerName??"dataLayer";if(Vo(window,i).push({event:"gtm.js","gtm.start":new Date().getTime()}),!t)return r;r.async=!e.defer,r.defer=!!(e.defer||e.compatibility),e.nonce&&r.setAttribute("nonce",e.nonce),e.scriptType&&(r.type=e.scriptType);let o=new URLSearchParams({id:t,...e.dataLayerName?{l:e.dataLayerName}:{},...e.queryParams??{}}),a=e.source??"https://www.googletagmanager.com/gtm.js";r.src=`${a}?${o}`;let c=e.parentElement??n.body;if(typeof c?.appendChild!="function")throw new Error("parentElement must be a DOM element");return c.appendChild(r),r}function MU(t="https://www.googletagmanager.com/gtm.js"){return Array.from(document.getElementsByTagName("script")).some(e=>e.src.includes(t))}var VU=class{id;options;scriptElements=[];constructor(t){if(Array.isArray(t.id))for(let e of t.id)Mf(typeof e=="string"?e:e.id);else Mf(t.id);this.id=t.id,this.options={enabled:!0,debug:!1,loadScript:!0,defer:!1,compatibility:!1,dataLayerName:"dataLayer",...t},delete this.options.id}isInBrowserContext=()=>typeof window<"u";enabled(){return this.options.enabled??!0}enable(t=!0,e){if(this.options.enabled=t,this.isInBrowserContext()&&t&&!MU(e)&&this.options.loadScript)if(Array.isArray(this.id))this.id.forEach(n=>{let r;typeof n=="string"?r=xi(n,{...this.options}):r=xi(n.id,{...this.options,queryParams:n.queryParams}),this.scriptElements.push(r)});else{let n=xi(this.id,{...this.options});this.scriptElements.push(n)}}debugEnabled(){return this.options.debug??!1}debug(t){this.options.debug=t}dataLayer(){return this.isInBrowserContext()&&this.options.enabled?Vo(window,this.options.dataLayerName):!1}trackView(t,e,n={}){let r=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${r?"":"(disabled)"}]: Dispatching TrackView`,{screenName:t,path:e}),r&&Vo(window,this.options.dataLayerName).push({...n,event:this.options.trackViewEventProperty??"content-view","content-name":e,"content-view-name":t})}trackEvent({event:t,category:e=null,action:n=null,label:r=null,value:s=null,noninteraction:i=!1,...o}={}){let a=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${a?"":"(disabled)"}]: Dispatching event`,{event:t,category:e,action:n,label:r,value:s,...o}),a&&Vo(window,this.options.dataLayerName).push({event:t??"interaction",target:e,action:n,"target-properties":r,value:s,"interaction-type":i,...o})}push(t){let e=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${e?"":"(disabled)"}]: Dispatching event`,t),e&&Vo(window,this.options.dataLayerName).push(t)}},cr;function FU(t,e={id:""}){e={trackOnNextTick:!1,...e},cr=new VU(e),t.config.globalProperties.$gtm=cr,cr.isInBrowserContext()&&(e.vueRouter&&UU(t,e.vueRouter,e.ignoredViews,e.trackOnNextTick,e.vueRouterAdditionalEventData),cr.options.enabled&&cr.options.loadScript&&(Array.isArray(e.id)?e.id.forEach(n=>{if(typeof n=="string")xi(n,e);else{let r={...e};n.queryParams!=null&&(r.queryParams={...r.queryParams,...n.queryParams}),xi(n.id,r)}}):xi(e.id,e))),t.provide("gtm",e)}function UU(t,e,n=[],r,s=()=>({})){function i(o,a){return o instanceof Error?!!(o.type&a):!1}e.afterEach(async(o,a,c)=>{if(typeof o.name!="string"||Array.isArray(n)&&n.includes(o.name)||typeof n=="function"&&n(o,a))return;let u=o.meta&&typeof o.meta.gtm=="string"&&o.meta.gtm?o.meta.gtm:o.name;i(c,4)?cr?.debugEnabled()&&console.log(`[VueGtm]: '${u}' not tracked due to navigation aborted`):i(c,8)&&cr?.debugEnabled()&&console.log(`[VueGtm]: '${u}' not tracked due to navigation cancelled`);let f={...await s(o,a),...o.meta?.gtmAdditionalEventData},h=e.options?.history?.base??"";h.endsWith("/")||(h+="/"),h+=o.fullPath.startsWith("/")?o.fullPath.substring(1):o.fullPath,r?Kn(()=>{cr?.trackView(u,h,f)}):cr?.trackView(u,h,f)})}function $U(t){return{install:e=>FU(e,t)}}const jU=Wt(t=>{const e=Ks().public,r=ib("trackingCookies").value==="true",s=e.GOOGLE_TAG_MANAGER_ENABLED==="true"||r;if(!e.GOOGLE_TAG_MANAGER_KEY){console.warn("[GTM] No GTM key configured, skipping GTM initialization");return}t.vueApp.use($U({id:e.GOOGLE_TAG_MANAGER_KEY,defer:!1,compatibility:!1,enabled:s,debug:e.GOOGLE_TAG_MANAGER_DEBUG==="true",loadScript:!0,vueRouter:St(),trackOnNextTick:!1}))}),BU=[PP,OP,MP,rO,kO,OO,NO,xO,DO,LO,MO,VO,lF,LU,jU],HU=yn({name:"NuxtRouteAnnouncer",props:{atomic:{type:Boolean,default:!1},politeness:{type:String,default:"polite"}},setup(t,{slots:e,expose:n}){const{set:r,polite:s,assertive:i,message:o,politeness:a}=bO({politeness:t.politeness});return n({set:r,polite:s,assertive:i,message:o,politeness:a}),()=>Ge("span",{class:"nuxt-route-announcer",style:{position:"absolute"}},Ge("span",{role:"alert","aria-live":a.value,"aria-atomic":t.atomic,style:{border:"0",clip:"rect(0 0 0 0)","clip-path":"inset(50%)",height:"1px",width:"1px",overflow:"hidden",position:"absolute","white-space":"nowrap","word-wrap":"normal",margin:"-1px",padding:"0"}},e.default?e.default({message:o.value}):o.value))}}),tI=(t="RouteProvider")=>yn({name:t,props:{route:{type:Object,required:!0},vnode:Object,vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const n=e.renderKey,r=e.route,s={};for(const i in e.route)Object.defineProperty(s,i,{get:()=>n===e.renderKey?e.route[i]:r[i],enumerable:!0});return Qr(Vs,Ln(s)),()=>e.vnode?Ge(e.vnode,{ref:e.vnodeRef}):e.vnode}}),qU=tI(),Dv=new WeakMap,zU=yn({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:r}){const s=xe(),i=nt(),o=mt(Vs,null);let a;r({pageRef:i});const c=mt(Sw,null);let u;const f=s.deferHydration();if(s.isHydrating){const p=s.hooks.hookOnce("app:error",f);St().beforeEach(p)}t.pageKey&&$n(()=>t.pageKey,(p,m)=>{p!==m&&s.callHook("page:loading:start")});let h=!1;{const p=St().beforeResolve(()=>{h=!1});eo(()=>{p()})}return()=>Ge(eb,{name:t.name,route:t.route,...e},{default:p=>{const m=GU(o,p.route,p.Component),y=o&&o.matched.length===p.route.matched.length;if(!p.Component){if(u&&!y)return u;f();return}if(u&&c&&!c.isCurrent(p.route))return u;if(m&&o&&(!c||c?.isCurrent(o)))return y?u:null;const b=mh(p,t.pageKey),P=KU(o,p.route,p.Component);!s.isHydrating&&a===b&&!P&&Kn(()=>{h=!0,s.callHook("page:loading:end")}),a=b;const O=!!(t.transition??p.route.meta.pageTransition??Dg),C=O&&WU([t.transition,p.route.meta.pageTransition,Dg,{onAfterLeave(){delete s._runningTransition,s.callHook("page:transition:finish",p.Component)}}]),v=t.keepalive??p.route.meta.keepalive??uC;return u=nb(O&&C,Hk(v,Ge(Cd,{suspensible:!0,onPending:()=>{O&&(s._runningTransition=!0),s.callHook("page:start",p.Component)},onResolve:()=>{Kn(()=>s.callHook("page:finish",p.Component).then(()=>{if(!h&&!P)return h=!0,s.callHook("page:loading:end")}).finally(f))}},{default:()=>{const I={key:b||void 0,vnode:n.default?YU(n.default,p):p.Component,route:p.route,renderKey:b||void 0,trackRootNodes:O,vnodeRef:i};if(!v)return Ge(qU,I);const D=p.Component.type,F=D;let S=Dv.get(F);return S||(S=tI(D.name||D.__name),Dv.set(F,S)),Ge(S,I)}}))).default(),u}})}});function WU(t){const e=t.filter(Boolean).map(n=>({...n,onAfterLeave:n.onAfterLeave?$d(n.onAfterLeave):void 0}));return Aw(...e)}function GU(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>s.components?.default===n?.type);return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>s.components?.default!==t.matched[i]?.components?.default)||n&&mh({route:e,Component:n})!==mh({route:t,Component:n})}function KU(t,e,n){return t?e.matched.findIndex(s=>s.components?.default===n?.type)<e.matched.length-1:!1}function YU(t,e){const n=t(e);return n.length===1?Ge(n[0]):Ge(Mt,void 0,n)}const QU=yn({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(t,e){return()=>Ge(Wr[t.name],t.layoutProps,e.slots)}}),JU={name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},XU=yn({name:"NuxtLayout",inheritAttrs:!1,props:JU,setup(t,e){const n=xe(),r=mt(Vs),i=!r||r===La()?tb():r,o=Se(()=>{let f=lt(t.name)??i?.meta.layout??"default";return f&&!(f in Wr)&&t.fallback&&(f=lt(t.fallback)),f}),a=Gn();e.expose({layoutRef:a});const c=n.deferHydration();if(n.isHydrating){const f=n.hooks.hookOnce("app:error",c);St().beforeEach(f)}let u;return()=>{const f=o.value&&o.value in Wr,h=i?.meta.layoutTransition??cC,p=u;return u=o.value,nb(f&&h,{default:()=>Ge(Cd,{suspensible:!0,onResolve:()=>{Kn(c)}},{default:()=>Ge(ZU,{layoutProps:ew(e.attrs,{ref:a}),key:o.value||void 0,name:o.value,shouldProvide:!t.name,isRenderingNewLayout:m=>m!==p&&m===o.value,hasTransition:!!h},e.slots)})}).default()}}}),ZU=yn({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean},isRenderingNewLayout:{type:Function,required:!0}},setup(t,e){const n=t.name;t.shouldProvide&&Qr(Sw,{isCurrent:i=>n===(i.meta.layout??"default")});const r=mt(Vs);if(r&&r===La()){const i=tb(),o={};for(const a in i){const c=a;Object.defineProperty(o,c,{enumerable:!0,get:()=>t.isRenderingNewLayout(t.name)?i[c]:r[c]})}Qr(Vs,Ln(o))}return()=>!n||typeof n=="string"&&!(n in Wr)?e.slots.default?.():Ge(QU,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}),Su=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},e9=oO(HU),t9={};function n9(t,e){const n=e9,r=zU,s=XU;return zt(),ar(s,null,{default:en(()=>[ve(n),ve(r)]),_:1})}const r9=Su(t9,[["render",n9]]),s9=Gc("/film/body_parts/vlcsnap-2010-10-12-10h36m24s49.png");function Vf(){if(typeof window>"u")return null;try{const{$firestore:t}=xe();return t??null}catch{return null}}const Lv=()=>{const t=nt(!1),e=nt(null),n=async o=>{const a=Vf();if(!a)return null;t.value=!0,e.value=null;try{const c=await zV(Zo(a,"users",o));if(!c.exists())return null;const u=c.data();return{uid:c.id,email:u.email??"",displayName:u.displayName??null,isAdmin:u.isAdmin??!1,createdAt:u.createdAt?.toDate()??null,lastLoginAt:u.lastLoginAt?.toDate()??null}}catch(c){return e.value=c.message,null}finally{t.value=!1}};return{loading:t,error:e,getUserProfile:n,upsertUserProfile:async(o,a=!1)=>{const c=Vf();if(!c)return!1;t.value=!0,e.value=null;try{const u=Zo(c,"users",o.uid);return a?await qh(u,{uid:o.uid,email:o.email??"",displayName:o.displayName??null,isAdmin:!1,createdAt:If(),lastLoginAt:If()}):await qh(u,{uid:o.uid,email:o.email??"",displayName:o.displayName??null,lastLoginAt:If()},{merge:!0}),!0}catch(u){return e.value=u.message,!1}finally{t.value=!1}},isUserAdmin:async o=>(await n(o))?.isAdmin??!1,setUserAdminStatus:async(o,a)=>{const c=Vf();if(!c)return!1;t.value=!0,e.value=null;try{return await GV(Zo(c,"users",o),{isAdmin:a}),!0}catch(u){return e.value=u.message,!1}finally{t.value=!1}}}},i9=Dw("general",{state:()=>({general:[],trackingCookiesEnabled:!1}),actions:{setGeneral(t){this.general=t},setTrackingCookiesEnabled(t){this.trackingCookiesEnabled=t===!0||t==="true"},fetchTrackingCookie(){try{const t=ib("trackingCookies"),e=t.value===!0||t.value==="true";this.setTrackingCookiesEnabled(e)}catch(t){console.error("Error fetching trackingCookies:",t)}},async fetchGeneral(){try{const{$firestore:t}=xe(),e=xV(t,"general"),r=(await WV(e)).docs.map(s=>({id:s.id,...s.data()}));this.setGeneral(r)}catch(t){console.error("Error fetching general:",t)}},async saveGeneralItem({general:t}){const{$firestore:e}=xe();try{await qh(Zo(e,"general",t.id),t)}catch(n){throw new Error("Error saving general:",n)}},async saveAllGeneral(){const{$firestore:t}=xe();try{const e=QV(t);this.general.forEach(n=>{const r=Zo(t,"general",n.id);e.set(r,n)}),await e.commit()}catch(e){console.error("Error saving all general:",e)}}},getters:{getGeneral:t=>t.general,getBio:t=>t.general.bio,isTrackingEnabled:t=>t.trackingCookiesEnabled}}),Mv=()=>{const t=i9(),e=La(),n=()=>typeof window>"u"?!1:t.isTrackingEnabled,r=y=>{if(n()){try{const{useGtm:b}=require("@gtm-support/vue-gtm"),P=b();if(P){P.push(y);return}}catch{}typeof window<"u"&&(window.dataLayer=window.dataLayer??[],window.dataLayer.push(y))}};return{isEnabled:n,push:r,trackPageView:(y,b)=>{r({event:"page_view",page_path:y??e.path,page_title:b??(typeof document<"u"?document.title:"")})},trackGalleryOpen:y=>{r({event:"gallery_opened",gallery_name:y.name,page_path:y.page_path??e.path})},trackGalleryClose:y=>{r({event:"gallery_closed",gallery_name:y.name,page_path:y.page_path??e.path})},trackGalleryViewedFailed:y=>{r({event:"gallery_viewed_failed",film_name:y,page_path:e.path})},trackVideoInteraction:y=>{r({event:"video_interaction",video_id:y.video_id,video_title:y.video_title??"",action:y.action,page_path:e.path})},trackYouTubeSubscription:y=>{r({event:"youtube_subscription",channel_id:y.channel_id,action:y.action,page_path:e.path})},trackSignIn:y=>{r({event:"sign_in",method:y,page_path:e.path})},trackSignOut:()=>{r({event:"sign_out",page_path:e.path})},trackContactForm:y=>{r({event:"contact_form",form_name:y.form_name,status:y.status,page_path:e.path})},trackEvent:(y,b)=>{r({event:y,page_path:e.path,...b})}}};function Ff(){if(typeof window>"u")return null;try{const{$auth:t}=xe();return t??null}catch{return null}}const Vv=Dw("auth",()=>{const t=nt(null),e=nt(null),n=nt(!0),r=nt(!1),s=nt(null),i=nt(!1),o=Se(()=>!!t.value),a=Se(()=>t.value),c=Se(()=>e.value),u=Se(()=>n.value),f=Se(()=>r.value),h=Se(()=>s.value),p=Se(()=>i.value);function m(I){s.value=I,i.value=!0,typeof window<"u"&&localStorage.setItem("youtube_access_token",I)}function y(){s.value=null,i.value=!1,typeof window<"u"&&(localStorage.removeItem("youtube_access_token"),localStorage.removeItem("youtube_user_id"))}function b(){if(typeof window>"u")return;const I=localStorage.getItem("youtube_access_token");I&&(s.value=I,i.value=!0)}function P(I){n.value=I}async function O(I,D){const F=Ff();if(!F)return;const S=St(),E=Lv();e.value=null;try{const _=await E2(F,I,D);t.value=_.user,await E.upsertUserProfile(_.user,!1),r.value=await E.isUserAdmin(_.user.uid);try{Mv().trackSignIn("email")}catch{}await S.push({name:"Admin"})}catch(_){e.value=_.message}}async function C(){const I=Ff();try{I&&await A2(I)}catch(D){console.error("[Auth] Sign-out error:",D)}finally{t.value=null,e.value=null,r.value=!1,y();try{Mv().trackSignOut()}catch{}}}function v(){const I=Ff();if(!I)return n.value=!1,()=>{};const D=Lv();return T2(I,async S=>{t.value=S??null,S?(r.value=await D.isUserAdmin(S.uid),b()):r.value=!1,n.value=!1})}return{user:t,authError:e,loading:n,isAdmin:r,youtubeAccessToken:s,hasYouTubeAccess:i,isAuthenticated:o,getUser:a,getAuthError:c,getLoading:u,getIsAdmin:f,getYouTubeAccessToken:h,hasYouTubeAuth:p,signIn:O,signOut:C,initializeAuth:v,setLoading:P,setYouTubeAccess:m,clearYouTubeAccess:y,checkYouTubeAccess:b}}),o9=Gc("/channels4_banner.jpg"),a9={class:"navbar navbar-expand-md navbar-light bg-light"},l9={class:"navbar-nav"},c9={key:0,class:"collapse navbar-collapse",id:"navbarNavDropdown"},u9={class:"navbar-nav ml-auto"};function f9(t,e,n,r,s,i){const o=ab;return zt(),ca("nav",a9,[ve(o,{class:"navbar-brand",to:"/"},{default:en(()=>e[2]||(e[2]=[Qt("Who's Jimmy",-1)])),_:1,__:[2]}),Fe("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",onClick:e[0]||(e[0]=a=>s.visible=!s.visible)},e[3]||(e[3]=[Fe("span",{class:"navbar-toggler-icon"},null,-1)])),Fe("div",{class:Pa(["navbar-collapse",s.visible?"":"collapse"]),id:"navbarNavDropdown"},[Fe("ul",l9,[ve(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Bio"}},{default:en(()=>e[4]||(e[4]=[Qt("Bio",-1)])),_:1,__:[4]}),ve(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"Portfolio"}},{default:en(()=>e[5]||(e[5]=[Qt("Portfolio ",-1)])),_:1,__:[5]}),ve(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"ForSale"}},{default:en(()=>e[6]||(e[6]=[Qt("For Sale",-1)])),_:1,__:[6]}),ve(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Stuff"}},{default:en(()=>e[7]||(e[7]=[Qt("Cool Stuff",-1)])),_:1,__:[7]}),ve(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Contact"}},{default:en(()=>e[8]||(e[8]=[Qt("Contact Us",-1)])),_:1,__:[8]}),ve(o,{class:"btn btn-light nav-item image-nav-item cta-button",tag:"li",activeClass:"active",to:"/Portfolio/Videos"},{default:en(()=>e[9]||(e[9]=[Fe("img",{class:"nav-image",src:o9,alt:"Channel Banner"},null,-1),Fe("div",{class:"cta-overlay"},[Fe("span",{class:"cta-text"},"WATCH NOW"),Fe("div",{class:"cta-pulse"})],-1)])),_:1,__:[9]})])],2),s.isAuth?(zt(),ca("div",c9,[Fe("ul",u9,[ve(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Admin"}},{default:en(()=>[Qt(dd(t.user?t.user.email:""),1)]),_:1}),Fe("button",{class:"btn btn-light nav-item",tag:"li",onClick:e[1]||(e[1]=(...a)=>t.signOut&&t.signOut(...a))},"Logout")])])):yS("",!0)])}const h9={data(){return{visible:!1,isAuth:!1}},computed:{...MC(Vv,{user:"getUser",isAuthenticated:"isAuthenticated"})},watch:{isAuthenticated(t){this.isAuth=t}},mounted(){this.isAuth=this.isAuthenticated},methods:{...VC(Vv,{signOut:"signOut"})}},d9=Su(h9,[["render",f9],["__scopeId","data-v-d3ec44d7"]]),p9={class:"page-footer font-small bg-light navbar-fixed-bottom"},m9={class:"container"},g9={class:"py-3 pt-3"},y9={class:"text-danger",href:"https://www.youtube.com/user/jimmyclaws"},_9={href:"https://www.facebook.com/whosjimmy"},v9={href:"https://twitter.com/jimmyclaws"},E9={class:"text-secondary",href:"http://www.imdb.com/name/nm2755712/?ref_=fn_al_nm_1"},w9={class:"footer-copyright text-center font-small"};function b9(t,e){const n=aa("font-awesome-icon"),r=ab;return zt(),ca("footer",p9,[Fe("div",m9,[Fe("div",g9,[Fe("a",y9,[ve(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","youtube"]})]),Fe("a",_9,[ve(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","facebook-square"]})]),Fe("a",v9,[ve(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","twitter"]})]),Fe("a",E9,[ve(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","imdb"]})])])]),Fe("div",w9,[e[5]||(e[5]=Fe("div",null,[Qt("© 2025 Copyright: "),Fe("a",{href:"http://whosjimmy.com/"},"WhosJimmy.com")],-1)),e[6]||(e[6]=Fe("div",null,"Disclaimer: All images are copyright to their respective owners.",-1)),Fe("div",null,[ve(r,{class:"text-white",to:{name:"Terms"}},{default:en(()=>e[0]||(e[0]=[Qt("Terms",-1)])),_:1,__:[0]}),e[2]||(e[2]=Qt("A ",-1)),e[3]||(e[3]=Fe("a",{href:"http://JohnstonSoftwareDevelopment.ca",target:"_blank"},"JSD",-1)),e[4]||(e[4]=Qt(" creation.",-1)),ve(r,{class:"text-white",to:{name:"Privacy"}},{default:en(()=>e[1]||(e[1]=[Qt("Privacy",-1)])),_:1,__:[1]})])])])}const T9={},A9=Su(T9,[["render",b9],["__scopeId","data-v-865b28d3"]]),I9={class:"text-center my-0 page"},S9={class:"body"},R9={components:{appHeader:d9,appFooter:A9},head(){return{title:"Error"}}},C9=yn({...R9,__name:"error",props:{error:{}},setup(t){const e=t,{$config:n}=xe();Kg({title:e?.error?.statusCode?.toString()||"Error"});const r=()=>{Kg({title:n.public.SITE_TITLE}),Cw({redirect:"/"})};return(s,i)=>{const o=aa("app-header"),a=aa("app-footer");return zt(),ca("div",I9,[ve(o),Fe("div",S9,[i[0]||(i[0]=Fe("img",{src:s9,alt:"Error Image"},null,-1)),Fe("h2",null,"Error: "+dd(s.error?.statusCode),1),Fe("button",{class:"btn btn-primary",onClick:r}," Take me home ")]),ve(a)])}}}),P9=Su(C9,[["__scopeId","data-v-b700529b"]]),k9={key:0},Fv={__name:"nuxt-root",setup(t){const e=()=>null,n=xe(),r=n.deferHydration();if(n.isHydrating){const u=n.hooks.hookOnce("app:error",r);St().beforeEach(u)}const s=!1;Qr(Vs,La()),n.hooks.callHookWith(u=>u.map(f=>f()),"vue:setup");const i=Kc(),o=!1,a=/bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;RE((u,f,h)=>{if(n.hooks.callHook("vue:error",u,f,h).catch(p=>console.error("[nuxt] Error in `vue:error` hook",p)),a.test(navigator.userAgent))return n.hooks.callHook("app:error",u),console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`,u),!1;if(Pw(u)&&(u.fatal||u.unhandled))return n.runWithContext(()=>Is(u)),!1});const c=!1;return(u,f)=>(zt(),ar(Cd,{onResolve:lt(r)},{default:en(()=>[lt(o)?(zt(),ca("div",k9)):lt(i)?(zt(),ar(lt(P9),{key:1,error:lt(i)},null,8,["error"])):lt(c)?(zt(),ar(lt(e),{key:2,context:lt(c)},null,8,["context"])):lt(s)?(zt(),ar(D1(lt(s)),{key:3})):(zt(),ar(lt(r9),{key:4}))]),_:1},8,["onResolve"]))}};let Uv;{let t;Uv=async function(){if(t)return t;const r=!!(window.__NUXT__?.serverRendered??document.getElementById("__NUXT_DATA__")?.dataset.ssr==="true")?sR(Fv):rR(Fv),s=gC({vueApp:r});async function i(o){await s.callHook("app:error",o),s.payload.error||=xs(o)}r.config.errorHandler=i,s.hook("app:suspense:resolve",()=>{r.config.errorHandler===i&&(r.config.errorHandler=void 0)});try{await vC(s,BU)}catch(o){i(o)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(dC),await s.hooks.callHook("app:mounted",r),await Kn()}catch(o){i(o)}return r},t=Uv().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{j9 as $,Ye as A,Tr as B,eo as C,Se as D,mt as E,Qr as F,Un as G,gr as H,Kn as I,Gc as J,VC as K,en as L,ab as M,xe as N,Mt as O,x9 as P,M9 as Q,Pa as R,xV as S,H9 as T,q9 as U,WV as V,Ks as W,Mv as X,o9 as Y,Br as Z,Su as _,Vv as a,V9 as a0,sF as a1,G9 as a2,z9 as a3,W9 as a4,D9 as a5,O9 as a6,mS as a7,NS as a8,Dw as a9,QV as aa,Zo as ab,qh as ac,U9 as ad,PC as ae,Vs as af,ib as ag,A9 as ah,d9 as ai,SE as aj,La as ak,Kg as al,zU as am,Li as b,ca as c,yn as d,Fe as e,F9 as f,lt as g,gS as h,Qt as i,yS as j,Lv as k,ar as l,MC as m,Uc as n,zt as o,ve as p,aa as q,nt as r,$9 as s,dd as t,i9 as u,L9 as v,N9 as w,Gs as x,P1 as y,$n as z};
