let saldo = 3000

const elementoSaldo = document.querySelector(".saldo-valor .valor")
elementoSaldo.textContent = saldo

const elementoFormulario = document.querySelector(".block-nova-transacao form")
elementoFormulario.addEventListener("submit", function(event) { // Entra na função quando o formulário for submetido
    event.preventDefault() // Previne para que o formulário não recarregue após ser submetido, porém, ainda atualizando as informações

    if (!elementoFormulario.checkValidity()) { // Verifica se todos os dados do formulário estão preenchidos e se estão válidos
        alert("Por favor, preencha todos os campos da transação!")
        return
    }
})