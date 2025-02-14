import{a as d,i as p,S as m}from"./assets/vendor-YT4DRQk6.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const f=async(o,r=1)=>{const a="https://pixabay.com/api/";try{return(await d.get(a,{params:{key:"48797096-f4883239ab22667ebb957e7d3",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:9}})).data.hits}catch(s){throw console.error("Error fetching images:",s),s}},n=o=>{const r=document.querySelector(".loader");o?r.classList.remove("hidden"):r.classList.add("hidden")},g=o=>{const r=document.querySelector(".gallery");if(r.innerHTML="",o.length===0){p.error({message:"Sorry, no images match your search. Please try again!",position:"topRight",timeout:5e3,transitionIn:"fadeIn",transitionOut:"fadeOut"});return}const a=o.map(({webformatURL:s,largeImageURL:e,tags:t,likes:i,views:c,comments:l,downloads:u})=>`
        <li>
          <a href="${e}" class="gallery-item">
            <img src="${s}" alt="${t}" />
          </a>
          <div class="info">
            <div class="stat-item">
              <p class="label">Likes</p>
              <p class="value">${i}</p>
            </div>
            <div class="stat-item">
              <p class="label">Views</p>
              <p class="value">${c}</p>
            </div>
            <div class="stat-item">
              <p class="label">Comments</p>
              <p class="value">${l}</p>
            </div>
            <div class="stat-item">
              <p class="label">Downloads</p>
              <p class="value">${u}</p>
            </div>
          </div>
        </li>
      `).join("");r.insertAdjacentHTML("beforeend",a)},y=document.querySelector(".form"),h=document.querySelector(".gallery");y.addEventListener("submit",async o=>{o.preventDefault();const r=document.querySelector(".form-input").value.trim();if(!r){iziToast.error({message:"Please enter a search term.",position:"topRight",timeout:5e3,transitionIn:"fadeIn",transitionOut:"fadeOut"});return}h.innerHTML="",n(!0);try{const a=await f(r);await new Promise(i=>setTimeout(i,2e3)),g(a);const s=new m(".gallery a");s.refresh();const e=document.querySelector(".next-btn"),t=document.querySelector(".prev-btn");e.addEventListener("click",()=>{s.next()}),t.addEventListener("click",()=>{s.prev()})}catch{iziToast.error({message:"Something went wrong, please try again later.",position:"topRight",timeout:5e3,transitionIn:"fadeIn",transitionOut:"fadeOut"})}finally{n(!1)}});
//# sourceMappingURL=index.js.map
