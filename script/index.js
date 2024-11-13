// top 버튼
const topBtn = document.querySelector('.top');
window.addEventListener('scroll', () => {
    const scroll = document.documentElement.scrollTop
  if (scroll > 1000) {
        topBtn.style.opacity = 1;  
  } else {
        topBtn.style.opacity = 0;  
  }
});
const scrollToTop = () => {
  document.documentElement.scrollTop = 0;
};
topBtn.addEventListener('click', scrollToTop);

// 사이드 메뉴 토글
const sideMenuBtn = document.querySelector('.side-menu-btn > button');
const spans = sideMenuBtn.querySelectorAll('span');
const sideMenu = document.querySelector('.side-menu');
const spanClasses = ['on', 'on2', 'on'];

sideMenuBtn.addEventListener('click', () => {
    spans.forEach((item, index) => {
        item.classList.toggle(spanClasses[index]);
    });
    sideMenu.classList.toggle('side');
});

// 메인  
const landing = document.querySelector('.landing');
const landingTrigger = landing.querySelector('.landing-trigger');
const landingTitle = landing.querySelector('.landing-title');
const landingTxt = landing.querySelector('.landing-txt');
const landingBtn = landing.querySelector('.landing-btn');

let observerlanding = new IntersectionObserver((event) => {
    event.forEach((item) => {
        if (item.isIntersecting) {
            if (item.target === landingTrigger) {
                landingTitle.style.opacity = 1;
                landingTitle.style.transform = 'translateX(0%)';

                setTimeout(() => {
                    landingTxt.style.opacity = 1;
                    landingTxt.style.transform = 'translateX(0%)';
                }, 600);

                setTimeout(() => {
                    landingBtn.style.opacity = 1;
                }, 800);
            } 

        } else {
            landingTitle.style.opacity = 0;
            landingTitle.style.transform = 'translateX(-10%)';
            landingTxt.style.opacity = 0;
            landingTxt.style.transform = 'translateX(-10%)';
            landingBtn.style.opacity = 0;
         
        }
    });
});
observerlanding.observe(landingTrigger);


// skills 
const skills = document.querySelector('.skills');
const skillsTriggerTp = skills.querySelector('.skills-trigger-1');
const skillsTitle = skills.querySelector('h2');
const skillsGraph = skills.querySelectorAll('.skills-graph');

let observerSkills = new IntersectionObserver((event) => {
    event.forEach((item) => {
        if (item.isIntersecting) {
            if (item.target === skillsTriggerTp) {
               skillsTitle.style.opacity = 1;
               skillsTitle.style.transform = 'translateY(0%)';
               
                skillsGraph.forEach(span => {
                    setTimeout(() => {
                        span.style.display = 'inline-block';
                    }, 200)
                });
            }
        } else {
            skillsTitle.style.opacity = 0;
            skillsTitle.style.transform = 'translateY(10%)';
            skillsGraph.forEach(span => {
                span.style.display = 'none';
            });
        }
    });
});
observerSkills.observe(skillsTriggerTp);

// skillsTool
const skillsTool = document.querySelector('.skills-tool');
const skillsTriggerBt = document.querySelector('.skills-trigger-2');
const skillsToolTitle = skillsTool.querySelector('h3');
const skillsToolList = skillsTool.querySelectorAll('li');
const skillsToolTxtBox = skillsTool.querySelector('.skills-note');
const skillsToolIcon = skillsToolTxtBox.querySelector('span');
const ROTATE = 'rotate';

let observerSkillsTool = new IntersectionObserver((event) => {
    event.forEach((item) => {
        if (item.isIntersecting) {
            if (item.target === skillsTriggerBt) {
                skillsToolTitle.style.opacity = 1;
                skillsToolTitle.style.transform = 'translateY(0%)';

                setTimeout(() => {
                    skillsToolList.forEach((li, index) => {
                        li.style.opacity = 1;
                        li.style.transform = 'translateX(0)';
                        li.style.transition = `transform 0.4s ease ${index * 0.1}s, opacity 0.4s ease ${index * 0.1}s`;
                    });
                }, 400);
                setTimeout(() => {
                    skillsToolIcon.style.transform = ' rotate(360deg)';
                }, 1000)
            }
        } else {
            skillsToolTitle.style.opacity = 0;
            skillsToolTitle.style.transform = 'translateY(20%);';
            skillsToolList.forEach((li) => {
                li.style.opacity = 0;
                li.style.transform = 'translateX(-20%)';
            });
            skillsToolIcon.style.transform = ' rotate(0deg)';
        }
    });
});
observerSkillsTool.observe(skillsTriggerBt);

// contact
const contact = document.querySelector('.contact');
const contactTrigger = contact.querySelector('.contact-trigger');
const contactLf = contact.querySelector('.contact-lf');
const contactRt = contact.querySelector('.contact-rt');

let observerContact = new IntersectionObserver((event) => {
    event.forEach((item) => {
        if (item.isIntersecting) {
            if (item.target === contactTrigger) {
                contactLf.style.opacity = 1;
                contactLf.style.transform = 'rotate(0deg)';
                contactRt.style.opacity = 1;
                contactRt.style.transform = 'rotate(0deg)';
            }
        } 
        else {
            contactLf.style.opacity = 0;
            contactLf.style.transform = 'rotate(90deg)';
            contactRt.style.opacity = 0;
            contactRt.style.transform = 'rotate(-90deg)';
        }
    });
});

observerContact.observe(contactTrigger);
