
type GameListProps = {
  games: {
    name: string,
    maxPlayers: number,
    currentPlayers: number
  }[];
  onGameClick: (gameName: string) => void;
};

export default function GameList({ games, onGameClick }: GameListProps) {

  // TODO: verify correct list scroll behaviour
  // TODO: onGameClick() could take the player count as well, for display in the parent component

  return (
    <div className='m-2'>
      <ul>
        {games.map(game => {
          return <li className='mt-1' onClick={() => onGameClick(game.name)}>
            {`Game: ${game.name} (${game.currentPlayers}/${game.maxPlayers} players)`}
          </li>;
        })}
      </ul>
    </div>
  );
};