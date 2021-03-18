import React from 'react'

class Pokemon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pocemons: [],
            pocemonName: ""
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
                this.setState({ pocemons: [...this.state.pocemons, result] })
            })
        })
    }

    loadNewPokemon = () => {
        const name = this.state.pocemonName
        const pocemonsName = this.state.pocemons.map((b) => b.name)
        const result = pocemonsName.some((elem) => elem === name)
        if (result || !name) {
            alert("Pokemon exist")
            return
        }
        console.log("res=", result)
        console.log("pocemonsName =", pocemonsName)
        console.log("loadNewPocemon", name)
        this.getPokemonData(name).then(result => {
            this.setState({ pocemons: [result, ...this.state.pocemons] })
        })
    }

    handleChange(event) {
        console.log(event)
        this.setState({ pocemonName: event.target.value })
    }

    render() {
        const { pocemons, pocemonName } = this.state;
        console.log(pocemonName)
        return (
            <div className="work-books">
                <h1>Pocemons</h1>
                <input type="text" placeholder="enter name" value={this.state.pocemonName} onChange={this.handleChange} />
                <button onClick={this.loadNewPokemon}>Load pokemon</button>
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
export default Pokemon
