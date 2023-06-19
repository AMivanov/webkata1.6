import Swiper, { Pagination } from 'swiper'

const content = document.querySelector('.main__content')
const openContentButton = document.querySelector('.main__content-button')
const imgButton = document.querySelector('.button__image')
const bthText = document.querySelector('.button__text')

openContentButton.addEventListener('click', function () {
  if (content.classList.contains('main__content-more') === true) {
    content.classList.remove('main__content-more')
    imgButton.style = 'transform: rotate(0deg)'
    bthText.textContent = 'Читать далее'
  } else {
    content.classList.add('main__content-more')
    imgButton.style = 'transform: rotate(180deg)'
    bthText.textContent = 'Скрыть'
  }
})

const cardBrand = document.querySelector('.brand-card__block')
const brandButton = document.querySelector('.brand__content-button')
const brandImgButton = document.querySelector('.brand-card__image')
const brandThtButton = document.querySelector('.brand-card__text')

brandButton.addEventListener('click', function () {
  if (cardBrand.classList.contains('brand__card-more') === true) {
    cardBrand.classList.remove('brand__card-more')
    brandImgButton.style = 'transform: rotate(0deg)'
    brandThtButton.textContent = 'Показать ещё'
  } else {
    cardBrand.classList.add('brand__card-more')
    brandImgButton.style = 'transform: rotate(180deg)'
    brandThtButton.textContent = 'Скрыть'
  }
})

const cardTechnique = document.querySelector('.technique-card__block')
const techniqueButton = document.querySelector('.technique__content-button')
const techniqueImgButton = document.querySelector('.technique-card__image')
const techniqueThtButton = document.querySelector('.technique-card__text')

techniqueButton.addEventListener('click', function () {
  if (cardTechnique.classList.contains('technique-card__more') === true) {
    cardTechnique.classList.remove('technique-card__more')
    techniqueImgButton.style = 'transform: rotate(0deg)'
    techniqueThtButton.textContent = 'Показать ещё'
  } else {
    cardTechnique.classList.add('technique-card__more')
    techniqueImgButton.style = 'transform: rotate(180deg)'
    techniqueThtButton.textContent = 'Скрыть'
  }
})

const popupLeft = document.querySelector('.site-menu__left')
const openPopupLeftButton = document.querySelector('.header__burger')
const closePopupLeftButton = document.querySelector('.site-menu__left-cross')
const bodyBlur = document.querySelector('.body__blur')
const body = document.querySelector('body')

openPopupLeftButton.addEventListener('click', function () {
  popupLeft.classList.add('site-menu__left-open')
  bodyBlur.style = 'visibility: visible'
  body.style = 'overflow: hidden'
})

closePopupLeftButton.addEventListener('click', function () {
  popupLeft.classList.remove('site-menu__left-open')
  bodyBlur.style = 'visibility: hidden'
  body.style = 'overflow: scroll'
})

bodyBlur.addEventListener('click', function () {
  popupLeft.classList.remove('site-menu__left-open')
  bodyBlur.style = 'visibility: hidden'
  body.style = 'overflow: scroll'
})

const popupCall = document.querySelector('.call-menu')
const openPopupCall = document.querySelector('.header__phone')
const closePopupCall = document.querySelector('.call-menu__cross')
const openPopupCallLeft = document.querySelector('.site-footer__left-phone')

openPopupCall.addEventListener('click', function () {
  popupCall.classList.add('call-menu__open')
  bodyBlur.style = 'visibility: visible'
  body.style = 'overflow: hidden'
})

openPopupCallLeft.addEventListener('click', function () {
  popupCall.classList.add('call-menu__open')
  bodyBlur.style = 'visibility: visible'
  body.style = 'overflow: hidden'
})

closePopupCall.addEventListener('click', function () {
  popupCall.classList.remove('call-menu__open')
  bodyBlur.style = 'visibility: hidden'
  body.style = 'overflow: scroll'
})

bodyBlur.addEventListener('click', function () {
  popupCall.classList.remove('call-menu__open')
  Blur.style = 'visibility: hidden'
  body.style = 'overflow: scroll'
})

const popupChat = document.querySelector('.feedback-menu')
const openPopupChat = document.querySelector('.header__chat')
const closePopupChat = document.querySelector('.feedback-menu__cross')
const openPopupChatLeft = document.querySelector('.site-footer__left-chat')

openPopupChat.addEventListener('click', function () {
  popupChat.classList.add('feedback-menu__open')
  bodyBlur.style = 'visibility: visible'
  body.style = 'overflow: hidden'
})

openPopupChatLeft.addEventListener('click', function () {
  popupChat.classList.add('feedback-menu__open')
  bodyBlur.style = 'visibility: visible'
  body.style = 'overflow: hidden'
})

closePopupChat.addEventListener('click', function () {
  popupChat.classList.remove('feedback-menu__open')
  bodyBlur.style = 'visibility: hidden'
  body.style = 'overflow: scroll'
})

bodyBlur.addEventListener('click', function () {
  popupChat.classList.remove('feedback-menu__open')
  bodyBlur.style = 'visibility: hidden'
  body.style = 'overflow: scroll'
})

const sliderBrands = document.querySelector('.swiper')
const sliderViewTech = document.querySelector('.tech-swiper')
const sliderPrice = document.querySelector('.price-swiper')
let mySwiper1
let mySwiper2
let mySwiper3

function mobileSliderBrands() {
  if (window.innerWidth < 768) {
    mySwiper1 = new Swiper(sliderBrands, {
      slidesPerView: 'auto',
      loop: true,
      slideClass: 'swiper-slide',
      modules: [Pagination],
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
      }
    })
    sliderBrands.dataset.mobile = 'true'
  }
  if (window.innerWidth >= 768) {
    sliderBrands.dataset.mobile = 'false'

    if (sliderBrands.classList.contains('swiper-initialized')) {
      mySwiper1.destroy()
    }
  }
}

function mobileSliderViewTech() {
  if (window.innerWidth < 768) {
    mySwiper2 = new Swiper(sliderViewTech, {
      slidesPerView: 'auto',
      loop: true,
      slideClass: 'swiper-slide',
      modules: [Pagination],
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
      }
    })
    sliderViewTech.dataset.mobile = 'true'
  }
  if (window.innerWidth >= 768) {
    sliderViewTech.dataset.mobile = 'false'

    if (sliderViewTech.classList.contains('swiper-initialized')) {
      mySwiper2.destroy()
    }
  }
}

function mobileSliderPrice() {
  if (window.innerWidth < 768) {
    mySwiper3 = new Swiper(sliderPrice, {
      slidesPerView: 'auto',
      loop: true,
      slideClass: 'swiper-slide',
      modules: [Pagination],
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
      }
    })
    sliderPrice.dataset.mobile = 'true'
  }
  if (window.innerWidth >= 768) {
    sliderPrice.dataset.mobile = 'false'

    if (sliderPrice.classList.contains('swiper-initialized')) {
      mySwiper3.destroy()
    }
  }
}

mobileSliderBrands()
mobileSliderViewTech()
mobileSliderPrice()
