import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [selectedVote, setSelectedVote] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  const vote = (pos) => {
    const arr = [...selectedVote];
    arr[pos] += 1;
    setSelectedVote(arr);
  };

  const maxVoted = () => {
    const arr = [...selectedVote];
    const maxIndex = arr.indexOf(Math.max(...arr));
    return anecdotes[maxIndex];
  };

  return (
    <div>
      {anecdotes[selected]}
      <br />
      Has {selectedVote[selected]} Votes.
      <br />
      <button onClick={() => vote(selected)}>Vote</button>
      <button onClick={() => setSelected(Math.floor(Math.random() * 7))}>
        Next Anectode
      </button>
      <br />
      <h3>Anectode With Most Votes</h3>
      {maxVoted()}
    </div>
  );
};

export default App;
