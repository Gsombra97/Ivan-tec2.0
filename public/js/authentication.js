// O código inteiro está dentro dessa função addEventListener para que o formulário SÓ seja capaz de submeter arquivos
// quando o DOM(HTLM, CSS e JavaScript) forem carregados.
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const loginMessage = document.getElementById("login-message");
    // função que espera um evento submit para executar
    loginForm.addEventListener("submit", async (event) => {
        //Função que impede que a página recarregue quando o formulário é enviado
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            // Função assíncrona que envia uma requisisão de um arquivo Json para a rota /authenticated
            const response = await fetch("/authenticated", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            // Condicionais de tratamente de resposta
            if (!response.ok) {
                const errorData = await response.json();
                loginMessage.textContent = `Erro: ${errorData.message || "Erro ao tentar autenticar."}`;
                loginMessage.style.color = "red";
            } else {
                const data = await response.json();
                loginMessage.style.color = "green";
                //Redirecionamento
                loginMessage.textContent = `${data.message || "Login realizado com sucesso!"}`;
                window.location.href = `/home?authToken=${data.authToken}`;
                setTimeout(() => {
                    window.location.href = "/";
                }, 2000);
            }
        } catch (error) {
            loginMessage.textContent = `Erro de rede: ${error.message}`;
            loginMessage.style.color = "red";
        }
    });
});