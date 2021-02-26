import React, {useState} from 'react'
import {toast} from 'react-toastify'

import {useSelector, useDispatch} from 'react-redux'
import {closeItemForm} from '../../../reducers/itemSidebar'
import {deleteItem} from '../../../reducers/items'
import {addItem} from '../../../reducers/shoppingList'

import { api } from '../../../utils/api'


import './ItemForm.scss'

const ItemForm = () => {

    const dispatch = useDispatch()

    const {itemFormData} = useSelector(state => state.itemSidebar)

    const [loading, setLoading] = useState()

    const addItemToShoppingList = () => {
        if (!itemFormData) {
            return
        }        
        dispatch(addItem({ ...itemFormData, done: false, quantity: 1 }))
        dispatch(closeItemForm())
    }

    const deleteItemHandler = async () => {
        if (!itemFormData) {
            return
        }
        setLoading(true)
        try {
            const deleteItemReq = await api.delete(`/items/${itemFormData._id}`)
            if (deleteItemReq.data.success) {
                dispatch(deleteItem(itemFormData._id))
                dispatch(closeItemForm())
                return toast.success('Item deleted successfully...')    
            } else {
                setLoading(false)
                return toast.error('Error deleting item!')    
            }

        } catch (err) {
            setLoading(false)
            return toast.error('Error deleting item!')
        }
    }

    return (
        <div className='item_form_wrapper'>
            <div className='back-btn' onClick={() => dispatch(closeItemForm())}>                
                <span className="material-icons">
                    keyboard_backspace
                </span>
                <span>
                    back
                </span>                
            </div>
            
            {
                itemFormData && itemFormData.image != '' &&
                <div className='item_form_info_image'>
                    <img src={itemFormData.image} alt=""/>
                </div>
            }

            {
                itemFormData && itemFormData.name != '' &&
                <div className='item_form_info_group'>
                    <label>name</label>
                    <span>{itemFormData.name}</span>
                </div>
            }

            {
                itemFormData && itemFormData.category != '' &&
                <div className='item_form_info_group'>
                    <label>category</label>
                    <span>{itemFormData.category}</span>
                </div>
            }

            {
                itemFormData && itemFormData.note != '' &&
                <div className='item_form_info_group'>
                    <label>note</label>
                    <span>{itemFormData.note}</span>
                </div>
            }

            <div className='complete_footer_wrapper' style={{position:'absolute', bottom:'0px',left:'0px', width: '100%'}}>
                    
                    <button                        
                        disabled={loading}
                        className='btn btn-white'
                        onClick={deleteItemHandler}
                    >
                        {!loading ?
                            'delete'
                            :
                            <div style={{textAlign:'center'}}>
                                <span className="material-icons spin" style={{fontSize:'2rem'}}>
                                    cached
                                </span>
                            </div>
                        }                    
                    </button>

                    <button
                    disabled={loading}
                    className='btn btn-gold'
                    type='submit'
                    onClick={addItemToShoppingList}
                    >
                    {!loading ?
                            'Add to list'
                            :
                            <div style={{textAlign:'center'}}>
                                <span className="material-icons spin" style={{fontSize:'2rem'}}>
                                    cached
                                </span>
                            </div>
                        }          
                    </button>
                </div>
        </div>
    )
}

export default ItemForm
