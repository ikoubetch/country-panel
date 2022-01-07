import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 70px;

  @media only screen and (max-width: 649px) {
    flex-direction: column;
    height: 150px;
    padding: 20px 48px;
  }
`
