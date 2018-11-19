import React from 'react';
import Movies from './Movies/Movies'
import Header from './Header/index'

import Routes from '../routes'

export default class App extends React.Component {
    render(){
        return(
            <div>
            <Header />
            <Routes />
            </div>
        )
       
    }
    
}