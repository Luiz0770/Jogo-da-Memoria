let listaDeSelecionador = [];
let listaOpcoes = [
    'magrao', 'magrao',
    'bolivia', 'bolivia',
    'vitor', 'vitor',
    'caio', 'caio',
    'luiz', 'luiz',
    'rippi', 'rippi',
]

let acertos = 0;

// exibirNaTela()
const btnIniciar = document.getElementById('iniciar').addEventListener('click', () => exibirNaTela())


function chamarImagens() {
    const imagens = document.querySelectorAll('.imagem');

    imagens.forEach((imagem) => {
        imagem.addEventListener('click', () => {
            const id = imagem.id
            listaDeSelecionador.push(id)
            imagem.classList.add("imagem-selecionada")
            imagem.classList.remove("desativada")
            imagem.classList.add(`${id}`)
    
            if (listaDeSelecionador.length == 2) {
                setTimeout(function () {
                    verificarOpcao(id)
                }, 700)
            }
        })
    })
}


function verificarOpcao(id) {
    if (listaDeSelecionador[0] == listaDeSelecionador[1]) {
        //alert('Acertou')
        const opcoes = document.querySelectorAll(`#${listaDeSelecionador[0]}`)
        opcoes.forEach((opcao) => {
            opcao.remove();
        })
        acertos++;
        console.log(acertos)
        listaDeSelecionador = [];
        
        if (acertos > 5) {
            reiniciar()
        }
        
    }
    else {
        //alert('Errou')
        listaDeSelecionador = [];
        const opcoes = document.querySelectorAll('.imagem-selecionada')
        
        opcoes.forEach((opcao) => {
            opcao.classList.remove("imagem-selecionada")
            opcao.classList.remove(`${id}`)
            opcao.classList.add("desativada")
            
        })
    }
}

function embaralharOpcoes() {
    for (let i = listaOpcoes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [listaOpcoes[i], listaOpcoes[j]] = [listaOpcoes[j], listaOpcoes[i]];
    }
    return listaOpcoes;
}

function exibirNaTela() {
    embaralharOpcoes()
    const container = document.querySelector('.container')
    container.innerHTML = ''
    for (let i = 0; i < listaOpcoes.length; i++ ) {
        container.appendChild(criarOpcao(i))
    }
    chamarImagens()
}

function criarOpcao(i) {
    const button = document.createElement('button')
    button.classList.add("imagem")
    button.classList.add("desativada")
    button.id = listaOpcoes[i]
    return button
}

function reiniciar() {
    const container = document.querySelector('.container')
    container.innerHTML = `<button class='btn' id="reiniciar">Reiniciar</button>`
    const btnReiniciar = document.getElementById('reiniciar').addEventListener('click', () => {
        //location.reload();
        acertos = 0
        exibirNaTela()
    })
}