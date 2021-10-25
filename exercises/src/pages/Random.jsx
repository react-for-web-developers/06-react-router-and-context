import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import RandomImageContainer from '../components/RandomImageContainer';
import Paths from '../routes/Path';

export default function Random() {
  const location = useLocation();
  const history = useHistory();
  
  const handleOnCLick = (params) => () => {
    history.push(Paths.random + params);
  };

  return (
    <div className='container mt-5'>
      <div className='buttons'>        
        <button className='button is-ligth' onClick={handleOnCLick('/cat')} disabled={location.pathname.endsWith('/cat')}>
          Cat 🐱
        </button>
        <button className='button is-ligth' onClick={handleOnCLick('/dog')} disabled={location.pathname.endsWith('/dog')}>
          Dog 🐶
        </button>
      </div>
      <Switch>
        <Route path={Paths.randomAnimal} component={RandomImageContainer} />
      </Switch>
    </div>
  );
}
