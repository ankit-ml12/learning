//react need uniq property of each item of list to maintain data
// so we have to give them uniq id
// it can be string number anything
// set only where you are iterating
// some people cheat this using second  parameter of map methode which is index. and they pass it as a key
import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

const books = [
  {
    id: 1,
    auth: 'ankit patidar',
    title: 'React Guilde to become Pro',
    image: `./ankit.jpg`,
  },
  {
    id: 2,
    auth: 'Vishal Khanna',
    title: 'A complete roadmap of Node',
    image: `./ankit.jpg`,
  },
  {
    id: 3,
    auth: 'ravi Mokar',
    title: 'Learn Dsa by mastering this',
    image: `./ankit.jpg`,
  },
]

function Booklist() {
  //here we have to return the jsx not html
  return (
    <div className="booko">
      <section className="booklist">
        {books.map((book) => {
          const { auth, title, image } = book
          return <Book key={book.id} book={book}></Book>
        })}
      </section>
    </div>
  )
}

// this is also on way
// return <Book key={book.id} book={...book}></Book>
// function Book({ auth, title, image }) {

function Book(props) {
  // function Book({book:{auth, title, image}}) {
  const { auth, title, image } = props.book
  return (
    <article className="bor">
      <img className="img" src={image} alt="ankit" width="300px" />
      <h1 style={{ fontsize: '10px', marginTop: '10px', marginBottom: '10px' }}>
        {title}
      </h1>
      <h4>{auth}</h4>
    </article>
  )
}

ReactDom.render(<Booklist />, document.getElementById('root'))
