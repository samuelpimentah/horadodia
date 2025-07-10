function carregar() {
    var atual = new Date()
    var hora = atual.getHours()
    var textoHora = window.document.getElementById('texto')
    var imagem = window.document.getElementById('foto')
    if (hora > 5 && hora < 12) {
        window.document.body.style.backgroundColor = '#fbd843'
        imagem.innerHTML = '<img src="Imagens_ex014/amanhecer.jpg" alt="">'
    }
    else if (hora > 5 && hora < 18) {
        window.document.body.style.backgroundColor = '#ec9547'
        imagem.innerHTML = '<img src="Imagens_ex014/tarde.jpg" alt="">'
    }
    else {
        window.document.body.style.backgroundColor = '#002246'
        imagem.innerHTML = '<img src="Imagens_ex014/noite.jpg" alt="">'
    }
    textoHora.innerHTML = `Agora são ${hora} horas...`
    imagem.style.borderRadius = '100%'
}
