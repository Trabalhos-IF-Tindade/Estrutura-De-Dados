import { Vetores } from "./Vetor.js";

function bubbleSort(arr) {
    let vetor = new Vetores 

    vetor.criaVetorCrescente()


    let trocas = 0;
    let updates = 0;
    let comparisons = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                updates++
                trocas++
            }
            comparisons++

            if(trocas == 0){
                break;
            }
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

let arr = Vetores.criaVetorCrescente(10);
// let arr = [1,2,3,4,5,6]

bubbleSort(arr);
