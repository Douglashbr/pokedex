import axios from 'axios'

const getAllPoke = async () => {
  const pokes = await axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json');
  return pokes.data;
}

export default getAllPoke