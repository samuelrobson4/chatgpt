import React, { useEffect, useState } from 'react'

export default function TrackList({ item, onBack }) {
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    const endpoint =
      item.type === 'playlist'
        ? `https://api.spotify.com/v1/playlists/${item.id}/tracks`
        : `https://api.spotify.com/v1/albums/${item.id}/tracks`

    // NOTE: In production you'd authenticate and fetch real data
    setTracks([]) // placeholder
  }, [item])

  return (
    <div className="track-list">
      <button onClick={onBack}>← Back</button>
      <h2>{item.name}</h2>
      <ul>
        {tracks.map((track, index) => (
          <li key={index}>
            <strong>{track.name}</strong><br />
            <small>{track.artists?.map(a => a.name).join(', ')} • {msToMin(track.duration_ms)}</small>
          </li>
        ))}
      </ul>
    </div>
  )
}

function msToMin(ms) {
  const min = Math.floor(ms / 60000)
  const sec = ((ms % 60000) / 1000).toFixed(0)
  return `${min}:${sec.padStart(2, '0')}`
}
