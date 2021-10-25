import { useContext } from 'react';
import AppContext from '../context';
import Main from '../components/Main';
import portfolioImg from '../assets/portfolio.svg';
import portfolioDarkImg from '../assets/portfolio_dark.svg';

function Portfolio() {
  const { theme } = useContext(AppContext);

  return (
    <Main image={theme === 'light' ? portfolioImg : portfolioDarkImg} page={"Portfolio"} />
  );
}

export default Portfolio;