function loadingAnimation(){
    
let tl = gsap.timeline();

tl.from("#loader h1", {
    y:190,
    duration: .6,
    stagger: .3,
    delay: .3,
});

tl.from(".line1-part1", {
    opacity: 0,
    onStart: function(){
        let text = document.querySelector(".line1-part1 h5");
let grow = 0;
setInterval(function(){
   if(grow<100){

    text.innerHTML = grow++

   }
   else{
    text.innerHTML = grow
   }
},30);

    }
});

tl.to(".line h2",{
    animationName:"anime",
    opacity:1
});

tl.to("#loader",{
    opacity:0,
    duration:.2 ,
    delay:1
});

tl.from("#page1",{
    y:1600,
    opacity:0,
    duration: .5,
    ease: Power1
});

tl.to("#loader",{
    display: "none"
});

tl.from("nav",{
    opacity: 0,
});
tl.from(".hero h1, #hero3 h2",{
    y:140,
    stagger:.2
});


}

loadingAnimation();


document.addEventListener("mousemove",function(dets){

    gsap.to("#cursor",{
        x: dets.x,
        y: dets.y
    })
})


Shery.makeMagnet("#nav-part2 h4");
