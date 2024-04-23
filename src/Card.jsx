import React from 'react'
import Option from './Option.jsx'
import './card.css'
export default function Card(props) {
     
    // let options = optionData.map(data => {
    //     return (
    //         <Option 
    //             isheld={data.isHeld} 
    //             value={data.value} 
    //             correct={data.correct} 
    //         />
    //     )
    // })

    const [clickable, setClickable] = React.useState(true)
    console.log(clickable)
    const optionsArray = []

    for (let i = 0; i < props.object.incorrect_answers.length; i++) {
        optionsArray.push(props.object.incorrect_answers[i]);
    }

    optionsArray.push(props.object.correct_answer)

    let optionText = optionsArray.map(option => {
        return (
            <Option 
                value={option} 
                // isheld={selected} 
                // changeSelect={() => setSelected(prev => !prev)}
                key={option}
                isClickable={clickable}
                changeClick={() => setClickable(prev => !prev)}
                optionsArray={optionsArray}
            />
        )
    })
    

    return (
        <div className='card'>
            <h2 className='question-text'>{props.object.question}</h2>
            <div className='option-container'>
                {optionText}
            </div>
        </div>
        
    )
}