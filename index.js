import{a as d,i as p}from"./assets/vendor-DV-VEFRg.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const m=async(o,t=1)=>{const a="https://pixabay.com/api/";try{return(await d.get(a,{params:{key:"48797096-f4883239ab22667ebb957e7d3",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:9}})).data.hits}catch(s){throw console.error("Error fetching images:",s),s}},n=o=>{const t=document.querySelector(".loader");o?t.classList.remove("hidden"):t.classList.add("hidden")},f=o=>{const t=document.querySelector(".gallery");if(t.innerHTML="",o.length===0){p.error({message:"Sorry, no images match your search. Please try again!",position:"topRight",timeout:5e3,transitionIn:"fadeIn",transitionOut:"fadeOut"});return}const a=o.map(({webformatURL:s,largeImageURL:e,tags:r,likes:i,views:c,comments:l,downloads:u})=>`
        <li>
          <a href="${e}" class="gallery-item">
            <img src="${s}" alt="${r}" />
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
      `).join("");t.insertAdjacentHTML("beforeend",a)},g=document.querySelector(".form");g.addEventListener("submit",async o=>{o.preventDefault();const t=document.querySelector(".form-input").value.trim();if(!t){iziToast.error({message:"Please enter a search term.",position:"topRight",timeout:5e3,transitionIn:"fadeIn",transitionOut:"fadeOut"});return}n(!0);try{const a=await m(t);await new Promise(s=>setTimeout(s,1e4)),f(a)}catch{iziToast.error({message:"Something went wrong, please try again later.",position:"topRight",timeout:5e3,transitionIn:"fadeIn",transitionOut:"fadeOut"})}finally{n(!1)}});
//# sourceMappingURL=index.js.map
