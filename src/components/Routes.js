import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Items from './items/Items'
import History from './history/History'
import Stats from './stats/Stats'

const Routes = () => {
    return (
            <div className='routes_container'>
            <Switch>
                <Route exact path='/'>
                    <Items />
                </Route>            
                <Route path='/history'>
                    <History />
                </Route>            
                <Route exact path='/stats'>
                    <Stats />
                </Route>            
            </Switch>
            </div>
    )
}

export default Routes
