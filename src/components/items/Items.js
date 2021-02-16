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

    return (
        <div className='items_wrapper'>
            <ItemsSearch />
            {!loading ?
                <ItemsList items={items} />
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
