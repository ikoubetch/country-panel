import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${(props) =>
    props.transparent ? 'transparent' : props.theme.colors.element};
  border: none;
  color: ${(props) => props.theme.colors.text};
  font-weight: ${(props) => props.theme.font.weights.regular};
`
