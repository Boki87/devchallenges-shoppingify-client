import React, {useLayoutEffect, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

import ShoppingList from './shoppingList/ShoppingList'
import NewItemForm from './newItemForm/NewItemForm'
import ItemForm from './itemForm/ItemForm'

import {closeRightSidebar, openRightSidebar} from '../../reducers/itemSidebar'

import './RightSidebar.scss'

const RightSidebar = () => {

    let location = useLocation()

    useEffect(() => {
        if (window.innerWidth < 721) {
            dispatch(closeRightSidebar())
        }
    }, [location])

    const dispatch = useDispatch()

    useLayoutEffect(() => {

        window.addEventListener('resize', () => {            
            if (window.innerWidth < 721) {
                dispatch(closeRightSidebar())
            }

            if (window.innerWidth > 720) {
                dispatch(openRightSidebar())
            }
        })
    }, [])

    let {showNewItemForm, showItemForm, showRightSidebar} = useSelector( state => state.itemSidebar)

    return (
        <div className='right_sidebar_wrapper' style={{display: showRightSidebar ? 'block' : 'none'}}>
            <ShoppingList />
            
            {showNewItemForm && <NewItemForm />}
            {showItemForm && <ItemForm />}
        </div>
    )
}

export default RightSidebar
