import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { api } from '../../utils/api'
import {setItems} from '../../reducers/items'


import ItemsSearch from './ItemsSearch'
import ItemsList from './ItemsList'

import './Items.scss'

const Items = () => {

    const dispatch = useDispatch()

    const items = useSelector((state) => state.items)

    const [loading, setLoading] = useState(false)
    const [queryItems, setQueryItems] = useState([])
    const [query, setQuery] = useState('')

    useEffect(() => {

        async function getItems() {
            setLoading(true)
            try {
                const {data:itemsData} = await api.get('/items')

                if (itemsData.success) {
                    dispatch(setItems(itemsData.data))
                    setLoading(false)
                }
            } catch (err) {
                    setLoading(false)
            }            
        }
        getItems()

    }, [])

    useEffect(() => {

        if (query !== '') {
            let searchedItems = items.filter(item => item.name.toLowerCase().includes(query))
            setQueryItems(searchedItems)
        } else {
            setQueryItems(items)
        }

    }, [query, items])


    const itemQueryHandler = (e) => {
        setQuery(e.target.value.toLowerCase())
    }

    return (
        <div className='items_wrapper'>
            <ItemsSearch itemQuery={itemQueryHandler}/>
            {!loading ?
                <ItemsList items={queryItems} />
                :
                <div style={{textAlign:'center', marginTop:'30px'}}>
                    <span className="material-icons spin" style={{fontSize:'3rem'}}>
                        cached
                    </span>
                </div>
            }
        </div>
    )
}

export default Items
