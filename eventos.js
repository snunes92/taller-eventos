document.addEventListener("DOMContentLoaded", function () {//nos aseguramos de que la pagina cargue antes de correr nuestro codigo
    const miDiv = document.getElementById("miDiv");

    miDiv.addEventListener("click", function () {
        alert("Hola! Soy el div");
    });
};
