const openmodal = document.querySelector(".openmodal")
const closemod = document.querySelector(".close")
const overlay = document.querySelector(".overlay")
const modal = document.querySelector(".modal")
 const openmod = function(){
    modal.classList.remove("modalhide")
    overlay.classList.remove("modalhide")
 }
 const closenmod = function(){
    modal.classList.add("modalhide")
    overlay.classList.add("modalhide")
 }

closemod.addEventListener("click", closenmod)

openmodal.addEventListener("click", openmod)

const navv = document.querySelector(".navv");
const header = document.querySelector(".headerr")
console.log('headerr');
const navheight = navv.getBoundingClientRect().height;

const stickynav = function(entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
        navv.classList.add('fixednav');
    } else {
        navv.classList.remove('fixednav');
    }
};

const headerobser = new IntersectionObserver(stickynav, {
    root: null,
    threshold: 0,
    rootMargin: `${navheight}px 0px 0px 0px`
});

headerobser.observe(header);