import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState<string | undefined>();
  const [dni, setDni] = useState<string | undefined>();

  const handleSave = () => {
    return;
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Redux</h1>
      <div className="card">
        <form>
          <div>
            <p>Name</p>
            <input
              defaultValue={'Default name value'}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <p>DNI</p>
            <input
              defaultValue={'Default NIE value'}
              value={dni}
              onChange={(e) => setDni(e.target.value)}
            />
          </div>

          <button
            style={{margin: 15}}
            onClick={handleSave}
          >
            Save
          </button>
        </form>
      </div>
    </>
  )
}

export default App
