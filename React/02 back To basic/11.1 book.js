import React from "react";

const Book = (props) => {
  const { auth, title, image } = props.book;
  // we need attribut and even handler for events

  return (
    <article className="bor">
      <img className="img" src={image} alt="ankit" width="300px" />
      <h1 style={{ fontsize: "10px", marginTop: "10px", marginBottom: "10px" }}>
        {title}
      </h1>
      <h4>{auth}</h4>
    </article>
  );
};

export default Book;
