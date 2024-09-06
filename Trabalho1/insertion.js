export class Insertion {

    constructor() { }

    exec(arr) {
        console.time('tempoDeExecucao');

        let trocas = 0;
        let updates = 0;
        let comparisons = 0;


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

        // console.log(`Vetor ordenado: `, arr);
        console.log('# MÉTODO DA INSERTION #');
        console.timeEnd('tempoDeExecucao');
        console.log(`Trocas: ${updates}`);
        console.log(`Comparações: ${comparisons}`);
    }
}





