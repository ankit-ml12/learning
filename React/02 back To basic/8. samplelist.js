`Note :- if we create differnt-2 object for everyitem then it hactick. so we use array instead`;

import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const books = [
  {
    auth: "ankit patidar",
    title: "React Guilde to become Pro",
    image: `./ankit.jpg`,
  },
  {
    auth: "Vishal Khanna",
    title: "A complete roadmap of Node",
    image: `./ankit.jpg`,
  },
  {
    auth: "ravi Mokar",
    title: "Learn Dsa by mastering this",
    image: `./ankit.jpg`,
  },
];

function Booklist() {
  //here we have to return the jsx not html
  return (
    <div className="booko">
      <section className="booklist">
        {books.map((book) => {
          const { auth, title, image } = book;
          return <Book book={book}></Book>;
        })}
      </section>
    </div>
  );
}

function Book(props) {
  const { writer, head, image } = props.book;
  return (
    <article className="bor">
      <img class="img" src={image} alt="ankit" width="300px" />
      <h1 style={{ fontsize: "10px", marginTop: "10px", marginBottom: "10px" }}>
        {head}
      </h1>
      <h4>{writer}</h4>
    </article>
  );
}

ReactDom.render(<Booklist />, document.getElementById("root"));

//you can also do this
// return <Book {...book}></Book>;
// and use simple {auth, title, img} in the book function
