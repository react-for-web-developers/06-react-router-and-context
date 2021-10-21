import { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import AppContext from './AppContext';

function App() {
  const [user, setUser] = useState({
    username: 'CJ',
  });
  return (
    <AppContext.Provider value={{ user, setUser }}>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Redirect to="/" />
        </Switch>
      </div>
    </AppContext.Provider>
  );
}

export default App;
