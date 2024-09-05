export class Vetores{

    constructor(){}

    criaVetorCrescente(tamanho){
        let vetor = [];
        for(let c = 1; c<=tamanho; c++){
            vetor.push(c);
        }

        return vetor;
    }

    criaVetorDecrescente(tamanho){
        let vetor = [];
        for(let c = tamanho; c>0; c--){
            vetor.push(c);
        }

        return vetor;
    }
}