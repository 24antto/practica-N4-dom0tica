// Función para actualizar el reloj y la fecha
function actualizarRelojFecha() {
    var now = new Date();
    var fecha = now.toLocaleDateString();
    var hora = now.toLocaleTimeString();
    document.getElementById('relojFecha').innerHTML = fecha + ' ' + hora;
}
setInterval(actualizarRelojFecha, 1000);

// Funciones para controlar calefacción e iluminación
function toggleCalefaccion1() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            document.getElementById('estadoCalefaccion1').src = response.estado ? "calefaccion_on.png" : "calefaccion_off.png";
            document.getElementById('contadorCalefaccion1').innerText = response.contador;
        }
    };
    xhttp.open("GET", "control_logo.php?accion=toggleCalefaccion1", true);
    xhttp.send();
}

function resetCalefaccion1() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('contadorCalefaccion1').innerText = 0;
        }
    };
    xhttp.open("GET", "control_logo.php?accion=resetCalefaccion1", true);
    xhttp.send();
}

// Repetir para las demás funciones (toggleIluminacion1, resetIluminacion1, toggleCalefaccion2, etc.)
function toggleIluminacion1() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            document.getElementById('estadoIluminacion1').src = response.estado ? "luz_on.png" : "luz_off.png";
            document.getElementById('contadorIluminacion1').innerText = response.contador;
        }
    };
    xhttp.open("GET", "control_logo.php?accion=toggleIluminacion1", true);
    xhttp.send();
}

function resetIluminacion1() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('contadorIluminacion1').innerText = 0;
        }
    };
    xhttp.open("GET", "control_logo.php?accion=resetIluminacion1", true);
    xhttp.send();
}

// Repetir para las demás funciones (toggleCalefaccion2, resetCalefaccion2, toggleIluminacion2, resetIluminacion2)
