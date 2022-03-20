import React from 'react'
import './App.css';
import PokemonCard from './components/PokemonCard'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
    }
  }
  
  async componentDidMount() {
    const pokemons = [];
    for (let id = 1; id <= 50; id += 1) {
      const pokemon = await this.getPokemon(this.random(500));
      pokemons.push(pokemon);
    }
    console.log(pokemons)
    this.setState({
      pokemons,
    })
  }
  
  random = (maxLength) => Math.floor(Math.random() * maxLength) + 1;

  getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  render() {
    const { pokemons } = this.state;
    return (
      <div className="wrapper">
        { pokemons.map((pokemon) => <PokemonCard key={ pokemon.id } data={ pokemon } />) }
      </div>
    );
  }
}

export default App;
