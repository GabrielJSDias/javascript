



function carregar(){
    var mensagem = document.getElementById('mensagem')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var corpo = document.getElementsByTagName('body')[0]

    if (hora >= 18 || hora < 6){
        mensagem.innerText = `Boa noite! Agora são ${hora}horas.`
        imagem.src = '3.png'
        corpo.style.backgroundColor = '#050b2e'
    } else if (hora >= 6 && hora < 12){
        mensagem.innerText = `Bom dia! Agora são ${hora}horas.`
        imagem.src = '1.png'
        corpo.style.backgroundColor = '#aaeaf5'
    } else {
        mensagem.innerText = `Boa tarde! Agora são ${hora}horas.`
        imagem.src = '2.png'
        corpo.style.backgroundColor = '##ffec44'
    }
}