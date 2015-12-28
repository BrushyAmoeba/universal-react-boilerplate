// third party imports
import React from 'react'
import {Route, IndexRoute} from 'react-router'
// local imports
import Home from './views/Home'
import Root from './views/Root'


export default (
    <Route path='/' component={Root}>
        <IndexRoute component={Home} />
    </Route>
)
