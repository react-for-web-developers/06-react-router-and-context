import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../context';

function Header() {
  const { theme, setTheme } = useContext(AppContext);

  const handleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
  }

  return (
    <div className={theme === 'light' ? "container-nav" : "container-nav-dark"}>
      <header className="d-flex justify-content-center py-3">
        <div className="col-md-3"></div>
        <ul className="nav nav-pills col-md-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/features" className="nav-link">Features</Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
        </ul>
        <div className="col-md-4 text-end">
          <button className="btn btn-light" onClick={handleTheme}>Switch Theme</button>
        </div>
      </header>
    </div>
  );
}

export default Header;