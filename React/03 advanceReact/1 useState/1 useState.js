import React from "react";
let title = "Random Words";

const ErrorExample = () => {
  const helper = () => {
    title = "smart People";
    console.log(title);
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className="btn" onClick={helper}>
        Generate Now
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;

//when we write this code and try to click on button in hope that title will change but it will not happen
//reason is
//we are not re rendering the component
// because we can't send title in return function
// so we will use useState check 2nd file
