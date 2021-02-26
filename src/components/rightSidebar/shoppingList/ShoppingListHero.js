import React from 'react'

import {useDispatch} from 'react-redux'
import {openNewItemForm} from '../../../reducers/itemSidebar'

import SourceImg from '../../../assets/source.svg'
import './ShoppingListHero.scss'

const ShoppingListHero = () => {

    const dispatch = useDispatch()

    return (
        <div className='shopping_list_hero'>
            <div className='img_container'>
                <img src={SourceImg} alt=""/>
            </div>
            <div className='hero_text'>
                <p>
                    Didn't find what you need?
                </p>
                <button onClick={() => dispatch(openNewItemForm())} className='btn btn-white'>Add item</button>
            </div>
        </div>
    )
}

export default ShoppingListHero
