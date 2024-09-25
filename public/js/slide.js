// Código retirado do W3school e concertato pelo Caique Militão
// Ressalto que tudo que menciona ou referencia a div MySlides e sua componentes internas, foram retirados do w3school
// Mensiono também que estou escrevendo isso AQUI porquê só AQUI eu sei que o código não vai quebrar por causa do meu comentário

let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    slideIndex += n
    showSlides(slideIndex);
}
function currentSlide(n) {
    showSlides(n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    if (n >= slides.length) {
        n = 0
    } else if (n < 0) {
        n = slides.length - 1
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[n].style.display = "block";
    slideIndex = n
}