
// Function to initialize the animations
function initializeAnimations() {
    console.log("loaded")
    animateHeroContent()
    animateBorders()
    animateContact()
    animateImages()
    animateSkillsSection()
    // animateFooter()

    toggleMenu()
}

window.addEventListener("load", () => {
    initializeAnimations();
});

function toggleMenu() {
    var navButton = document.querySelector('.nav-button');
    var burgerIcon = document.querySelector('.burger');
    var closeIcon = document.querySelector('.close-lists');
    var linksList = document.querySelector('.links');
    var hero = document.getElementById('hero')

    navButton.addEventListener('click', function () {
        console.log("clicked");
        if (burgerIcon.classList.contains('hidden')) {
            burgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            linksList.classList.remove('active');
            
        } else {
            burgerIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
            linksList.classList.add('active');
        }
    });
}

function animateHeroContent() {
    gsap.from('.hero-content', { opacity: 0, y: 0, duration: 1, delay: 1.5 });
    gsap.from('.hero-img', { opacity: 0, y: 0, duration: 1, delay: 2 });
    gsap.set('.aeroplane', { x: window.innerWidth * 0.25, y: 0, opacity: 0 });

    gsap.registerPlugin(MotionPathPlugin); // Register the MotionPathPlugin

    const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });
    tl.to('.aeroplane', {
        x: '100vw', y: '-100vh', opacity: 1, duration: 2, delay: 1, motionPath: {
            path: [
                { x: window.innerWidth * 0.25, y: -window.innerHeight * 0.01 },
                { x: window.innerWidth * 0.35, y: -window.innerHeight * 0.0225 },
                { x: window.innerWidth * 0.45, y: -window.innerHeight * 0.06 },
                { x: window.innerWidth * 0.55, y: -window.innerHeight * 0.14 },
                { x: window.innerWidth * 0.65, y: -window.innerHeight * 0.26 },
                { x: window.innerWidth * 0.75, y: -window.innerHeight * 0.42 },
                { x: window.innerWidth * 0.85, y: -window.innerHeight * 0.62 },
                { x: window.innerWidth * 0.95, y: -window.innerHeight * 0.86 },
                { x: window.innerWidth, y: -window.innerHeight },
            ],
        },
    });
}

function animateBorders() {
    const borderAnimation = gsap.timeline({ repeat: -1, paused: true, defaults: { duration: 0.5, ease: "power2.out" } });
    borderAnimation
        .to(".topp-left-about, .top-left-about", { scaleX: 1 })
        .to(".bottom-right-about, .bottomm-right-about", { scaleX: 1 })
        .to(".topp-left-about, .bottom-right-about", { scaleY: 1 })
        .to(".top-left-about, .bottomm-right-about", { scaleY: 1 });

    ScrollTrigger.create({
        trigger: ".about-me",
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
            borderAnimation.play();
        },
        onLeaveBack: () => {
            borderAnimation.reverse();
        },
        onEnterBack: () => {
            borderAnimation.play();
        },
        onLeave: () => {
            borderAnimation.reverse();
        },
    });
}

function animateSkillsSection() {
    const skillsLeft = gsap.from(".skills-left", {
        opacity: 0,
        x: -50,
        duration: 1,
        paused: true, // Pause the animation initially
        scrollTrigger: {
            trigger: ".skills-left",
            start: "top 80%",
            onEnter: () => {
                skillsLeft.restart(); // Restart the animation on enter
            },
        },
    });

    const skillsRight = gsap.from(".skills-right", {
        opacity: 0,
        x: 50,
        duration: 1,
        paused: true, // Pause the animation initially
        scrollTrigger: {
            trigger: ".skills-right",
            start: "top 80%",
            onEnter: () => {
                skillsRight.restart(); // Restart the animation on enter
            },
        },
    });
}



function animateImages() {
    const projectItems = document.getElementById("projectItems");

    if (window.innerWidth > 768) {
        projectItems.style.display = "flex";
        projectItems.style.flexWrap = "wrap";
    } else {
        projectItems.style.display = "grid";
        projectItems.style.placeItems = "center";
    }

    const images = document.querySelectorAll(".animate-img");

    images.forEach((image, index) => {
        gsap.fromTo(
            image,
            { opacity: 0, scale: 0 },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                delay: index * 0.2, // Delay each image animation by 0.2 seconds
                scrollTrigger: {
                    trigger: image,
                    start: "top 80%", // Adjust this value to change when the animation starts
                    onEnter: () => {
                        gsap.fromTo(
                            image,
                            { opacity: 0, scale: 0 },
                            {
                                opacity: 1,
                                scale: 1,
                                duration: 1,
                                delay: index * 0.2,
                            }
                        );
                    },
                },
            }
        );
    });
}


function animateContact() {
    gsap.registerPlugin(ScrollTrigger);
    const titleAnimation = gsap.from(".section-title", {
        opacity: 0,
        y: 50,
        duration: 1,
    });
    const formAnimation = gsap.from(".contact-form", {
        opacity: 0,
        y: 50,
        duration: 1,
    });
    const formGroupAnimation = gsap.from(".form-group", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
    });
    const buttonAnimation = gsap.from("button.btn", {
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
    });
    ScrollTrigger.create({
        trigger: ".contact-section",
        start: "top 80%",
        onEnter: () => {
            titleAnimation.restart();
            formAnimation.restart();
            formGroupAnimation.restart();
            buttonAnimation.restart();
        },
    });
}


