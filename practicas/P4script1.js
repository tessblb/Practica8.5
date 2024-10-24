document.getElementById("form").onsubmit = function(e) {
    e.preventDefault();
    
    let calificacion = parseFloat(document.getElementById("calif").value);
    let resultado = "";

    if (calificacion < 0 || calificacion > 10) {
        resultado = "Error: fuera de rango";
    } else if (calificacion < 6) {
        resultado = "NA";
    } else if (calificacion < 7.5) {
        resultado = "S";
    } else if (calificacion < 9) {
        resultado = "B";
    } else if (calificacion < 10) {
        resultado = "MB";
    } else {
        resultado = "LAP";
    }

    document.getElementById("resultado").textContent = resultado;
};
