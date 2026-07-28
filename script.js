document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carrusel-slide");
    const indicadores = document.querySelectorAll(".indicador");
    const botonAnterior = document.querySelector(".carrusel-anterior");
    const botonSiguiente = document.querySelector(".carrusel-siguiente");
    const carrusel = document.querySelector(".carrusel-contenedor");

    let indiceActual = 0;
    let intervaloAutomatico;

    function mostrarSlide(indice) {
        slides.forEach((slide) => {
            slide.classList.remove("activo");
        });

        indicadores.forEach((indicador) => {
            indicador.classList.remove("activo");
        });

        indiceActual = indice;

        if (indiceActual >= slides.length) {
            indiceActual = 0;
        }

        if (indiceActual < 0) {
            indiceActual = slides.length - 1;
        }

        slides[indiceActual].classList.add("activo");
        indicadores[indiceActual].classList.add("activo");
    }

    function mostrarSiguiente() {
        mostrarSlide(indiceActual + 1);
    }

    function mostrarAnterior() {
        mostrarSlide(indiceActual - 1);
    }

    function iniciarCarruselAutomatico() {
        detenerCarruselAutomatico();

        intervaloAutomatico = setInterval(() => {
            mostrarSiguiente();
        }, 5000);
    }

    function detenerCarruselAutomatico() {
        clearInterval(intervaloAutomatico);
    }

    botonSiguiente.addEventListener("click", () => {
        mostrarSiguiente();
        iniciarCarruselAutomatico();
    });

    botonAnterior.addEventListener("click", () => {
        mostrarAnterior();
        iniciarCarruselAutomatico();
    });

    indicadores.forEach((indicador) => {
        indicador.addEventListener("click", () => {
            const indice = Number(indicador.dataset.slide);

            mostrarSlide(indice);
            iniciarCarruselAutomatico();
        });
    });

    carrusel.addEventListener("mouseenter", detenerCarruselAutomatico);
    carrusel.addEventListener("mouseleave", iniciarCarruselAutomatico);

    mostrarSlide(indiceActual);
    iniciarCarruselAutomatico();
});
