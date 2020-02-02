document.addEventListener("DOMContentLoaded", function(){
    let formularioCrearDatos = document.getElementById("formulario");
    formularioCrearDatos.addEventListener("submit", function(event){
        event.preventDefault();
        realizarPeticionAsincrona();
    });
})

function objetoXHR() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        var versionesIE = new Array('MsXML2.XMLHTTP.5.0', 'MsXML2.XMLHTTP.4.0',
            'MsXML2.XMLHTTP.3.0', 'MsXML2.XMLHTTP', 'Microsoft.XMLHTTP');
        for (var i = 0; i < versionesIE.length; i++) {
            try {
                return new ActiveXObject(versionesIE[i]);
            } catch (errorControlado) {}
        }
    }
    throw new Error("No se pudo crear");
}

function comprobarEstado() {
    switch (this.readyState) {
        case 4:
            if (this.status == 200) {
                let divRespuesta = document.getElementById("resultado");
                divRespuesta.innerHTML = this.responseText;
                document.getElementById("resultado").innerHTML = "<p>Creado</p>";
            } else {}
            break;
    }
}

function realizarPeticionAsincrona() {
    let id = document.getElementById("id").value;
    let creador = document.getElementById("creador").value;
    let genero = document.getElementById("genero").value;
    let editorial = document.getElementById("editorial").value;

    document.getElementById("spinner").style = "display:block";

    miXHR = new objetoXHR();

    miXHR.open("POST", "connection.php", true);
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.onreadystatechange = comprobarEstado;

    let datos = "id="+id+"&creador="+creador+"&genero="+genero+"&editorial="+editorial;
    miXHR.send(datos);
    document.getElementById("spinner").style = "display:none";

}