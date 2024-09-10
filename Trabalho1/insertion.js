export class Insertion {

    constructor() { }

    exec(arr) {
        const tempoInicial = performance.now();

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

        const tempoFinal = performance.now()
        const tempoExecucao = tempoFinal - tempoInicial
        return {updates, comparisons, tempoExecucao}
    }
}





