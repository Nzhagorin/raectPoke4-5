import React, { PureComponent } from 'react';

import PokemonList from '../components/PokemonList';
import Abilities from '../components/Abilities';

export default class PokemonListContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            pokemons: [],
            loading: false,
            pokemonInfo: {abilities:[]}
        }
    }
    /* Загрузка доп информации о способностях выбранного покемона
    *   pokemonInfo: {abilities:[]}
    *   activePokemon - номер выбранного покемона*/
    loadFullInfo = (activePokemon) => {
        const { loading, pokemons,pokemonInfo} = this.state;
        fetch ( pokemons[activePokemon].url)
            .then(res =>res.json ())
            .then(pokemon =>{this.setState({
                pokemonInfo: {abilities: pokemon.abilities.map(item => item.ability.name)}
                })
            });
    }

    /* Обработчик нажатий на покемона */
    pokemonOnClick = (event) => {
        const {pokemons} = this.state;
        let activePokemon = pokemons[event.target.parentNode.getAttribute('data-number')].number;
        this.loadFullInfo(activePokemon);
    }


    componentWillMount(){
        this.setState({
            loading: true
        })

        fetch('https://pokeapi.co/api/v2/pokemon/?limit=500')
            .then(res => res.json())
            .then(pokemons => {let number = 0;
                this.setState({
                        loading: false,
                        pokemons: pokemons.results.map(item => { item.number = ++number; return item })
                        })

                })
    }

    render() {
        const { loading, pokemons, pokemonInfo } = this.state;
        return (
            <div id='target' onClick={ this.pokemonOnClick } style = {{ display: 'flex' }}>

                { loading ? 'Идет загрузка' : <PokemonList pokemons={ pokemons }  /> }
                { pokemonInfo.abilities ===[] ? '' : <Abilities pokemonInfo={ pokemonInfo } /> }
            </div>
        );
    }



}