import React from 'react'
import loaderPokemon from "./images/loaderPokemon.gif"
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

class Pokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pocemons: [],
            pocemonName: "",
            isLoading: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    getPokemonData = async (pokemonName) => {
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

    componentDidMount = () => {
        this.props.pocemons.forEach(pokemonName => {
            this.getPokemonData(pokemonName).then(result => {
                this.setState(({ pocemons }) => ({ pocemons: [...pocemons, result] }))
            })
        })
    }

    loadNewPokemon = () => {
        this.setState({ isLoading: true })
        const { pocemonName, pocemons } = this.state;
        const pocemonsName = pocemons.map((b) => b.pocemonName)
        const result = pocemonsName.some((elem) => elem === pocemonName)
        if (result || !pocemonName) {
            alert("Pokemon exist")
            return
        }
        this.getPokemonData(pocemonName).then(result => {
            this.setState({
                pocemons: [result, ...pocemons],
                isLoading: false
            })
        })
    }

    handleChange(event) {
        this.setState({ pocemonName: event.target.value })
    }

    render() {
        const { pocemons, pocemonName, isLoading } = this.state
        const { lang } = this.props
        return (
            <div className="work-books">
                {isLoading && <img className="loader" alt="loader" src={loaderPokemon} />}
                <h1>{translations[lang]["pokName"]}</h1>
                <input type="text" placeholder={translations[lang]["holder"]} value={pocemonName} onChange={this.handleChange} />
                <button onClick={this.loadNewPokemon}>{translations[lang]["load"]}</button>
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
}
Pokemon.propTypes = {
    pocemons: PropTypes.array
}
Pokemon.defaultProps = {
    pocemons: ["ditto"]
}
export default Pokemon
