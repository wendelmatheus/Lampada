const imagem = document.querySelector("img#lampada")

imagem.addEventListener('mouseover', ligar)
imagem.addEventListener('mouseout', desligar)
imagem.addEventListener('click', quebrar)
// imagem.addEventListener('click', isLampBroken)

function isLampBroken() {
    return imagem.src.indexOf('quebrada') > -1
}

function ligar() {
    if(!isLampBroken()) {
        imagem.setAttribute("src", "assets/imagens/ligada.jpg")
    }
}
    

function desligar() {
    if(!isLampBroken()) {
        imagem.setAttribute("src", "assets/imagens/desligada.jpg")
    }
    
}

function quebrar() {
    imagem.setAttribute("src", "assets/imagens/quebrada.jpg")

}

