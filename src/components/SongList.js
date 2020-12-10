import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import NewSongForm from './NewSongForm'

export default function SongList() {
  const [songs, setSongs] = useState([
    { id: 1, title: 'almost home' },
    { id: 2, title: 'memory gospel' },
    { id: 3, title: 'this wild darkness' },
  ])

  const addSong = (title) => {
    setSongs([...songs, { id: uuidv4(), title: title }])
  }

  return (
    <div className="song-list">
      <h2>Moby songs</h2>
      <ul>
        {songs.map((song) => {
          const { id, title } = song
          return <li key={id}>{title}</li>
        })}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  )
}
