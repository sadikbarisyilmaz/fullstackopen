import { useState } from "react";
import { Filter } from "./components/Filter";
import { Persons } from "./components/Persons";
import { PersonForm } from "./components/PersonForm";
import { useEffect } from "react";
import { getPersons, postPerson, updatePerson } from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getPersons(setPersons);
  }, []);

  const handleChangeName = (e) => {
    setNewName(e.target.value);
  };
  const handleChangeNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const person = persons.filter((person) => person.name === newName)[0];

    const confirmUpdatePerson = (id, newNumber, newName) => {
      window.confirm(
        `"${newName}" already exists in the phonebook, update this persons number ?`
      ) && updatePerson(id, newNumber, newName);
    };

    if (persons.filter((person) => person.name === newName).length > 0) {
      person.number == newNumber
        ? alert(`"${newName}" already exists in the phonebook`)
        : confirmUpdatePerson(person.id, newNumber, newName);
    } else {
      postPerson(newName, newNumber);
    }
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
