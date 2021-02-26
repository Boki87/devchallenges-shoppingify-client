import React from 'react'

import './ConfirmModal.scss'

const ConfirmModal = ({ title, onClose, cb }) => {





    return (
        <div className='confirm_modal_backdrop'>
            
            <div className='confirm_modal'>
                <div className='confirm_modal_title'>
                    {title}
                </div>

                <span onClick={onClose} className="material-icons">
                    close
                </span>

                <div className='confirm_modal__actions'>
                    <button onClick={onClose} className='btn btn-white'>
                        Cancel
                    </button>                    
                    <button onClick={cb} className='btn btn-red'>
                        Yes
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ConfirmModal
