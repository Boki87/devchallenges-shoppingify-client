import React from 'react'

import './ShoppingListCard.scss'
const ShoppingListCard = ({ list }) => {
    
    

    function formatedDate() {
        let d = new Date(list.createdAt)

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
        let month = d.getMonth()
        let year = d.getFullYear()
        
        return `${dayFull} ${day}.${month}.${year}`
    }

    return (
        <div className='sl_card_wrapper'>
            <div className='sl_card_name'>
                {list.name != '' ? list.name: 'Shopping List'}
            </div>
            <div className='sl_card_date'>
                <span className="material-icons">
                    today
                </span>
                {formatedDate()}
            </div>
            <div className={`sl_card_status sl_card_status_${list.status}`}>
                {list.status}
            </div>
            <div className='sl_card_arrow'>
                <span className="material-icons">
                    keyboard_arrow_right
                </span>
            </div>
        </div>
    )
}

export default ShoppingListCard
