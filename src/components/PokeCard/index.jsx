import { Card, CardContainer, Content, LabelContainer, NumLabel, PokeImage, PokeName } from './style'
import TypeLabelPoke from '../TypeLabelPoke'
import bgImage from '../../images/pokeball-bg-tr.png'

const PokeCard = () => {
  return (
    <CardContainer>
      <Card bgImage={bgImage} bgColor='#48d0b0'>
        <NumLabel bgColor='#48d0b0'>#001</NumLabel>
        <Content>
          <LabelContainer direction='column'>
            <PokeName>Bulbasaur</PokeName>
            <TypeLabelPoke bgColor='#48d0b0' name='Grass' />
            <TypeLabelPoke bgColor='#48d0b0' name='Poison' />
          </LabelContainer>
          <PokeImage src='http://www.serebii.net/pokemongo/pokemon/001.png'/>
        </Content>
      </Card>
    </CardContainer>
  )
}

export default PokeCard