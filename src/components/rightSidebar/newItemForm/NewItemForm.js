import React, {useState} from 'react'
import {toast} from 'react-toastify'

import { useDispatch } from 'react-redux'
import useInput from '../../../hooks/useInput'

import {api} from '../../../utils/api'

import {addItem} from '../../../reducers/items'
import {closeNewItemForm} from '../../../reducers/itemSidebar'

import './NewItemForm.scss'

const NewItemForm = () => {

    const dispatch = useDispatch()

    const name = useInput('')
    const note = useInput('')
    const image = useInput('')
    const category = useInput('')

    const [loading, setLoading] = useState(false)


    const onFormSubmit = async (e) => {
        e.preventDefault()

        
        if (name.value == '' && category.value == '') {
            return toast.error('Please add name and category')                
        }

        try {
            setLoading(true)

            const newItemReq = await api.post('/items', {
                name: name.value,
                note: note.value,
                image: image.value,
                category: category.value,
            })

            if (newItemReq.data.success) {                
                dispatch(addItem(newItemReq.data.data))
                cancel()
                setLoading(false)
                return toast.success('Item added successfully!')    
            } else {
                setLoading(false)
                return toast.error('Error saving item, please try again...')    
            }

        } catch (err) {
            setLoading(false)
            return toast.error('Error saving item, please try again...')
        }

    }


    const cancel = () => {
        dispatch(closeNewItemForm())
    }

    return (
        <div className='new_item_form'>
            <form onSubmit={onFormSubmit}>
                <h2 style={{marginBottom:'40px'}}>Add a new item</h2>
                <div className='input-group'>
                    <label htmlFor="">
                        <span>Name</span>
                        <input
                            type="text"
                            placeholder='Enter a name'
                            required={true}
                            value={name.value}
                            onChange={name.onChange}
                        />
                    </label>
                </div>
                <div className='input-group'>
                    <label htmlFor="">
                        <span>Note (optional)</span>
                        <textarea
                            placeholder='Enter a note'
                            value={note.value}
                            onChange={note.onChange}
                        ></textarea>
                    </label>
                </div>
                <div className='input-group'>
                    <label htmlFor="">
                        <span>Image (optional)</span>
                        <input
                            type="text"
                            placeholder='Enter a url'
                            value={image.value}
                            onChange={image.onChange}
                        />
                    </label>
                </div>
                <div className='input-group'>
                    <label htmlFor="">
                        <span>Category</span>
                        <input
                            type="search"
                            placeholder='Enter a category'
                            required={true}
                            value={category.value}
                            onChange={category.onChange}
                        />
                    </label>
                </div>

                <div className='complete_footer_wrapper' style={{position:'absolute', bottom:'0px',left:'0px', width: '100%'}}>
                    
                    <button
                        onClick={cancel}
                        disabled={loading}
                        className='btn btn-white'>
                        {!loading ?
                            'cancel'
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
                    >
                    {!loading ?
                            'Save'
                            :
                            <div style={{textAlign:'center'}}>
                                <span className="material-icons spin" style={{fontSize:'2rem'}}>
                                    cached
                                </span>
                            </div>
                        }          
                    </button>
                </div>

            </form>
        </div>
    )
}

export default NewItemForm
