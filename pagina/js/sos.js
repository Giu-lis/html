
        // function validarLogin() {
        //     const usuarioInput = document.getElementById("email");
        //     const senhaInput = document.getElementById("senha");

        //     const email = usuarioInput.value;
        //     const senha = senhaInput.value;

        //     // Verificar se os campos estão vazios
        //     if (email === "" || senha === "") {
        //         alert("Por favor, preencha todos os campos.");
        //     } else {
        //         // Aqui você pode adicionar a lógica de verificação real
        //         // Por exemplo, comparar com um usuário e senha pré-definidos:
        //         if (email === "admin" && senha === "senha123") {
        //             alert("Login bem-sucedido!");
                    
        //             window.location.href = "login.html";

        //         } else {
        //             alert("Usuário ou senha inválidos.");
        //         }
        //     }
        // }

        document.getElementById("login").addEventListener('submit', async function(e) {
         e.preventDefault();

            const login = document.getElementById('log').value;
            const senha = document.getElementById('senha').value;

            document.getElementById('erro').textContent = '';
            document.getElementById('resultado').textContent = '';

            try {
            const response = await fetch('http://localhost:8080/logar', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams ({
                    login,
                    senha
                })
            });

            if(!response.ok){
                throw new Error ('Erro na requisição');
            }

            const data = await response.json ();

            if (data.erro) {
                document.getElementById('erro').textContent = data.erro;
            } else {
                document.getElementById('resultado').textContent = data.resultado;
                alert(data.resultado);
            }
        } catch (err) {
            document.getElementById('erro').textContent = 'Erro' + err.message;
        }  
        
})