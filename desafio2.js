let object2 = document.querySelector('input#desafio2')

object2.addEventListener('click',clicar2)

function clicar2() {
    let nome = prompt("Qual o seu nome?")
    let stack = prompt("Você quer seguir para área de Frontend ou Backend?")

    if (stack.toLowerCase() === "frontend") {
        let framework = prompt("Você quer aprender React ou aprender Vue?")
    }
    else if (stack.toLowerCase() === "backend") {
        let framework = prompt("Você quer aprender C# ou aprender Java?")
    }
    else {
        alert("Opção inválida.")
    }

    let escolha = prompt(`Você quer seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack? Digite: \n1 Especializar \n2 Fullstack`)
    let resposta = prompt("Você pretende aprender mais alguma tecnologia? [S/N]")

    tecnologias = [];
    i = 0;

    while (resposta.toLowerCase() == "s") {
        tecnologias[i] = prompt("Qual tecnologia?")
        i++;
        resposta = prompt("Você pretende aprender mais alguma tecnologia? [S/N]")
    }
    
    if (tecnologias == 0) {
        alert(`Gostei muito de te conhecer ${nome}! Lembre-se que o aprendizado é a chave do sucesso.`)
    }

    else{
        alert(`Gostei muito de te conhecer ${nome}! Legal saber que você quer estudar a(s) tecnologia(s): ${tecnologias}. O aprendizado é a chave do sucesso.`)
    }
}