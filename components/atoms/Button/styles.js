import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${(props) =>
    props.transparent ? 'transparent' : props.theme.colors.elements};
  border: none;
  color: ${(props) => props.theme.colors.text};
  font-weight: ${(props) => props.theme.font.weights.regular};
  padding: 0 ${(props) => props.paddingX || '0'};
  border-radius: 6px;
  ${(props) => props.shadow && 'box-shadow: 0px 0px 3px 1px #172028;'}

  ${(props) => props.height && `height: ${props.height};`}
  ${(props) => props.margin && `margin: ${props.margin};`}

  svg {
    margin-right: 7px;
    font-size: 10px;
  }
`
