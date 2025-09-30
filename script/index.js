// 마우스 커서 이벤트
// if (window.innerWidth > 1024) {
   const mouse = document.querySelector('.mouse');
   const endInner = document.querySelectorAll('.end__inner');
   const workSlide = document.querySelectorAll('.swiper-slide-ani');
   const aAll = document.querySelectorAll('.event');
   const CHANGE = 'active-02';
   const SCALE = 'active-03';

   window.addEventListener('mousemove', (event) => {
       mouse.style.left = `${event.clientX}px`;
       mouse.style.top = `${event.clientY}px`;
   });

  // work swiper slide 
   workSlide.forEach((item) => {
     item.addEventListener('mouseover', () => mouse.classList.add(ACTIVE));
     item.addEventListener('mouseout', () => mouse.classList.remove(ACTIVE));
   });

  // end inner
   endInner.forEach((item) => {
     item.addEventListener('mouseover', () => mouse.classList.add(CHANGE));
     item.addEventListener('mouseout', () => mouse.classList.remove(CHANGE));
   });

  // a tag 
   aAll.forEach((item) => {
     item.addEventListener('mouseover', () => mouse.classList.add(SCALE));
     item.addEventListener('mouseout', () => mouse.classList.remove(SCALE));
   });
// }


// header script
const menuBtn = document.querySelector(".header__menu-m");
const mobileMenu = document.querySelector(".menu__m");
const mobileMenuList = mobileMenu.querySelectorAll(".menu__m-list");
const ACTIVE = "active";

const menuOpen = () => {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle(ACTIVE);
  });

  mobileMenuList.forEach((item) => {
    item.addEventListener("click", () => {
      mobileMenu.classList.remove(ACTIVE);
    });
  });
};
menuOpen();

window.addEventListener("resize", () => {
  let windowWidth = window.innerWidth;
  if (windowWidth >= 1024 || mobileMenu.classList.contains(ACTIVE)) {
    mobileMenu.classList.remove(ACTIVE);
  }
});

// gsap animation
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});

// main scrolltrigger
gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    start: "20% top",
    end: "bottom top", 
    scrub:  1,
  }
})
.fromTo(".main__text-01", { x: 0, opacity: 1 }, { x: 400, opacity: 0 })
.fromTo(".main__text-02", { x: 0, opacity: 1 }, { x: -400, opacity: 0 }, "<");


// intro scrolltrigger
gsap.fromTo('.intro__img-wrap > img', 
  { scale: 1.4 }, 
  { scale: 1,

    scrollTrigger: {
      trigger: "#intro",
      start: "center bottom",
      end: "200% bottom",
      scrub: 1
    }
  }
);

// work scrolltrigger
 gsap.fromTo('.work-intro-swiper img', 
   { scale: 1.4 }, 
   { scale: 1,

     scrollTrigger: {
       trigger: ".work__intro",
       start: "20% bottom",
       end: "200% bottom",
       scrub: 1
     }
   }
 );

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
  .fromTo(".contact__text__ani-01", { x: 400, opacity : 0}, { x: 0, opacity : 1 })
  .fromTo(".contact__text__ani-02", { x: -400, opacity : 0}, { x: 0, opacity : 1 }, "<");


 
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


