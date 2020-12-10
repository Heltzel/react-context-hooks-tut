import React, { useState } from 'react'

export default function NewSongForm({ addSong }) {
  const [title, setTitle] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    addSong(title)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="newSong">Song Name</label>
      <input
        type="text"
        id="newSong"
        required
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
        }}
      />
      <input type="submit" value="add new song" />
    </form>
  )
}
