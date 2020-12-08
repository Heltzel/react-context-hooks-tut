import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function SongList() {
  const [songs, setSongs] = useState([
    { id: 1, title: 'almost home' },
    { id: 2, title: 'memory gospel' },
    { id: 3, title: 'this wild darkness' },
  ])

  const addSong = () => {
    setSongs([...songs, { id: uuidv4(), title: 'porcelin' }])
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
      <button onClick={addSong}>Add Song</button>
    </div>
  )
}
