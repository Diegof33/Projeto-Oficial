if (response.status === 201) {
    document.getElementById('successAlert').style.display = 'block';
    setTimeout(() => {
        window.location.href = '..//inicio/inicio.html'; // Redireciona para a página principal após alguns segundos
    }, 3000); // Redireciona após 3 segundos (3000 milissegundos)
}

    // Redireciona para inicio.html
    window.location.href = "inicio.html";
    return true;

   