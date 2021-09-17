let jogador = null;
let jogadorSelecionado1 = document.getElementById('jogador1');
let jogadorSelecionado2 = document.getElementById('jogador2');
let labelVencedor = document.getElementById('jogador-vencedor');
let quadradinhos = document.getElementsByClassName("quadrado");

mudarJogador('X');

function escolherQuadrado(id){
    let quadrado = document.getElementById(id);

    if(quadrado.innerHTML == '') {
        quadrado.innerHTML = jogador;

        if(jogador == 'X') {
            jogador = 'O';
            quadrado.classList.add('jogadorO');
        } else {
            jogador = 'X';
            quadrado.classList.add('jogadorX');
        }

        mudarJogador(jogador);
        checarVencedor();
    }
}

function mudarJogador(valor) {
    jogador = valor;
    
    if(valor == 'X') {
        jogadorSelecionado1.classList.add('active');
        jogadorSelecionado2.classList.remove('active');

    } else {
       jogadorSelecionado2.classList.add('active');
       jogadorSelecionado1.classList.remove('active');

    }
}

function checarVencedor() {
    let quadrado1 = document.getElementById(1);
    let quadrado2 = document.getElementById(2);
    let quadrado3 = document.getElementById(3);
    let quadrado4 = document.getElementById(4);
    let quadrado5 = document.getElementById(5);
    let quadrado6 = document.getElementById(6);
    let quadrado7 = document.getElementById(7);
    let quadrado8 = document.getElementById(8);
    let quadrado9 = document.getElementById(9);

    if(checarSequencia(quadrado1, quadrado2, quadrado3)) {
        mudarCor(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    } 

    if(checarSequencia(quadrado4, quadrado5, quadrado6)) {
        mudarCor(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    } 

    if(checarSequencia(quadrado7, quadrado8, quadrado9)) {
        mudarCor(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    } 

    if(checarSequencia(quadrado1, quadrado4, quadrado7)) {
        mudarCor(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    } 

    if(checarSequencia(quadrado2, quadrado5, quadrado8)) {
        mudarCor(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    } 

    if(checarSequencia(quadrado3, quadrado6, quadrado9)) {
        mudarCor(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    } 

    if(checarSequencia(quadrado1, quadrado5, quadrado9)) {
        mudarCor(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }

    if(checarSequencia(quadrado3, quadrado5, quadrado7)) {
        mudarCor(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
        return;
    }

}

function mudarVencedor(quadrado){
    jogadorVencedor = quadrado.innerHTML;
    labelVencedor.innerHTML = jogadorVencedor;
    
    for(let i = 0; i < quadradinhos.length; i++) {
        quadradinhos[i].removeAttribute('onclick');
    }
}

function mudarCor(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.color = '#000000';
    quadrado2.style.color = '#000000';
    quadrado3.style.color = '#000000';
}

function checarSequencia(quadrado1, quadrado2, quadrado3) {
    let igual = false;

    if (quadrado1.innerHTML !== '' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        igual = true;
    } else {
        igual = false;
    }

    return igual;
}