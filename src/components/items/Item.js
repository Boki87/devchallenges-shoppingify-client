import React from 'react'


import './Item.scss'

const Item = ({ name, addItem }) => {
    
    

    return (
        <div className='item_wrapper'>
            <div className='item_name'>
                {name}
            </div>

            <div className='item_add'>
                <span onClick={addItem} className="material-icons">
                    add
                </span>
            </div>
        </div>
    )
}

export default Item
