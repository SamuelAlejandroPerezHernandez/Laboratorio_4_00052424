const boton = document.getElementById("salida");
const labores = document.getElementById("labores");

boton.addEventListener("click", function(){
    const diaSeleccionado = document.querySelector("#diaInput");
    const respuestaContainer = document.getElementById("respuesta");

    switch(diaSeleccionado.value.trim().toLowerCase()){
        case "lunes":
            labores.innerHTML = "El lunes es para revisar las tareas pendientes de la semana pasada y organizar la agenda de estudio.";
            respuestaContainer.style.backgroundColor = "rgba(9, 255, 0, 1)";
            labores.style.color = "rgba(0, 0, 0, 1)";
        break;
        case "martes":
            labores.innerHTML = "El martes es el día ideal para asistir a tutorías o grupos de estudio y avanzar en los proyectos de clase.";
            respuestaContainer.style.backgroundColor = "rgba(9, 255, 0, 1)";
            labores.style.color = "rgba(0, 0, 0, 1)";
        break;
        case "miercoles":
            labores.innerHTML = "El miércoles toca repasar los temas de la semana y estudiar para los exámenes próximos.";
            respuestaContainer.style.backgroundColor = "rgba(9, 255, 0, 1)";
            labores.style.color = "rgba(0, 0, 0, 1)";
        break;
        case "jueves":
            labores.innerHTML = "El jueves es el día para dedicar tiempo a la investigación y redactar los informes de las prácticas.";
            respuestaContainer.style.backgroundColor = "rgba(9, 255, 0, 1)";
            labores.style.color = "rgba(0, 0, 0, 1)";
        break;
        case "viernes":
            labores.innerHTML = "El viernes es perfecto para hacer un repaso general antes del fin de semana.";
            respuestaContainer.style.backgroundColor = "rgba(9, 255, 0, 1)";
            labores.style.color = "rgba(0, 0, 0, 1)";
        break;
        case "sabado":
            labores.innerHTML = "El sábado es un buen día para estudiar todo el dia diversas materias.";
            respuestaContainer.style.backgroundColor = "rgba(9, 255, 0, 1)";
            labores.style.color = "rgba(0, 0, 0, 1)";
        break;
        case "domingo":
            labores.innerHTML = "El domingo es el día para descansar y organizar las tareas para la próxima semana.";
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