import{a as p,i as m}from"./assets/vendor-DV-VEFRg.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const f=async(s,t=1)=>{const o="https://pixabay.com/api/";try{return(await p.get(o,{params:{key:"48797096-f4883239ab22667ebb957e7d3",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:9}})).data.hits}catch(a){throw console.error("Error fetching images:",a),a}},g=s=>{const t=document.querySelector(".gallery");if(t.innerHTML="",s.length===0){m.error({message:"Sorry, no images match your search. Please try again!",position:"topRight",timeout:5e3,transitionIn:"fadeIn",transitionOut:"fadeOut"});return}const o=s.map(({webformatURL:e,largeImageURL:r,tags:i,likes:l,views:c,comments:u,downloads:d})=>`
      <li>
        <a href="${r}" class="gallery-item">
          <img src="${e}" alt="${i}" />
        </a>
        <div class="info">
          <div class="stat-item">
            <p class="label">Likes</p>
            <p class="value">${l}</p>
          </div>
          <div class="stat-item">
            <p class="label">Views</p>
            <p class="value">${c}</p>
          </div>
          <div class="stat-item">
            <p class="label">Comments</p>
            <p class="value">${u}</p>
          </div>
          <div class="stat-item">
            <p class="label">Downloads</p>
            <p class="value">${d}</p>
          </div>
        </div>
      </li>
    `).join("");t.insertAdjacentHTML("beforeend",o),new SimpleLightbox(".gallery a",{overlay:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250,showCounter:!0,close:!0,arrows:!0}).refresh()},n=s=>{const t=document.querySelector(".loader");s?t.classList.remove("hidden"):t.classList.add("hidden")},h=document.querySelector(".form");h.addEventListener("submit",async s=>{s.preventDefault();const t=document.querySelector(".form-input").value.trim();if(!t){iziToast.error({message:"Please enter a search term.",position:"topRight",timeout:5e3,transitionIn:"fadeIn",transitionOut:"fadeOut"});return}n(!0);try{const o=await f(t);g(o)}catch{iziToast.error({message:"Something went wrong, please try again later.",position:"topRight",timeout:5e3,transitionIn:"fadeIn",transitionOut:"fadeOut"})}finally{n(!1)}});
//# sourceMappingURL=index.js.map
