function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`

    if (hora >= 0 && hora < 12){
        // DIA
        img.src = 'manha.png'
        var corpo = window.document.body
        corpo.style.backgroundColor = 'rgb(241, 194, 65)'
    }else if (hora >= 12 && hora < 18){
        // Tarde
        img.src = 'tarde.png'
        var corpo = window.document.body
        corpo.style.backgroundColor = 'orange'
    }else {
        // noite
        img.src = 'noite.png'
        var corpo = window.document.body
        corpo.style.backgroundColor = 'rgb(45, 58, 241)'
    }
}