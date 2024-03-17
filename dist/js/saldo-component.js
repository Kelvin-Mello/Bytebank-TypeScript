let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoSaldo != null) {
    elementoSaldo.textContent = formatarMoeda(saldo); // Formata em um estilo de moeda, na moeda brasileira (real) 
}
if (elementoDataAcesso != null) {
    const dataAcesso = new Date(); //Pega a data atual e guarda na constante
    elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO); // Formata a data
}
// Converter TS para JS
// cd js
// tsc bytebank.ts
