export class Insertion {

    constructor() { }

    exec(arr) {
        const tempoInicial = performance.now();

        let updates = 0;
        let comparisons = 0;

        for (let i = 1; i < arr.length; i++) {
            let atual = arr[i];
            let j = i - 1;

            while (j >= 0) {
                comparisons++; // Incrementa para cada comparação
                if (arr[j] > atual) {
                    arr[j + 1] = arr[j];
                    j = j - 1;
                    updates++;
                } else {
                    break; // Se não for maior, sai do loop
                }
            }
            arr[j + 1] = atual;
        }

        const tempoFinal = performance.now();
        const tempoExecucao = tempoFinal - tempoInicial;
        return { updates, comparisons, tempoExecucao };
    }
}
