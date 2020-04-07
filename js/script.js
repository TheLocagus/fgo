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


//Triangles

translateSection.addEventListener('click', function () {
    if (translateSectionx.classList.contains('triangles')) {
        translateSectionx.classList.remove('triangles')
    }
    translateSection.classList.toggle('triangles')
})
translateSectionx.addEventListener('click', function () {
    if (translateSection.classList.contains('triangles')) {
        translateSection.classList.remove('triangles')
    }
    translateSectionx.classList.toggle('triangles')
})


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