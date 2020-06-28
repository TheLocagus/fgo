const translateSection = document.querySelector('li.li-main-dropdown')
const menuList = document.querySelector('ul.dropdown-story')

function showList() {
    menuList.classList.toggle('active')
    if (menuListx.classList.contains('active')) {
        menuListx.classList.remove('active')
    }
}
translateSection.addEventListener('click', showList)
//

const translateSectionx = document.querySelector('.li-main-dropdownx')
const menuListx = document.querySelector('ul.dropdown-anime')

function showListx() {
    menuListx.classList.toggle('active')
    if (menuList.classList.contains('active')) {
        menuList.classList.remove('active')
    }
}
translateSectionx.addEventListener('click', showListx)



// Fixed arrow up

$(document).on('scroll', function () {
    if ($(document).scrollTop() >= 400) {
        $('div.up-elevator').addClass('show')
    }
    if ($(document).scrollTop() <= 200) {
        $('div.up-elevator').removeClass('show')
    }
})

$('div.up-elevator').on('click', function () {
    $('body, html').animate({
        scrollTop: 0
    }, 500)
})

//Navbar mobile

const navBar = document.querySelector('.navbar-mobile');
const mobileMenu = document.querySelector('nav')

navBar.addEventListener('click', function () {
    navBar.classList.toggle('active')
    mobileMenu.classList.toggle('active')
})


//Banner



class Banner {
    constructor(bannerImages) {
        this.bannerImages = bannerImages;
        this.imageContainer = null;
        this.images = null;
        this.bannerImagesLength = 0;
        this.currentSlide = 0;
        this.bannerDots = null;
        this.dots = null;
        this.dotsArr = null;


        this.UiSelectors = {
            imageContainer: '[data-banner]',
            bannerDots: '[data-bannerDots]',
        }

        this.initialize();

    }

    initialize() {
        this.imageContainer = document.querySelector(this.UiSelectors.imageContainer);
        this.dotsContainer = document.querySelector(this.UiSelectors.bannerDots);


        this.bannerImagesLength = this.bannerImages.length;

        this.appendDots();

        this.dots = document.getElementsByClassName('js-banner-dot');
        this.dotsArr = [...this.dots];

        this.images = document.createElement('img');

        this.setAttributes(0);
        this.markActiveDot(0);


        this.imageContainer.appendChild(this.images);

        this.eventListeners();

        this.bannerInterval = setInterval(() => {
            this.changeSlide(++this.currentSlide);
            this.markActiveDot(this.currentSlide)

        }, 3000);

    }

    appendDots() {

        for (let i = 0; i < this.bannerImagesLength; i++) {
            this.dot = document.createElement('div');
            this.dot.classList.add('change-slide-dot');
            this.dot.classList.add('js-banner-dot')
            this.dot.dataset.number = i;
            this.dotsContainer.appendChild(this.dot)
        }
    }


    setAttributes(index) {
        this.images.setAttribute('src', this.bannerImages[index])
        this.images.setAttribute('alt', `Slide ${index - (-1)}`)
    }

    markActiveDot(index) {
        this.dotsArr[index].classList.add('active');
    }

    changeSlide(index) {
        if (index >= this.bannerImagesLength) {
            index = 0;
            this.currentSlide = 0;
        }
        this.setAttributes(index);
        this.dotsArr.forEach((dot) => {
            if (dot.classList.contains('active')) {
                dot.classList.remove('active')
            }
        })

    }

    eventListeners() {
        this.dotsArr.forEach((dot) => {
            dot.addEventListener('click', () => {
                this.currentSlide = Number(dot.dataset.number);
                clearInterval(this.bannerInterval);
                this.changeSlide(this.currentSlide);
                this.markActiveDot(this.currentSlide)
                this.bannerInterval = setInterval(() => {
                    this.changeSlide(++this.currentSlide);
                    this.markActiveDot(this.currentSlide)
                }, 3000);
            })

        })
    }

}