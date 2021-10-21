import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import SubReddit from './pages/SubReddit';
import AuthorizedRoute from './components/AuthorizedRoute';
import RoutePaths from './RoutePaths';

function Routes() {
  return (
    <Switch>
      <Route exact path={RoutePaths.home} component={Home} />
      <AuthorizedRoute exact path={RoutePaths.about} component={About} />
      <AuthorizedRoute exact path={RoutePaths.subreddit} component={SubReddit} />
      <Redirect to={RoutePaths.home} />
    </Switch>
  );
}

export default Routes;
