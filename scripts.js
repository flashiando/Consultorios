// smooth scrolling (completo https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link), revisar
// smooth scrolling (completo https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link), revisar
//PRUEBA DE REPO DE JAVI
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


/* http://ignaciogutierrez.cl/desarrollar-menu-con-efecto-scroll-cambio-de-color/  */

$(window).scroll(function() {
    if ($("#navegacion").offset().top > 50) {
        $("#navegacion").addClass("bg-dark");
    }
    else {
        $("#navegacion").removeClass("bg-dark");
    }
});