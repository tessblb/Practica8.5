var registro = "<tr><th>Nombre Completo</th><th>Correo</th><th>Género</th><th>Fecha de Nacimiento</th><th>Intereses</th><th>Color Favorito</th><th>Nivel de Satisfacción</th></tr>";
        var estilo=0;

        function registrar() {
            if (document.getElementById("nombre").value == false) { /*nombre*/
                alert("Nombre vacío. Debes llenar todos los campos");
            } 
            else if (document.getElementById("correo").value == false) { /*correo*/
                alert("Correo vacío. Debes llenar todos los campos");
            } 
            else if(document.querySelector('input[name=genero]:checked')==null) { /*genero*/
                alert("No seleccionó su genero.");
            }
            else if(document.getElementById("fecha").value == '') { /*fecha*/
                alert("No seleccionó fecha de nacimiento.");
            }
            else if(document.querySelectorAll('input[name=intereses]:checked').length==0) { /*intereses*/
                alert("No seleccionó intereses.");
            } 
            

            else {
            if (estilo%2 == 0) {
                registro = registro + "<tr class=\"renglon1\">";
            } else {
                registro = registro + "<tr class=\"renglon2\">";
            }
        
            /* Nombre Completo */
            x = document.getElementById("nombre").value;
            registro = registro + "<td>" + x + "</td>";
        
            /* Correo */
            x = document.getElementById("correo").value;
            registro = registro + "<td>" + x + "</td>";

            /* Genero */
            x = document.querySelector('input[name=genero]:checked').value;
            registro = registro + "<td>" + x + "</td>";
        
            /* Fecha */
            x = document.getElementById("fecha").value;
            registro = registro + "<td>" + x + "</td>";
        
            /* Intereses */
            registro = registro + "<td>";
            iterable = document.querySelectorAll('input[name=intereses]:checked');
            for (iterador of iterable) {
                registro = registro + iterador.value + "<br>";  
            }
            registro = registro + "</td>";
        
            /* Color Favorito */
            x = document.getElementById("color").value;
            registro = registro + "<td>" + x + "</td>";

            /* Nivel de Satisfacion */
            x = document.getElementById("satisf").value;
            registro = registro + "<td>" + x + "</td>";

        
            /* Finalización del renglón de la tabla */
            registro = registro + "</tr>";
            document.getElementById("inscripcion").innerHTML = registro;
        
            /* Limpiar los campos */
            document.getElementById("nombre").value = "";
            document.getElementById("correo").value = "";
            document.getElementById("hombre").checked = false;
            document.getElementById("mujer").checked = false;
            document.getElementById("otro").checked = false;
            document.getElementById("deportes").checked = false;
            document.getElementById("musica").checked = false;
            document.getElementById("viajes").checked = false;
            document.getElementById("fecha").value = '';
            document.getElementById("color").value = false;
            document.getElementById("satisf").value = false;
        
            /* Se alterna el estilo de los renglones */
            estilo = estilo + 1;
          }
        }