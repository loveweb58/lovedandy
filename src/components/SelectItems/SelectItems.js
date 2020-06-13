import React, { Component } from 'react'

import SelectItemCard from '../SelectItemCard'
import './SelectItems.scss'

class SelectItems extends Component {
    render() {
        return (
            <div className="SelectItems">
                <SelectItemCard />
                <SelectItemCard />
                <SelectItemCard />
                <SelectItemCard />
            </div>
        )
    }
}

export default SelectItems