import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ShoppingListHero from './ShoppingListHero'
import {toast} from 'react-toastify'

import ItemsContainer from './ItemsContainer'
import CompleteFooter from './CompleteFooter'
import SaveFooter from './SaveFooter'

import {api} from '../../../utils/api'

import {setEditMode, setList} from '../../../reducers/shoppingList'

import './ShoppingList.scss'

const ShoppingList = () => {

    let {editMode, id, name, items} = useSelector(state => state.shoppingList)

    const dispatch = useDispatch()


    useEffect(() => {
        async function getData() {
            
            try {
                let listReq = await api.get('/list/active')
                
                if (listReq.data.success) {
                    if (!listReq.data.data) {
                        return
                    }
                    let newList = listReq.data.data                    
                    let newItems = newList.items.map(i => {
                        return {           
                            ...i.item,
                            quantity: i.quantity,
                            done: i.done,
                            name: i.item.name,
                            _id: i.item._id                            
                        }
                    })                    
                    dispatch(setList({
                        items: newItems,
                        name: newList.name,
                        id: newList._id
                    }))
                } else {
                    //toast error
                    return toast.error('Could not get data from server...')
                }
            } catch (err) {
                console.log(err);
                
            }
        }

        getData()
    }, [])


    const setInEditMode = () => {
        dispatch(setEditMode(true))        
    }

    const setInCompleteMode = async () => {                
        //ajax to save list
        try {
            if (id) {                
                //update list
                let newItems = items.map(i => {
                    return {
                        ...i,
                        item: i._id,
                        quantity: i.quantity,
                        done: i.done,                        
                    }
                })
                const updateReq = await api.put(`/list/${id}`, { status: 'active', name, items: newItems})
                if (updateReq.data.success) {
                    let newList = updateReq.data.data
                    dispatch(setList({                        
                        name: newList.name,
                        id: newList._id
                    }))
                } else {
                    //toast error
                    return toast.error('Could not update shopping list')
                }
            } else {                
                //create new list                
                let newItems = items.map(i => {
                    return {
                        ...i,
                        item: i._id,
                        quantity: i.quantity,
                        done: i.done,                        
                    }
                })
                const saveReq = await api.post('/list', { status: 'active', name, items:newItems })
                if (saveReq.data.success) {
                    let newList = saveReq.data.data
                    dispatch(setList({                        
                        name: newList.name,
                        id: newList._id
                    }))
                } else {
                    //toast error
                    return toast.error('Could not save shopping list')
                }
            }
            
        } catch (err) {
            //toast error
            return toast.error('Server error...')
        }
        
        dispatch(setEditMode(false))        
    }

    return (
        <div className='shopping_list_wrapper'>

            <ShoppingListHero />
            
            <div className='shopping_list_name_container' style={{padding:'0px 30px', display:'flex'}}>
                <h2>
                    { name != '' ? name : 'Shopping List'}                    
                </h2>
                {items.length > 0 && !editMode && 
                    <div onClick={setInEditMode} className='btn-round bg-cream'>
                        <span className="material-icons">
                            create
                        </span>
                    </div>
                }
                {items.length > 0 && editMode &&
                    <div onClick={setInCompleteMode} className='btn-round bg-cream'>
                        <span className="material-icons">
                            save
                        </span>
                    </div>
                }
            </div>
                
            <ItemsContainer />

            {!editMode ?
                <CompleteFooter /> 
                :
                <SaveFooter />
            }
        </div>
    )
}

export default ShoppingList
