import React from 'react';

class PokemonCard extends React.Component {
  constructor(props) {
    super(props);

    const { types } = this.props.data;
    const { type: { name: type } } = types[0];
    let typeClass;
    switch(type) {
      case 'electric':
        typeClass='electric'; break;
      case 'fire':
        typeClass='fire'; break;
      case 'grass':
        typeClass='grass'; break;
      case 'water':
        typeClass='water'; break;
      case 'rock': 
        typeClass='rock'; break;
      case 'flying':
        typeClass='flying'; break;
      case 'bug':
        typeClass='bug'; break;
      case 'normal':
        typeClass='normal'; break;
      default:
        typeClass='others';
    }
    this.state = { typeClass };
  }

  render() {
    const { id, name, abilities, stats, sprites, types } = this.props.data;
    const { type: { name: type } } = types[0];
    const { other: { 'official-artwork':  { front_default } } } = sprites;
    const { typeClass } = this.state;
    const upperString = (string) => (string[0].toUpperCase() + string.substr(1));

    return (
      <div className="pokemon-card">
        <div className="pokemon-image"> 
          <img src={ front_default } />    
        </div>
        <div className="pokemon-id">Nº { id }</div>
        <div className="pokemon-name">{ upperString(name) }</div>
        <div className="pokemon-type">{ upperString(upperString(type)) }</div>
        <ul className="pokemon-abilities">
          { abilities.map(({ ability }, index) => <li key={ index }>{ upperString(ability.name) }</li>) }
        </ul>
        
        <div className={ `${typeClass} pokemon-stats clearfix` }>
          <div className="one-third">
            <div className="stat">100</div>
            <div className="stat-value">HP</div>
          </div>
      
          <div className="one-third">
            <div className="stat">40</div>
            <div className="stat-value">Attack</div>
          </div>
      
          <div className="one-third no-border">
            <div className="stat">50</div>
            <div className="stat-value">Defense</div>
          </div>

        </div>
      </div>
    )
  }
}

export default PokemonCard;