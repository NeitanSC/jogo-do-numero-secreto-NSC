let listaDeNumerosSorteados = [];
let maximoNumeros = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1
console.log(numeroSecreto)
responsiveVoice.speak("Teste", "Brazilian Portuguese Female", {rate: 1.2});


function exibirtextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate: 1.2});
}
function mensagemIncial(){
    exibirtextoNaTela('h1', 'Jogo do número secreto');
    exibirtextoNaTela('p', 'Escolha um número entre 1 e 10');
}
mensagemIncial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log('O botão foi clicado');
    if (chute == numeroSecreto){
        exibirtextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirtextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirtextoNaTela('p', 'O número secreto é menor');
        } else{
            exibirtextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }

}

function gerarNumeroAleatorio() {
    let numerosEscolhidos = parseInt(Math.random() * maximoNumeros + 1);
    let quantidadeDeElementosDaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosDaLista == maximoNumeros){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numerosEscolhidos)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numerosEscolhidos);
        console.log(listaDeNumerosSorteados);
        return numerosEscolhidos;
    }
} 
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemIncial();
    document.getElementById('reiniciar').setAttribute('disabled',true);

}
