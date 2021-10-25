import { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import AppContext from './AppContext';
import Routes from './Routes';

function App() {
  const [user, setUser] = useState(null);
  return (
    <AppContext.Provider value={{ user, setUser }}>
      <div>
        <NavBar />
        <Routes />
      </div>
    </AppContext.Provider>
  );
}

export default App;
