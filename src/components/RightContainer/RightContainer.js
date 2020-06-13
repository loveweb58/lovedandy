import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import './RightContainer.scss'

import SelectOption from '../SelectOption'
import SelectItems from '../SelectItems'

import avatar from './images/avatar.png'
import dog from './images/dog.jpg'

const actives = [
    {
        title: 'Couch Potato',
        content: 'She enjoys a long snooze over a run at the park'
    },
    {
        title: 'Moderate',
        content: 'She gets some good exercise about 3x a week.'
    },
    {
        title: 'Seat',
        content: 'She gets some good exercise about 3x a week.'
    }
]

const fertilization = [
    {
        title: 'Spayed',
        content: ''
    },
    {
        title: 'Not Spayed',
        content: ''
    }
]

const gender = [
    {
        title: 'Girl',
        content: ''
    },
    {
        title: 'Boy',
        content: ''
    }
]

const allergies = [
    {
        title: 'Yes',
        content: ''
    },
    {
        title: 'No',
        content: ''
    }
]

  
class RightContainer extends Component {

    triggetNext = () => {
        this.props.changeProfile()
    }

    render () {

        const steps = [
            {
            id: '1',
            message: "Hey! We're going to ask you a few questions about your dog(s) so we can curate supplements personalized just for them!",
            trigger: '2',
            },
            {
                id: '2',
                message: "Let's get started. What's your name?",
                trigger: '3'
            },
            {
                id: '3',
                user: true,
                trigger: '4'
            },
            {
                id: '4',
                message: 'Nice to meet you {previousValue}! How many dogs do you have?',
                trigger: '5'
            },
            {
                id: '5',
                user: true,
                validator: (value) => {
                        if (isNaN(value)) {
                        return 'value should be a number';
                    }
                    return true;
                },
                trigger: '6',
            },
            {
                id: '6',
                message: "What is your dogs name?",
                trigger: ({ value, steps }) => {
                    this.triggetNext()
                    return 7
                },
            },
            {
                id: '7',
                user: true,
                trigger: '10'
            },
            {
                id: '10',
                message: ({ previousValue, steps }) => {
                    return `What is your ${steps[7].value}'s gender?`
                },
                trigger: '11',
                hideInput: true
            },
            {
                id: '11',
                component: (
                    <SelectOption options={gender} type="gender" />
                ),
                waitAction: true,
                metadata: {
                    triggerNext: '12',
                },
                hideInput: true
            },
            {
                id: '12',
                message: ({ previousValue, steps }) => {
                    return `${steps[7].value} is`
                },
                trigger: '13',
                hideInput: true
            },
            {
                id: '13',
                component: (
                    <SelectOption options={fertilization} type="fertilization" />
                ),
                waitAction: true,
                metadata: {
                    triggerNext: '14',
                },
                hideInput: true
            },
            {
                id: '14',
                message: ({ previousValue, steps }) => {
                    return `How active would you say ${steps[7].value} is?`
                },
                trigger: '15',
                hideInput: true
            },
            {
                id: '15',
                component: (
                    <SelectOption options={actives} type="actives" />
                ),
                waitAction: true,
                metadata: {
                    triggerNext: '16',
                },
                hideInput: true
            },
            {
                id: '16',
                component: (
                    <div>
                        <img src={dog} alt="pet" style={{width: 200}} />
                    </div>
                ),
                asMessage: true,
                trigger: '17',
                hideInput: true
            },
            {
                id: '17',
                message: "Aww a lazy pup! Almost done now moving on to the details",
                trigger: '18',
                hideInput: true
            },
            {
                id: '18',
                message: ({ previousValue, steps }) => {
                    return `Does ${steps[7].value}  have any allergiees?`
                },
                trigger: '19',
                hideInput: true
            },
            {
                id: '19',
                component: (
                    <SelectOption options={allergies} type="allergies" />
                ),
                waitAction: true,
                metadata: {
                    triggerNext: '20',  
                },
                hideInput: true
            },
            {
                id: '20',
                message: ({ previousValue, steps }) => {
                    return `poor. ${steps[7].value}! Select her known allergies.`
                },
                trigger: '21',
                hideInput: true
            },
            {
                id: '21',
                component: (
                    <SelectItems />
                ),
                waitAction: true,
                metadata: {
                    triggerNext: 'end-message',
                },
                hideInput: true
            },
            {
                id: 'end-message',
                message: 'Thanks! Your data was submitted successfully!',
                end: true,
                hideInput: true
              },
        ]
        
        return (
            <div className="RightContainer">
                 <ChatBot
                    steps={steps}
                    width={100}
                    hideHeader={true}
                    style={{height: '100%'}}
                    avatarStyle={{
                        borderRadius: '50% 50% 0% 50%',
                        boxShowdow: 'none',
                        backgroundColor: 'white'
                    }}
                    botAvatar={avatar}
                    bubbleStyle={{
                        backgroundColor: 'white',
                        color: 'black'
                    }}
                    hideUserAvatar={true}
                    bubbleOptionStyle={{backgroundColor: 'red'}}
                />
            </div>
        )
    }
}

RightContainer.propTypes = {
    changeProfile: PropTypes.func.isRequired
}

export default RightContainer
