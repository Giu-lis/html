document.getElementById('conversao').addEventListener('submit', async function (e) {
    e.preventDefault();

    const temp = parseFloat(document.getElementById('temp').value);
    const unidade = document.getElementById('unidade').value;
    const unidade2 = document.getElementById('unidade2').value;

    document.getElementById('erro').textContent = '';
    document.getElementById('resultado').textContent = '';

    try{ 

        const response = await fetch ('http://localhost:8080/converter', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                temp: temp,
                unidade: unidade,
                unidade2: unidade2,

            })
        });

        if(!response.ok){
            throw new Error('Erro na requisição');
        }

        const data = await response.json();

        if(data.erro){
            document.getElementById('erro').textContent = data.erro;
        }else{
            document.getElementById('resultado').textContent = 'Resultado: ' + data.resultado; 
        }

    }catch(err){
        document.getElementById('erro').textContent = 'Erro: ' + err.massage;
    }
});