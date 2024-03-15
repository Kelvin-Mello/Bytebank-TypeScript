let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toLocaleString("pt-br", { currency: "BRL", style: "currency" }); // Formata em um estilo de moeda, na moeda brasileira (real) 
}
if (elementoDataAcesso != null) {
    const dataAcesso = new Date(); //Pega a data atual e guarda na constante
    elementoDataAcesso.textContent = dataAcesso.toLocaleString("pt-br", {
        weekday: "long", // Formata o dia da semana como longo
        day: "2-digit", // Formata o dia com dois dígitos
        month: "2-digit", // Formata o mês com dois dígitos
        year: "numeric" // Formata o ano como numérico
    });
}
// Converter TS para JS
// cd js
// tsc bytebank.ts
