function numero(x) {
    var numero = document.querySelector("#resultado").innerHTML;
    var numeroTotal = numero + x;
    document.querySelector("#resultado").innerHTML = numeroTotal;
}
function operacion(x) {
    var numero = document.querySelector("#resultado").innerHTML;
    var numeroTotal = numero + x;
    document.querySelector("#resultado").innerHTML = numeroTotal;
}
function resultado() {
    var numero = document.querySelector("#resultado").innerHTML;
    var operacion = numero.split(" ");
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
