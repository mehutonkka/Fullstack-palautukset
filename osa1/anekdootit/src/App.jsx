import { useState } from 'react'

const Display = (props) => {
  return (
  <>
    <h1>{props.header}</h1>
    {props.anecdotes[props.selected]}
    <br></br>
    has {props.votes[props.selected]} votes
    <br></br>
  </>)
}

const RandomNumber = (min, max) => {
  min = Math.ceil(min)
  max = Math.max(max)

  return Math.floor(Math.random() * (max-min) + min)
}

const RandomAnecdote = (max) => {
  const AnecdoteNumber = RandomNumber(0, max)
  console.log('Random number of anecdote on list: ', AnecdoteNumber)
  return AnecdoteNumber
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const VoteUp = (votes, setVotes, selected) => {
  const copy = [...votes]
  copy[selected] += 1
  setVotes(copy)
}



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const LengthAnecdotes = anecdotes.length
 
  const [votes, setVotes] = useState(Array(LengthAnecdotes).fill(0))
  console.log(votes) 

  const [selected, setSelected] = useState(0)

  const MaxValue = Math.max(...votes)

  const MaxIndex = votes.indexOf(MaxValue)
  console.log(MaxIndex)

  return (
    <div>
      <Display header={'Anecdote of the day'} anecdotes={anecdotes} selected={selected} votes={votes} />
    
      <Button handleClick={() => VoteUp(votes, setVotes, selected)} text="vote" />
      <Button handleClick={() => setSelected(RandomAnecdote(LengthAnecdotes))} text="next anecdote" />
      
      <Display header={'Anecdote with most votes'} anecdotes={anecdotes} selected={MaxIndex} votes={votes} />

    </div>
  )
}

export default App