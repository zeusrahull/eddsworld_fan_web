function finalizarPedido() {

    var campos = ["nome", "email", "endereco"];
    var vazio = false;

    for (var i = 0; i < campos.length; i++) {

        var valor = document.getElementById(campos[i]).value;

        if (valor == "") {
            vazio = true;
        }
    }

    if (vazio == true) {
        alert("Você tem que preencher os campos!");
    } else {
        alert("Pedido feito com sucesso!");
    }

}