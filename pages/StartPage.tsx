import UIButton from "components/UIButton";
import { NextPage } from "next";
import Head from "next/head";
import { APP_TITLE } from "utils/globals";

const StartPage: NextPage = () => {

  const pageTitle = APP_TITLE;

  const welcomeText = 'Welcome to 4-P Scrabble!';

  const handleCreateGameClick = () => {

  };

  const handleJoinGameClick = () => {

  };

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{welcomeText}</h1>
      <div className="flex flex-col">
        <div>
          <UIButton text="Create Game" handleClick={handleCreateGameClick} />
        </div>
        <div>
          <UIButton text="Join Game" handleClick={handleJoinGameClick} />
        </div>
      </div>
    </div>
  );
};

export default StartPage;