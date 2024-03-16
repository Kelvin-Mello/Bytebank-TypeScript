function formatarMoeda(valor) {
    return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" }); // Retorna a moeda formatada no padrão brasileiro
}
function formatarData(data) {
    return data.toLocaleString("pt-br", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
}
