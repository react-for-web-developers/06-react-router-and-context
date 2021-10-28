import { useContext } from 'react';

import AppContext from '../AppContext';

function About() {
  const { setUser } = useContext(AppContext);
  return (
    <div>
      <h1>This is the About Page!</h1>
      <button onClick={() => setUser({ email: 'guerra41@gmail.com' })}>UPDATE EMAIL ADDRESS</button>
    </div>
  );
}

export default About;