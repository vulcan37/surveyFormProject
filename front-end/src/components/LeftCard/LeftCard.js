import React from 'react'
import "./LeftCard.css"

function LeftCard(props) {
    const { btn_name, btn_message, onClick } = props
    return (
        <>
            <h2 className='left-card-h2'> Welcome Page </h2>
            <p className='left-card-p'>One line text</p>
            <p className='left-card-p2'>Will be here</p>
            <div className='left-card-msg'>Sign in to continue access pages</div>
            <div className='leftcard-message'>{btn_message}</div>
            <div>
                <button type='submit' className='leftcard-btn' onClick={onClick}>{btn_name}</button>
            </div>
        </>
    )
}

export default LeftCard