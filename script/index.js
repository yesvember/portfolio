gsap.registerPlugin(ScrollTrigger);

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    ScrollTrigger.refresh();
  }
});
// header script
const ACTIVE = "active";
const menuBtn = document.querySelector(".header__menu-m");
const mobileMenu = document.querySelector(".menu__m");
const mobileMenuList = mobileMenu.querySelectorAll(".menu__m-list");

const menuOpen = () => {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle(ACTIVE);
  });

  mobileMenuList.forEach((item) => {
    item.addEventListener("click", () => {
      mobileMenu.classList.remove(ACTIVE);
    });
  });

  window.addEventListener("resize", () => {
    let windowWith = window.innerWidth;
    if (windowWith >= 1024) {
      mobileMenu.classList.remove(ACTIVE);
    }
  });
};
menuOpen();

// main scrolltrigger
// intro scrolltrigger
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".intro__summary-right",
      start: "top 80%",
      end: "bottom 60%",
      scrub: 1,
    },
  })
  .fromTo(
    ".intro__summary-right",
    { backgroundSize: "0% 100%" },
    { backgroundSize: "100% 100%" }
  );


// 인트로에 하트 내려가는 부분.
gsap.fromTo('.intro__summary-img > span', {
  y : -20
},{
   y : 20,

  scrollTrigger: {
      trigger: ".intro__contents",
      start: "20% bottom",
      end: "bottom bottom",
      scrub: 1,
      markers : true
    }
})

gsap.fromTo('.intro__img-wrap > img', 
  { y: -20, scale: 1.1 }, 
  { y: 20, scale: 1.1,
    scrollTrigger: {
      trigger: ".intro__contents",
      start: "center bottom",
      end: "bottom bottom",
      scrub: 1
    }
  }
);


// end scrolltigger
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#end",
      start: "top bottom",
      end: "50% bottom",
      scrub: 2,
    },
  })
  .fromTo(
    ".end__inner",
    { borderRadius: "20rem 20rem 0 0" },
    { borderRadius: "100rem 100rem 0 0" }
  );

gsap.fromTo(
  ".end__decs",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    scrollTrigger: {
      trigger: "#end",
      start: "90% center",
      end: "bottom center",
      scrub: 2,
      markers: true,
    },
  }
);

// contact scrolltrigger
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#contact",
      start: "top bottom",
      end: "50% bottom",
      scrub: 2,
    },
  })
  .fromTo(".contact__text__ani-01", { xPercent: 400, opacity : 0}, { xPercent: 0, opacity : 1 })
  .fromTo(".contact__text__ani-02", { xPercent: -400, opacity : 0}, { xPercent: 0, opacity : 1 }, "<");

// swiper
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: false,
  spaceBetween: 10,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1, 
    },
    481: {
      slidesPerView: 1.1,
    },
    1025: {
      slidesPerView: 2.1,
    },
    1400: {
      slidesPerView: 3.1,
    },
  },

   on: {
    init: () => ScrollTrigger.refresh(),
    resize: () => ScrollTrigger.refresh(),
  }
});
