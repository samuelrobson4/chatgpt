import React, { useEffect, useState } from 'react'
import PlaylistSelector from './components/PlaylistSelector'
import TrackList from './components/TrackList'
import './index.css'

const SHEET_URL = 'https://sheet.best/api/sheets/3f4bb128-b8f4-4e68-9a9c-b1cfb1cfc7c1';

export default function App() {
  const [items, setItems] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
  fetch(SHEET_URL)
    .then(res => {
      console.log("Fetched response:", res)
      return res.json()
    })
    .then(data => {
      console.log("Fetched items:", data)
      setItems(data)
    })
    .catch(err => {
      console.error("Failed to fetch playlists:", err)
    })
}, [])

return (
  <div className="app">
    {!selected ? (
      items.length === 0 ? (
        <p>Loading playlists…</p>
      ) : (
        <PlaylistSelector items={items} onSelect={setSelected} />
      )
    ) : (
      <TrackList item={selected} onBack={() => setSelected(null)} />
    )}
  </div>
)
