import styled from 'styled-components'

export default function Button({ props }) {
  const handleAdicionar = () => {
    const novaTarefa = { tarefa: props.InputValue }
    props.setTarefas(tarefa => [novaTarefa, ...tarefa])
    props.setInputValue('')
  }

  return (
    <ButtonAdd onClick={handleAdicionar} disabled={!props.InputValue.trim()}>
      Adicionar
    </ButtonAdd>
  )
}

const ButtonAdd = styled.button`
  font-size: 14px;
  cursor: pointer;
  background-color: #2c2f36;
  color: #fafafa;
  padding: 15px 10px;
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: #3d414b;
    transform: translate(-1px, -1px);
    box-shadow: 3px 3px 15px #2c2f36;
  }
  &:active {
    transform: translate(1px, 0px);
  }
  &:disabled {
    background-color: #85888f;
    &:hover {
      background-color: #85888f;
      transform: translate(0, 0);
      box-shadow: none;
    }
  }
`
