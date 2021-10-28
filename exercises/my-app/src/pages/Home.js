import { useContext } from 'react';
import AppContext from '../AppContext';

function Home() {
  const { user } = useContext(AppContext);
  return (
    <div>
      <h1>This is the Home Page!</h1>  
      <h5>Hello {user.email}</h5>
    </div>
  );
}

export default Home;
