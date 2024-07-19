document.addEventListener('DOMContentLoaded', function() {
    // Hide the scrollbar when the loading screen is active
    document.body.classList.add('no-scroll');

    gsap.from(".loader-1", {
        width: 0,
        duration: 6,
        ease: "power2.inOut"
    });

    gsap.from(".loader-2", {
        width: 0,
        delay: 1.9,
        duration: 2,
        ease: "power2.inOut"
    });

    gsap.to(".loader", {
        background: "none",
        delay: 6,
        duration: 0.1,
    });

    gsap.to(".loader-1", {
        rotate: 90,
        y: -50,
        duration: 0.5,
        delay: 6
    });

    gsap.to(".loader-2", {
        x: -75,
        y: 75,
        duration: 0.5,
    }, "<");

    gsap.to(".loader", {
        scale: 40,
        duration: 1,
        delay: 7,
        ease: "power2.inOut"
    });

    gsap.to(".loader", {
        rotate: 45,
        y: 500,
        x: 2000,
        duration: 1,
        delay: 7,
        ease: "power2.inOut"
    });

    gsap.to(".loading-screen", {
        opacity: 0,
        duration: 0.5,
        delay: 7.5,
        ease: "power1.inOut",
        onComplete: function() {
            document.querySelector(".loading-screen").style.display = "none";
            // Remove the no-scroll class once the loading screen is hidden
            document.body.classList.remove('no-scroll');
        }
    });

    gsap.from("header", 1.5, {
        delay: 7,
        opacity: 0,
        ease: "power4.inOut",
    });

    gsap.from(".coupleName", 1.5, {
        delay: 7,
        y: 50,
        opacity: 0,
        ease: "power4.inOut",
    });

    gsap.from(".dayTxt", {
        duration: 0.8,
        delay: 7.5,
        y: 50,
        opacity: 0,
        ease: "back",
    });

    gsap.from(".timeTxt", {
        duration: 0.8,
        delay: 7.7,
        y: 50,
        opacity: 0,
        ease: "back",
    });

    gsap.from(".venueTxt", {
        duration: 0.8,
        delay: 7.9,
        y: 50,
        opacity: 0,
        ease: "back",
    });

    gsap.from(".rsvpBtn", {
        duration: 0.8,
        delay: 8.1,
        y: 50,
        opacity: 0,
        ease: "back",
    });
});
