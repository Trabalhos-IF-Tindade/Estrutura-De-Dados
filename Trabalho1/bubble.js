import { Vetores } from "./Vetor.js";
let vetor = new Vetores 

function bubbleSort(arr) {

    


    let trocas = 0;
    let updates = 0;
    let comparisons = 0;

    for (let i = 0; i < arr.length; i++) {
        //console.log('Rodou');

        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                updates++
                trocas++
            }
            comparisons++
        }

        if(trocas == 0){
            break;
        }

        trocas = 0
    }
    console.log(arr);
    console.log(`Trocas: ${updates}`);
    console.log(`Comparações: ${comparisons}`);
}

let teste = vetor.criaVetorAleatorio(10);
let arr = teste;

console.time('Tempo: ');
bubbleSort(arr);
console.timeEnd('Tempo: ');


