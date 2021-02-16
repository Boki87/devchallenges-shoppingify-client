import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {increaseItem, decreaseItem, deleteItem, setChecked} from '../../../reducers/shoppingList'
import AmountBtn from './AmountBtn'

import './ShoppingListItem.scss'

const ShoppingListItem = ({ item }) => {    

    let editMode = useSelector(state => state.shoppingList.editMode)

    const dispatch = useDispatch()

    const deleteHandler = () => {
        dispatch(deleteItem(item))
    }

    const addHandler = () => {
        dispatch(increaseItem(item))
    }

    const decreaseHandler = () => {
        dispatch(decreaseItem(item))
    }


    const checkHandler = () => {
        if (!editMode) {            
            dispatch(setChecked(item))
        }
    }

    return (
        <div className='sl_item'>
            {!editMode &&                 
                <label className='checkbox'>
                <input type="checkbox" checked={item.done} onChange={checkHandler}/>
                               
                    <span id="check-done" className="material-icons">
                        done
                    </span>
                    
                </label>
            }
            <h4 onClick={checkHandler} style={{textDecoration:`${item.done ? 'line-through': 'none'}`}}>{item.name}</h4>
            <AmountBtn
                amount={item.amount}
                onDelete={deleteHandler}
                onAdd={addHandler}
                onDecrease={decreaseHandler}
            />
        </div>
    )
}

export default ShoppingListItem
