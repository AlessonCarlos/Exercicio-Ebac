function validarFormulario() {
    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);

    if (!isNaN(campoA) && !isNaN(campoB)) {
        if (campoB > campoA) {
            document.getElementById("mensagem").innerHTML = "Muito bem! B é maior que A.";
        } else if (campoB < campoA) {
            document.getElementById("mensagem").innerHTML = "Que pena, tente novamente! A é maior que B.";
        } else {
            document.getElementById("mensagem").innerHTML = "Ambos não podem ser iguais! A e B são iguais.";
        }
    } else {
        document.getElementById("mensagem").innerHTML = "Por favor, insira somente números.";
    }
}
