//  first of all we import useState function from react
//make sure name is same

import React, { useState } from "react";

//Use state
// const [text, func] = useState("random Title");
//initial value of text is the variable that we pass inside the useState
//and after some time if we want to change the value of text we use func function
// useState must be initilise inside the object

const ErrorExample = () => {
  const [text, func] = useState("random Title");
  const helper = () => {
    func("smart People");
  };

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className="btn" onClick={helper}>
        Generate Now
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;

//useState change the value of text
