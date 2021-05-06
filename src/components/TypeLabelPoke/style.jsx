import styled from 'styled-components'
import { lighten } from 'polished'

export const TypeLabel = styled.span`
  display: block;
  color: #ffffff;
  background-color: ${props => props.bgColor && lighten(.1, props.bgColor)};
  padding: 5px 12px;
  border-radius: 20px;
  font-size: .714rem;
  font-weight: 900;
  margin-bottom: 5px;
  width: fit-content;
`