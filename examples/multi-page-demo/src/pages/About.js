import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import AppContext from '../AppContext';
import RoutePaths from '../RoutePaths';

function About() {
  const { setUser } = useContext(AppContext);
  const history = useHistory();
  return (
    <div>
      <h1>This is the About Page!</h1>
      <button onClick={() => setUser({ username: 'Carlos' })}>UPDATE USERNAME</button>
      <button onClick={() => history.push('/r/javascript')}>
      {/* <button onClick={() => history.push(RoutePaths.subreddit.replace(':subredditName', 'javascript'))}> */}
        Go to r/javascript subreddit!
      </button>
    </div>
  );
}

export default About;