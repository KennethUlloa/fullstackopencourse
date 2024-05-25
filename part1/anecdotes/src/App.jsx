import { useState } from 'react'


const Anecdote = ({ anecdote, votes }) => {
  return (
    <>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </>
  )
}

const MostVotedAnecdote = ({ anecdotes, points }) => {
  const maxVotes = Math.max(...points);
  const mostVotedAnecdoteIndex = points.indexOf(maxVotes);

  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdote={anecdotes[mostVotedAnecdoteIndex]} votes={maxVotes} />
    </div>
  )

}


const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  function handleNextAnecdote() {
    let randomIndex = Math.floor(Math.random() * anecdotes.length);
    if (randomIndex === selected) {
      randomIndex = (randomIndex + 1) % anecdotes.length;
    }
    setSelected(randomIndex);
  }

  function handleVote() {
    const currentPoints = [...points];
    currentPoints[selected] += 1;
    setPoints(currentPoints);
  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} votes={points[selected]} />
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNextAnecdote}>next anecdote</button>
      <MostVotedAnecdote anecdotes={anecdotes} points={points} />
    </div>
  )
}

export default App