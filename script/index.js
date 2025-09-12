gsap.registerPlugin(ScrollTrigger);

// header script
const ACTIVE = 'active';
const menuBtn = document.querySelector('.header__menu-m');
const mobileMenu = document.querySelector('.menu__m');
const mobileMenuList = mobileMenu.querySelectorAll('.menu__m-list');


const menuOpen = () => {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle(ACTIVE);
    })

    mobileMenuList.forEach((item)=>{
        item.addEventListener('click', () => {
            mobileMenu.classList.remove(ACTIVE);
        })
    })
    
    window.addEventListener('resize', () => {
    let windowWith = window.innerWidth;
        if(windowWith >= 1024) {
            mobileMenu.classList.remove(ACTIVE);
        }
    })
}

menuOpen();

// main scrolltrigger
gsap.timeline({
  scrollTrigger: { 
    trigger: "#main",
    start: "top top",
    end: "bottom top",
    scrub : 2,
  },
})
.fromTo('.main__text-ani-01', { x: 0 }, { x: -1000 })
.fromTo('.main__text-ani-02', { x: 0 }, { x: 1000 },'<');



// intro scrolltrigger
gsap.timeline({
  scrollTrigger: { 
    trigger: ".intro__decs-ani",
    start: "top 80%",   
    end: "bottom 60%",  
    scrub: 1,
  },
})
.fromTo('.intro__decs-ani', 
  { backgroundSize: "0% 100%" }, 
  { backgroundSize: "100% 100%" }
);

    
gsap.timeline({
  scrollTrigger: { 
    trigger: ".intro__contents",
    start: "20% bottom",
    end: "bottom bottom",
    scrub : 2,
  },
})
.fromTo('.intro__img-wrap > img', 
  { borderRadius: "0 0 0 0" }, 
  { borderRadius: "10rem 0 0 0" }
);

// work scrolltrigger

gsap.timeline({
  scrollTrigger: { 
    trigger: ".web__contents-01",
    start: "top bottom",
    end: "bottom bottom",
    scrub : 2,
  },
})
.fromTo('.web__img-wrap-01 img', 
  { borderRadius: "0 0 0 0" }, 
  { borderRadius: "0 10rem 0 0" }
);

gsap.timeline({
  scrollTrigger: { 
    trigger: ".web__contents-02",
    start: "top bottom",
    end: "bottom bottom",
    scrub : 2,
  },
})
.fromTo('.web__img-wrap-02 img', 
  { borderRadius: "0 0 0 0" }, 
  { borderRadius: "10rem 0 0 0" }
);


// end scrolltigger
gsap.timeline({
  scrollTrigger: { 
    trigger: "#end",
    start: "top bottom",
    end: "50% bottom",
    scrub : 2,
  },
})
.fromTo('.end__inner', 
  { borderRadius: "20rem 20rem 0 0" }, 
  { borderRadius: "100rem 100rem 0 0" }
);

gsap.fromTo('.end__decs', {
  opacity: 1,
}, {
  opacity: 0,
  scrollTrigger: {
    trigger: "#end",
    start: "90% center",
    end: "bottom center",
    scrub: 2,
    markers: true
  }
});


// contact scrolltrigger 
gsap.timeline({
  scrollTrigger: { 
    trigger: "#contact",
    start: "top bottom",
    end: "50% bottom",
    scrub : 2,
  },
})
.fromTo('.contact__text__ani-01', { x: 1000 }, { x: 0 })
.fromTo('.contact__text__ani-02', { x: -1000 }, { x: 0 },'<');

// swiper
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  spaceBetween: 10,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  // 👉 반응형 옵션
  breakpoints: {
    // 320: {
    //   slidesPerView: 1   
    // },
    // 480: {
    //   slidesPerView: 1.5  
    // },
    0: {
      slidesPerView: 1 // 원래 네가 준 값
    },
    481: {
      slidesPerView: 1.1 // 원래 네가 준 값
    },
    1025: {
      slidesPerView: 2.1 // 원래 네가 준 값
    },
    1400: {
      slidesPerView: 3.1 // 원래 네가 준 값
    }
  }
});
