import React from 'react'

import './BarCell.scss'
const BarCell = ({color = '#56ccf2', percentage, title}) => {
    return (
        <div className='bar_cell_wrapper'>   
            <div style={{display:'flex', justifyContent: 'space-between', marginBottom:'10px'}}>
                <div className='bar_cell_title'>
                    {title}
                </div>
                <div className='bar_cell_value'>
                    {percentage}%
                </div>
            </div>    
            <div className='bar_cell_bar'>
                <div className='bar_cell_fill' style={{background:color, width: percentage + '%'}}></div>
            </div>
        </div>
    )
}

export default BarCell
