import React from 'react'

import ShoppingList from './shoppingList/ShoppingList'
import NewItemForm from './newItemForm/NewItemForm'


import './RightSidebar.scss'

const RightSidebar = () => {
    return (
        <div className='right_sidebar_wrapper'>
            <ShoppingList />
            {/* TODO: add logic to toggle <NewItemForm /> */}
            {/* <NewItemForm /> */}
        </div>
    )
}

export default RightSidebar
