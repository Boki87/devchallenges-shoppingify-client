import React from 'react'

import {useSelector} from 'react-redux'

import NoItemsImage from '../../../assets/shopping.svg'

import './SaveFooter.scss'

const SaveFooter = () => {

    const items = useSelector(state => state.shoppingList.items)


    return (
        <div className='save_footer_wrapper'>
            
            {
                items.length == 0 && <img src={NoItemsImage} alt=""/>
            }
            

            <div className={`save_sl_input ${items.length == 0 ? 'save_sl_disabled' : ''}`}>
                <input type="text" placeholder='Enter a name'/>
                <button>Save</button>
            </div>

        </div>
    )
}

export default SaveFooter
