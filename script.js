let listaDeSelecionador = [];
let listaOpcoes = [
    'magrao', 'magrao',
    'bolivia', 'bolivia',
    'vitor', 'vitor',
    'caio', 'caio',
    'luiz', 'luiz',
    'rippi', 'rippi',
]

exibirNaTela()

const imagens = document.querySelectorAll('.imagem');

imagens.forEach((imagem) => {
    imagem.addEventListener('click', () => {
        const id = imagem.id
        listaDeSelecionador.push(id)
        console.log(listaDeSelecionador.length)
        imagem.classList.add("imagem-selecionada")
        imagem.classList.remove("desativada")
        imagem.classList.add(`${id}`)

        if (listaDeSelecionador.length == 2) {
            setTimeout(function () {
                verificarOpcao(id)
            }, 1000)
        }
    })
})

function verificarOpcao(id) {
    if (listaDeSelecionador[0] == listaDeSelecionador[1]) {
        alert('Acertou')
        const opcoes = document.querySelectorAll(`#${listaDeSelecionador[0]}`)
        opcoes.forEach((opcao) => {
            opcao.remove();
        })
        listaDeSelecionador = [];
        console.log(imagens)
    }
    else {
        alert('Errou')
        listaDeSelecionador = [];
        const opcoes = document.querySelectorAll('.imagem-selecionada')
        console.log(opcoes)
        opcoes.forEach((opcao) => {
            opcao.classList.remove("imagem-selecionada")
            opcao.classList.remove(`${id}`)
            opcao.classList.add("desativada")
            console.log(opcao)
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
    for (let i = 0; i < listaOpcoes.length; i++ ) {
        container.appendChild(criarOpcao(i))
    }
}

function criarOpcao(i) {
    const button = document.createElement('button')
    button.classList.add("imagem")
    button.classList.add("desativada")
    button.id = listaOpcoes[i]
    return button
}
