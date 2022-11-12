import Tile from './Tile';

interface BoardProps {
  children: ReturnType<typeof Tile>[][]
}

export default function Board(props: BoardProps) {

  return (<div>
    {props.children}
  </div>);
}