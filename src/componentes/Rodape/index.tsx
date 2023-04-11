import { useNavigate } from "react-router-dom"
import { useListaDeParticipantes } from "../../state/hook/useListaDeParticipantes"
import { RodapeStyled } from "./style"
import { useSorteador } from "../../state/hook/useSorteador"

const Rodape = () => {
  const participantes = useListaDeParticipantes()

  const navegarPara = useNavigate()

  const sortear = useSorteador()
 
  const iniciar = () => {
    sortear()
    navegarPara('/sorteio')
  }

  return (
    <RodapeStyled>
      <button disabled={participantes.length < 3} onClick={iniciar}>Iniciar Brincadeira</button>
      <img src="/imagens/sacolas.png" alt="Sacolas de Compras"/>
    </RodapeStyled>
  )
}

export default Rodape