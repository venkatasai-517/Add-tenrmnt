(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var ym={exports:{}},zl={},wm={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var js=Symbol.for("react.element"),l0=Symbol.for("react.portal"),a0=Symbol.for("react.fragment"),u0=Symbol.for("react.strict_mode"),c0=Symbol.for("react.profiler"),d0=Symbol.for("react.provider"),h0=Symbol.for("react.context"),f0=Symbol.for("react.forward_ref"),p0=Symbol.for("react.suspense"),m0=Symbol.for("react.memo"),g0=Symbol.for("react.lazy"),zh=Symbol.iterator;function v0(t){return t===null||typeof t!="object"?null:(t=zh&&t[zh]||t["@@iterator"],typeof t=="function"?t:null)}var Em={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cm=Object.assign,Sm={};function _i(t,e,n){this.props=t,this.context=e,this.refs=Sm,this.updater=n||Em}_i.prototype.isReactComponent={};_i.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};_i.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Im(){}Im.prototype=_i.prototype;function Wc(t,e,n){this.props=t,this.context=e,this.refs=Sm,this.updater=n||Em}var Vc=Wc.prototype=new Im;Vc.constructor=Wc;Cm(Vc,_i.prototype);Vc.isPureReactComponent=!0;var jh=Array.isArray,Tm=Object.prototype.hasOwnProperty,Hc={current:null},km={key:!0,ref:!0,__self:!0,__source:!0};function Rm(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Tm.call(e,r)&&!km.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:js,type:t,key:s,ref:o,props:i,_owner:Hc.current}}function _0(t,e){return{$$typeof:js,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $c(t){return typeof t=="object"&&t!==null&&t.$$typeof===js}function y0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Wh=/\/+/g;function Na(t,e){return typeof t=="object"&&t!==null&&t.key!=null?y0(""+t.key):e.toString(36)}function xo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case js:case l0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Na(o,0):r,jh(i)?(n="",t!=null&&(n=t.replace(Wh,"$&/")+"/"),xo(i,e,n,"",function(u){return u})):i!=null&&($c(i)&&(i=_0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Wh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",jh(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Na(s,l);o+=xo(s,e,n,a,i)}else if(a=v0(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Na(s,l++),o+=xo(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function co(t,e,n){if(t==null)return t;var r=[],i=0;return xo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function w0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var je={current:null},Do={transition:null},E0={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:Do,ReactCurrentOwner:Hc};function Nm(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:co,forEach:function(t,e,n){co(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return co(t,function(){e++}),e},toArray:function(t){return co(t,function(e){return e})||[]},only:function(t){if(!$c(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};W.Component=_i;W.Fragment=a0;W.Profiler=c0;W.PureComponent=Wc;W.StrictMode=u0;W.Suspense=p0;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E0;W.act=Nm;W.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Cm({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Hc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Tm.call(e,a)&&!km.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:js,type:t.type,key:i,ref:s,props:r,_owner:o}};W.createContext=function(t){return t={$$typeof:h0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:d0,_context:t},t.Consumer=t};W.createElement=Rm;W.createFactory=function(t){var e=Rm.bind(null,t);return e.type=t,e};W.createRef=function(){return{current:null}};W.forwardRef=function(t){return{$$typeof:f0,render:t}};W.isValidElement=$c;W.lazy=function(t){return{$$typeof:g0,_payload:{_status:-1,_result:t},_init:w0}};W.memo=function(t,e){return{$$typeof:m0,type:t,compare:e===void 0?null:e}};W.startTransition=function(t){var e=Do.transition;Do.transition={};try{t()}finally{Do.transition=e}};W.unstable_act=Nm;W.useCallback=function(t,e){return je.current.useCallback(t,e)};W.useContext=function(t){return je.current.useContext(t)};W.useDebugValue=function(){};W.useDeferredValue=function(t){return je.current.useDeferredValue(t)};W.useEffect=function(t,e){return je.current.useEffect(t,e)};W.useId=function(){return je.current.useId()};W.useImperativeHandle=function(t,e,n){return je.current.useImperativeHandle(t,e,n)};W.useInsertionEffect=function(t,e){return je.current.useInsertionEffect(t,e)};W.useLayoutEffect=function(t,e){return je.current.useLayoutEffect(t,e)};W.useMemo=function(t,e){return je.current.useMemo(t,e)};W.useReducer=function(t,e,n){return je.current.useReducer(t,e,n)};W.useRef=function(t){return je.current.useRef(t)};W.useState=function(t){return je.current.useState(t)};W.useSyncExternalStore=function(t,e,n){return je.current.useSyncExternalStore(t,e,n)};W.useTransition=function(){return je.current.useTransition()};W.version="18.3.1";wm.exports=W;var gn=wm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0=gn,S0=Symbol.for("react.element"),I0=Symbol.for("react.fragment"),T0=Object.prototype.hasOwnProperty,k0=C0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R0={key:!0,ref:!0,__self:!0,__source:!0};function Pm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)T0.call(e,r)&&!R0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:S0,type:t,key:s,ref:o,props:i,_owner:k0.current}}zl.Fragment=I0;zl.jsx=Pm;zl.jsxs=Pm;ym.exports=zl;var x=ym.exports,Am={exports:{}},at={},bm={exports:{}},Om={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,M){var B=N.length;N.push(M);e:for(;0<B;){var he=B-1>>>1,ye=N[he];if(0<i(ye,M))N[he]=M,N[B]=ye,B=he;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var M=N[0],B=N.pop();if(B!==M){N[0]=B;e:for(var he=0,ye=N.length,ao=ye>>>1;he<ao;){var Xn=2*(he+1)-1,Ra=N[Xn],Zn=Xn+1,uo=N[Zn];if(0>i(Ra,B))Zn<ye&&0>i(uo,Ra)?(N[he]=uo,N[Zn]=B,he=Zn):(N[he]=Ra,N[Xn]=B,he=Xn);else if(Zn<ye&&0>i(uo,B))N[he]=uo,N[Zn]=B,he=Zn;else break e}}return M}function i(N,M){var B=N.sortIndex-M.sortIndex;return B!==0?B:N.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,h=3,p=!1,v=!1,_=!1,C=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(N){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=N)r(u),M.sortIndex=M.expirationTime,e(a,M);else break;M=n(u)}}function E(N){if(_=!1,g(N),!v)if(n(a)!==null)v=!0,Ta(T);else{var M=n(u);M!==null&&ka(E,M.startTime-N)}}function T(N,M){v=!1,_&&(_=!1,m(A),A=-1),p=!0;var B=h;try{for(g(M),c=n(a);c!==null&&(!(c.expirationTime>M)||N&&!St());){var he=c.callback;if(typeof he=="function"){c.callback=null,h=c.priorityLevel;var ye=he(c.expirationTime<=M);M=t.unstable_now(),typeof ye=="function"?c.callback=ye:c===n(a)&&r(a),g(M)}else r(a);c=n(a)}if(c!==null)var ao=!0;else{var Xn=n(u);Xn!==null&&ka(E,Xn.startTime-M),ao=!1}return ao}finally{c=null,h=B,p=!1}}var R=!1,P=null,A=-1,X=5,j=-1;function St(){return!(t.unstable_now()-j<X)}function Ri(){if(P!==null){var N=t.unstable_now();j=N;var M=!0;try{M=P(!0,N)}finally{M?Ni():(R=!1,P=null)}}else R=!1}var Ni;if(typeof f=="function")Ni=function(){f(Ri)};else if(typeof MessageChannel<"u"){var Bh=new MessageChannel,o0=Bh.port2;Bh.port1.onmessage=Ri,Ni=function(){o0.postMessage(null)}}else Ni=function(){C(Ri,0)};function Ta(N){P=N,R||(R=!0,Ni())}function ka(N,M){A=C(function(){N(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,Ta(T))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var B=h;h=M;try{return N()}finally{h=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,M){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var B=h;h=N;try{return M()}finally{h=B}},t.unstable_scheduleCallback=function(N,M,B){var he=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?he+B:he):B=he,N){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=B+ye,N={id:d++,callback:M,priorityLevel:N,startTime:B,expirationTime:ye,sortIndex:-1},B>he?(N.sortIndex=B,e(u,N),n(a)===null&&N===n(u)&&(_?(m(A),A=-1):_=!0,ka(E,B-he))):(N.sortIndex=ye,e(a,N),v||p||(v=!0,Ta(T))),N},t.unstable_shouldYield=St,t.unstable_wrapCallback=function(N){var M=h;return function(){var B=h;h=M;try{return N.apply(this,arguments)}finally{h=B}}}})(Om);bm.exports=Om;var N0=bm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0=gn,it=N0;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xm=new Set,cs={};function Tr(t,e){ri(t,e),ri(t+"Capture",e)}function ri(t,e){for(cs[t]=e,t=0;t<e.length;t++)xm.add(e[t])}var rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yu=Object.prototype.hasOwnProperty,A0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vh={},Hh={};function b0(t){return yu.call(Hh,t)?!0:yu.call(Vh,t)?!1:A0.test(t)?Hh[t]=!0:(Vh[t]=!0,!1)}function O0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function x0(t,e,n,r){if(e===null||typeof e>"u"||O0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function We(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){be[t]=new We(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];be[e]=new We(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){be[t]=new We(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){be[t]=new We(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){be[t]=new We(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){be[t]=new We(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){be[t]=new We(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){be[t]=new We(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){be[t]=new We(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gc=/[\-:]([a-z])/g;function Kc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gc,Kc);be[e]=new We(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gc,Kc);be[e]=new We(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gc,Kc);be[e]=new We(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){be[t]=new We(t,1,!1,t.toLowerCase(),null,!1,!1)});be.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){be[t]=new We(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qc(t,e,n,r){var i=be.hasOwnProperty(e)?be[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(x0(e,n,i,r)&&(n=null),r||i===null?b0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var dn=P0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ho=Symbol.for("react.element"),Mr=Symbol.for("react.portal"),Fr=Symbol.for("react.fragment"),qc=Symbol.for("react.strict_mode"),wu=Symbol.for("react.profiler"),Dm=Symbol.for("react.provider"),Lm=Symbol.for("react.context"),Yc=Symbol.for("react.forward_ref"),Eu=Symbol.for("react.suspense"),Cu=Symbol.for("react.suspense_list"),Jc=Symbol.for("react.memo"),pn=Symbol.for("react.lazy"),Mm=Symbol.for("react.offscreen"),$h=Symbol.iterator;function Pi(t){return t===null||typeof t!="object"?null:(t=$h&&t[$h]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Object.assign,Pa;function Wi(t){if(Pa===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Pa=e&&e[1]||""}return`
`+Pa+t}var Aa=!1;function ba(t,e){if(!t||Aa)return"";Aa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Aa=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Wi(t):""}function D0(t){switch(t.tag){case 5:return Wi(t.type);case 16:return Wi("Lazy");case 13:return Wi("Suspense");case 19:return Wi("SuspenseList");case 0:case 2:case 15:return t=ba(t.type,!1),t;case 11:return t=ba(t.type.render,!1),t;case 1:return t=ba(t.type,!0),t;default:return""}}function Su(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Fr:return"Fragment";case Mr:return"Portal";case wu:return"Profiler";case qc:return"StrictMode";case Eu:return"Suspense";case Cu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Lm:return(t.displayName||"Context")+".Consumer";case Dm:return(t._context.displayName||"Context")+".Provider";case Yc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jc:return e=t.displayName||null,e!==null?e:Su(t.type)||"Memo";case pn:e=t._payload,t=t._init;try{return Su(t(e))}catch{}}return null}function L0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Su(e);case 8:return e===qc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function M0(t){var e=Fm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function fo(t){t._valueTracker||(t._valueTracker=M0(t))}function Um(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Fm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ko(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Iu(t,e){var n=e.checked;return ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Gh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Mn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Bm(t,e){e=e.checked,e!=null&&Qc(t,"checked",e,!1)}function Tu(t,e){Bm(t,e);var n=Mn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ku(t,e.type,n):e.hasOwnProperty("defaultValue")&&ku(t,e.type,Mn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Kh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ku(t,e,n){(e!=="number"||Ko(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Vi=Array.isArray;function Qr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Mn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ru(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Qh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(Vi(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mn(n)}}function zm(t,e){var n=Mn(e.value),r=Mn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function qh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function jm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?jm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var po,Wm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(po=po||document.createElement("div"),po.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=po.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ds(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ki={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},F0=["Webkit","ms","Moz","O"];Object.keys(Ki).forEach(function(t){F0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ki[e]=Ki[t]})});function Vm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ki.hasOwnProperty(t)&&Ki[t]?(""+e).trim():e+"px"}function Hm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Vm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var U0=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pu(t,e){if(e){if(U0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function Au(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bu=null;function Xc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ou=null,qr=null,Yr=null;function Yh(t){if(t=Hs(t)){if(typeof Ou!="function")throw Error(S(280));var e=t.stateNode;e&&(e=$l(e),Ou(t.stateNode,t.type,e))}}function $m(t){qr?Yr?Yr.push(t):Yr=[t]:qr=t}function Gm(){if(qr){var t=qr,e=Yr;if(Yr=qr=null,Yh(t),e)for(t=0;t<e.length;t++)Yh(e[t])}}function Km(t,e){return t(e)}function Qm(){}var Oa=!1;function qm(t,e,n){if(Oa)return t(e,n);Oa=!0;try{return Km(t,e,n)}finally{Oa=!1,(qr!==null||Yr!==null)&&(Qm(),Gm())}}function hs(t,e){var n=t.stateNode;if(n===null)return null;var r=$l(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var xu=!1;if(rn)try{var Ai={};Object.defineProperty(Ai,"passive",{get:function(){xu=!0}}),window.addEventListener("test",Ai,Ai),window.removeEventListener("test",Ai,Ai)}catch{xu=!1}function B0(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Qi=!1,Qo=null,qo=!1,Du=null,z0={onError:function(t){Qi=!0,Qo=t}};function j0(t,e,n,r,i,s,o,l,a){Qi=!1,Qo=null,B0.apply(z0,arguments)}function W0(t,e,n,r,i,s,o,l,a){if(j0.apply(this,arguments),Qi){if(Qi){var u=Qo;Qi=!1,Qo=null}else throw Error(S(198));qo||(qo=!0,Du=u)}}function kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ym(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Jh(t){if(kr(t)!==t)throw Error(S(188))}function V0(t){var e=t.alternate;if(!e){if(e=kr(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Jh(i),t;if(s===r)return Jh(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function Jm(t){return t=V0(t),t!==null?Xm(t):null}function Xm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Xm(t);if(e!==null)return e;t=t.sibling}return null}var Zm=it.unstable_scheduleCallback,Xh=it.unstable_cancelCallback,H0=it.unstable_shouldYield,$0=it.unstable_requestPaint,fe=it.unstable_now,G0=it.unstable_getCurrentPriorityLevel,Zc=it.unstable_ImmediatePriority,eg=it.unstable_UserBlockingPriority,Yo=it.unstable_NormalPriority,K0=it.unstable_LowPriority,tg=it.unstable_IdlePriority,jl=null,zt=null;function Q0(t){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(jl,t,void 0,(t.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:J0,q0=Math.log,Y0=Math.LN2;function J0(t){return t>>>=0,t===0?32:31-(q0(t)/Y0|0)|0}var mo=64,go=4194304;function Hi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Hi(l):(s&=o,s!==0&&(r=Hi(s)))}else o=n&~i,o!==0?r=Hi(o):s!==0&&(r=Hi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-At(e),i=1<<n,r|=t[n],e&=~i;return r}function X0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Z0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-At(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=X0(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Lu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ng(){var t=mo;return mo<<=1,!(mo&4194240)&&(mo=64),t}function xa(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ws(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-At(e),t[e]=n}function ew(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-At(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ed(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-At(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var K=0;function rg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ig,td,sg,og,lg,Mu=!1,vo=[],In=null,Tn=null,kn=null,fs=new Map,ps=new Map,vn=[],tw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zh(t,e){switch(t){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":fs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ps.delete(e.pointerId)}}function bi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Hs(e),e!==null&&td(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function nw(t,e,n,r,i){switch(e){case"focusin":return In=bi(In,t,e,n,r,i),!0;case"dragenter":return Tn=bi(Tn,t,e,n,r,i),!0;case"mouseover":return kn=bi(kn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return fs.set(s,bi(fs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ps.set(s,bi(ps.get(s)||null,t,e,n,r,i)),!0}return!1}function ag(t){var e=ir(t.target);if(e!==null){var n=kr(e);if(n!==null){if(e=n.tag,e===13){if(e=Ym(n),e!==null){t.blockedOn=e,lg(t.priority,function(){sg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Lo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);bu=r,n.target.dispatchEvent(r),bu=null}else return e=Hs(n),e!==null&&td(e),t.blockedOn=n,!1;e.shift()}return!0}function ef(t,e,n){Lo(t)&&n.delete(e)}function rw(){Mu=!1,In!==null&&Lo(In)&&(In=null),Tn!==null&&Lo(Tn)&&(Tn=null),kn!==null&&Lo(kn)&&(kn=null),fs.forEach(ef),ps.forEach(ef)}function Oi(t,e){t.blockedOn===e&&(t.blockedOn=null,Mu||(Mu=!0,it.unstable_scheduleCallback(it.unstable_NormalPriority,rw)))}function ms(t){function e(i){return Oi(i,t)}if(0<vo.length){Oi(vo[0],t);for(var n=1;n<vo.length;n++){var r=vo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(In!==null&&Oi(In,t),Tn!==null&&Oi(Tn,t),kn!==null&&Oi(kn,t),fs.forEach(e),ps.forEach(e),n=0;n<vn.length;n++)r=vn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<vn.length&&(n=vn[0],n.blockedOn===null);)ag(n),n.blockedOn===null&&vn.shift()}var Jr=dn.ReactCurrentBatchConfig,Xo=!0;function iw(t,e,n,r){var i=K,s=Jr.transition;Jr.transition=null;try{K=1,nd(t,e,n,r)}finally{K=i,Jr.transition=s}}function sw(t,e,n,r){var i=K,s=Jr.transition;Jr.transition=null;try{K=4,nd(t,e,n,r)}finally{K=i,Jr.transition=s}}function nd(t,e,n,r){if(Xo){var i=Fu(t,e,n,r);if(i===null)Va(t,e,r,Zo,n),Zh(t,r);else if(nw(i,t,e,n,r))r.stopPropagation();else if(Zh(t,r),e&4&&-1<tw.indexOf(t)){for(;i!==null;){var s=Hs(i);if(s!==null&&ig(s),s=Fu(t,e,n,r),s===null&&Va(t,e,r,Zo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Va(t,e,r,null,n)}}var Zo=null;function Fu(t,e,n,r){if(Zo=null,t=Xc(r),t=ir(t),t!==null)if(e=kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ym(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Zo=t,null}function ug(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(G0()){case Zc:return 1;case eg:return 4;case Yo:case K0:return 16;case tg:return 536870912;default:return 16}default:return 16}}var wn=null,rd=null,Mo=null;function cg(){if(Mo)return Mo;var t,e=rd,n=e.length,r,i="value"in wn?wn.value:wn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Mo=i.slice(t,1<r?1-r:void 0)}function Fo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _o(){return!0}function tf(){return!1}function ut(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_o:tf,this.isPropagationStopped=tf,this}return ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),e}var yi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},id=ut(yi),Vs=ae({},yi,{view:0,detail:0}),ow=ut(Vs),Da,La,xi,Wl=ae({},Vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xi&&(xi&&t.type==="mousemove"?(Da=t.screenX-xi.screenX,La=t.screenY-xi.screenY):La=Da=0,xi=t),Da)},movementY:function(t){return"movementY"in t?t.movementY:La}}),nf=ut(Wl),lw=ae({},Wl,{dataTransfer:0}),aw=ut(lw),uw=ae({},Vs,{relatedTarget:0}),Ma=ut(uw),cw=ae({},yi,{animationName:0,elapsedTime:0,pseudoElement:0}),dw=ut(cw),hw=ae({},yi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fw=ut(hw),pw=ae({},yi,{data:0}),rf=ut(pw),mw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _w(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=vw[t])?!!e[t]:!1}function sd(){return _w}var yw=ae({},Vs,{key:function(t){if(t.key){var e=mw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sd,charCode:function(t){return t.type==="keypress"?Fo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ww=ut(yw),Ew=ae({},Wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sf=ut(Ew),Cw=ae({},Vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sd}),Sw=ut(Cw),Iw=ae({},yi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tw=ut(Iw),kw=ae({},Wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Rw=ut(kw),Nw=[9,13,27,32],od=rn&&"CompositionEvent"in window,qi=null;rn&&"documentMode"in document&&(qi=document.documentMode);var Pw=rn&&"TextEvent"in window&&!qi,dg=rn&&(!od||qi&&8<qi&&11>=qi),of=" ",lf=!1;function hg(t,e){switch(t){case"keyup":return Nw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ur=!1;function Aw(t,e){switch(t){case"compositionend":return fg(e);case"keypress":return e.which!==32?null:(lf=!0,of);case"textInput":return t=e.data,t===of&&lf?null:t;default:return null}}function bw(t,e){if(Ur)return t==="compositionend"||!od&&hg(t,e)?(t=cg(),Mo=rd=wn=null,Ur=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return dg&&e.locale!=="ko"?null:e.data;default:return null}}var Ow={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function af(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ow[t.type]:e==="textarea"}function pg(t,e,n,r){$m(r),e=el(e,"onChange"),0<e.length&&(n=new id("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Yi=null,gs=null;function xw(t){Tg(t,0)}function Vl(t){var e=jr(t);if(Um(e))return t}function Dw(t,e){if(t==="change")return e}var mg=!1;if(rn){var Fa;if(rn){var Ua="oninput"in document;if(!Ua){var uf=document.createElement("div");uf.setAttribute("oninput","return;"),Ua=typeof uf.oninput=="function"}Fa=Ua}else Fa=!1;mg=Fa&&(!document.documentMode||9<document.documentMode)}function cf(){Yi&&(Yi.detachEvent("onpropertychange",gg),gs=Yi=null)}function gg(t){if(t.propertyName==="value"&&Vl(gs)){var e=[];pg(e,gs,t,Xc(t)),qm(xw,e)}}function Lw(t,e,n){t==="focusin"?(cf(),Yi=e,gs=n,Yi.attachEvent("onpropertychange",gg)):t==="focusout"&&cf()}function Mw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vl(gs)}function Fw(t,e){if(t==="click")return Vl(e)}function Uw(t,e){if(t==="input"||t==="change")return Vl(e)}function Bw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var xt=typeof Object.is=="function"?Object.is:Bw;function vs(t,e){if(xt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!yu.call(e,i)||!xt(t[i],e[i]))return!1}return!0}function df(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hf(t,e){var n=df(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=df(n)}}function vg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?vg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _g(){for(var t=window,e=Ko();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ko(t.document)}return e}function ld(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function zw(t){var e=_g(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&vg(n.ownerDocument.documentElement,n)){if(r!==null&&ld(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=hf(n,s);var o=hf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jw=rn&&"documentMode"in document&&11>=document.documentMode,Br=null,Uu=null,Ji=null,Bu=!1;function ff(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bu||Br==null||Br!==Ko(r)||(r=Br,"selectionStart"in r&&ld(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ji&&vs(Ji,r)||(Ji=r,r=el(Uu,"onSelect"),0<r.length&&(e=new id("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Br)))}function yo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var zr={animationend:yo("Animation","AnimationEnd"),animationiteration:yo("Animation","AnimationIteration"),animationstart:yo("Animation","AnimationStart"),transitionend:yo("Transition","TransitionEnd")},Ba={},yg={};rn&&(yg=document.createElement("div").style,"AnimationEvent"in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),"TransitionEvent"in window||delete zr.transitionend.transition);function Hl(t){if(Ba[t])return Ba[t];if(!zr[t])return t;var e=zr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in yg)return Ba[t]=e[n];return t}var wg=Hl("animationend"),Eg=Hl("animationiteration"),Cg=Hl("animationstart"),Sg=Hl("transitionend"),Ig=new Map,pf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gn(t,e){Ig.set(t,e),Tr(e,[t])}for(var za=0;za<pf.length;za++){var ja=pf[za],Ww=ja.toLowerCase(),Vw=ja[0].toUpperCase()+ja.slice(1);Gn(Ww,"on"+Vw)}Gn(wg,"onAnimationEnd");Gn(Eg,"onAnimationIteration");Gn(Cg,"onAnimationStart");Gn("dblclick","onDoubleClick");Gn("focusin","onFocus");Gn("focusout","onBlur");Gn(Sg,"onTransitionEnd");ri("onMouseEnter",["mouseout","mouseover"]);ri("onMouseLeave",["mouseout","mouseover"]);ri("onPointerEnter",["pointerout","pointerover"]);ri("onPointerLeave",["pointerout","pointerover"]);Tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $i="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hw=new Set("cancel close invalid load scroll toggle".split(" ").concat($i));function mf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,W0(r,e,void 0,t),t.currentTarget=null}function Tg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;mf(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;mf(i,l,u),s=a}}}if(qo)throw t=Du,qo=!1,Du=null,t}function Z(t,e){var n=e[Hu];n===void 0&&(n=e[Hu]=new Set);var r=t+"__bubble";n.has(r)||(kg(e,t,2,!1),n.add(r))}function Wa(t,e,n){var r=0;e&&(r|=4),kg(n,t,r,e)}var wo="_reactListening"+Math.random().toString(36).slice(2);function _s(t){if(!t[wo]){t[wo]=!0,xm.forEach(function(n){n!=="selectionchange"&&(Hw.has(n)||Wa(n,!1,t),Wa(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wo]||(e[wo]=!0,Wa("selectionchange",!1,e))}}function kg(t,e,n,r){switch(ug(e)){case 1:var i=iw;break;case 4:i=sw;break;default:i=nd}n=i.bind(null,e,n,t),i=void 0,!xu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Va(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ir(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}qm(function(){var u=s,d=Xc(n),c=[];e:{var h=Ig.get(t);if(h!==void 0){var p=id,v=t;switch(t){case"keypress":if(Fo(n)===0)break e;case"keydown":case"keyup":p=ww;break;case"focusin":v="focus",p=Ma;break;case"focusout":v="blur",p=Ma;break;case"beforeblur":case"afterblur":p=Ma;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=nf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=aw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Sw;break;case wg:case Eg:case Cg:p=dw;break;case Sg:p=Tw;break;case"scroll":p=ow;break;case"wheel":p=Rw;break;case"copy":case"cut":case"paste":p=fw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=sf}var _=(e&4)!==0,C=!_&&t==="scroll",m=_?h!==null?h+"Capture":null:h;_=[];for(var f=u,g;f!==null;){g=f;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,m!==null&&(E=hs(f,m),E!=null&&_.push(ys(f,E,g)))),C)break;f=f.return}0<_.length&&(h=new p(h,v,null,n,d),c.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==bu&&(v=n.relatedTarget||n.fromElement)&&(ir(v)||v[sn]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?ir(v):null,v!==null&&(C=kr(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(_=nf,E="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(_=sf,E="onPointerLeave",m="onPointerEnter",f="pointer"),C=p==null?h:jr(p),g=v==null?h:jr(v),h=new _(E,f+"leave",p,n,d),h.target=C,h.relatedTarget=g,E=null,ir(d)===u&&(_=new _(m,f+"enter",v,n,d),_.target=g,_.relatedTarget=C,E=_),C=E,p&&v)t:{for(_=p,m=v,f=0,g=_;g;g=xr(g))f++;for(g=0,E=m;E;E=xr(E))g++;for(;0<f-g;)_=xr(_),f--;for(;0<g-f;)m=xr(m),g--;for(;f--;){if(_===m||m!==null&&_===m.alternate)break t;_=xr(_),m=xr(m)}_=null}else _=null;p!==null&&gf(c,h,p,_,!1),v!==null&&C!==null&&gf(c,C,v,_,!0)}}e:{if(h=u?jr(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var T=Dw;else if(af(h))if(mg)T=Uw;else{T=Mw;var R=Lw}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=Fw);if(T&&(T=T(t,u))){pg(c,T,n,d);break e}R&&R(t,h,u),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&ku(h,"number",h.value)}switch(R=u?jr(u):window,t){case"focusin":(af(R)||R.contentEditable==="true")&&(Br=R,Uu=u,Ji=null);break;case"focusout":Ji=Uu=Br=null;break;case"mousedown":Bu=!0;break;case"contextmenu":case"mouseup":case"dragend":Bu=!1,ff(c,n,d);break;case"selectionchange":if(jw)break;case"keydown":case"keyup":ff(c,n,d)}var P;if(od)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Ur?hg(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(dg&&n.locale!=="ko"&&(Ur||A!=="onCompositionStart"?A==="onCompositionEnd"&&Ur&&(P=cg()):(wn=d,rd="value"in wn?wn.value:wn.textContent,Ur=!0)),R=el(u,A),0<R.length&&(A=new rf(A,t,null,n,d),c.push({event:A,listeners:R}),P?A.data=P:(P=fg(n),P!==null&&(A.data=P)))),(P=Pw?Aw(t,n):bw(t,n))&&(u=el(u,"onBeforeInput"),0<u.length&&(d=new rf("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=P))}Tg(c,e)})}function ys(t,e,n){return{instance:t,listener:e,currentTarget:n}}function el(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=hs(t,n),s!=null&&r.unshift(ys(t,s,i)),s=hs(t,e),s!=null&&r.push(ys(t,s,i))),t=t.return}return r}function xr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function gf(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=hs(n,s),a!=null&&o.unshift(ys(n,a,l))):i||(a=hs(n,s),a!=null&&o.push(ys(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var $w=/\r\n?/g,Gw=/\u0000|\uFFFD/g;function vf(t){return(typeof t=="string"?t:""+t).replace($w,`
`).replace(Gw,"")}function Eo(t,e,n){if(e=vf(e),vf(t)!==e&&n)throw Error(S(425))}function tl(){}var zu=null,ju=null;function Wu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vu=typeof setTimeout=="function"?setTimeout:void 0,Kw=typeof clearTimeout=="function"?clearTimeout:void 0,_f=typeof Promise=="function"?Promise:void 0,Qw=typeof queueMicrotask=="function"?queueMicrotask:typeof _f<"u"?function(t){return _f.resolve(null).then(t).catch(qw)}:Vu;function qw(t){setTimeout(function(){throw t})}function Ha(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ms(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ms(e)}function Rn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var wi=Math.random().toString(36).slice(2),Ft="__reactFiber$"+wi,ws="__reactProps$"+wi,sn="__reactContainer$"+wi,Hu="__reactEvents$"+wi,Yw="__reactListeners$"+wi,Jw="__reactHandles$"+wi;function ir(t){var e=t[Ft];if(e)return e;for(var n=t.parentNode;n;){if(e=n[sn]||n[Ft]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yf(t);t!==null;){if(n=t[Ft])return n;t=yf(t)}return e}t=n,n=t.parentNode}return null}function Hs(t){return t=t[Ft]||t[sn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function jr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function $l(t){return t[ws]||null}var $u=[],Wr=-1;function Kn(t){return{current:t}}function te(t){0>Wr||(t.current=$u[Wr],$u[Wr]=null,Wr--)}function Y(t,e){Wr++,$u[Wr]=t.current,t.current=e}var Fn={},Me=Kn(Fn),Ke=Kn(!1),pr=Fn;function ii(t,e){var n=t.type.contextTypes;if(!n)return Fn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Qe(t){return t=t.childContextTypes,t!=null}function nl(){te(Ke),te(Me)}function wf(t,e,n){if(Me.current!==Fn)throw Error(S(168));Y(Me,e),Y(Ke,n)}function Rg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,L0(t)||"Unknown",i));return ae({},n,r)}function rl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Fn,pr=Me.current,Y(Me,t),Y(Ke,Ke.current),!0}function Ef(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=Rg(t,e,pr),r.__reactInternalMemoizedMergedChildContext=t,te(Ke),te(Me),Y(Me,t)):te(Ke),Y(Ke,n)}var Qt=null,Gl=!1,$a=!1;function Ng(t){Qt===null?Qt=[t]:Qt.push(t)}function Xw(t){Gl=!0,Ng(t)}function Qn(){if(!$a&&Qt!==null){$a=!0;var t=0,e=K;try{var n=Qt;for(K=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Qt=null,Gl=!1}catch(i){throw Qt!==null&&(Qt=Qt.slice(t+1)),Zm(Zc,Qn),i}finally{K=e,$a=!1}}return null}var Vr=[],Hr=0,il=null,sl=0,ct=[],dt=0,mr=null,qt=1,Yt="";function er(t,e){Vr[Hr++]=sl,Vr[Hr++]=il,il=t,sl=e}function Pg(t,e,n){ct[dt++]=qt,ct[dt++]=Yt,ct[dt++]=mr,mr=t;var r=qt;t=Yt;var i=32-At(r)-1;r&=~(1<<i),n+=1;var s=32-At(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,qt=1<<32-At(e)+i|n<<i|r,Yt=s+t}else qt=1<<s|n<<i|r,Yt=t}function ad(t){t.return!==null&&(er(t,1),Pg(t,1,0))}function ud(t){for(;t===il;)il=Vr[--Hr],Vr[Hr]=null,sl=Vr[--Hr],Vr[Hr]=null;for(;t===mr;)mr=ct[--dt],ct[dt]=null,Yt=ct[--dt],ct[dt]=null,qt=ct[--dt],ct[dt]=null}var nt=null,et=null,ne=!1,Nt=null;function Ag(t,e){var n=ft(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Cf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,nt=t,et=Rn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,nt=t,et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=mr!==null?{id:qt,overflow:Yt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ft(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,nt=t,et=null,!0):!1;default:return!1}}function Gu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ku(t){if(ne){var e=et;if(e){var n=e;if(!Cf(t,e)){if(Gu(t))throw Error(S(418));e=Rn(n.nextSibling);var r=nt;e&&Cf(t,e)?Ag(r,n):(t.flags=t.flags&-4097|2,ne=!1,nt=t)}}else{if(Gu(t))throw Error(S(418));t.flags=t.flags&-4097|2,ne=!1,nt=t}}}function Sf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;nt=t}function Co(t){if(t!==nt)return!1;if(!ne)return Sf(t),ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Wu(t.type,t.memoizedProps)),e&&(e=et)){if(Gu(t))throw bg(),Error(S(418));for(;e;)Ag(t,e),e=Rn(e.nextSibling)}if(Sf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){et=Rn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}et=null}}else et=nt?Rn(t.stateNode.nextSibling):null;return!0}function bg(){for(var t=et;t;)t=Rn(t.nextSibling)}function si(){et=nt=null,ne=!1}function cd(t){Nt===null?Nt=[t]:Nt.push(t)}var Zw=dn.ReactCurrentBatchConfig;function Di(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function So(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function If(t){var e=t._init;return e(t._payload)}function Og(t){function e(m,f){if(t){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=bn(m,f),m.index=0,m.sibling=null,m}function s(m,f,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,f,g,E){return f===null||f.tag!==6?(f=Xa(g,m.mode,E),f.return=m,f):(f=i(f,g),f.return=m,f)}function a(m,f,g,E){var T=g.type;return T===Fr?d(m,f,g.props.children,E,g.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===pn&&If(T)===f.type)?(E=i(f,g.props),E.ref=Di(m,f,g),E.return=m,E):(E=Ho(g.type,g.key,g.props,null,m.mode,E),E.ref=Di(m,f,g),E.return=m,E)}function u(m,f,g,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Za(g,m.mode,E),f.return=m,f):(f=i(f,g.children||[]),f.return=m,f)}function d(m,f,g,E,T){return f===null||f.tag!==7?(f=cr(g,m.mode,E,T),f.return=m,f):(f=i(f,g),f.return=m,f)}function c(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Xa(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ho:return g=Ho(f.type,f.key,f.props,null,m.mode,g),g.ref=Di(m,null,f),g.return=m,g;case Mr:return f=Za(f,m.mode,g),f.return=m,f;case pn:var E=f._init;return c(m,E(f._payload),g)}if(Vi(f)||Pi(f))return f=cr(f,m.mode,g,null),f.return=m,f;So(m,f)}return null}function h(m,f,g,E){var T=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return T!==null?null:l(m,f,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ho:return g.key===T?a(m,f,g,E):null;case Mr:return g.key===T?u(m,f,g,E):null;case pn:return T=g._init,h(m,f,T(g._payload),E)}if(Vi(g)||Pi(g))return T!==null?null:d(m,f,g,E,null);So(m,g)}return null}function p(m,f,g,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(g)||null,l(f,m,""+E,T);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ho:return m=m.get(E.key===null?g:E.key)||null,a(f,m,E,T);case Mr:return m=m.get(E.key===null?g:E.key)||null,u(f,m,E,T);case pn:var R=E._init;return p(m,f,g,R(E._payload),T)}if(Vi(E)||Pi(E))return m=m.get(g)||null,d(f,m,E,T,null);So(f,E)}return null}function v(m,f,g,E){for(var T=null,R=null,P=f,A=f=0,X=null;P!==null&&A<g.length;A++){P.index>A?(X=P,P=null):X=P.sibling;var j=h(m,P,g[A],E);if(j===null){P===null&&(P=X);break}t&&P&&j.alternate===null&&e(m,P),f=s(j,f,A),R===null?T=j:R.sibling=j,R=j,P=X}if(A===g.length)return n(m,P),ne&&er(m,A),T;if(P===null){for(;A<g.length;A++)P=c(m,g[A],E),P!==null&&(f=s(P,f,A),R===null?T=P:R.sibling=P,R=P);return ne&&er(m,A),T}for(P=r(m,P);A<g.length;A++)X=p(P,m,A,g[A],E),X!==null&&(t&&X.alternate!==null&&P.delete(X.key===null?A:X.key),f=s(X,f,A),R===null?T=X:R.sibling=X,R=X);return t&&P.forEach(function(St){return e(m,St)}),ne&&er(m,A),T}function _(m,f,g,E){var T=Pi(g);if(typeof T!="function")throw Error(S(150));if(g=T.call(g),g==null)throw Error(S(151));for(var R=T=null,P=f,A=f=0,X=null,j=g.next();P!==null&&!j.done;A++,j=g.next()){P.index>A?(X=P,P=null):X=P.sibling;var St=h(m,P,j.value,E);if(St===null){P===null&&(P=X);break}t&&P&&St.alternate===null&&e(m,P),f=s(St,f,A),R===null?T=St:R.sibling=St,R=St,P=X}if(j.done)return n(m,P),ne&&er(m,A),T;if(P===null){for(;!j.done;A++,j=g.next())j=c(m,j.value,E),j!==null&&(f=s(j,f,A),R===null?T=j:R.sibling=j,R=j);return ne&&er(m,A),T}for(P=r(m,P);!j.done;A++,j=g.next())j=p(P,m,A,j.value,E),j!==null&&(t&&j.alternate!==null&&P.delete(j.key===null?A:j.key),f=s(j,f,A),R===null?T=j:R.sibling=j,R=j);return t&&P.forEach(function(Ri){return e(m,Ri)}),ne&&er(m,A),T}function C(m,f,g,E){if(typeof g=="object"&&g!==null&&g.type===Fr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ho:e:{for(var T=g.key,R=f;R!==null;){if(R.key===T){if(T=g.type,T===Fr){if(R.tag===7){n(m,R.sibling),f=i(R,g.props.children),f.return=m,m=f;break e}}else if(R.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===pn&&If(T)===R.type){n(m,R.sibling),f=i(R,g.props),f.ref=Di(m,R,g),f.return=m,m=f;break e}n(m,R);break}else e(m,R);R=R.sibling}g.type===Fr?(f=cr(g.props.children,m.mode,E,g.key),f.return=m,m=f):(E=Ho(g.type,g.key,g.props,null,m.mode,E),E.ref=Di(m,f,g),E.return=m,m=E)}return o(m);case Mr:e:{for(R=g.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(m,f.sibling),f=i(f,g.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=Za(g,m.mode,E),f.return=m,m=f}return o(m);case pn:return R=g._init,C(m,f,R(g._payload),E)}if(Vi(g))return v(m,f,g,E);if(Pi(g))return _(m,f,g,E);So(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,g),f.return=m,m=f):(n(m,f),f=Xa(g,m.mode,E),f.return=m,m=f),o(m)):n(m,f)}return C}var oi=Og(!0),xg=Og(!1),ol=Kn(null),ll=null,$r=null,dd=null;function hd(){dd=$r=ll=null}function fd(t){var e=ol.current;te(ol),t._currentValue=e}function Qu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Xr(t,e){ll=t,dd=$r=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&($e=!0),t.firstContext=null)}function yt(t){var e=t._currentValue;if(dd!==t)if(t={context:t,memoizedValue:e,next:null},$r===null){if(ll===null)throw Error(S(308));$r=t,ll.dependencies={lanes:0,firstContext:t}}else $r=$r.next=t;return e}var sr=null;function pd(t){sr===null?sr=[t]:sr.push(t)}function Dg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,pd(e)):(n.next=i.next,i.next=n),e.interleaved=n,on(t,r)}function on(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var mn=!1;function md(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function en(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Nn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,on(t,n)}return i=r.interleaved,i===null?(e.next=e,pd(r)):(e.next=i.next,i.next=e),r.interleaved=e,on(t,n)}function Uo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ed(t,n)}}function Tf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function al(t,e,n,r){var i=t.updateQueue;mn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var h=l.lane,p=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,_=l;switch(h=e,p=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){c=v.call(p,c,h);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,h=typeof v=="function"?v.call(p,c,h):v,h==null)break e;c=ae({},c,h);break e;case 2:mn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else p={eventTime:p,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=p,a=c):d=d.next=p,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);vr|=o,t.lanes=o,t.memoizedState=c}}function kf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var $s={},jt=Kn($s),Es=Kn($s),Cs=Kn($s);function or(t){if(t===$s)throw Error(S(174));return t}function gd(t,e){switch(Y(Cs,e),Y(Es,t),Y(jt,$s),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nu(e,t)}te(jt),Y(jt,e)}function li(){te(jt),te(Es),te(Cs)}function Mg(t){or(Cs.current);var e=or(jt.current),n=Nu(e,t.type);e!==n&&(Y(Es,t),Y(jt,n))}function vd(t){Es.current===t&&(te(jt),te(Es))}var se=Kn(0);function ul(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ga=[];function _d(){for(var t=0;t<Ga.length;t++)Ga[t]._workInProgressVersionPrimary=null;Ga.length=0}var Bo=dn.ReactCurrentDispatcher,Ka=dn.ReactCurrentBatchConfig,gr=0,le=null,ge=null,Ee=null,cl=!1,Xi=!1,Ss=0,eE=0;function Oe(){throw Error(S(321))}function yd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!xt(t[n],e[n]))return!1;return!0}function wd(t,e,n,r,i,s){if(gr=s,le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Bo.current=t===null||t.memoizedState===null?iE:sE,t=n(r,i),Xi){s=0;do{if(Xi=!1,Ss=0,25<=s)throw Error(S(301));s+=1,Ee=ge=null,e.updateQueue=null,Bo.current=oE,t=n(r,i)}while(Xi)}if(Bo.current=dl,e=ge!==null&&ge.next!==null,gr=0,Ee=ge=le=null,cl=!1,e)throw Error(S(300));return t}function Ed(){var t=Ss!==0;return Ss=0,t}function Mt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?le.memoizedState=Ee=t:Ee=Ee.next=t,Ee}function wt(){if(ge===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=ge.next;var e=Ee===null?le.memoizedState:Ee.next;if(e!==null)Ee=e,ge=t;else{if(t===null)throw Error(S(310));ge=t,t={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},Ee===null?le.memoizedState=Ee=t:Ee=Ee.next=t}return Ee}function Is(t,e){return typeof e=="function"?e(t):e}function Qa(t){var e=wt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((gr&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,le.lanes|=d,vr|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,xt(r,e.memoizedState)||($e=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,le.lanes|=s,vr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function qa(t){var e=wt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);xt(s,e.memoizedState)||($e=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Fg(){}function Ug(t,e){var n=le,r=wt(),i=e(),s=!xt(r.memoizedState,i);if(s&&(r.memoizedState=i,$e=!0),r=r.queue,Cd(jg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,Ts(9,zg.bind(null,n,r,i,e),void 0,null),Te===null)throw Error(S(349));gr&30||Bg(n,e,i)}return i}function Bg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function zg(t,e,n,r){e.value=n,e.getSnapshot=r,Wg(e)&&Vg(t)}function jg(t,e,n){return n(function(){Wg(e)&&Vg(t)})}function Wg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!xt(t,n)}catch{return!0}}function Vg(t){var e=on(t,1);e!==null&&bt(e,t,1,-1)}function Rf(t){var e=Mt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Is,lastRenderedState:t},e.queue=t,t=t.dispatch=rE.bind(null,le,t),[e.memoizedState,t]}function Ts(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Hg(){return wt().memoizedState}function zo(t,e,n,r){var i=Mt();le.flags|=t,i.memoizedState=Ts(1|e,n,void 0,r===void 0?null:r)}function Kl(t,e,n,r){var i=wt();r=r===void 0?null:r;var s=void 0;if(ge!==null){var o=ge.memoizedState;if(s=o.destroy,r!==null&&yd(r,o.deps)){i.memoizedState=Ts(e,n,s,r);return}}le.flags|=t,i.memoizedState=Ts(1|e,n,s,r)}function Nf(t,e){return zo(8390656,8,t,e)}function Cd(t,e){return Kl(2048,8,t,e)}function $g(t,e){return Kl(4,2,t,e)}function Gg(t,e){return Kl(4,4,t,e)}function Kg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Qg(t,e,n){return n=n!=null?n.concat([t]):null,Kl(4,4,Kg.bind(null,e,t),n)}function Sd(){}function qg(t,e){var n=wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Yg(t,e){var n=wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Jg(t,e,n){return gr&21?(xt(n,e)||(n=ng(),le.lanes|=n,vr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,$e=!0),t.memoizedState=n)}function tE(t,e){var n=K;K=n!==0&&4>n?n:4,t(!0);var r=Ka.transition;Ka.transition={};try{t(!1),e()}finally{K=n,Ka.transition=r}}function Xg(){return wt().memoizedState}function nE(t,e,n){var r=An(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zg(t))ev(e,n);else if(n=Dg(t,e,n,r),n!==null){var i=ze();bt(n,t,r,i),tv(n,e,r)}}function rE(t,e,n){var r=An(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zg(t))ev(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,xt(l,o)){var a=e.interleaved;a===null?(i.next=i,pd(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Dg(t,e,i,r),n!==null&&(i=ze(),bt(n,t,r,i),tv(n,e,r))}}function Zg(t){var e=t.alternate;return t===le||e!==null&&e===le}function ev(t,e){Xi=cl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function tv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ed(t,n)}}var dl={readContext:yt,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},iE={readContext:yt,useCallback:function(t,e){return Mt().memoizedState=[t,e===void 0?null:e],t},useContext:yt,useEffect:Nf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,zo(4194308,4,Kg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return zo(4194308,4,t,e)},useInsertionEffect:function(t,e){return zo(4,2,t,e)},useMemo:function(t,e){var n=Mt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Mt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=nE.bind(null,le,t),[r.memoizedState,t]},useRef:function(t){var e=Mt();return t={current:t},e.memoizedState=t},useState:Rf,useDebugValue:Sd,useDeferredValue:function(t){return Mt().memoizedState=t},useTransition:function(){var t=Rf(!1),e=t[0];return t=tE.bind(null,t[1]),Mt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=le,i=Mt();if(ne){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),Te===null)throw Error(S(349));gr&30||Bg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Nf(jg.bind(null,r,s,t),[t]),r.flags|=2048,Ts(9,zg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Mt(),e=Te.identifierPrefix;if(ne){var n=Yt,r=qt;n=(r&~(1<<32-At(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ss++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=eE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},sE={readContext:yt,useCallback:qg,useContext:yt,useEffect:Cd,useImperativeHandle:Qg,useInsertionEffect:$g,useLayoutEffect:Gg,useMemo:Yg,useReducer:Qa,useRef:Hg,useState:function(){return Qa(Is)},useDebugValue:Sd,useDeferredValue:function(t){var e=wt();return Jg(e,ge.memoizedState,t)},useTransition:function(){var t=Qa(Is)[0],e=wt().memoizedState;return[t,e]},useMutableSource:Fg,useSyncExternalStore:Ug,useId:Xg,unstable_isNewReconciler:!1},oE={readContext:yt,useCallback:qg,useContext:yt,useEffect:Cd,useImperativeHandle:Qg,useInsertionEffect:$g,useLayoutEffect:Gg,useMemo:Yg,useReducer:qa,useRef:Hg,useState:function(){return qa(Is)},useDebugValue:Sd,useDeferredValue:function(t){var e=wt();return ge===null?e.memoizedState=t:Jg(e,ge.memoizedState,t)},useTransition:function(){var t=qa(Is)[0],e=wt().memoizedState;return[t,e]},useMutableSource:Fg,useSyncExternalStore:Ug,useId:Xg,unstable_isNewReconciler:!1};function kt(t,e){if(t&&t.defaultProps){e=ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function qu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ql={isMounted:function(t){return(t=t._reactInternals)?kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ze(),i=An(t),s=en(r,i);s.payload=e,n!=null&&(s.callback=n),e=Nn(t,s,i),e!==null&&(bt(e,t,i,r),Uo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ze(),i=An(t),s=en(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Nn(t,s,i),e!==null&&(bt(e,t,i,r),Uo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ze(),r=An(t),i=en(n,r);i.tag=2,e!=null&&(i.callback=e),e=Nn(t,i,r),e!==null&&(bt(e,t,r,n),Uo(e,t,r))}};function Pf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!vs(n,r)||!vs(i,s):!0}function nv(t,e,n){var r=!1,i=Fn,s=e.contextType;return typeof s=="object"&&s!==null?s=yt(s):(i=Qe(e)?pr:Me.current,r=e.contextTypes,s=(r=r!=null)?ii(t,i):Fn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ql,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Af(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ql.enqueueReplaceState(e,e.state,null)}function Yu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},md(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=yt(s):(s=Qe(e)?pr:Me.current,i.context=ii(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(qu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ql.enqueueReplaceState(i,i.state,null),al(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ai(t,e){try{var n="",r=e;do n+=D0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ya(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ju(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var lE=typeof WeakMap=="function"?WeakMap:Map;function rv(t,e,n){n=en(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){fl||(fl=!0,lc=r),Ju(t,e)},n}function iv(t,e,n){n=en(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ju(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ju(t,e),typeof r!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function bf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new lE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=EE.bind(null,t,e,n),e.then(t,t))}function Of(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xf(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=en(-1,1),e.tag=2,Nn(n,e,1))),n.lanes|=1),t)}var aE=dn.ReactCurrentOwner,$e=!1;function Ue(t,e,n,r){e.child=t===null?xg(e,null,n,r):oi(e,t.child,n,r)}function Df(t,e,n,r,i){n=n.render;var s=e.ref;return Xr(e,i),r=wd(t,e,n,r,s,i),n=Ed(),t!==null&&!$e?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ln(t,e,i)):(ne&&n&&ad(e),e.flags|=1,Ue(t,e,r,i),e.child)}function Lf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!bd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,sv(t,e,s,r,i)):(t=Ho(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:vs,n(o,r)&&t.ref===e.ref)return ln(t,e,i)}return e.flags|=1,t=bn(s,r),t.ref=e.ref,t.return=e,e.child=t}function sv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(vs(s,r)&&t.ref===e.ref)if($e=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&($e=!0);else return e.lanes=t.lanes,ln(t,e,i)}return Xu(t,e,n,r,i)}function ov(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(Kr,Ze),Ze|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Y(Kr,Ze),Ze|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Y(Kr,Ze),Ze|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Y(Kr,Ze),Ze|=r;return Ue(t,e,i,n),e.child}function lv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xu(t,e,n,r,i){var s=Qe(n)?pr:Me.current;return s=ii(e,s),Xr(e,i),n=wd(t,e,n,r,s,i),r=Ed(),t!==null&&!$e?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ln(t,e,i)):(ne&&r&&ad(e),e.flags|=1,Ue(t,e,n,i),e.child)}function Mf(t,e,n,r,i){if(Qe(n)){var s=!0;rl(e)}else s=!1;if(Xr(e,i),e.stateNode===null)jo(t,e),nv(e,n,r),Yu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=yt(u):(u=Qe(n)?pr:Me.current,u=ii(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Af(e,o,r,u),mn=!1;var h=e.memoizedState;o.state=h,al(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Ke.current||mn?(typeof d=="function"&&(qu(e,n,d,r),a=e.memoizedState),(l=mn||Pf(e,n,l,r,h,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Lg(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:kt(e.type,l),o.props=u,c=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=yt(a):(a=Qe(n)?pr:Me.current,a=ii(e,a));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||h!==a)&&Af(e,o,r,a),mn=!1,h=e.memoizedState,o.state=h,al(e,r,o,i);var v=e.memoizedState;l!==c||h!==v||Ke.current||mn?(typeof p=="function"&&(qu(e,n,p,r),v=e.memoizedState),(u=mn||Pf(e,n,u,r,h,v,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Zu(t,e,n,r,s,i)}function Zu(t,e,n,r,i,s){lv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ef(e,n,!1),ln(t,e,s);r=e.stateNode,aE.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=oi(e,t.child,null,s),e.child=oi(e,null,l,s)):Ue(t,e,l,s),e.memoizedState=r.state,i&&Ef(e,n,!0),e.child}function av(t){var e=t.stateNode;e.pendingContext?wf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wf(t,e.context,!1),gd(t,e.containerInfo)}function Ff(t,e,n,r,i){return si(),cd(i),e.flags|=256,Ue(t,e,n,r),e.child}var ec={dehydrated:null,treeContext:null,retryLane:0};function tc(t){return{baseLanes:t,cachePool:null,transitions:null}}function uv(t,e,n){var r=e.pendingProps,i=se.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Y(se,i&1),t===null)return Ku(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Jl(o,r,0,null),t=cr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=tc(n),e.memoizedState=ec,t):Id(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return uE(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=bn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=bn(l,s):(s=cr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?tc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ec,r}return s=t.child,t=s.sibling,r=bn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Id(t,e){return e=Jl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Io(t,e,n,r){return r!==null&&cd(r),oi(e,t.child,null,n),t=Id(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function uE(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ya(Error(S(422))),Io(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Jl({mode:"visible",children:r.children},i,0,null),s=cr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&oi(e,t.child,null,o),e.child.memoizedState=tc(o),e.memoizedState=ec,s);if(!(e.mode&1))return Io(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(S(419)),r=Ya(s,r,void 0),Io(t,e,o,r)}if(l=(o&t.childLanes)!==0,$e||l){if(r=Te,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,on(t,i),bt(r,t,i,-1))}return Ad(),r=Ya(Error(S(421))),Io(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=CE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,et=Rn(i.nextSibling),nt=e,ne=!0,Nt=null,t!==null&&(ct[dt++]=qt,ct[dt++]=Yt,ct[dt++]=mr,qt=t.id,Yt=t.overflow,mr=e),e=Id(e,r.children),e.flags|=4096,e)}function Uf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Qu(t.return,e,n)}function Ja(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function cv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ue(t,e,r.children,n),r=se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Uf(t,n,e);else if(t.tag===19)Uf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Y(se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ul(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ja(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ul(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ja(e,!0,n,null,s);break;case"together":Ja(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function jo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ln(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=bn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=bn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function cE(t,e,n){switch(e.tag){case 3:av(e),si();break;case 5:Mg(e);break;case 1:Qe(e.type)&&rl(e);break;case 4:gd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Y(ol,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Y(se,se.current&1),e.flags|=128,null):n&e.child.childLanes?uv(t,e,n):(Y(se,se.current&1),t=ln(t,e,n),t!==null?t.sibling:null);Y(se,se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return cv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(se,se.current),r)break;return null;case 22:case 23:return e.lanes=0,ov(t,e,n)}return ln(t,e,n)}var dv,nc,hv,fv;dv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nc=function(){};hv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,or(jt.current);var s=null;switch(n){case"input":i=Iu(t,i),r=Iu(t,r),s=[];break;case"select":i=ae({},i,{value:void 0}),r=ae({},r,{value:void 0}),s=[];break;case"textarea":i=Ru(t,i),r=Ru(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=tl)}Pu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(cs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(cs.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Z("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};fv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Li(t,e){if(!ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function dE(t,e,n){var r=e.pendingProps;switch(ud(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(e),null;case 1:return Qe(e.type)&&nl(),xe(e),null;case 3:return r=e.stateNode,li(),te(Ke),te(Me),_d(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Co(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Nt!==null&&(cc(Nt),Nt=null))),nc(t,e),xe(e),null;case 5:vd(e);var i=or(Cs.current);if(n=e.type,t!==null&&e.stateNode!=null)hv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return xe(e),null}if(t=or(jt.current),Co(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ft]=e,r[ws]=s,t=(e.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(i=0;i<$i.length;i++)Z($i[i],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":Gh(r,s),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Z("invalid",r);break;case"textarea":Qh(r,s),Z("invalid",r)}Pu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Eo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Eo(r.textContent,l,t),i=["children",""+l]):cs.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Z("scroll",r)}switch(n){case"input":fo(r),Kh(r,s,!0);break;case"textarea":fo(r),qh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=tl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=jm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ft]=e,t[ws]=r,dv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Au(n,r),n){case"dialog":Z("cancel",t),Z("close",t),i=r;break;case"iframe":case"object":case"embed":Z("load",t),i=r;break;case"video":case"audio":for(i=0;i<$i.length;i++)Z($i[i],t);i=r;break;case"source":Z("error",t),i=r;break;case"img":case"image":case"link":Z("error",t),Z("load",t),i=r;break;case"details":Z("toggle",t),i=r;break;case"input":Gh(t,r),i=Iu(t,r),Z("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ae({},r,{value:void 0}),Z("invalid",t);break;case"textarea":Qh(t,r),i=Ru(t,r),Z("invalid",t);break;default:i=r}Pu(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Hm(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Wm(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&ds(t,a):typeof a=="number"&&ds(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(cs.hasOwnProperty(s)?a!=null&&s==="onScroll"&&Z("scroll",t):a!=null&&Qc(t,s,a,o))}switch(n){case"input":fo(t),Kh(t,r,!1);break;case"textarea":fo(t),qh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Mn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Qr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Qr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=tl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xe(e),null;case 6:if(t&&e.stateNode!=null)fv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=or(Cs.current),or(jt.current),Co(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ft]=e,(s=r.nodeValue!==n)&&(t=nt,t!==null))switch(t.tag){case 3:Eo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Eo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ft]=e,e.stateNode=r}return xe(e),null;case 13:if(te(se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ne&&et!==null&&e.mode&1&&!(e.flags&128))bg(),si(),e.flags|=98560,s=!1;else if(s=Co(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[Ft]=e}else si(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;xe(e),s=!1}else Nt!==null&&(cc(Nt),Nt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||se.current&1?_e===0&&(_e=3):Ad())),e.updateQueue!==null&&(e.flags|=4),xe(e),null);case 4:return li(),nc(t,e),t===null&&_s(e.stateNode.containerInfo),xe(e),null;case 10:return fd(e.type._context),xe(e),null;case 17:return Qe(e.type)&&nl(),xe(e),null;case 19:if(te(se),s=e.memoizedState,s===null)return xe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Li(s,!1);else{if(_e!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ul(t),o!==null){for(e.flags|=128,Li(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Y(se,se.current&1|2),e.child}t=t.sibling}s.tail!==null&&fe()>ui&&(e.flags|=128,r=!0,Li(s,!1),e.lanes=4194304)}else{if(!r)if(t=ul(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Li(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ne)return xe(e),null}else 2*fe()-s.renderingStartTime>ui&&n!==1073741824&&(e.flags|=128,r=!0,Li(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=fe(),e.sibling=null,n=se.current,Y(se,r?n&1|2:n&1),e):(xe(e),null);case 22:case 23:return Pd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ze&1073741824&&(xe(e),e.subtreeFlags&6&&(e.flags|=8192)):xe(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function hE(t,e){switch(ud(e),e.tag){case 1:return Qe(e.type)&&nl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return li(),te(Ke),te(Me),_d(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vd(e),null;case 13:if(te(se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));si()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return te(se),null;case 4:return li(),null;case 10:return fd(e.type._context),null;case 22:case 23:return Pd(),null;case 24:return null;default:return null}}var To=!1,De=!1,fE=typeof WeakSet=="function"?WeakSet:Set,k=null;function Gr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(t,e,r)}else n.current=null}function rc(t,e,n){try{n()}catch(r){ue(t,e,r)}}var Bf=!1;function pE(t,e){if(zu=Xo,t=_g(),ld(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var p;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(p=c.firstChild)!==null;)h=c,c=p;for(;;){if(c===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(a=o),(p=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=p}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ju={focusedElem:t,selectionRange:n},Xo=!1,k=e;k!==null;)if(e=k,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,k=t;else for(;k!==null;){e=k;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,C=v.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?_:kt(e.type,_),C);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(E){ue(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,k=t;break}k=e.return}return v=Bf,Bf=!1,v}function Zi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&rc(e,n,s)}i=i.next}while(i!==r)}}function ql(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ic(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function pv(t){var e=t.alternate;e!==null&&(t.alternate=null,pv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ft],delete e[ws],delete e[Hu],delete e[Yw],delete e[Jw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function mv(t){return t.tag===5||t.tag===3||t.tag===4}function zf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||mv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=tl));else if(r!==4&&(t=t.child,t!==null))for(sc(t,e,n),t=t.sibling;t!==null;)sc(t,e,n),t=t.sibling}function oc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(oc(t,e,n),t=t.sibling;t!==null;)oc(t,e,n),t=t.sibling}var Pe=null,Rt=!1;function hn(t,e,n){for(n=n.child;n!==null;)gv(t,e,n),n=n.sibling}function gv(t,e,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(jl,n)}catch{}switch(n.tag){case 5:De||Gr(n,e);case 6:var r=Pe,i=Rt;Pe=null,hn(t,e,n),Pe=r,Rt=i,Pe!==null&&(Rt?(t=Pe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pe.removeChild(n.stateNode));break;case 18:Pe!==null&&(Rt?(t=Pe,n=n.stateNode,t.nodeType===8?Ha(t.parentNode,n):t.nodeType===1&&Ha(t,n),ms(t)):Ha(Pe,n.stateNode));break;case 4:r=Pe,i=Rt,Pe=n.stateNode.containerInfo,Rt=!0,hn(t,e,n),Pe=r,Rt=i;break;case 0:case 11:case 14:case 15:if(!De&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&rc(n,e,o),i=i.next}while(i!==r)}hn(t,e,n);break;case 1:if(!De&&(Gr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ue(n,e,l)}hn(t,e,n);break;case 21:hn(t,e,n);break;case 22:n.mode&1?(De=(r=De)||n.memoizedState!==null,hn(t,e,n),De=r):hn(t,e,n);break;default:hn(t,e,n)}}function jf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new fE),e.forEach(function(r){var i=SE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function It(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Pe=l.stateNode,Rt=!1;break e;case 3:Pe=l.stateNode.containerInfo,Rt=!0;break e;case 4:Pe=l.stateNode.containerInfo,Rt=!0;break e}l=l.return}if(Pe===null)throw Error(S(160));gv(s,o,i),Pe=null,Rt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ue(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)vv(e,t),e=e.sibling}function vv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(It(e,t),Lt(t),r&4){try{Zi(3,t,t.return),ql(3,t)}catch(_){ue(t,t.return,_)}try{Zi(5,t,t.return)}catch(_){ue(t,t.return,_)}}break;case 1:It(e,t),Lt(t),r&512&&n!==null&&Gr(n,n.return);break;case 5:if(It(e,t),Lt(t),r&512&&n!==null&&Gr(n,n.return),t.flags&32){var i=t.stateNode;try{ds(i,"")}catch(_){ue(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Bm(i,s),Au(l,o);var u=Au(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?Hm(i,c):d==="dangerouslySetInnerHTML"?Wm(i,c):d==="children"?ds(i,c):Qc(i,d,c,u)}switch(l){case"input":Tu(i,s);break;case"textarea":zm(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Qr(i,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Qr(i,!!s.multiple,s.defaultValue,!0):Qr(i,!!s.multiple,s.multiple?[]:"",!1))}i[ws]=s}catch(_){ue(t,t.return,_)}}break;case 6:if(It(e,t),Lt(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){ue(t,t.return,_)}}break;case 3:if(It(e,t),Lt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ms(e.containerInfo)}catch(_){ue(t,t.return,_)}break;case 4:It(e,t),Lt(t);break;case 13:It(e,t),Lt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Rd=fe())),r&4&&jf(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(De=(u=De)||d,It(e,t),De=u):It(e,t),Lt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(k=t,d=t.child;d!==null;){for(c=k=d;k!==null;){switch(h=k,p=h.child,h.tag){case 0:case 11:case 14:case 15:Zi(4,h,h.return);break;case 1:Gr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){ue(r,n,_)}}break;case 5:Gr(h,h.return);break;case 22:if(h.memoizedState!==null){Vf(c);continue}}p!==null?(p.return=h,k=p):Vf(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Vm("display",o))}catch(_){ue(t,t.return,_)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(_){ue(t,t.return,_)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:It(e,t),Lt(t),r&4&&jf(t);break;case 21:break;default:It(e,t),Lt(t)}}function Lt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(mv(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ds(i,""),r.flags&=-33);var s=zf(t);oc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=zf(t);sc(t,l,o);break;default:throw Error(S(161))}}catch(a){ue(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mE(t,e,n){k=t,_v(t)}function _v(t,e,n){for(var r=(t.mode&1)!==0;k!==null;){var i=k,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||To;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||De;l=To;var u=De;if(To=o,(De=a)&&!u)for(k=i;k!==null;)o=k,a=o.child,o.tag===22&&o.memoizedState!==null?Hf(i):a!==null?(a.return=o,k=a):Hf(i);for(;s!==null;)k=s,_v(s),s=s.sibling;k=i,To=l,De=u}Wf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,k=s):Wf(t)}}function Wf(t){for(;k!==null;){var e=k;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:De||ql(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!De)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:kt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&kf(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}kf(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&ms(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}De||e.flags&512&&ic(e)}catch(h){ue(e,e.return,h)}}if(e===t){k=null;break}if(n=e.sibling,n!==null){n.return=e.return,k=n;break}k=e.return}}function Vf(t){for(;k!==null;){var e=k;if(e===t){k=null;break}var n=e.sibling;if(n!==null){n.return=e.return,k=n;break}k=e.return}}function Hf(t){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ql(4,e)}catch(a){ue(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ue(e,i,a)}}var s=e.return;try{ic(e)}catch(a){ue(e,s,a)}break;case 5:var o=e.return;try{ic(e)}catch(a){ue(e,o,a)}}}catch(a){ue(e,e.return,a)}if(e===t){k=null;break}var l=e.sibling;if(l!==null){l.return=e.return,k=l;break}k=e.return}}var gE=Math.ceil,hl=dn.ReactCurrentDispatcher,Td=dn.ReactCurrentOwner,gt=dn.ReactCurrentBatchConfig,V=0,Te=null,me=null,Ae=0,Ze=0,Kr=Kn(0),_e=0,ks=null,vr=0,Yl=0,kd=0,es=null,Ve=null,Rd=0,ui=1/0,Kt=null,fl=!1,lc=null,Pn=null,ko=!1,En=null,pl=0,ts=0,ac=null,Wo=-1,Vo=0;function ze(){return V&6?fe():Wo!==-1?Wo:Wo=fe()}function An(t){return t.mode&1?V&2&&Ae!==0?Ae&-Ae:Zw.transition!==null?(Vo===0&&(Vo=ng()),Vo):(t=K,t!==0||(t=window.event,t=t===void 0?16:ug(t.type)),t):1}function bt(t,e,n,r){if(50<ts)throw ts=0,ac=null,Error(S(185));Ws(t,n,r),(!(V&2)||t!==Te)&&(t===Te&&(!(V&2)&&(Yl|=n),_e===4&&_n(t,Ae)),qe(t,r),n===1&&V===0&&!(e.mode&1)&&(ui=fe()+500,Gl&&Qn()))}function qe(t,e){var n=t.callbackNode;Z0(t,e);var r=Jo(t,t===Te?Ae:0);if(r===0)n!==null&&Xh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Xh(n),e===1)t.tag===0?Xw($f.bind(null,t)):Ng($f.bind(null,t)),Qw(function(){!(V&6)&&Qn()}),n=null;else{switch(rg(r)){case 1:n=Zc;break;case 4:n=eg;break;case 16:n=Yo;break;case 536870912:n=tg;break;default:n=Yo}n=kv(n,yv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function yv(t,e){if(Wo=-1,Vo=0,V&6)throw Error(S(327));var n=t.callbackNode;if(Zr()&&t.callbackNode!==n)return null;var r=Jo(t,t===Te?Ae:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ml(t,r);else{e=r;var i=V;V|=2;var s=Ev();(Te!==t||Ae!==e)&&(Kt=null,ui=fe()+500,ur(t,e));do try{yE();break}catch(l){wv(t,l)}while(!0);hd(),hl.current=s,V=i,me!==null?e=0:(Te=null,Ae=0,e=_e)}if(e!==0){if(e===2&&(i=Lu(t),i!==0&&(r=i,e=uc(t,i))),e===1)throw n=ks,ur(t,0),_n(t,r),qe(t,fe()),n;if(e===6)_n(t,r);else{if(i=t.current.alternate,!(r&30)&&!vE(i)&&(e=ml(t,r),e===2&&(s=Lu(t),s!==0&&(r=s,e=uc(t,s))),e===1))throw n=ks,ur(t,0),_n(t,r),qe(t,fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:tr(t,Ve,Kt);break;case 3:if(_n(t,r),(r&130023424)===r&&(e=Rd+500-fe(),10<e)){if(Jo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ze(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Vu(tr.bind(null,t,Ve,Kt),e);break}tr(t,Ve,Kt);break;case 4:if(_n(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-At(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gE(r/1960))-r,10<r){t.timeoutHandle=Vu(tr.bind(null,t,Ve,Kt),r);break}tr(t,Ve,Kt);break;case 5:tr(t,Ve,Kt);break;default:throw Error(S(329))}}}return qe(t,fe()),t.callbackNode===n?yv.bind(null,t):null}function uc(t,e){var n=es;return t.current.memoizedState.isDehydrated&&(ur(t,e).flags|=256),t=ml(t,e),t!==2&&(e=Ve,Ve=n,e!==null&&cc(e)),t}function cc(t){Ve===null?Ve=t:Ve.push.apply(Ve,t)}function vE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!xt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _n(t,e){for(e&=~kd,e&=~Yl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-At(e),r=1<<n;t[n]=-1,e&=~r}}function $f(t){if(V&6)throw Error(S(327));Zr();var e=Jo(t,0);if(!(e&1))return qe(t,fe()),null;var n=ml(t,e);if(t.tag!==0&&n===2){var r=Lu(t);r!==0&&(e=r,n=uc(t,r))}if(n===1)throw n=ks,ur(t,0),_n(t,e),qe(t,fe()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,tr(t,Ve,Kt),qe(t,fe()),null}function Nd(t,e){var n=V;V|=1;try{return t(e)}finally{V=n,V===0&&(ui=fe()+500,Gl&&Qn())}}function _r(t){En!==null&&En.tag===0&&!(V&6)&&Zr();var e=V;V|=1;var n=gt.transition,r=K;try{if(gt.transition=null,K=1,t)return t()}finally{K=r,gt.transition=n,V=e,!(V&6)&&Qn()}}function Pd(){Ze=Kr.current,te(Kr)}function ur(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Kw(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(ud(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&nl();break;case 3:li(),te(Ke),te(Me),_d();break;case 5:vd(r);break;case 4:li();break;case 13:te(se);break;case 19:te(se);break;case 10:fd(r.type._context);break;case 22:case 23:Pd()}n=n.return}if(Te=t,me=t=bn(t.current,null),Ae=Ze=e,_e=0,ks=null,kd=Yl=vr=0,Ve=es=null,sr!==null){for(e=0;e<sr.length;e++)if(n=sr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}sr=null}return t}function wv(t,e){do{var n=me;try{if(hd(),Bo.current=dl,cl){for(var r=le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}cl=!1}if(gr=0,Ee=ge=le=null,Xi=!1,Ss=0,Td.current=null,n===null||n.return===null){_e=1,ks=e,me=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Ae,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=Of(o);if(p!==null){p.flags&=-257,xf(p,o,l,s,e),p.mode&1&&bf(s,u,e),e=p,a=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(a),e.updateQueue=_}else v.add(a);break e}else{if(!(e&1)){bf(s,u,e),Ad();break e}a=Error(S(426))}}else if(ne&&l.mode&1){var C=Of(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),xf(C,o,l,s,e),cd(ai(a,l));break e}}s=a=ai(a,l),_e!==4&&(_e=2),es===null?es=[s]:es.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=rv(s,a,e);Tf(s,m);break e;case 1:l=a;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Pn===null||!Pn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=iv(s,l,e);Tf(s,E);break e}}s=s.return}while(s!==null)}Sv(n)}catch(T){e=T,me===n&&n!==null&&(me=n=n.return);continue}break}while(!0)}function Ev(){var t=hl.current;return hl.current=dl,t===null?dl:t}function Ad(){(_e===0||_e===3||_e===2)&&(_e=4),Te===null||!(vr&268435455)&&!(Yl&268435455)||_n(Te,Ae)}function ml(t,e){var n=V;V|=2;var r=Ev();(Te!==t||Ae!==e)&&(Kt=null,ur(t,e));do try{_E();break}catch(i){wv(t,i)}while(!0);if(hd(),V=n,hl.current=r,me!==null)throw Error(S(261));return Te=null,Ae=0,_e}function _E(){for(;me!==null;)Cv(me)}function yE(){for(;me!==null&&!H0();)Cv(me)}function Cv(t){var e=Tv(t.alternate,t,Ze);t.memoizedProps=t.pendingProps,e===null?Sv(t):me=e,Td.current=null}function Sv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=hE(n,e),n!==null){n.flags&=32767,me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_e=6,me=null;return}}else if(n=dE(n,e,Ze),n!==null){me=n;return}if(e=e.sibling,e!==null){me=e;return}me=e=t}while(e!==null);_e===0&&(_e=5)}function tr(t,e,n){var r=K,i=gt.transition;try{gt.transition=null,K=1,wE(t,e,n,r)}finally{gt.transition=i,K=r}return null}function wE(t,e,n,r){do Zr();while(En!==null);if(V&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ew(t,s),t===Te&&(me=Te=null,Ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ko||(ko=!0,kv(Yo,function(){return Zr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=gt.transition,gt.transition=null;var o=K;K=1;var l=V;V|=4,Td.current=null,pE(t,n),vv(n,t),zw(ju),Xo=!!zu,ju=zu=null,t.current=n,mE(n),$0(),V=l,K=o,gt.transition=s}else t.current=n;if(ko&&(ko=!1,En=t,pl=i),s=t.pendingLanes,s===0&&(Pn=null),Q0(n.stateNode),qe(t,fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(fl)throw fl=!1,t=lc,lc=null,t;return pl&1&&t.tag!==0&&Zr(),s=t.pendingLanes,s&1?t===ac?ts++:(ts=0,ac=t):ts=0,Qn(),null}function Zr(){if(En!==null){var t=rg(pl),e=gt.transition,n=K;try{if(gt.transition=null,K=16>t?16:t,En===null)var r=!1;else{if(t=En,En=null,pl=0,V&6)throw Error(S(331));var i=V;for(V|=4,k=t.current;k!==null;){var s=k,o=s.child;if(k.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(k=u;k!==null;){var d=k;switch(d.tag){case 0:case 11:case 15:Zi(8,d,s)}var c=d.child;if(c!==null)c.return=d,k=c;else for(;k!==null;){d=k;var h=d.sibling,p=d.return;if(pv(d),d===u){k=null;break}if(h!==null){h.return=p,k=h;break}k=p}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var C=_.sibling;_.sibling=null,_=C}while(_!==null)}}k=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,k=o;else e:for(;k!==null;){if(s=k,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Zi(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,k=m;break e}k=s.return}}var f=t.current;for(k=f;k!==null;){o=k;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,k=g;else e:for(o=f;k!==null;){if(l=k,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ql(9,l)}}catch(T){ue(l,l.return,T)}if(l===o){k=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,k=E;break e}k=l.return}}if(V=i,Qn(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(jl,t)}catch{}r=!0}return r}finally{K=n,gt.transition=e}}return!1}function Gf(t,e,n){e=ai(n,e),e=rv(t,e,1),t=Nn(t,e,1),e=ze(),t!==null&&(Ws(t,1,e),qe(t,e))}function ue(t,e,n){if(t.tag===3)Gf(t,t,n);else for(;e!==null;){if(e.tag===3){Gf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pn===null||!Pn.has(r))){t=ai(n,t),t=iv(e,t,1),e=Nn(e,t,1),t=ze(),e!==null&&(Ws(e,1,t),qe(e,t));break}}e=e.return}}function EE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ze(),t.pingedLanes|=t.suspendedLanes&n,Te===t&&(Ae&n)===n&&(_e===4||_e===3&&(Ae&130023424)===Ae&&500>fe()-Rd?ur(t,0):kd|=n),qe(t,e)}function Iv(t,e){e===0&&(t.mode&1?(e=go,go<<=1,!(go&130023424)&&(go=4194304)):e=1);var n=ze();t=on(t,e),t!==null&&(Ws(t,e,n),qe(t,n))}function CE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Iv(t,n)}function SE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),Iv(t,n)}var Tv;Tv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ke.current)$e=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return $e=!1,cE(t,e,n);$e=!!(t.flags&131072)}else $e=!1,ne&&e.flags&1048576&&Pg(e,sl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;jo(t,e),t=e.pendingProps;var i=ii(e,Me.current);Xr(e,n),i=wd(null,e,r,t,i,n);var s=Ed();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qe(r)?(s=!0,rl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,md(e),i.updater=Ql,e.stateNode=i,i._reactInternals=e,Yu(e,r,t,n),e=Zu(null,e,r,!0,s,n)):(e.tag=0,ne&&s&&ad(e),Ue(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(jo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=TE(r),t=kt(r,t),i){case 0:e=Xu(null,e,r,t,n);break e;case 1:e=Mf(null,e,r,t,n);break e;case 11:e=Df(null,e,r,t,n);break e;case 14:e=Lf(null,e,r,kt(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),Xu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),Mf(t,e,r,i,n);case 3:e:{if(av(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Lg(t,e),al(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ai(Error(S(423)),e),e=Ff(t,e,r,n,i);break e}else if(r!==i){i=ai(Error(S(424)),e),e=Ff(t,e,r,n,i);break e}else for(et=Rn(e.stateNode.containerInfo.firstChild),nt=e,ne=!0,Nt=null,n=xg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(si(),r===i){e=ln(t,e,n);break e}Ue(t,e,r,n)}e=e.child}return e;case 5:return Mg(e),t===null&&Ku(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Wu(r,i)?o=null:s!==null&&Wu(r,s)&&(e.flags|=32),lv(t,e),Ue(t,e,o,n),e.child;case 6:return t===null&&Ku(e),null;case 13:return uv(t,e,n);case 4:return gd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=oi(e,null,r,n):Ue(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),Df(t,e,r,i,n);case 7:return Ue(t,e,e.pendingProps,n),e.child;case 8:return Ue(t,e,e.pendingProps.children,n),e.child;case 12:return Ue(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Y(ol,r._currentValue),r._currentValue=o,s!==null)if(xt(s.value,o)){if(s.children===i.children&&!Ke.current){e=ln(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=en(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Qu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Qu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ue(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Xr(e,n),i=yt(i),r=r(i),e.flags|=1,Ue(t,e,r,n),e.child;case 14:return r=e.type,i=kt(r,e.pendingProps),i=kt(r.type,i),Lf(t,e,r,i,n);case 15:return sv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),jo(t,e),e.tag=1,Qe(r)?(t=!0,rl(e)):t=!1,Xr(e,n),nv(e,r,i),Yu(e,r,i,n),Zu(null,e,r,!0,t,n);case 19:return cv(t,e,n);case 22:return ov(t,e,n)}throw Error(S(156,e.tag))};function kv(t,e){return Zm(t,e)}function IE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(t,e,n,r){return new IE(t,e,n,r)}function bd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function TE(t){if(typeof t=="function")return bd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yc)return 11;if(t===Jc)return 14}return 2}function bn(t,e){var n=t.alternate;return n===null?(n=ft(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ho(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")bd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Fr:return cr(n.children,i,s,e);case qc:o=8,i|=8;break;case wu:return t=ft(12,n,e,i|2),t.elementType=wu,t.lanes=s,t;case Eu:return t=ft(13,n,e,i),t.elementType=Eu,t.lanes=s,t;case Cu:return t=ft(19,n,e,i),t.elementType=Cu,t.lanes=s,t;case Mm:return Jl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Dm:o=10;break e;case Lm:o=9;break e;case Yc:o=11;break e;case Jc:o=14;break e;case pn:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=ft(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function cr(t,e,n,r){return t=ft(7,t,r,e),t.lanes=n,t}function Jl(t,e,n,r){return t=ft(22,t,r,e),t.elementType=Mm,t.lanes=n,t.stateNode={isHidden:!1},t}function Xa(t,e,n){return t=ft(6,t,null,e),t.lanes=n,t}function Za(t,e,n){return e=ft(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function kE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xa(0),this.expirationTimes=xa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Od(t,e,n,r,i,s,o,l,a){return t=new kE(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ft(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},md(s),t}function RE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Rv(t){if(!t)return Fn;t=t._reactInternals;e:{if(kr(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(Qe(n))return Rg(t,n,e)}return e}function Nv(t,e,n,r,i,s,o,l,a){return t=Od(n,r,!0,t,i,s,o,l,a),t.context=Rv(null),n=t.current,r=ze(),i=An(n),s=en(r,i),s.callback=e??null,Nn(n,s,i),t.current.lanes=i,Ws(t,i,r),qe(t,r),t}function Xl(t,e,n,r){var i=e.current,s=ze(),o=An(i);return n=Rv(n),e.context===null?e.context=n:e.pendingContext=n,e=en(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Nn(i,e,o),t!==null&&(bt(t,i,o,s),Uo(t,i,o)),o}function gl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Kf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function xd(t,e){Kf(t,e),(t=t.alternate)&&Kf(t,e)}function NE(){return null}var Pv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Dd(t){this._internalRoot=t}Zl.prototype.render=Dd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));Xl(t,e,null,null)};Zl.prototype.unmount=Dd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_r(function(){Xl(null,t,null,null)}),e[sn]=null}};function Zl(t){this._internalRoot=t}Zl.prototype.unstable_scheduleHydration=function(t){if(t){var e=og();t={blockedOn:null,target:t,priority:e};for(var n=0;n<vn.length&&e!==0&&e<vn[n].priority;n++);vn.splice(n,0,t),n===0&&ag(t)}};function Ld(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ea(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qf(){}function PE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=gl(o);s.call(u)}}var o=Nv(e,r,t,0,null,!1,!1,"",Qf);return t._reactRootContainer=o,t[sn]=o.current,_s(t.nodeType===8?t.parentNode:t),_r(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=gl(a);l.call(u)}}var a=Od(t,0,!1,null,null,!1,!1,"",Qf);return t._reactRootContainer=a,t[sn]=a.current,_s(t.nodeType===8?t.parentNode:t),_r(function(){Xl(e,a,n,r)}),a}function ta(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=gl(o);l.call(a)}}Xl(e,o,t,i)}else o=PE(n,e,t,i,r);return gl(o)}ig=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Hi(e.pendingLanes);n!==0&&(ed(e,n|1),qe(e,fe()),!(V&6)&&(ui=fe()+500,Qn()))}break;case 13:_r(function(){var r=on(t,1);if(r!==null){var i=ze();bt(r,t,1,i)}}),xd(t,1)}};td=function(t){if(t.tag===13){var e=on(t,134217728);if(e!==null){var n=ze();bt(e,t,134217728,n)}xd(t,134217728)}};sg=function(t){if(t.tag===13){var e=An(t),n=on(t,e);if(n!==null){var r=ze();bt(n,t,e,r)}xd(t,e)}};og=function(){return K};lg=function(t,e){var n=K;try{return K=t,e()}finally{K=n}};Ou=function(t,e,n){switch(e){case"input":if(Tu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=$l(r);if(!i)throw Error(S(90));Um(r),Tu(r,i)}}}break;case"textarea":zm(t,n);break;case"select":e=n.value,e!=null&&Qr(t,!!n.multiple,e,!1)}};Km=Nd;Qm=_r;var AE={usingClientEntryPoint:!1,Events:[Hs,jr,$l,$m,Gm,Nd]},Mi={findFiberByHostInstance:ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bE={bundleType:Mi.bundleType,version:Mi.version,rendererPackageName:Mi.rendererPackageName,rendererConfig:Mi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Jm(t),t===null?null:t.stateNode},findFiberByHostInstance:Mi.findFiberByHostInstance||NE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ro.isDisabled&&Ro.supportsFiber)try{jl=Ro.inject(bE),zt=Ro}catch{}}at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AE;at.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ld(e))throw Error(S(200));return RE(t,e,null,n)};at.createRoot=function(t,e){if(!Ld(t))throw Error(S(299));var n=!1,r="",i=Pv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Od(t,1,!1,null,null,n,!1,r,i),t[sn]=e.current,_s(t.nodeType===8?t.parentNode:t),new Dd(e)};at.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=Jm(e),t=t===null?null:t.stateNode,t};at.flushSync=function(t){return _r(t)};at.hydrate=function(t,e,n){if(!ea(e))throw Error(S(200));return ta(null,t,e,!0,n)};at.hydrateRoot=function(t,e,n){if(!Ld(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Pv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Nv(e,null,t,1,n??null,i,!1,s,o),t[sn]=e.current,_s(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Zl(e)};at.render=function(t,e,n){if(!ea(e))throw Error(S(200));return ta(null,t,e,!1,n)};at.unmountComponentAtNode=function(t){if(!ea(t))throw Error(S(40));return t._reactRootContainer?(_r(function(){ta(null,null,t,!1,function(){t._reactRootContainer=null,t[sn]=null})}),!0):!1};at.unstable_batchedUpdates=Nd;at.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ea(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return ta(t,e,n,!1,r)};at.version="18.3.1-next-f1338f8080-20240426";function Av(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Av)}catch(t){console.error(t)}}Av(),Am.exports=at;var OE=Am.exports,bv,qf=OE;bv=qf.createRoot,qf.hydrateRoot;var Yf={};/**
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
 */const Ov={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const I=function(t,e){if(!t)throw Ei(e)},Ei=function(t){return new Error("Firebase Database ("+Ov.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const xv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},xE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Md={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,p=u&63;a||(p=64,o||(h=64)),r.push(n[d],n[c],n[h],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new DE;const h=s<<2|l>>4;if(r.push(h),u!==64){const p=l<<4&240|u>>2;if(r.push(p),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class DE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Dv=function(t){const e=xv(t);return Md.encodeByteArray(e,!0)},vl=function(t){return Dv(t).replace(/\./g,"")},_l=function(t){try{return Md.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function LE(t){return Rs(void 0,t)}function Rs(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ME(n)||(t[n]=Rs(t[n],e[n]));return t}function ME(t){return t!=="__proto__"}/**
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
 */function Lv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const FE=()=>Lv().__FIREBASE_DEFAULTS__,UE=()=>{if(typeof process>"u"||typeof Yf>"u")return;const t=Yf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},BE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_l(t[1]);return e&&JSON.parse(e)},Mv=()=>{try{return FE()||UE()||BE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zE=t=>{var e,n;return(n=(e=Mv())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},jE=t=>{const e=zE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Fv=()=>{var t;return(t=Mv())===null||t===void 0?void 0:t.config};/**
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
 */class He{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Uv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[vl(JSON.stringify(n)),vl(JSON.stringify(o)),""].join(".")}/**
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
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function WE(){return typeof window<"u"||Bv()}function Bv(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function VE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HE(){const t=Je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jv(){return Ov.NODE_ADMIN===!0}function $E(){try{return typeof indexedDB=="object"}catch{return!1}}function GE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const KE="FirebaseError";class $t extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=KE,Object.setPrototypeOf(this,$t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rr.prototype.create)}}class Rr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?QE(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new $t(i,l,r)}}function QE(t,e){return t.replace(qE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const qE=/\{\$([^}]+)}/g;/**
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
 */function Ns(t){return JSON.parse(t)}function ve(t){return JSON.stringify(t)}/**
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
 */const Wv=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ns(_l(s[0])||""),n=Ns(_l(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},YE=function(t){const e=Wv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},JE=function(t){const e=Wv(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function st(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function yr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function yl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function El(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Jf(s)&&Jf(o)){if(!El(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Jf(t){return t!==null&&typeof t=="object"}/**
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
 */function Gs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function XE(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}/**
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
 */class ZE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Vv(t,e){const n=new eC(t,e);return n.subscribe.bind(n)}class eC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=eu),i.error===void 0&&(i.error=eu),i.complete===void 0&&(i.complete=eu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function eu(){}/**
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
 */const D=function(t,e,n,r){let i;if(r<e?i="at least "+e:r>n&&(i=n===0?"none":"no more than "+n),i){const s=t+" failed: Was called with "+r+(r===1?" argument.":" arguments.")+" Expects "+i+".";throw new Error(s)}};function Ye(t,e){return`${t} failed: ${e} argument `}function Ce(t,e,n,r){if(!(r&&!n)&&typeof n!="function")throw new Error(Ye(t,e)+"must be a valid function.")}function Xf(t,e,n,r){if(n&&(typeof n!="object"||n===null))throw new Error(Ye(t,e)+"must be a valid context object.")}/**
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
 */const nC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,I(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},na=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function pe(t){return t&&t._delegate?t._delegate:t}class Et{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const nr="[DEFAULT]";/**
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
 */class dc{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new He;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(iC(e))try{this.getOrInitializeService({instanceIdentifier:nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nr){return this.instances.has(e)}getOptions(e=nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=nr){return this.component?this.component.multipleInstances?e:nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rC(t){return t===nr?void 0:t}function iC(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ud{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dc(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Bd=[];var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const Hv={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},sC=G.INFO,oC={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},lC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=oC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ks{constructor(e){this.name=e,this._logLevel=sC,this._logHandler=lC,this._userLogHandler=null,Bd.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Hv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}function aC(t){Bd.forEach(e=>{e.setLogLevel(t)})}function uC(t,e){for(const n of Bd){let r=null;e&&e.level&&(r=Hv[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const l=o.map(a=>{if(a==null)return null;if(typeof a=="string")return a;if(typeof a=="number"||typeof a=="boolean")return a.toString();if(a instanceof Error)return a.message;try{return JSON.stringify(a)}catch{return null}}).filter(a=>a).join(" ");s>=(r??i.logLevel)&&t({level:G[s].toLowerCase(),message:l,args:o,type:i.name})}}}const cC=(t,e)=>e.some(n=>t instanceof n);let Zf,ep;function dC(){return Zf||(Zf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hC(){return ep||(ep=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $v=new WeakMap,hc=new WeakMap,Gv=new WeakMap,tu=new WeakMap,zd=new WeakMap;function fC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(On(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&$v.set(n,t)}).catch(()=>{}),zd.set(e,t),e}function pC(t){if(hc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});hc.set(t,e)}let fc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Gv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return On(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mC(t){fc=t(fc)}function gC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(nu(this),e,...n);return Gv.set(r,e.sort?e.sort():[e]),On(r)}:hC().includes(t)?function(...e){return t.apply(nu(this),e),On($v.get(this))}:function(...e){return On(t.apply(nu(this),e))}}function vC(t){return typeof t=="function"?gC(t):(t instanceof IDBTransaction&&pC(t),cC(t,dC())?new Proxy(t,fc):t)}function On(t){if(t instanceof IDBRequest)return fC(t);if(tu.has(t))return tu.get(t);const e=vC(t);return e!==t&&(tu.set(t,e),zd.set(e,t)),e}const nu=t=>zd.get(t);function _C(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=On(o);return r&&o.addEventListener("upgradeneeded",a=>{r(On(o.result),a.oldVersion,a.newVersion,On(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const yC=["get","getKey","getAll","getAllKeys","count"],wC=["put","add","delete","clear"],ru=new Map;function tp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ru.get(e))return ru.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=wC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||yC.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return ru.set(e,s),s}mC(t=>({...t,get:(e,n,r)=>tp(e,n)||t.get(e,n,r),has:(e,n)=>!!tp(e,n)||t.has(e,n)}));/**
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
 */class EC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(CC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function CC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cl="@firebase/app",pc="0.10.9";/**
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
 */const an=new Ks("@firebase/app"),SC="@firebase/app-compat",IC="@firebase/analytics-compat",TC="@firebase/analytics",kC="@firebase/app-check-compat",RC="@firebase/app-check",NC="@firebase/auth",PC="@firebase/auth-compat",AC="@firebase/database",bC="@firebase/database-compat",OC="@firebase/functions",xC="@firebase/functions-compat",DC="@firebase/installations",LC="@firebase/installations-compat",MC="@firebase/messaging",FC="@firebase/messaging-compat",UC="@firebase/performance",BC="@firebase/performance-compat",zC="@firebase/remote-config",jC="@firebase/remote-config-compat",WC="@firebase/storage",VC="@firebase/storage-compat",HC="@firebase/firestore",$C="@firebase/vertexai-preview",GC="@firebase/firestore-compat",KC="firebase",QC="10.13.0";/**
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
 */const Un="[DEFAULT]",qC={[Cl]:"fire-core",[SC]:"fire-core-compat",[TC]:"fire-analytics",[IC]:"fire-analytics-compat",[RC]:"fire-app-check",[kC]:"fire-app-check-compat",[NC]:"fire-auth",[PC]:"fire-auth-compat",[AC]:"fire-rtdb",[bC]:"fire-rtdb-compat",[OC]:"fire-fn",[xC]:"fire-fn-compat",[DC]:"fire-iid",[LC]:"fire-iid-compat",[MC]:"fire-fcm",[FC]:"fire-fcm-compat",[UC]:"fire-perf",[BC]:"fire-perf-compat",[zC]:"fire-rc",[jC]:"fire-rc-compat",[WC]:"fire-gcs",[VC]:"fire-gcs-compat",[HC]:"fire-fst",[GC]:"fire-fst-compat",[$C]:"fire-vertex","fire-js":"fire-js",[KC]:"fire-js-all"};/**
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
 */const Bn=new Map,ci=new Map,di=new Map;function Ps(t,e){try{t.container.addComponent(e)}catch(n){an.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kv(t,e){t.container.addOrOverwriteComponent(e)}function un(t){const e=t.name;if(di.has(e))return an.debug(`There were multiple attempts to register component ${e}.`),!1;di.set(e,t);for(const n of Bn.values())Ps(n,t);for(const n of ci.values())Ps(n,t);return!0}function Qs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function YC(t,e,n=Un){Qs(t,e).clearInstance(n)}function Qv(t){return t.options!==void 0}function Jt(t){return t.settings!==void 0}function JC(){di.clear()}/**
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
 */const XC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vt=new Rr("app","Firebase",XC);/**
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
 */let qv=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Et("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vt.create("app-deleted",{appName:this._name})}};/**
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
 */class ZC extends qv{constructor(e,n,r,i){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const l=e;super(l.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,rt(Cl,pc,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Vd(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw vt.create("server-app-deleted")}}/**
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
 */const qn=QC;function jd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Un,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw vt.create("bad-app-name",{appName:String(i)});if(n||(n=Fv()),!n)throw vt.create("no-options");const s=Bn.get(i);if(s){if(El(n,s.options)&&El(r,s.config))return s;throw vt.create("duplicate-app",{appName:i})}const o=new Ud(i);for(const a of di.values())o.addComponent(a);const l=new qv(n,r,o);return Bn.set(i,l),l}function eS(t,e){if(WE()&&!Bv())throw vt.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;Qv(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=u=>[...u].reduce((d,c)=>Math.imul(31,d)+c.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw vt.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=ci.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const l=new Ud(s);for(const u of di.values())l.addComponent(u);const a=new ZC(n,e,s,l);return ci.set(s,a),a}function Wd(t=Un){const e=Bn.get(t);if(!e&&t===Un&&Fv())return jd();if(!e)throw vt.create("no-app",{appName:t});return e}function tS(){return Array.from(Bn.values())}async function Vd(t){let e=!1;const n=t.name;Bn.has(n)?(e=!0,Bn.delete(n)):ci.has(n)&&t.decRefCount()<=0&&(ci.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function rt(t,e,n){var r;let i=(r=qC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),an.warn(l.join(" "));return}un(new Et(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Yv(t,e){if(t!==null&&typeof t!="function")throw vt.create("invalid-log-argument");uC(t,e)}function Jv(t){aC(t)}/**
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
 */const nS="firebase-heartbeat-database",rS=1,As="firebase-heartbeat-store";let iu=null;function Xv(){return iu||(iu=_C(nS,rS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(As)}catch(n){console.warn(n)}}}}).catch(t=>{throw vt.create("idb-open",{originalErrorMessage:t.message})})),iu}async function iS(t){try{const n=(await Xv()).transaction(As),r=await n.objectStore(As).get(Zv(t));return await n.done,r}catch(e){if(e instanceof $t)an.warn(e.message);else{const n=vt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});an.warn(n.message)}}}async function np(t,e){try{const r=(await Xv()).transaction(As,"readwrite");await r.objectStore(As).put(e,Zv(t)),await r.done}catch(n){if(n instanceof $t)an.warn(n.message);else{const r=vt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});an.warn(r.message)}}}function Zv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const sS=1024,oS=30*24*60*60*1e3;class lS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n,r;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=rp();return console.log("heartbeats",(e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats),((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const a=new Date(l.date).valueOf();return Date.now()-a<=oS}),this._storage.overwrite(this._heartbeatsCache))}catch(i){an.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=rp(),{heartbeatsToSend:r,unsentEntries:i}=aS(this._heartbeatsCache.heartbeats),s=vl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return an.warn(n),""}}}function rp(){return new Date().toISOString().substring(0,10)}function aS(t,e=sS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ip(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ip(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class uS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $E()?GE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await iS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return np(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return np(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ip(t){return vl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function cS(t){un(new Et("platform-logger",e=>new EC(e),"PRIVATE")),un(new Et("heartbeat",e=>new lS(e),"PRIVATE")),rt(Cl,pc,t),rt(Cl,pc,"esm2017"),rt("fire-js","")}cS("");const dS=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:$t,SDK_VERSION:qn,_DEFAULT_ENTRY_NAME:Un,_addComponent:Ps,_addOrOverwriteComponent:Kv,_apps:Bn,_clearComponents:JC,_components:di,_getProvider:Qs,_isFirebaseApp:Qv,_isFirebaseServerApp:Jt,_registerComponent:un,_removeServiceInstance:YC,_serverApps:ci,deleteApp:Vd,getApp:Wd,getApps:tS,initializeApp:jd,initializeServerApp:eS,onLog:Yv,registerVersion:rt,setLogLevel:Jv},Symbol.toStringTag,{value:"Module"}));/**
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
 */class hS{constructor(e,n){this._delegate=e,this.firebase=n,Ps(e,new Et("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Vd(this._delegate)))}_getService(e,n=Un){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Un){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Ps(this._delegate,e)}_addOrOverwriteComponent(e){Kv(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const fS={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},sp=new Rr("app-compat","Firebase",fS);/**
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
 */function pS(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:rt,setLogLevel:Jv,onLog:Yv,apps:null,SDK_VERSION:qn,INTERNAL:{registerComponent:l,removeApp:r,useAsService:a,modularAPIs:dS}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Un,!st(e,u))throw sp.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,d={}){const c=jd(u,d);if(st(e,c.name))return e[c.name];const h=new t(c,n);return e[c.name]=h,h}function o(){return Object.keys(e).map(u=>e[u])}function l(u){const d=u.name,c=d.replace("-compat","");if(un(u)&&u.type==="PUBLIC"){const h=(p=i())=>{if(typeof p[c]!="function")throw sp.create("invalid-app-argument",{appName:d});return p[c]()};u.serviceProps!==void 0&&Rs(h,u.serviceProps),n[c]=h,t.prototype[c]=function(...p){return this._getService.bind(this,d).apply(this,u.multipleInstances?p:[])}}return u.type==="PUBLIC"?n[c]:null}function a(u,d){return d==="serverAuth"?null:d}return n}/**
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
 */function e_(){const t=pS(hS);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e_,extendNamespace:e,createSubscribe:Vv,ErrorFactory:Rr,deepExtend:Rs});function e(n){Rs(t,n)}return t}const mS=e_();/**
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
 */const op=new Ks("@firebase/app-compat"),gS="@firebase/app-compat",vS="0.2.39";/**
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
 */function _S(t){rt(gS,vS,t)}/**
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
 */try{const t=Lv();if(t.firebase!==void 0){op.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=t.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&op.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const ra=mS;_S();var yS="firebase",wS="10.13.0";/**
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
 */ra.registerVersion(yS,wS,"app-compat");var lp={};const ap="@firebase/database",up="1.0.7";/**
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
 */let t_="";function n_(t){t_=t}/**
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
 */class ES{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ns(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class CS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return st(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const r_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ES(e)}}catch{}return new CS},lr=r_("localStorage"),mc=r_("sessionStorage");/**
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
 */const ei=new Ks("@firebase/database"),i_=function(){let t=1;return function(){return t++}}(),s_=function(t){const e=nC(t),n=new ZE;n.update(e);const r=n.digest();return Md.encodeByteArray(r)},qs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=qs.apply(null,r):typeof r=="object"?e+=ve(r):e+=r,e+=" "}return e};let dr=null,cp=!0;const o_=function(t,e){I(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ei.logLevel=G.VERBOSE,dr=ei.log.bind(ei),e&&mc.set("logging_enabled",!0)):typeof t=="function"?dr=t:(dr=null,mc.remove("logging_enabled"))},Ie=function(...t){if(cp===!0&&(cp=!1,dr===null&&mc.get("logging_enabled")===!0&&o_(!0)),dr){const e=qs.apply(null,t);dr(e)}},Ys=function(t){return function(...e){Ie(t,...e)}},gc=function(...t){const e="FIREBASE INTERNAL ERROR: "+qs(...t);ei.error(e)},Vt=function(...t){const e=`FIREBASE FATAL ERROR: ${qs(...t)}`;throw ei.error(e),new Error(e)},Le=function(...t){const e="FIREBASE WARNING: "+qs(...t);ei.warn(e)},SS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Le("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ia=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},IS=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},zn="[MIN_NAME]",cn="[MAX_NAME]",Nr=function(t,e){if(t===e)return 0;if(t===zn||e===cn)return-1;if(e===zn||t===cn)return 1;{const n=dp(t),r=dp(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},TS=function(t,e){return t===e?0:t<e?-1:1},Fi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ve(e))},Hd=function(t){if(typeof t!="object"||t===null)return ve(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ve(e[r]),n+=":",n+=Hd(t[e[r]]);return n+="}",n},l_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function ke(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const a_=function(t){I(!ia(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},kS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},RS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function NS(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const PS=new RegExp("^-?(0*)\\d{1,10}$"),AS=-2147483648,bS=2147483647,dp=function(t){if(PS.test(t)){const e=Number(t);if(e>=AS&&e<=bS)return e}return null},Ci=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Le("Exception was thrown by user callback.",n),e},Math.floor(0))}},OS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ns=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class xS{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Le(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class DS{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ie("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Le(e)}}class ti{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ti.OWNER="owner";/**
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
 */const $d="5",u_="v",c_="s",d_="r",h_="f",f_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,p_="ls",m_="p",vc="ac",g_="websocket",v_="long_polling";/**
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
 */class __{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=lr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&lr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function LS(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function y_(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let r;if(e===g_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===v_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);LS(t)&&(n.ns=t.namespace);const i=[];return ke(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class MS{constructor(){this.counters_={}}incrementCounter(e,n=1){st(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return LE(this.counters_)}}/**
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
 */const su={},ou={};function Gd(t){const e=t.toString();return su[e]||(su[e]=new MS),su[e]}function FS(t,e){const n=t.toString();return ou[n]||(ou[n]=e()),ou[n]}/**
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
 */class US{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ci(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const hp="start",BS="close",zS="pLPCommand",jS="pRTLPCB",w_="id",E_="pw",C_="ser",WS="cb",VS="seg",HS="ts",$S="d",GS="dframe",S_=1870,I_=30,KS=S_-I_,QS=25e3,qS=3e4;class Cn{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ys(e),this.stats_=Gd(n),this.urlFn=a=>(this.appCheckToken&&(a[vc]=this.appCheckToken),y_(n,v_,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new US(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(qS)),IS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Kd((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===hp)this.id=l,this.password=a;else if(o===BS)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[hp]="t",r[C_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[WS]=this.scriptTagHolder.uniqueCallbackIdentifier),r[u_]=$d,this.transportSessionId&&(r[c_]=this.transportSessionId),this.lastSessionId&&(r[p_]=this.lastSessionId),this.applicationId&&(r[m_]=this.applicationId),this.appCheckToken&&(r[vc]=this.appCheckToken),typeof location<"u"&&location.hostname&&f_.test(location.hostname)&&(r[d_]=h_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Cn.forceAllow_=!0}static forceDisallow(){Cn.forceDisallow_=!0}static isAvailable(){return Cn.forceAllow_?!0:!Cn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!kS()&&!RS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Dv(n),i=l_(r,KS);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[GS]="t",r[w_]=e,r[E_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Kd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=i_(),window[zS+this.uniqueCallbackIdentifier]=e,window[jS+this.uniqueCallbackIdentifier]=n,this.myIFrame=Kd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ie("frame writing exception"),l.stack&&Ie(l.stack),Ie(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ie("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[w_]=this.myID,e[E_]=this.myPW,e[C_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+I_+r.length<=S_;){const o=this.pendingSegs.shift();r=r+"&"+VS+i+"="+o.seg+"&"+HS+i+"="+o.ts+"&"+$S+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(QS)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ie("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const YS=16384,JS=45e3;let Sl=null;typeof MozWebSocket<"u"?Sl=MozWebSocket:typeof WebSocket<"u"&&(Sl=WebSocket);class ht{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ys(this.connId),this.stats_=Gd(n),this.connURL=ht.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[u_]=$d,typeof location<"u"&&location.hostname&&f_.test(location.hostname)&&(o[d_]=h_),n&&(o[c_]=n),r&&(o[p_]=r),i&&(o[vc]=i),s&&(o[m_]=s),y_(e,g_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,lr.set("previous_websocket_failure",!0);try{let r;jv(),this.mySock=new Sl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ht.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Sl!==null&&!ht.forceDisallow_}static previouslyFailed(){return lr.isInMemoryStorage||lr.get("previous_websocket_failure")===!0}markConnectionHealthy(){lr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ns(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=l_(n,YS);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(JS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ht.responsesRequiredToBeHealthy=2;ht.healthyTimeout=3e4;/**
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
 */class hi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Cn,ht]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ht&&ht.isAvailable();let r=n&&!ht.previouslyFailed();if(e.webSocketOnly&&(n||Le("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ht];else{const i=this.transports_=[];for(const s of hi.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);hi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}hi.globalTransportInitialized_=!1;/**
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
 */const XS=6e4,ZS=5e3,eI=10*1024,tI=100*1024,lu="t",fp="d",nI="s",pp="r",rI="e",mp="o",gp="a",vp="n",_p="p",iI="h";class sI{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ys("c:"+this.id+":"),this.transportManager_=new hi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ns(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>tI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>eI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(lu in e){const n=e[lu];n===gp?this.upgradeIfSecondaryHealthy_():n===pp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===mp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Fi("t",e),r=Fi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:_p,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:gp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:vp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Fi("t",e),r=Fi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Fi(lu,e);if(fp in e){const r=e[fp];if(n===iI){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===vp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===nI?this.onConnectionShutdown_(r):n===pp?this.onReset_(r):n===rI?gc("Server Error: "+r):n===mp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):gc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),$d!==r&&Le("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ns(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(XS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ns(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ZS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:_p,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(lr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class T_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class k_{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Il extends k_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Fd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Il}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const yp=32,wp=768;class ${constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function H(){return new $("")}function F(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function jn(t){return t.pieces_.length-t.pieceNum_}function Q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new $(t.pieces_,e)}function Qd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function oI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function bs(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function R_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new $(e,0)}function re(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof $)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new $(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function Be(t,e){const n=F(t),r=F(e);if(n===null)return e;if(n===r)return Be(Q(t),Q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function lI(t,e){const n=bs(t,0),r=bs(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Nr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function qd(t,e){if(jn(t)!==jn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function pt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(jn(t)>jn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class aI{constructor(e,n){this.errorPrefix_=n,this.parts_=bs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=na(this.parts_[r]);N_(this)}}function uI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=na(e),N_(t)}function cI(t){const e=t.parts_.pop();t.byteLength_-=na(e),t.parts_.length>0&&(t.byteLength_-=1)}function N_(t){if(t.byteLength_>wp)throw new Error(t.errorPrefix_+"has a key path longer than "+wp+" bytes ("+t.byteLength_+").");if(t.parts_.length>yp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+yp+") or object contains a cycle "+rr(t))}function rr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Yd extends k_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Yd}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ui=1e3,dI=60*5*1e3,Ep=30*1e3,hI=1.3,fI=3e4,pI="server_kill",Cp=3;class tn extends T_{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=tn.nextPersistentConnectionId_++,this.log_=Ys("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ui,this.maxReconnectDelay_=dI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!jv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Yd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Il.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ve(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new He,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;tn.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&st(e,"w")){const r=yr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Le(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||JE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ep)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=YE(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ve(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):gc("Unrecognized action received from server: "+ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ui,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ui,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>fI&&(this.reconnectDelay_=Ui),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*hI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+tn.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){I(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ie("getToken() completed but was canceled"):(Ie("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,l=new sI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{Le(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(pI)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Le(c),a())}}}interrupt(e){Ie("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ie("Resuming connection for reason: "+e),delete this.interruptReasons_[e],yl(this.interruptReasons_)&&(this.reconnectDelay_=Ui,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Hd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new $(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ie("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Cp&&(this.reconnectDelay_=Ep,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ie("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Cp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+t_.replace(/\./g,"-")]=1,Fd()?e["framework.cordova"]=1:zv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Il.getInstance().currentlyOnline();return yl(this.interruptReasons_)&&e}}tn.nextPersistentConnectionId_=0;tn.nextConnectionId_=0;/**
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
 */class z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new z(e,n)}}/**
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
 */class sa{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new z(zn,e),i=new z(zn,n);return this.compare(r,i)!==0}minPost(){return z.MIN}}/**
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
 */let No;class P_ extends sa{static get __EMPTY_NODE(){return No}static set __EMPTY_NODE(e){No=e}compare(e,n){return Nr(e.name,n.name)}isDefinedOn(e){throw Ei("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return z.MIN}maxPost(){return new z(cn,No)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,No)}toString(){return".key"}}const Wt=new P_;/**
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
 */class Po{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Se{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Se.RED,this.left=i??Ge.EMPTY_NODE,this.right=s??Ge.EMPTY_NODE}copy(e,n,r,i,s){return new Se(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ge.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ge.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Se.RED=!0;Se.BLACK=!1;class mI{copy(e,n,r,i,s){return this}insert(e,n,r){return new Se(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ge{constructor(e,n=Ge.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ge(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Se.BLACK,null,null))}remove(e){return new Ge(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Se.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Po(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Po(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Po(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Po(this.root_,null,this.comparator_,!0,e)}}Ge.EMPTY_NODE=new mI;/**
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
 */function gI(t,e){return Nr(t.name,e.name)}function Jd(t,e){return Nr(t,e)}/**
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
 */let _c;function vI(t){_c=t}const A_=function(t){return typeof t=="number"?"number:"+a_(t):"string:"+t},b_=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&st(e,".sv"),"Priority must be a string or number.")}else I(t===_c||t.isEmpty(),"priority of unexpected type.");I(t===_c||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Sp;class we{constructor(e,n=we.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),b_(this.priorityNode_)}static set __childrenNodeConstructor(e){Sp=e}static get __childrenNodeConstructor(){return Sp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new we(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:F(e)===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:we.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=F(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(I(r!==".priority"||jn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,we.__childrenNodeConstructor.EMPTY_NODE.updateChild(Q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+A_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=a_(this.value_):e+=this.value_,this.lazyHash_=s_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===we.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof we.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=we.VALUE_TYPE_ORDER.indexOf(n),s=we.VALUE_TYPE_ORDER.indexOf(r);return I(i>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}we.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let O_,x_;function _I(t){O_=t}function yI(t){x_=t}class wI extends sa{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Nr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return z.MIN}maxPost(){return new z(cn,new we("[PRIORITY-POST]",x_))}makePost(e,n){const r=O_(e);return new z(n,new we("[PRIORITY-POST]",r))}toString(){return".priority"}}const J=new wI;/**
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
 */const EI=Math.log(2);class CI{constructor(e){const n=s=>parseInt(Math.log(s)/EI,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Tl=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,h;if(d===0)return null;if(d===1)return c=t[a],h=n?n(c):c,new Se(h,c.node,Se.BLACK,null,null);{const p=parseInt(d/2,10)+a,v=i(a,p),_=i(p+1,u);return c=t[p],h=n?n(c):c,new Se(h,c.node,Se.BLACK,v,_)}},s=function(a){let u=null,d=null,c=t.length;const h=function(v,_){const C=c-v,m=c;c-=v;const f=i(C+1,m),g=t[C],E=n?n(g):g;p(new Se(E,g.node,_,null,f))},p=function(v){u?(u.left=v,u=v):(d=v,u=v)};for(let v=0;v<a.count;++v){const _=a.nextBitIsOne(),C=Math.pow(2,a.count-(v+1));_?h(C,Se.BLACK):(h(C,Se.BLACK),h(C,Se.RED))}return d},o=new CI(t.length),l=s(o);return new Ge(r||e,l)};/**
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
 */let au;const Dr={};class Xt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(Dr&&J,"ChildrenNode.ts has not been loaded"),au=au||new Xt({".priority":Dr},{".priority":J}),au}get(e){const n=yr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ge?n:null}hasIndex(e){return st(this.indexSet_,e.toString())}addIndex(e,n){I(e!==Wt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(z.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Tl(r,e.getCompare()):l=Dr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new Xt(d,u)}addToIndexes(e,n){const r=wl(this.indexes_,(i,s)=>{const o=yr(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),i===Dr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(z.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Tl(l,o.getCompare())}else return Dr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new z(e.name,l))),a.insert(e,e.node)}});return new Xt(r,this.indexSet_)}removeFromIndexes(e,n){const r=wl(this.indexes_,i=>{if(i===Dr)return i;{const s=n.get(e.name);return s?i.remove(new z(e.name,s)):i}});return new Xt(r,this.indexSet_)}}/**
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
 */let Bi;class O{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&b_(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Bi||(Bi=new O(new Ge(Jd),null,Xt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Bi}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Bi:n}}getChild(e){const n=F(e);return n===null?this:this.getImmediateChild(n).getChild(Q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new z(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Bi:this.priorityNode_;return new O(i,o,s)}}updateChild(e,n){const r=F(e);if(r===null)return n;{I(F(e)!==".priority"||jn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Q(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(J,(o,l)=>{n[o]=l.val(e),r++,s&&O.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+A_(this.getPriority().val())+":"),this.forEachChild(J,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":s_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new z(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new z(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Js?-1:0}withIndex(e){if(e===Wt||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Wt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(J),i=n.getIterator(J);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Wt?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class SI extends O{constructor(){super(new Ge(Jd),O.EMPTY_NODE,Xt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const Js=new SI;Object.defineProperties(z,{MIN:{value:new z(zn,O.EMPTY_NODE)},MAX:{value:new z(cn,Js)}});P_.__EMPTY_NODE=O.EMPTY_NODE;we.__childrenNodeConstructor=O;vI(Js);yI(Js);/**
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
 */const II=!0;function oe(t,e=null){if(t===null)return O.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new we(n,oe(e))}if(!(t instanceof Array)&&II){const n=[];let r=!1;if(ke(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=oe(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new z(o,a)))}}),n.length===0)return O.EMPTY_NODE;const s=Tl(n,gI,o=>o.name,Jd);if(r){const o=Tl(n,J.getCompare());return new O(s,oe(e),new Xt({".priority":o},{".priority":J}))}else return new O(s,oe(e),Xt.Default)}else{let n=O.EMPTY_NODE;return ke(t,(r,i)=>{if(st(t,r)&&r.substring(0,1)!=="."){const s=oe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(oe(e))}}_I(oe);/**
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
 */class Xd extends sa{constructor(e){super(),this.indexPath_=e,I(!U(e)&&F(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Nr(e.name,n.name):s}makePost(e,n){const r=oe(e),i=O.EMPTY_NODE.updateChild(this.indexPath_,r);return new z(n,i)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,Js);return new z(cn,e)}toString(){return bs(this.indexPath_,0).join("/")}}/**
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
 */class TI extends sa{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Nr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,n){const r=oe(e);return new z(n,r)}toString(){return".value"}}const Zd=new TI;/**
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
 */function D_(t){return{type:"value",snapshotNode:t}}function fi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Os(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function xs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function kI(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class eh{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Os(n,l)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(fi(n,r)):o.trackChildChange(xs(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(J,(i,s)=>{n.hasChild(i)||r.trackChildChange(Os(i,s))}),n.isLeafNode()||n.forEachChild(J,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(xs(i,s,o))}else r.trackChildChange(fi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?O.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ds{constructor(e){this.indexedFilter_=new eh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ds.getStartPost_(e),this.endPost_=Ds.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new z(n,r))||(r=O.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=O.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(O.EMPTY_NODE);const s=this;return n.forEachChild(J,(o,l)=>{s.matches(new z(o,l))||(i=i.updateImmediateChild(o,O.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class RI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ds(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new z(n,r))||(r=O.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=O.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(O.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,p)=>c(p,h)}else o=this.index_.getCompare();const l=e;I(l.numChildren()===this.limit_,"");const a=new z(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const p=h==null?1:o(h,a);if(d&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(xs(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Os(n,c));const _=l.updateImmediateChild(n,O.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(fi(h.name,h.node)),_.updateImmediateChild(h.name,h.node)):_}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(Os(u.name,u.node)),s.trackChildChange(fi(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,O.EMPTY_NODE)):e}}/**
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
 */class oa{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=J}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:zn}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:cn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===J}copy(){const e=new oa;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function NI(t){return t.loadsAllData()?new eh(t.getIndex()):t.hasLimit()?new RI(t):new Ds(t)}function PI(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function AI(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function yc(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function bI(t,e,n){let r;return t.index_===Wt||n?r=yc(t,e,n):r=yc(t,e,cn),r.startAfterSet_=!0,r}function wc(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function OI(t,e,n){let r;return t.index_===Wt||n?r=wc(t,e,n):r=wc(t,e,zn),r.endBeforeSet_=!0,r}function la(t,e){const n=t.copy();return n.index_=e,n}function Ip(t){const e={};if(t.isDefault())return e;let n;if(t.index_===J?n="$priority":t.index_===Zd?n="$value":t.index_===Wt?n="$key":(I(t.index_ instanceof Xd,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ve(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ve(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ve(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ve(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ve(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Tp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==J&&(e.i=t.index_.toString()),e}/**
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
 */class kl extends T_{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ys("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=kl.getListenId_(e,r),l={};this.listens_[o]=l;const a=Ip(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),yr(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=kl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Ip(e._queryParams),r=e._path.toString(),i=new He;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Gs(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Ns(l.responseText)}catch{Le("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Le("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class xI{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Rl(){return{value:null,children:new Map}}function Si(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=F(e);t.children.has(r)||t.children.set(r,Rl());const i=t.children.get(r);e=Q(e),Si(i,e,n)}}function Ec(t,e){if(U(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(J,(r,i)=>{Si(t,new $(r),i)}),Ec(t,e)}}else if(t.children.size>0){const n=F(e);return e=Q(e),t.children.has(n)&&Ec(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Cc(t,e,n){t.value!==null?n(e,t.value):DI(t,(r,i)=>{const s=new $(e.toString()+"/"+r);Cc(i,s,n)})}function DI(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class LI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ke(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const kp=10*1e3,MI=30*1e3,FI=5*60*1e3;class UI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new LI(e);const r=kp+(MI-kp)*Math.random();ns(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;ke(e,(i,s)=>{s>0&&st(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ns(this.reportStats_.bind(this),Math.floor(Math.random()*2*FI))}}/**
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
 */var Pt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Pt||(Pt={}));function th(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function nh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function rh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Nl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Pt.ACK_USER_WRITE,this.source=th()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new $(e));return new Nl(H(),n,this.revert)}}else return I(F(this.path)===e,"operationForChild called for unrelated child."),new Nl(Q(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ls{constructor(e,n){this.source=e,this.path=n,this.type=Pt.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new Ls(this.source,H()):new Ls(this.source,Q(this.path))}}/**
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
 */class wr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Pt.OVERWRITE}operationForChild(e){return U(this.path)?new wr(this.source,H(),this.snap.getImmediateChild(e)):new wr(this.source,Q(this.path),this.snap)}}/**
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
 */class pi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Pt.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new $(e));return n.isEmpty()?null:n.value?new wr(this.source,H(),n.value):new pi(this.source,H(),n)}else return I(F(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new pi(this.source,Q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Wn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=F(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class BI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function zI(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(kI(o.childName,o.snapshotNode))}),zi(t,i,"child_removed",e,r,n),zi(t,i,"child_added",e,r,n),zi(t,i,"child_moved",s,r,n),zi(t,i,"child_changed",e,r,n),zi(t,i,"value",e,r,n),i}function zi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>WI(t,l,a)),o.forEach(l=>{const a=jI(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function jI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function WI(t,e,n){if(e.childName==null||n.childName==null)throw Ei("Should only compare child_ events.");const r=new z(e.childName,e.snapshotNode),i=new z(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function aa(t,e){return{eventCache:t,serverCache:e}}function rs(t,e,n,r){return aa(new Wn(e,n,r),t.serverCache)}function L_(t,e,n,r){return aa(t.eventCache,new Wn(e,n,r))}function Pl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Er(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let uu;const VI=()=>(uu||(uu=new Ge(TS)),uu);class q{constructor(e,n=VI()){this.value=e,this.children=n}static fromObject(e){let n=new q(null);return ke(e,(r,i)=>{n=n.set(new $(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:H(),value:this.value};if(U(e))return null;{const r=F(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Q(e),n);return s!=null?{path:re(new $(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=F(e),r=this.children.get(n);return r!==null?r.subtree(Q(e)):new q(null)}}set(e,n){if(U(e))return new q(n,this.children);{const r=F(e),s=(this.children.get(r)||new q(null)).set(Q(e),n),o=this.children.insert(r,s);return new q(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new q(null):new q(null,this.children);{const n=F(e),r=this.children.get(n);if(r){const i=r.remove(Q(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new q(null):new q(this.value,s)}else return this}}get(e){if(U(e))return this.value;{const n=F(e),r=this.children.get(n);return r?r.get(Q(e)):null}}setTree(e,n){if(U(e))return n;{const r=F(e),s=(this.children.get(r)||new q(null)).setTree(Q(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new q(this.value,o)}}fold(e){return this.fold_(H(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(re(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,H(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(U(e))return null;{const s=F(e),o=this.children.get(s);return o?o.findOnPath_(Q(e),re(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,H(),n)}foreachOnPath_(e,n,r){if(U(e))return this;{this.value&&r(n,this.value);const i=F(e),s=this.children.get(i);return s?s.foreachOnPath_(Q(e),re(n,i),r):new q(null)}}foreach(e){this.foreach_(H(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(re(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Ot{constructor(e){this.writeTree_=e}static empty(){return new Ot(new q(null))}}function is(t,e,n){if(U(e))return new Ot(new q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Be(i,e);return s=s.updateChild(o,n),new Ot(t.writeTree_.set(i,s))}else{const i=new q(n),s=t.writeTree_.setTree(e,i);return new Ot(s)}}}function Sc(t,e,n){let r=t;return ke(n,(i,s)=>{r=is(r,re(e,i),s)}),r}function Rp(t,e){if(U(e))return Ot.empty();{const n=t.writeTree_.setTree(e,new q(null));return new Ot(n)}}function Ic(t,e){return Pr(t,e)!=null}function Pr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Be(n.path,e)):null}function Np(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(J,(r,i)=>{e.push(new z(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new z(r,i.value))}),e}function xn(t,e){if(U(e))return t;{const n=Pr(t,e);return n!=null?new Ot(new q(n)):new Ot(t.writeTree_.subtree(e))}}function Tc(t){return t.writeTree_.isEmpty()}function mi(t,e){return M_(H(),t.writeTree_,e)}function M_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=M_(re(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(re(t,".priority"),r)),n}}/**
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
 */function ua(t,e){return z_(e,t)}function HI(t,e,n,r,i){I(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=is(t.visibleWrites,e,n)),t.lastWriteId=r}function $I(t,e,n,r){I(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Sc(t.visibleWrites,e,n),t.lastWriteId=r}function GI(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function KI(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&QI(l,r.path)?i=!1:pt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return qI(t),!0;if(r.snap)t.visibleWrites=Rp(t.visibleWrites,r.path);else{const l=r.children;ke(l,a=>{t.visibleWrites=Rp(t.visibleWrites,re(r.path,a))})}return!0}else return!1}function QI(t,e){if(t.snap)return pt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&pt(re(t.path,n),e))return!0;return!1}function qI(t){t.visibleWrites=F_(t.allWrites,YI,H()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function YI(t){return t.visible}function F_(t,e,n){let r=Ot.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)pt(n,o)?(l=Be(n,o),r=is(r,l,s.snap)):pt(o,n)&&(l=Be(o,n),r=is(r,H(),s.snap.getChild(l)));else if(s.children){if(pt(n,o))l=Be(n,o),r=Sc(r,l,s.children);else if(pt(o,n))if(l=Be(o,n),U(l))r=Sc(r,H(),s.children);else{const a=yr(s.children,F(l));if(a){const u=a.getChild(Q(l));r=is(r,H(),u)}}}else throw Ei("WriteRecord should have .snap or .children")}}return r}function U_(t,e,n,r,i){if(!r&&!i){const s=Pr(t.visibleWrites,e);if(s!=null)return s;{const o=xn(t.visibleWrites,e);if(Tc(o))return n;if(n==null&&!Ic(o,H()))return null;{const l=n||O.EMPTY_NODE;return mi(o,l)}}}else{const s=xn(t.visibleWrites,e);if(!i&&Tc(s))return n;if(!i&&n==null&&!Ic(s,H()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(pt(u.path,e)||pt(e,u.path))},l=F_(t.allWrites,o,e),a=n||O.EMPTY_NODE;return mi(l,a)}}}function JI(t,e,n){let r=O.EMPTY_NODE;const i=Pr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(J,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=xn(t.visibleWrites,e);return n.forEachChild(J,(o,l)=>{const a=mi(xn(s,new $(o)),l);r=r.updateImmediateChild(o,a)}),Np(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=xn(t.visibleWrites,e);return Np(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function XI(t,e,n,r,i){I(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=re(e,n);if(Ic(t.visibleWrites,s))return null;{const o=xn(t.visibleWrites,s);return Tc(o)?i.getChild(n):mi(o,i.getChild(n))}}function ZI(t,e,n,r){const i=re(e,n),s=Pr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=xn(t.visibleWrites,i);return mi(o,r.getNode().getImmediateChild(n))}else return null}function eT(t,e){return Pr(t.visibleWrites,e)}function tT(t,e,n,r,i,s,o){let l;const a=xn(t.visibleWrites,e),u=Pr(a,H());if(u!=null)l=u;else if(n!=null)l=mi(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let p=h.getNext();for(;p&&d.length<i;)c(p,r)!==0&&d.push(p),p=h.getNext();return d}else return[]}function nT(){return{visibleWrites:Ot.empty(),allWrites:[],lastWriteId:-1}}function Al(t,e,n,r){return U_(t.writeTree,t.treePath,e,n,r)}function ih(t,e){return JI(t.writeTree,t.treePath,e)}function Pp(t,e,n,r){return XI(t.writeTree,t.treePath,e,n,r)}function bl(t,e){return eT(t.writeTree,re(t.treePath,e))}function rT(t,e,n,r,i,s){return tT(t.writeTree,t.treePath,e,n,r,i,s)}function sh(t,e,n){return ZI(t.writeTree,t.treePath,e,n)}function B_(t,e){return z_(re(t.treePath,e),t.writeTree)}function z_(t,e){return{treePath:t,writeTree:e}}/**
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
 */class iT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,xs(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Os(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,fi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,xs(r,e.snapshotNode,i.oldSnap));else throw Ei("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class sT{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const j_=new sT;class oh{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Wn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return sh(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Er(this.viewCache_),s=rT(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function oT(t){return{filter:t}}function lT(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function aT(t,e,n,r,i){const s=new iT;let o,l;if(n.type===Pt.OVERWRITE){const u=n;u.source.fromUser?o=kc(t,e,u.path,u.snap,r,i,s):(I(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!U(u.path),o=Ol(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===Pt.MERGE){const u=n;u.source.fromUser?o=cT(t,e,u.path,u.children,r,i,s):(I(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Rc(t,e,u.path,u.children,r,i,l,s))}else if(n.type===Pt.ACK_USER_WRITE){const u=n;u.revert?o=fT(t,e,u.path,r,i,s):o=dT(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Pt.LISTEN_COMPLETE)o=hT(t,e,n.path,r,s);else throw Ei("Unknown operation type: "+n.type);const a=s.getChanges();return uT(e,o,a),{viewCache:o,changes:a}}function uT(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Pl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(D_(Pl(e)))}}function W_(t,e,n,r,i,s){const o=e.eventCache;if(bl(r,n)!=null)return e;{let l,a;if(U(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Er(e),d=u instanceof O?u:O.EMPTY_NODE,c=ih(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=Al(r,Er(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=F(n);if(u===".priority"){I(jn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=Pp(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=Q(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=Pp(r,n,o.getNode(),a);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=sh(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return rs(e,l,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function Ol(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(U(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const p=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),p,null)}else{const p=F(n);if(!a.isCompleteForPath(n)&&jn(n)>1)return e;const v=Q(n),C=a.getNode().getImmediateChild(p).updateChild(v,r);p===".priority"?u=d.updatePriority(a.getNode(),C):u=d.updateChild(a.getNode(),p,C,v,j_,null)}const c=L_(e,u,a.isFullyInitialized()||U(n),d.filtersNodes()),h=new oh(i,c,s);return W_(t,c,n,i,h,l)}function kc(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new oh(i,e,s);if(U(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=rs(e,u,!0,t.filter.filtersNodes());else{const c=F(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=rs(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=Q(n),p=l.getNode().getImmediateChild(c);let v;if(U(h))v=r;else{const _=d.getCompleteChild(c);_!=null?Qd(h)===".priority"&&_.getChild(R_(h)).isEmpty()?v=_:v=_.updateChild(h,r):v=O.EMPTY_NODE}if(p.equals(v))a=e;else{const _=t.filter.updateChild(l.getNode(),c,v,h,d,o);a=rs(e,_,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Ap(t,e){return t.eventCache.isCompleteForChild(e)}function cT(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=re(n,a);Ap(e,F(d))&&(l=kc(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=re(n,a);Ap(e,F(d))||(l=kc(t,l,d,u,i,s,o))}),l}function bp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Rc(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;U(n)?u=r:u=new q(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const p=e.serverCache.getNode().getImmediateChild(c),v=bp(t,p,h);a=Ol(t,a,new $(c),v,i,s,o,l)}}),u.children.inorderTraversal((c,h)=>{const p=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!p){const v=e.serverCache.getNode().getImmediateChild(c),_=bp(t,v,h);a=Ol(t,a,new $(c),_,i,s,o,l)}}),a}function dT(t,e,n,r,i,s,o){if(bl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(U(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Ol(t,e,n,a.getNode().getChild(n),i,s,l,o);if(U(n)){let u=new q(null);return a.getNode().forEachChild(Wt,(d,c)=>{u=u.set(new $(d),c)}),Rc(t,e,n,u,i,s,l,o)}else return e}else{let u=new q(null);return r.foreach((d,c)=>{const h=re(n,d);a.isCompleteForPath(h)&&(u=u.set(d,a.getNode().getChild(h)))}),Rc(t,e,n,u,i,s,l,o)}}function hT(t,e,n,r,i){const s=e.serverCache,o=L_(e,s.getNode(),s.isFullyInitialized()||U(n),s.isFiltered());return W_(t,o,n,r,j_,i)}function fT(t,e,n,r,i,s){let o;if(bl(r,n)!=null)return e;{const l=new oh(r,e,i),a=e.eventCache.getNode();let u;if(U(n)||F(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Al(r,Er(e));else{const c=e.serverCache.getNode();I(c instanceof O,"serverChildren would be complete if leaf node"),d=ih(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=F(n);let c=sh(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,Q(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,O.EMPTY_NODE,Q(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Al(r,Er(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||bl(r,H())!=null,rs(e,u,o,t.filter.filtersNodes())}}/**
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
 */class pT{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new eh(r.getIndex()),s=NI(r);this.processor_=oT(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(O.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(O.EMPTY_NODE,l.getNode(),null),d=new Wn(a,o.isFullyInitialized(),i.filtersNodes()),c=new Wn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=aa(c,d),this.eventGenerator_=new BI(this.query_)}get query(){return this.query_}}function mT(t){return t.viewCache_.serverCache.getNode()}function gT(t){return Pl(t.viewCache_)}function vT(t,e){const n=Er(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(F(e)).isEmpty())?n.getChild(e):null}function Op(t){return t.eventRegistrations_.length===0}function _T(t,e){t.eventRegistrations_.push(e)}function xp(t,e,n){const r=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Dp(t,e,n,r){e.type===Pt.MERGE&&e.source.queryId!==null&&(I(Er(t.viewCache_),"We should always have a full cache before handling merges"),I(Pl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=aT(t.processor_,i,e,n,r);return lT(t.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,V_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function yT(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(J,(s,o)=>{r.push(fi(s,o))}),n.isFullyInitialized()&&r.push(D_(n.getNode())),V_(t,r,n.getNode(),e)}function V_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return zI(t.eventGenerator_,e,n,i)}/**
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
 */let xl;class H_{constructor(){this.views=new Map}}function wT(t){I(!xl,"__referenceConstructor has already been defined"),xl=t}function ET(){return I(xl,"Reference.ts has not been loaded"),xl}function CT(t){return t.views.size===0}function lh(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return I(s!=null,"SyncTree gave us an op for an invalid query."),Dp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Dp(o,e,n,r));return s}}function $_(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Al(n,i?r:null),a=!1;l?a=!0:r instanceof O?(l=ih(n,r),a=!1):(l=O.EMPTY_NODE,a=!1);const u=aa(new Wn(l,a,!1),new Wn(r,i,!1));return new pT(e,u)}return o}function ST(t,e,n,r,i,s){const o=$_(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),_T(o,n),yT(o,n)}function IT(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Vn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(xp(u,n,r)),Op(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(xp(a,n,r)),Op(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Vn(t)&&s.push(new(ET())(e._repo,e._path)),{removed:s,events:o}}function G_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Dn(t,e){let n=null;for(const r of t.views.values())n=n||vT(r,e);return n}function K_(t,e){if(e._queryParams.loadsAllData())return ca(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Q_(t,e){return K_(t,e)!=null}function Vn(t){return ca(t)!=null}function ca(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Dl;function TT(t){I(!Dl,"__referenceConstructor has already been defined"),Dl=t}function kT(){return I(Dl,"Reference.ts has not been loaded"),Dl}let RT=1;class Lp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new q(null),this.pendingWriteTree_=nT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ah(t,e,n,r,i){return HI(t.pendingWriteTree_,e,n,r,i),i?Ii(t,new wr(th(),e,n)):[]}function NT(t,e,n,r){$I(t.pendingWriteTree_,e,n,r);const i=q.fromObject(n);return Ii(t,new pi(th(),e,i))}function Sn(t,e,n=!1){const r=GI(t.pendingWriteTree_,e);if(KI(t.pendingWriteTree_,e)){let s=new q(null);return r.snap!=null?s=s.set(H(),!0):ke(r.children,o=>{s=s.set(new $(o),!0)}),Ii(t,new Nl(r.path,s,n))}else return[]}function Xs(t,e,n){return Ii(t,new wr(nh(),e,n))}function PT(t,e,n){const r=q.fromObject(n);return Ii(t,new pi(nh(),e,r))}function AT(t,e){return Ii(t,new Ls(nh(),e))}function bT(t,e,n){const r=uh(t,n);if(r){const i=ch(r),s=i.path,o=i.queryId,l=Be(s,e),a=new Ls(rh(o),l);return dh(t,s,a)}else return[]}function Ll(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Q_(o,e))){const a=IT(o,e,n,r);CT(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,p)=>Vn(p));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const p=DT(h);for(let v=0;v<p.length;++v){const _=p[v],C=_.query,m=X_(t,_);t.listenProvider_.startListening(ss(C),Ms(t,C),m.hashFn,m.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(ss(e),null):u.forEach(h=>{const p=t.queryToTagMap.get(ha(h));t.listenProvider_.stopListening(ss(h),p)}))}LT(t,u)}return l}function q_(t,e,n,r){const i=uh(t,r);if(i!=null){const s=ch(i),o=s.path,l=s.queryId,a=Be(o,e),u=new wr(rh(l),a,n);return dh(t,o,u)}else return[]}function OT(t,e,n,r){const i=uh(t,r);if(i){const s=ch(i),o=s.path,l=s.queryId,a=Be(o,e),u=q.fromObject(n),d=new pi(rh(l),a,u);return dh(t,o,d)}else return[]}function Nc(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,p)=>{const v=Be(h,i);s=s||Dn(p,v),o=o||Vn(p)});let l=t.syncPointTree_.get(i);l?(o=o||Vn(l),s=s||Dn(l,H())):(l=new H_,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=O.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,v)=>{const _=Dn(v,H());_&&(s=s.updateImmediateChild(p,_))}));const u=Q_(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=ha(e);I(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const p=MT();t.queryToTagMap.set(h,p),t.tagToQueryMap.set(p,h)}const d=ua(t.pendingWriteTree_,i);let c=ST(l,e,n,d,s,a);if(!u&&!o&&!r){const h=K_(l,e);c=c.concat(FT(t,e,h))}return c}function da(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Be(o,e),u=Dn(l,a);if(u)return u});return U_(i,e,s,n,!0)}function xT(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=Be(u,n);r=r||Dn(d,c)});let i=t.syncPointTree_.get(n);i?r=r||Dn(i,H()):(i=new H_,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Wn(r,!0,!1):null,l=ua(t.pendingWriteTree_,e._path),a=$_(i,e,l,s?o.getNode():O.EMPTY_NODE,s);return gT(a)}function Ii(t,e){return Y_(e,t.syncPointTree_,null,ua(t.pendingWriteTree_,H()))}function Y_(t,e,n,r){if(U(t.path))return J_(t,e,n,r);{const i=e.get(H());n==null&&i!=null&&(n=Dn(i,H()));let s=[];const o=F(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=B_(r,o);s=s.concat(Y_(l,a,u,d))}return i&&(s=s.concat(lh(i,t,r,n))),s}}function J_(t,e,n,r){const i=e.get(H());n==null&&i!=null&&(n=Dn(i,H()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=B_(r,o),d=t.operationForChild(o);d&&(s=s.concat(J_(d,l,a,u)))}),i&&(s=s.concat(lh(i,t,r,n))),s}function X_(t,e){const n=e.query,r=Ms(t,n);return{hashFn:()=>(mT(e)||O.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?bT(t,n._path,r):AT(t,n._path);{const s=NS(i,n);return Ll(t,n,null,s)}}}}function Ms(t,e){const n=ha(e);return t.queryToTagMap.get(n)}function ha(t){return t._path.toString()+"$"+t._queryIdentifier}function uh(t,e){return t.tagToQueryMap.get(e)}function ch(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new $(t.substr(0,e))}}function dh(t,e,n){const r=t.syncPointTree_.get(e);I(r,"Missing sync point for query tag that we're tracking");const i=ua(t.pendingWriteTree_,e);return lh(r,n,i,null)}function DT(t){return t.fold((e,n,r)=>{if(n&&Vn(n))return[ca(n)];{let i=[];return n&&(i=G_(n)),ke(r,(s,o)=>{i=i.concat(o)}),i}})}function ss(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(kT())(t._repo,t._path):t}function LT(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=ha(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function MT(){return RT++}function FT(t,e,n){const r=e._path,i=Ms(t,e),s=X_(t,n),o=t.listenProvider_.startListening(ss(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)I(!Vn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!U(u)&&d&&Vn(d))return[ca(d).query];{let h=[];return d&&(h=h.concat(G_(d).map(p=>p.query))),ke(c,(p,v)=>{h=h.concat(v)}),h}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(ss(d),Ms(t,d))}}return o}/**
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
 */class hh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new hh(n)}node(){return this.node_}}class fh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=re(this.path_,e);return new fh(this.syncTree_,n)}node(){return da(this.syncTree_,this.path_)}}const UT=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Mp=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return BT(t[".sv"],e,n);if(typeof t[".sv"]=="object")return zT(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},BT=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},zT=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&I(!1,"Unexpected increment value: "+r);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Z_=function(t,e,n,r){return mh(e,new fh(n,t),r)},ph=function(t,e,n){return mh(t,new hh(e),n)};function mh(t,e,n){const r=t.getPriority().val(),i=Mp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Mp(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new we(l,oe(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new we(i))),o.forEachChild(J,(l,a)=>{const u=mh(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class gh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function fa(t,e){let n=e instanceof $?e:new $(e),r=t,i=F(n);for(;i!==null;){const s=yr(r.node.children,i)||{children:{},childCount:0};r=new gh(i,r,s),n=Q(n),i=F(n)}return r}function Ar(t){return t.node.value}function vh(t,e){t.node.value=e,Pc(t)}function ey(t){return t.node.childCount>0}function jT(t){return Ar(t)===void 0&&!ey(t)}function pa(t,e){ke(t.node.children,(n,r)=>{e(new gh(n,t,r))})}function ty(t,e,n,r){n&&!r&&e(t),pa(t,i=>{ty(i,e,!0,r)}),n&&r&&e(t)}function WT(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Zs(t){return new $(t.parent===null?t.name:Zs(t.parent)+"/"+t.name)}function Pc(t){t.parent!==null&&VT(t.parent,t.name,t)}function VT(t,e,n){const r=jT(n),i=st(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Pc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Pc(t))}/**
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
 */const HT=/[\[\].#$\/\u0000-\u001F\u007F]/,$T=/[\[\].#$\u0000-\u001F\u007F]/,cu=10*1024*1024,ma=function(t){return typeof t=="string"&&t.length!==0&&!HT.test(t)},ny=function(t){return typeof t=="string"&&t.length!==0&&!$T.test(t)},GT=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ny(t)},Fs=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!ia(t)||t&&typeof t=="object"&&st(t,".sv")},Ht=function(t,e,n,r){r&&e===void 0||eo(Ye(t,"value"),e,n)},eo=function(t,e,n){const r=n instanceof $?new aI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+rr(r));if(typeof e=="function")throw new Error(t+"contains a function "+rr(r)+" with contents = "+e.toString());if(ia(e))throw new Error(t+"contains "+e.toString()+" "+rr(r));if(typeof e=="string"&&e.length>cu/3&&na(e)>cu)throw new Error(t+"contains a string greater than "+cu+" utf8 bytes "+rr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(ke(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!ma(o)))throw new Error(t+" contains an invalid key ("+o+") "+rr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);uI(r,o),eo(t,l,r),cI(r)}),i&&s)throw new Error(t+' contains ".value" child '+rr(r)+" in addition to actual children.")}},KT=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=bs(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!ma(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(lI);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&pt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},ry=function(t,e,n,r){const i=Ye(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];ke(e,(o,l)=>{const a=new $(o);if(eo(i,l,re(n,a)),Qd(a)===".priority"&&!Fs(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),KT(i,s)},_h=function(t,e,n){if(ia(e))throw new Error(Ye(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Fs(e))throw new Error(Ye(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},to=function(t,e,n,r){if(n!==void 0&&!ma(n))throw new Error(Ye(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},Us=function(t,e,n,r){if(!ny(n))throw new Error(Ye(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},QT=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Us(t,e,n)},mt=function(t,e){if(F(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},iy=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ma(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!GT(n))throw new Error(Ye(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class qT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ga(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!qd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function sy(t,e,n){ga(t,n),oy(t,r=>qd(r,e))}function ot(t,e,n){ga(t,n),oy(t,r=>pt(r,e)||pt(e,r))}function oy(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(YT(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function YT(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();dr&&Ie("event: "+n.toString()),Ci(r)}}}/**
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
 */const ly="repo_interrupt",JT=25;class XT{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new qT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Rl(),this.transactionQueueTree_=new gh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ZT(t,e,n){if(t.stats_=Gd(t.repoInfo_),t.forceRestClient_||OS())t.server_=new kl(t.repoInfo_,(r,i,s,o)=>{Fp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Up(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ve(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new tn(t.repoInfo_,e,(r,i,s,o)=>{Fp(t,r,i,s,o)},r=>{Up(t,r)},r=>{ek(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=FS(t.repoInfo_,()=>new UI(t.stats_,t.server_)),t.infoData_=new xI,t.infoSyncTree_=new Lp({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Xs(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),yh(t,"connected",!1),t.serverSyncTree_=new Lp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);ot(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function ay(t){const n=t.infoData_.getNode(new $(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function no(t){return UT({timestamp:ay(t)})}function Fp(t,e,n,r,i){t.dataUpdateCount++;const s=new $(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=wl(n,u=>oe(u));o=OT(t.serverSyncTree_,s,a,i)}else{const a=oe(n);o=q_(t.serverSyncTree_,s,a,i)}else if(r){const a=wl(n,u=>oe(u));o=PT(t.serverSyncTree_,s,a)}else{const a=oe(n);o=Xs(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=gi(t,s)),ot(t.eventQueue_,l,o)}function Up(t,e){yh(t,"connected",e),e===!1&&rk(t)}function ek(t,e){ke(e,(n,r)=>{yh(t,n,r)})}function yh(t,e,n){const r=new $("/.info/"+e),i=oe(n);t.infoData_.updateSnapshot(r,i);const s=Xs(t.infoSyncTree_,r,i);ot(t.eventQueue_,r,s)}function va(t){return t.nextWriteId_++}function tk(t,e,n){const r=xT(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=oe(i).withIndex(e._queryParams.getIndex());Nc(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Xs(t.serverSyncTree_,e._path,s);else{const l=Ms(t.serverSyncTree_,e);o=q_(t.serverSyncTree_,e._path,s,l)}return ot(t.eventQueue_,e._path,o),Ll(t.serverSyncTree_,e,n,null,!0),s},i=>(Ti(t,"get for query "+ve(e)+" failed: "+i),Promise.reject(new Error(i))))}function wh(t,e,n,r,i){Ti(t,"set",{path:e.toString(),value:n,priority:r});const s=no(t),o=oe(n,r),l=da(t.serverSyncTree_,e),a=ph(o,l,s),u=va(t),d=ah(t.serverSyncTree_,e,a,u,!0);ga(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,p)=>{const v=h==="ok";v||Le("set at "+e+" failed: "+h);const _=Sn(t.serverSyncTree_,u,!v);ot(t.eventQueue_,e,_),Hn(t,i,h,p)});const c=Ch(t,e);gi(t,c),ot(t.eventQueue_,c,[])}function nk(t,e,n,r){Ti(t,"update",{path:e.toString(),value:n});let i=!0;const s=no(t),o={};if(ke(n,(l,a)=>{i=!1,o[l]=Z_(re(e,l),oe(a),t.serverSyncTree_,s)}),i)Ie("update() called with empty data.  Don't do anything."),Hn(t,r,"ok",void 0);else{const l=va(t),a=NT(t.serverSyncTree_,e,o,l);ga(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,d)=>{const c=u==="ok";c||Le("update at "+e+" failed: "+u);const h=Sn(t.serverSyncTree_,l,!c),p=h.length>0?gi(t,e):e;ot(t.eventQueue_,p,h),Hn(t,r,u,d)}),ke(n,u=>{const d=Ch(t,re(e,u));gi(t,d)}),ot(t.eventQueue_,e,[])}}function rk(t){Ti(t,"onDisconnectEvents");const e=no(t),n=Rl();Cc(t.onDisconnect_,H(),(i,s)=>{const o=Z_(i,s,t.serverSyncTree_,e);Si(n,i,o)});let r=[];Cc(n,H(),(i,s)=>{r=r.concat(Xs(t.serverSyncTree_,i,s));const o=Ch(t,i);gi(t,o)}),t.onDisconnect_=Rl(),ot(t.eventQueue_,H(),r)}function ik(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&Ec(t.onDisconnect_,e),Hn(t,n,r,i)})}function Bp(t,e,n,r){const i=oe(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&Si(t.onDisconnect_,e,i),Hn(t,r,s,o)})}function sk(t,e,n,r,i){const s=oe(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,l)=>{o==="ok"&&Si(t.onDisconnect_,e,s),Hn(t,i,o,l)})}function ok(t,e,n,r){if(yl(n)){Ie("onDisconnect().update() called with empty data.  Don't do anything."),Hn(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&ke(n,(o,l)=>{const a=oe(l);Si(t.onDisconnect_,re(e,o),a)}),Hn(t,r,i,s)})}function lk(t,e,n){let r;F(e._path)===".info"?r=Nc(t.infoSyncTree_,e,n):r=Nc(t.serverSyncTree_,e,n),sy(t.eventQueue_,e._path,r)}function Ac(t,e,n){let r;F(e._path)===".info"?r=Ll(t.infoSyncTree_,e,n):r=Ll(t.serverSyncTree_,e,n),sy(t.eventQueue_,e._path,r)}function uy(t){t.persistentConnection_&&t.persistentConnection_.interrupt(ly)}function ak(t){t.persistentConnection_&&t.persistentConnection_.resume(ly)}function Ti(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ie(n,...e)}function Hn(t,e,n,r){e&&Ci(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function uk(t,e,n,r,i,s){Ti(t,"transaction on "+e);const o={path:e,update:n,onComplete:r,status:null,order:i_(),applyLocally:s,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},l=Eh(t,e,void 0);o.currentInputSnapshot=l;const a=o.update(l.val());if(a===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{eo("transaction failed: Data returned ",a,o.path),o.status=0;const u=fa(t.transactionQueueTree_,e),d=Ar(u)||[];d.push(o),vh(u,d);let c;typeof a=="object"&&a!==null&&st(a,".priority")?(c=yr(a,".priority"),I(Fs(c),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):c=(da(t.serverSyncTree_,e)||O.EMPTY_NODE).getPriority().val();const h=no(t),p=oe(a,c),v=ph(p,l,h);o.currentOutputSnapshotRaw=p,o.currentOutputSnapshotResolved=v,o.currentWriteId=va(t);const _=ah(t.serverSyncTree_,e,v,o.currentWriteId,o.applyLocally);ot(t.eventQueue_,e,_),_a(t,t.transactionQueueTree_)}}function Eh(t,e,n){return da(t.serverSyncTree_,e,n)||O.EMPTY_NODE}function _a(t,e=t.transactionQueueTree_){if(e||ya(t,e),Ar(e)){const n=dy(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&ck(t,Zs(e),n)}else ey(e)&&pa(e,n=>{_a(t,n)})}function ck(t,e,n){const r=n.map(u=>u.currentWriteId),i=Eh(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];I(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Be(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Ti(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(Sn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();ya(t,fa(t.transactionQueueTree_,e)),_a(t,t.transactionQueueTree_),ot(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)Ci(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Le("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}gi(t,e)}},o)}function gi(t,e){const n=cy(t,e),r=Zs(n),i=dy(t,n);return dk(t,i,r),r}function dk(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Be(n,a.path);let d=!1,c;if(I(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(Sn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=JT)d=!0,c="maxretry",i=i.concat(Sn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=Eh(t,a.path,o);a.currentInputSnapshot=h;const p=e[l].update(h.val());if(p!==void 0){eo("transaction failed: Data returned ",p,a.path);let v=oe(p);typeof p=="object"&&p!=null&&st(p,".priority")||(v=v.updatePriority(h.getPriority()));const C=a.currentWriteId,m=no(t),f=ph(v,h,m);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=f,a.currentWriteId=va(t),o.splice(o.indexOf(C),1),i=i.concat(ah(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(Sn(t.serverSyncTree_,C,!0))}else d=!0,c="nodata",i=i.concat(Sn(t.serverSyncTree_,a.currentWriteId,!0))}ot(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}ya(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Ci(r[l]);_a(t,t.transactionQueueTree_)}function cy(t,e){let n,r=t.transactionQueueTree_;for(n=F(e);n!==null&&Ar(r)===void 0;)r=fa(r,n),e=Q(e),n=F(e);return r}function dy(t,e){const n=[];return hy(t,e,n),n.sort((r,i)=>r.order-i.order),n}function hy(t,e,n){const r=Ar(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);pa(e,i=>{hy(t,i,n)})}function ya(t,e){const n=Ar(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,vh(e,n.length>0?n:void 0)}pa(e,r=>{ya(t,r)})}function Ch(t,e){const n=Zs(cy(t,e)),r=fa(t.transactionQueueTree_,e);return WT(r,i=>{du(t,i)}),du(t,r),ty(r,i=>{du(t,i)}),n}function du(t,e){const n=Ar(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Sn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?vh(e,void 0):n.length=s+1,ot(t.eventQueue_,Zs(e),i);for(let o=0;o<r.length;o++)Ci(r[o])}}/**
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
 */function hk(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function fk(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Le(`Invalid query segment '${n}' in query '${t}'`)}return e}const bc=function(t,e){const n=pk(t),r=n.namespace;n.domain==="firebase.com"&&Vt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Vt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||SS();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new __(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new $(n.pathString)}},pk=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=hk(t.substring(d,c)));const h=fk(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const p=e.slice(0,u);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */const zp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",mk=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=zp.charAt(n%64),n=Math.floor(n/64);I(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=zp.charAt(e[i]);return I(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class fy{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ve(this.snapshot.exportVal())}}class py{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Sh{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */let gk=class{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new He;return ik(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){mt("OnDisconnect.remove",this._path);const e=new He;return Bp(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){mt("OnDisconnect.set",this._path),Ht("OnDisconnect.set",e,this._path,!1);const n=new He;return Bp(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){mt("OnDisconnect.setWithPriority",this._path),Ht("OnDisconnect.setWithPriority",e,this._path,!1),_h("OnDisconnect.setWithPriority",n);const r=new He;return sk(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){mt("OnDisconnect.update",this._path),ry("OnDisconnect.update",e,this._path);const n=new He;return ok(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}};/**
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
 */class Xe{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return U(this._path)?null:Qd(this._path)}get ref(){return new Ct(this._repo,this._path)}get _queryIdentifier(){const e=Tp(this._queryParams),n=Hd(e);return n==="{}"?"default":n}get _queryObject(){return Tp(this._queryParams)}isEqual(e){if(e=pe(e),!(e instanceof Xe))return!1;const n=this._repo===e._repo,r=qd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+oI(this._path)}}function wa(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Yn(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Wt){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==zn)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==cn)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===J){if(e!=null&&!Fs(e)||n!=null&&!Fs(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(I(t.getIndex()instanceof Xd||t.getIndex()===Zd,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Ea(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Ct extends Xe{constructor(e,n){super(e,n,new oa,!1)}get parent(){const e=R_(this._path);return e===null?null:new Ct(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}let Ca=class Oc{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new $(e),r=Cr(this.ref,e);return new Oc(this._node.getChild(n),r,J)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Oc(i,Cr(this.ref,r),J)))}hasChild(e){const n=new $(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function my(t,e){return t=pe(t),t._checkNotDeleted("ref"),e!==void 0?Cr(t._root,e):t._root}function jp(t,e){t=pe(t),t._checkNotDeleted("refFromURL");const n=bc(e,t._repo.repoInfo_.nodeAdmin);iy("refFromURL",n);const r=n.repoInfo;return!t._repo.repoInfo_.isCustomHost()&&r.host!==t._repo.repoInfo_.host&&Vt("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+t._repo.repoInfo_.host+")"),my(t,n.path.toString())}function Cr(t,e){return t=pe(t),F(t._path)===null?QT("child","path",e):Us("child","path",e),new Ct(t._repo,re(t._path,e))}function vk(t,e){t=pe(t),mt("push",t._path),Ht("push",e,t._path,!0);const n=ay(t._repo),r=mk(n),i=Cr(t,r),s=Cr(t,r);let o;return e!=null?o=Ih(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function _k(t){return mt("remove",t._path),Ih(t,null)}function Ih(t,e){t=pe(t),mt("set",t._path),Ht("set",e,t._path,!1);const n=new He;return wh(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function yk(t,e){t=pe(t),mt("setPriority",t._path),_h("setPriority",e);const n=new He;return wh(t._repo,re(t._path,".priority"),e,null,n.wrapCallback(()=>{})),n.promise}function wk(t,e,n){if(mt("setWithPriority",t._path),Ht("setWithPriority",e,t._path,!1),_h("setWithPriority",n),t.key===".length"||t.key===".keys")throw"setWithPriority failed: "+t.key+" is a read-only object.";const r=new He;return wh(t._repo,t._path,e,n,r.wrapCallback(()=>{})),r.promise}function Ek(t,e){ry("update",e,t._path);const n=new He;return nk(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Ck(t){t=pe(t);const e=new Sh(()=>{}),n=new ro(e);return tk(t._repo,t,n).then(r=>new Ca(r,new Ct(t._repo,t._path),t._queryParams.getIndex()))}class ro{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new fy("value",this,new Ca(e.snapshotNode,new Ct(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new py(this,e,n):null}matches(e){return e instanceof ro?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Sa{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new py(this,e,n):null}createEvent(e,n){I(e.childName!=null,"Child events should have a childName.");const r=Cr(new Ct(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new fy(e.type,this,new Ca(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Sa?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function io(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(d,c)=>{Ac(t._repo,t,l),a(d,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new Sh(n,s||void 0),l=e==="value"?new ro(o):new Sa(e,o);return lk(t._repo,t,l),()=>Ac(t._repo,t,l)}function xc(t,e,n,r){return io(t,"value",e,n,r)}function Wp(t,e,n,r){return io(t,"child_added",e,n,r)}function Vp(t,e,n,r){return io(t,"child_changed",e,n,r)}function Hp(t,e,n,r){return io(t,"child_moved",e,n,r)}function $p(t,e,n,r){return io(t,"child_removed",e,n,r)}function Gp(t,e,n){let r=null;const i=n?new Sh(n):null;e==="value"?r=new ro(i):e&&(r=new Sa(e,i)),Ac(t._repo,t,r)}class Dt{}class gy extends Dt{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){Ht("endAt",this._value,e._path,!0);const n=wc(e._queryParams,this._value,this._key);if(Ea(n),Yn(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Xe(e._repo,e._path,n,e._orderByCalled)}}function Sk(t,e){return to("endAt","key",e),new gy(t,e)}class Ik extends Dt{constructor(e,n){super(),this._value=e,this._key=n,this.type="endBefore"}_apply(e){Ht("endBefore",this._value,e._path,!1);const n=OI(e._queryParams,this._value,this._key);if(Ea(n),Yn(n),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Xe(e._repo,e._path,n,e._orderByCalled)}}function Tk(t,e){return to("endBefore","key",e),new Ik(t,e)}class vy extends Dt{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){Ht("startAt",this._value,e._path,!0);const n=yc(e._queryParams,this._value,this._key);if(Ea(n),Yn(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Xe(e._repo,e._path,n,e._orderByCalled)}}function kk(t=null,e){return to("startAt","key",e),new vy(t,e)}class Rk extends Dt{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAfter"}_apply(e){Ht("startAfter",this._value,e._path,!1);const n=bI(e._queryParams,this._value,this._key);if(Ea(n),Yn(n),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new Xe(e._repo,e._path,n,e._orderByCalled)}}function Nk(t,e){return to("startAfter","key",e),new Rk(t,e)}class Pk extends Dt{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new Xe(e._repo,e._path,PI(e._queryParams,this._limit),e._orderByCalled)}}function Ak(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new Pk(t)}class bk extends Dt{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Xe(e._repo,e._path,AI(e._queryParams,this._limit),e._orderByCalled)}}function Ok(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new bk(t)}class xk extends Dt{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){wa(e,"orderByChild");const n=new $(this._path);if(U(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new Xd(n),i=la(e._queryParams,r);return Yn(i),new Xe(e._repo,e._path,i,!0)}}function Dk(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Us("orderByChild","path",t),new xk(t)}class Lk extends Dt{constructor(){super(...arguments),this.type="orderByKey"}_apply(e){wa(e,"orderByKey");const n=la(e._queryParams,Wt);return Yn(n),new Xe(e._repo,e._path,n,!0)}}function Mk(){return new Lk}class Fk extends Dt{constructor(){super(...arguments),this.type="orderByPriority"}_apply(e){wa(e,"orderByPriority");const n=la(e._queryParams,J);return Yn(n),new Xe(e._repo,e._path,n,!0)}}function Uk(){return new Fk}class Bk extends Dt{constructor(){super(...arguments),this.type="orderByValue"}_apply(e){wa(e,"orderByValue");const n=la(e._queryParams,Zd);return Yn(n),new Xe(e._repo,e._path,n,!0)}}function zk(){return new Bk}class jk extends Dt{constructor(e,n){super(),this._value=e,this._key=n,this.type="equalTo"}_apply(e){if(Ht("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new gy(this._value,this._key)._apply(new vy(this._value,this._key)._apply(e))}}function Wk(t,e){return to("equalTo","key",e),new jk(t,e)}function Tt(t,...e){let n=pe(t);for(const r of e)n=r._apply(n);return n}wT(Ct);TT(Ct);/**
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
 */const Vk="FIREBASE_DATABASE_EMULATOR_HOST",Dc={};let Hk=!1;function $k(t,e,n,r){t.repoInfo_=new __(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function _y(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Vt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ie("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=bc(s,i),l=o.repoInfo,a,u;typeof process<"u"&&lp&&(u=lp[Vk]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=bc(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const d=i&&a?new ti(ti.OWNER):new DS(t.name,t.options,e);iy("Invalid Firebase Database URL",o),U(o.path)||Vt("Database URL must point to the root of a Firebase Database (not including a child path).");const c=Kk(l,t,d,new xS(t.name,n));return new Qk(c,t)}function Gk(t,e){const n=Dc[e];(!n||n[t.key]!==t)&&Vt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),uy(t),delete n[t.key]}function Kk(t,e,n,r){let i=Dc[e.name];i||(i={},Dc[e.name]=i);let s=i[t.toURLString()];return s&&Vt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new XT(t,Hk,n,r),i[t.toURLString()]=s,s}let Qk=class{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ZT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ct(this._repo,H())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Gk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Vt("Cannot call "+e+" on a deleted database.")}};function yy(){hi.IS_TRANSPORT_INITIALIZED&&Le("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function qk(){yy(),Cn.forceDisallow()}function Yk(){yy(),ht.forceDisallow(),Cn.forceAllow()}function Jk(t,e,n,r={}){t=pe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Vt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Vt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ti(ti.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Uv(r.mockUserToken,t.app.options.projectId);s=new ti(o)}$k(i,e,n,s)}function Xk(t){t=pe(t),t._checkNotDeleted("goOffline"),uy(t._repo)}function Zk(t){t=pe(t),t._checkNotDeleted("goOnline"),ak(t._repo)}function e1(t,e){o_(t,e)}/**
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
 */function t1(t){n_(qn),un(new Et("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return _y(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),rt(ap,up,t),rt(ap,up,"esm2017")}/**
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
 */const n1={".sv":"timestamp"};function r1(){return n1}function i1(t){return{".sv":{increment:t}}}/**
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
 */let s1=class{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}};function o1(t,e,n){var r;if(t=pe(t),mt("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const i=(r=n==null?void 0:n.applyLocally)!==null&&r!==void 0?r:!0,s=new He,o=(a,u,d)=>{let c=null;a?s.reject(a):(c=new Ca(d,new Ct(t._repo,t._path),J),s.resolve(new s1(u,c)))},l=xc(t,()=>{});return uk(t._repo,t._path,e,o,l,i),s.promise}tn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};tn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};t1();const l1="@firebase/database-compat",a1="1.0.7";/**
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
 */const u1=new Ks("@firebase/database-compat"),wy=function(t){const e="FIREBASE WARNING: "+t;u1.warn(e)};/**
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
 */const c1=function(t,e,n,r){if(n!==void 0&&typeof n!="boolean")throw new Error(Ye(t,e)+"must be a boolean.")},d1=function(t,e,n){if(e!==void 0)switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(Ye(t,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
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
 */class h1{constructor(e){this._delegate=e}cancel(e){D("OnDisconnect.cancel",0,1,arguments.length),Ce("OnDisconnect.cancel","onComplete",e,!0);const n=this._delegate.cancel();return e&&n.then(()=>e(null),r=>e(r)),n}remove(e){D("OnDisconnect.remove",0,1,arguments.length),Ce("OnDisconnect.remove","onComplete",e,!0);const n=this._delegate.remove();return e&&n.then(()=>e(null),r=>e(r)),n}set(e,n){D("OnDisconnect.set",1,2,arguments.length),Ce("OnDisconnect.set","onComplete",n,!0);const r=this._delegate.set(e);return n&&r.then(()=>n(null),i=>n(i)),r}setWithPriority(e,n,r){D("OnDisconnect.setWithPriority",2,3,arguments.length),Ce("OnDisconnect.setWithPriority","onComplete",r,!0);const i=this._delegate.setWithPriority(e,n);return r&&i.then(()=>r(null),s=>r(s)),i}update(e,n){if(D("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let s=0;s<e.length;++s)i[""+s]=e[s];e=i,wy("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Ce("OnDisconnect.update","onComplete",n,!0);const r=this._delegate.update(e);return n&&r.then(()=>n(null),i=>n(i)),r}}/**
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
 */class f1{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return D("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
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
 */class Ln{constructor(e,n){this._database=e,this._delegate=n}val(){return D("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return D("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return D("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return D("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return D("DataSnapshot.child",0,1,arguments.length),e=String(e),Us("DataSnapshot.child","path",e),new Ln(this._database,this._delegate.child(e))}hasChild(e){return D("DataSnapshot.hasChild",1,1,arguments.length),Us("DataSnapshot.hasChild","path",e),this._delegate.hasChild(e)}getPriority(){return D("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return D("DataSnapshot.forEach",1,1,arguments.length),Ce("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(n=>e(new Ln(this._database,n)))}hasChildren(){return D("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return D("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return D("DataSnapshot.ref",0,0,arguments.length),new ar(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class Ne{constructor(e,n){this.database=e,this._delegate=n}on(e,n,r,i){var s;D("Query.on",2,4,arguments.length),Ce("Query.on","callback",n,!1);const o=Ne.getCancelAndContextArgs_("Query.on",r,i),l=(u,d)=>{n.call(o.context,new Ln(this.database,u),d)};l.userCallback=n,l.context=o.context;const a=(s=o.cancel)===null||s===void 0?void 0:s.bind(o.context);switch(e){case"value":return xc(this._delegate,l,a),n;case"child_added":return Wp(this._delegate,l,a),n;case"child_removed":return $p(this._delegate,l,a),n;case"child_changed":return Vp(this._delegate,l,a),n;case"child_moved":return Hp(this._delegate,l,a),n;default:throw new Error(Ye("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,n,r){if(D("Query.off",0,3,arguments.length),d1("Query.off",e),Ce("Query.off","callback",n,!0),Xf("Query.off","context",r),n){const i=()=>{};i.userCallback=n,i.context=r,Gp(this._delegate,e,i)}else Gp(this._delegate,e)}get(){return Ck(this._delegate).then(e=>new Ln(this.database,e))}once(e,n,r,i){D("Query.once",1,4,arguments.length),Ce("Query.once","callback",n,!0);const s=Ne.getCancelAndContextArgs_("Query.once",r,i),o=new He,l=(u,d)=>{const c=new Ln(this.database,u);n&&n.call(s.context,c,d),o.resolve(c)};l.userCallback=n,l.context=s.context;const a=u=>{s.cancel&&s.cancel.call(s.context,u),o.reject(u)};switch(e){case"value":xc(this._delegate,l,a,{onlyOnce:!0});break;case"child_added":Wp(this._delegate,l,a,{onlyOnce:!0});break;case"child_removed":$p(this._delegate,l,a,{onlyOnce:!0});break;case"child_changed":Vp(this._delegate,l,a,{onlyOnce:!0});break;case"child_moved":Hp(this._delegate,l,a,{onlyOnce:!0});break;default:throw new Error(Ye("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return o.promise}limitToFirst(e){return D("Query.limitToFirst",1,1,arguments.length),new Ne(this.database,Tt(this._delegate,Ak(e)))}limitToLast(e){return D("Query.limitToLast",1,1,arguments.length),new Ne(this.database,Tt(this._delegate,Ok(e)))}orderByChild(e){return D("Query.orderByChild",1,1,arguments.length),new Ne(this.database,Tt(this._delegate,Dk(e)))}orderByKey(){return D("Query.orderByKey",0,0,arguments.length),new Ne(this.database,Tt(this._delegate,Mk()))}orderByPriority(){return D("Query.orderByPriority",0,0,arguments.length),new Ne(this.database,Tt(this._delegate,Uk()))}orderByValue(){return D("Query.orderByValue",0,0,arguments.length),new Ne(this.database,Tt(this._delegate,zk()))}startAt(e=null,n){return D("Query.startAt",0,2,arguments.length),new Ne(this.database,Tt(this._delegate,kk(e,n)))}startAfter(e=null,n){return D("Query.startAfter",0,2,arguments.length),new Ne(this.database,Tt(this._delegate,Nk(e,n)))}endAt(e=null,n){return D("Query.endAt",0,2,arguments.length),new Ne(this.database,Tt(this._delegate,Sk(e,n)))}endBefore(e=null,n){return D("Query.endBefore",0,2,arguments.length),new Ne(this.database,Tt(this._delegate,Tk(e,n)))}equalTo(e,n){return D("Query.equalTo",1,2,arguments.length),new Ne(this.database,Tt(this._delegate,Wk(e,n)))}toString(){return D("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return D("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(D("Query.isEqual",1,1,arguments.length),!(e instanceof Ne)){const n="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(n)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,n,r){const i={cancel:void 0,context:void 0};if(n&&r)i.cancel=n,Ce(e,"cancel",i.cancel,!0),i.context=r,Xf(e,"context",i.context);else if(n)if(typeof n=="object"&&n!==null)i.context=n;else if(typeof n=="function")i.cancel=n;else throw new Error(Ye(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return i}get ref(){return new ar(this.database,new Ct(this._delegate._repo,this._delegate._path))}}let ar=class Lr extends Ne{constructor(e,n){super(e,new Xe(n._repo,n._path,new oa,!1)),this.database=e,this._delegate=n}getKey(){return D("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return D("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new Lr(this.database,Cr(this._delegate,e))}getParent(){D("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new Lr(this.database,e):null}getRoot(){return D("Reference.root",0,0,arguments.length),new Lr(this.database,this._delegate.root)}set(e,n){D("Reference.set",1,2,arguments.length),Ce("Reference.set","onComplete",n,!0);const r=Ih(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}update(e,n){if(D("Reference.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let s=0;s<e.length;++s)i[""+s]=e[s];e=i,wy("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}mt("Reference.update",this._delegate._path),Ce("Reference.update","onComplete",n,!0);const r=Ek(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}setWithPriority(e,n,r){D("Reference.setWithPriority",2,3,arguments.length),Ce("Reference.setWithPriority","onComplete",r,!0);const i=wk(this._delegate,e,n);return r&&i.then(()=>r(null),s=>r(s)),i}remove(e){D("Reference.remove",0,1,arguments.length),Ce("Reference.remove","onComplete",e,!0);const n=_k(this._delegate);return e&&n.then(()=>e(null),r=>e(r)),n}transaction(e,n,r){D("Reference.transaction",1,3,arguments.length),Ce("Reference.transaction","transactionUpdate",e,!1),Ce("Reference.transaction","onComplete",n,!0),c1("Reference.transaction","applyLocally",r);const i=o1(this._delegate,e,{applyLocally:r}).then(s=>new f1(s.committed,new Ln(this.database,s.snapshot)));return n&&i.then(s=>n(null,s.committed,s.snapshot),s=>n(s,!1,null)),i}setPriority(e,n){D("Reference.setPriority",1,2,arguments.length),Ce("Reference.setPriority","onComplete",n,!0);const r=yk(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}push(e,n){D("Reference.push",0,2,arguments.length),Ce("Reference.push","onComplete",n,!0);const r=vk(this._delegate,e),i=r.then(o=>new Lr(this.database,o));n&&i.then(()=>n(null),o=>n(o));const s=new Lr(this.database,r);return s.then=i.then.bind(i),s.catch=i.catch.bind(i,void 0),s}onDisconnect(){return mt("Reference.onDisconnect",this._delegate._path),new h1(new gk(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}};/**
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
 */class Bs{constructor(e,n){this._delegate=e,this.app=n,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:qk,forceLongPolling:Yk}}useEmulator(e,n,r={}){Jk(this._delegate,e,n,r)}ref(e){if(D("database.ref",0,1,arguments.length),e instanceof ar){const n=jp(this._delegate,e.toString());return new ar(this,n)}else{const n=my(this._delegate,e);return new ar(this,n)}}refFromURL(e){D("database.refFromURL",1,1,arguments.length);const r=jp(this._delegate,e);return new ar(this,r)}goOffline(){return D("database.goOffline",0,0,arguments.length),Xk(this._delegate)}goOnline(){return D("database.goOnline",0,0,arguments.length),Zk(this._delegate)}}Bs.ServerValue={TIMESTAMP:r1(),increment:t=>i1(t)};function p1({app:t,url:e,version:n,customAuthImpl:r,customAppCheckImpl:i,namespace:s,nodeAdmin:o=!1}){n_(n);const l=new Ud("database-standalone"),a=new dc("auth-internal",l);a.setComponent(new Et("auth-internal",()=>r,"PRIVATE"));let u;return i&&(u=new dc("app-check-internal",l),u.setComponent(new Et("app-check-internal",()=>i,"PRIVATE"))),{instance:new Bs(_y(t,a,u,e,o),t),namespace:s}}var m1=Object.freeze({__proto__:null,initStandalone:p1});/**
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
 */const g1=Bs.ServerValue;function v1(t){t.INTERNAL.registerComponent(new Et("database-compat",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app-compat").getImmediate(),i=e.getProvider("database").getImmediate({identifier:n});return new Bs(i,r)},"PUBLIC").setServiceProps({Reference:ar,Query:Ne,Database:Bs,DataSnapshot:Ln,enableLogging:e1,INTERNAL:m1,ServerValue:g1}).setMultipleInstances(!0)),t.registerVersion(l1,a1)}v1(ra);var Lc=function(t,e){return Lc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Lc(t,e)};function ie(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Lc(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var ee=function(){return ee=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},ee.apply(this,arguments)};function Th(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function y(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function l(d){try{u(r.next(d))}catch(c){o(c)}}function a(d){try{u(r.throw(d))}catch(c){o(c)}}function u(d){d.done?s(d.value):i(d.value).then(l,a)}u((r=r.apply(t,e||[])).next())})}function w(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return o.next=l(0),o.throw=l(1),o.return=l(2),typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(u){return function(d){return a([u,d])}}function a(u){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(n=0)),n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(d){u=[6,d],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function _t(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var Ml="__sak";/**
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
 */function _1(t){var e=this;return Promise.all(t.map(function(n){return y(e,void 0,void 0,function(){var r,i;return w(this,function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),[4,n];case 1:return r=s.sent(),[2,{fulfilled:!0,value:r}];case 2:return i=s.sent(),[2,{fulfilled:!1,reason:i}];case 3:return[2]}})})}))}/**
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
 */var y1=function(){function t(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return t._getInstance=function(e){var n=this.receivers.find(function(i){return i.isListeningto(e)});if(n)return n;var r=new t(e);return this.receivers.push(r),r},t.prototype.isListeningto=function(e){return this.eventTarget===e},t.prototype.handleEvent=function(e){return y(this,void 0,void 0,function(){var n,r,i,s,o,l,a,u,d=this;return w(this,function(c){switch(c.label){case 0:return n=e,r=n.data,i=r.eventId,s=r.eventType,o=r.data,l=this.handlersMap[s],l!=null&&l.size?(n.ports[0].postMessage({status:"ack",eventId:i,eventType:s}),a=Array.from(l).map(function(h){return y(d,void 0,void 0,function(){return w(this,function(p){return[2,h(n.origin,o)]})})}),[4,_1(a)]):[2];case 1:return u=c.sent(),n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:u}),[2]}})})},t.prototype._subscribe=function(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)},t.prototype._unsubscribe=function(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)},t.receivers=[],t}();/**
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
 */function w1(t,e){for(var n="",r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */var E1=function(){function t(e){this.target=e,this.handlers=new Set}return t.prototype.removeMessageHandler=function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)},t.prototype._send=function(e,n,r){return r===void 0&&(r=50),y(this,void 0,void 0,function(){var i,s,o,l=this;return w(this,function(a){if(i=typeof MessageChannel<"u"?new MessageChannel:null,!i)throw new Error("connection_unavailable");return[2,new Promise(function(u,d){var c=w1("",20);i.port1.start();var h=setTimeout(function(){d(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage:function(p){var v=p;if(v.data.eventId===c)switch(v.data.status){case"ack":clearTimeout(h),s=setTimeout(function(){d(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),u(v.data.response);break;default:clearTimeout(h),clearTimeout(s),d(new Error("invalid_response"));break}}},l.handlers.add(o),i.port1.addEventListener("message",o.onMessage),l.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(function(){o&&l.removeMessageHandler(o)})]})})},t}();/**
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
 */function Kp(){return window}/**
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
 */function Ey(){return typeof Kp().WorkerGlobalScope<"u"&&typeof Kp().importScripts=="function"}function C1(){return y(this,void 0,void 0,function(){var t;return w(this,function(e){switch(e.label){case 0:if(!(navigator!=null&&navigator.serviceWorker))return[2,null];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,navigator.serviceWorker.ready];case 2:return t=e.sent(),[2,t.active];case 3:return e.sent(),[2,null];case 4:return[2]}})})}function S1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function I1(){return Ey()?self:null}/**
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
 */var Cy="firebaseLocalStorageDb",T1=1,Fl="firebaseLocalStorage",Sy="fbase_key",so=function(){function t(e){this.request=e}return t.prototype.toPromise=function(){var e=this;return new Promise(function(n,r){e.request.addEventListener("success",function(){n(e.request.result)}),e.request.addEventListener("error",function(){r(e.request.error)})})},t}();function Ia(t,e){return t.transaction([Fl],e?"readwrite":"readonly").objectStore(Fl)}function k1(){var t=indexedDB.deleteDatabase(Cy);return new so(t).toPromise()}function Mc(){var t=this,e=indexedDB.open(Cy,T1);return new Promise(function(n,r){e.addEventListener("error",function(){r(e.error)}),e.addEventListener("upgradeneeded",function(){var i=e.result;try{i.createObjectStore(Fl,{keyPath:Sy})}catch(s){r(s)}}),e.addEventListener("success",function(){return y(t,void 0,void 0,function(){var i,s;return w(this,function(o){switch(o.label){case 0:return i=e.result,i.objectStoreNames.contains(Fl)?[3,3]:(i.close(),[4,k1()]);case 1:return o.sent(),s=n,[4,Mc()];case 2:return s.apply(void 0,[o.sent()]),[3,4];case 3:n(i),o.label=4;case 4:return[2]}})})})})}function Qp(t,e,n){return y(this,void 0,void 0,function(){var r,i;return w(this,function(s){return r=Ia(t,!0).put((i={},i[Sy]=e,i.value=n,i)),[2,new so(r).toPromise()]})})}function R1(t,e){return y(this,void 0,void 0,function(){var n,r;return w(this,function(i){switch(i.label){case 0:return n=Ia(t,!1).get(e),[4,new so(n).toPromise()];case 1:return r=i.sent(),[2,r===void 0?null:r.value]}})})}function qp(t,e){var n=Ia(t,!0).delete(e);return new so(n).toPromise()}var N1=800,P1=3,A1=function(){function t(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(function(){},function(){})}return t.prototype._openDb=function(){return y(this,void 0,void 0,function(){var e;return w(this,function(n){switch(n.label){case 0:return this.db?[2,this.db]:(e=this,[4,Mc()]);case 1:return e.db=n.sent(),[2,this.db]}})})},t.prototype._withRetries=function(e){return y(this,void 0,void 0,function(){var n,r,i;return w(this,function(s){switch(s.label){case 0:n=0,s.label=1;case 1:s.label=2;case 2:return s.trys.push([2,5,,6]),[4,this._openDb()];case 3:return r=s.sent(),[4,e(r)];case 4:return[2,s.sent()];case 5:if(i=s.sent(),n++>P1)throw i;return this.db&&(this.db.close(),this.db=void 0),[3,6];case 6:return[3,1];case 7:return[2]}})})},t.prototype.initializeServiceWorkerMessaging=function(){return y(this,void 0,void 0,function(){return w(this,function(e){return[2,Ey()?this.initializeReceiver():this.initializeSender()]})})},t.prototype.initializeReceiver=function(){return y(this,void 0,void 0,function(){var e=this;return w(this,function(n){return this.receiver=y1._getInstance(I1()),this.receiver._subscribe("keyChanged",function(r,i){return y(e,void 0,void 0,function(){var s;return w(this,function(o){switch(o.label){case 0:return[4,this._poll()];case 1:return s=o.sent(),[2,{keyProcessed:s.includes(i.key)}]}})})}),this.receiver._subscribe("ping",function(r,i){return y(e,void 0,void 0,function(){return w(this,function(s){return[2,["keyChanged"]]})})}),[2]})})},t.prototype.initializeSender=function(){var e,n;return y(this,void 0,void 0,function(){var r,i;return w(this,function(s){switch(s.label){case 0:return r=this,[4,C1()];case 1:return r.activeServiceWorker=s.sent(),this.activeServiceWorker?(this.sender=new E1(this.activeServiceWorker),[4,this.sender._send("ping",{},800)]):[2];case 2:return i=s.sent(),i?(!((e=i[0])===null||e===void 0)&&e.fulfilled&&(!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0),[2]):[2]}})})},t.prototype.notifyServiceWorker=function(e){return y(this,void 0,void 0,function(){return w(this,function(n){switch(n.label){case 0:if(!this.sender||!this.activeServiceWorker||S1()!==this.activeServiceWorker)return[2];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)];case 2:return n.sent(),[3,4];case 3:return n.sent(),[3,4];case 4:return[2]}})})},t.prototype._isAvailable=function(){return y(this,void 0,void 0,function(){var e;return w(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),indexedDB?[4,Mc()]:[2,!1];case 1:return e=n.sent(),[4,Qp(e,Ml,"1")];case 2:return n.sent(),[4,qp(e,Ml)];case 3:return n.sent(),[2,!0];case 4:return n.sent(),[3,5];case 5:return[2,!1]}})})},t.prototype._withPendingWrite=function(e){return y(this,void 0,void 0,function(){return w(this,function(n){switch(n.label){case 0:this.pendingWrites++,n.label=1;case 1:return n.trys.push([1,,3,4]),[4,e()];case 2:return n.sent(),[3,4];case 3:return this.pendingWrites--,[7];case 4:return[2]}})})},t.prototype._set=function(e,n){return y(this,void 0,void 0,function(){var r=this;return w(this,function(i){return[2,this._withPendingWrite(function(){return y(r,void 0,void 0,function(){return w(this,function(s){switch(s.label){case 0:return[4,this._withRetries(function(o){return Qp(o,e,n)})];case 1:return s.sent(),this.localCache[e]=n,[2,this.notifyServiceWorker(e)]}})})})]})})},t.prototype._get=function(e){return y(this,void 0,void 0,function(){var n;return w(this,function(r){switch(r.label){case 0:return[4,this._withRetries(function(i){return R1(i,e)})];case 1:return n=r.sent(),this.localCache[e]=n,[2,n]}})})},t.prototype._remove=function(e){return y(this,void 0,void 0,function(){var n=this;return w(this,function(r){return[2,this._withPendingWrite(function(){return y(n,void 0,void 0,function(){return w(this,function(i){switch(i.label){case 0:return[4,this._withRetries(function(s){return qp(s,e)})];case 1:return i.sent(),delete this.localCache[e],[2,this.notifyServiceWorker(e)]}})})})]})})},t.prototype._poll=function(){return y(this,void 0,void 0,function(){var e,n,r,i,s,o,l,a,u,d,c;return w(this,function(h){switch(h.label){case 0:return[4,this._withRetries(function(p){var v=Ia(p,!1).getAll();return new so(v).toPromise()})];case 1:if(e=h.sent(),!e)return[2,[]];if(this.pendingWrites!==0)return[2,[]];if(n=[],r=new Set,e.length!==0)for(i=0,s=e;i<s.length;i++)o=s[i],l=o.fbase_key,a=o.value,r.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(a)&&(this.notifyListeners(l,a),n.push(l));for(u=0,d=Object.keys(this.localCache);u<d.length;u++)c=d[u],this.localCache[c]&&!r.has(c)&&(this.notifyListeners(c,null),n.push(c));return[2,n]}})})},t.prototype.notifyListeners=function(e,n){this.localCache[e]=n;var r=this.listeners[e];if(r)for(var i=0,s=Array.from(r);i<s.length;i++){var o=s[i];o(n)}},t.prototype.startPolling=function(){var e=this;this.stopPolling(),this.pollTimer=setInterval(function(){return y(e,void 0,void 0,function(){return w(this,function(n){return[2,this._poll()]})})},N1)},t.prototype.stopPolling=function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)},t.prototype._addListener=function(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)},t.prototype._removeListener=function(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()},t.type="LOCAL",t}(),b1=A1;function Iy(){var t;return t={},t["dependent-sdk-initialized-before-auth"]="Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",t}var O1=Iy,Fc=new Rr("auth","Firebase",Iy());/**
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
 */var ni=new Ks("@firebase/auth");function x1(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];ni.logLevel<=G.WARN&&ni.warn.apply(ni,_t(["Auth (".concat(qn,"): ").concat(t)],e,!1))}function $o(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];ni.logLevel<=G.ERROR&&ni.error.apply(ni,_t(["Auth (".concat(qn,"): ").concat(t)],e,!1))}/**
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
 */function lt(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];throw kh.apply(void 0,_t([t],e,!1))}function br(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return kh.apply(void 0,_t([t],e,!1))}function Ty(t,e,n){var r,i=ee(ee({},O1()),(r={},r[e]=n,r)),s=new Rr("auth","Firebase",i);return s.create(e,{appName:t.name})}function hr(t){return Ty(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kh(t){for(var e,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(typeof t!="string"){var i=n[0],s=_t([],n.slice(1),!0);return s[0]&&(s[0].appName=t.name),(e=t._errorFactory).create.apply(e,_t([i],s,!1))}return Fc.create.apply(Fc,_t([t],n,!1))}function L(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!t)throw kh.apply(void 0,_t([e],n,!1))}function Zt(t){var e="INTERNAL ASSERTION FAILED: "+t;throw $o(e),new Error(e)}function $n(t,e){t||Zt(e)}function D1(){return Yp()==="http:"||Yp()==="https:"}function Yp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function L1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(D1()||VE()||"connection"in navigator)?navigator.onLine:!0}function M1(){if(typeof navigator>"u")return null;var t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */var F1=function(){function t(e,n){this.shortDelay=e,this.longDelay=n,$n(n>e,"Short delay should be less than long delay!"),this.isMobile=Fd()||zv()}return t.prototype.get=function(){return L1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)},t}();/**
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
 */function ky(t,e){$n(t.emulator,"Emulator should always be set here");var n=t.emulator.url;return e?"".concat(n).concat(e.startsWith("/")?e.slice(1):e):n}/**
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
 */var Ry=function(){function t(){}return t.initialize=function(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)},t.fetch=function(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")},t.headers=function(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")},t.response=function(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")},t}();/**
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
 */var b,U1=(b={},b.CREDENTIAL_MISMATCH="custom-token-mismatch",b.MISSING_CUSTOM_TOKEN="internal-error",b.INVALID_IDENTIFIER="invalid-email",b.MISSING_CONTINUE_URI="internal-error",b.INVALID_PASSWORD="wrong-password",b.MISSING_PASSWORD="missing-password",b.INVALID_LOGIN_CREDENTIALS="invalid-credential",b.EMAIL_EXISTS="email-already-in-use",b.PASSWORD_LOGIN_DISABLED="operation-not-allowed",b.INVALID_IDP_RESPONSE="invalid-credential",b.INVALID_PENDING_TOKEN="invalid-credential",b.FEDERATED_USER_ID_ALREADY_LINKED="credential-already-in-use",b.MISSING_REQ_TYPE="internal-error",b.EMAIL_NOT_FOUND="user-not-found",b.RESET_PASSWORD_EXCEED_LIMIT="too-many-requests",b.EXPIRED_OOB_CODE="expired-action-code",b.INVALID_OOB_CODE="invalid-action-code",b.MISSING_OOB_CODE="internal-error",b.CREDENTIAL_TOO_OLD_LOGIN_AGAIN="requires-recent-login",b.INVALID_ID_TOKEN="invalid-user-token",b.TOKEN_EXPIRED="user-token-expired",b.USER_NOT_FOUND="user-token-expired",b.TOO_MANY_ATTEMPTS_TRY_LATER="too-many-requests",b.PASSWORD_DOES_NOT_MEET_REQUIREMENTS="password-does-not-meet-requirements",b.INVALID_CODE="invalid-verification-code",b.INVALID_SESSION_INFO="invalid-verification-id",b.INVALID_TEMPORARY_PROOF="invalid-credential",b.MISSING_SESSION_INFO="missing-verification-id",b.SESSION_EXPIRED="code-expired",b.MISSING_ANDROID_PACKAGE_NAME="missing-android-pkg-name",b.UNAUTHORIZED_DOMAIN="unauthorized-continue-uri",b.INVALID_OAUTH_CLIENT_ID="invalid-oauth-client-id",b.ADMIN_ONLY_OPERATION="admin-restricted-operation",b.INVALID_MFA_PENDING_CREDENTIAL="invalid-multi-factor-session",b.MFA_ENROLLMENT_NOT_FOUND="multi-factor-info-not-found",b.MISSING_MFA_ENROLLMENT_ID="missing-multi-factor-info",b.MISSING_MFA_PENDING_CREDENTIAL="missing-multi-factor-session",b.SECOND_FACTOR_EXISTS="second-factor-already-in-use",b.SECOND_FACTOR_LIMIT_EXCEEDED="maximum-second-factor-count-exceeded",b.BLOCKING_FUNCTION_ERROR_RESPONSE="internal-error",b.RECAPTCHA_NOT_ENABLED="recaptcha-not-enabled",b.MISSING_RECAPTCHA_TOKEN="missing-recaptcha-token",b.INVALID_RECAPTCHA_TOKEN="invalid-recaptcha-token",b.INVALID_RECAPTCHA_ACTION="invalid-recaptcha-action",b.MISSING_CLIENT_TYPE="missing-client-type",b.MISSING_RECAPTCHA_VERSION="missing-recaptcha-version",b.INVALID_RECAPTCHA_VERSION="invalid-recaptcha-version",b.INVALID_REQ_TYPE="invalid-req-type",b);/**
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
 */var B1=new F1(3e4,6e4);function Gt(t,e){return t.tenantId&&!e.tenantId?ee(ee({},e),{tenantId:t.tenantId}):e}function Jn(t,e,n,r,i){return i===void 0&&(i={}),y(this,void 0,void 0,function(){var s=this;return w(this,function(o){return[2,Ny(t,i,function(){return y(s,void 0,void 0,function(){var l,a,u,d;return w(this,function(c){switch(c.label){case 0:return l={},a={},r&&(e==="GET"?a=r:l={body:JSON.stringify(r)}),u=Gs(ee({key:t.config.apiKey},a)).slice(1),[4,t._getAdditionalHeaders()];case 1:return d=c.sent(),d["Content-Type"]="application/json",t.languageCode&&(d["X-Firebase-Locale"]=t.languageCode),[2,Ry.fetch()(Py(t,t.config.apiHost,n,u),ee({method:e,headers:d,referrerPolicy:"no-referrer"},l))]}})})})]})})}function Ny(t,e,n){return y(this,void 0,void 0,function(){var r,i,s,o,l,a,u,d,c,h;return w(this,function(p){switch(p.label){case 0:t._canInitEmulator=!1,r=ee(ee({},U1),e),p.label=1;case 1:return p.trys.push([1,4,,5]),i=new j1(t),[4,Promise.race([n(),i.promise])];case 2:return s=p.sent(),i.clearNetworkTimeout(),[4,s.json()];case 3:if(o=p.sent(),"needConfirmation"in o)throw Gi(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return[2,o];if(l=s.ok?o.errorMessage:o.error.message,a=l.split(" : "),u=a[0],d=a[1],u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gi(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Gi(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Gi(t,"user-disabled",o);if(c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-"),d)throw Ty(t,c,d);return lt(t,c),[3,5];case 4:if(h=p.sent(),h instanceof $t)throw h;return lt(t,"network-request-failed",{message:String(h)}),[3,5];case 5:return[2]}})})}function Or(t,e,n,r,i){return i===void 0&&(i={}),y(this,void 0,void 0,function(){var s;return w(this,function(o){switch(o.label){case 0:return[4,Jn(t,e,n,r,i)];case 1:return s=o.sent(),"mfaPendingCredential"in s&&lt(t,"multi-factor-auth-required",{_serverResponse:s}),[2,s]}})})}function Py(t,e,n,r){var i="".concat(e).concat(n,"?").concat(r);return t.config.emulator?ky(t.config,i):"".concat(t.config.apiScheme,"://").concat(i)}function z1(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var j1=function(){function t(e){var n=this;this.auth=e,this.timer=null,this.promise=new Promise(function(r,i){n.timer=setTimeout(function(){return i(br(n.auth,"network-request-failed"))},B1.get())})}return t.prototype.clearNetworkTimeout=function(){clearTimeout(this.timer)},t}();function Gi(t,e,n){var r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=br(t,e,r);return i.customData._tokenResponse=n,i}function Jp(t){return t!==void 0&&t.enterprise!==void 0}var W1=function(){function t(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}return t.prototype.getProviderEnforcementState=function(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(var n=0,r=this.recaptchaEnforcementState;n<r.length;n++){var i=r[n];if(i.provider&&i.provider===e)return z1(i.enforcementState)}return null},t.prototype.isProviderEnabled=function(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"},t}();function V1(t,e){return y(this,void 0,void 0,function(){return w(this,function(n){return[2,Jn(t,"GET","/v2/recaptchaConfig",Gt(t,e))]})})}/**
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
 */function H1(t,e){return y(this,void 0,void 0,function(){return w(this,function(n){return[2,Jn(t,"POST","/v1/accounts:delete",e)]})})}function Ay(t,e){return y(this,void 0,void 0,function(){return w(this,function(n){return[2,Jn(t,"POST","/v1/accounts:lookup",e)]})})}/**
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
 */function os(t){if(t)try{var e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}function $1(t,e){return e===void 0&&(e=!1),y(this,void 0,void 0,function(){var n,r,i,s,o;return w(this,function(l){switch(l.label){case 0:return n=pe(t),[4,n.getIdToken(e)];case 1:return r=l.sent(),i=Rh(r),L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error"),s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider,[2,{claims:i,token:r,authTime:os(hu(i.auth_time)),issuedAtTime:os(hu(i.iat)),expirationTime:os(hu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}]}})})}function hu(t){return Number(t)*1e3}function Rh(t){var e=t.split("."),n=e[0],r=e[1],i=e[2];if(n===void 0||r===void 0||i===void 0)return $o("JWT malformed, contained fewer than 3 sections"),null;try{var s=_l(r);return s?JSON.parse(s):($o("Failed to decode base64 JWT payload"),null)}catch(o){return $o("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Xp(t){var e=Rh(t);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */function zs(t,e,n){return n===void 0&&(n=!1),y(this,void 0,void 0,function(){var r;return w(this,function(i){switch(i.label){case 0:if(n)return[2,e];i.label=1;case 1:return i.trys.push([1,3,,6]),[4,e];case 2:return[2,i.sent()];case 3:return r=i.sent(),r instanceof $t&&G1(r)?t.auth.currentUser!==t?[3,5]:[4,t.auth.signOut()]:[3,5];case 4:i.sent(),i.label=5;case 5:throw r;case 6:return[2]}})})}function G1(t){var e=t.code;return e==="auth/".concat("user-disabled")||e==="auth/".concat("user-token-expired")}/**
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
 */var K1=function(){function t(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return t.prototype._start=function(){this.isRunning||(this.isRunning=!0,this.schedule())},t.prototype._stop=function(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))},t.prototype.getInterval=function(e){var n;if(e){var r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;var i=(n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0,r=i-Date.now()-3e5;return Math.max(0,r)}},t.prototype.schedule=function(e){var n=this;if(e===void 0&&(e=!1),!!this.isRunning){var r=this.getInterval(e);this.timerId=setTimeout(function(){return y(n,void 0,void 0,function(){return w(this,function(i){switch(i.label){case 0:return[4,this.iteration()];case 1:return i.sent(),[2]}})})},r)}},t.prototype.iteration=function(){return y(this,void 0,void 0,function(){var e;return w(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,this.user.getIdToken(!0)];case 1:return n.sent(),[3,3];case 2:return e=n.sent(),(e==null?void 0:e.code)==="auth/".concat("network-request-failed")&&this.schedule(!0),[2];case 3:return this.schedule(),[2]}})})},t}();/**
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
 */var Uc=function(){function t(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}return t.prototype._initializeTime=function(){this.lastSignInTime=os(this.lastLoginAt),this.creationTime=os(this.createdAt)},t.prototype._copy=function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()},t.prototype.toJSON=function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}},t}();/**
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
 */function Ul(t){var e;return y(this,void 0,void 0,function(){var n,r,i,s,o,l,a,u,d,c;return w(this,function(h){switch(h.label){case 0:return n=t.auth,[4,t.getIdToken()];case 1:return r=h.sent(),[4,zs(t,Ay(n,{idToken:r}))];case 2:return i=h.sent(),L(i==null?void 0:i.users.length,n,"internal-error"),s=i.users[0],t._notifyReloadListener(s),o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?by(s.providerUserInfo):[],l=q1(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Uc(s.createdAt,s.lastLoginAt),isAnonymous:d},Object.assign(t,c),[2]}})})}function Q1(t){return y(this,void 0,void 0,function(){var e;return w(this,function(n){switch(n.label){case 0:return e=pe(t),[4,Ul(e)];case 1:return n.sent(),[4,e.auth._persistUserIfCurrent(e)];case 2:return n.sent(),e.auth._notifyListenersIfCurrent(e),[2]}})})}function q1(t,e){var n=t.filter(function(r){return!e.some(function(i){return i.providerId===r.providerId})});return _t(_t([],n,!0),e,!0)}function by(t){return t.map(function(e){var n=e.providerId,r=Th(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */function Y1(t,e){return y(this,void 0,void 0,function(){var n,r=this;return w(this,function(i){switch(i.label){case 0:return[4,Ny(t,{},function(){return y(r,void 0,void 0,function(){var s,o,l,a,u,d;return w(this,function(c){switch(c.label){case 0:return s=Gs({grant_type:"refresh_token",refresh_token:e}).slice(1),o=t.config,l=o.tokenApiHost,a=o.apiKey,u=Py(t,l,"/v1/token","key=".concat(a)),[4,t._getAdditionalHeaders()];case 1:return d=c.sent(),d["Content-Type"]="application/x-www-form-urlencoded",[2,Ry.fetch()(u,{method:"POST",headers:d,body:s})]}})})})];case 1:return n=i.sent(),[2,{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}]}})})}function J1(t,e){return y(this,void 0,void 0,function(){return w(this,function(n){return[2,Jn(t,"POST","/v2/accounts:revokeToken",Gt(t,e))]})})}/**
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
 */var fu=function(){function t(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return Object.defineProperty(t.prototype,"isExpired",{get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4},enumerable:!1,configurable:!0}),t.prototype.updateFromServerResponse=function(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");var n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)},t.prototype.updateFromIdToken=function(e){L(e.length!==0,"internal-error");var n=Xp(e);this.updateTokensAndExpiration(e,null,n)},t.prototype.getToken=function(e,n){return n===void 0&&(n=!1),y(this,void 0,void 0,function(){return w(this,function(r){switch(r.label){case 0:return!n&&this.accessToken&&!this.isExpired?[2,this.accessToken]:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?[4,this.refresh(e,this.refreshToken)]:[3,2]);case 1:return r.sent(),[2,this.accessToken];case 2:return[2,null]}})})},t.prototype.clearRefreshToken=function(){this.refreshToken=null},t.prototype.refresh=function(e,n){return y(this,void 0,void 0,function(){var r,i,s,o;return w(this,function(l){switch(l.label){case 0:return[4,Y1(e,n)];case 1:return r=l.sent(),i=r.accessToken,s=r.refreshToken,o=r.expiresIn,this.updateTokensAndExpiration(i,s,Number(o)),[2]}})})},t.prototype.updateTokensAndExpiration=function(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3},t.fromJSON=function(e,n){var r=n.refreshToken,i=n.accessToken,s=n.expirationTime,o=new t;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(L(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o},t.prototype.toJSON=function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}},t.prototype._assign=function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime},t.prototype._clone=function(){return Object.assign(new t,this.toJSON())},t.prototype._performRefresh=function(){return Zt("not implemented")},t}();/**
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
 */function fn(t,e){L(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}var Bl=function(){function t(e){var n=e.uid,r=e.auth,i=e.stsTokenManager,s=Th(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new K1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?_t([],s.providerData,!0):[],this.metadata=new Uc(s.createdAt||void 0,s.lastLoginAt||void 0)}return t.prototype.getIdToken=function(e){return y(this,void 0,void 0,function(){var n;return w(this,function(r){switch(r.label){case 0:return[4,zs(this,this.stsTokenManager.getToken(this.auth,e))];case 1:return n=r.sent(),L(n,this.auth,"internal-error"),this.accessToken===n?[3,3]:(this.accessToken=n,[4,this.auth._persistUserIfCurrent(this)]);case 2:r.sent(),this.auth._notifyListenersIfCurrent(this),r.label=3;case 3:return[2,n]}})})},t.prototype.getIdTokenResult=function(e){return $1(this,e)},t.prototype.reload=function(){return Q1(this)},t.prototype._assign=function(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(function(n){return ee({},n)}),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))},t.prototype._clone=function(e){var n=new t(ee(ee({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n},t.prototype._onReload=function(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)},t.prototype._notifyReloadListener=function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e},t.prototype._startProactiveRefresh=function(){this.proactiveRefresh._start()},t.prototype._stopProactiveRefresh=function(){this.proactiveRefresh._stop()},t.prototype._updateTokensIfNecessary=function(e,n){return n===void 0&&(n=!1),y(this,void 0,void 0,function(){var r;return w(this,function(i){switch(i.label){case 0:return r=!1,e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n?[4,Ul(this)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[4,this.auth._persistUserIfCurrent(this)];case 3:return i.sent(),r&&this.auth._notifyListenersIfCurrent(this),[2]}})})},t.prototype.delete=function(){return y(this,void 0,void 0,function(){var e;return w(this,function(n){switch(n.label){case 0:return Jt(this.auth.app)?[2,Promise.reject(hr(this.auth))]:[4,this.getIdToken()];case 1:return e=n.sent(),[4,zs(this,H1(this.auth,{idToken:e}))];case 2:return n.sent(),this.stsTokenManager.clearRefreshToken(),[2,this.auth.signOut()]}})})},t.prototype.toJSON=function(){return ee(ee({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(function(e){return ee({},e)}),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})},Object.defineProperty(t.prototype,"refreshToken",{get:function(){return this.stsTokenManager.refreshToken||""},enumerable:!1,configurable:!0}),t._fromJSON=function(e,n){var r,i,s,o,l,a,u,d,c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(l=n.tenantId)!==null&&l!==void 0?l:void 0,C=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,g=n.uid,E=n.emailVerified,T=n.isAnonymous,R=n.providerData,P=n.stsTokenManager;L(g&&P,e,"internal-error");var A=fu.fromJSON(this.name,P);L(typeof g=="string",e,"internal-error"),fn(c,e.name),fn(h,e.name),L(typeof E=="boolean",e,"internal-error"),L(typeof T=="boolean",e,"internal-error"),fn(p,e.name),fn(v,e.name),fn(_,e.name),fn(C,e.name),fn(m,e.name),fn(f,e.name);var X=new t({uid:g,auth:e,email:h,emailVerified:E,displayName:c,isAnonymous:T,photoURL:v,phoneNumber:p,tenantId:_,stsTokenManager:A,createdAt:m,lastLoginAt:f});return R&&Array.isArray(R)&&(X.providerData=R.map(function(j){return ee({},j)})),C&&(X._redirectEventId=C),X},t._fromIdTokenResponse=function(e,n,r){return r===void 0&&(r=!1),y(this,void 0,void 0,function(){var i,s;return w(this,function(o){switch(o.label){case 0:return i=new fu,i.updateFromServerResponse(n),s=new t({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r}),[4,Ul(s)];case 1:return o.sent(),[2,s]}})})},t._fromGetAccountInfoResponse=function(e,n,r){return y(this,void 0,void 0,function(){var i,s,o,l,a,u;return w(this,function(d){return i=n.users[0],L(i.localId!==void 0,"internal-error"),s=i.providerUserInfo!==void 0?by(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new fu,l.updateFromIdToken(r),a=new t({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Uc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)},Object.assign(a,u),[2,a]})})},t}();/**
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
 */var Zp=new Map;function Ut(t){$n(t instanceof Function,"Expected a class definition");var e=Zp.get(t);return e?($n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zp.set(t,e),e)}/**
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
 */var X1=function(){function t(){this.type="NONE",this.storage={}}return t.prototype._isAvailable=function(){return y(this,void 0,void 0,function(){return w(this,function(e){return[2,!0]})})},t.prototype._set=function(e,n){return y(this,void 0,void 0,function(){return w(this,function(r){return this.storage[e]=n,[2]})})},t.prototype._get=function(e){return y(this,void 0,void 0,function(){var n;return w(this,function(r){return n=this.storage[e],[2,n===void 0?null:n]})})},t.prototype._remove=function(e){return y(this,void 0,void 0,function(){return w(this,function(n){return delete this.storage[e],[2]})})},t.prototype._addListener=function(e,n){},t.prototype._removeListener=function(e,n){},t.type="NONE",t}(),em=X1;/**
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
 */function ls(t,e,n){return"".concat("firebase",":").concat(t,":").concat(e,":").concat(n)}var tm=function(){function t(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;var i=this.auth,s=i.config,o=i.name;this.fullUserKey=ls(this.userKey,s.apiKey,o),this.fullPersistenceKey=ls("persistence",s.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return t.prototype.setCurrentUser=function(e){return this.persistence._set(this.fullUserKey,e.toJSON())},t.prototype.getCurrentUser=function(){return y(this,void 0,void 0,function(){var e;return w(this,function(n){switch(n.label){case 0:return[4,this.persistence._get(this.fullUserKey)];case 1:return e=n.sent(),[2,e?Bl._fromJSON(this.auth,e):null]}})})},t.prototype.removeCurrentUser=function(){return this.persistence._remove(this.fullUserKey)},t.prototype.savePersistenceForRedirect=function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)},t.prototype.setPersistence=function(e){return y(this,void 0,void 0,function(){var n;return w(this,function(r){switch(r.label){case 0:return this.persistence===e?[2]:[4,this.getCurrentUser()];case 1:return n=r.sent(),[4,this.removeCurrentUser()];case 2:return r.sent(),this.persistence=e,n?[2,this.setCurrentUser(n)]:[2]}})})},t.prototype.delete=function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)},t.create=function(e,n,r){return r===void 0&&(r="authUser"),y(this,void 0,void 0,function(){var i,s,o,l,a,u,d,c,h,p,v=this;return w(this,function(_){switch(_.label){case 0:return n.length?[4,Promise.all(n.map(function(C){return y(v,void 0,void 0,function(){return w(this,function(m){switch(m.label){case 0:return[4,C._isAvailable()];case 1:return m.sent()?[2,C]:[2,void 0]}})})}))]:[2,new t(Ut(em),e,r)];case 1:i=_.sent().filter(function(C){return C}),s=i[0]||Ut(em),o=ls(r,e.config.apiKey,e.name),l=null,a=0,u=n,_.label=2;case 2:if(!(a<u.length))return[3,7];d=u[a],_.label=3;case 3:return _.trys.push([3,5,,6]),[4,d._get(o)];case 4:return c=_.sent(),c?(h=Bl._fromJSON(e,c),d!==s&&(l=h),s=d,[3,7]):[3,6];case 5:return _.sent(),[3,6];case 6:return a++,[3,2];case 7:return p=i.filter(function(C){return C._shouldAllowMigration}),!s._shouldAllowMigration||!p.length?[2,new t(s,e,r)]:(s=p[0],l?[4,s._set(o,l.toJSON())]:[3,9]);case 8:_.sent(),_.label=9;case 9:return[4,Promise.all(n.map(function(C){return y(v,void 0,void 0,function(){return w(this,function(m){switch(m.label){case 0:if(C===s)return[3,4];m.label=1;case 1:return m.trys.push([1,3,,4]),[4,C._remove(o)];case 2:return m.sent(),[3,4];case 3:return m.sent(),[3,4];case 4:return[2]}})})}))];case 10:return _.sent(),[2,new t(s,e,r)]}})})},t}();/**
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
 */function nm(t){var e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Oy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Z1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xy(e))return"Blackberry";if(Dy(e))return"Webos";if(eR(e))return"Safari";if((e.includes("chrome/")||tR(e))&&!e.includes("edge/"))return"Chrome";if(oo(e))return"Android";var n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);return(r==null?void 0:r.length)===2?r[1]:"Other"}function Z1(t){return t===void 0&&(t=Je()),/firefox\//i.test(t)}function eR(t){t===void 0&&(t=Je());var e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tR(t){return t===void 0&&(t=Je()),/crios\//i.test(t)}function Oy(t){return t===void 0&&(t=Je()),/iemobile/i.test(t)}function oo(t){return t===void 0&&(t=Je()),/android/i.test(t)}function xy(t){return t===void 0&&(t=Je()),/blackberry/i.test(t)}function Dy(t){return t===void 0&&(t=Je()),/webos/i.test(t)}function Nh(t){return t===void 0&&(t=Je()),/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function nR(t){return t===void 0&&(t=Je()),/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function rR(){return HE()&&document.documentMode===10}function iR(t){return t===void 0&&(t=Je()),Nh(t)||oo(t)||Dy(t)||xy(t)||/windows phone/i.test(t)||Oy(t)}/**
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
 */function Ly(t,e){e===void 0&&(e=[]);var n;switch(t){case"Browser":n=nm(Je());break;case"Worker":n="".concat(nm(Je()),"-").concat(t);break;default:n=t}var r=e.length?e.join(","):"FirebaseCore-web";return"".concat(n,"/").concat("JsCore","/").concat(qn,"/").concat(r)}/**
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
 */var sR=function(){function t(e){this.auth=e,this.queue=[]}return t.prototype.pushCallback=function(e,n){var r=this,i=function(o){return new Promise(function(l,a){try{var u=e(o);l(u)}catch(d){a(d)}})};i.onAbort=n,this.queue.push(i);var s=this.queue.length-1;return function(){r.queue[s]=function(){return Promise.resolve()}}},t.prototype.runMiddleware=function(e){return y(this,void 0,void 0,function(){var n,r,i,s,o,l,a,u;return w(this,function(d){switch(d.label){case 0:if(this.auth.currentUser===e)return[2];n=[],d.label=1;case 1:d.trys.push([1,6,,7]),r=0,i=this.queue,d.label=2;case 2:return r<i.length?(s=i[r],[4,s(e)]):[3,5];case 3:d.sent(),s.onAbort&&n.push(s.onAbort),d.label=4;case 4:return r++,[3,2];case 5:return[3,7];case 6:for(o=d.sent(),n.reverse(),l=0,a=n;l<a.length;l++){u=a[l];try{u()}catch{}}throw this.auth._errorFactory.create("login-blocked",{originalMessage:o==null?void 0:o.message});case 7:return[2]}})})},t}();/**
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
 */function oR(t,e){return e===void 0&&(e={}),y(this,void 0,void 0,function(){return w(this,function(n){return[2,Jn(t,"GET","/v2/passwordPolicy",Gt(t,e))]})})}/**
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
 */var lR=6,aR=function(){function t(e){var n,r,i,s,o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:lR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}return t.prototype.validatePassword=function(e){var n,r,i,s,o,l,a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a},t.prototype.validatePasswordLengthOptions=function(e,n){var r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)},t.prototype.validatePasswordCharacterOptions=function(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);for(var r,i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))},t.prototype.updatePasswordCharacterOptionsStatuses=function(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))},t}();/**
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
 */var uR=function(){function t(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rm(this),this.idTokenSubscription=new rm(this),this.beforeStateQueue=new sR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}return t.prototype._initializeWithPersistence=function(e,n){var r=this;return n&&(this._popupRedirectResolver=Ut(n)),this._initializationPromise=this.queue(function(){return y(r,void 0,void 0,function(){var i,s,o;return w(this,function(l){switch(l.label){case 0:return this._deleted?[2]:(i=this,[4,tm.create(this,e)]);case 1:if(i.persistenceManager=l.sent(),this._deleted)return[2];if(!(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively))return[3,5];l.label=2;case 2:return l.trys.push([2,4,,5]),[4,this._popupRedirectResolver._initialize(this)];case 3:return l.sent(),[3,5];case 4:return l.sent(),[3,5];case 5:return[4,this.initializeCurrentUser(n)];case 6:return l.sent(),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,this._deleted?[2]:(this._isInitialized=!0,[2])}})})}),this._initializationPromise},t.prototype._onStorageEvent=function(){return y(this,void 0,void 0,function(){var e;return w(this,function(n){switch(n.label){case 0:return this._deleted?[2]:[4,this.assertedPersistence.getCurrentUser()];case 1:return e=n.sent(),!this.currentUser&&!e?[2]:this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),[4,this.currentUser.getIdToken()]):[3,3];case 2:return n.sent(),[2];case 3:return[4,this._updateCurrentUser(e,!0)];case 4:return n.sent(),[2]}})})},t.prototype.initializeCurrentUserFromIdToken=function(e){return y(this,void 0,void 0,function(){var n,r,i;return w(this,function(s){switch(s.label){case 0:return s.trys.push([0,4,,6]),[4,Ay(this,{idToken:e})];case 1:return n=s.sent(),[4,Bl._fromGetAccountInfoResponse(this,n,e)];case 2:return r=s.sent(),[4,this.directlySetCurrentUser(r)];case 3:return s.sent(),[3,6];case 4:return i=s.sent(),console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),[4,this.directlySetCurrentUser(null)];case 5:return s.sent(),[3,6];case 6:return[2]}})})},t.prototype.initializeCurrentUser=function(e){var n;return y(this,void 0,void 0,function(){var r,i,s,o,l,a,u,d,c=this;return w(this,function(h){switch(h.label){case 0:return Jt(this.app)?(r=this.app.settings.authIdToken,r?[2,new Promise(function(p){setTimeout(function(){return c.initializeCurrentUserFromIdToken(r).then(p,p)})})]:[2,this.directlySetCurrentUser(null)]):[4,this.assertedPersistence.getCurrentUser()];case 1:return i=h.sent(),s=i,o=!1,e&&this.config.authDomain?[4,this.getOrInitRedirectPersistenceManager()]:[3,4];case 2:return h.sent(),l=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,[4,this.tryRedirectSignIn(e)];case 3:u=h.sent(),(!l||l===a)&&(u!=null&&u.user)&&(s=u.user,o=!0),h.label=4;case 4:if(!s)return[2,this.directlySetCurrentUser(null)];if(s._redirectEventId)return[3,9];if(!o)return[3,8];h.label=5;case 5:return h.trys.push([5,7,,8]),[4,this.beforeStateQueue.runMiddleware(s)];case 6:return h.sent(),[3,8];case 7:return d=h.sent(),s=i,this._popupRedirectResolver._overrideRedirectResult(this,function(){return Promise.reject(d)}),[3,8];case 8:return s?[2,this.reloadAndSetCurrentUserOrClear(s)]:[2,this.directlySetCurrentUser(null)];case 9:return L(this._popupRedirectResolver,this,"argument-error"),[4,this.getOrInitRedirectPersistenceManager()];case 10:return h.sent(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?[2,this.directlySetCurrentUser(s)]:[2,this.reloadAndSetCurrentUserOrClear(s)]}})})},t.prototype.tryRedirectSignIn=function(e){return y(this,void 0,void 0,function(){var n;return w(this,function(r){switch(r.label){case 0:n=null,r.label=1;case 1:return r.trys.push([1,3,,5]),[4,this._popupRedirectResolver._completeRedirectFn(this,e,!0)];case 2:return n=r.sent(),[3,5];case 3:return r.sent(),[4,this._setRedirectUser(null)];case 4:return r.sent(),[3,5];case 5:return[2,n]}})})},t.prototype.reloadAndSetCurrentUserOrClear=function(e){return y(this,void 0,void 0,function(){var n;return w(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,Ul(e)];case 1:return r.sent(),[3,3];case 2:return n=r.sent(),(n==null?void 0:n.code)!=="auth/".concat("network-request-failed")?[2,this.directlySetCurrentUser(null)]:[3,3];case 3:return[2,this.directlySetCurrentUser(e)]}})})},t.prototype.useDeviceLanguage=function(){this.languageCode=M1()},t.prototype._delete=function(){return y(this,void 0,void 0,function(){return w(this,function(e){return this._deleted=!0,[2]})})},t.prototype.updateCurrentUser=function(e){return y(this,void 0,void 0,function(){var n;return w(this,function(r){return Jt(this.app)?[2,Promise.reject(hr(this))]:(n=e?pe(e):null,n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),[2,this._updateCurrentUser(n&&n._clone(this))])})})},t.prototype._updateCurrentUser=function(e,n){return n===void 0&&(n=!1),y(this,void 0,void 0,function(){var r=this;return w(this,function(i){switch(i.label){case 0:return this._deleted?[2]:(e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n?[3,2]:[4,this.beforeStateQueue.runMiddleware(e)]);case 1:i.sent(),i.label=2;case 2:return[2,this.queue(function(){return y(r,void 0,void 0,function(){return w(this,function(s){switch(s.label){case 0:return[4,this.directlySetCurrentUser(e)];case 1:return s.sent(),this.notifyAuthListeners(),[2]}})})})]}})})},t.prototype.signOut=function(){return y(this,void 0,void 0,function(){return w(this,function(e){switch(e.label){case 0:return Jt(this.app)?[2,Promise.reject(hr(this))]:[4,this.beforeStateQueue.runMiddleware(null)];case 1:return e.sent(),this.redirectPersistenceManager||this._popupRedirectResolver?[4,this._setRedirectUser(null)]:[3,3];case 2:e.sent(),e.label=3;case 3:return[2,this._updateCurrentUser(null,!0)]}})})},t.prototype.setPersistence=function(e){var n=this;return Jt(this.app)?Promise.reject(hr(this)):this.queue(function(){return y(n,void 0,void 0,function(){return w(this,function(r){switch(r.label){case 0:return[4,this.assertedPersistence.setPersistence(Ut(e))];case 1:return r.sent(),[2]}})})})},t.prototype._getRecaptchaConfig=function(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]},t.prototype.validatePassword=function(e){return y(this,void 0,void 0,function(){var n;return w(this,function(r){switch(r.label){case 0:return this._getPasswordPolicyInternal()?[3,2]:[4,this._updatePasswordPolicy()];case 1:r.sent(),r.label=2;case 2:return n=this._getPasswordPolicyInternal(),n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?[2,Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{}))]:[2,n.validatePassword(e)]}})})},t.prototype._getPasswordPolicyInternal=function(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]},t.prototype._updatePasswordPolicy=function(){return y(this,void 0,void 0,function(){var e,n;return w(this,function(r){switch(r.label){case 0:return[4,oR(this)];case 1:return e=r.sent(),n=new aR(e),this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n,[2]}})})},t.prototype._getPersistence=function(){return this.assertedPersistence.persistence.type},t.prototype._updateErrorMap=function(e){this._errorFactory=new Rr("auth","Firebase",e())},t.prototype.onAuthStateChanged=function(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)},t.prototype.beforeAuthStateChanged=function(e,n){return this.beforeStateQueue.pushCallback(e,n)},t.prototype.onIdTokenChanged=function(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)},t.prototype.authStateReady=function(){var e=this;return new Promise(function(n,r){if(e.currentUser)n();else var i=e.onAuthStateChanged(function(){i(),n()},r)})},t.prototype.revokeAccessToken=function(e){return y(this,void 0,void 0,function(){var n,r;return w(this,function(i){switch(i.label){case 0:return this.currentUser?[4,this.currentUser.getIdToken()]:[3,3];case 1:return n=i.sent(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n},this.tenantId!=null&&(r.tenantId=this.tenantId),[4,J1(this,r)];case 2:i.sent(),i.label=3;case 3:return[2]}})})},t.prototype.toJSON=function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}},t.prototype._setRedirectUser=function(e,n){return y(this,void 0,void 0,function(){var r;return w(this,function(i){switch(i.label){case 0:return[4,this.getOrInitRedirectPersistenceManager(n)];case 1:return r=i.sent(),[2,e===null?r.removeCurrentUser():r.setCurrentUser(e)]}})})},t.prototype.getOrInitRedirectPersistenceManager=function(e){return y(this,void 0,void 0,function(){var n,r,i;return w(this,function(s){switch(s.label){case 0:return this.redirectPersistenceManager?[3,3]:(n=e&&Ut(e)||this._popupRedirectResolver,L(n,this,"argument-error"),r=this,[4,tm.create(this,[Ut(n._redirectPersistence)],"redirectUser")]);case 1:return r.redirectPersistenceManager=s.sent(),i=this,[4,this.redirectPersistenceManager.getCurrentUser()];case 2:i.redirectUser=s.sent(),s.label=3;case 3:return[2,this.redirectPersistenceManager]}})})},t.prototype._redirectUserForId=function(e){var n,r;return y(this,void 0,void 0,function(){var i=this;return w(this,function(s){switch(s.label){case 0:return this._isInitialized?[4,this.queue(function(){return y(i,void 0,void 0,function(){return w(this,function(o){return[2]})})})]:[3,2];case 1:s.sent(),s.label=2;case 2:return((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?[2,this._currentUser]:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?[2,this.redirectUser]:[2,null]}})})},t.prototype._persistUserIfCurrent=function(e){return y(this,void 0,void 0,function(){var n=this;return w(this,function(r){return e===this.currentUser?[2,this.queue(function(){return y(n,void 0,void 0,function(){return w(this,function(i){return[2,this.directlySetCurrentUser(e)]})})})]:[2]})})},t.prototype._notifyListenersIfCurrent=function(e){e===this.currentUser&&this.notifyAuthListeners()},t.prototype._key=function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)},t.prototype._startProactiveRefresh=function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()},t.prototype._stopProactiveRefresh=function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()},Object.defineProperty(t.prototype,"_currentUser",{get:function(){return this.currentUser},enumerable:!1,configurable:!0}),t.prototype.notifyAuthListeners=function(){var e,n;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}},t.prototype.registerStateListener=function(e,n,r,i){var s=this;if(this._deleted)return function(){};var o=typeof n=="function"?n:n.next.bind(n),l=!1,a=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(a,this,"internal-error"),a.then(function(){l||o(s.currentUser)}),typeof n=="function"){var u=e.addObserver(n,r,i);return function(){l=!0,u()}}else{var d=e.addObserver(n);return function(){l=!0,d()}}},t.prototype.directlySetCurrentUser=function(e){return y(this,void 0,void 0,function(){return w(this,function(n){switch(n.label){case 0:return this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?[4,this.assertedPersistence.setCurrentUser(e)]:[3,2];case 1:return n.sent(),[3,4];case 2:return[4,this.assertedPersistence.removeCurrentUser()];case 3:n.sent(),n.label=4;case 4:return[2]}})})},t.prototype.queue=function(e){return this.operations=this.operations.then(e,e),this.operations},Object.defineProperty(t.prototype,"assertedPersistence",{get:function(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager},enumerable:!1,configurable:!0}),t.prototype._logFramework=function(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ly(this.config.clientPlatform,this._getFrameworks()))},t.prototype._getFrameworks=function(){return this.frameworks},t.prototype._getAdditionalHeaders=function(){var e;return y(this,void 0,void 0,function(){var n,r,i,s;return w(this,function(o){switch(o.label){case 0:return n=(s={},s["X-Client-Version"]=this.clientVersion,s),this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId),[4,(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader()];case 1:return r=o.sent(),r&&(n["X-Firebase-Client"]=r),[4,this._getAppCheckToken()];case 2:return i=o.sent(),i&&(n["X-Firebase-AppCheck"]=i),[2,n]}})})},t.prototype._getAppCheckToken=function(){var e;return y(this,void 0,void 0,function(){var n;return w(this,function(r){switch(r.label){case 0:return[4,(e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken()];case 1:return n=r.sent(),n!=null&&n.error&&x1("Error while retrieving App Check token: ".concat(n.error)),[2,n==null?void 0:n.token]}})})},t}();function Ph(t){return pe(t)}var rm=function(){function t(e){var n=this;this.auth=e,this.observer=null,this.addObserver=Vv(function(r){return n.observer=r})}return Object.defineProperty(t.prototype,"next",{get:function(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)},enumerable:!1,configurable:!0}),t}();/**
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
 */var My={loadJS:function(){return y(this,void 0,void 0,function(){return w(this,function(t){throw new Error("Unable to load external scripts")})})},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cR(t){return My.loadJS(t)}function dR(){return My.recaptchaEnterpriseScript}var hR="recaptcha-enterprise",fR="NO_RECAPTCHA",pR=function(){function t(e){this.type=hR,this.auth=Ph(e)}return t.prototype.verify=function(e,n){return e===void 0&&(e="verify"),n===void 0&&(n=!1),y(this,void 0,void 0,function(){function r(o){return y(this,void 0,void 0,function(){var l=this;return w(this,function(a){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return[2,o._agentRecaptchaConfig.siteKey];if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return[2,o._tenantRecaptchaConfigs[o.tenantId].siteKey]}return[2,new Promise(function(u,d){return y(l,void 0,void 0,function(){return w(this,function(c){return V1(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(function(h){if(h.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{var p=new W1(h);return o.tenantId==null?o._agentRecaptchaConfig=p:o._tenantRecaptchaConfigs[o.tenantId]=p,u(p.siteKey)}}).catch(function(h){d(h)}),[2]})})})]})})}function i(o,l,a){var u=window.grecaptcha;Jp(u)?u.enterprise.ready(function(){u.enterprise.execute(o,{action:e}).then(function(d){l(d)}).catch(function(){l(fR)})}):a(Error("No reCAPTCHA enterprise script loaded."))}var s=this;return w(this,function(o){return[2,new Promise(function(l,a){r(s.auth).then(function(u){if(!n&&Jp(window.grecaptcha))i(u,l,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}var d=dR();d.length!==0&&(d+=u),cR(d).then(function(){i(u,l,a)}).catch(function(c){a(c)})}}).catch(function(u){a(u)})})]})})},t}();function im(t,e,n,r){return r===void 0&&(r=!1),y(this,void 0,void 0,function(){var i,s,o;return w(this,function(l){switch(l.label){case 0:i=new pR(t),l.label=1;case 1:return l.trys.push([1,3,,5]),[4,i.verify(n)];case 2:return s=l.sent(),[3,5];case 3:return l.sent(),[4,i.verify(n,!0)];case 4:return s=l.sent(),[3,5];case 5:return o=ee({},e),r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),[2,o]}})})}function sm(t,e,n,r){var i;return y(this,void 0,void 0,function(){var s,o=this;return w(this,function(l){switch(l.label){case 0:return!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")?[4,im(t,e,n,n==="getOobCode")]:[3,2];case 1:return s=l.sent(),[2,r(t,s)];case 2:return[2,r(t,e).catch(function(a){return y(o,void 0,void 0,function(){var u;return w(this,function(d){switch(d.label){case 0:return a.code!=="auth/".concat("missing-recaptcha-token")?[3,2]:(console.log("".concat(n," is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.")),[4,im(t,e,n,n==="getOobCode")]);case 1:return u=d.sent(),[2,r(t,u)];case 2:return[2,Promise.reject(a)]}})})})]}})})}/**
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
 */function mR(t,e){var n=Qs(t,"auth");if(n.isInitialized()){var r=n.getImmediate(),i=n.getOptions();if(El(i,e??{}))return r;lt(r,"already-initialized")}var s=n.initialize({options:e});return s}function gR(t,e){var n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ut);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */var lo=function(){function t(e,n){this.providerId=e,this.signInMethod=n}return t.prototype.toJSON=function(){return Zt("not implemented")},t.prototype._getIdTokenResponse=function(e){return Zt("not implemented")},t.prototype._linkToIdToken=function(e,n){return Zt("not implemented")},t.prototype._getReauthenticationResolver=function(e){return Zt("not implemented")},t}();function vR(t,e){return y(this,void 0,void 0,function(){return w(this,function(n){return[2,Jn(t,"POST","/v1/accounts:signUp",e)]})})}/**
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
 */function _R(t,e){return y(this,void 0,void 0,function(){return w(this,function(n){return[2,Or(t,"POST","/v1/accounts:signInWithPassword",Gt(t,e))]})})}/**
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
 */function yR(t,e){return y(this,void 0,void 0,function(){return w(this,function(n){return[2,Or(t,"POST","/v1/accounts:signInWithEmailLink",Gt(t,e))]})})}function wR(t,e){return y(this,void 0,void 0,function(){return w(this,function(n){return[2,Or(t,"POST","/v1/accounts:signInWithEmailLink",Gt(t,e))]})})}/**
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
 */(function(t){ie(e,t);function e(n,r,i,s){s===void 0&&(s=null);var o=t.call(this,"password",i)||this;return o._email=n,o._password=r,o._tenantId=s,o}return e._fromEmailAndPassword=function(n,r){return new e(n,r,"password")},e._fromEmailAndCode=function(n,r,i){return i===void 0&&(i=null),new e(n,r,"emailLink",i)},e.prototype.toJSON=function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}},e.fromJSON=function(n){var r=typeof n=="string"?JSON.parse(n):n;if(r!=null&&r.email&&(r!=null&&r.password)){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null},e.prototype._getIdTokenResponse=function(n){return y(this,void 0,void 0,function(){var r;return w(this,function(i){switch(this.signInMethod){case"password":return r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},[2,sm(n,r,"signInWithPassword",_R)];case"emailLink":return[2,yR(n,{email:this._email,oobCode:this._password})];default:lt(n,"internal-error")}return[2]})})},e.prototype._linkToIdToken=function(n,r){return y(this,void 0,void 0,function(){var i;return w(this,function(s){switch(this.signInMethod){case"password":return i={idToken:r,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},[2,sm(n,i,"signUpPassword",vR)];case"emailLink":return[2,wR(n,{idToken:r,email:this._email,oobCode:this._password})];default:lt(n,"internal-error")}return[2]})})},e.prototype._getReauthenticationResolver=function(n){return this._getIdTokenResponse(n)},e})(lo);/**
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
 */function nn(t,e){return y(this,void 0,void 0,function(){return w(this,function(n){return[2,Or(t,"POST","/v1/accounts:signInWithIdp",Gt(t,e))]})})}/**
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
 */var ER="http://localhost",vi=function(t){ie(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.pendingToken=null,n}return e._fromParams=function(n){var r=new e(n.providerId,n.signInMethod);return n.idToken||n.accessToken?(n.idToken&&(r.idToken=n.idToken),n.accessToken&&(r.accessToken=n.accessToken),n.nonce&&!n.pendingToken&&(r.nonce=n.nonce),n.pendingToken&&(r.pendingToken=n.pendingToken)):n.oauthToken&&n.oauthTokenSecret?(r.accessToken=n.oauthToken,r.secret=n.oauthTokenSecret):lt("argument-error"),r},e.prototype.toJSON=function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}},e.fromJSON=function(n){var r=typeof n=="string"?JSON.parse(n):n,i=r.providerId,s=r.signInMethod,o=Th(r,["providerId","signInMethod"]);if(!i||!s)return null;var l=new e(i,s);return l.idToken=o.idToken||void 0,l.accessToken=o.accessToken||void 0,l.secret=o.secret,l.nonce=o.nonce,l.pendingToken=o.pendingToken||null,l},e.prototype._getIdTokenResponse=function(n){var r=this.buildRequest();return nn(n,r)},e.prototype._linkToIdToken=function(n,r){var i=this.buildRequest();return i.idToken=r,nn(n,i)},e.prototype._getReauthenticationResolver=function(n){var r=this.buildRequest();return r.autoCreate=!1,nn(n,r)},e.prototype.buildRequest=function(){var n={requestUri:ER,returnSecureToken:!0};if(this.pendingToken)n.pendingToken=this.pendingToken;else{var r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),n.postBody=Gs(r)}return n},e}(lo);/**
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
 */var pu;function CR(t,e){return y(this,void 0,void 0,function(){return w(this,function(n){return[2,Or(t,"POST","/v1/accounts:signInWithPhoneNumber",Gt(t,e))]})})}function SR(t,e){return y(this,void 0,void 0,function(){var n;return w(this,function(r){switch(r.label){case 0:return[4,Or(t,"POST","/v1/accounts:signInWithPhoneNumber",Gt(t,e))];case 1:if(n=r.sent(),n.temporaryProof)throw Gi(t,"account-exists-with-different-credential",n);return[2,n]}})})}var IR=(pu={},pu.USER_NOT_FOUND="user-not-found",pu);function TR(t,e){return y(this,void 0,void 0,function(){var n;return w(this,function(r){return n=ee(ee({},e),{operation:"REAUTH"}),[2,Or(t,"POST","/v1/accounts:signInWithPhoneNumber",Gt(t,n),IR)]})})}/**
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
 */(function(t){ie(e,t);function e(n){var r=t.call(this,"phone","phone")||this;return r.params=n,r}return e._fromVerification=function(n,r){return new e({verificationId:n,verificationCode:r})},e._fromTokenResponse=function(n,r){return new e({phoneNumber:n,temporaryProof:r})},e.prototype._getIdTokenResponse=function(n){return CR(n,this._makeVerificationRequest())},e.prototype._linkToIdToken=function(n,r){return SR(n,ee({idToken:r},this._makeVerificationRequest()))},e.prototype._getReauthenticationResolver=function(n){return TR(n,this._makeVerificationRequest())},e.prototype._makeVerificationRequest=function(){var n=this.params,r=n.temporaryProof,i=n.phoneNumber,s=n.verificationId,o=n.verificationCode;return r&&i?{temporaryProof:r,phoneNumber:i}:{sessionInfo:s,code:o}},e.prototype.toJSON=function(){var n={providerId:this.providerId};return this.params.phoneNumber&&(n.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(n.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(n.verificationCode=this.params.verificationCode),this.params.verificationId&&(n.verificationId=this.params.verificationId),n},e.fromJSON=function(n){typeof n=="string"&&(n=JSON.parse(n));var r=n,i=r.verificationId,s=r.verificationCode,o=r.phoneNumber,l=r.temporaryProof;return!s&&!i&&!o&&!l?null:new e({verificationId:i,verificationCode:s,phoneNumber:o,temporaryProof:l})},e})(lo);/**
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
 */var Ah=function(){function t(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}return t.prototype.setDefaultLanguage=function(e){this.defaultLanguageCode=e},t.prototype.setCustomParameters=function(e){return this.customParameters=e,this},t.prototype.getCustomParameters=function(){return this.customParameters},t}();/**
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
 */var ki=function(t){ie(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.scopes=[],n}return e.prototype.addScope=function(n){return this.scopes.includes(n)||this.scopes.push(n),this},e.prototype.getScopes=function(){return _t([],this.scopes,!0)},e}(Ah);(function(t){ie(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.credentialFromJSON=function(n){var r=typeof n=="string"?JSON.parse(n):n;return L("providerId"in r&&"signInMethod"in r,"argument-error"),vi._fromParams(r)},e.prototype.credential=function(n){return this._credential(ee(ee({},n),{nonce:n.rawNonce}))},e.prototype._credential=function(n){return L(n.idToken||n.accessToken,"argument-error"),vi._fromParams(ee(ee({},n),{providerId:this.providerId,signInMethod:this.providerId}))},e.credentialFromResult=function(n){return e.oauthCredentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.oauthCredentialFromTaggedObject(n.customData||{})},e.oauthCredentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r)return null;var i=r,s=i.oauthIdToken,o=i.oauthAccessToken,l=i.oauthTokenSecret,a=i.pendingToken,u=i.nonce,d=i.providerId;if(!o&&!l&&!s&&!a||!d)return null;try{return new e(d)._credential({idToken:s,accessToken:o,nonce:u,pendingToken:a})}catch{return null}},e})(ki);/**
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
 */(function(t){ie(e,t);function e(){return t.call(this,"facebook.com")||this}return e.credential=function(n){return vi._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.FACEBOOK_SIGN_IN_METHOD,accessToken:n})},e.credentialFromResult=function(n){return e.credentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.credentialFromTaggedObject(n.customData||{})},e.credentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r||!("oauthAccessToken"in r)||!r.oauthAccessToken)return null;try{return e.credential(r.oauthAccessToken)}catch{return null}},e.FACEBOOK_SIGN_IN_METHOD="facebook.com",e.PROVIDER_ID="facebook.com",e})(ki);/**
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
 */(function(t){ie(e,t);function e(){var n=t.call(this,"google.com")||this;return n.addScope("profile"),n}return e.credential=function(n,r){return vi._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.GOOGLE_SIGN_IN_METHOD,idToken:n,accessToken:r})},e.credentialFromResult=function(n){return e.credentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.credentialFromTaggedObject(n.customData||{})},e.credentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r)return null;var i=r,s=i.oauthIdToken,o=i.oauthAccessToken;if(!s&&!o)return null;try{return e.credential(s,o)}catch{return null}},e.GOOGLE_SIGN_IN_METHOD="google.com",e.PROVIDER_ID="google.com",e})(ki);/**
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
 */(function(t){ie(e,t);function e(){return t.call(this,"github.com")||this}return e.credential=function(n){return vi._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.GITHUB_SIGN_IN_METHOD,accessToken:n})},e.credentialFromResult=function(n){return e.credentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.credentialFromTaggedObject(n.customData||{})},e.credentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r||!("oauthAccessToken"in r)||!r.oauthAccessToken)return null;try{return e.credential(r.oauthAccessToken)}catch{return null}},e.GITHUB_SIGN_IN_METHOD="github.com",e.PROVIDER_ID="github.com",e})(ki);/**
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
 */var kR="http://localhost",om=function(t){ie(e,t);function e(n,r){var i=t.call(this,n,n)||this;return i.pendingToken=r,i}return e.prototype._getIdTokenResponse=function(n){var r=this.buildRequest();return nn(n,r)},e.prototype._linkToIdToken=function(n,r){var i=this.buildRequest();return i.idToken=r,nn(n,i)},e.prototype._getReauthenticationResolver=function(n){var r=this.buildRequest();return r.autoCreate=!1,nn(n,r)},e.prototype.toJSON=function(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}},e.fromJSON=function(n){var r=typeof n=="string"?JSON.parse(n):n,i=r.providerId,s=r.signInMethod,o=r.pendingToken;return!i||!s||!o||i!==s?null:new e(i,o)},e._create=function(n,r){return new e(n,r)},e.prototype.buildRequest=function(){return{requestUri:kR,returnSecureToken:!0,pendingToken:this.pendingToken}},e}(lo);/**
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
 */var RR="saml.";(function(t){ie(e,t);function e(n){return L(n.startsWith(RR),"argument-error"),t.call(this,n)||this}return e.credentialFromResult=function(n){return e.samlCredentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.samlCredentialFromTaggedObject(n.customData||{})},e.credentialFromJSON=function(n){var r=om.fromJSON(n);return L(r,"argument-error"),r},e.samlCredentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r)return null;var i=r,s=i.pendingToken,o=i.providerId;if(!s||!o)return null;try{return om._create(o,s)}catch{return null}},e})(Ah);/**
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
 */(function(t){ie(e,t);function e(){return t.call(this,"twitter.com")||this}return e.credential=function(n,r){return vi._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.TWITTER_SIGN_IN_METHOD,oauthToken:n,oauthTokenSecret:r})},e.credentialFromResult=function(n){return e.credentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.credentialFromTaggedObject(n.customData||{})},e.credentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r)return null;var i=r,s=i.oauthAccessToken,o=i.oauthTokenSecret;if(!s||!o)return null;try{return e.credential(s,o)}catch{return null}},e.TWITTER_SIGN_IN_METHOD="twitter.com",e.PROVIDER_ID="twitter.com",e})(ki);/**
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
 */var bh=function(){function t(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}return t._fromIdTokenResponse=function(e,n,r,i){return i===void 0&&(i=!1),y(this,void 0,void 0,function(){var s,o,l;return w(this,function(a){switch(a.label){case 0:return[4,Bl._fromIdTokenResponse(e,r,i)];case 1:return s=a.sent(),o=lm(r),l=new t({user:s,providerId:o,_tokenResponse:r,operationType:n}),[2,l]}})})},t._forOperation=function(e,n,r){return y(this,void 0,void 0,function(){var i;return w(this,function(s){switch(s.label){case 0:return[4,e._updateTokensIfNecessary(r,!0)];case 1:return s.sent(),i=lm(r),[2,new t({user:e,providerId:i,_tokenResponse:r,operationType:n})]}})})},t}();function lm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */var NR=function(t){ie(e,t);function e(n,r,i,s){var o=this,l;return o=t.call(this,r.code,r.message)||this,o.operationType=i,o.user=s,Object.setPrototypeOf(o,e.prototype),o.customData={appName:n.name,tenantId:(l=n.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:r.customData._serverResponse,operationType:i},o}return e._fromErrorAndOperation=function(n,r,i,s){return new e(n,r,i,s)},e}($t);function Fy(t,e,n,r){var i=e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch(function(s){throw s.code==="auth/".concat("multi-factor-auth-required")?NR._fromErrorAndOperation(t,s,e,r):s})}function PR(t,e,n){return n===void 0&&(n=!1),y(this,void 0,void 0,function(){var r,i,s,o,l,a;return w(this,function(u){switch(u.label){case 0:return i=zs,s=[t],l=(o=e)._linkToIdToken,a=[t.auth],[4,t.getIdToken()];case 1:return[4,i.apply(void 0,s.concat([l.apply(o,a.concat([u.sent()])),n]))];case 2:return r=u.sent(),[2,bh._forOperation(t,"link",r)]}})})}/**
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
 */function AR(t,e,n){return n===void 0&&(n=!1),y(this,void 0,void 0,function(){var r,i,s,o,l,a;return w(this,function(u){switch(u.label){case 0:if(r=t.auth,Jt(r.app))return[2,Promise.reject(hr(r))];i="reauthenticate",u.label=1;case 1:return u.trys.push([1,3,,4]),[4,zs(t,Fy(r,i,e,t),n)];case 2:return s=u.sent(),L(s.idToken,r,"internal-error"),o=Rh(s.idToken),L(o,r,"internal-error"),l=o.sub,L(t.uid===l,r,"user-mismatch"),[2,bh._forOperation(t,i,s)];case 3:throw a=u.sent(),(a==null?void 0:a.code)==="auth/".concat("user-not-found")&&lt(r,"user-mismatch"),a;case 4:return[2]}})})}/**
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
 */function bR(t,e,n){return n===void 0&&(n=!1),y(this,void 0,void 0,function(){var r,i,s;return w(this,function(o){switch(o.label){case 0:return Jt(t.app)?[2,Promise.reject(hr(t))]:(r="signIn",[4,Fy(t,r,e)]);case 1:return i=o.sent(),[4,bh._fromIdTokenResponse(t,r,i)];case 2:return s=o.sent(),n?[3,4]:[4,t._updateCurrentUser(s.user)];case 3:o.sent(),o.label=4;case 4:return[2,s]}})})}/**
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
 */var Uy=function(){function t(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}return t._fromServerResponse=function(e,n){return"phoneInfo"in n?OR._fromServerResponse(e,n):"totpInfo"in n?xR._fromServerResponse(e,n):lt(e,"internal-error")},t}(),OR=function(t){ie(e,t);function e(n){var r=t.call(this,"phone",n)||this;return r.phoneNumber=n.phoneInfo,r}return e._fromServerResponse=function(n,r){return new e(r)},e}(Uy),xR=function(t){ie(e,t);function e(n){return t.call(this,"totp",n)||this}return e._fromServerResponse=function(n,r){return new e(r)},e}(Uy),Oh=function(){function t(e,n,r){r===void 0&&(r={}),this.isNewUser=e,this.providerId=n,this.profile=r}return t}(),By=function(t){ie(e,t);function e(n,r,i,s){var o=t.call(this,n,r,i)||this;return o.username=s,o}return e}(Oh);(function(t){ie(e,t);function e(n,r){return t.call(this,n,"facebook.com",r)||this}return e})(Oh);(function(t){ie(e,t);function e(n,r){return t.call(this,n,"github.com",r,typeof(r==null?void 0:r.login)=="string"?r==null?void 0:r.login:null)||this}return e})(By);(function(t){ie(e,t);function e(n,r){return t.call(this,n,"google.com",r)||this}return e})(Oh);(function(t){ie(e,t);function e(n,r,i){return t.call(this,n,"twitter.com",r,i)||this}return e})(By);var am="@firebase/auth",um="1.7.7";/**
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
 */var DR=function(){function t(e){this.auth=e,this.internalListeners=new Map}return t.prototype.getUid=function(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null},t.prototype.getToken=function(e){return y(this,void 0,void 0,function(){var n;return w(this,function(r){switch(r.label){case 0:return this.assertAuthConfigured(),[4,this.auth._initializationPromise];case 1:return r.sent(),this.auth.currentUser?[4,this.auth.currentUser.getIdToken(e)]:[2,null];case 2:return n=r.sent(),[2,{accessToken:n}]}})})},t.prototype.addAuthTokenListener=function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var n=this.auth.onIdTokenChanged(function(r){e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}},t.prototype.removeAuthTokenListener=function(e){this.assertAuthConfigured();var n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())},t.prototype.assertAuthConfigured=function(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")},t.prototype.updateProactiveRefresh=function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()},t}();/**
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
 */function LR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function MR(t){un(new Et("auth",function(e,n){var r=n.options,i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),l=i.options,a=l.apiKey,u=l.authDomain;L(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});var d={apiKey:a,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ly(t)},c=new uR(i,s,o,d);return gR(c,r),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(function(e,n,r){var i=e.getProvider("auth-internal");i.initialize()})),un(new Et("auth-internal",function(e){var n=Ph(e.getProvider("auth").getImmediate());return function(r){return new DR(r)}(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rt(am,um,LR(t)),rt(am,um,"esm5")}/**
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
 */var zy=function(){function t(e,n){this.storageRetriever=e,this.type=n}return t.prototype._isAvailable=function(){try{return this.storage?(this.storage.setItem(Ml,"1"),this.storage.removeItem(Ml),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}},t.prototype._set=function(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()},t.prototype._get=function(e){var n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)},t.prototype._remove=function(e){return this.storage.removeItem(e),Promise.resolve()},Object.defineProperty(t.prototype,"storage",{get:function(){return this.storageRetriever()},enumerable:!1,configurable:!0}),t}();/**
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
 */var FR=1e3,UR=10,BR=function(t){ie(e,t);function e(){var n=t.call(this,function(){return window.localStorage},"LOCAL")||this;return n.boundEventHandler=function(r,i){return n.onStorageEvent(r,i)},n.listeners={},n.localCache={},n.pollTimer=null,n.fallbackToPolling=iR(),n._shouldAllowMigration=!0,n}return e.prototype.forAllChangedKeys=function(n){for(var r=0,i=Object.keys(this.listeners);r<i.length;r++){var s=i[r],o=this.storage.getItem(s),l=this.localCache[s];o!==l&&n(s,l,o)}},e.prototype.onStorageEvent=function(n,r){var i=this;if(r===void 0&&(r=!1),!n.key){this.forAllChangedKeys(function(a,u,d){i.notifyListeners(a,d)});return}var s=n.key;r?this.detachListener():this.stopPolling();var o=function(){var a=i.storage.getItem(s);!r&&i.localCache[s]===a||i.notifyListeners(s,a)},l=this.storage.getItem(s);rR()&&l!==n.newValue&&n.newValue!==n.oldValue?setTimeout(o,UR):o()},e.prototype.notifyListeners=function(n,r){this.localCache[n]=r;var i=this.listeners[n];if(i)for(var s=0,o=Array.from(i);s<o.length;s++){var l=o[s];l(r&&JSON.parse(r))}},e.prototype.startPolling=function(){var n=this;this.stopPolling(),this.pollTimer=setInterval(function(){n.forAllChangedKeys(function(r,i,s){n.onStorageEvent(new StorageEvent("storage",{key:r,oldValue:i,newValue:s}),!0)})},FR)},e.prototype.stopPolling=function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)},e.prototype.attachListener=function(){window.addEventListener("storage",this.boundEventHandler)},e.prototype.detachListener=function(){window.removeEventListener("storage",this.boundEventHandler)},e.prototype._addListener=function(n,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[n]||(this.listeners[n]=new Set,this.localCache[n]=this.storage.getItem(n)),this.listeners[n].add(r)},e.prototype._removeListener=function(n,r){this.listeners[n]&&(this.listeners[n].delete(r),this.listeners[n].size===0&&delete this.listeners[n]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())},e.prototype._set=function(n,r){return y(this,void 0,void 0,function(){return w(this,function(i){switch(i.label){case 0:return[4,t.prototype._set.call(this,n,r)];case 1:return i.sent(),this.localCache[n]=JSON.stringify(r),[2]}})})},e.prototype._get=function(n){return y(this,void 0,void 0,function(){var r;return w(this,function(i){switch(i.label){case 0:return[4,t.prototype._get.call(this,n)];case 1:return r=i.sent(),this.localCache[n]=JSON.stringify(r),[2,r]}})})},e.prototype._remove=function(n){return y(this,void 0,void 0,function(){return w(this,function(r){switch(r.label){case 0:return[4,t.prototype._remove.call(this,n)];case 1:return r.sent(),delete this.localCache[n],[2]}})})},e.type="LOCAL",e}(zy),zR=BR;/**
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
 */var jR=function(t){ie(e,t);function e(){return t.call(this,function(){return window.sessionStorage},"SESSION")||this}return e.prototype._addListener=function(n,r){},e.prototype._removeListener=function(n,r){},e.type="SESSION",e}(zy),WR=jR;/**
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
 */function VR(t,e){return e?Ut(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */var xh=function(t){ie(e,t);function e(n){var r=t.call(this,"custom","custom")||this;return r.params=n,r}return e.prototype._getIdTokenResponse=function(n){return nn(n,this._buildIdpRequest())},e.prototype._linkToIdToken=function(n,r){return nn(n,this._buildIdpRequest(r))},e.prototype._getReauthenticationResolver=function(n){return nn(n,this._buildIdpRequest())},e.prototype._buildIdpRequest=function(n){var r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return n&&(r.idToken=n),r},e}(lo);function HR(t){return bR(t.auth,new xh(t),t.bypassAuthState)}function $R(t){var e=t.auth,n=t.user;return L(n,e,"internal-error"),AR(n,new xh(t),t.bypassAuthState)}function GR(t){return y(this,void 0,void 0,function(){var e,n;return w(this,function(r){return e=t.auth,n=t.user,L(n,e,"internal-error"),[2,PR(n,new xh(t),t.bypassAuthState)]})})}/**
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
 */var KR=function(){function t(e,n,r,i,s){s===void 0&&(s=!1),this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}return t.prototype.execute=function(){var e=this;return new Promise(function(n,r){return y(e,void 0,void 0,function(){var i,s;return w(this,function(o){switch(o.label){case 0:this.pendingPromise={resolve:n,reject:r},o.label=1;case 1:return o.trys.push([1,4,,5]),i=this,[4,this.resolver._initialize(this.auth)];case 2:return i.eventManager=o.sent(),[4,this.onExecution()];case 3:return o.sent(),this.eventManager.registerConsumer(this),[3,5];case 4:return s=o.sent(),this.reject(s),[3,5];case 5:return[2]}})})})},t.prototype.onAuthEvent=function(e){return y(this,void 0,void 0,function(){var n,r,i,s,o,l,a,u,d;return w(this,function(c){switch(c.label){case 0:if(n=e.urlResponse,r=e.sessionId,i=e.postBody,s=e.tenantId,o=e.error,l=e.type,o)return this.reject(o),[2];a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState},c.label=1;case 1:return c.trys.push([1,3,,4]),u=this.resolve,[4,this.getIdpTask(l)(a)];case 2:return u.apply(this,[c.sent()]),[3,4];case 3:return d=c.sent(),this.reject(d),[3,4];case 4:return[2]}})})},t.prototype.onError=function(e){this.reject(e)},t.prototype.getIdpTask=function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return HR;case"linkViaPopup":case"linkViaRedirect":return GR;case"reauthViaPopup":case"reauthViaRedirect":return $R;default:lt(this.auth,"internal-error")}},t.prototype.resolve=function(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()},t.prototype.reject=function(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()},t.prototype.unregisterAndCleanUp=function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()},t}();/**
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
 */var QR="pendingRedirect",as=new Map,qR=function(t){ie(e,t);function e(n,r,i){i===void 0&&(i=!1);var s=t.call(this,n,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,i)||this;return s.eventId=null,s}return e.prototype.execute=function(){return y(this,void 0,void 0,function(){var n,r,i,s,o;return w(this,function(l){switch(l.label){case 0:if(n=as.get(this.auth._key()),n)return[3,8];l.label=1;case 1:return l.trys.push([1,6,,7]),[4,YR(this.resolver,this.auth)];case 2:return r=l.sent(),r?[4,t.prototype.execute.call(this)]:[3,4];case 3:return s=l.sent(),[3,5];case 4:s=null,l.label=5;case 5:return i=s,n=function(){return Promise.resolve(i)},[3,7];case 6:return o=l.sent(),n=function(){return Promise.reject(o)},[3,7];case 7:as.set(this.auth._key(),n),l.label=8;case 8:return this.bypassAuthState||as.set(this.auth._key(),function(){return Promise.resolve(null)}),[2,n()]}})})},e.prototype.onAuthEvent=function(n){return y(this,void 0,void 0,function(){var r;return w(this,function(i){switch(i.label){case 0:return n.type==="signInViaRedirect"?[2,t.prototype.onAuthEvent.call(this,n)]:n.type==="unknown"?(this.resolve(null),[2]):n.eventId?[4,this.auth._redirectUserForId(n.eventId)]:[3,2];case 1:if(r=i.sent(),r)return this.user=r,[2,t.prototype.onAuthEvent.call(this,n)];this.resolve(null),i.label=2;case 2:return[2]}})})},e.prototype.onExecution=function(){return y(this,void 0,void 0,function(){return w(this,function(n){return[2]})})},e.prototype.cleanUp=function(){},e}(KR);function YR(t,e){return y(this,void 0,void 0,function(){var n,r,i;return w(this,function(s){switch(s.label){case 0:return n=eN(e),r=ZR(t),[4,r._isAvailable()];case 1:return s.sent()?[4,r._get(n)]:[2,!1];case 2:return i=s.sent()==="true",[4,r._remove(n)];case 3:return s.sent(),[2,i]}})})}function JR(){as.clear()}function XR(t,e){as.set(t._key(),e)}function ZR(t){return Ut(t._redirectPersistence)}function eN(t){return ls(QR,t.config.apiKey,t.name)}function tN(t,e,n){return n===void 0&&(n=!1),y(this,void 0,void 0,function(){var r,i,s,o;return w(this,function(l){switch(l.label){case 0:return Jt(t.app)?[2,Promise.reject(hr(t))]:(r=Ph(t),i=VR(r,e),s=new qR(r,i,n),[4,s.execute()]);case 1:return o=l.sent(),o&&!n?(delete o.user._redirectEventId,[4,r._persistUserIfCurrent(o.user)]):[3,4];case 2:return l.sent(),[4,r._setRedirectUser(null,e)];case 3:l.sent(),l.label=4;case 4:return[2,o]}})})}/**
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
 */var nN="__/auth/handler",rN="emulator/auth/handler",iN=encodeURIComponent("fac");function sN(t,e,n,r,i,s){return y(this,void 0,void 0,function(){var o,l,a,u,_,d,c,h,p,v,_,C,m;return w(this,function(f){switch(f.label){case 0:if(L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key"),o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:qn,eventId:i},e instanceof Ah)for(e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",yl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters())),l=0,a=Object.entries(s||{});l<a.length;l++)u=a[l],_=u[0],d=u[1],o[_]=d;for(e instanceof ki&&(c=e.getScopes().filter(function(g){return g!==""}),c.length>0&&(o.scopes=c.join(","))),t.tenantId&&(o.tid=t.tenantId),h=o,p=0,v=Object.keys(h);p<v.length;p++)_=v[p],h[_]===void 0&&delete h[_];return[4,t._getAppCheckToken()];case 1:return C=f.sent(),m=C?"#".concat(iN,"=").concat(encodeURIComponent(C)):"",[2,"".concat(oN(t),"?").concat(Gs(h).slice(1)).concat(m)]}})})}function oN(t){var e=t.config;return e.emulator?ky(e,rN):"https://".concat(e.authDomain,"/").concat(nN)}/**
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
 */function Sr(){return window}/**
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
 */function lN(t,e){return e===void 0&&(e={}),y(this,void 0,void 0,function(){return w(this,function(n){return[2,Jn(t,"GET","/v1/projects",e)]})})}/**
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
 */var aN=2e3;function uN(t,e,n){var r;return y(this,void 0,void 0,function(){var i,s,o;return w(this,function(l){switch(l.label){case 0:return i=Sr().BuildInfo,$n(e.sessionId,"AuthEvent did not contain a session ID"),[4,pN(e.sessionId)];case 1:return s=l.sent(),o={},Nh()?o.ibi=i.packageName:oo()?o.apn=i.packageName:lt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,[2,sN(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)]}})})}function cN(t){return y(this,void 0,void 0,function(){var e,n;return w(this,function(r){switch(r.label){case 0:return e=Sr().BuildInfo,n={},Nh()?n.iosBundleId=e.packageName:oo()?n.androidPackageName=e.packageName:lt(t,"operation-not-supported-in-this-environment"),[4,lN(t,n)];case 1:return r.sent(),[2]}})})}function dN(t){var e=Sr().cordova;return new Promise(function(n){e.plugins.browsertab.isAvailable(function(r){var i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,nR()?"_blank":"_system","location=yes"),n(i)})})}function hN(t,e,n){return y(this,void 0,void 0,function(){var r,i;return w(this,function(s){switch(s.label){case 0:r=Sr().cordova,i=function(){},s.label=1;case 1:return s.trys.push([1,,3,4]),[4,new Promise(function(o,l){var a=null;function u(){var h;o();var p=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof p=="function"&&p(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function d(){a||(a=window.setTimeout(function(){l(br(t,"redirect-cancelled-by-user"))},aN))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&d()}e.addPassiveListener(u),document.addEventListener("resume",d,!1),oo()&&document.addEventListener("visibilitychange",c,!1),i=function(){e.removePassiveListener(u),document.removeEventListener("resume",d,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})];case 2:return s.sent(),[3,4];case 3:return i(),[7];case 4:return[2]}})})}function fN(t){var e,n,r,i,s,o,l,a,u,d,c=Sr();L(typeof((e=c==null?void 0:c.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),L(typeof((n=c==null?void 0:c.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),L(typeof((s=(i=(r=c==null?void 0:c.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),L(typeof((a=(l=(o=c==null?void 0:c.cordova)===null||o===void 0?void 0:o.plugins)===null||l===void 0?void 0:l.browsertab)===null||a===void 0?void 0:a.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),L(typeof((d=(u=c==null?void 0:c.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}function pN(t){return y(this,void 0,void 0,function(){var e,n,r;return w(this,function(i){switch(i.label){case 0:return e=mN(t),[4,crypto.subtle.digest("SHA-256",e)];case 1:return n=i.sent(),r=Array.from(new Uint8Array(n)),[2,r.map(function(s){return s.toString(16).padStart(2,"0")}).join("")]}})})}function mN(t){if($n(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);for(var e=new ArrayBuffer(t.length),n=new Uint8Array(e),r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */var gN=10*60*1e3,vN=function(){function t(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return t.prototype.registerConsumer=function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)},t.prototype.unregisterConsumer=function(e){this.consumers.delete(e)},t.prototype.onEvent=function(e){var n=this;if(this.hasEventBeenHandled(e))return!1;var r=!1;return this.consumers.forEach(function(i){n.isEventForConsumer(e,i)&&(r=!0,n.sendToConsumer(e,i),n.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_N(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r},t.prototype.sendToConsumer=function(e,n){var r;if(e.error&&!jy(e)){var i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(br(this.auth,i))}else n.onAuthEvent(e)},t.prototype.isEventForConsumer=function(e,n){var r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r},t.prototype.hasEventBeenHandled=function(e){return Date.now()-this.lastProcessedEventTime>=gN&&this.cachedEventUids.clear(),this.cachedEventUids.has(cm(e))},t.prototype.saveEventToCache=function(e){this.cachedEventUids.add(cm(e)),this.lastProcessedEventTime=Date.now()},t}();function cm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(function(e){return e}).join("-")}function jy(t){var e=t.type,n=t.error;return e==="unknown"&&(n==null?void 0:n.code)==="auth/".concat("no-auth-event")}function _N(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jy(t);default:return!1}}/**
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
 */var yN=20,wN=function(t){ie(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.passiveListeners=new Set,n.initPromise=new Promise(function(r){n.resolveInitialized=r}),n}return e.prototype.addPassiveListener=function(n){this.passiveListeners.add(n)},e.prototype.removePassiveListener=function(n){this.passiveListeners.delete(n)},e.prototype.resetRedirect=function(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1},e.prototype.onEvent=function(n){return this.resolveInitialized(),this.passiveListeners.forEach(function(r){return r(n)}),t.prototype.onEvent.call(this,n)},e.prototype.initialized=function(){return y(this,void 0,void 0,function(){return w(this,function(n){switch(n.label){case 0:return[4,this.initPromise];case 1:return n.sent(),[2]}})})},e}(vN);function EN(t,e,n){return n===void 0&&(n=null),{type:e,eventId:n,urlResponse:null,sessionId:IN(),postBody:null,tenantId:t.tenantId,error:br(t,"no-auth-event")}}function CN(t,e){return Bc()._set(zc(t),e)}function dm(t){return y(this,void 0,void 0,function(){var e;return w(this,function(n){switch(n.label){case 0:return[4,Bc()._get(zc(t))];case 1:return e=n.sent(),e?[4,Bc()._remove(zc(t))]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2,e]}})})}function SN(t,e){var n,r,i=kN(e);if(i.includes("/__/auth/callback")){var s=Go(i),o=s.firebaseError?TN(decodeURIComponent(s.firebaseError)):null,l=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],a=l?br(l):null;return a?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function IN(){for(var t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",n=0;n<yN;n++){var r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Bc(){return Ut(zR)}function zc(t){return ls("authEvent",t.config.apiKey,t.name)}function TN(t){try{return JSON.parse(t)}catch{return null}}function kN(t){var e=Go(t),n=e.link?decodeURIComponent(e.link):void 0,r=Go(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0,s=Go(i).link;return s||i||r||n||t}function Go(t){if(!(t!=null&&t.includes("?")))return{};var e=t.split("?");e[0];var n=e.slice(1);return XE(n.join("?"))}/**
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
 */var RN=500,NN=function(){function t(){this._redirectPersistence=WR,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=tN,this._overrideRedirectResult=XR}return t.prototype._initialize=function(e){return y(this,void 0,void 0,function(){var n,r;return w(this,function(i){return n=e._key(),r=this.eventManagers.get(n),r||(r=new wN(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),[2,r]})})},t.prototype._openPopup=function(e){lt(e,"operation-not-supported-in-this-environment")},t.prototype._openRedirect=function(e,n,r,i){return y(this,void 0,void 0,function(){var s,o,l,a;return w(this,function(u){switch(u.label){case 0:return fN(e),[4,this._initialize(e)];case 1:return s=u.sent(),[4,s.initialized()];case 2:return u.sent(),s.resetRedirect(),JR(),[4,this._originValidation(e)];case 3:return u.sent(),o=EN(e,r,i),[4,CN(e,o)];case 4:return u.sent(),[4,uN(e,o,n)];case 5:return l=u.sent(),[4,dN(l)];case 6:return a=u.sent(),[2,hN(e,s,a)]}})})},t.prototype._isIframeWebStorageSupported=function(e,n){throw new Error("Method not implemented.")},t.prototype._originValidation=function(e){var n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cN(e)),this.originValidationPromises[n]},t.prototype.attachCallbackListeners=function(e,n){var r=this,i=Sr(),s=i.universalLinks,o=i.handleOpenURL,l=i.BuildInfo,a=setTimeout(function(){return y(r,void 0,void 0,function(){return w(this,function(h){switch(h.label){case 0:return[4,dm(e)];case 1:return h.sent(),n.onEvent(hm()),[2]}})})},RN),u=function(h){return y(r,void 0,void 0,function(){var p,v;return w(this,function(_){switch(_.label){case 0:return clearTimeout(a),[4,dm(e)];case 1:return p=_.sent(),v=null,p&&(h!=null&&h.url)&&(v=SN(p,h.url)),n.onEvent(v||hm()),[2]}})})};typeof s<"u"&&typeof s.subscribe=="function"&&s.subscribe(null,u);var d=o,c="".concat(l.packageName.toLowerCase(),"://");Sr().handleOpenURL=function(h){return y(r,void 0,void 0,function(){return w(this,function(p){if(h.toLowerCase().startsWith(c)&&u({url:h}),typeof d=="function")try{d(h)}catch(v){console.error(v)}return[2]})})}},t}(),PN=NN;function hm(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:br("no-auth-event")}}/**
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
 */function AN(t){t===void 0&&(t=Wd());var e=Qs(t,"auth");return e.isInitialized()?e.getImmediate():mR(t,{persistence:b1,popupRedirectResolver:PN})}MR("Cordova");/**
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
 */const Wy="firebasestorage.googleapis.com",Vy="storageBucket",bN=2*60*1e3,ON=10*60*1e3;/**
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
 */class de extends $t{constructor(e,n,r=0){super(mu(e),`Firebase Storage: ${n} (${mu(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,de.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return mu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ce;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ce||(ce={}));function mu(t){return"storage/"+t}function Dh(){const t="An unknown error occurred, please check the error payload for server response.";return new de(ce.UNKNOWN,t)}function xN(t){return new de(ce.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function DN(t){return new de(ce.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function LN(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new de(ce.UNAUTHENTICATED,t)}function MN(){return new de(ce.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function FN(t){return new de(ce.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function UN(){return new de(ce.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function BN(){return new de(ce.CANCELED,"User canceled the upload/download.")}function zN(t){return new de(ce.INVALID_URL,"Invalid URL '"+t+"'.")}function jN(t){return new de(ce.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function WN(){return new de(ce.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Vy+"' property when initializing the app?")}function VN(){return new de(ce.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function HN(){return new de(ce.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function $N(t){return new de(ce.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function jc(t){return new de(ce.INVALID_ARGUMENT,t)}function Hy(){return new de(ce.APP_DELETED,"The Firebase app was deleted.")}function GN(t){return new de(ce.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function us(t,e){return new de(ce.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ji(t){throw new de(ce.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class tt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=tt.makeFromUrl(e,n)}catch{return new tt(e,"")}if(r.path==="")return r;throw jN(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),a={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const d="v[A-Za-z0-9_]+",c=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",p=new RegExp(`^https?://${c}/${d}/b/${i}/o${h}`,"i"),v={bucket:1,path:3},_=n===Wy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",m=new RegExp(`^https?://${_}/${i}/${C}`,"i"),g=[{regex:l,indices:a,postModify:s},{regex:p,indices:v,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<g.length;E++){const T=g[E],R=T.regex.exec(e);if(R){const P=R[T.indices.bucket];let A=R[T.indices.path];A||(A=""),r=new tt(P,A),T.postModify(r);break}}if(r==null)throw zN(e);return r}}class KN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function QN(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function a(){return l===2}let u=!1;function d(...C){u||(u=!0,e.apply(null,C))}function c(C){i=setTimeout(()=>{i=null,t(p,a())},C)}function h(){s&&clearTimeout(s)}function p(C,...m){if(u){h();return}if(C){h(),d.call(null,C,...m);return}if(a()||o){h(),d.call(null,C,...m);return}r<64&&(r*=2);let g;l===1?(l=2,g=0):g=(r+Math.random())*1e3,c(g)}let v=!1;function _(C){v||(v=!0,h(),!u&&(i!==null?(C||(l=2),clearTimeout(i),c(0)):C||(l=1)))}return c(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function qN(t){t(!1)}/**
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
 */function YN(t){return t!==void 0}function JN(t){return typeof t=="object"&&!Array.isArray(t)}function Lh(t){return typeof t=="string"||t instanceof String}function fm(t){return Mh()&&t instanceof Blob}function Mh(){return typeof Blob<"u"}function pm(t,e,n,r){if(r<e)throw jc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw jc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Fh(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function $y(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var fr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(fr||(fr={}));/**
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
 */function XN(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class ZN{constructor(e,n,r,i,s,o,l,a,u,d,c,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=c,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,v)=>{this.resolve_=p,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ao(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const a=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===fr.NO_ERROR,a=s.getStatus();if(!l||XN(a,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===fr.ABORT;r(!1,new Ao(!1,null,d));return}const u=this.successCodes_.indexOf(a)!==-1;r(!0,new Ao(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());YN(a)?s(a):s()}catch(a){o(a)}else if(l!==null){const a=Dh();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(i.canceled){const a=this.appDelete_?Hy():BN();o(a)}else{const a=UN();o(a)}};this.canceled_?n(!1,new Ao(!1,null,!0)):this.backoffId_=QN(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&qN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ao{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function eP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function tP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function nP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function rP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function iP(t,e,n,r,i,s,o=!0){const l=$y(t.urlParams),a=t.url+l,u=Object.assign({},t.headers);return nP(u,e),eP(u,n),tP(u,s),rP(u,r),new ZN(a,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function sP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function oP(...t){const e=sP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Mh())return new Blob(t);throw new de(ce.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function lP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function aP(t){if(typeof atob>"u")throw $N("base-64");return atob(t)}/**
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
 */const Bt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class gu{constructor(e,n){this.data=e,this.contentType=n||null}}function uP(t,e){switch(t){case Bt.RAW:return new gu(Gy(e));case Bt.BASE64:case Bt.BASE64URL:return new gu(Ky(t,e));case Bt.DATA_URL:return new gu(dP(e),hP(e))}throw Dh()}function Gy(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function cP(t){let e;try{e=decodeURIComponent(t)}catch{throw us(Bt.DATA_URL,"Malformed data URL.")}return Gy(e)}function Ky(t,e){switch(t){case Bt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw us(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Bt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw us(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=aP(e)}catch(i){throw i.message.includes("polyfill")?i:us(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Qy{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw us(Bt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=fP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function dP(t){const e=new Qy(t);return e.base64?Ky(Bt.BASE64,e.rest):cP(e.rest)}function hP(t){return new Qy(t).contentType}function fP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class yn{constructor(e,n){let r=0,i="";fm(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(fm(this.data_)){const r=this.data_,i=lP(r,e,n);return i===null?null:new yn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new yn(r,!0)}}static getBlob(...e){if(Mh()){const n=e.map(r=>r instanceof yn?r.data_:r);return new yn(oP.apply(null,n))}else{const n=e.map(o=>Lh(o)?uP(Bt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new yn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function qy(t){let e;try{e=JSON.parse(t)}catch{return null}return JN(e)?e:null}/**
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
 */function pP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function mP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Yy(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function gP(t,e){return e}class Fe{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||gP}}let bo=null;function vP(t){return!Lh(t)||t.length<2?t:Yy(t)}function Jy(){if(bo)return bo;const t=[];t.push(new Fe("bucket")),t.push(new Fe("generation")),t.push(new Fe("metageneration")),t.push(new Fe("name","fullPath",!0));function e(s,o){return vP(o)}const n=new Fe("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Fe("size");return i.xform=r,t.push(i),t.push(new Fe("timeCreated")),t.push(new Fe("updated")),t.push(new Fe("md5Hash",null,!0)),t.push(new Fe("cacheControl",null,!0)),t.push(new Fe("contentDisposition",null,!0)),t.push(new Fe("contentEncoding",null,!0)),t.push(new Fe("contentLanguage",null,!0)),t.push(new Fe("contentType",null,!0)),t.push(new Fe("metadata","customMetadata",!0)),bo=t,bo}function _P(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new tt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function yP(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return _P(r,t),r}function Xy(t,e,n){const r=qy(e);return r===null?null:yP(t,r,n)}function wP(t,e,n,r){const i=qy(e);if(i===null||!Lh(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const d=t.bucket,c=t.fullPath,h="/b/"+o(d)+"/o/"+o(c),p=Fh(h,n,r),v=$y({alt:"media",token:u});return p+v})[0]}function EP(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Zy{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function e0(t){if(!t)throw Dh()}function CP(t,e){function n(r,i){const s=Xy(t,i,e);return e0(s!==null),s}return n}function SP(t,e){function n(r,i){const s=Xy(t,i,e);return e0(s!==null),wP(s,i,t.host,t._protocol)}return n}function t0(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=MN():i=LN():n.getStatus()===402?i=DN(t.bucket):n.getStatus()===403?i=FN(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function IP(t){const e=t0(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=xN(t.path)),s.serverResponse=i.serverResponse,s}return n}function TP(t,e,n){const r=e.fullServerUrl(),i=Fh(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new Zy(i,s,SP(t,n),o);return l.errorHandler=IP(e),l}function kP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function RP(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=kP(null,e)),r}function NP(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let g="";for(let E=0;E<2;E++)g=g+Math.random().toString().slice(2);return g}const a=l();o["Content-Type"]="multipart/related; boundary="+a;const u=RP(e,r,i),d=EP(u,n),c="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+a+`\r
Content-Type: `+u.contentType+`\r
\r
`,h=`\r
--`+a+"--",p=yn.getBlob(c,r,h);if(p===null)throw VN();const v={name:u.fullPath},_=Fh(s,t.host,t._protocol),C="POST",m=t.maxUploadRetryTime,f=new Zy(_,C,CP(t,n),m);return f.urlParams=v,f.headers=o,f.body=p.uploadData(),f.errorHandler=t0(e),f}class PP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=fr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=fr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=fr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw ji("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ji("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ji("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ji("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ji("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class AP extends PP{initXhr(){this.xhr_.responseType="text"}}function n0(){return new AP}/**
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
 */class Ir{constructor(e,n){this._service=e,n instanceof tt?this._location=n:this._location=tt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ir(e,n)}get root(){const e=new tt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Yy(this._location.path)}get storage(){return this._service}get parent(){const e=pP(this._location.path);if(e===null)return null;const n=new tt(this._location.bucket,e);return new Ir(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw GN(e)}}function bP(t,e,n){t._throwIfRoot("uploadBytes");const r=NP(t.storage,t._location,Jy(),new yn(e,!0),n);return t.storage.makeRequestWithTokens(r,n0).then(i=>({metadata:i,ref:t}))}function OP(t){t._throwIfRoot("getDownloadURL");const e=TP(t.storage,t._location,Jy());return t.storage.makeRequestWithTokens(e,n0).then(n=>{if(n===null)throw HN();return n})}function xP(t,e){const n=mP(t._location.path,e),r=new tt(t._location.bucket,n);return new Ir(t.storage,r)}/**
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
 */function DP(t){return/^[A-Za-z]+:\/\//.test(t)}function LP(t,e){return new Ir(t,e)}function r0(t,e){if(t instanceof Uh){const n=t;if(n._bucket==null)throw WN();const r=new Ir(n,n._bucket);return e!=null?r0(r,e):r}else return e!==void 0?xP(t,e):t}function MP(t,e){if(e&&DP(e)){if(t instanceof Uh)return LP(t,e);throw jc("To use ref(service, url), the first argument must be a Storage instance.")}else return r0(t,e)}function mm(t,e){const n=e==null?void 0:e[Vy];return n==null?null:tt.makeFromBucketSpec(n,t)}function FP(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Uv(i,t.app.options.projectId))}class Uh{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Wy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=bN,this._maxUploadRetryTime=ON,this._requests=new Set,i!=null?this._bucket=tt.makeFromBucketSpec(i,this._host):this._bucket=mm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=tt.makeFromBucketSpec(this._url,e):this._bucket=mm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){pm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){pm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ir(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new KN(Hy());{const o=iP(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const gm="@firebase/storage",vm="0.13.0";/**
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
 */const i0="storage";function UP(t,e,n){return t=pe(t),bP(t,e,n)}function BP(t){return t=pe(t),OP(t)}function zP(t,e){return t=pe(t),MP(t,e)}function jP(t=Wd(),e){t=pe(t);const r=Qs(t,i0).getImmediate({identifier:e}),i=jE("storage");return i&&WP(r,...i),r}function WP(t,e,n,r={}){FP(t,e,n,r)}function VP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Uh(n,r,i,e,qn)}function HP(){un(new Et(i0,VP,"PUBLIC").setMultipleInstances(!0)),rt(gm,vm,""),rt(gm,vm,"esm2017")}HP();const $P={apiKey:"AIzaSyBbkWAxTWNTDHDfVqBbXOW0_8UtbhGAgzE",authDomain:"hostel-aab47.firebaseapp.com",projectId:"hostel-aab47",storageBucket:"hostel-aab47.appspot.com",messagingSenderId:"183580222805",appId:"1:183580222805:web:bbba1193174606891afbdc",measurementId:"G-Y87BHYEC41"};var s0=ra.initializeApp($P);ra.firestore;const GP=jP(s0);AN();const vu=s0.database().ref();var Re=[];for(var _u=0;_u<256;++_u)Re.push((_u+256).toString(16).slice(1));function KP(t,e=0){return(Re[t[e+0]]+Re[t[e+1]]+Re[t[e+2]]+Re[t[e+3]]+"-"+Re[t[e+4]]+Re[t[e+5]]+"-"+Re[t[e+6]]+Re[t[e+7]]+"-"+Re[t[e+8]]+Re[t[e+9]]+"-"+Re[t[e+10]]+Re[t[e+11]]+Re[t[e+12]]+Re[t[e+13]]+Re[t[e+14]]+Re[t[e+15]]).toLowerCase()}var Oo,QP=new Uint8Array(16);function qP(){if(!Oo&&(Oo=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Oo))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Oo(QP)}var YP=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const _m={randomUUID:YP};function JP(t,e,n){if(_m.randomUUID&&!e&&!t)return _m.randomUUID();t=t||{};var r=t.random||(t.rng||qP)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,KP(r)}function XP(){const[t,e]=gn.useState({date:"",name:"",adhar_num:"",mobile_num:"",status:"",room_number:"",floor_number:"",price:"",Tenant_img:"",due_date:""}),[n,r]=gn.useState(null),[i,s]=gn.useState({adhar:"",mobile:""}),[o,l]=gn.useState({}),a=/^\d{12}$/,u=/^[6-9]\d{9}$/;gn.useEffect(()=>{(async()=>{const C={},m=["G1","G2","A1","A2","A3","A4","A5","A6","A7","B1","B2","B3","B4","B5","B6","C1","C2","C3","C4"];for(const f of m){const E=(await vu.child(f).once("value")).val();E?C[f]=Object.keys(E).map(T=>({id:T,...E[T]})):C[f]=[]}l(C)})()},[]);const d=async _=>{if(!_)return;const C=zP(GP,`file/${JP()}`);return await UP(C,_),await BP(C)},c={G1:6,G2:6,A1:6,A2:6,A3:2,A4:5,A5:3,A6:1,A7:2,B1:6,B2:6,B3:3,B4:4,B5:6,B6:1,C1:1,C2:1,C3:1,C4:1},h=async _=>{if(_.preventDefault(),t.adhar_num.trim()===""){s({...i,adhar:"Enter Aadhaar Number"});return}else if(a.test(t.adhar_num))s({...i,adhar:""});else{s({...i,adhar:"Enter valid Aadhaar Number"});return}if(t.mobile_num.trim()===""){s({...i,mobile:"Enter Mobile Number"});return}else if(u.test(t.mobile_num))s({...i,mobile:""});else{s({...i,mobile:"Enter valid Mobile Number"});return}const C=t.room_number,m=c[C]||6,f=await vu.child(C).get();if(f.exists()&&Object.keys(f.val()).length>=m){alert(`You cannot add more than ${m} records in this room.`);return}try{const g=await d(n),E={...t,student_img:g};await vu.child(C).push(E),alert("Data saved successfully!"),e({date:"",name:"",adhar_num:"",mobile_num:"",status:"",room_number:"",floor_number:"",price:"",student_img:""}),r(null)}catch(g){console.error("Error saving data:",g)}},p=_=>{const{name:C,value:m}=_.target;e(C==="date"?{...t,[C]:m,due_date:v(m)}:{...t,[C]:m})},v=_=>{const C=new Date(_);return C.setDate(C.getDate()+30),C.toISOString().split("T")[0]};return x.jsx("div",{className:"relative",children:x.jsx("div",{className:"container mt-3",children:x.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50",id:"exampleModal","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:x.jsx("div",{className:"modal-dialog bg-white rounded-lg shadow-lg max-w-lg w-full mx-4",children:x.jsxs("div",{className:"modal-content",children:[x.jsx("div",{className:"modal-header border-b p-4 flex justify-between items-center",children:x.jsx("h1",{className:"text-lg font-semibold",id:"exampleModalLabel",children:"Add Tenant"})}),x.jsx("div",{className:"modal-body p-4",children:x.jsx("form",{onSubmit:h,children:x.jsxs("div",{className:"space-y-4",children:[x.jsxs("div",{children:[x.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Date"}),x.jsx("input",{type:"date",className:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm",name:"date",value:t.date,onChange:p,required:!0})]}),x.jsxs("div",{children:[x.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Tenant Name"}),x.jsx("input",{type:"text",className:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm",name:"name",value:t.name,onChange:p,required:!0})]}),x.jsxs("div",{children:[x.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Aadhaar Number"}),x.jsx("input",{type:"text",className:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm",name:"adhar_num",value:t.adhar_num,onChange:p,required:!0}),i.adhar&&x.jsx("p",{className:"text-red-500 text-xs mt-1",children:i.adhar})]}),x.jsxs("div",{children:[x.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Mobile Number"}),x.jsx("input",{type:"text",className:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm",name:"mobile_num",value:t.mobile_num,onChange:p,required:!0}),i.mobile&&x.jsx("p",{className:"text-red-500 text-xs mt-1",children:i.mobile})]}),x.jsxs("div",{children:[x.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Status"}),x.jsxs("select",{className:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm",name:"status",value:t.status,onChange:p,required:!0,children:[x.jsx("option",{value:"",disabled:!0,children:"Choose..."}),x.jsx("option",{value:"Joined",children:"Joined"}),x.jsx("option",{value:"Vacated",children:"Vacated"}),x.jsx("option",{value:"Under Maintenance",children:"Under Maintenance"})]})]}),x.jsxs("div",{children:[x.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Room Number"}),x.jsx("input",{type:"text",className:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm",name:"room_number",value:t.room_number,onChange:p,required:!0})]}),x.jsxs("div",{children:[x.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Floor"}),x.jsx("input",{type:"text",className:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm",name:"floor_number",value:t.floor_number,onChange:p,required:!0})]}),x.jsxs("div",{children:[x.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Price"}),x.jsxs("div",{className:"relative mt-1",children:[x.jsx("input",{type:"number",className:"block w-full border-gray-300 rounded-md shadow-sm pl-7 pr-3 py-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm",name:"price",value:t.price,onChange:p,placeholder:"0.00",step:"0.01",min:"0",required:!0}),x.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:x.jsx("span",{className:"text-gray-500",children:"$"})})]})]}),x.jsxs("div",{children:[x.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Tenant Image"}),x.jsx("input",{type:"file",name:"Tenant_img",className:"mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded-md shadow-sm",onChange:_=>r(_.target.files[0])})]}),x.jsx("button",{type:"submit",className:"mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600",children:"Submit"})]})})})]})})})})})}bv(document.getElementById("root")).render(x.jsx(gn.StrictMode,{children:x.jsx(XP,{})}));
