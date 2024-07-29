import { useState } from 'react'


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  return(

  <tr>
    <td>{props.text}</td> 
    <td>{props.value}</td>
  </tr>  

  )
}

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const average = (props.good + props.bad*-1)/all
  const pos_percentage = (props.good/all)*100

  if (all > 0) {
    return (
      <>
        <h1>statistics</h1>
        <table>
          <tbody>
        <StatisticLine text={'good'} value={props.good}/>
        <StatisticLine text={'neutral'} value={props.neutral}/>
        <StatisticLine text={'bad'} value={props.bad}/>
        <StatisticLine text={'all'} value={all}/>
        <StatisticLine text={'average'} value={average}/>
        <StatisticLine text={'positive'} value={pos_percentage + '%'}/>
        </tbody>
        </table>
        </>
    )
  } else {
    return (
      <>
      <h1>statistics</h1>
      <p>No feedback given</p>
      </>
    )
  }
  

}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const setToValue = (setValue, newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setToValue(setGood, good + 1)} text="good" />
      <Button handleClick={() => setToValue(setNeutral, neutral + 1)} text="neutral" />
      <Button handleClick={() => setToValue(setBad, bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App