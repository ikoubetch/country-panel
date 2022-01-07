import styled from 'styled-components'

export const Container = styled.span`
  font-size: ${(props) => props.fontSize || '16px'};
  font-weight: ${(props) => props.theme.font.weights.bold};
`
