import { useState } from 'react';
import { Switch, Route, Redirect, } from 'react-router-dom';

import AppContext from './context';

import Header from './components/Header';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';

export const Routes = () => {
  const [theme, setTheme] = useState("light");

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/notfound" component={NotFound} />
        <Redirect to="/notfound" />
      </Switch>
    </AppContext.Provider>
  )
}