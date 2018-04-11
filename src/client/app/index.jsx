import React,{Component} from 'react';
import ReactDom from 'react-dom';

import Header from 'components/header';
import Footer from 'components/footer';
import PokemonListContainer from './containers/PokemonContainer';


class App extends Component{
    render(){
        return <div>
            <Header />
            <div>
                <PokemonListContainer/>

            </div>

            <Footer />
        </div>;
    }
}

ReactDom.render(<App />, document.getElementById('app'));