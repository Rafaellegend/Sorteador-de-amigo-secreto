import { CabecalhoStyled } from "./styles"


const Cabecalho = () => {
    return (
        <CabecalhoStyled>
            <div className="imagem-logo" role="img" aria-label='Logo do Sorteador'></div>
            <img className='participante' src="\imagens\participante.png"  alt="Participante com um presente na mão"/>
        </CabecalhoStyled>

    )
}

export default Cabecalho