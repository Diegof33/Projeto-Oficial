async function handleLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const loader = document.getElementById('loader');
    const loginButton = document.getElementById('loginButton');
    const messageDiv = document.getElementById('messageLogin');

    loader.classList.remove('hidden');
    loginButton.disabled = true;

    try {
        const response = await fetch('http://localhost:8080/users/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        const result = await response.text(); // Capturando texto puro, assumindo resposta como texto plano

        if (response.ok) {
            messageDiv.textContent = 'Login bem-sucedido!';
            messageDiv.classList.remove('error'); // Remova a classe de erro se estiver presente
            messageDiv.classList.add('success'); // Adicione a classe de sucesso
            console.log('Mensagem de sucesso exibida.');
            setTimeout(() => {
                window.location.href = '../inicio/inicio.html'; // Redireciona para a página principal ou dashboard
            }, 1000); // Atraso de 1 segundo (1000 milissegundos)
        } else {
            messageDiv.textContent = result;
            messageDiv.classList.remove('success'); // Remova a classe de sucesso se estiver presente
            messageDiv.classList.add('error'); // Adicione a classe de erro
            console.log('Mensagem de erro exibida.');
        }
    } catch (error) {
        messageDiv.textContent = 'Erro ao conectar ao servidor. Tente novamente mais tarde.';
        messageDiv.classList.remove('success'); // Remova a classe de sucesso se estiver presente
        messageDiv.classList.add('error'); // Adicione a classe de erro
        console.error('Erro ao processar a requisição:', error);
    } finally {
        loader.classList.add('hidden');
        loginButton.disabled = false;
    }
}
