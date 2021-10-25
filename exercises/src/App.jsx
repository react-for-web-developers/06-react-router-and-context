import NavBar from './components/NavBar';
import { useState } from 'react';
import AppContext from './context/App';
import Router from './components/Router';

function App() {
  const [hasSession, setSession] = useState(true);
  return (
    <>
      <AppContext.Provider value={{ hasSession, setSession }}>
        <NavBar />
        <Router />
      </AppContext.Provider>
    </>
  );
}

export default App;
