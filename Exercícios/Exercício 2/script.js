var data = new Date()
var ano = data.getFullYear()

function verificar() {
    var res = document.querySelector('div#res')
    var anoP = document.getElementById('txtano')

    if(anoP.value.length == 0 || anoP.value > ano){    //Verifica se o ano é válido
        window.alert("[ERROR] Verifique os dados preenchidos e tente novamente!")
    }else {                                            // Ferifica o gênero
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        var idade = ano - Number(anoP.value)

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = "Masculino"
            if(idade >= 1 && idade < 16){
                // Menino
                img.setAttribute('src', 'menino.png')
            } else if(idade >= 16 && idade < 25) {
                // Jovem
                img.setAttribute('src', 'jovem.png')
            } else if(idade >= 25 && idade < 60) {
                // Adulto
                img.setAttribute('src', 'adulto.png')
            } else if(idade >= 60 && idade <121 ) {
                // Idoso
                img.setAttribute('src', 'velho.png')
            }else {
                window.alert("Parabéns, você é um Matusalem!")
            }

        }else if(fsex[1].checked) {
            genero = "Feminino"
            if(idade >= 1 && idade < 16){
                // Menina
                img.src = 'menina.png'
            } else if(idade >= 16 && idade < 25) {
                // Jovem
                img.src = 'jovemM.png'
            } else if(idade >= 25 && idade < 60) {
                // Adulta
                img.src = 'adulta.png'
            } else if(idade >= 60 && idade <121 ) {
                // Idosa
                img.src = 'velha.png'
            }else {
                window.alert("Parabéns, você é uma Matusalem!")
            }
        }
        
        res.innerHTML = `Tem ${idade} ano(s) e é do sexo ${genero} ` // Imprime na tela o resultado em texto
        res.style.textAlign = 'center'
        res.appendChild(img)

    }
}