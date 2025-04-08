import { Cabecalho } from "../Components/Cabecalho";
import { BarraNavegacao } from "../Components/BarraNavegacao";
import { Conteudo } from "../Components/Conteudo";

// estrutura
export function Inicial() {
    return (
        <>
            <Cabecalho />
            <BarraNavegacao />
            <Conteudo />
        </>
    )
}