function utils(){return{calcMaxHeight:function(e){let t=0;return e.forEach(e=>{const n=e.clientHeight;t=n>t?n:t}),t},removeClasses:function(e,t){for(let n=0;n<e.length;n++)e[n].classList.remove(...t)},addClasses:function(e,t){for(let n=0;n<e.length;n++)e[n].classList.add(...t)},requestInterval:function(e,t){const n=window.requestAnimationFrame||function(e,t){window.setTimeout(e,1)};let i=(new Date).getTime(),a={};return a.value=n(function r(){(new Date).getTime()-i>=t&&(e.call(),i=(new Date).getTime()),a.value=n(r)}),a},clearRequestInterval:function(e){window.cancelAnimationFrame?window.cancelAnimationFrame(e.value):clearInterval(e)}}}function heroSlider(){const e={hero:document.querySelector("#hero-slider"),main:document.querySelector("#slides-main"),aux:document.querySelector("#slides-aux"),current:document.querySelector("#slider-nav .current"),handle:null,idle:!0,activeIndex:-1,interval:1500},t=function(e,t){const n=utils().calcMaxHeight(t);e.style.height=`${n}px`},n=function(t){e.idle=!1,e.hero.classList.remove("prev","next"),"next"==t?(e.activeIndex=(e.activeIndex+1)%e.total,e.hero.classList.add("next")):(e.activeIndex=(e.activeIndex-1+e.total)%e.total,e.hero.classList.add("prev")),utils().removeClasses(e.items,["prev","active"]);const n=[...e.items].filter(t=>{let n;return n=e.hero.classList.contains("prev")?e.activeIndex==e.total-1?0:e.activeIndex+1:0==e.activeIndex?e.total-1:e.activeIndex-1,t.dataset.index==n}),i=[...e.items].filter(t=>t.dataset.index==e.activeIndex);utils().addClasses(n,["prev"]),utils().addClasses(i,["active"]),e.main.querySelector(".active").addEventListener("transitionend",a,{once:!0})},i=function(){e.autoplay=!1,utils().clearRequestInterval(e.handle)},a=function(){!e.autoplay&&r(!1),e.idle=!0},r=function(t){e.autoplay=!0,e.items=e.hero.querySelectorAll("[data-index]"),e.total=e.items.length/2;const i=()=>n("next");t&&requestAnimationFrame(i),e.handle=utils().requestInterval(i,e.interval)},l=function(){e.hero.classList.add("loaded")},o=function(){r(!0),e.hero.addEventListener("wheel",t=>{if(e.idle){const e=t.deltaY>0?"next":"prev";i(),n(e)}}),window.innerWidth<=1024&&(e.hero.addEventListener("touchstart",function(t){e.ts=parseInt(t.changedTouches[0].clientX),window.scrollTop=0}),e.hero.addEventListener("touchmove",function(t){e.tm=parseInt(t.changedTouches[0].clientX);const a=e.tm-e.ts;if(window.scrollTop=0,e.idle){const e=a<0?"next":"prev";i(),n(e)}})),e.aux.addEventListener("transitionend",l,{once:!0})};return{init:function(){t(e.aux,e.aux.querySelectorAll(".slide-title")),e.hero.classList.add("ready"),e.current.addEventListener("transitionend",o,{once:!0})},resize:function(){t(e.aux,e.aux.querySelectorAll(".slide-title"))}}}window.addEventListener("load",heroSlider().init),window.addEventListener("resize",heroSlider().resize);