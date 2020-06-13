import React, { Component } from 'react'

import './SelectItemCard.scss'

class SelectItemCard extends Component {

    state = {
        selected: false
    }

    onSelect = () => {
        this.setState({
            selected: !this.state.selected
        })
    }

    render() {

        const { selected } = this.state

        return (
            <div className="SelectItemCard" onClick={this.onSelect}>
                <div className={selected ? "SelectItemCard__circle SelectItemCard__circle--selected" : "SelectItemCard__circle"} >
                    <h6>ICON</h6>
                </div>
            <p>Allergy</p>
            </div>
        )
    }
}

export default SelectItemCard