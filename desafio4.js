let object4 = document.querySelector('input#desafio4')
const elementoLista = document.querySelector("#listaCompras")

object4.addEventListener('click', clicar4)

function clicar4() {

    let hortifruti = [];
    let cereais = [];
    let doces = [];
    let laticinios = [];
    let açougue = [];

    let continuar = true;
    let remover = "";

    do {
        let adicionar = prompt('você deseja adicionar uma comida na sua lista de compras?\n Digite: sim, não ou remover (para deletar um item da lista)')

        if (adicionar.toLocaleLowerCase() == 'sim') {

            let item = prompt('qual comida você deseja inserir?')

            let lista = prompt("Em qual categoria essa comida se encaixa?\n\n Digite o número: \n 1 para hortifruti \n 2 para cereais \n 3 para doces \n 4 para laticínios \n 5 para açougue");

            if (lista === '1') {
                hortifruti.push(item);
            }
            else if (lista === '2') {
                cereais.push(item);
            }
            else if (lista === '3') {
                doces.push(item);
            }
            else if (lista === '4') {
                laticinios.push(item);
            }
            else if (lista === '5') {
                açougue.push(item);
            }
            else {
                alert('Lista não identificada. Tente novamente.')
            }
        }

        else if (adicionar.toLocaleLowerCase() == 'remover') {
            if (hortifruti.length === 0 && cereais.length === 0 && doces.length === 0 && laticinios.length === 0 && açougue.length === 0) {
                alert('Não possui itens na sua lista para deletar')
            }
            else {
                remover = prompt(`Lista de compras:\n\n 1 Hortifruti: ${hortifruti} \n 2 Cereais: ${cereais} \n 3 Doces: ${doces} \n 4 Laticínios: ${laticinios} \n 5 Açougue: ${açougue}\n\n Qual produto você deseja remover?`)
                if (hortifruti.indexOf(remover) != -1) {
                    hortifruti.splice(hortifruti.indexOf(remover), 1);
                    alert(`O item ${remover} foi removido com sucesso!`)
                } else if (cereais.indexOf(remover) != -1) {
                    cereais.splice(cereais.indexOf(remover), 1);
                    alert(`O item ${remover} foi removido com sucesso!`)
                } else if (doces.indexOf(remover) != -1) {
                    doces.splice(doces.indexOf(remover), 1);
                    alert(`O item ${remover} foi removido com sucesso!`)
                } else if (laticinios.indexOf(remover) != -1) {
                    laticinios.splice(laticinios.indexOf(remover), 1);
                    alert(`O item ${remover} foi removido com sucesso!`)
                } else if (açougue.indexOf(remover) != -1) {
                    açougue.splice(açougue.indexOf(remover), 1);
                    alert(`O item ${remover} foi removido com sucesso!`)
                } else {
                    alert(`Não foi possível encontrar o item dentro da lista!`)
                }
            }
        }

        else if (adicionar.toLocaleLowerCase() == "não") {
            continuar = false
            break
        }

        else {
            alert(`Operação não reconhecida!`)
        }

    } while (continuar == true);

    let mensagem = (`<strong>LISTA DE COMPRAS:</strong> <br><br> <strong>Hortifruti:</strong> ${hortifruti} <br><br> <strong>Cereais:</strong> ${cereais} <br><br> <strong>Doces:</strong> ${doces} <br><br> <strong>Laticínios:</strong> ${laticinios} <br><br> <strong>Açougue:</strong> ${açougue} <br><br>`);

    document.getElementById('listaCompras').innerHTML = mensagem;

    elementoLista.style.opacity = 0.9;
}