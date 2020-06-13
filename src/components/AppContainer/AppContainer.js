import React, { useState } from 'react'

import LeftContainer from '../LeftContainer'
import RightContainer from '../RightContainer'
import './AppContainer.scss'

const AppContainer = () => {

    const [profileIndex, setProfileIndex] = useState(0);

    return (
        <div className="AppContainer">
            <LeftContainer profileIndex={profileIndex} />
            <RightContainer changeProfile={()=>setProfileIndex(1)} />
        </div>
    )
}

export default AppContainer
