import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { BookContext } from '../contexts/BookContext'

export default function BookList() {
  const { books } = useContext(BookContext)
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark
  console.log(books)
  return (
    <div
      className="book-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>
        {books.map((book) => {
          return (
            <li style={{ background: theme.ui }} key={book.id}>
              {book.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
