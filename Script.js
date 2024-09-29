var crsrPoint = document.querySelector(".crsr-point")
var crsr = document.querySelector(".cursor");
let body = document.querySelector("body");

body.addEventListener("mousemove", (axis)=>{
    gsap.to(crsrPoint,{
        x:axis.x,
        y:axis.y,
        duration:1,
        ease:"back.out"
    })
})
// document.addEventListener("mousemove", (dets)=>{
//     crsrPoint.style.left = dets.x + "px";
//     crsrPoint.style.top = dets.y + "px";
//     crsr.style.left = dets.x - 150 + "px";
//     crsr.style.top = dets.y - 150 + "px";
// })

let menu = document.querySelectorAll("#navbar h4");

menu.forEach((elem)=>{
    elem.addEventListener("mouseenter", ()=>{
        crsrPoint.style.scale = 4;
        crsrPoint.style.border = "1px solid #fff"
        crsrPoint.style.backgroundColor = "transparent";
    })
})
menu.forEach((elem)=>{
    elem.addEventListener("mouseleave", ()=>{
        crsrPoint.style.scale = 1;
        crsrPoint.style.border = "0px"
        crsrPoint.style.backgroundColor = "#95c11e";
    })
})

gsap.to("#navbar", {
    backgroundColor:"#000",
    duration:0.5,
    height:"11vh",
    scrollTrigger:{
        trigger:"#navbar",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})
gsap.to("#main", {
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -80%",
        scrub:2
    }
})

gsap.from(".about-us img, .about-us-in",{
    y:50,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger: ".about-us",
        scroller: "body",
        start: "top 70%",
        end: "top 80%",
        scrub:2
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub:1
    }
})

gsap.from("#quote_left", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#quote_left",
      scroller: "body",
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
gsap.from("#quote_right", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#quote_right",
      scroller: "body",
      start: "top 75%",
      end: "top 65%",
      scrub: 4,
    },
  });


  gsap.from("#page_4 h1",{
    y:50,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger: "#page_4",
        scroller: "body",
        start: "top 70%",
        end: "top 80%",
        scrub:2
    }
})