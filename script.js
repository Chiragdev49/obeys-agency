

var tl=gsap.timeline();

tl.from("#loader h1",{
    y:200,
    stagger:0.2,
    duration:0.6,
    delay:0.5
})
tl.from(".line h2",{
    opacity:0,
    onStart:function(){
        var text=document.querySelector("#line1-part1 h5");
var count=0;
setInterval(function(){
    if(count<100){
        text.innerHTML=count++;
    }
    else{
        text.innerHTML=count;
    }
},40)
    }
})
tl.to(".line h2",{
    animationName:"anime",
    opacity:1
})
tl.to("#loader",{
    opacity:0,
    duration:0.4,
    delay:4
})

tl.from("#page1",{
    y:1200,
    opacity:0,
    duration:0.3
})
tl.to("#loader",{
    display:"none"
})