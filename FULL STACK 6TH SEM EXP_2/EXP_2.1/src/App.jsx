import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'

function App() {
  const [pokemon, setPokemon] = useState(null)

  const pokemonImages = {
    pikachu: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    charmander: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    bulbasaur: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  }
  return (
    <div className="container mt-4">
      <h2 className="text-center">Welcome to React with Bootstrap</h2>

      <div className="dropdown text-center">
        <button className="btn btn-secondary dropdown-toggle mt-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Select Pokemon
        </button>
        <ul className="dropdown-menu">
          <li>
            <button className="dropdown-item" onClick={() => setPokemon("pikachu")}>
              Pikachu
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => setPokemon("charmander")}>
              Charmander
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => setPokemon("bulbasaur")}>
              Bulbasaur
            </button>
          </li>
        </ul>
      </div>

      {/* 🔹 Show image only if pokemon is selected */}
      {pokemon && (
        <div className="text-center mt-4">
          <h4 className="text-capitalize">{pokemon}</h4>
          <img
            src={pokemonImages[pokemon]}
            alt={pokemon}
            className="img-fluid"
            style={{ width: '500px', height: '500px' }}
            
          />
        </div>
      )}

    </div>
  )
}

export default App
