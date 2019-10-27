//Esta funcion devuelve una frase nueva que contenga
//Todas las palabras de la frase pasada por parámetro
//que contenga el trozo de palabra. 
//Pero no valdrán aquellas que tengan el trozo de la palabra
//Al principio o al final.

//Por ejemplo: obtenerNuevaFrase("Espero ir al cine a ver el joker","e") => "ver joker";
//Por ejemplo: obtenerNuevaFrase("Todo depende de si el raton si acaba pronto con el queso","to") => "raton";
function obtenerNuevaFrase(frase,trozoPalabra){

    var nuevaFrase = "";
    var arr = frase.split(" ");
    for(var i = 0; i < arr.length; i++){
        var prim = arr[i].substring(0, 1);
        var ult = arr[i].substring(arr[i].length -1, arr[i].length);
        if(prim != trozoPalabra && ult != trozoPalabra){
            var troceado = arr[i].slice(0, -1);
            var verd = troceado.includes(trozoPalabra, 1);
            if(verd == true){
                nuevaFrase += arr[i] + " ";
            }
        }
    }
    return nuevaFrase;
    //No sé por qué coge "Espero" de la primera frase de ejemplo, con todo lo demás funciona a la perfección
}

//Función que devuelve la suma de todas las posiciones
//En la que se encuentra una palabra en una frase.
//Por ejemplo: sumaDePosiciones("Prueba de la rueda","ue") => 16
//Por ejemplo: sumaDePosiciones("Aclaremos el ejercicio","acl") => 0
function sumaDePosiciones(frase,trozoPalabra){
    var arr = frase.split(" ");
    var posTotal = 0;
    for(var i = 0; i < arr.length; i++){
        var verd = arr[i].includes(trozoPalabra, 0);
        if(verd == true){
            var posFrase = frase.indexOf(arr[i]);
            var posTrozo = arr[i].indexOf(trozoPalabra);
            posTotal += posFrase+posTrozo;
        }
    }
    return posTotal;

}

//Función que valida el formato RGB de los colores
//Formato RGB solo acepta letras de la A-F y a-f, 
//y numeros de 0 a 9, además de empezar por #.
//Los ejemplos de colores RGB son:
//     #123ABC o #123abc
//     #BBB    o #333     
function esValidoFormatoRGB(color){
    var checker = 0;
    if(color.length == 4 || color.length == 7){
        if(color.charAt(0) == '#'){
            for(var i = 1; i < color.length; i++){
                if(color.charAt(i) == 'a' || color.charAt(i) == 'b' || color.charAt(i) == 'c' || color.charAt(i) == 'd' 
                || color.charAt(i) == 'e' || color.charAt(i) == 'f' || color.charAt(i) == 'A' || color.charAt(i) == 'B' 
                || color.charAt(i) == 'C' || color.charAt(i) == 'D' || color.charAt(i) == 'E' || color.charAt(i) == 'F'
                || color.charAt(i) == '0' || color.charAt(i) == '1' || color.charAt(i) == '2' || color.charAt(i) == '3'
                || color.charAt(i) == '4' || color.charAt(i) == '5' || color.charAt(i) == '6' || color.charAt(i) == '7'
                || color.charAt(i) == '8' || color.charAt(i) == '9'){
                    checker++;
                }
            }
        }
    }
    if(checker == 3 || checker == 6){
        return true;
    }else{
        return false;
    }
    //Lo he intentado con Ascii pero no funcionaba, aún así de esta manera funciona bien
}



//Función que valida una URL de una web .com y .es
//con más de un parámetro GET en la url.
//Las urls deben empezar por http://www. o https://www.
//Recordad que el primer parámetro por GET se indica con "?""
//Recordad que el segundo y posteriores parámetros por GET se indica con "&"
//Por ejemplo: http://www.prueba.es?ejemplo=1&prueba=2 => valido
//Por ejemplo: http://www.prueba.es?ejemplo=1 =>no valido
//Por ejemplo: http://www.prueba.es => No valido
//Por ejemplo: https://www.prueba?hola=1&holita=2&holar=3 =>No valido
function esValidaURL(url){

    //No se me ocurre la manera

}