export class Selection {

    constructor() { }

    exec(arr) {
        let trocas = 0;
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
                trocas++;
            }
        }

        //console.log(`Vetor ordenado: `, arr);
        console.log('MÉTODO SELECTION');
        console.log(`Trocas: ${trocas}`);
        console.log(`Comparações: ${comparisons}`);
    }

    // Exemplo de uso
}