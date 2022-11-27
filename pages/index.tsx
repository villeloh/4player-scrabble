import { NextPage } from 'next';
import GamePage from './GamePage';

const App: NextPage = () => {

  // TODO: either use a router or conditionally render the StartPage / GamePage
  return (
    <GamePage />
  );
};

export default App;