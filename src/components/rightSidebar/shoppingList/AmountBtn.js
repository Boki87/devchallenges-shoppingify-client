import React, {useState, useRef} from 'react'
import { useSelector } from 'react-redux'
import {useOutsideClick} from '../../../hooks/outsideClick'

import './AmountBtn.scss'


const AmountBtn = ({ amount, onDelete, onAdd, onDecrease }) => {
    
    const wrapperRef = useRef(null)

    useOutsideClick(wrapperRef, () => {
        setShowControls(false)
    })

    const editMode = useSelector(state => state.shoppingList.editMode)

    const [showControls, setShowControls] = useState(false)

    const toggleControls = () => {
        if (editMode) {
            setShowControls(!showControls)
        }
    }

    const deleteHandler = () => {
        onDelete()
    }

    const addHandler = () => {
        onAdd()
    }

    const decreaseHandler = () => {
        onDecrease()
    }

    return (
        <div ref={wrapperRef} className={`amountBtn_container ${showControls ? 'amountBtn_container-active' : ''}`}>
            {editMode && showControls && 
                <div onClick={deleteHandler} className='amountBtn-delete'>
                    <span className="material-icons">
                        delete_outline
                    </span>
                </div>
            }

            {editMode && showControls &&
                <div onClick={decreaseHandler} className='amountBtn-control'>
                    -
                </div>
            }
            <div onClick={() => editMode && toggleControls()} className='amount_btn'>
                {amount} pcs
            </div>
            {editMode && showControls &&
                <div onClick={addHandler} className='amountBtn-control'>
                    +
                </div>
            }
        </div>
    )
}

export default AmountBtn
