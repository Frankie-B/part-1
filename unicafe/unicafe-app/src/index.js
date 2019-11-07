import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = props => (
  <button onClick={props.handleClick}>{props.name}</button>
);

const Stats = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const allStats = good + neutral + bad;

  if (allStats === 0) {
    return <div> no feedback given!</div>;
  }

  const avg = (good - bad) / allStats;
  const positive = (good / allStats) * 100;
  return (
    <table>
      <tbody>
        <Stats text="good" value={good}></Stats>
        <Stats text="neutral" value={neutral}></Stats>
        <Stats text="bad" value={bad}></Stats>
        <Stats text="all" value={allStats}></Stats>
        <Stats text="average" value={avg}></Stats>
        <Stats text="positive" value={positive + '%'}></Stats>
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button name={'good'} handleClick={() => setGood(good + 1)}></Button>
      <Button
        name={'neutral'}
        handleClick={() => setNeutral(neutral + 1)}
      ></Button>
      <Button name={'bad'} handleClick={() => setBad(bad + 1)}></Button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
