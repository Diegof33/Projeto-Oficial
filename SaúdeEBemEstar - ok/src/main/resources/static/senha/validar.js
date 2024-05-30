async function handlePasswordReset(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const loader = document.getElementById('loader');
    const resetButton = document.getElementById('resetButton');
    const messageDiv = document.getElementById('messageLogin');

    loader.classList.remove('hidden');
    resetButton.disabled = true;

    try {
        const response = await fetch('http://localhost:8080/users/reset-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const result = await response.json();
            messageDiv.textContent = result.message || 'Instruções de redefinição de senha enviadas para o seu e-mail!';
            messageDiv.classList.remove('error');
            messageDiv.classList.add('success');
        } else {
            try {
                const errorResult = await response.json();
                messageDiv.textContent = errorResult.message || 'Falha ao enviar instruções de redefinição de senha.';
            } catch (e) {
                messageDiv.textContent = 'Erro ao conectar ao servidor. Tente novamente mais tarde.';
            }
            messageDiv.classList.remove('success');
            messageDiv.classList.add('error');
        }
    } catch (error) {
        messageDiv.textContent = 'Erro ao conectar ao servidor. Tente novamente mais tarde.';
        messageDiv.classList.remove('success');
        messageDiv.classList.add('error');
    } finally {
        loader.classList.add('hidden');
        resetButton.disabled = false;
    }
}
