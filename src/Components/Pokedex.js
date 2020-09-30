import React, {useState, useEffect} from 'react'
import Pokemon from './Pokemon'

const Pokedex = () => {
    
    // setting state for the pokedex
    const [pokemonList, setPokemonList] = useState([])

    // changing the image of the pokemon that is clicked on. cyndaquil(favorite) will be default
    const [pokemon, setPokemon] = useState('https://pokeapi.co/api/v2/pokemon/155/')
    
    // pulling data from the pokemon api
    // setting the fetch as a function in case we need to use it more than once...
    const pokemonApi = 'https://pokeapi.co/api/v2/pokemon?limit=251'

    const getPokemon = () => {
        fetch(pokemonApi)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                // using data.results instead because the pokemon objects are in the results object
                setPokemonList(data.results)
                console.log('this is data results', data.results)
            })
    }

    useEffect(() => {
        getPokemon()
    }, [])

    // mapping pokemon array
    let showPokedex = ''
    if (pokemonList[0]) {
        showPokedex = pokemonList.map(pokemon => {
            return (
                <div className='pokemon'>
                    <p></p>
                    <p>{pokemon.name}</p>
                </div>
            )
        })
    }

    return (
        <div>
            {showPokedex}
        </div>
    )
}

export default Pokedex