export class Bubble {

    constructor() { }

    exec(arr) {
        console.time('tempoDeExecucao: ')

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
            }
        }

        console.log('# MÉTODO DA BOLHA #');
        const fim = new Date();
        console.timeEnd('tempoDeExecucao: ');
        console.log(`Trocas: ${updates}`);
        console.log(`Comparações: ${comparisons}`);
    }

}



