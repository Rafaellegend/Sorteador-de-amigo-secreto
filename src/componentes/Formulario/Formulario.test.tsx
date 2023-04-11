import { act, fireEvent, getByRole, render, screen } from "@testing-library/react";
import React from "react";
import Formulario from ".";
import { RecoilRoot } from "recoil";

//Jest

describe('O comportamento do Formulario.tsx', () => {
    test('Quando o input está vazio, novos participantes não podem ser adicionados', () => {
        render(<RecoilRoot><Formulario /></RecoilRoot>)
        // encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos Participantes')
        // encontrar o botão
        const botao = screen.getByRole('button')
        // garantr que o input esteja no documento
        expect(input).toBeInTheDocument()
        // garantir que o botão esteja desabilitado
        expect(botao).toBeDisabled()
    })
    
    test('Adicionar um participante caso exista um nome preenchido', () => {
        render(<RecoilRoot><Formulario /></RecoilRoot>)
        // encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos Participantes')
        // encontrar o botão
        const botao = screen.getByRole('button')
    
        //inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'João Carvalho'
            }
        })
    
        //clicar no botão de submeter
        fireEvent.click(botao)
    
        //garantir que o input estejá com o foco ativo
        expect(input).toHaveFocus()
    
        // garantir que o input não tenha um valor
        expect(input).toHaveValue("")
    
    })
    
    test('Nomes duplicados não pode ser adicionado na lista', () => {
        render(<RecoilRoot><Formulario /></RecoilRoot>)
        // encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos Participantes')
        // encontrar o botão
        const botao = screen.getByRole('button')
        //inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'João Carvalho'
            }
        })
    
        //clicar no botão de submeter
        fireEvent.click(botao)
         //inserir um valor no input
         fireEvent.change(input, {
            target: {
                value: 'João Carvalho'
            }
        })
    
        //clicar no botão de submeter
        fireEvent.click(botao)
    
        const mensagemDeErro  = screen.getByRole('alert')
    
        expect(mensagemDeErro.textContent).toBe('Nomes duplicados não são permitidos!')
    
    })
    
    test('A mensagem de erro deve sumir após os timers', () => {
        jest.useFakeTimers()
        render(<RecoilRoot><Formulario /></RecoilRoot>)
        // encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos Participantes')
        // encontrar o botão
        const botao = screen.getByRole('button')
        //inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'João Carvalho'
            }
        })
    
        //clicar no botão de submeter
        fireEvent.click(botao)
         //inserir um valor no input
         fireEvent.change(input, {
            target: {
                value: 'João Carvalho'
            }
        })
    
        //clicar no botão de submeter
        fireEvent.click(botao)
    
        let mensagemDeErro  = screen.queryByRole('alert')
    
        expect(mensagemDeErro).toBeInTheDocument()
    
        // esperar N segundos
        act(()=> {
            jest.runAllTimers()
        })
        
    
        mensagemDeErro = screen.queryByRole('alert')
        expect(mensagemDeErro).toBeNull()
    
    })
})

