import{s as u}from"./shallow-clone.95d3ae69.js";import{k as c}from"./kind-of.db8547f8.js";import{i as s}from"./is-plain-object.c8a6e606.js";var m=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function O(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function j(e){var t=e.default;if(typeof t=="function"){var r=function(){return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(o){var f=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(r,o,f.get?f:{enumerable:!0,get:function(){return e[o]}})}),r}const i=u,p=c,l=s;function n(e,t){switch(p(e)){case"object":return a(e,t);case"array":return d(e,t);default:return i(e)}}function a(e,t){if(typeof t=="function")return t(e);if(t||l(e)){const r=new e.constructor;for(let o in e)r[o]=n(e[o],t);return r}return e}function d(e,t){const r=new e.constructor(e.length);for(let o=0;o<e.length;o++)r[o]=n(e[o],t);return r}var w=n;export{w as a,O as b,m as c,j as g};
