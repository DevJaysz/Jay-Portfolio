import gsap from "gsap";

// General timeline for animations
const tl = gsap.timeline();

// Function to animate preloader
export const preLoaderAnim = () => {
  // Hide scrollbar on body
  tl.to("body", { duration: 0.1, css: { overflowY: "hidden" }, ease: "power3.inOut" })
  
    // Scroll landing section with 90vh height
    .to(".landing", { duration: 0.05, css: { overflowY: "scroll", height: "90vh" } })
    
    // Fade in text container
    .to(".texts-container", { duration: 0, opacity: 1, ease: "Power3.easeOut" })
    
    // Animate text elements
    .from(".texts-container span", {
      duration: 1.5,
      delay: 1,
      y: 70,
      skewY: 10,
      stagger: 0.4,
      ease: "Power3.easeOut",
    })
    .to(".texts-container span", {
      duration: 1,
      y: 70,
      skewY: -20,
      stagger: 0.2,
      ease: "Power3.easeOut",
    })
    
    // Hide scrollbar on landing
    
    
    // Show scrollbar on body
    .to("body", { duration: 0.1, css: { overflowY: "scroll" }, ease: "power3.inOut" })
    
    // Fade in landing top sub
    .from(".landing__top .sub", { duration: 1, opacity: 0, y: 80, ease: "expo.easeOut" })
    
    // Hide preloader
    .to(
      ".preloader",
      {
        duration: 1.5,
        height: "0vh",
        ease: "Power3.easeOut",
        onComplete: mobileLanding(),
      },
      "-=2"
    );
};

// Function for recurrent fade up animations
export const fadeUp = (el, delay = 0) => {
  tl.from(el, {
    y: 150,
    duration: 1,
    delay,
    opacity: 0,
    ease: "power3.Out",
  });
};

// Function to animate landing on mobile
export const mobileLanding = () => {
  window.innerWidth < 763 &&
    tl.from(".landing__main2", {
      duration: 1,
      delay: 0,
      opacity: 0,
      y: 80,
      ease: "expo.easeOut",
    });
};

// Function to animate shapes infinitely
const animateShapes = () => {
  const infiniteTl = gsap.timeline({ repeat: -1 });
  infiniteTl
    .to(".shapes .shape", {
      duration: 4,
      rotate: 360,
      delay: -1,
      ease: "power3.easeInOut",
      stagger: 2,
    })
    .to(".shapes .shape-3", {
      duration: 1,
      rotate: 360,
      delay: -2,
      ease: "power3.easeInOut",
    })
    .to(".shapes .shape", {
      duration: 3,
      rotate: 0,
      ease: "power3.easeInOut",
      stagger: 1,
    })
    .to(".shapes .shape", {
      duration: 1,
      opacity: 0,
      delay: -1,
      ease: "power3.easeInOut",
      stagger: 1,
    })
    .to(".shapes .shape", {
      duration: 1.5,
      opacity: 1,
      ease: "power3.easeInOut",
      stagger: 1,
    });
};

// Function to fade in elements
export const fadeIn = (el) => {
  gsap.to(el, {
    duration: 2,
    opacity: 1,
    y: -60,
    ease: "power4.out",
  });
};

// Function to fade out elements
export const fadeOut = (el) => {
  gsap.to(el, {
    duration: 1,
    opacity: 0,
    y: -20,
    ease: "power4.out",
  });
};
