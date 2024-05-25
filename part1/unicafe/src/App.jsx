import { useState } from 'react'
import Statistics from './Stat'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  function handleGood() {
    const newGood = good + 1
    setGood(newGood)
    globalStats(newGood, neutral, bad)
  }

  function handleNeutral() {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
    globalStats(good, newNeutral, bad)
  }

  function handleBad() {
    const newBad = bad + 1
    setBad(newBad)
    globalStats(good, neutral, newBad)
  }

  function globalStats(good, neutral, bad) {
    const newAll = good + neutral + bad
    const newAverage = (good - bad) / newAll;
    const newPositive = (good / newAll) * 100;
    setAll(newAll);
    setAverage(newAverage);
    setPositive(newPositive);
  }

  return (
    <>
      <header>
        <h1>Give feedback</h1>
      </header>
      <main>
        <div>
          <button onClick={handleGood}>good</button>
          <button onClick={handleNeutral}>neutral</button>
          <button onClick={handleBad}>bad</button>
        </div>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          all={all}
          average={average}
          positive={positive}
        />
      </main>
    </>
  )
}

export default App
