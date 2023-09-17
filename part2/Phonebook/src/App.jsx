import { useState } from "react";
import { Filter } from "./components/Filter";
import { Persons } from "./components/Persons";
import { PersonForm } from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState(null);
  const [filter, setFilter] = useState("");

  console.log(persons);
  const handleChangeName = (e) => {
    setNewName(e.target.value);
  };
  const handleChangeNumber = (e) => {
    setNewNumber(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    persons.map((person) => person.name).includes(newName)
      ? alert(`"${newName}" already exists in the phonebook`)
      : setPersons([...persons, { name: newName, number: newNumber }]);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setFilter={setFilter} />
      <h3>Add a new person</h3>
      <PersonForm
        handleChangeName={handleChangeName}
        handleChangeNumber={handleChangeNumber}
        handleSubmit={handleSubmit}
      />
      <h3>Numbers</h3>
      <Persons filter={filter} persons={persons} />
    </div>
  );
};

export default App;
