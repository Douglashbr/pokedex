import PokeCard from '../../components/PokeCard'
import theme from '../../utils/styled-theme/theme'
import getAllPoke from '../../utils/functions/apiRequest'
import { useEffect, useState } from 'react'
import { CardContainer } from './style'
import MainContainer from '../../components/MainContainer'
import Title from '../../components/Title'
import { VscLoading } from 'react-icons/vsc'
import { IconContext } from 'react-icons'

const Home = () => {
  const [pokeList, setPokeList] = useState()

  const getPokes = async () => {
    setPokeList(await getAllPoke());
  }
  
  useEffect(() => {
    if (!pokeList) {
      getPokes()
    }
  })

  return (
    <MainContainer bgColor='white'>
      <Title/>
      {!pokeList && (
        <IconContext.Provider value={
          {
            size: '50px', 
            style: {
              display: 'block',
              margin: 'auto',
              height: '75vh'
            }
          }
        }>
          <VscLoading/>
        </IconContext.Provider>
      )}
      <CardContainer>
        {pokeList && pokeList.map(poke => {
          return (
            <PokeCard 
              key={poke.id} 
              theme={theme} 
              poke={poke}
            />
          )
        })}
      </CardContainer>
    </MainContainer>
  )
}

export default Home