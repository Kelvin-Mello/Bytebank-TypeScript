function formatarMoeda(valor: number): string { // Declara a função que recebe uma variável numérica e retorna uma string
    return valor.toLocaleString("pt-br", {style: "currency", currency: "BRL"}); // Retorna a moeda formatada no padrão brasileiro
}

function formatarData(data: Date): string { // Declara a função que recebe uma variável do tipo Date e retorna uma string
    return data.toLocaleString("pt-br", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    })
}