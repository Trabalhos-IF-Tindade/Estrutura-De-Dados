export class Bubble {

    constructor() { }

    exec(arr) {
        const inicio =  new Date();

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

            if (trocas == 0) {
                break;
            }

            trocas = 0
        }

        console.log('# MÉTODO DA BOLHA #');
        const fim = new Date();
        console.log('tempoDeExecucao: ', fim - inicio);
        console.log(`Trocas: ${updates}`);
        console.log(`Comparações: ${comparisons}`);
    }

}



