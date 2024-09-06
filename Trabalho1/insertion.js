import { Vetores } from "./Vetor.js";
let vetor = new Vetores
let trocas = 0;
let updates = 0;
let comparisons = 0;

function insertion(arr) {



    for (let i = 1; i < arr.length; i++) {
        let atual = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > atual) {
            arr[j + 1] = arr[j];
            j = j - 1;
            trocas++
            updates++
        }
        arr[j + 1] = atual;

        comparisons++
    }
    return arr
}


let arr = vetor.criaVetorAleatorio(100)


console.log(`Vetor ordenado: `, insertion(arr));
console.log(`Trocas: ${updates}`);
console.log(`Comparações: ${comparisons}`);



