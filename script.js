let circle = document.querySelector(".circle")
let frame = document.querySelector(".frame")
window.addEventListener("mousemove",function(dets){
    gsap.to(".circle",{
        x:dets.clientX,
        y:dets.clientY,
        ease:"easeIn",
        duration:.2
    })
})

frame.addEventListener("mousemove",function(){
    gsap.to(".circle",{
        scale:5
    })
})
frame.addEventListener("mouseleave",function(){
    gsap.to(".circle",{
        scale:1
    })
})
