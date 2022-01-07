import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 649px) {
    flex-direction: column;
    height: 250px;
  }
`
