import { Card, Content, LabelContainer, NumLabel, PokeImage, PokeName } from './style'
import TypeLabelPoke from '../TypeLabelPoke'
import bgImage from '../../images/pokeball-bg-tr.png'

const PokeCard = ({ theme, number, name, type, image }) => {
  return (
    <Card bgImage={bgImage} bgColor={theme[type[0].toLowerCase()]}>
      <NumLabel bgColor={theme[type[0].toLowerCase()]}>#{number}</NumLabel>
      <Content>
        <LabelContainer direction='column'>
          <PokeName>{name}</PokeName>
          {type.map((item, index) => {
            return(
              <TypeLabelPoke key={index} bgColor={theme[type[0].toLowerCase()]} name={item} />
            )
          })}
        </LabelContainer>
        <PokeImage src={image} />
      </Content>
    </Card>
  )
}

export default PokeCard