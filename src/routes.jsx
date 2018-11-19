import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Details from '../src/components/Movies/MoviesDetails'
import Movies from '../src/components/Movies/Movies'

export default props => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Movies} />
            <Route path="/details" component={Details} />
        </Switch>
    </BrowserRouter>
)