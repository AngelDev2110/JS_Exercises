/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function primeNumber(num){
    if(num%2!=0 && num%3!=0 && num%5!=0 && num !=1 || num == 2 || num == 3 || num == 5){
        console.log(num)
    }
}
for(let i = 1; i <= 100; i++){
    primeNumber(i)
}