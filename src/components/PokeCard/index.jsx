import { Card, Content, LabelContainer, NumLabel, PokeImage, PokeName } from './style'
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import TypeLabelPoke from '../TypeLabelPoke'
import bgImage from '../../images/pokeball-bg-tr.png'

const PokeCard = ({ theme, poke }) => {
  const history = useHistory()
  const [pokeDetails, setPokeDetails] = useState()

  useEffect(() => {
    if(pokeDetails) {
      pokeClick()
    }
  })

  const pokeClick = () => {
    history.push('/details', pokeDetails)
  }
  return (
    <Card onClick={() => setPokeDetails({ poke, theme })} bgImage={bgImage} bgColor={theme[poke.type[0].toLowerCase()]}>
      <NumLabel bgColor={theme[poke.type[0].toLowerCase()]}>#{poke.num}</NumLabel>
      <Content>
        <LabelContainer direction='column'>
          <PokeName>{poke.name}</PokeName>
          {poke.type.map((item, index) => {
            return(
              <TypeLabelPoke key={index} bgColor={theme[poke.type[0].toLowerCase()]} name={item} />
            )
          })}
        </LabelContainer>
        <PokeImage src={poke.img} />
      </Content>
    </Card>
  )
}

export default PokeCard