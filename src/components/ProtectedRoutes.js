import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useSelector} from 'react-redux'

import Sidebar from './sidebar/Sidebar'

import RightSidebar from './rightSidebar/RightSidebar'

import Routes from './Routes'

import './ProtectedRoutes.scss'



const ProtectedRoutes = () => {
  
    let {showRightSidebar} = useSelector(state => state.itemSidebar)

    return (
        <div className='protected_routes_wrapper'>
            <Router>
                
                <Sidebar />

                <Routes />

                <RightSidebar />
                
            </Router>
        </div>
    )
}

export default ProtectedRoutes
