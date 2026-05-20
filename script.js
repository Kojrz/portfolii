// LOCOMOTIVE SCROLL

const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

// REGISTER GSAP

gsap.registerPlugin(ScrollTrigger);

// PAGE FADE IN

gsap.from("#main", {
  opacity: 0,
  duration: 1
});

// HERO ANIMATION

gsap.from(".hero-title", {
  opacity: 0,
  y: 50,
  filter: "blur(10px)",
  duration: 1.5
});

gsap.from(".hero-subtitle", {
  opacity: 0,
  y: 30,
  delay: 0.4,
  duration: 1.2
});

gsap.from(".hire-btn", {
  opacity: 0,
  scale: 0.8,
  delay: 0.7,
  duration: 1
});
})

// FLOATING ORBS

gsap.to(".glow-orb", {
  y: -20,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
  stagger: 0.2
});

// ABOUT SECTION

gsap.from(".about-image", {
  scrollTrigger: ".about",
  x: -100,
  opacity: 0,
  duration: 1.2
});

gsap.from(".about-content", {
  scrollTrigger: ".about",
  x: 100,
  opacity: 0,
  duration: 1.2
});

// SKILLS

gsap.from(".skill-card", {
  scrollTrigger: ".skills-grid",
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 1
});

// PROJECTS

gsap.from(".project-card", {
  scrollTrigger: ".projects",
  opacity: 0,
  scale: 0.8,
  y: 100,
  stagger: 0.3,
  duration: 1
});

// CONTACT

gsap.from(".contact input, .contact textarea", {
  scrollTrigger: ".contact",
  opacity: 0,
  x: -50,
  stagger: 0.2,
  duration: 1
});

// HAMBURGER MENU

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// BUTTON HOVER EFFECT

document.querySelectorAll("button").forEach(btn => {

  btn.addEventListener("mouseenter", () => {

    gsap.to(btn, {
      scale: 1.08,
      duration: 0.3
    });

  });

  btn.addEventListener("mouseleave", () => {

    gsap.to(btn, {
      scale: 1,
      duration: 0.3
    });

  });

});