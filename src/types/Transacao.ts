import { TipoTransacao } from "./TipoTransacao.js";

// Define um tipo para ser uma estrutura de novaTransacao, que deverá seguir as regras desse tipo
export type Transacao = {
    tipoTransacao: TipoTransacao;
    valor: number;
    data: Date;
}