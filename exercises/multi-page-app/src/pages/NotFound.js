import { useContext } from 'react';
import AppContext from '../context';
import Main from '../components/Main';
import notFoundImg from '../assets/page_not_found.svg';
import notFoundDarkImg from '../assets/page_not_found_dark.svg';

function NotFound() {
  const { theme } = useContext(AppContext);

  return (
    <Main image={theme === 'light' ? notFoundImg : notFoundDarkImg} page={"Not Found"} />
  );
}

export default NotFound;