import React,{Component} from 'react';
import ReactDom from 'react-dom';
import Menu from "./menu";



export default class Header extends Component{
    render(){
        return <header className="header"><Menu/></header>;
    }
}