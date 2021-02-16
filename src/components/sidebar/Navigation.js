import React from 'react'
import './Navigation.scss'

import { useDispatch } from 'react-redux'
import { logoutUser } from '../../reducers/user'


import {NavLink} from 'react-router-dom'

const Navigation = () => {
    
    const dispatch = useDispatch()    

    const logout = async () => {
        dispatch(logoutUser())
    }  

    return (
        <div className='navigation_wrapper'>
            
            <NavLink exact to="/" className='navBtn' activeClassName="selected">
                <div className='activeBorder'></div>
                <div className='navBtn_inner'>
                    <span className="material-icons">
                        list
                    </span>
                </div>
            </NavLink>
            <NavLink exact to="/history" className='navBtn' activeClassName="selected">
                <div className='activeBorder'></div>
                <div className='navBtn_inner'>
                    <span className="material-icons" style={{transform: 'scaleX(-1)'}}>
                            refresh
                    </span>
                </div>
            </NavLink>
            <NavLink exact to="/stats" className='navBtn' activeClassName="selected">
                <div className='activeBorder'></div>
                <div className='navBtn_inner'>
                    <span className="material-icons">
                            insert_chart_outlined
                    </span>
                </div>
            </NavLink>

            <div onClick={logout} className='navBtn'>
                <div className='navBtn_inner'>
                    <span className="material-icons" style={{transform: 'scaleX(-1)'}}>
                            logout
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Navigation
