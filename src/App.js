import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
  const [search, setSearch] = useState("")
  const [list, setList] = useState([])


  const handleClick = () => {
    const url = `http://de1.api.radio-browser.info/json/stations/byname/${search}`

    axios
      .get(url)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
        <h1>Radio App</h1>
      <input 
        placeholder="search radio"
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button
        onClick={handleClick}      
      >Search</button>

      <section aria-label='station-list'>

      </section>
    </div>
  );
}

export default App;
