import React from 'react'
import './home.css'

export default function Home(props) {

    return (
        <div className='home'>
            <h1 className='title'>Quizzical</h1>
            <h3 className='description'>Some descriptive text</h3>
            <button onClick={props.changeWelcome}>Start Quiz</button>
        </div>
    )
}