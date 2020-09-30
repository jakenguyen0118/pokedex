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

    // useEffect mounting of the pokemon
    useEffect(() => {
        getPokemon()
    }, [])

    // mapping pokemon array
    let showPokedex = ''
    if (pokemonList[0]) {
        showPokedex = pokemonList.map(pokemon => {
            return (
                <div className='pokemon'>{pokemon.name}</div>
            )
        })
    }

    // const handleClick = event => {
    //     console.log('handle click', event)
    //     const clickedPokemon = pokemonList.filter((pokemon) => {
    //         return (
    //             pokemon.name === event.target.value
    //         )

    //         setPokemonList(clickedPokemon[0].url)
    //     })
    // }

    return (
        <div>
            {showPokedex}
        </div>
    )
}

export default Pokedex