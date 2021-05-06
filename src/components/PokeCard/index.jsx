import { Card, CardContainer, Content, LabelContainer, NumLabel, PokeImage, PokeName } from './style'
import TypeLabelPoke from '../TypeLabelPoke'
import bgImage from '../../images/pokeball-bg-tr.png'

const PokeCard = ({ theme }) => {
  return (
    <CardContainer>
      <Card bgImage={bgImage} bgColor={theme['grass']}>
        <NumLabel bgColor={theme['grass']}>#001</NumLabel>
        <Content>
          <LabelContainer direction='column'>
            <PokeName>Bulbasaur</PokeName>
            <TypeLabelPoke bgColor={theme['grass']} name='Grass' />
            <TypeLabelPoke bgColor={theme['grass']} name='Poison' />
          </LabelContainer>
          <PokeImage src='http://www.serebii.net/pokemongo/pokemon/001.png'/>
        </Content>
      </Card>
    </CardContainer>
  )
}

export default PokeCard