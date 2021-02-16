import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import './ItemsContainer.scss'
import ShoppingListItem from './ShoppingListItem'

const ItemsContainer = () => {
    const items = useSelector(state => state.shoppingList.items)
    const [categories, setCategories] = useState([])

    useEffect(() => {

        setCategories([...new Set(items.map(item => item.category))])

    }, [items])  




    return (
        <div className='shopping_list_items'>
            
            {categories.map((cat, i) => {
                return (
                    <div key={i}>
                        <div className='sl_block_title'>{cat}</div>
                        <div className='shopping_list_items_block' key={`${cat}`}>
                        {
                            items.map((item, i) => {
                                if (item.category == cat) {
                                    return <ShoppingListItem
                                                item={item}
                                               
                                                key={`${item.name}_${i}`}
                                            />
                                }
                            })
                        }
                        </div>
                    </div>
                )
                
            })}
        </div>
    )
}

export default ItemsContainer
