import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {openRightSidebar, closeRightSidebar} from '../../reducers/itemSidebar'
import './ShoppingCart.scss'

const ShoppingCart = () => {

    const dispatch = useDispatch()
    let items = useSelector(state => state.shoppingList.items)
    let showRightSidebar = useSelector(state => state.itemSidebar.showRightSidebar)


    const toggleRightSidebar = () => {
        if (window.innerWidth > 720) {
            return 
        }

        if (showRightSidebar) {
            dispatch(closeRightSidebar())
        } else {
            dispatch(openRightSidebar())
        }
    }

    return (
        <div className='shopping_cart_wrapper'>
            <div onClick={toggleRightSidebar} className='shopping_cart_btn'>

                <div className='shopping_cart__badge'>
                    {items.length}
                </div>

                <span className="material-icons">
                    shopping_cart
                </span>
            </div>
        </div>
    )
}

export default ShoppingCart
