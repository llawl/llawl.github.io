const menu = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
menu.addEventListener('click', function () {
    nav.classList.toggle('slide');
})

$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {
                window.location.hash = hash;
            });
        }
    });
});