import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Route1 from './Route1'
import Route2 from './Route2'
import Route3 from './Route3'

export default (
    <Switch >

        <Route1 exact path={'/'} component={Route1} />
        <Route2 path={'/route2'} component={Route1} />
        <Route3 path={'/route3'} component={Route1} />
    
    </Switch >
)