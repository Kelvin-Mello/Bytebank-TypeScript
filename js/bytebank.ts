let saldo = 3000

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement
elementoSaldo.textContent = saldo.toString()

const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement
elementoFormulario.addEventListener("submit", function(event) { // Entra na função quando o formulário for submetido
    event.preventDefault() // Previne para que o formulário não recarregue após ser submetido, porém, ainda atualizando as informações

    if (!elementoFormulario.checkValidity()) { // Verifica se todos os dados do formulário estão preenchidos e se estão válidos
        alert("Por favor, preencha todos os campos da transação!")
        return
    }

    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement// Guarda a informação tipoTransacao do formulário em uma constante
    const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement// Guarda a informação valor do formulário em uma constante
    const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement// Guarda a informação data do formulário em uma constante

    let tipoTransacao: string = inputTipoTransacao.value // Guarda o atributo value da constante inputTipoTransacao em uma variável
    let valor: number = inputValor.valueAsNumber // Guarda o atributo value da constante inputValor em uma variável
    let data: Date = new Date(inputData.value) // Guarda o atributo value da constante inputData em uma variável

    // Verifica o tipo de transação
    if (tipoTransacao == "Depósito") { // Transação depósito, se soma o valor
        saldo += valor
    } else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") { // Transação transferência ou pagamento de boleto, se subtrai o valor
        saldo -= valor
    } else{ // Transação inválida, gera um aviso
        alert("Tipo de transação inválido")
        return
    }

    elementoSaldo.textContent = saldo.toString()

    // Cria um objeto para nova transação contendo as parâmetros necessários
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    }

    console.log(novaTransacao)
    elementoFormulario.reset() // Após o subit do formulário, as informações serão apagadas, deixando o formulário limpo para uma nova transação
})

// Converter TS para JS
// cd js
// tsc bytebank.ts