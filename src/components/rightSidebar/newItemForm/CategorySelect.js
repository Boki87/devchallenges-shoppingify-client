import React, {useRef, useState} from 'react'

import {useOutsideClick} from '../../../hooks/outsideClick'

const CategorySelect = ({ required = true, onChange, placeholder = '', options = []}) => {


    const wrapperRef = useRef(null)

    useOutsideClick(wrapperRef, () => {
        setShowOption(false)
    })

    const [showOption, setShowOption] = useState('')

    const [selectedOption, setSelectedOption] = useState('')

    const setOption = (option) => {        
        setSelectedOption(option)
        onChange(option)
        setShowOption(false)
    }

    const changeHandler = (e) => {
        setSelectedOption(e.target.value)
        onChange(e.target.value)
    }

    const test = (e) => {
        e.preventDefault()
        console.log(1111);
    }

    return (
        <div className='input-group'>
            <label ref={wrapperRef} htmlFor="">
                <span>Category</span>
                <input                                          
                    onClick={() => setShowOption(true)}    
                    type="search"
                    placeholder={placeholder}
                    required={required}
                    value={selectedOption}
                    onChange={changeHandler}                    
                />
                {showOption && 
                    options.length > 0 &&
                    <div className='select_options'>
                        { 
                            options.map(option =>
                                <div
                                    className='select_option'                               
                                    onClick={() => setOption(option)}
                                    key={option}
                                >
                                    {option}
                                </div>
                            )
                        }                   
                    </div>
                }
            </label>
        </div>
    )
}

export default CategorySelect
