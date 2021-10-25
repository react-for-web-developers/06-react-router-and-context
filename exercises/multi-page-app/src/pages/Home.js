import { useContext } from 'react';
import AppContext from '../context';
import Main from '../components/Main';
import homeImg from '../assets/home_screen.svg';
import homeDarkImg from '../assets/home_screen_dark.svg';

function Home() {
  const { theme } = useContext(AppContext);

  return (
    <Main image={theme === 'light' ? homeImg : homeDarkImg} page={"Home"} />
  );
}

export default Home;
