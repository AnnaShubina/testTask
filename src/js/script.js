"use strict";
let tabLinks = document.querySelectorAll(".tabs li");
console.log(tabLinks);
let tabPanels = document.querySelectorAll(".tabs-panel");
console.log(tabPanels);
 
for(let el of tabLinks) {
  el.addEventListener("click", e => {
    e.preventDefault();
     
    document.querySelector('.tabs li.active').classList.remove("active");
    document.querySelector('.tabs-panel.active').classList.remove("active");
 
    el.classList.add("active");
    let index = [...tabLinks].indexOf(el);
    console.log(index);
    
    let panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
    panel[0].classList.add("active");
  });
}