import styled from 'styled-components'

export default function Input({ props }) {
  return (
    <InputTarefa
      value={props.InputValue}
      onChange={tarefa => props.setInputValue(tarefa.target.value)}
      placeholder="Tarefa a ser feita"
    />
  )
}
const InputTarefa = styled.input`
  width: 100%;
  font-size: 16px;
  background-color: #2c2f36;
  color: #fafafa;
  padding: 15px 10px;
  border-radius: 5px;

  &::placeholder {
    color: #fafafa;
    font-weight: 400;
  }
`
