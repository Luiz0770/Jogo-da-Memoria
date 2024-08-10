const imagens = document.querySelectorAll('.imagem')
let listaDeSelecionador = [];

imagens.forEach((imagem) => {
    imagem.addEventListener('click', () => {
        const id = imagem.id
        listaDeSelecionador.push(id)
        console.log(listaDeSelecionador.length)
        imagem.classList.add("imagem-selecionada")
        imagem.classList.remove("desativada")
        imagem.classList.add(`${id}`)

        setTimeout(function () {
            verificarOpcao(id) 
        }, 1000)
    })
})

function verificarOpcao(id) {
    if (listaDeSelecionador.length == 2) {
        if (listaDeSelecionador[0] == listaDeSelecionador[1]) {
            alert('Acertou')
            const opcoes = document.querySelectorAll(`#${listaDeSelecionador[0]}`)
            opcoes.forEach((opcao) => {
                opcao.remove();
            })
            listaDeSelecionador =[];
        }
        else {
            alert('Errou')
            listaDeSelecionador =[];
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
}
