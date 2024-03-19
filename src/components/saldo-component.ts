import { formatarData, formatarMoeda } from "../utils/formatters.js"
import { FormatoData } from "../types/FormatoData.js"


let saldo: number = 3000

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement

if (elementoDataAcesso != null) {
    const dataAcesso: Date = new Date() //Pega a data atual e guarda na constante
    elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO) // Formata a data
}

export function getSaldo(): number { // Exporta a função getSaldo para ficar disponível em outros módulos. É number, pois retorna um número
    return saldo
}

atualizarSaldo(saldo) // Chama a função atualiza saldo para o primeiro carregamento
export function atualizarSaldo(novoSaldo: number): void { // exporta função atualizarSaldo para ficar disponível em outros módulos. Recebe um valor numérico para atualizar o saldo. É void, pois não retorna nada
    saldo = novoSaldo

    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(saldo) // Formata em um estilo de moeda, na moeda brasileira (real) 
    }
}

// Converter TS para JS
// cd js
// tsc bytebank.ts