function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
}

window.addEventListener('resize', function () {
    var largura = window.innerWidth;
    let menuMobile = document.querySelector('.mobile-menu');

    if (largura > 670 && menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    }
});