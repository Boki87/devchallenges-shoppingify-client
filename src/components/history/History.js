import React, { useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import {api} from '../../utils/api'
import {toast} from 'react-toastify'

import ShoppingListCard from './ShoppingListCard'

import './History.scss'

const History = () => {

    const [shoppingLists, setShoppingLists] = useState([])
    const [dates, setDates] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setDates([...new Set(shoppingLists.map(list => {
            let [year, month, ...rest] = list.createdAt.split('-')
            return `${year}-${month}`
        }))])
    }, [shoppingLists])


    function formatedDate(val) {
        let d = new Date(val)

        let months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ]

        let monthFull = months[d.getMonth()]                
        let year = d.getFullYear()        
        return `${monthFull} ${year}`
    }

    useEffect(() => {
        async function getData() {
            try {
                setLoading(true)
                const listsReq = await api.get('/list')
                if (listsReq.data.success) {
                    setShoppingLists(listsReq.data.data)
                    setLoading(false)
                } else {
                    setLoading(false)
                    console.log('No shopping lists in database');
                }
            } catch (err) {
                setLoading(false)
                console.log(err);
            }
        }
        getData()
    }, [])

    return (
        <div className='history_wrapper'>
            <h1>Shopping history</h1>

            {!loading ? 
                dates.map(d => {
                        return (
                            <div key={ uuidv4()}>
                                <h3>{formatedDate(d)}</h3>
                                <div key={uuidv4()}>
                                    {
                                        shoppingLists.map(list => {
                                            if (list.createdAt.includes(d)) {                                        
                                                return <ShoppingListCard
                                                        list={list}
                                                        key={list._id}
                                                        />
                                            }
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                
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

export default History
