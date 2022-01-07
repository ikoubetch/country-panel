import React from 'react'

import { Select, Wrapper } from './styles'

function SelectField({ options, placeholder, ...props }) {
  return (
    <Wrapper>
      <Select {...props}>
        <option value="">{placeholder}</option>
        {options.map((x) => (
          <option key={x.value} value={x.value}>
            {x.label}
          </option>
        ))}
      </Select>
    </Wrapper>
  )
}

export default SelectField
