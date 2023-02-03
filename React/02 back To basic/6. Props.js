//we use props like this
import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const firstBook = {
  auth: "ankit patidar",
  title: "React Guilde to become Pro",
  image: `./ankit.jpg`,
};

function Booklist() {
  //here we have to return the jsx not html
  return (
    <section className="booklist">
      <Book
        writer={firstBook.auth.toUpperCase()}
        head={firstBook.title}
        image={firstBook.image}
      />
    </section>
  );
}

function Book({ props }) {
  return (
    <article className="book">
      <img class="img" src={props.image} alt="ankit" width="300px" />
      <h1 style={{ fontsize: "10px", marginTop: "10px", marginBottom: "10px" }}>
        {props.head}
      </h1>
      <h4>{props.writer}</h4>
    </article>
  );
}

ReactDom.render(<Booklist />, document.getElementById("root"));

// if we want to destructor code you can do easily
