import React from "react";

export const Persons = ({ persons, filter }) => {
  return (
    <ul>
      {persons &&
        persons.map(
          (person, i) =>
            person.name.includes(filter) && (
              <li key={i}>
                {person.name}: {person.number}
              </li>
            )
        )}
    </ul>
  );
};
