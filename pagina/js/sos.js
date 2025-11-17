
        function validarLogin() {
            const usuarioInput = document.getElementById("email");
            const senhaInput = document.getElementById("senha");

            const email = usuarioInput.value;
            const senha = senhaInput.value;

            // Verificar se os campos estão vazios
            if (email === "" || senha === "") {
                alert("Por favor, preencha todos os campos.");
            } else {
                // Aqui você pode adicionar a lógica de verificação real
                // Por exemplo, comparar com um usuário e senha pré-definidos:
                if (email === "admin" && senha === "senha123") {
                    alert("Login bem-sucedido!");
                    
                    window.location.href = "login.html";

                } else {
                    alert("Usuário ou senha inválidos.");
                }
            }
        }