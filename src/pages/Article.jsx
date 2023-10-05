import React from 'react'
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Article() {

  const { monster } = useParams();
  const url = `http://localhost:3000/monsters/` + monster
  const { data: m, isPending, error } = useFetch(url);

  console.log(m);

  return (
    <div className="Article">
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {m && (
          <div>
            <h3 className="article-name">{m.name}</h3>
            <hr className="article-divider" />
            <p className="article-combat">Combat Level: {m.combat_level}</p>
            <p className="article-slayer">Slayer Level: {m.slayer_level_required}</p>
            <hr className="article-divider" />
            <h5>Examine Info:</h5>
            <p>{m.examine_info}</p>
            <hr className="article-divider" />
            <Link to="/monsters/">
              <button className="article-button">Back</button>
            </Link>
        </div>
        )}
    </div>
  ) 
}
