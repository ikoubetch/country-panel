import styled from 'styled-components'

export const Input = styled.input`
  background-color: ${(props) => props.theme.colors.elements};
  border: none;
  border-radius: 6px;
  height: 40px;
  width: 100%;
  max-width: 300px;
  color: ${(props) => props.theme.colors.text};
  padding: 0 20px;
`
