function carregar() {
    var atual = new Date()
    var hora = atual.getHours()
    var textoHora = window.document.getElementById('texto')
    var imagem = window.document.getElementById('foto')
    var selecao = window.document.getElementById('estado')
    if (hora > 5 && hora < 12) {
        window.document.body.style.backgroundColor = '#fbd843'
        selecao.style.backgroundColor = '#fbd843'
        imagem.innerHTML = '<img src="Imagens_ex014/amanhecer.jpg" alt="">'
    }
    else if (hora > 5 && hora < 18) {
        window.document.body.style.backgroundColor = '#ec9547'
        imagem.innerHTML = '<img src="Imagens_ex014/tarde.jpg" alt="">'
        selecao.style.backgroundColor = '#ec9547'
    }
    else {
        window.document.body.style.backgroundColor = '#002246'
        imagem.innerHTML = '<img src="Imagens_ex014/noite.jpg" alt="">'
        selecao.style.backgroundColor = '#002246'
    }
    textoHora.innerHTML = `Agora são ${hora} horas...`
    imagem.style.borderRadius = '100%'
}
var chave = '258d121d8c834dc2b1c220404251007'
var cidade = window.document.getElementById('estado')
var resultado = window.document.getElementById('temp')
cidade.addEventListener('change', () => {
    if (cidade.value !== 'nada') {
        fetch(`https://api.weatherapi.com/v1/current.json?key=${chave}&q=${cidade.value},Brazil&lang=pt`)
            .then(res => res.json())
            .then(data => {
                if (data && data.current) {
                    var temp = data.current.temp_c
                    var cond = data.current.condition.text
                    console.log(`${temp} e ${cond}`)
                    resultado.innerHTML = `<p>${cidade.value}: ${temp}°C - ${cond}</p>`
                } else if (data && data.error) {
                    resultado.innerHTML = `<p>Erro API: ${data.error.message}</p>`
                } else {
                    resultado.innerHTML = `<p>Resposta inesperada da API</p>`
                }
            })
            .catch(err => resultado.innerHTML = `<p>Erro: ${err.message}</p>`)
    }
    else {
        resultado.innerHTML = '<p>Escolha um estado para ver a temperatura</p>'
    }
})