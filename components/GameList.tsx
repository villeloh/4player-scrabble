import { GameInfo } from "utils/types";

type GameListProps = {
  games: GameInfo[] | null;
  onGameClick: (game: GameInfo) => void;
};

export default function GameList({ games, onGameClick }: GameListProps) {

  // TODO: verify correct list scroll behaviour

  return (
    <div className='m-2'>
      <ul>
        {games?.map(game => {
          return <li className='mt-1' onClick={() => onGameClick({ name: game.name, currentPlayers: game.currentPlayers, maxPlayers: game.maxPlayers })}>
            {`${game.name} | ${game.currentPlayers}/${game.maxPlayers} players`}
          </li>;
        })}
      </ul>
    </div>
  );
};