import React from 'react'
import PropTypes from 'prop-types'
import SelectCard from '../SelectCard'

import './SelectOption.scss'

class SelectOption extends React.Component{

    constructor() {
        super();
        this.state = {
          selectedIndex: null,
          selectedValue: null,
        };
    }

    toggleRadioBtn(index){
        if(this.state.selectedIndex===null) {
            this.setState({
                selectedIndex: index,
                selectedValue: this.props.options[index],
                options: this.props.options
              });
              this.triggerNextStep(index, this.props.type)
        } else {
            return
        }
        
    }

    triggerNextStep = ( selectedIndex, type ) => {
        if(selectedIndex!==null) {
                const { step } = this.props;
                const { metadata = {} } = step;
                let trigger;
                if ( type==='allergies' ) {
                    trigger = selectedIndex===1 ?  'end-message' : metadata.triggerNext
                } else {
                    trigger = step.value === 'help' ? 'help-message' : metadata.triggerNext;
                }
            
                this.props.triggerNextStep({ value: metadata.triggerNext, trigger });
        }
        
    }

    render() {

        const { options } = this.props;
        const allOptions = options.map((option, i) => {
            return <SelectCard 
                key={i} 
                isChecked={(this.state.selectedIndex === i)}
                text={option.title} 
                value={option.title}
                content={option.content}
                index={i} 
                handler={this.toggleRadioBtn.bind(this)} 
            />
        });

        return (
            <div>{allOptions}</div>
        );
    }
}

SelectOption.propTypes = {
    options: PropTypes.array.isRequired
}

export default SelectOption