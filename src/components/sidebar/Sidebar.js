import React from 'react'
import './Sidebar.scss'

import ShoppingCart from './ShoppingCart'
import Navigation from './Navigation'

import Logo from '../../assets/logo.svg'

const Sidebar = () => {
    return (
        <div className='sidebar_wrapper'>
            <div className='sidebar_img_container'>
                <img src={Logo} alt=""/>
            </div>

            <Navigation />
            
            <ShoppingCart />
        </div>
    )
}

export default Sidebar
