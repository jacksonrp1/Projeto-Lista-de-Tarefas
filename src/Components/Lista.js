import styled from 'styled-components'
import { FaTrashAlt } from 'react-icons/fa'

export default function Lista({ props }) {
  const handleRemover = index => {
    let TarefasFiltradas = props.Tarefas.filter((taref, idx) => {
      if (index === idx) {
        return null
      }
      return taref
    })

    props.setTarefas(TarefasFiltradas)
  }
  return (
    <ListUl>
      {props.Tarefas.map((tarefa, index) => (
        <ListLi key={index}>
          {tarefa.tarefa}
          <FaTrashAlt onClick={() => handleRemover(index)} />
        </ListLi>
      ))}
    </ListUl>
  )
}

const ListUl = styled.ul`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
`
const ListLi = styled.li`
  list-style: decimal;
  font-weight: 500;
  background-color: #d8d8d8;
  color: #2c2f36;
  display: grid;
  grid-template-columns: calc(100% - 35px) 35px;
  grid-template-rows: auto;
  align-items: center;
  justify-content: space-between;
  grid-column-gap: 10px;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  svg {
    cursor: pointer;
    height: 25px;
    width: 25px;
    transition: all 0.5s ease-in-out;
    &:hover {
      transform: translateY(-2px);
    }
  }
`
