import React from "react";
import ReactDom from "react-dom";

// function Greeting() {
` here we have to return the jsx not html`;
//   return (
//     <div>
//       <h1>Hello ankit Patidar</h1>;
//     </div>
//   );
// }

//ARROW FUNCTION
// const Greeting = () => {
//   return React.createElement("h1", {}, "hello Ankit");
// };
//or

const Greeting = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "hello 2 type")
  );
};

//three element are {html element, prop, content}
// so this way of writing jsx get messier after sometime

ReactDom.render(<Greeting />, document.getElementById("root"));
