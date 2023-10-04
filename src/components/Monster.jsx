import React from 'react'

export default function Monster({ name, combat, slayer, examine }) {
  return (
    <div className="Monster">
      <h3 className="monster-name">{name}</h3>
      <p className="monster-combat">Combat Level: {combat}</p>
      <p className="monster-slayer">Slayer Level: {slayer}</p>
      <hr className="monster-divider" />
      <p className="monster-examine">Examine Info: <br />{examine}</p>
    </div>
  )
}
