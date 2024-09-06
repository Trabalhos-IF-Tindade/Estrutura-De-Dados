export class BubbleOptimized {

    constructor() { }

    exec(arr) {
        let trocas = 0;
        let comparisons = 0;
        let swapped;

        for (let i = 0; i < arr.length; i++) {
            swapped = false; // Define flag como falso no início de cada iteração

            for (let j = 0; j < arr.length - 1 - i; j++) {
                comparisons++;
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Troca
                    trocas++;
                    swapped = true; // Troca realizada, seta flag como verdadeiro
                }
            }

            if (!swapped) {
                break; // Se não houver trocas, interrompe o loop
            }
        }

       // console.log(`Vetor ordenado: `, arr);
       console.log('MÉTODO DA BOLHA OTIMIZADO');
        console.log(`Trocas: ${trocas}`);
        console.log(`Comparações: ${comparisons}`);
    }

    //let arr = vetor.criaVetorAleatorio(100)

}