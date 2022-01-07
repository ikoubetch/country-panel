import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 200px;
  position: relative;

  ::after {
    content: '▼';
    font-size: 10px;
    top: 14px;
    right: 20px;
    position: absolute;
    color: ${(props) => props.theme.colors.text};
  }
`

export const Select = styled.select`
  max-width: 100%;
  width: 200px;
  background-color: ${(props) => props.theme.colors.elements};
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme.colors.text};
  padding: 0 20px;
  appearance: none;
  height: 40px;

  option {
    padding: 0 20px;
  }
`
