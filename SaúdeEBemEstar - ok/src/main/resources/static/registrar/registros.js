//AGUA
async function handleSubmitAgua(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const loader = document.getElementById('loader');
    const submitButton = document.getElementById('submitButton');
    const messageDiv = document.getElementById('messageAgua'); // Elemento para exibir a mensagem

    loader.classList.remove('hidden');
    submitButton.disabled = true;

    try {
        const response = await fetch('http://localhost:8080/agua/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        if (response.status === 201) {
            messageDiv.textContent = 'Registro de consumo de água criado com sucesso!'; // Define a mensagem de sucesso
            messageDiv.style.color = 'BLUE'; // Define a cor da mensagem
            messageDiv.style.display = 'block'; // Exibe a mensagem

            // Adiciona um atraso de 2 segundos antes de redirecionar para a página principal
            setTimeout(() => {
                window.location.href = '../registrar/registrar.html';
            }, 2000); // 2000 milissegundos = 2 segundos
        } else {
            messageDiv.textContent = result.message || 'Erro ao criar o registro de consumo de água'; // Define a mensagem de erro
            messageDiv.style.color = 'red'; // Define a cor da mensagem
            messageDiv.style.display = 'block'; // Exibe a mensagem
        }
    } catch (error) {
        messageDiv.textContent = 'Erro ao conectar ao servidor. Tente novamente mais tarde.'; // Define a mensagem de erro de conexão
        messageDiv.style.color = 'red'; // Define a cor da mensagem
        messageDiv.style.display = 'block'; // Exibe a mensagem
    } finally {
        loader.classList.add('hidden');
        submitButton.disabled = false;
    }
}


//ATIVIDADE
async function handleSubmitAtividade(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const loader = document.getElementById('loader');
    const submitButton = document.getElementById('submitButton');
    const messageDiv = document.getElementById('messageAtividade'); // Elemento para exibir a mensagem

    loader.classList.remove('hidden');
    submitButton.disabled = true;

    try {
        const response = await fetch('http://localhost:8080/atividade/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        if (response.status === 201) {
            messageDiv.textContent = 'Registro de atividade física criado com sucesso!'; // Define a mensagem de sucesso
            messageDiv.style.color = 'BLUE'; // Define a cor da mensagem
            messageDiv.style.display = 'block'; // Exibe a mensagem

            // Adiciona um atraso de 2 segundos antes de redirecionar para a página principal
            setTimeout(() => {
                window.location.href = '../registrar/registrar.html';
            }, 2000); // 2000 milissegundos = 2 segundos
        } else {
            messageDiv.textContent = result.message || 'Erro ao criar o registro de atividade física'; // Define a mensagem de erro
            messageDiv.style.color = 'red'; // Define a cor da mensagem
            messageDiv.style.display = 'block'; // Exibe a mensagem
        }
    } catch (error) {
        messageDiv.textContent = 'Erro ao conectar ao servidor. Tente novamente mais tarde.'; // Define a mensagem de erro de conexão
        messageDiv.style.color = 'red'; // Define a cor da mensagem
        messageDiv.style.display = 'block'; // Exibe a mensagem
    } finally {
        loader.classList.add('hidden');
        submitButton.disabled = false;
    }
}

//ALIMENTAÇAO
async function handleSubmitAlimentacao(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const loader = document.getElementById('loader');
    const submitButton = document.getElementById('submitButton');
    const messageDiv = document.getElementById('messageAlimentacao'); // Elemento para exibir a mensagem

    loader.classList.remove('hidden');
    submitButton.disabled = true;

    try {
        const response = await fetch('http://localhost:8080/alimentacao/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        if (response.status === 201) {
            messageDiv.textContent = 'Registro de alimentação criado com sucesso!'; // Define a mensagem de sucesso
            messageDiv.style.color = 'blue'; // Define a cor da mensagem
            messageDiv.style.display = 'block'; // Exibe a mensagem

            // Adiciona um atraso de 2 segundos antes de redirecionar para a página principal
            setTimeout(() => {
                window.location.href = '../registrar/registrar.html';
            }, 2000); // 2000 milissegundos = 2 segundos
        } else {
            messageDiv.textContent = result.message || 'Erro ao criar o registro de alimentação'; // Define a mensagem de erro
            messageDiv.style.color = 'red'; // Define a cor da mensagem
            messageDiv.style.display = 'block'; // Exibe a mensagem
        }
    } catch (error) {
        messageDiv.textContent = 'Erro ao conectar ao servidor. Tente novamente mais tarde.'; // Define a mensagem de erro de conexão
        messageDiv.style.color = 'red'; // Define a cor da mensagem
        messageDiv.style.display = 'block'; // Exibe a mensagem
    } finally {
        loader.classList.add('hidden');
        submitButton.disabled = false;
    }
}

//SONO
async function handleSubmitSono(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const loader = document.getElementById('loader');
    const submitButton = event.target.querySelector('#submitButton');
    const messageDiv = document.getElementById('messageSono');

    loader.classList.remove('hidden');
    submitButton.disabled = true;

    try {
        const response = await fetch('http://localhost:8080/sono/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        if (response.status === 201) {
            messageDiv.textContent = 'Registro de sono criado com sucesso!';
            messageDiv.style.color = 'blue';
            messageDiv.style.display = 'block';

            setTimeout(() => {
                window.location.href = '../registrar/registrar.html';
            }, 2000); // 2 seconds delay before redirecting
        } else {
            messageDiv.textContent = result.message || 'Erro ao criar o registro de sono';
            messageDiv.style.color = 'red';
            messageDiv.style.display = 'block';
        }
    } catch (error) {
        messageDiv.textContent = 'Erro ao conectar ao servidor. Tente novamente mais tarde.';
        messageDiv.style.color = 'red';
        messageDiv.style.display = 'block';
    } finally {
        loader.classList.add('hidden');
        submitButton.disabled = false;
    }
}