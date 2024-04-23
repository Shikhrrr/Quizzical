import React from "react"
import Home from './Home.jsx'
import Quiz from './Quiz.jsx'

export default function App() {

  const [welcome, setWelcome] = React.useState(true)

  function changeWelcome() {
    setWelcome(prev => !prev)
  }

  return (
    welcome ?
    <Home changeWelcome={changeWelcome}/>
    :
    <Quiz changeWelcome={changeWelcome} />
  )
}