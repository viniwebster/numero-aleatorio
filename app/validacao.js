const gameOver = 'game over'

function verificaValorValido(chute) {
    const numero = +chute;

    if(chute == gameOver){
        document.body.innerHTML = `
        <h2> GAME OVER </h2>
        <button id="jogar-novamente" class="btn-jogar"> Jogar Novamente</button>`;
        document.body.style.backgroundColor = "red";
    }

    if(chuteÉInvalido(numero)){
        elementoChute.innerHTML += '<div> Valor inválido</div>'
        console.log('valor inválido')
        return
    }

    if(numeroNãoPermitido(numero)){
        elementoChute.innerHTML +=` <div> Valor inválido: Fale um número entre ${menorValor} e ${maiorValor} </div>`;
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2> Você acertou!</h2>
        <h3> O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar"> Jogar Novamente</button>`;
        
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += 
        `<div>O número secreto é menor <i class="fa-solid fa-angle-down"></i></div>`
    } else {
        elementoChute.innerHTML += 
        `<div>O número secreto é maior <i class="fa-solid fa-angle-up"></i></div>`
    }
   
}

function numeroNãoPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

function chuteÉInvalido(numero) {
    return Number.isNaN(numero);
}


document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})
