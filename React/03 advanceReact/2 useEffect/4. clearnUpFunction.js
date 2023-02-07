n;
import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     setSize(window.innerWidth);
  //   });
  // });

  //with this if we chack event in inspect then there are too many
  //which lead to lack of memory some time
  //the reasone behind whenever event listner will work it call chage the size which again run useeffect which again chage size and this process go on

  // to avoid this error we need to close the useeffect once we set the size
  // to close we do things
  //1. pass empty array
  //2.return the window.remove('resize', function);

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  return (
    <>
      <h1>Windows Width</h1>
      <h2>{size}</h2>
    </>
  );
};

export default UseEffectCleanup;
