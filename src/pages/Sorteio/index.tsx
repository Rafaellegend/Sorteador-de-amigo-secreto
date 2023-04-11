import { useState } from "react"
import { useListaDeParticipantes } from "../../state/hook/useListaDeParticipantes"
import { useResultadoSorteio } from "../../state/hook/useResultadoSorteio"
import Card from "../../componentes/Card"
import { SorteioStyled } from "./style"

const Sorteio = () => {
  const participantes = useListaDeParticipantes()
  const [participanteDaVez, setParticipanteDaVez] = useState('')
  const [amigoSecreto, setAmigoSecreto] = useState('')
  const resultado = useResultadoSorteio()

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!
      )
    }
  }
  return (
    <Card>
      <SorteioStyled>
        <h2>Quem vai tirar o papelzinho?</h2>
        <form onSubmit={sortear}>
          <select
            required
            name="participanteAtuais"
            id="participanteAtuais"
            placeholder="Selecione o seu nome"
            value={participanteDaVez}
            onChange={evento => setParticipanteDaVez(evento.target.value)}
          >
            <option>Selecione seu nome</option>
            {participantes.map(participante => <option key={participante}>{participante}</option>)}
          </select>
          <button>Sortear</button>
        </form>
        {amigoSecreto && <p className="resultado" role="alert">{amigoSecreto}</p>}
        <footer className="sorteio">
                <img src="/imagens/aviao.png" className="aviao" alt="Um desenho de um avião de papel" />
        </footer>
      </SorteioStyled>
    </Card>
  )
}

export default Sorteio