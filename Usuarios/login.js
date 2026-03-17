document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const errorMsg = document.getElementById("errorMsg");

    

    fetch("http://localhost:8080/usuarios/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            senha: senha
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Email ou senha inválidos");
        }
        return response.json();
    })
    .then(usuario => {
        // salva usuário no navegador
        localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

        alert("Bem-vindo " + usuario.nome);

        // redireciona
        window.location.href = "usuarios.html";
    })
    .catch(error => {
        errorMsg.textContent = error.message;
    });

    function atualizarUsuario(id) {
         window.location.href = `index.html?id=${id}`;
    }

        function deletar(id) {
            if (!confirm('Deseja realmente excluir este usuário?')) return;

            fetch(`${API}/${id}`, {
                method: 'DELETE'/*,
                headers:{ 'Authorization: 'Bearer' + token} */
            })
            .then (res => {
                if(!res.ok) throw new Error ();
                carregarUsuarios();
            })
            .catch(() => {
                mensagem.innerHTML = '<span class="erro">Erro ao excluir usuário.</span>';
            });
        }

        carregarUsuarios();

});
