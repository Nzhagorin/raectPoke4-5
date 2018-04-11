import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';


export default class Abilities extends PureComponent {


    render() {
        const { pokemonInfo }= this.props;
        return (
            <div>
                Abilities:
                <br />
                {pokemonInfo.abilities.map(elem =>{ return (` ${elem},`)})}
            </div>
        )
    }
}