document.getElementById('calcForm').addEventListener('submit', async function(e){
    e.preventDefault();

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacao = document.getElementById('operacao').value;


    // limpa mensagens anteriores
    document.getElementById('erro').textContent = '';
    document.getElementById('resultado').textContent = '';

    try{

        const response = await fetch ('http://localhost:8080/calcular', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                num1: num1,
                num2: num2,
                operacao: operacao
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
        document.getElementById('erro').textContent = 'Erro: ' + err.message;
    }


});

// document.getElementById('formulario').addEventListener('submit', async function (e) {
//     e.preventDefault();
//     const num1 = parseFloat(document.getElementById('num1').value);
//     const num2 = parseFloat(document.getElementById('num2').value);
//     const operacao = document.getElementById('operacao').value;

//     try {
//         const response = await fetch('http://localhost:8080/calcular', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             },
//             body: new URLSearchParams({
//                 num1: num1,
//                 num2: num2,
//                 operacao: operacao
//             })
//         });

//         if (!response.ok) {
//             throw new Error('Erro na requisição');
//         }

//         const data = await response.json();

//         if (data.erro) {
//             document.getElementById('erro').textContent = data.erro;
//         } else {
//             document.getElementById('resultado').textContent = 'Resultado: ' + data.resultado;
//         }

//     } catch (err) {
//         document.getElementById('erro').textContent = 'Erro: ' + err.message;
//     }


    
// });