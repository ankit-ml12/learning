import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  //to import array use React.useState Methode
  //then you don't need to to import useState
  const [people, setPeople] = useState(data);
  const helper = (id) => {
    const ml = people.filter((person) => person.id !== id);
    setPeople(ml);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <>
            <div key={id} className="item">
              <h4>{name}</h4>
              <button
                onClick={() => {
                  helper(id);
                }}
              >
                Remove
              </button>
            </div>
          </>
        );
      })}
      <button
        className="btn"
        onClick={() => {
          setPeople([]);
        }}
      >
        Remove Items
      </button>
      ;
    </>
  );
};

export default UseStateArray;
