import React from "react";

import { Istate as Iprops } from "../App";

const List: React.FC<Iprops> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person, i) => {
      return (
        <li className="List" key={i}>
          <div className="List-header">
            <img className="List-image" src={person.url} alt={person.name} />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old.</p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  };
  return <ul>{renderList()}</ul>;
};

export default List;
