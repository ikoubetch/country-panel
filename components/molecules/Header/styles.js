import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  display: flex;
  padding: 20px 50px;
  background: ${(props) => props.theme.colors.elements};
  box-shadow: 0px 1px 5px
    ${(props) => (props.theme.title === 'dark' ? '#172028' : 'gray')};
  justify-content: space-between;
`
