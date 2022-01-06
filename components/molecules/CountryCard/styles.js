import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.elements};
  margin: 30px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;

  img {
    border-radius: 6px 6px 0 0;
    width: 280px;
  }
`
export const InfoContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: end;

  span {
    margin-bottom: 15px;
  }

  div {
    margin-top: 2px;

    span {
      font-weight: 600;
    }
  }
`
