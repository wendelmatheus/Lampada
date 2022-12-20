const imagem = document.querySelector("img#lampada")

/*
    criação dos eventos do mouse:

    mouseover: quando o mouse entra
    mouseout: quando o mouse sai
    click: quando o mouse clica

*/
imagem.addEventListener('mouseover', ligar)
imagem.addEventListener('mouseout', desligar)
imagem.addEventListener('click', quebrar)

// criação da função para verificar se a lâmpada está quebrada
function isLampBroken() {
    return imagem.src.indexOf('quebrada') > -1
}

// função para ligar a lâmpada

/*
    "!" é negação, ou seja, se aquela condição for falsa
    OBS: !isLampBroken é a condição se a lâmpada não estiver quebrada... então executa aquele pedaço de código dentro do if
    */
function ligar() {
    if(!isLampBroken()) {
        imagem.setAttribute("src", "assets/imagens/ligada.jpg")
    }
}
    
// função para desligar a lâmpada
function desligar() {
    if(!isLampBroken()) {
        imagem.setAttribute("src", "assets/imagens/desligada.jpg")
    }
    
}

// função para quebrar a lâmpada
function quebrar() {
    imagem.setAttribute("src", "assets/imagens/quebrada.jpg")
}

