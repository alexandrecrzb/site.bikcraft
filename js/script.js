//Ativar links do menu
const links = document.querySelectorAll('.header-menu a')

links.forEach(ativarLink)

function ativarLink(link) {
    const url = window.location.href
    const href = link.href

    if (url.includes(href)){
        link.classList.add('ativo')
    }

}

//Ativar itens do orçamento
const parametros = new URLSearchParams(window.location.search)

parametros.forEach(ativarProduto)

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro)
    if (elemento) {
        elemento.checked = true
    }
}

// Perguntas frequente
const perguntas = document.querySelectorAll('.perguntas button')

perguntas.forEach(eventosPerguntas)

function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta)
}

function ativarPergunta(event) {
    const pergunta = event.currentTarget
    const controls = pergunta.getAttribute('aria-controls')
    const resposta = document.getElementById(controls)

    resposta.classList.toggle('ativa')
    const ativa = resposta.classList.contains('ativa')
    pergunta.setAttribute('aria-expanded', ativa)
}

// Galeria de bicicletas
const galeria = document.querySelectorAll('.bicicleta-imagens img')
const galeriaContainer = document.querySelector('.bicicleta-imagens')

galeria.forEach(eventosGaleria)

function eventosGaleria(img) {
    img.addEventListener('click', trocarImagem)
}

function trocarImagem(event) {
    const img = event.currentTarget
    galeriaContainer.prepend(img)
}

// Animação
if (window.SimpleAnime) {
    new SimpleAnime();
}
