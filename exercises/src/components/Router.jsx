import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import Random from '../pages/Random';
import NotFound from '../pages/NotFound';
import Paths from '../routes/Path';

export default function Router() {
  return (
    <Switch>
      <Route exact path={Paths.initial}>
        <Redirect to={Paths.random} />
      </Route>
      <Route exact path={Paths.home} component={Home} />
      <Route path={Paths.random} component={Random} />
      <Route path={Paths.wrapAll} component={NotFound} />
    </Switch>
  );
}
