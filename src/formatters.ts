function formatarMoeda(valor: number): string { // Declara a função que recebe uma variável numérica e retorna uma string
    return valor.toLocaleString("pt-br", {style: "currency", currency: "BRL"}); // Retorna a moeda formatada no padrão brasileiro
}

function formatarData(data: Date, formato: FormatoData = FormatoData.PADRAO): string { // Declara a função que recebe uma variável do tipo Date e retorna uma string. Tem o parâmetro formato para formatar a data com o padrão desejado.
    if (formato === FormatoData.DIA_SEMANA_DIA_MES_ANO) {
        return data.toLocaleDateString("pt-br", { // Retorna no formato Dia Semana, Dia, Mês e Ano
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        })
    }
    else if (formato === FormatoData.DIA_MES) { // Retorna no formato Dia e Mês
        return data.toLocaleDateString("pt-br", {day: "2-digit", month: "2-digit"})
    }

    return data.toLocaleDateString("pt-br") // Retorna no formato padrão, caso nenhuma opção seja escolhida
}