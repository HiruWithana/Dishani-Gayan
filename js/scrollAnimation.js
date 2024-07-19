gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".timeline__block").forEach((block, i) => {
    gsap.from(block, {
        scrollTrigger: {
            trigger: block,
            start: "top 75%",
            end: "bottom 25%", 
            toggleActions: "play none none none",
            markers: false
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out"
    });
});

gsap.from(".timelineHead", {
    scrollTrigger: {
        trigger: ".timelineHead",
        start: "top 75%",
        end: "bottom 25%", 
        toggleActions: "play none none none",
        markers: false
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
});



gsap.from(".seeYouTxt", {
    scrollTrigger: {
        trigger: ".seeYouTxt",
        start: "top 75%",
        end: "bottom top", 
        toggleActions: "play none none none",
        markers: false
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
});

