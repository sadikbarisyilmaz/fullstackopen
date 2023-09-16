import { useState } from "react";

import React from "react";

function StatisticLine({ text, value }) {
  return (
    <tr>
      <td>{text}:</td>
      <td>
        {value} {text === "Positive" && "%"}
      </td>
    </tr>
  );
}
function Button({ text, fn }) {
  return <button onClick={() => fn((prev) => prev + 1)}>{text}</button>;
}

const Statistics = ({ good, bad, neutral }) => {
  const isCollected = good > 0 || bad > 0 || neutral > 0;

  return (
    <>
      {isCollected ? (
        <table>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="Total" value={good + bad + neutral} />
            <StatisticLine text="Average" value={(good - bad) / 3} />
            <StatisticLine
              text="Positive"
              value={(good / (good + bad + neutral)) * 100}
            />
          </tbody>
        </table>
      ) : (
        "No feedback given"
      )}
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>Statistics</h2>
      <Button fn={setGood} text="Good" />
      <Button fn={setNeutral} text="Neutral" />
      <Button fn={setBad} text="Bad" />
      <br />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
