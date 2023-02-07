import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  // use can use any one useEffect or React.useEffect(without import)
  const [value, setValue] = useState(0);
  //to use useeffect you have to pass callback function
  useEffect(() => {
    console.log("use Effect");
    document.title = `NewTitle(${value})`;
  });
  //this useEffect function run everytime when you rerender component

  //useEffect do 2 thing
  //1 preserved the value between the render
  //2. trigger at every rerender
  return (
    <>
      <h1>{value}</h1>;
      <button className="btn" onClick={() => setValue(value + 1)}>
        IncreaseMe
      </button>
    </>
  );
};

export default UseEffectBasics;
// so we use useEffect when we want sideeffect or change something outside the component
