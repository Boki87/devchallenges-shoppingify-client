import React from 'react'

import {useSelector, useDispatch} from 'react-redux'

import NoItemsImage from '../../../assets/shopping.svg'

import {setList} from '../../../reducers/shoppingList'

import './SaveFooter.scss'

const SaveFooter = () => {

    const {items, name} = useSelector(state => state.shoppingList)

    const dispatch = useDispatch()

    const setName = (e) => {        
        dispatch(setList({name: e.target.value}))
    }

    return (
        <div className='save_footer_wrapper'>
            
            {
                items.length == 0 && <img src={NoItemsImage} alt=""/>
            }
            

            <div className={`save_sl_input ${items.length == 0 ? 'save_sl_disabled' : ''}`}>
                <input type="text" placeholder='Enter a name' value={name} onChange={setName}/>
                <button>Save</button>
            </div>

        </div>
    )
}

export default SaveFooter
