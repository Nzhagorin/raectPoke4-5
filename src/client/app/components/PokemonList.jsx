import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Pokemon from './Pokemon';

export default class PokemonList extends PureComponent {
    static propTypes = {
        pokemons: PropTypes.arrayOf({
            url: PropTypes.string.isRequired,
            name:PropTypes.string.isRequired,
            number: PropTypes.number,
            imageUrl: PropTypes.string
        })
    };

    static defaultProps = {
        pokemons: []
    };

    render() {
        const { pokemons }= this.props;
        return (
        <div>
            {pokemons.map(pokemon => <Pokemon {... pokemon} />)}
        </div>
        )
    }
}