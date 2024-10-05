let container = document.querySelector(".container"),
    cont_menu = document.querySelector(".cont_menu"),
    menuBtn = document.querySelector(".burger"),
    back_menuBtn = document.querySelector(".head__cont_menu");
back_menuBtn.onclick = function() {
    cont_menu.classList.toggle('open');
}
menuBtn.onclick = function() {
    cont_menu.classList.remove('open');
}
const openButton = document.querySelector(".openButton"),
    clouse = document.querySelector(".close"),
    clouse_767 = document.querySelector(".close_767"),
    openButton_767 = document.querySelector(".openButton_767");
openButton.onclick = function() {
    let sliders = document.querySelectorAll(".navBrands__hidden");
    sliders.forEach(function(slider) {
        slider.style.display = 'flex';
        slider.style.backgroundColor = '#FFFFFF';
        slider.style.justifyContent = 'space-between';
        slider.style.border = '1px solid #EAEAEA';
        slider.style.borderRadius = '5px';
        slider.style.marginRight = '32px';
        openButton.style.display = 'none';
        clouse.style.display = 'flex';
    });
}
openButton_767.onclick = function() {
    let sliders_767 = document.querySelectorAll(".navBrands__hidden");
    sliders_767.forEach(function(slider_767) {
        slider_767.style.display = 'flex';
        slider_767.style.backgroundColor = '#FFFFFF';
        slider_767.style.justifyContent = 'space-between';
        slider_767.style.border = '1px solid #EAEAEA';
        slider_767.style.borderRadius = '5px';
        slider_767.style.marginRight = '32px';
        openButton_767.style.display = 'none';
        clouse_767.style.display = 'flex';
    });
}
clouse.onclick = function() {
    let sliders = document.querySelectorAll(".navBrands__hidden");
    sliders.forEach(function(slider) {
        slider.style.display = 'none';
    });
    clouse.style.display = 'none';
    openButton.style.display = 'block';
}
clouse_767.onclick = function() {
    let sliders_767 = document.querySelectorAll(".navBrands__hidden");
    sliders_767.forEach(function(slider_767) {
        slider_767.style.display = 'none';
    });
    clouse_767.style.display = 'none';
    openButton_767.style.display = 'block';
}

const openBut = document.querySelector(".SectionRepearTex__openButton"),
sectionRepearTex__close = document.querySelector('.SectionRepearTex__close');
openBut.onclick = function() {
    let sliders = document.querySelectorAll(".navTex__hidd");
    sliders.forEach(function(slider) {
        slider.style.display = 'block';
        slider.style.backgroundColor = '#FFFFFF';
        slider.style.justifyContent = 'space-between';
        slider.style.border = '1px solid #EAEAEA';
        slider.style.borderRadius = '5px';
       
        openBut.style.display = 'none';
        sectionRepearTex__close.style.display = 'flex';
    });
}
sectionRepearTex__close.onclick = function() {
    let sliders = document.querySelectorAll(".navTex__hidd");
    sliders.forEach(function(slider) {
        slider.style.display = 'none';
    });
    sectionRepearTex__close.style.display = 'none';
    openBut.style.display = 'block';
}

