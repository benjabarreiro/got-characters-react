import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header'
import Characters from './components/Characters'
import AddCharacter from './components/AddCharacter'

function App() {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const getCharacters = async () => {
      const charactersFromServer = await fetchCharacters()
      setCharacters(charactersFromServer)
    }

    getCharacters()
  }, [])

  // Fetch Characters
  const fetchCharacters = async () => {
    const res = await fetch('http://localhost:5000/characters')
    const data = await res.json()

    return data
  }

  //Add Character
  const addCharacter = async (character) => {
    const res = await fetch('http://localhost:5000/characters', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(character)
    })

    const data = await res.json()

    setCharacters([...characters, data])
  }

  // Delete Character
  const deleteCharacter = async (id) => {
    await fetch(`http://localhost:5000/characters/${id}`, {
      method: 'DELETE',
    })

    setCharacters(characters.filter((character) => character.id !== id))
  }

  return (
    <div className="App">
      <Header title='Game of Thrones Characters' />
      <AddCharacter onAdd={addCharacter} />
      <Characters characters={characters} onDelete={deleteCharacter} />
    </div>
  );
}

export default App;
