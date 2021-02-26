import React from 'react'

import {useSelector} from 'react-redux'

import ShoppingList from './shoppingList/ShoppingList'
import NewItemForm from './newItemForm/NewItemForm'
import ItemForm from './itemForm/ItemForm'


import './RightSidebar.scss'

const RightSidebar = () => {

    let {showNewItemForm, showItemForm} = useSelector( state => state.itemSidebar)

    return (
        <div className='right_sidebar_wrapper'>
            <ShoppingList />
            
            {showNewItemForm && <NewItemForm />}
            {showItemForm && <ItemForm />}
        </div>
    )
}

export default RightSidebar
