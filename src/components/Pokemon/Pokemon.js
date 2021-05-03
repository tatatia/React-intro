import React, { useState, useEffect } from 'react'
import loaderPokemon from "../../assets/images/loaderPokemon.gif"
import PropTypes from 'prop-types'

const translations = {
    "ua": {
        "pokName": "Покемони",
        "holder": "введіть ім'я",
        "load": "Load покемонів"
    },
    "en": {
        "pokName": "Pocemons",
        "holder": "enter name",
        "load": "Load pokemon"
    }
}

function Pokemon({ lang, defaultPocemons }) {
    const [pocemons, setPocemons] = useState([])
    const [pocemonName, setPocemonName] = useState("")
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
        defaultPocemons.forEach(pokemonName => {
            getPokemonData(pokemonName).then(result => {
                setPocemons((pocemons) => [...pocemons, result])
            })
        })
    }, [])

    function handleChange(event) {
        setPocemonName(event.target.value)
    }

    const loadNewPokemon = () => {
        setIsLoading(true)
        const pocemonsName = pocemons.map((b) => b.pocemonName)
        const result = pocemonsName.some((elem) => elem === pocemonName)
        if (result || !pocemonName) {
            alert("Pokemon exist")
            return
        }
        getPokemonData(pocemonName).then(result => {
            setPocemons([result, ...pocemons])
            setIsLoading(false)
        })
    }
    
    return (
        <div className="work-books">
            {isLoading && <img className="loader" alt="loader" src={loaderPokemon} />}
            <h1>{translations[lang]["pokName"]}</h1>
            <input type="text" placeholder={translations[lang]["holder"]} value={pocemonName} onChange={handleChange} />
            <button onClick={loadNewPokemon}>{translations[lang]["load"]}</button>
            {pocemons.map((pocemon) => {
                return <div key={pocemon.name}>
                    <p>{pocemon.name}</p>
                    <ul>
                        {pocemon.abilities.map((a) => {
                            return <li key={a}>{a}</li>
                        })}
                    </ul>
                    <img alt="pokemon" src={pocemon.image} />
                </div>
            })}
        </div>
    )
}

Pokemon.propTypes = {
    pocemons: PropTypes.array
}
Pokemon.defaultProps = {
    defaultPocemons: ["ditto"]
}
export default Pokemon
