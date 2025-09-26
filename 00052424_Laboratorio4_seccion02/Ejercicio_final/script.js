const boton = document.getElementById("salida");
const labores = document.getElementById("labores");

boton.addEventListener("click", function(){
    const diaSeleccionado = document.querySelector("#diaInput");
    const respuestaContainer = document.getElementById("respuesta");

    switch(diaSeleccionado.value.trim().toLowerCase()){
        case "lunes":
            labores.innerHTML = "Los Lunes debo atender un cliente especifico.";
            respuestaContainer.style.backgroundColor = "rgba(9, 255, 0, 1)";
            labores.style.color = "rgba(0, 0, 0, 1)";
        break;
        case "martes":
            labores.innerHTML = "Los Martes visito una agencia fuera de la ciudad. ";
            respuestaContainer.style.backgroundColor = "rgba(9, 255, 0, 1)";
            labores.style.color = "rgba(0, 0, 0, 1)";
        break;
        case "miercoles":
            labores.innerHTML = "Los Miércoles debo llevar a mi hija al ballet (balé).";
            respuestaContainer.style.backgroundColor = "rgba(9, 255, 0, 1)";
            labores.style.color = "rgba(0, 0, 0, 1)";
        break;
        case "jueves":
            labores.innerHTML = "En Jueves debo priorizar entregas de desarrollo.";
            respuestaContainer.style.backgroundColor = "rgba(9, 255, 0, 1)";
            labores.style.color = "rgba(0, 0, 0, 1)";
        break;
        case "viernes":
            labores.innerHTML = "En Viernes debo atender problemas de manera remota.";
            respuestaContainer.style.backgroundColor = "rgba(9, 255, 0, 1)";
            labores.style.color = "rgba(0, 0, 0, 1)";
        break;
        case "sabado":
            labores.innerHTML = "En Sábado debo hacer lo que mi esposa quiera.";
            respuestaContainer.style.backgroundColor = "rgba(9, 255, 0, 1)";
            labores.style.color = "rgba(0, 0, 0, 1)";
        break;
        default:
            labores.innerHTML = "Por favor, selecciona un día válido de la semana.";
            respuestaContainer.style.backgroundColor = "rgba(255, 0, 0, 1)";
            labores.style.color = "rgba(0, 0, 0, 1)";
        break;
    }
});