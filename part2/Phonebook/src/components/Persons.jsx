import React from "react";
import { removePersons } from "../services/persons";

export const Persons = ({ persons, filter }) => {
  const deletePerson = (id) => {
    window.confirm("Delete This Person ?") && removePersons(id);
  };

  return (
    <ul>
      {persons &&
        persons.map(
          (person, i) =>
            person.name.includes(filter) && (
              <li key={i}>
                {person.name}: {person.number}
                <button onClick={() => deletePerson(person.id)}>Delete</button>
              </li>
            )
        )}
    </ul>
  );
};
