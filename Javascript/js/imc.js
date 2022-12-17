var total = 0
function calculaImc(){
    let peso = parseFloat(document.getElementById('peso').value)
    let altura = parseFloat(document.getElementById('altura').value)
    imc = peso/(altura*altura);
    exibeImagem(imc)
    exibeImc(imc)
}   
function exibeImc(imc){
    document.getElementById('imc').innerHTML = "IMC "+imc.toFixed(2)
}
function exibeImagem(valor){
    let imagem;
    if (imc <18.5){
        imagem = "desnutrido.jpg"
        
    }else if (imc >= 18.5 && imc<=24.9){
        imagem = "pesonormal.jpg"
    }else if (imc >=25 && imc <= 29.9){
        imagem = "excessopeso.jpg"
    }else{
        imagem = "obesidadee.jpg"
    }
    document.getElementById('resultado').src ='img/'+imagem

}