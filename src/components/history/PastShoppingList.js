import React, { useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import {useParams, Link, useHistory} from 'react-router-dom'

import {api} from '../../utils/api'

import './PastShoppingList.scss'

const PastShoppingList = () => {

    const history = useHistory()

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(false)
    const [categories, setCategories] = useState([])

    let { id } = useParams()

    
    
    useEffect(() => {
        if (data) { 
            setCategories([...new Set(data.items.map(item => item.item.category))])
        }
    }, [data])  


    useEffect(() => {
        async function getData() {
            try {
                setLoading(true)
                const listReq = await api.get(`/list/${id}`)
                if (listReq.data.success) {                            
                    setData(listReq.data.data)
                    setLoading(false)
                } else {
                    console.log('error fetching data');
                    setLoading(false)
                }
            } catch (err) {
                console.log('error fetching data');
                setLoading(false)
            }
        }
        getData()
    }, [])


    function formatedDate(val) {
        let d = new Date(val)

        let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ]

        let dayFull = days[d.getDay()]

        let day = d.getDate()
        let month = d.getMonth() + 1
        let year = d.getFullYear()
        
        return `${dayFull} ${day}.${month}.${year}`
    }


    return (
        <div className='past_shopping_list_wrapper'>

            <div className='back-btn' onClick={() => history.goBack()}>                
                <span className="material-icons">
                    keyboard_backspace
                </span>
                <span>
                    back
                </span>                
            </div>

            <h1>{data.name != '' ? data.name : 'Shopping List'}</h1>

            <div className='sl_date'>
                <span className="material-icons">
                    today
                </span>
                {formatedDate(data.createdAt)}
            </div>
            
            {!loading ?
                <div>
                     {categories.map(cat => {
                        return (
                            <div key={ uuidv4()}>
                                <h3>{cat}</h3>
                                <div className='items_block' key={uuidv4()}>
                                {
                                    data.items.map(item => {
                                        if (item.item.category == cat) {                                            
                                            return <div className='item_wrapper' key={uuidv4()}>
                                                        <div className='item_name'>
                                                            {item.item.name}
                                                        </div>
                                                        <div className='item_info'>
                                                            {item.quantity} pcs
                                                        </div>
                                                </div>
                                        }
                                    })
                                }
                                </div>
                            </div>
                        )
                        
                    })}
                </div>
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

export default PastShoppingList
