import { useContext } from 'react';
import AppContext from '../context/App';
export default function Home() {
  const { hasSession } = useContext(AppContext);
  return (
    <section className={`hero ${hasSession ? 'has-background-grey-light' : 'has-background-danger-light'}`}>
      <div className='hero-body'>
        <p className='title'>Home 🏠</p>
        <p className='subtitle'>{hasSession ? 'Welcome ⚡' : 'Must log in 🚨'}</p>
      </div>
    </section>
  );
}
