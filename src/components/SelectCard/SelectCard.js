import React from 'react'
import PropTypes from 'prop-types'

import './SelectCard.scss'

const SelectCard = ({isChecked, handler, value, text, content, index }) => {
    return (
        <div className="SelectCard" onClick={()=>{handler(index)}}>
            <div className={isChecked ? "SelectCard__Btn SelectCard__Btn--checked" : "SelectCard__Btn SelectCard__Btn--unchecked"} data-value={value}>
                <label>{text}</label>
                {
                    content!=='' ? <p>{content}</p> : '' 
                }
            </div>
           
        </div>
    )
}

SelectCard.propTypes = {
    isChecked: PropTypes.bool.isRequired,
    handler: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
}

export default SelectCard
