import styled from 'styled-components'
import { darken } from 'polished'

export const Card = styled.div`
  background: url(${props => props.bgImage && props.bgImage}) ${props => props.bgColor && props.bgColor};
  background-position: calc(100% + 20px) calc(100% + 20px);
  background-size: 100px;
  background-repeat: no-repeat;
  max-width: 48%;
  width: 100%;
  background-color: ;
  border-radius: 15px;
  min-height: 100px;
  padding: 10px 12px;
  margin-bottom: 15px;
`

export const NumLabel = styled.span`
  font-weight: 900;
  color: ${props => props.bgColor && darken(.1, props.bgColor)};
  display: block;
  margin-left: auto;
  width: fit-content;
`

export const PokeName = styled.span`
  font-size: 1.142rem;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 10px;
  display: block;
`

export const Content = styled.div`
  display: flex;
`

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction && props.direction}
`

export const PokeImage = styled.img`
  max-width: 90px;
  width: 100%;
`
