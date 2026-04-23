function Alerta(){
    var tipoDemulher = document.getElementById("tipo").value;
    window.alert(tipoDemulher);
}


Alerta("MÃES SOLTEIRAS PERTO DE VOCÊ");










console.log("esta menasagem está escondida");


var entrada = prompt("entre com a sua idade");

console.log(entrada);

entrada = parseInt(entrada);

if(entrada>=18){
    console.log("pode entrar pae");
document.getElementById("id").innerHTML = "VOCÊ JA É MAIOR DE IDADE"

document.getElementById("corpo").style.setProperty("background-color", "gray")

}else if(entrada<18){
    console.log("sai daqui meno");
}else{
    console.log("INVALIDO");
}

