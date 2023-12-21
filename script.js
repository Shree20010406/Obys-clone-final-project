function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
  }
function loadingAnimation(){
    
let tl = gsap.timeline();

tl.from("#loader h1", {
    y:190,
    duration: .5,
    stagger: .3,
    delay: .2,
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
    duration:.4 ,
    delay:2.9
});

tl.from("#page1",{
    y:1600,
    opacity:0,
    duration: .6,
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
function cursorAnimation(){
    Shery.mouseFollower({
        //Parameters are optional.
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });

      let vidcontainer = document.querySelector("#video-container");
      let video = document.querySelector("#video-container video");
      let flag = 0;

      vidcontainer.addEventListener("mouseenter",function(){
        vidcontainer.addEventListener("mousemove", function(dets){
            gsap.to(".mousefollower",{
                opacity :0
            })
            gsap.to("#vid-cursor",{
                left: dets.x -500,
                y: dets.y - 170
            })
        });
      });

      vidcontainer.addEventListener("mouseleave", function(){
        gsap.to(".mousefollower",{
            opacity :1
        })

        gsap.to("#vid-cursor",{
            left: "85%",
            y: "-10%"
        })

      });
      vidcontainer.addEventListener("click",function(){
        if(flag == 0){
             video.play();
        video.style.opacity = 1;
        document.querySelector("#vid-cursor").innerHTML = `<i class="ri-pause-fill"></i>`
        gsap.to("#vid-cursor",{
            scale: 0.5  
        }) 
        flag = 1;

        }
        else{
                video.pause();
        video.style.opacity = 0;
        document.querySelector("#vid-cursor").innerHTML = `<i class="ri-play-fill"></i>`
        gsap.to("#vid-cursor",{
            scale: 1  
        }) 
        flag = 0;

        }
       
      })
    
}
function sheryAnimations(){
    Shery.makeMagnet("#nav-part2 h4");

    Shery.imageEffect(".images", {
        style: 5,
        config: {"a":{"value":1.15,"range":[0,30]},"b":{"value":-0.94,"range":[-1,1]},"zindex":{"value":"99","range":[-9999999,9999999]},"aspect":{"value":0.7857059734055183},"ignoreShapeAspect":{"value":false},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.48,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":3.35,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.18,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":1.15,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":17}},"discard_threshold":{"value":0.61,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.58,"range":[0,2]},"noise_scale":{"value":9.16,"range":[0,100]}},
        gooey: true
      });

}

let tl2 = gsap.timeline({
})

tl2.from("#page3 .scroll-anim h1",{
    y: 100,
    opacity: 0,
    scrollTrigger:{
        trigger: "#page3",
        scroller: "#main",
        markers: true,
        start: "top 44%",
        end: "top 10%"
    } 
    
})
locoScroll();
sheryAnimations();
// cursorAnimation();
loadingAnimation();





