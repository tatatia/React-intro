import React, {useState, useEffect} from 'react'
import loaderPokemon from "../../assets/images/loaderPokemon.gif"
import PropTypes from 'prop-types'
import {useTranslation} from "react-i18next"

function Pokemon({lang, defaultPokemons}) {
    const {t} = useTranslation()
    const [pokemons, setPokemons] = useState([])
    const [pokemonName, setPokemonName] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const getPokemonData = async (pokemonName) => {
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        const data = await result.json()
        console.log(data)
        return {
            name: pokemonName,
            height: data.height,
            abilities: (data.abilities) ? data.abilities.map((elem) => elem.ability.name) : [],
            weight: data.weight,
            image: (data.sprites) ? data.sprites.front_default : null
        }
    }

    useEffect(() => {
        defaultPokemons.forEach(pokemonName => {
            getPokemonData(pokemonName).then(result => {
                setPokemons((pokemons) => [...pokemons, result])
            })
        })
    }, [])

    function handleChange(event) {
        setPokemonName(event.target.value)
    }

    const loadNewPokemon = () => {
        setIsLoading(true)
        const pokemonNames = pokemons.map((b) => b.pokemonName)
        const result = pokemonNames.some((elem) => elem === pokemonName)
        if (result || !pokemonName) {
            alert("Pokemon exist")
            return
        }
        getPokemonData(pokemonName).then(result => {
            setPokemons([result, ...pokemons])
            setIsLoading(false)
        })
    }

    return (
        <div className="work-books">
            {isLoading && <img className="loader" alt="loader" src={loaderPokemon}/>}
            <h1>{t("pokemons.pokName")}</h1>
            <input type="text" placeholder={t("pokemons.holder")} value={pokemonName} onChange={handleChange}/>
            <button onClick={loadNewPokemon}>{t("pokemons.load")}</button>
            {pokemons.map((pokemon) => {
                return <div key={pokemon.name}>
                    <p>{pokemon.name}</p>
                    <ul>
                        {pokemon.abilities.map((a) => {
                            return <li key={a}>{a}</li>
                        })}
                    </ul>
                    <img alt="pokemon" src={pokemon.image}/>
                </div>
            })}
        </div>
    )
}

Pokemon.propTypes = {
    defaultPokemons: PropTypes.array
}
Pokemon.defaultProps = {
    defaultPokemons: ["ditto"]
}
export default Pokemon
