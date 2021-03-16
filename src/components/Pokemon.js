import React from 'react'

class Pokemon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pocemons: []
        }
    }

    getPokemonData = async (pokemonName) => {
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        const data = await result.json()
        console.log(data)
        return {
            name: pokemonName,
            height: data.height,
            abilities: data.abilities.map((elem) => elem.ability.name),
            weight: data.weight,
            image: data.sprites.front_default
        }


    }

    componentDidMount = () => {
        this.props.pocemons.forEach(pokemonName => {
            this.getPokemonData(pokemonName).then(result => {
                this.setState({ pocemons: [...this.state.pocemons, result] })
            })
        })
        // const pokemonName = this.props.pocemons[0]
    }

    render() {
        const { pocemons } = this.state;
        console.log(pocemons)
        return (
            <div className="work-books">
                <h1>Pocemons</h1>
                {pocemons.map((pocemon) => {
                    return <div key={pocemon.name}>
                        <p>{pocemon.name}</p>
                        <ul>
                            {pocemon.abilities.map((a) => {
                                return <li key={a}>{a}</li>
                            })}
                        </ul>
                        <img alt="pokemon" src={pocemon.image}/>
                    </div>
                })}
            </div>
        )
    }

}
export default Pokemon
