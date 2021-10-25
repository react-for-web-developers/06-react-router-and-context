import { useContext } from 'react';
import AppContext from '../AppContext';

function Home() {
  const { setUser } = useContext(AppContext);
  return (
    <div>
      <h1>This is the Home Page!</h1>  
      <button onClick={() => setUser({ username: 'CJ' })}>Login</button>
    </div>
  );
}

export default Home;
