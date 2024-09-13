export class BubbleOptimized {

    constructor() { }

    exec(arr) {
        // console.time('tempoDeExecucao');
        const tempoInicial = performance.now();  // Usar performance.now() para obter o tempo em ms
        
        let updates = 0;
        let comparisons = 0;
        let trocas = false;

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < (arr.length - i - 1); j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    updates++;
                    trocas = true
                }
                comparisons++;
            }
            if(!trocas){
                break;
            }
        }

        // console.timeEnd('tempoDeExecucao'); // Calcula e imprime o tempo
        const tempoFinal = performance.now();  // Usar performance.now() para obter o tempo em ms
        const tempoExecucao = tempoFinal - tempoInicial

        // Retorna o número de trocas, comparações e o tempo de execução
        return { updates, comparisons, tempoExecucao };
    }
}