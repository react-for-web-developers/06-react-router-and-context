import { useContext } from 'react';
import AppContext from '../context/App';
import { useHistory } from 'react-router-dom';
import Paths from '../routes/Path';
const { home, random } = Paths;

export default function NavBar() {
  const history = useHistory();
  const { hasSession, setSession } = useContext(AppContext);
  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-menu'>
        <div className='navbar-start'>
          <a className='navbar-item' onClick={() => history.push(home)}>
            Home
          </a>
          <a className='navbar-item' onClick={() => history.push(random)}>
            Random
          </a>
        </div>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='buttons'>
              <a
                className={`button ${hasSession ? 'is-primary' : 'is-light'}`}
                onClick={() => setSession((session) => !session)}
              >
                {hasSession ? 'Log out' : 'Log in'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
