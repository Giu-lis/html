let display = document.getElementById('display');

let valorAtual = '';
let valorAnterior = '';
let operacao = '';

function inserir(valor){
    valorAtual += valor;
    display.value = valorAtual;
    document.getElementById('display').textContent = valorAtual || '0';
}

  function setOperacao(op) {
    if (valorAtual === '') return;
    operacao = op;
    valorAnterior = valorAtual;
    valorAtual = '';
    document.getElementById('display').textContent = ''; // limpa o display para o próximo número
  }

function calcular() {
    display.value=eval(display.value);
}

function Clear() {
    display.value = '';
    operacao = '';
    valorAtual = '';
    document.getElementById('display').textContent = '';
}

  async function calcular() {
    if (valorAnterior === '' || valorAtual === '' || !operacao) return;

    try {
        const response = await fetch('http://localhost:8080/calcular', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                num1:valorAnterior,
                num2:valorAtual,
                operacao: operacao
            })
        });

        if (!response.ok) {
            throw new Error('Erro na requisição');
        }

        const data = await response.json();

        if (data.erro) {
            document.getElementById('erro').textContent = data.erro;
        } else {
            valorAtual = String(data.resultado);
            valorAnterior = '';
            operacao = null;
            document.getElementById('display').textContent = String(data.resultado);
        }

    } catch (err) {
        document.getElementById('erro').textContent = 'Erro: ' + err.message;
    }
  }