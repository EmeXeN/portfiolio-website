(()=>{var e={34:()=>{var e=new IntersectionObserver((function(e,t){e.forEach((function(e){e.target.classList.toggle("is-inViewport",e.isIntersecting)}))})),t={};function r(e,t,r,n,o){var a=0,c=setInterval((function(){if(a<t.length){var s=t.charAt(a),i=!1,l="start__title-hover ";n&&(l="start__title-hover ".concat(n)),"/"==s&&(i=!0,s="")," "==s&&(s="&nbsp"),console.log(l);var u='<span class="'.concat(l,'">').concat(s,"</span>").concat(i?"<br>":"");e.insertAdjacentHTML("beforeend",u),a++}else clearInterval(c),o&&o(e,t,r,n)}),r)}document.querySelectorAll("[data-inviewport]").forEach((function(r){e.observe(r,t)})),r(document.querySelector(".start__title"),"Hi,/It's Paweł,/",120,!1,(function(e,t,n){r(e,"web developer",n,"start__title-background")}))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(34)})()})();