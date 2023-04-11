import { useListaDeParticipantes } from "../../state/hook/useListaDeParticipantes"
import { StyledList } from "./styles"

const ListaParticipantes = () => {

  const participantes: string[] = useListaDeParticipantes()
  return (
    <StyledList>
      {participantes.map(participante => <li key={participante}>{participante}</li>)}
    </StyledList>
  )

}

export default ListaParticipantes