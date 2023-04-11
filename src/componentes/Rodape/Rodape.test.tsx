import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { RecoilRoot } from 'recoil'
import Rodape from '.'
import { useListaDeParticipantes } from '../../state/hook/useListaDeParticipantes'

jest.mock('../../state/hook/useListaDeParticipantes', () => {
  return {
    useListaDeParticipantes: jest.fn()
  }
})

const mockNavigation = jest.fn()
const mockSorteio = jest.fn()

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigation
  }
})

jest.mock('../../state/hook/useSorteador', () => {
  return {
    useSorteador: () => mockSorteio
  }
})



describe('Se não existem participantes suficientes', () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([])
  })
  test('não pode ser iniciado', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    )
    const botao = screen.getByRole('button')

    expect(botao).toBeDisabled()
  })
})

describe('Se existe participantes suficiente', () => {
  const participantes = ['Luciano', 'Maria', 'Wellyson', 'Arthur']
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
  })
  test('pode ser iniciada', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    )
    const botao = screen.getByRole('button')

    expect(botao).not.toBeDisabled()
  })

  test('foi iniciado', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    )
    const botao = screen.getByRole('button')
    fireEvent.click(botao)
    expect(mockNavigation).toHaveBeenCalledTimes(1)
    expect(mockNavigation).toHaveBeenCalledWith('/sorteio')
    expect(mockSorteio).toHaveBeenCalledTimes(1)
  })
})