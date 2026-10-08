
function cambiarColor() {
    const colores = ["green", "blue", "red"];

    const numeroAleatorio = Math.floor(Math.random() * 3);

    this.style.color = colores[numeroAleatorio];
}

const etiquetasH5 = document.querySelectorAll("h5");

etiquetasH5.forEach(function(etiqueta) {
    etiqueta.addEventListener("click", cambiarColor);
});
