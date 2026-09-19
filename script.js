(()=>{
"use strict";
const menu=document.querySelector(".menu-toggle");
const nav=document.querySelector(".site-nav");
if(!menu||!nav)return;
function closeMenu(){
  menu.setAttribute("aria-expanded","false");
  menu.setAttribute("aria-label","Open menu");
  nav.classList.remove("open");
  document.body.classList.remove("menu-open");
}
menu.addEventListener("click",()=>{
  const opening=menu.getAttribute("aria-expanded")!=="true";
  menu.setAttribute("aria-expanded",String(opening));
  menu.setAttribute("aria-label",opening?"Close menu":"Open menu");
  nav.classList.toggle("open",opening);
  document.body.classList.toggle("menu-open",opening);
  if(opening)nav.querySelector("a")?.focus();
});
nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",closeMenu));
document.addEventListener("keydown",event=>{
  if(event.key==="Escape"&&menu.getAttribute("aria-expanded")==="true"){
    closeMenu();menu.focus();
  }
});
document.addEventListener("pointerdown",event=>{
  if(nav.classList.contains("open")&&!nav.contains(event.target)&&!menu.contains(event.target))closeMenu();
});
const breakpoint=window.matchMedia("(min-width:851px)");
breakpoint.addEventListener?.("change",()=>{
  if(breakpoint.matches)closeMenu();
});
})();