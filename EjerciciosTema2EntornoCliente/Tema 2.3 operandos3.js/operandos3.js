//Implementar las siguientes funciones para que pasen una serie de pruebas
//Usando solo estructuras de control para ello.

//Devuelves 1 si a es mayor que b
//Devuelves -1 si a es menor que b
//Devuelves 0 si a es igual b

function quienEsMayor(a,b){

    let resultado;

    if(a>b){
        resultado = 1;
    }else if(a<b){
        resultado = -1;
    }else if(a == b){
        resultado = 0;
    }
    
    return resultado;

}

//Dado un array de elementos, devuelve la suma de todos aquellos que los elementos sean pares
function sumarElementosPares(elementos){

    let finalll = elementos.length;
    let resultado3 = 0;
    for(let i = 0; i < finalll;i++){
        if(elementos[i]%2 == 0){
            resultado3+= elementos[i];
        }
    }
    console.log("El resultado es: "+ resultado3);
    return resultado3;
   

}

//Dado un array de elementos devuelve el valor mas grande de todos ellos.
function escogerValorMasGrande(elementos){

    let finalll = elementos.length;
    let resultado3 = 0;
    for(let i = finalll; i >= 0;i--){
        if(resultado3 < elementos[i]){
            resultado3 = elementos[i];
        }
    }
    console.log("El mayor es: "+ resultado3);
    return resultado3;

}

//Dada una palabra cualquier, devuelve la palabra alreves, por ejemplo: "HOLA" => "ALOH"
function invertirUnaPalabra(String){
    let alreves = "";
    let tamano = 3;
    let array = String.split("");
    for(let i = tamano; i >= 0; i--){
        alreves+= array[i];
    }
    console.log("La palabra al reves es: "+ alreves);
    return alreves;
}

//Dada un array, cuenta el numero de elementos impares que contiene
function contarElementosImpares(String){

    let finalll = String.length;
    let resultado3 = 0;
    for(let i = 0; i < finalll;i++){
        if(String[i]%2 == 1){
            resultado3++;
        }
    }
    console.log("El resultado es: "+ resultado3);
    return resultado3;


}
