import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components

import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';

export default (
    <Switch>
        <Route component={Dashboard} exact path='/' />
        <Route component={Wizard} path='/Wizard/' />
    </Switch>
)
