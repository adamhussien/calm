"use strict";
const nav = document.querySelector(".list")
const ham = document.querySelector(".ham")
ham.addEventListener("click", function(){
    nav.classList.toggle("active")
}) 

const slides = document.querySelector(".slidercontainer")
const slide = document.querySelectorAll(".card")
const left = document.querySelector(".left")
const right = document.querySelector(".right")
let currentslide = 0


const cardWidth = slide[0].offsetWidth + 25;
left.addEventListener("click", function(){
    if(currentslide > 0){
        currentslide--;
        updatesluderpostion()
    }
})


right.addEventListener("click", function(){
    if(currentslide < slide.length - 1){
        currentslide++
        updatesluderpostion()
    }
})
function updatesluderpostion(){
    slides.style.transform = `translateX(-${currentslide * cardWidth}px)`
} 




 

const content = document.querySelectorAll(".faq-box")
content.forEach(box=>{
   const btn = box.querySelector(".faq-box__text")
   const content = document.querySelector(".faq-box__text__content")
   btn.addEventListener("click", function(){ 
    const isopen = content.style.display === 'block'
content.style.display = isopen ? "none" : "block"
btn.querySelector('i').classList.toggle('fa-chevron-down');
btn.querySelector('i').classList.toggle('fa-chevron-up');
}) } )
const newyeardate = new Date().getFullYear()
const newyearelm = document.querySelector(".current-year")
newyearelm.textContent = newyeardate
 

  const btntabcontainer = document.querySelector(".tab-btntabcontainer")
const contents = document.querySelectorAll(".contentcontainer-content")
btntabcontainer.addEventListener("click", function(e){
    e.preventDefault
    const id = e.target
    if(id.classList.contains("tab-btntabcontainer__btn")){
        const tid = target.getAttribute("data-tab");
        const btntabs = document.querySelectorAll(".tab-btntabcontainer__btn")
        btntabs.forEach(tab => tab.classList.remove("tabbtnactive"));
        contents.forEach(content => content.classList.remove("contentactive"));
    }
    target.classList.add("active");
    document.getElementById(id).classList.add("contentactive");
})
  

const tab = document.querySelector(".tab");
const btns = document.querySelectorAll(".tab-btntabcontainer__btn");
const articles = document.querySelectorAll(".contentcontainer-content");

tab.addEventListener("click", function (e) {
  const id = e.target.dataset.tabtn;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("tabbtnactive");
    });
    e.target.classList.add("tabbtnactive");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("contentactive");
    });
    const element = document.getElementById(id);
    element.classList.add("contentactive");
  }
});  
