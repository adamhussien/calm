'use strict'


const containerslider = document.querySelector(".containerslider")
const slidess = document.querySelectorAll(".slider")
const leftt = document.querySelector(".leftt")
const rightt = document.querySelector(".rightt")
let currentslider = 0
const slidewidth = slidess[0].offsetWidth + 25
leftt.addEventListener("click", function(){
    if(currentslider > 0){
        currentslider--
        updatesluderpostionn()
    }
})
rightt.addEventListener("click", function(){
if(currentslide < slidess.length - 1){
    currentslider++
    updatesluderpostionn()
}
})
function updatesluderpostionn(){
    containerslider.style.transform = `translateX(-${currentslider * slidewidth}px)`
}

const person =[{
    id: 1,
     nameInfo: "Kristen Ruble",
   spann: " Well-Being Manager at Parkview Health",
   imgprof: "/img/sl3.webp",
   info: "Burnout is a huge stressor that healthcare as an industry is going through. . . Calm has the ability to help reduce some of those side effects of stress and burnout."
 
 
 },{ 
 id: 2,
 nameInfo: "jenn bergman",
 spann: " Global Benefits & Well-Being Program Manager at Zendesk",
 imgprof: "/img/Jen_berg.webp",
 info: "We like Calms focus on cultural relevance when it comes to mental health. Its a platform that taps into instructors from local regions and ethnicities to develop culturally relevant mental health resources. It’s not just a bot translation."
 
 }
 ]
 const name = document.querySelector(".nameslider")
 const spans = document.querySelector(".infoslider")
 const imgslider = document.querySelector(".avatar")
 const paragra = document.querySelector(".positive-box2__para")
const nextbtn = document.querySelector(".chevronright")
const prevbtn = document.querySelector(".chevronleft")

let currentitem = 0
window.addEventListener("DOMContentLoaded", function(){
    const item = person[currentitem]
    name.textContent = item.nameInfo
    imgslider.src = item.imgprof
    paragra.textContent = item.info
    spans.textContent = item.spann
})




const showgirls = function(girl){
    const item = person[girl]
    name.textContent = item.nameInfo
    imgslider.src = item.imgprof
    paragra.textContent = item.info
    spans.textContent = item.spann  
}
nextbtn.addEventListener("click", function(){
    currentitem++
    if(currentitem > person.length - 1){
        currentitem = 0
    }
    showgirls(currentitem)
})
prevbtn.addEventListener("click", function(){
    currentitem--
    if(currentitem < 0){
        currentitem = person.length - 1
        
    }
    showgirls(currentitem)
}) 

