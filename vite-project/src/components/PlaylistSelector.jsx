import React from 'react'

export default function PlaylistSelector({ items, onSelect }) {
  return (
    <div className="carousel">
      {items.map((item, index) => (
        <div key={index} className="card" onClick={() => onSelect(item)}>
          <img
            src={item.image_override_url || `https://via.placeholder.com/300?text=${item.name}`}
            alt={item.name}
          />
          <div className="info">
            <h3>{item.name}</h3>
            <p>{item.type} • {item.mood}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
