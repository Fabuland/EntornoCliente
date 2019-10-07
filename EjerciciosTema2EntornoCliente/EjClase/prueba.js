console.log("NUESTRA PRIMERA FUNCION");
function prueba(){
	console.log("EJECUTANDO FUNCION PRUEBA");
	let a =1;
	if(a = 2){
		let a = 3;
		console.log(a);
	}
	return a;
}
function resta(num1, num2){
	return num1-num2;
}
function mult(num1, num2){
	return num1*num2;
}	
function divide(num1, num2){
	return num1/num2;
}		
function corregirDeclaraciones(){
	var funcion = new Object();
	var ejemplo = "EJEMPLO";
	var prueba123 = 123;
	var prueba_ejemplo = "EJERCICIO";
	var prueba = "PRUEBA";
	var prueba = "PRUEBA";
	return true;
}
function declaraExpresionRegular(){
	var expresion = new RegExp();
	var expresion = /Prueba/;
	return expresion instanceof RegExp;
}
function declaraFecha(){
	var hoy = new Date();
	console.log("ESTOY EJECUTANDO LA FUNCION FECHA");
	return hoy instanceof Date;
}
function declaraFuncion(){
	var funcion = new Function();
	var funcion = declaraFecha();
	console.log(funcion);
	return funcion instanceof Function;
}
function declaraObjeto(){
	
    class ObjetoPrueba{};

    return objeto instanceof ObjetoPrueba;
}
function declaraArray(){
	let llista = ["Prueba", false, /parar/, declaraFecha, "Correcto"];
	return lista instanceof Array
	&& lista.length === 5
	&& lista[4] === "Correcto";
}
function declaraArrayTipo(){
	let listaEnteros = new Int32Array([0,0,0,0,0,0,0,0,0,0]);
	return listaEnteros instanceof Int32Array
	&& listaEnteros.length === 10;
}
var x = "Soy global";
function declaraVariableGlobal(){
	
	return window.x
	&& x === "Soy global"
}
function declararPrototipo(){
	function declararPrototipo(nombre){
		this.nombre = nombre;
	}
	var objeto = new declararPrototipo("ejemplo");
	return objeto._proto_ === prototipo.prototype
}
function declaracionConRetraso(){
	var resultado = x === 35;
	return resultado;
}
function declaracionLet(){
	let x = 0;
	let y = "bien";
	if(x > 1){
		let y = bien;
	}
	return y === "bien";
}
function declaracionConst(){
	const valor = 30;
	return valor === 30;

}
function asignacionValoresSumar(){
	let x = 0;
	let y = 0;
	x +=3;
	return x===3;
}
function asignacionValoresRestar(){
	let x = 0;
	let y = 0;
	x -=3;
	return x===-3;
}
