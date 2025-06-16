import { useState } from "react";

const Header = ({ text }) => <h1>{text}</h1>;

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick}>{props.text}</button>
    </>
  );
};

const StatisticLine = (props) => <p>{props.text} {props.value}</p> 

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positive = total === 0 ? 0 : (good / total) * 100;

  if (total !== 0) {
    return (
      <>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="total" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={`${positive} %`} />
      </>
    );  
  } else {
    return <p>No feedback given</p> 
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => {
    setGood((prevGood) => prevGood + 1);
  };

  const increaseNeutral = () => {
    setNeutral((prevNeutral) => prevNeutral + 1);
  };

  const increaseBad = () => {
    setBad((prevBad) => prevBad + 1);
  };

  return (
    <>
      <Header text="give feedback" />
      <Button text="good" onClick={increaseGood} />
      <Button text="neutral" onClick={increaseNeutral} />
      <Button text="bad" onClick={increaseBad} />
      <Header text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
