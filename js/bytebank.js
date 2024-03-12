var saldo = 3000;
var elementoSaldo = document.querySelector(".saldo-valor .valor");
elementoSaldo.textContent = saldo.toString();
var elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Previne para que o formulário não recarregue após ser submetido, porém, ainda atualizando as informações
    if (!elementoFormulario.checkValidity()) { // Verifica se todos os dados do formulário estão preenchidos e se estão válidos
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }
    var inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao"); // Guarda a informação tipoTransacao do formulário em uma constante
    var inputValor = elementoFormulario.querySelector("#valor"); // Guarda a informação valor do formulário em uma constante
    var inputData = elementoFormulario.querySelector("#data"); // Guarda a informação data do formulário em uma constante
    var tipoTransacao = inputTipoTransacao.value; // Guarda o atributo value da constante inputTipoTransacao em uma variável
    var valor = inputValor.valueAsNumber; // Guarda o atributo value da constante inputValor em uma variável
    var data = new Date(inputData.value); // Guarda o atributo value da constante inputData em uma variável
    // Verifica o tipo de transação
    if (tipoTransacao == "Depósito") { // Transação depósito, se soma o valor
        saldo += valor;
    }
    else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") { // Transação transferência ou pagamento de boleto, se subtrai o valor
        saldo -= valor;
    }
    else { // Transação inválida, gera um aviso
        alert("Tipo de transação inválido");
        return;
    }
    elementoSaldo.textContent = saldo.toString();
    // Cria um objeto para nova transação contendo as parâmetros necessários
    var novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    elementoFormulario.reset(); // Após o subit do formulário, as informações serão apagadas, deixando o formulário limpo para uma nova transação
});
// Converter TS para JS
// cd js
// tsc bytebank.ts
