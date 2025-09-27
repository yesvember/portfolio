// mouse change
// const mouse = document.querySelector('.mouse');
// const contactTxtItems = document.querySelectorAll('.contact p');
// const MOUSE_CHANGE = 'mouse-change';

// // 마우스 변경
// window.addEventListener('mousemove', (event) => {
//     mouse.style.left = `${event.clientX}px`;
//     mouse.style.top = `${event.clientY}px`;
// });

// contactTxtItems.forEach((item) => {
//     item.addEventListener('mouseover', (event) => {
//         mouse.classList.add(MOUSE_CHANGE);
//     });
//     item.addEventListener('mouseout', (event) => {
//         mouse.classList.remove(MOUSE_CHANGE);
//     });
// });



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

// gsap animation
gsap.registerPlugin(ScrollTrigger);
window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});

// intro scrolltrigger
gsap.fromTo('.intro__img-wrap > img', 
  { y: -60, scale: 1.2 }, 
  { y: 0, scale: 1,

    scrollTrigger: {
      trigger: "#intro",
      start: "center bottom",
      end: "200% bottom",
      scrub: 1
    }
  }
);

// skills scrolltrigger
// gsap.fromTo('.skills-deco', 
//   { y: 0}, 
//   { y: 200,

//     scrollTrigger: {
//       trigger: ".section-skills",
//       start: "80% bottom",
//       end: "200% bottom",
//       scrub: 1
//     }
//   }
// );

// work scrolltrigger
// gsap.fromTo('.work__intro-left img', 
//   { y: -200, scale: 1.2 }, 
//   { y: -300, scale: 1,

//     scrollTrigger: {
//       trigger: ".work__intro",
//       start: "20% bottom",
//       end: "200% bottom",
//       scrub: 1
//     }
//   }
// );

gsap.fromTo('.work-deco', 
  {rotate : 360}, 
  {rotate:0,
    
    scrollTrigger: {
      trigger: ".work__intro",
      start: "20% bottom",
      end: "200% bottom",
      scrub: 1
    }
  }
);


// end scrolltigger
gsap.fromTo(
  ".end__inner",
  {
    borderRadius: "20rem 20rem 0 0"
  },
  {
    borderRadius: "100rem 100rem 0 0",

      scrollTrigger: {
      trigger: "#end",
      start: "top bottom",
      end: "50% bottom",
      scrub: 1,
    },
  }
);

gsap
  .timeline({
  scrollTrigger: {
      trigger: "#end",
      start: "90% center",
      end: "bottom center",
      scrub: 1,
    },
  })
  .fromTo( ".end__decs", 
    { opacity: 1}, 
    {opacity: 0});


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


 
// work intro swiper
 const swiperIntro = new Swiper(".work-intro-swiper", {
   direction: "horizontal",
   loop: true,
   slidesPerView: 1, 
   effect: "fade", 
   fadeEffect: {
     crossFade: true 
   },
   autoplay: {
     delay: 1000,
   },
 });

// web design swiper
const swiper1 = new Swiper(".swiper__01", {
  direction: "horizontal",
  loop: false,
  spaceBetween: 10,
   autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true, 
  },

  breakpoints: {
    0: {
      slidesPerView: 1, 
    },
    481: {
      slidesPerView: 1,
    },
    769: {
      slidesPerView: 2,
    },
    1200: { 
      slidesPerView: 3,
    },
  },
});

// web clone coding swiper
const swiper2 = new Swiper(".swiper__02", {
  direction: "horizontal",
  loop: false,
  spaceBetween: 10,
   autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true, 
  },

  breakpoints: {
     0: {
      slidesPerView: 1, 
    },
    481: {
      slidesPerView: 1,
    },
    769: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 2,
    },
  },
});

// another design swiper
const swiper3 = new Swiper(".swiper__03", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 10,
   autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true, 
  },
  
  breakpoints: {
    0: {
      slidesPerView: 1, 
    },
    481: {
      slidesPerView: 1,
    },
    769: {
      slidesPerView: 2,
    },
    1025: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});


