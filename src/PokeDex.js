import React, { Component } from "react";

import PokeCard from "./PokeCard";

import "./PokeDex.css";

class PokeDex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="PokeDex_winner">Winning Hand</h1>;
    } else {
      title = <h1 className="PokeDex_loser">Losing Hand</h1>;
    }

    return (
      <div className="PokeDex">
        {title}
        <h4>Total Experience: {this.props.exp}</h4>
        <div className="PokeDex_cards">
          {this.props.pokemon.map((p) => (
            <PokeCard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default PokeDex;
