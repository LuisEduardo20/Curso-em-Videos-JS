var imprimir = document.getElementById('flista')
var num = document.getElementById('numero')
var res = document.getElementById('result')
var container = []

function add(num) {
    var n1 = Number(num.value) // Converte o número do input pra number
    if(n1 >= 1 && n1 <= 100){  // Verifica se o número é maior ou igual a 1 e menor ou igual a 100
        if(!verificaLista(n1, container)){
            container.push(n1)
            let item = document.createElement('option') // Cria um elemento Option
            item.text = `Valor ${n1} adicionado` // Coloca o texto que ele receberá
            imprimir.appendChild(item) // Adiciona a Option na tag Select
            res.innerHTML = ''
        }else {
            window.alert('Valor já incluso na lista')
        }
    }else{
        window.alert('[ERROR] Número inválido')
    }
    num.value = '' // Atribui o valor vazio no input do número após adicionar ele
    num.focus() // Mantém o input selecionado para adicionar mais valores
}

function verificaLista(valor, lista) {  // Verifica se o número já está contido no vetor
    if(lista.indexOf(valor) != -1){
        return true
    }
    else {
        return false
    }
}

function finaliza() {
    var tam = container.length
    if(tam === 1){
        res.innerHTML = `O vetor possui ${container.length} elemento`
        
    }
    else if(tam > 1){
        var cont = 0
        let maior = container[0]
        let menor = container[0]
        let media = 0

        for(let pos in container){ // Varre todo o vetor e compara os valores
            cont += container[pos]
            if(container[pos] > maior){
                maior = container[pos]
            }
            if(container[pos] < menor){
                menor = container[pos]
            }

        }
        media = cont / container.length // Calcula a média

        res.innerHTML += `<p>O vetor possui ${container.length} elementos</p>`
        res.innerHTML += `<p>O maior valor do vetor é ${maior}</p>`
        res.innerHTML += `<p>O menor valor do vetor é ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é ${cont}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
    else{
        window.alert('[ERROR] Vetor inválido')
    }
}


