function verificaVeracidade(event) {
    event.preventDefault();

    var email_pessoa, senha_pessoa, mensagem_credenciais;

    email_pessoa = document.getElementById("inpEmail").value;
    senha_pessoa = document.getElementById("inpSenha").value;
    mensagem_credenciais = document.getElementById("msg_credenciais");

    mensagem_credenciais.classList.remove("sucesso", "erro");

    if ((email_pessoa === "elizabethbennet@gmail.com") && (senha_pessoa === "12345")) {
        mensagem_credenciais.classList.add("sucesso");
        mensagem_credenciais.textContent = "Bem-vindo a bordo!!!";

        setTimeout(function () {
            window.location.href = "main.html";
        }, 5000);
    }

    else {
        mensagem_credenciais.classList.add("erro");
        mensagem_credenciais.textContent = "Informações incorretas, por favor tente novamente!";
    }
}