var tareaTexto;
var registro = "";

/*añadir tarea*/
document.getElementById("añadir").onclick = function() {
    tareaTexto = document.getElementById("tareaInput").value.trim();
    if (tareaTexto === "") {
        alert("Por favor, ingresa una tarea.");
        return;
    }

    registro += "<tr>";
    registro += "<td><input type='checkbox' onchange='this.parentElement.nextElementSibling.classList.toggle(\"completada\", this.checked)'></td>";
    registro += "<td>" + tareaTexto + "</td>";
    registro += "</tr>";
    
    document.getElementById("lista").innerHTML = registro;

    document.getElementById("tareaInput").value = "";
};

/*borrar lista*/
document.getElementById("borrar").onclick = function() {
    registro = "";
    document.getElementById("lista").innerHTML = "";
};

