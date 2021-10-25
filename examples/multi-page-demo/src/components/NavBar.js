import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../AppContext';

import RoutePaths from '../RoutePaths';

function NavBar() {
  const { user } = useContext(AppContext);
  return (
    <ul>
      {/* <li><a href="/#/">Home</a></li> */}
      <li><Link to={RoutePaths.home}>Home</Link></li>
      {/* <li><a href="/#/about">About</a></li> */}
      <li><Link to={RoutePaths.about}>About</Link></li>
      <li>{user ? 'YOU ARE LOGGED IN' : 'PLEASE LOGIN' }</li>
    </ul>
  );
}

export default NavBar;
