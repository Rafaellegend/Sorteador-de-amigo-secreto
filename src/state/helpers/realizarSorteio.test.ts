import { realizarSorteio } from "./realizarSorteio"

describe('dado um sorteio de amigo secreto', () =>{
  test('cada participante não sorteio o próprio nome', () => {
    const participantes = [
      'Maria',
      'Luciano',
      'Arthur',
      'Wellyson',
      'Bruno',
      'Rafael'
    ]

    const sorteio = realizarSorteio(participantes)
    participantes.forEach(participante => {
      const amigoSecreto = sorteio.get(participante)
      expect(amigoSecreto).not.toEqual(participante)
    })
  })
})