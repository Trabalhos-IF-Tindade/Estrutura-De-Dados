import { Vetores } from './vetor.js'
import { Bubble } from './bubble.js'
import { BubbleOptimized } from './optimizedBubble.js'
import { Selection } from './selection.js'
import { Insertion } from './insertion.js'


let vetor = new Vetores;
let bolha = new Bubble();
let bolhaOtimizada = new BubbleOptimized();
let selecao = new Selection();
let insercao = new Insertion();


function obterDados(method, order) {
    let resultados = [];
    console.log(order)

    let vetorAleatorio = vetor.criaVetorAleatorio(50000)

    for (let tamanhoVetor = 1000; tamanhoVetor <= 50000; tamanhoVetor += 5000) {
    
        let vector = []

        if (order == "crescente") {
            vector = vetor.criaVetorCrescente(tamanhoVetor);
        } else if (order === "decrescente") {
            vector = vetor.criaVetorDecrescente(tamanhoVetor);
        } else if (order === "aleatoria") {
            vector = vetorAleatorio.slice(0, tamanhoVetor);
        } else {
            console.log("Tipo de ordenação inexistente!")
            return
        }

        // Executar o algoritmo da bolha e capturar o resultado
        let { updates, comparisons, tempoExecucao } = method.exec(vector);

        // Armazenar os dados para exibir na tabela
        resultados.push({
            Tamanho: tamanhoVetor,
            TempoExecucao: tempoExecucao.toFixed(2) + " ms",  // Tempo formatado
            Trocas: updates,
            Comparações: comparisons
        });
        if(tamanhoVetor == 1000){
            tamanhoVetor = 0
        }
    }

    // Exibir os dados em formato de tabela
    console.table(resultados);
}
console.log("Bolha:")
obterDados(bolha, "crescente")

console.log("Bolha Otimizada:")
obterDados(bolhaOtimizada, "crescente")

console.log("Selection:")
obterDados(selecao, "crescente")

console.log("Inserction:")
obterDados(insercao, "crescente")