import { Vetores } from './Vetor.js'
import { Bubble } from './bubble.js'
import { BubbleOptimized } from './OptimizedBuble.js'
import { Selection } from './selection.js'
import { Insertion } from './insertion.js'


let vetor = new Vetores
let bolha = new Bubble;
let bolhaOtimizada = new BubbleOptimized;
let selecao = new Selection;
let insercao = new Insertion;

let tamanhoVetor = 1000
let crescente = vetor.criaVetorCrescente(tamanhoVetor);
let decrescente = vetor.criaVetorDecrescente(tamanhoVetor);
let aleatorio = vetor.criaVetorAleatorio(tamanhoVetor);


bolha.exec(crescente);
console.log('---------------------------------------------------------------------------------------------');
bolhaOtimizada.exec(crescente);
console.log('---------------------------------------------------------------------------------------------');
selecao.exec(crescente);
console.log('---------------------------------------------------------------------------------------------');
insercao.exec(crescente);


/* bolha.exec(decrescente);
console.log('---------------------------------------------------------------------------------------------');
bolhaOtimizada.exec(decrescente);
console.log('---------------------------------------------------------------------------------------------');
selecao.exec(decrescente);
console.log('---------------------------------------------------------------------------------------------');
insercao.exec(decrescente); */


/* bolha.exec(aleatorio);
console.log('---------------------------------------------------------------------------------------------');
bolhaOtimizada.exec(aleatorio);
console.log('---------------------------------------------------------------------------------------------');
selecao.exec(aleatorio);
console.log('---------------------------------------------------------------------------------------------');
insercao.exec(aleatorio); */




/* console.log(crescente);
console.log('---------------------------------------------------------------------------------------------');
console.log(decrescente);
console.log('---------------------------------------------------------------------------------------------');
console.log(aleatorio);
 */


