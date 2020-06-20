//Open gallery

const sectionOneButton = document.querySelector('div.main-wrapper button')
const sectionOneGallery = document.querySelector('div.gallery-wrapper')

sectionOneButton.addEventListener('click', function () {
    sectionOneButton.classList.toggle('active')
    sectionOneGallery.classList.toggle('active')
})