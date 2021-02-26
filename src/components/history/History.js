import React, { useEffect, useState } from 'react'
import {Switch, Route, useRouteMatch} from 'react-router-dom'

import HistoryList from './HistoryList'
import PastShoppingList from './PastShoppingList'

import './History.scss'

const History = () => {

    let {path} = useRouteMatch()

    return (
        <div className='history_wrapper'>
            
            <Switch>
                <Route exact path={path}>
                    <HistoryList />
                </Route>
                <Route path={`${path}/:id`}>
                    <PastShoppingList />
                </Route>
            </Switch>
            
        </div>
    )
}

export default History
