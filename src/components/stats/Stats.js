import React, {useEffect, useState} from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';
import {toast} from 'react-toastify'

import {api} from '../../utils/api'
import './Stats.scss'

import BarCell from './BarCell'

const Stats = () => {

    const [loading, setLoading] = useState(false)
    const [stats, setStats] = useState(false)


    useEffect(() => {

        async function getData() {
            setLoading(true)
            try {

                const statsReq = await api.get('/list/stats')
                
                if (statsReq.data.success) {                    
                    setStats(statsReq.data.data)
                    setLoading(false)
                } else {
                    setLoading(false)
                    return toast.error('Could not get data from server...')
                }

            } catch (err) {
                setLoading(false)
                console.log(err);
            }

        }
        getData()
    }, [])


    return (
        <div className='stats_wrapper'>

            {!loading ?
                <>
                    { stats && stats.itemsPercentage.length > 0 && stats.categoryPercentage.length > 0 && stats.monthStats.length > 0 ?
                        <>
                        <div className='row' style={{ marginTop: '40px' }}>

                            <div className='col-50'>
                                <h2>Top items</h2>
                                {stats.itemsPercentage && stats.itemsPercentage.map(item => {
                                    return <BarCell color='#f9a109' percentage={item.value} title={item.name} key={item.name}/>
                                })}
                            </div>                                                        
                                
                            <div className='col-50'>
                                <h2>Top Categories</h2>
                                {stats.categoryPercentage && stats.categoryPercentage.map(category => {
                                    return <BarCell percentage={category.value} title={category.name} key={category.name}/>
                                })}
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-100' style={{ height: '300px', flex: 1 }}>
                                <h2>Monthly Summary</h2>
                                <ResponsiveContainer width='100%' height='100%'>
                                    <LineChart width={600} height={300} data={stats.monthStats} margin={{ top: 5, right: 10 }}>
                                        <Line type="monotone" dataKey="items" stroke="#f9a109" />
                                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        </>
                        : 
                        <>
                            <h2>Statistics</h2>
                            <p>No stats to display</p>
                        </>
                    }   
                </>
                :

                    <div style={{ textAlign: 'center', marginTop: '30px' }}>
                        <span className="material-icons spin" style={{ fontSize: '3rem' }}>
                            cached
                    </span>
                    </div>
                    
                
            }
        </div>
    )
}

export default Stats
