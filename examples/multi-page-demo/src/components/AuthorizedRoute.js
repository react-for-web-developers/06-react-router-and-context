import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import AppContext from '../AppContext';
import RoutePaths from '../RoutePaths';

function AuthorizedRoute(props) {
  const { user } = useContext(AppContext);
  if (user !== null) {
    return (
      <Route {...props} />
    );
  }
  return (
    <Redirect to={RoutePaths.home} />
  );
}

export default AuthorizedRoute;
