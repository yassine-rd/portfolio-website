/*==================== SHOWING & HIDING MENU ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== SHOW MENU =====*/
/* Checking if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== HIDE MENU =====*/
/* Checking if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVING MOBILE MENU ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SHOWING SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
      skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active');
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== PROJECTS SWIPER ====================*/
let projects_swiper = new Swiper('.projects__container', {
    cssMode: true,
    loop:true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

/*==================== BLOG SWIPER ====================*/
let blog_swiper = new Swiper('.blog__container', {
  cssMode: true,
  loop:true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/*==================== SCROLLING THROUGH SECTIONS & ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGING HEADER BACKGROUND ====================*/
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOWING SCROLL UP BUTTON ====================*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK/LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected theme
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a theme
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user has chosen
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== MAIL SENDING ====================*/

var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("contact__status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.classList.add('success');
          status.innerHTML = "Thanks for your submission !";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.classList.add('error');
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.classList.add('error');
              status.innerHTML = "Oops! Something went wrong"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr_right = ScrollReveal({
  origin: 'right',
  distance: '50px',
  duration: 2500,
})

sr_right.reveal('.home__img', {distance: '120px'})
sr_right.reveal('.home__data')

const sr_left = ScrollReveal({
  origin: 'left',
  distance: '50px',
  duration: 2500,
})

sr_left.reveal('.home__social')

const sr_bottom = ScrollReveal({
  origin: 'bottom',
  distance: '50px',
  duration: 2500,
})

sr_bottom.reveal('.home__scroll')

ScrollReveal().reveal('.section__title', {duration: 2000, delay: 300})
ScrollReveal().reveal('.section__subtitle', {duration: 2500, delay: 400})
ScrollReveal().reveal('.about__container', {duration: 2000, delay: 400})
ScrollReveal().reveal('.skills__container', {duration: 2000, delay: 50})
ScrollReveal().reveal('.qualification__container', {duration: 2000, delay: 50})
ScrollReveal().reveal('.certification__container', {duration: 2000, delay: 50})
ScrollReveal().reveal('.projects__container', {duration: 2000, delay: 50})
ScrollReveal().reveal('.blog__container', {duration: 2000, delay: 50})
ScrollReveal().reveal('.contact__container', {duration: 2000, delay: 50})

/*==================== TYPED JS ====================*/
const typed_home = new Typed('#multiple-text', {
    strings: ['AI Enginner Intern', 'Deep Learning Enthusiast'],
    typeSpeed: 100,
    backSpeed: 30,
    backDelay: 1000,
    loop: true,
    });

const typed_footer = new Typed('#multiple-text-footer', {
    strings: ['AI Enginner Intern', 'Deep Learning Enthusiast'],
    typeSpeed: 100,
    backSpeed: 30,
    backDelay: 1000,
    loop: true,
    });