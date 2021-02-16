import React from 'react'
import {useSelector} from 'react-redux'
import './ShoppingCart.scss'

const ShoppingCart = () => {

    let items = useSelector(state => state.shoppingList.items)

    return (
        <div className='shopping_cart_wrapper'>
            <div className='shopping_cart_btn'>

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
