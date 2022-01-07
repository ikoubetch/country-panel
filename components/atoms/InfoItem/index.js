import React from 'react'

import { LabelContainer } from './styles'

function InfoItem({ label, value }) {
  return (
    <div>
      <LabelContainer>{label}</LabelContainer>
      {value}
    </div>
  )
}

export default InfoItem
