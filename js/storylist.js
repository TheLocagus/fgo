const fuyukiStoryButton = document.querySelector('.single-singu-wrap:nth-child(1) .single-singu-buttons .full-story button')

const blurPopup = document.querySelector('.popup-blur')
const storyPopup = document.querySelector('.story-alert')
const closePopup = document.querySelector('.close-popup')
const wholePage = document.querySelector('.whole-page-wrapper')

let flag = false;

fuyukiStoryButton.addEventListener('click', function () {
    flag = true;
    if (flag === true) {
        blurPopup.classList.add('active');
        storyPopup.classList.add('active');
        wholePage.style.filter = "blur(4px)"
    }
})
closePopup.addEventListener('click', function () {
    flag = false;
    if (flag === false) {
        blurPopup.classList.remove('active')
        storyPopup.classList.remove('active')
        wholePage.style.filter = "blur(0px)"
    }
})