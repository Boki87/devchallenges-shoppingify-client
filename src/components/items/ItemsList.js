import React, {useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import { useDispatch } from 'react-redux'

import { addItem } from '../../reducers/shoppingList'

import Item from './Item'

import './ItemsList.scss'

const ItemsList = ({ items }) => {
    
    const dispatch = useDispatch()

    const [categories, setCategories] = useState([])

    useEffect(() => {

        setCategories([...new Set(items.map(item => item.category))])

    }, [items])    


    const addItemToShoppingList = (item) => {
        dispatch(addItem({ ...item, done: false, amount: 1 }))
    }

    return (
        <div className='items_list_wrapper'>            
            {categories.map(cat => {
                return (
                    <div key={ uuidv4()}>
                        <h3>{cat}</h3>
                        <div className='items_block' key={uuidv4()}>
                        {
                            items.map(item => {
                                if (item.category == cat) {
                                    return <Item addItem={() => addItemToShoppingList(item) } name={item.name} key={uuidv4()}/>
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

export default ItemsList
