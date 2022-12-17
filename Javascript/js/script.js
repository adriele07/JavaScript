function alerta(){
    alert('Abrindo a Página!!!')
}
function trocaMensagem(mensagem){
    document.getElementById('titulo').innerHTML = mensagem;
    /*documente se refere ao html*/ 

}
function acender(){
    document.getElementById('lampada').src ='img/aceso.jpg';
    trocaMensagem('Acendeu');
    document.body.style.backgroundColor = "white";
}
function apagar(){
    document.getElementById('lampada').src='img/apagado.jpg';
    trocaMensagem('Apagou');
    document.body.style.backgroundColor = "black";
}