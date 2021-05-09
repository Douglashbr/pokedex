import { Link, useLocation } from 'react-router-dom'
import MainContainer from '../../components/MainContainer'
import TypeLabelPoke from '../../components/TypeLabelPoke'
import { 
  DetailsContent, 
  DetailsHeader, 
  DetailsLabel, 
  DetailsNumb, 
  DetailsTitle, 
  DetailsTitleContainer, 
  PokeImg, 
  DetailsContentTitle, 
  DetailsListLabel, 
  BackIcon 
} from './style'
import bgImage from '../../images/pokeball-bg-tr.png'
import { IconContext } from 'react-icons'
import { BsArrowLeft } from 'react-icons/bs'

const Details = () => {
  const { poke, theme } = useLocation().state
  return (
    <MainContainer>
      <DetailsHeader bgImage={bgImage} bgColor={theme[poke.type[0].toLowerCase()]}>
        <Link to='/'>
          <IconContext.Provider value={{color: 'white', size: '30px'}} >
            <BackIcon>
              <BsArrowLeft/>
            </BackIcon>
          </IconContext.Provider>
        </Link>
        <DetailsTitleContainer>
          <DetailsTitle>{poke.name}</DetailsTitle>
          <DetailsNumb>#{poke.num}</DetailsNumb>
        </DetailsTitleContainer>
        <DetailsLabel>
          {poke.type.map((item, index) => <TypeLabelPoke key={index} bgColor={theme[poke.type[0].toLowerCase()]} name={item} />)}
        </DetailsLabel>
        <PokeImg src={poke.img} />
      </DetailsHeader>
      <DetailsContent>
        <DetailsContentTitle>Sobre</DetailsContentTitle>
        <ul>
          <li>
            <DetailsListLabel>Peso</DetailsListLabel>
            {poke.weight}
          </li>
          <li>
            <DetailsListLabel>Altura</DetailsListLabel>
            {poke.height}
          </li>
          <li>
            <DetailsListLabel>Fraquezas</DetailsListLabel>
            {poke.weaknesses.join(', ')}
          </li>
        </ul>
      </DetailsContent>
    </MainContainer>
  )
}

export default Details