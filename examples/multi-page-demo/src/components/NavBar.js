import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../AppContext';

function NavBar() {
  const { user } = useContext(AppContext);
  return (
    <ul>
      {/* <li><a href="/#/">Home</a></li> */}
      <li><Link to="/">Home</Link></li>
      {/* <li><a href="/#/about">About</a></li> */}
      <li><Link to="/about">About</Link></li>
      <li>Hello {user.username}</li>
    </ul>
  );
}

export default NavBar;
