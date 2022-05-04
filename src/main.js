/* ========== OPEN/CLOSE MOBILE MENU ========== */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* ========== CLOSE MENU WHEN SELECT LINK ========== */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* ========== SHADOW WHEN SCROLLING ========== */
function shadowWhenScrolling() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/* ========== SWIPER - SLIDER ========== */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets'
  },
  mousewheel: true,
  keyboard: true,
  speed: 1200,
  loop: true,

  breakpoints: {
    // when window width is >= 767px
    767: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }
})

/* ========== SCROLL REVEAL ========== */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
#home .text, #home .image,
#about .image, #about .text,
#services .card, #services .header,
#testimonials .header, #testimonials .testimonials,
#contact .text, #contact i,
footer .brand, footer .social
`,
  { interval: 100 }
)

/* ========== BACK TO TOP ========== */
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  if (window.scrollY >= 600) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function () {
  shadowWhenScrolling()
  backToTop()
})
