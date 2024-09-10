export class BubbleOptimized {

    constructor() { }

    exec(arr) {
        const tempoInicial = performance.now()

        let updates = 0;
        let comparisons = 0;
        let swapped;

        for (let i = 0; i < arr.length; i++) {
            swapped = false;

            for (let j = 0; j < arr.length - 1 - i; j++) {
                comparisons++;
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    updates++;
                    swapped = true;
                }
            }

            if (!swapped) {
                break;
            }
        }

        const tempoFinal = performance.now()
        const tempoExecucao = tempoFinal - tempoInicial
        return { updates, comparisons, tempoExecucao }
    }


}