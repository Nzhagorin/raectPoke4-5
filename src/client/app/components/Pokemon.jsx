import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class Pokemon extends PureComponent {
    static propTypes = {
        url: PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        number: PropTypes.number,
        imageUrl: PropTypes.string
    };

    render() {
        const { url, name, number,imageUrl }= this.props;
        return (
            <div  className='active' style={{display: 'block'}} data-number ={number-1}>
                <div>{number}: {name}</div>
                <img src=  {`../../../img/pokemon/${number}.png`} alt=""/>

            </div>
        )
    }
}