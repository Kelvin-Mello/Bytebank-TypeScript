const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Previne para que o formulário não recarregue após ser submetido, porém, ainda atualizando as informações
    if (!elementoFormulario.checkValidity()) { // Verifica se todos os dados do formulário estão preenchidos e se estão válidos
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }
    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao"); // Guarda a informação tipoTransacao do formulário em uma constante
    const inputValor = elementoFormulario.querySelector("#valor"); // Guarda a informação valor do formulário em uma constante
    const inputData = elementoFormulario.querySelector("#data"); // Guarda a informação data do formulário em uma constante
    let tipoTransacao = inputTipoTransacao.value; // Converte e guarda o atributo value da constante inputTipoTransacao em uma variável do tipo transação
    let valor = inputValor.valueAsNumber; // Guarda o atributo value da constante inputValor em uma variável
    let data = new Date(inputData.value); // Guarda o atributo value da constante inputData em uma variável
    // Verifica o tipo de transação usando o que foi definido com enum
    if (tipoTransacao == TipoTransacao.DEPOSITO) { // Transação depósito, se soma o valor
        saldo += valor;
    }
    else if (tipoTransacao == TipoTransacao.TRANSFERENCIA || tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) { // Transação transferência ou pagamento de boleto, se subtrai o valor
        saldo -= valor;
    }
    else { // Transação inválida, gera um aviso
        alert("Tipo de transação inválido");
        return;
    }
    elementoSaldo.textContent = formatarMoeda(saldo); // Atualiza o saldo no padrão da moeda brasileira
    // Cria um objeto para nova transação contendo as parâmetros necessários
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    elementoFormulario.reset(); // Após o subit do formulário, as informações serão apagadas, deixando o formulário limpo para uma nova transação
});
