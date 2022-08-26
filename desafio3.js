let object3 = document.querySelector('input#desafio3')

object3.addEventListener('click',clicar3)

function clicar3() {
    let computador = Math.floor(Math.random() * (10 - 0 + 1) + 0)
    let cont = 3
    let continuar = true

    while (cont > 0) {
        let jogador = prompt("Tente adivinhar o número de 0 a 10:")
        cont--

        if (computador == jogador){
            cont--
            alert(`Parabéns você acertou. O computador pensou no número ${computador}`)
            break
        }
        else if (cont == 0){
            alert(`Game over! \nInfelizmente, você não acertou. O número era ${computador}`)
        }
        else{
            alert(`Infelizmente você errou. Você tem mais ${cont} tentativas.`)
        }
    }
}