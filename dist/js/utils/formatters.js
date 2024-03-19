import { FormatoData } from "../types/FormatoData.js"; // Importa o enum FormatoData
export function formatarMoeda(valor) {
    return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" }); // Retorna a moeda formatada no padrão brasileiro
}
export function formatarData(data, formato = FormatoData.PADRAO) {
    if (formato === FormatoData.DIA_SEMANA_DIA_MES_ANO) {
        return data.toLocaleDateString("pt-br", {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    }
    else if (formato === FormatoData.DIA_MES) { // Retorna no formato Dia e Mês
        return data.toLocaleDateString("pt-br", { day: "2-digit", month: "2-digit" });
    }
    return data.toLocaleDateString("pt-br"); // Retorna no formato padrão, caso nenhuma opção seja escolhida
}
