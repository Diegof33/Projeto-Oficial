async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const loader = document.getElementById('loader');
    const submitButton = document.getElementById('submitButton');
    const mensagemCadastro = document.getElementById('mensagemCadastro');
    mensagemCadastro.innerHTML = ''; // Limpa qualquer mensagem anterior

    loader.classList.remove('hidden');
    submitButton.disabled = true;

    try {
        const response = await fetch('http://localhost:8080/users/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        if (response.status === 201) {
            mensagemCadastro.className = 'message success';
            mensagemCadastro.textContent = 'Cadastro feito com sucesso!';
            setTimeout(() => {
                window.location.href = '../inicio/inicio.html'; // Redireciona para a página principal
            }, 1000); // Atraso de 1 segundo
        } else {
            mensagemCadastro.className = 'message error';
            mensagemCadastro.textContent = result; // Exibe a mensagem de erro do servidor
        }
    } catch (error) {
        mensagemCadastro.className = 'message error';
        mensagemCadastro.textContent = 'Erro ao conectar ao servidor. Tente novamente mais tarde.';
    } finally {
        loader.classList.add('hidden');
        submitButton.disabled = false;
    }
}
