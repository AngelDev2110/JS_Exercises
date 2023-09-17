/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function anagram(word1,word2){
    if (word1 == word2)
        return false
    else if (word1.length != word2.length)
        return false
    else{
        word1Sorted = word1.split('').sort().join('')
        word2Sorted = word2.split('').sort().join('')
        return word1Sorted == word2Sorted
    }
}
console.log(anagram('listen','silent'))