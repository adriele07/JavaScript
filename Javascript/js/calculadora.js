    /*
    criar vaiavel
    let  significa que a variavel vai ser usada somente dentro da funcao
    já o var é global
    alert('função chamada')
    
    alert(num1)
    */

var total =0
function exibe(){
    let valor = 10
    while(valor > 0){
        alert('Descendo'+valor);
        valor --;
    }
}

function soma(){
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    total=num1+num2
    exibeTotal(total);
    verificaValor(total);
}
function subtracao(){
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    total=num1-num2
    exibeTotal(total);
    verificaValor(total);
}
function divisao(){
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    total=num1/num2
    exibeTotal(total);
    verificaValor(total);
}
function multiplicacao(){
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    total=num1*num2
    exibeTotal(total);
    verificaValor(total);
}

function exibeTotal(valor){
    document.getElementById('total').innerHTML = "Total é "+valor
}
function verificaValor(valor){
    if (valor >100){
        alert('Valor Ultrapassou o permitido!!')
    }else if (valor <100 && valor >50){
        alert('Cuidado')
    }else{
        alert('Está tranquilo!!')
    }
}
