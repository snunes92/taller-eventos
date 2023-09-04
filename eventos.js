document.addEventListener("DOMContentLoaded", function () {//nos aseguramos de que la pagina cargue antes de correr nuestro codigo
    const miDiv = document.getElementById("miDiv");
    const saludarButton = document.getElementById("saludarButton");

    miDiv.addEventListener("click", function (event) {
        alert("Hola! Soy el div");
    });

    saludarButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Detiene la propagación del evento en el botón
        alert("Hola!");
    });
});