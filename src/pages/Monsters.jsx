import React from 'react'
import { useFetch } from "../hooks/useFetch"
import Monster from "../components/Monster";

export default function Monsters() {

    const { data: monsters, isPending, error } = useFetch("http://localhost:3000/monsters")

  return (
    <div className="monsters-container">
      <div className="monsters-title">
        <h1>Monsters</h1>
      </div>
      <div className="cards-container">
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {monsters && monsters.map(m => (
        <Monster key={m.name} name={m.name} combat={m.combat_level} slayer={m.slayer_level_required} examine={m.examine_info} />
    ))}
      </div>
    </div>
  )
}
