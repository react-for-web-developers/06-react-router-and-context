import { useHistory } from 'react-router-dom';
import Paths from '../routes/Path';
const { home } = Paths;

export default function NotFound() {
  const history = useHistory();
  return (
    <section className='hero has-background-danger-light'>
      <div className='hero-body'>
        <p className='title'>Page Not Found 🏠</p>
        <button className='button is-warning' onClick={() => history.push(home)}>
          Back to Home
        </button>
      </div>
    </section>
  );
}
