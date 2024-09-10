export class Selection {

    constructor() { }

    exec(arr) {
        const tempoInicial = performance.now()
        
        let updates = 0;
        let comparisons = 0;
        
        for (let i = 0; i < arr.length - 1; i++) {
            let minIndex = i;
            
            // Encontra o menor elemento no subarray não ordenado
            for (let j = i + 1; j < arr.length; j++) {
                comparisons++;
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            
            // Troca o menor elemento encontrado com o primeiro elemento do subarray
            if (minIndex !== i) {
                [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Desestruturação para trocar os valores
                updates++;
            }
        }
        
        const tempoFinal = performance.now()
        const tempoExecucao = tempoFinal - tempoInicial
        return {updates, comparisons, tempoExecucao}
    }

    // Exemplo de uso
}