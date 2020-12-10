import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

export default function Navbar() {
  const { books } = useContext(BookContext)
  return (
    <div className="navbar">
      <h1>Jango's Reading List</h1>
      <p>Currently {books.length} books</p>
    </div>
  )
}
