import styled from 'styled-components'
import { useEffect, useState } from 'react'

// Components
import Input from './Components/Input.js'
import Button from './Components/Button.js'
import Lista from './Components/Lista.js'
// Components end

export default function App() {
  const [InputValue, setInputValue] = useState('')
  const [Tarefas, setTarefas] = useState([])
  const HeightTela = document.documentElement.clientHeight

  useEffect(() => {
    const tarefasLoad = localStorage.getItem('tarefas')
      ? JSON.parse(localStorage.getItem('tarefas'))
      : []
    if (tarefasLoad.length) {
      setTarefas(tarefasLoad)
    }
  }, [])

  useEffect(() => {
    if (Tarefas) {
      localStorage.setItem('tarefas', JSON.stringify(Tarefas))
    }
  }, [Tarefas])

  return (
    <DivPai height={HeightTela}>
      <DivForm>
        <DivInputBtn>
          <Input props={{ InputValue, setInputValue }} />
          <Button props={{ setTarefas, InputValue, setInputValue }} />
        </DivInputBtn>
        <Lista props={{ Tarefas, setTarefas }} />
      </DivForm>
    </DivPai>
  )
}
const DivPai = styled.div`
  background-color: #2c2f36;
  height: ${prop => prop.height}px;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`
const DivForm = styled.div`
  background-color: #fafafa;
  max-height: 500px;
  max-width: 450px;
  padding: 20px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
`
const DivInputBtn = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr;
  grid-column-gap: 5px;
`
