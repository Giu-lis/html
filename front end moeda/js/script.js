document.getElementById("formulario").addEventListener('submit', async function(e) {
    e.preventDefault();
        const valor1 = parseFloat(document.getElementById('valor1').value);
        const tenho = document.getElementById('tenho').value;
        const quero = document.getElementById('quero').value;

        let resultado = 0;
        let erro = 0;

        document.getElementById('erro').textContent = '';
        document.getElementById('resultado').textContent = '';

        try {
            const response = await fetch('http://localhost:8080/traduzir', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams ({
                    valor1,
                    tenho,
                    quero
                })
            });

            if(!response.ok){
                throw new Error ('Erro na requisição');
            }

            const data = await response.json ();

            if (data.erro) {
                document.getElementById('erro').textContent = data.erro;
            } else {
                document.getElementById('resultado').textContent = 'Resultado: ' + data.resultado;
            }
        } catch (err) {
            document.getElementById('erro').textContent = 'Erro' + err.message;
        }  
})