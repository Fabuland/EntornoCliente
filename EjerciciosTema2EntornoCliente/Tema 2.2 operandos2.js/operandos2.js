// EJERCICIOS CON LOS OPERANDOS
// LAS LÍNEAS DE RETURN NUNCA DEBEN CAMBIARSE.
// DEBE TOCARSE EL CÓDIGO ANTES DEL RETURN PARA QUE LA FUNCIÓN DEVUELVA TRUE


function concatenarCadenas(){

    let clase = 0;
    let x = "ALUMNO_DAW";
    let y = "_2017";

    resultado = x+y;

    return resultado === "ALUMNO_DAW_2017";
}

function operadorTernario(){

    let x = 3;
    let y = 2;

    var resultado = (x > y) ? true : false;

    return resultado;

}

function deleteArray(){

    let array = [1,2,3,4,5,6,7,8,9,10];

    array.splice(9, 1);

    return array[9] === undefined;

}

function crearArray(){

    let hoy = new Date();
    var numero = Number("number");
    var objeto = Object("object");
    let undef = undefined;
    let nullll = null;
    let x = [1.5, "ALUMNOS", hoy, numero, objeto, undef, nullll];

    return  x[0] ===  1.5
        && x[1] ===  "ALUMNOS"
        && x[2] instanceof Date
        && typeof x[3] === "number"
        && typeof x[4] === "object"
        && x[5] === undefined
        && x[6] === null;

}

function existeElemento(){

    let prueba1 = "1";
    let prueba2 = "2";

    let x = {prueba1:"1", prueba2:"2"};



    return "prueba1" in x && "prueba2" in x;

}