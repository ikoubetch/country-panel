import React from 'react'
import Button from '../../atoms/Button'
import Title from '../../atoms/Title'

import { FaMoon, FaRegMoon } from 'react-icons/fa'

import { Container, Icon } from './styles'

function Header({ theme, onClickSwitchMode }) {
  const options = {
    light: {
      label: 'Dark Mode',
      icon: <FaMoon />
    },
    dark: {
      label: 'Light Mode',
      icon: <FaRegMoon />
    }
  }
  return (
    <Container>
      <Title>Where in the world?</Title>
      <Button transparent onClick={onClickSwitchMode}>
        <Icon>{options[theme].icon}</Icon>
        {options[theme].label}
      </Button>
    </Container>
  )
}

export default Header
