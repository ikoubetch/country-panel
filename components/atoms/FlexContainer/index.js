import styled from 'styled-components'

export default styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: ${(props) => props.align || 'center'};
  ${(props) => props.paddingX && `padding: 0 ${props.paddingX};`}
  ${(props) => props.paddingY && `padding-top: ${props.paddingY};`}
  ${(props) => props.height && `height: ${props.height};`}
  ${(props) => props.maxWidth && `max-width: ${props.maxWidth};`}
  ${(props) => props.direction && `flex-direction: ${props.direction};`}

  @media only screen and (max-width: 649px) {
    justify-content: center;
  }
`
