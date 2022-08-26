let object = document.querySelector('input#desafio1')

object.addEventListener('click',clicar1)

function clicar1() {
    const nome = prompt("Qual o seu nome?")
    const idade = prompt("Quantos anos você tem?")
    const linguagem = prompt("Qual linguagem de programação você está estudando?")
    
    alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`)
    
    const gostou = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`)
    if (gostou == "1"){
        alert(`Muito bom ${nome}! Continue estudando e você terá muito sucesso.`)
    }
    else if (gostou == "2"){
        prompt("Ahh que pena... Já tentou aprender outras linguagens?")
        alert(`Continue estudando que em breve você achará a melhor linguagem para você! Gostei muito de te conhecer ${nome}, até breve!`)
    }
    else {
        alert(`Não consegui compreender sua resposta, mas gostei muito de te conhecer ${nome}! Lembresse que o conhecimento é a chave do sucesso!.`)
    }
}