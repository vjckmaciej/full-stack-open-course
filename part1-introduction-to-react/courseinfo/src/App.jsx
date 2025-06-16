import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick}>{props.text}</button>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => {
    setGood(prevGood => prevGood + 1)
  }

  const increaseNeutral = () => {
    setNeutral(prevNeutral => prevNeutral + 1)
  }

  const increaseBad = () => {
    setBad(prevBad => prevBad + 1)
  }

  return (
    <>
      <Header text="give feedback" />
      <Button text="good" onClick={increaseGood} />
      <Button text="neutral" onClick={increaseNeutral} />
      <Button text="bad" onClick={increaseBad} />
      <Header text="statistics" />
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </>
  )
}

export default App