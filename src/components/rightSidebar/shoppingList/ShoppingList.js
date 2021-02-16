import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ShoppingListHero from './ShoppingListHero'

import ItemsContainer from './ItemsContainer'

import {setEditMode} from '../../../reducers/shoppingList'

import './ShoppingList.scss'

const ShoppingList = () => {

    let editMode = useSelector(state => state.shoppingList.editMode)

    const dispatch = useDispatch()

    const setInEditMode = () => {
        dispatch(setEditMode(true))        
    }

    const setInCompleteMode = () => {
        dispatch(setEditMode(false))        
    }

    return (
        <div className='shopping_list_wrapper'>

            <ShoppingListHero />
            
            <div className='shopping_list_name_container' style={{padding:'0px 30px', display:'flex'}}>
                <h2>Shopping List</h2>
                {!editMode && 
                    <div onClick={setInEditMode} className='btn-round bg-cream'>
                        <span className="material-icons">
                            create
                        </span>
                    </div>
                }
                {editMode &&
                    <div onClick={setInCompleteMode} className='btn-round bg-cream'>
                        <span className="material-icons">
                            save
                        </span>
                    </div>
                }
            </div>
                
            <ItemsContainer />
        </div>
    )
}

export default ShoppingList
