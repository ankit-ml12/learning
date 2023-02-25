//if you want to send the full tag
//you can pass then using children name

import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

const firstBook = {
  auth: 'ankit patidar',
  title: 'React Guilde to become Pro',
  image: `./ankit.jpg`,
}
function Booklist() {
  //here we have to return the jsx not html
  return (
    <div className="booko">
      <section className="booklist">
        <Book
          writer={firstBook.auth.toUpperCase()}
          head={firstBook.title}
          image={firstBook.image}
        >
          <p style={{ alignItems: 'center' }}>
            "Hello ankit this is the best book on react"
          </p>
        </Book>
      </section>
      <section className="booklist">
        <Book
          writer={firstBook.auth.toUpperCase()}
          head={firstBook.title}
          image={firstBook.image}
        />
      </section>
      <section className="booklist">
        <Book
          writer={firstBook.auth.toUpperCase()}
          head={firstBook.title}
          image={firstBook.image}
        />
      </section>
    </div>
  )
}

function Book({ image, head, writer, children }) {
  return (
    <article className="bor">
      <img class="img" src={image} alt="ankit" width="300px" />
      <h1 style={{ fontsize: '10px', marginTop: '10px', marginBottom: '10px' }}>
        {head}
      </h1>
      <h4>{writer}</h4>
      {children}
    </article>
  )
}

ReactDom.render(<Booklist />, document.getElementById('root'))

//prop.children also work for this case
//only children not childrens or not any other name
