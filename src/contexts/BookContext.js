import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
export const BookContext = createContext()

export default function BookContextProvider(props) {
  const [books, setBooks] = useState([
    { title: 'The name of the wind', author: 'Russel Darfuss', id: 1 },
    { title: 'The final empire', author: 'Simone Waterton', id: 2 },
  ])

  const addBook = (title, author) => {
    // Don't forget the  [ ]  . It's an array of objects
    setBooks([...books, { title: title, author: author, id: uuidv4() }])
  }

  const removeBook = (id) => {
    let newBookList = books.filter((book) => {
      return book.id !== id
    })
    setBooks(newBookList)
  }

  return (
    // DOUBLE CURLIIIIIEEESSSS !!!!
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  )
}
