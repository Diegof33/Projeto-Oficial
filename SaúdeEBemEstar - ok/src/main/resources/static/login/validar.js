function validarLogin() {
    var email = document.querySelector('input[type="text"]').value;
    var senha = document.querySelector('input[type="password"]').value;

    if (email === "" || senha === "") {
        alert("Preencha todos os campos!");
        return false;
    }

    // Redireciona para inicio.html
    window.location.href = "inicio.html";
    return true;
}

function validarCadastro() {
    var nome = document.querySelector('input[name="nome"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var senha = document.querySelector('input[name="senha"]').value;
    var confirmSenha = document.querySelector('input[name="confirmSenha"]').value;
    var celular = document.querySelector('input[name="celular"]').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var policy = document.querySelector('input[name="policy"]').checked;

    if (nome === "" || email === "" || senha === "" || confirmSenha === "" || celular === "") {
        alert("Preencha todos os campos!");
        return false;
    }

    if (senha !== confirmSenha) {
        alert("As senhas não coincidem!");
        return false;
    }

    if (!policy) {
        alert("Você deve concordar com os termos e condições!");
        return false;
    }

    // Redireciona para inicio.html
    window.location.href = "inicio.html";
    return true;
}
