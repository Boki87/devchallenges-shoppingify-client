import React from 'react'

import SourceImg from '../../../assets/source.svg'
import './ShoppingListHero.scss'

const ShoppingListHero = () => {
    return (
        <div className='shopping_list_hero'>
            <div className='img_container'>
                <img src={SourceImg} alt=""/>
            </div>
            <div className='hero_text'>
                <p>
                    Didn't find what you need?
                </p>
                <button className='btn btn-white'>Add item</button>
            </div>
        </div>
    )
}

export default ShoppingListHero
