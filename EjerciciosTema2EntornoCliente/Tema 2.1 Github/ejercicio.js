// El OBJETIVO DE ESTE EJERCICIO ES DECLARAR LAS VARIABLES
// CORRESPONDIENTES PARA QUE LAS FUNCIONES SIEMPRE DEVUELVAN TRUE
// SIEMPRE HAY QUE DEJAR EL CÓDGIO DE LAS FUNCIONES IGUAL
// SALVO QUE SE ESPECIFIQUE EN LA PROPIA FUNCÍON QUE PODÉIS MODIFICARLO


//PARA INCLUIR COMENTARIOS
/*
*  PARA INCLUIR VARIAS LINEAS DE COMENTARIOS
*
* */


//ESTE SCRITP ES PARA PRACTICAR LAS DECLARACIONES DE VARIABLES

///esta funcion hay que corregirla para poder porbar las demas
function corregirDeclaraciones(){
    var funcion = new Object();
    var ejemplo = "EJEMPLO";
    var prueba123 = 123;
    var pruebaEjemplo = "EJERCICIO";
    var prueba = "PRUEBA";
    var prueba = "PRUEBA";

    return true;
}

function declararNumeros(){
    var numA = 10;
    var numB = 4;
    return typeof numA === "number"
       && typeof numB === "number"
       && numA > numB;
}

function declararString(){
    var cadena = "PRuEbA";
    return cadena === "PRuEbA"
        && typeof cadena === "string";
}

function noDefinido(){
    var x = undefined;
    var y = null;
    return x === undefined
        && y === null;
}

function declararSymbol(){
    var x = Symbol("simbolo");
    return typeof x === "symbol";
}

function declararFecha(){
    var hoy = new Date();
    return hoy instanceof Date;

}

function declararExpresionRegular(){
    var expresion = new RegExp();
    return expresion instanceof RegExp;
}

function declararFuncion(){
    var funcion = new Function();
    return funcion instanceof Function;
}



function declararObjeto(){
    
    class ObjetoPrueba{};
    let objeto = new ObjetoPrueba();
    return objeto instanceof ObjetoPrueba;
}

function declararArray(){

    let lista = [1,2,3,4,"Correcto"];
    return lista instanceof Array
            && lista.length === 5
            && lista[4] === "Correcto";

}


function declararArrayTipo(){

    let listaEnteros = new Int32Array([0,0,0,0,0,0,0,0,0,0]);
    return listaEnteros instanceof Int32Array
            && listaEnteros.length === 10;

}

var x = "SOY gLOBAL";
function declararVariableGlobal(){

    
    return window.x
            && x === "SOY gLOBAL"
        ;

}

function declararPrototipo(){

    function prototipo(nombre){
		this.nombre = nombre;
	}
    var objeto = new prototipo("ejemplo");


    return objeto.__proto__ === prototipo.prototype

}

//ESTA FUNCION DEBÉIS MODIFICAR EL CÓDIGO PARA QUE FUNCIONE
function declaracionConRetraso(){
    var y = 35;
    var resultado = y === 35;

    

    return resultado;
}


function declaracionLet(){
    let x = 0;
    let y = "bien";
    if(x > 1){
        let y = "bien";
    }
    return y === "bien";
}

//ESTA FUNCIÓN DEBÉIS MODIFICAR EL CÓDIGO PARA QUE FUNCIONE
function declaracionConst(){
    const valor = 30;
    return valor === 30;
}