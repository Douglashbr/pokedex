import PokeCard from '../../components/PokeCard'
import theme from '../../utils/styled-theme/theme'
import getAllPoke from '../../utils/functions/apiRequest'
import { useEffect, useState } from 'react'
import { CardContainer } from './style'
import MainContainer from '../../components/MainContainer'
import Title from '../../components/Title'

const Home = () => {
  const [pokeList, setPokeList] = useState();

  const getPokes = async () => {
    setPokeList(await getAllPoke());
  }

  useEffect(() => {
    if (!pokeList) {
      getPokes()
    }
  })

  return (
    <MainContainer>
      <Title/>
      <CardContainer>
        {pokeList && pokeList.map(poke => {
          return (
            <PokeCard key={poke.id} theme={theme} number={poke.num} name={poke.name} type={poke.type} image={poke.img} />
          )
        })}
      </CardContainer>
    </MainContainer>
  )
}

export default Home