import React from 'react'
import { Link } from "react-router-dom/cjs/react-router-dom.min"

export default function MonsterCard({ name, combat, slayer, examine, id }) {
  return (
    <div className="Monster">
      <h3 className="monster-name">{name}</h3>
      <hr className="monster-divider" />
      <p className="monster-combat">Combat Level: {combat}</p>
      <p className="monster-slayer">Slayer Level: {slayer}</p>
      <hr className="monster-divider" />
      <Link to={`/monsters/${id}`}>
        <button className="monster-button">View</button>
      </Link>
    </div>
  )
}
