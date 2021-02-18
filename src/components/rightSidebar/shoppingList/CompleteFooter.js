import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {setList} from '../../../reducers/shoppingList'
import {api} from '../../../utils/api'
import './CompleteFooter.scss'

const CompleteFooter = () => {

    let {editMode, id, name, items} = useSelector(state => state.shoppingList)

    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)

    const completeList = async (action) => {

        try {
            setLoading(true)
            let newItems = items.map(i => {
                    return {
                        ...i,
                        item: i._id,
                        quantity: i.quantity,
                        done: i.done,                        
                    }
                })
            const updateReq = await api.put(`/list/${id}`, { status: action, name, items: newItems })
            
                if (updateReq.data.success) {            
                    dispatch(setList({                        
                        name: '',
                        id: null,
                        items: [],
                        editMode: true
                    }))
                    setLoading(false)
                } else {
                    setLoading(false)
                    //toast error
                }
        } catch (err) {
            setLoading(false)
            //toast error
        }
        

    }


    return (
        <div className='complete_footer_wrapper'>
            <button disabled={loading} onClick={() => completeList('canceled')} className='btn btn-white'>
                {loading ?
                    'Loading..'
                    :
                    'cancel'
                }
                
            </button>
            <button disabled={loading} onClick={() => completeList('completed')} className='btn btn-blue'>
                {loading ?
                    'Loading..'
                    :
                    'Complete'
                }                
            </button>
        </div>
    )
}

export default CompleteFooter
