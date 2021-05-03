const filterPokeById = (pokeList, id) => {
  return pokeList.filter(poke => poke.id === id)
}

export default filterPokeById