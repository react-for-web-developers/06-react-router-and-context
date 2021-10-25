import { useContext } from 'react';
import AppContext from '../context';
import Main from '../components/Main';
import aboutImg from '../assets/about.svg';
import aboutDarkImg from '../assets/about_dark.svg';

function About() {
  const { theme } = useContext(AppContext);

  return (
    <Main image={theme === 'light' ? aboutImg : aboutDarkImg} page={"About"} />
  );
}

export default About;
