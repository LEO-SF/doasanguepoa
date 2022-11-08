import React from 'react'

import { Router, Switch, Route } from 'react-router'

import Login from '../pages/login'
import Register from '../pages/register'
import Home from '../pages/home'
import NotFound from './NotFound'
import PrivateRoute from './PrivateRoute'
import Postagem from '../pages/feed/feed.js'

import {history} from '../history'

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route component={Login} exact path="/login"/>
            <Route component={Register} exact path="/cadastro/usuario"/>
            <PrivateRoute component={Home} exact path="/"/>
            <PrivateRoute component={NotFound}/>
            <Route component={Postagem} exact path="/postagens"/>
        </Switch>
    </Router>
)

export default Routes
