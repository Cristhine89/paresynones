    function paresynones(){
        //aqui iria todo el bloque de codigo que quereis que se ejecute

console.log("Vamos a jugar al juego de pares y nones, El jugador 1 va a ser nones y El jugador 2 va a ser pares. ¡Vamos a comenzar a jugar! Primero elige el jugador 1");
var numero1;
var numero2;

numero1 = prompt("Jugador 1: Elige un numero del 1 al 5");
numero2 = prompt("Jugador 2: Elige un numero del 1 al 5");
numero1 = Number(numero1);
numero2 = Number(numero2);

var suma = numero1 + numero2;
document.write("La suma de la jugada es: " +suma);

if((numero1+numero2)%2===1){
    document.write("<br>Felicidades jugador 1 has ganado");
}
else{
    document.write("<br>Felicidades jugador 2 has ganado");
}
    }