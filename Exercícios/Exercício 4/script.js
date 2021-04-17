var num = document.getElementById('numero')
var num1
var n1, n2, n3, n4, n5, n6, n7, n8, n9, n10
n1 = document.getElementById('1')
n2 = document.getElementById('2')
n3 = document.getElementById('3')
n4 = document.getElementById('4')
n5 = document.getElementById('5')
n6 = document.getElementById('6')
n7 = document.getElementById('7')
n8 = document.getElementById('8')
n9 = document.getElementById('9')
n10 = document.getElementById('10')

function tabu(num1){
    num1 = Number(num.value)
    n1.innerHTML = `${num1} X 1 = ${num1 * 1}`
    n2.innerHTML = `${num1} X 2 = ${num1 * 2}`
    n3.innerHTML = `${num1} X 3 = ${num1 * 3}`
    n4.innerHTML = `${num1} X 4 = ${num1 * 4}`
    n5.innerHTML = `${num1} X 5 = ${num1 * 5}`
    n6.innerHTML = `${num1} X 6 = ${num1 * 6}`
    n7.innerHTML = `${num1} X 7 = ${num1 * 7}`
    n8.innerHTML = `${num1} X 8 = ${num1 * 8}`
    n9.innerHTML = `${num1} X 9 = ${num1 * 9}`
    n10.innerHTML = `${num1} X 10 = ${num1 * 10}`
    
}