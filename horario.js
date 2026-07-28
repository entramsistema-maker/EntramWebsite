document.addEventListener("DOMContentLoaded", () => {

    const botonAbrir = document.getElementById("abrir-horario");
    const botonCerrar = document.getElementById("cerrar-horario");
    const modal = document.getElementById("modal-horario");
    const fondo = document.getElementById("fondo-modal-horario");

    if (!botonAbrir || !modal) return;

    function abrirModal() {
        modal.classList.add("activo");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-abierto");
    }

    function cerrarModal() {
        modal.classList.remove("activo");
        modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-abierto");
    }

    botonAbrir.addEventListener("click", abrirModal);

    if (botonCerrar) {
        botonCerrar.addEventListener("click", cerrarModal);
    }

    if (fondo) {
        fondo.addEventListener("click", cerrarModal);
    }

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            cerrarModal();
        }
    });

});
