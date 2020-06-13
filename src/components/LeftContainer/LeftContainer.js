import React from 'react'
import PropTypes from 'prop-types';
import './LeftContainer.scss'

const LeftContainer = ({profileIndex}) => {
    return (
        <div className="LeftContainer">
            <h4>Exit</h4>
            <h1>This is a fun headline</h1>
            <h2>Intro copy that will help users navigate this experience.</h2>
            <ul>
                <li className={profileIndex===0 ? "LeftContainer__bullet": '' }>Human Profile</li>
                <li className={profileIndex===1 ? "LeftContainer__bullet": '' }>Pet Profile</li>
                <li className={profileIndex===2 ? "LeftContainer__bullet": '' }>Details</li>
            </ul>
        </div>
    )
}

LeftContainer.propTypes = {
    profileIndex: PropTypes.number
}

LeftContainer.defaultProps = {
    profileIndex: 1
};

export default LeftContainer

