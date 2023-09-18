/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */
function fibonacci(n){
    if (n == 0)
        return 0
    else if(n <= 2)
        return 1
    else
        return fibonacci(n-1) + fibonacci(n-2)
}

for(let i = 0; i < 50; i++){
    console.log(fibonacci(i))
}

//WARNING high demand of resources