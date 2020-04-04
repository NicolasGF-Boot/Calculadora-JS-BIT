var resultadolimpio
function numero(x) {
    if (resultadolimpio == 'limpiar'){
        var numero = document.querySelector("#resultado").innerHTML = "" + x;
        resultadolimpio = 'limpio'
    }else{
    var numero = document.querySelector("#resultado").innerHTML;
    var numeroTotal = numero + x;
    document.querySelector("#resultado").innerHTML = numeroTotal;
    }
}
function operacion(x) {
    var numero = document.querySelector("#resultado").innerHTML;
    var operacion = numero.split(" ");
    var SoloUnOperador
    switch (operacion[1]) {
        case '+':
            SoloUnOperador = true
            break;
        case '-':
            SoloUnOperador = true
            break;
        case '/':
            SoloUnOperador = true
            break;
        case '*':
            SoloUnOperador = true
            break;
    }
    if (SoloUnOperador === true){
        document.querySelector("#resultado").innerHTML = numero;
    }else{
        var numeroTotal = numero + x;
        document.querySelector("#resultado").innerHTML = numeroTotal;
        resultadolimpio = 'limpio'
    }
}
function resultado() {
    var numero = document.querySelector("#resultado").innerHTML;
    var operacion = numero.split(" ");
    if (operacion[2] === undefined){
        document.querySelector("#resultado").innerHTML = numero;
    }else{
    var numero1 = Number(operacion[0])
    var numero2 = Number(operacion[2])
    var numeroFinal
    switch (operacion[1]) {
        case '+':
            numeroFinal = numero1 + numero2
            break;
        case '-':
            numeroFinal = numero1 - numero2
            break;
        case '/':
            numeroFinal = numero1 / numero2
            break;
        case '*':
            numeroFinal = numero1 * numero2
            break;
    }
    document.querySelector("#resultado").innerHTML = numeroFinal;
    
}
    resultadolimpio = "limpiar";
}
function limpiar(){

}
