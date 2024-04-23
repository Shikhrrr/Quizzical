import React from 'react'

export default function Option(props) {

    const [selected, setSelected] = React.useState(false)

    const stylesTrue = {
        backgroundColor: "grey"
    }

    const stylesFalse = {
        backgroundColor: "lightgreen"
    }

    function handleClick(event) {
        // event.stopPropagation()
        // let options = document.querySelectorAll('.option')
        // options.forEach(option => {
        //     option.style.backgroundColor = 'lightgreen'
        // })
        // event.target.style.backgroundColor = 'red'

        

    }

    return (    
        
        <div 
            className='option' 
            style={selected ? stylesTrue : stylesFalse}
            onClick={() => {
                if (props.isClickable) {
                    setSelected(prev => !prev)
                    // console.log(console.log(props.isClickable))
                    props.changeClick()

                } else {
                    props.optionsArray.forEach(option => {
                        props.changeClick()
                        setSelected(prev => !prev)
                    })
                }
                
            }}
            
        >
            {props.value}
        </div>
    )
}