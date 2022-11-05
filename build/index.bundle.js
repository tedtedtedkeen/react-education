"use strict";(self.webpackChunkreact_education=self.webpackChunkreact_education||[]).push([[826],{983:(e,t,r)=>{var n=r(294),a=r(745);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var f=(0,n.createContext)(),s=function(){return(0,n.useContext)(f)},m=function(e){var t,r,a=e.children,o=(t=(0,n.useState)([]),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],c=!0,l=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);c=!0);}catch(e){l=!0,a=e}finally{try{c||null==r.return||r.return()}finally{if(l)throw a}}return o}}(t,r)||u(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=o[0],s=o[1];return n.createElement(f.Provider,{value:{data:l,changeData:function(e){s((function(t){return[].concat(function(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||u(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t),[c({},e)])}))},deleteItem:function(e){s((function(t){return t.filter((function(t){return t.id!==e}))}))}}},a)};function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v={SET_NAME:"setName",SET_TEXT:"setText",SET_RATING:"setRating"},g=function(e,t){switch(null==t?void 0:t.type){case v.SET_NAME:return{name:t.payload.name,text:"",rating:0,id:Date.now()};case v.SET_TEXT:return b(b({},e),{},{text:t.payload.text});case v.SET_RATING:return b(b({},e),{},{rating:t.payload.rating});default:return e}},h={name:"",text:"",rating:0},E=function(){var e,t,r=(e=(0,n.useReducer)(g,h),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],c=!0,l=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);c=!0);}catch(e){l=!0,a=e}finally{try{c||null==r.return||r.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=r[0],o=r[1];return{FORM_ACTIONS:v,state:a,dispatch:o}},O=function(){var e=s().changeData,t=E(),r=t.FORM_ACTIONS,a=t.state,o=t.dispatch,c=(0,n.useRef)();return(0,n.useLayoutEffect)((function(){return c.current&&c.current.focus(),function(){}}),[]),n.createElement("form",{onSubmit:function(t){t.preventDefault(),e(a),o({type:r.SET_NAME,payload:{name:""}})}},n.createElement("input",{ref:c,type:"text",value:a.name,onChange:function(e){o({type:r.SET_NAME,payload:{name:e.target.value}})},placeholder:"name"}),n.createElement("textarea",{value:a.text,onChange:function(e){o({type:r.SET_TEXT,payload:{text:e.target.value}})},placeholder:"text"}),n.createElement("input",{type:"number",max:5,placeholder:"Number",value:a.rating,onChange:function(e){o({type:r.SET_RATING,payload:{rating:e.target.value}})}}),n.createElement("button",null,"Send"))};const j={},S={};var A=r(871),w=function(e){var t=e.name,r=(e.text,e.rating,e.id),a=e.deleteItem;return console.log("I'm ".concat(t)),n.createElement("div",{className:S.container},t,n.createElement("button",{onClick:function(){return a(r)}},n.createElement(A.Xm5,null)))},T=(0,n.memo)(w,(function(e,t){return e.id===t.id}));function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},I.apply(this,arguments)}var P=function(){var e=s(),t=e.data,r=e.deleteItem;return n.createElement("div",{className:j.list},t.map((function(e){return n.createElement(T,I({key:e.id,deleteItem:r},e))})))};const x=r.p+"c8123a7b5ad69eb9bf6e.jpg";var N=function(e){var t=e.selected;return n.createElement(n.Fragment,null,n.createElement(A.QJe,{className:t?"qAFbB8BOsbzk4TfIseSh":"Hlf_7yAWlLB27sUbhXWm"}))};function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var C=function(){var e,t,r=(e=s().data,Math.floor(e.reduce((function(e,t){return e+ +t.rating}),0)/e.length));return n.createElement("div",null,(5,t=Array(5),function(e){if(Array.isArray(e))return _(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e,t){return n.createElement(N,{key:t,selected:r>t})})))},D=function(){return n.createElement("div",{className:"UfCicP8AlGibRf9miU3M"},n.createElement("img",{src:x,alt:"drive",className:"VE12t17j8GEZzpwEiGtX"}),n.createElement(C,null))},M=function(){return n.createElement("div",{className:"app"},n.createElement(D,null),n.createElement(O,null),n.createElement(P,null))},k=r(486),R=r.n(k);console.log(R().join(["Index","is","loaded"]," "));var G=document.getElementById("root");(0,a.s)(G).render(n.createElement(m,null,n.createElement(M,null)))}},e=>{e.O(0,[84],(()=>(983,e(e.s=983)))),e.O()}]);
//# sourceMappingURL=index.bundle.js.map