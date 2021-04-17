function contar() {
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    var res = document.getElementById('contagem')
    res.innerHTML = ''
    
    if(inicio.length == 0 || fim.length == 0 || passo.length == 0){
        res.innerHTML = 'Impossível contar!'
    }else {
        var n1 = Number(inicio)
        var n2 = Number(fim)
        var n3 = Number(passo)
        
        if(n3 == 0){
            n3 = 1
            res.innerHTML = 'Contando: '
            for(let c = n1 ; c <= n2 ; c += n3 ){
                res.innerHTML += `\u{1F449} ${c} `
            }
            res.innerHTML += '\u{1F3C1}'
        }else if(n3 < 0){
            res.innerHTML = 'Você é caranguejo pra andar pra tras?'
        }

        if(n2 > n1 && n3 > 0){
            res.innerHTML = 'Contando: '
            for(let c = n1 ; c <= n2 ; c += n3 ){
                res.innerHTML += `\u{1F449} ${c} `
            }
            res.innerHTML += '\u{1F3C1}'
        }else if(n1 > n2 && n3 > 0){
            res.innerHTML = 'Contando: '
            for(let c = n1 ; n2 <= c ; c -= n3 ){
                res.innerHTML += `\u{1F449} ${c} `
            }
            res.innerHTML += '\u{1F3C1}'
        }

    }

}