import {Vetores} from './Vetor.js'
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


/* console.log(crescente);
console.log('---------------------------------------------------------------------------------------------');
console.log(decrescente);
console.log('---------------------------------------------------------------------------------------------');
console.log(aleatorio);
 */


