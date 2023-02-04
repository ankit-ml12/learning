import React from "react";
import ReactDom from "react-dom";
import "./index.css";

//import js file
//name must be same
import { books } from "./11.2 books";
//in case of default export you have to import like this
// in this case you can rename of the import file
import Book from "./11.1 book";

function Booklist() {
  return (
    <div className="booko">
      <section className="booklist">
        {books.map((book) => {
          const { auth, title, image } = book;
          return <Book key={book.id} book={book}></Book>;
        })}
      </section>
    </div>
  );
}

ReactDom.render(<Booklist />, document.getElementById("root"));
