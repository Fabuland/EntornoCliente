function incluirSpinner(input) {
    if (input.parent().next().length === 0) {
        let spin = $(".spinner").first().clone(true);
        input.parent().after(spin);
        spin.show();
    }
}

function buscar() {

    let input = $("#id").val();
    $.ajax({
        url: "connection.php",
        data: { id: input },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
    })
        .done(resultadoFinal)
        .fail(function () {
            //No debería usarse
            alert("ERROR");
            $("#resultado").html("ERROR");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });

}

function resultadoFinal(respuesta) {
    let divResultado = document.getElementById("resultado");
    divResultado.innerHTML = "";
    var resultados = respuesta;
    let final = "<table border='1'><tr><th>ID</th><th>CREADOR</th><th>GENERO</th><th>EDITORIAL</th></tr>";

    for (let i = 0; i < resultados.length; i++) {
        let obj = resultados[i];
        final += "<tr><td>" + obj.id + "</td><td>" + obj.creador + "</td><td>" + obj.genero + "</td><td>" + obj.editorial + "</td></tr>";
    }

    final += "</table>";

    divResultado.innerHTML = final;
}