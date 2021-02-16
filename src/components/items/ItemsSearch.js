import React from 'react'
import './ItemsSearch.scss'

const ItemsSearch = () => {
    return (
        <div className='items_search_wrapper'>
            <div className='items_search__hero'>
                <p>
                    <span>Shoppingify</span> allows you take your shopping list wherever you go
                </p>
            </div>
            <div className='items_search__input_container'>
                    <div className='items_search_input'>
                        <span className="material-icons">
                            search
                        </span>
                        <input type="search" placeholder='search item'/>
                    </div>
            </div>
        </div>
    )
}

export default ItemsSearch
