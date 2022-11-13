import Tile, { BONUS } from 'components/Tile';
import LetterObj from 'model/LetterObj';

type ReturnedTile = ReturnType<typeof Tile>;

export function initBoardTiles(onLetterDrop: Function): ReturnedTile[][] {

  let key = 1;

  // TODO: store them as JS objects maybe...
  return [
    [
      <Tile key={key++} x={0} y={0} onLetterDrop={onLetterDrop} bonus={BONUS.WSx3} />,
      <Tile key={key++} x={1} y={0} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={2} y={0} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={3} y={0} onLetterDrop={onLetterDrop} bonus={BONUS.LSx2} />,
      <Tile key={key++} x={4} y={0} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={5} y={0} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={6} y={0} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={7} y={0} onLetterDrop={onLetterDrop} bonus={BONUS.WSx3} />,
      <Tile key={key++} x={8} y={0} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={9} y={0} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={10} y={0} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={11} y={0} onLetterDrop={onLetterDrop} bonus={BONUS.LSx2} />,
      <Tile key={key++} x={12} y={0} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={13} y={0} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={14} y={0} onLetterDrop={onLetterDrop} bonus={BONUS.WSx3} />
    ],

    [
      <Tile key={key++} x={0} y={1} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={1} y={1} onLetterDrop={onLetterDrop} bonus={BONUS.WSx2} />,
      <Tile key={key++} x={2} y={1} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={3} y={1} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={4} y={1} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={5} y={1} onLetterDrop={onLetterDrop} bonus={BONUS.LSx3} />,
      <Tile key={key++} x={6} y={1} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={7} y={1} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={8} y={1} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={9} y={1} onLetterDrop={onLetterDrop} bonus={BONUS.LSx3} />,
      <Tile key={key++} x={10} y={1} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={11} y={1} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={12} y={1} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={13} y={1} onLetterDrop={onLetterDrop} bonus={BONUS.WSx2} />,
      <Tile key={key++} x={14} y={1} onLetterDrop={onLetterDrop} />,
    ],

    [
      <Tile key={key++} x={0} y={2} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={1} y={2} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={2} y={2} onLetterDrop={onLetterDrop} bonus={BONUS.WSx2} />,
      <Tile key={key++} x={3} y={2} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={4} y={2} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={5} y={2} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={6} y={2} onLetterDrop={onLetterDrop} bonus={BONUS.LSx2} />,
      <Tile key={key++} x={7} y={2} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={8} y={2} onLetterDrop={onLetterDrop} bonus={BONUS.LSx2} />,
      <Tile key={key++} x={9} y={2} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={10} y={2} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={11} y={2} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={12} y={2} onLetterDrop={onLetterDrop} bonus={BONUS.WSx2} />,
      <Tile key={key++} x={13} y={2} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={14} y={2} onLetterDrop={onLetterDrop} />,
    ],

    [
      <Tile key={key++} x={0} y={3} onLetterDrop={onLetterDrop} bonus={BONUS.LSx2} />,
      <Tile key={key++} x={1} y={3} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={2} y={3} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={3} y={3} onLetterDrop={onLetterDrop} bonus={BONUS.WSx2} />,
      <Tile key={key++} x={4} y={3} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={5} y={3} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={6} y={3} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={7} y={3} onLetterDrop={onLetterDrop} bonus={BONUS.LSx2} />,
      <Tile key={key++} x={8} y={3} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={9} y={3} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={10} y={3} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={11} y={3} onLetterDrop={onLetterDrop} bonus={BONUS.WSx2} />,
      <Tile key={key++} x={12} y={3} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={13} y={3} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={14} y={3} onLetterDrop={onLetterDrop} bonus={BONUS.LSx2} />
    ],

    [
      <Tile key={key++} x={0} y={4} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={1} y={4} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={2} y={4} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={3} y={4} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={4} y={4} onLetterDrop={onLetterDrop} bonus={BONUS.WSx2} />,
      <Tile key={key++} x={5} y={4} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={6} y={4} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={7} y={4} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={8} y={4} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={9} y={4} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={10} y={4} onLetterDrop={onLetterDrop} bonus={BONUS.WSx2} />,
      <Tile key={key++} x={11} y={4} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={12} y={4} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={13} y={4} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={14} y={4} onLetterDrop={onLetterDrop} />
    ],

    [
      <Tile key={key++} x={0} y={5} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={1} y={5} onLetterDrop={onLetterDrop} bonus={BONUS.LSx3} />,
      <Tile key={key++} x={2} y={5} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={3} y={5} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={4} y={5} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={5} y={5} onLetterDrop={onLetterDrop} bonus={BONUS.LSx3} />,
      <Tile key={key++} x={6} y={5} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={7} y={5} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={8} y={5} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={9} y={5} onLetterDrop={onLetterDrop} bonus={BONUS.LSx3} />,
      <Tile key={key++} x={10} y={5} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={11} y={5} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={12} y={5} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={13} y={5} onLetterDrop={onLetterDrop} bonus={BONUS.LSx3} />,
      <Tile key={key++} x={14} y={5} onLetterDrop={onLetterDrop} />
    ],

    [
      <Tile key={key++} x={0} y={6} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={1} y={6} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={2} y={6} onLetterDrop={onLetterDrop} bonus={BONUS.LSx2} />,
      <Tile key={key++} x={3} y={6} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={4} y={6} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={5} y={6} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={6} y={6} onLetterDrop={onLetterDrop} bonus={BONUS.LSx2} />,
      <Tile key={key++} x={7} y={6} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={8} y={6} onLetterDrop={onLetterDrop} bonus={BONUS.LSx2} />,
      <Tile key={key++} x={9} y={6} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={10} y={6} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={11} y={6} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={12} y={6} onLetterDrop={onLetterDrop} bonus={BONUS.LSx2} />,
      <Tile key={key++} x={13} y={6} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={14} y={6} onLetterDrop={onLetterDrop} />
    ],

    [
      <Tile key={key++} x={0} y={7} onLetterDrop={onLetterDrop} bonus={BONUS.WSx3} />,
      <Tile key={key++} x={1} y={7} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={2} y={7} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={3} y={7} onLetterDrop={onLetterDrop} bonus={BONUS.LSx2} />,
      <Tile key={key++} x={4} y={7} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={5} y={7} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={6} y={7} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={7} y={7} onLetterDrop={onLetterDrop} bonus={BONUS.CENTER} />,
      <Tile key={key++} x={8} y={7} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={9} y={7} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={10} y={7} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={11} y={7} onLetterDrop={onLetterDrop} bonus={BONUS.LSx2} />,
      <Tile key={key++} x={12} y={7} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={13} y={7} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={14} y={7} onLetterDrop={onLetterDrop} bonus={BONUS.WSx3} />
    ],

    [
      <Tile key={key++} x={0} y={8} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={1} y={8} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={2} y={8} onLetterDrop={onLetterDrop} bonus={BONUS.LSx2} />,
      <Tile key={key++} x={3} y={8} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={4} y={8} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={5} y={8} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={6} y={8} onLetterDrop={onLetterDrop} bonus={BONUS.LSx2} />,
      <Tile key={key++} x={7} y={8} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={8} y={8} onLetterDrop={onLetterDrop} bonus={BONUS.LSx2} />,
      <Tile key={key++} x={9} y={8} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={10} y={8} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={11} y={8} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={12} y={8} onLetterDrop={onLetterDrop} bonus={BONUS.LSx2} />,
      <Tile key={key++} x={13} y={8} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={14} y={8} onLetterDrop={onLetterDrop} />
    ],

    [
      <Tile key={key++} x={0} y={9} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={1} y={9} onLetterDrop={onLetterDrop} bonus={BONUS.LSx3} />,
      <Tile key={key++} x={2} y={9} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={3} y={9} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={4} y={9} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={5} y={9} onLetterDrop={onLetterDrop} bonus={BONUS.LSx3} />,
      <Tile key={key++} x={6} y={9} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={7} y={9} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={8} y={9} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={9} y={9} onLetterDrop={onLetterDrop} bonus={BONUS.LSx3} />,
      <Tile key={key++} x={10} y={9} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={11} y={9} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={12} y={9} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={13} y={9} onLetterDrop={onLetterDrop} bonus={BONUS.LSx3} />,
      <Tile key={key++} x={14} y={9} onLetterDrop={onLetterDrop} />
    ],

    [
      <Tile key={key++} x={0} y={10} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={1} y={10} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={2} y={10} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={3} y={10} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={4} y={10} onLetterDrop={onLetterDrop} bonus={BONUS.WSx2} />,
      <Tile key={key++} x={5} y={10} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={6} y={10} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={7} y={10} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={8} y={10} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={9} y={10} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={10} y={10} onLetterDrop={onLetterDrop} bonus={BONUS.WSx2} />,
      <Tile key={key++} x={11} y={10} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={12} y={10} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={13} y={10} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={14} y={10} onLetterDrop={onLetterDrop} />
    ],

    [
      <Tile key={key++} x={0} y={11} onLetterDrop={onLetterDrop} bonus={BONUS.LSx2} />,
      <Tile key={key++} x={1} y={11} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={2} y={11} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={3} y={11} onLetterDrop={onLetterDrop} bonus={BONUS.WSx2} />,
      <Tile key={key++} x={4} y={11} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={5} y={11} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={6} y={11} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={7} y={11} onLetterDrop={onLetterDrop} bonus={BONUS.LSx2} />,
      <Tile key={key++} x={8} y={11} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={9} y={11} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={10} y={11} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={11} y={11} onLetterDrop={onLetterDrop} bonus={BONUS.WSx2} />,
      <Tile key={key++} x={12} y={11} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={13} y={11} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={14} y={11} onLetterDrop={onLetterDrop} bonus={BONUS.LSx2} />
    ],

    [
      <Tile key={key++} x={0} y={12} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={1} y={12} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={2} y={12} onLetterDrop={onLetterDrop} bonus={BONUS.WSx2} />,
      <Tile key={key++} x={3} y={12} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={4} y={12} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={5} y={12} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={6} y={12} onLetterDrop={onLetterDrop} bonus={BONUS.LSx2} />,
      <Tile key={key++} x={7} y={12} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={8} y={12} onLetterDrop={onLetterDrop} bonus={BONUS.LSx2} />,
      <Tile key={key++} x={9} y={12} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={10} y={12} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={11} y={12} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={12} y={12} onLetterDrop={onLetterDrop} bonus={BONUS.WSx2} />,
      <Tile key={key++} x={13} y={12} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={14} y={12} onLetterDrop={onLetterDrop} />,
    ],

    [
      <Tile key={key++} x={0} y={13} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={1} y={13} onLetterDrop={onLetterDrop} bonus={BONUS.WSx2} />,
      <Tile key={key++} x={2} y={13} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={3} y={13} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={4} y={13} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={5} y={13} onLetterDrop={onLetterDrop} bonus={BONUS.LSx3} />,
      <Tile key={key++} x={6} y={13} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={7} y={13} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={8} y={13} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={9} y={13} onLetterDrop={onLetterDrop} bonus={BONUS.LSx3} />,
      <Tile key={key++} x={10} y={13} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={11} y={13} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={12} y={13} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={13} y={13} onLetterDrop={onLetterDrop} bonus={BONUS.WSx2} />,
      <Tile key={key++} x={14} y={13} onLetterDrop={onLetterDrop} />,
    ],

    [
      <Tile key={key++} x={0} y={14} onLetterDrop={onLetterDrop} bonus={BONUS.WSx3} />,
      <Tile key={key++} x={1} y={14} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={2} y={14} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={3} y={14} onLetterDrop={onLetterDrop} bonus={BONUS.LSx2} />,
      <Tile key={key++} x={4} y={14} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={5} y={14} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={6} y={14} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={7} y={14} onLetterDrop={onLetterDrop} bonus={BONUS.WSx3} />,
      <Tile key={key++} x={8} y={14} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={9} y={14} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={10} y={14} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={11} y={14} onLetterDrop={onLetterDrop} bonus={BONUS.LSx2} />,
      <Tile key={key++} x={12} y={14} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={13} y={14} onLetterDrop={onLetterDrop} />,
      <Tile key={key++} x={14} y={14} onLetterDrop={onLetterDrop} bonus={BONUS.WSx3} />
    ]
  ];
};

export function initLetters(): LetterObj[] {

  let id = 1;

  return [
    new LetterObj(id++, 'A', 1),
    new LetterObj(id++, 'A', 1),
    new LetterObj(id++, 'A', 1),
    new LetterObj(id++, 'A', 1),
    new LetterObj(id++, 'A', 1),
    new LetterObj(id++, 'A', 1),
    new LetterObj(id++, 'A', 1),
    new LetterObj(id++, 'A', 1),
    new LetterObj(id++, 'A', 1),

    new LetterObj(id++, 'B', 3),
    new LetterObj(id++, 'B', 3),

    new LetterObj(id++, 'C', 3),
    new LetterObj(id++, 'C', 3),

    new LetterObj(id++, 'D', 2),
    new LetterObj(id++, 'D', 2),
    new LetterObj(id++, 'D', 2),
    new LetterObj(id++, 'D', 2),

    new LetterObj(id++, 'E', 1),
    new LetterObj(id++, 'E', 1),
    new LetterObj(id++, 'E', 1),
    new LetterObj(id++, 'E', 1),
    new LetterObj(id++, 'E', 1),
    new LetterObj(id++, 'E', 1),
    new LetterObj(id++, 'E', 1),
    new LetterObj(id++, 'E', 1),
    new LetterObj(id++, 'E', 1),
    new LetterObj(id++, 'E', 1),
    new LetterObj(id++, 'E', 1),
    new LetterObj(id++, 'E', 1),

    new LetterObj(id++, 'F', 4),
    new LetterObj(id++, 'F', 4),

    new LetterObj(id++, 'G', 3),
    new LetterObj(id++, 'G', 3),
    new LetterObj(id++, 'G', 3),

    new LetterObj(id++, 'H', 4),
    new LetterObj(id++, 'H', 4),

    new LetterObj(id++, 'I', 1),
    new LetterObj(id++, 'I', 1),
    new LetterObj(id++, 'I', 1),
    new LetterObj(id++, 'I', 1),
    new LetterObj(id++, 'I', 1),
    new LetterObj(id++, 'I', 1),
    new LetterObj(id++, 'I', 1),
    new LetterObj(id++, 'I', 1),
    new LetterObj(id++, 'I', 1),

    new LetterObj(id++, 'J', 9),

    new LetterObj(id++, 'K', 5),

    new LetterObj(id++, 'L', 1),
    new LetterObj(id++, 'L', 1),
    new LetterObj(id++, 'L', 1),
    new LetterObj(id++, 'L', 1),

    new LetterObj(id++, 'M', 3),
    new LetterObj(id++, 'M', 3),

    new LetterObj(id++, 'N', 1),
    new LetterObj(id++, 'N', 1),
    new LetterObj(id++, 'N', 1),
    new LetterObj(id++, 'N', 1),
    new LetterObj(id++, 'N', 1),
    new LetterObj(id++, 'N', 1),

    new LetterObj(id++, 'O', 1),
    new LetterObj(id++, 'O', 1),
    new LetterObj(id++, 'O', 1),
    new LetterObj(id++, 'O', 1),
    new LetterObj(id++, 'O', 1),
    new LetterObj(id++, 'O', 1),
    new LetterObj(id++, 'O', 1),
    new LetterObj(id++, 'O', 1),

    new LetterObj(id++, 'P', 3),
    new LetterObj(id++, 'P', 3),

    new LetterObj(id++, 'Q', 10),

    new LetterObj(id++, 'R', 1),
    new LetterObj(id++, 'R', 1),
    new LetterObj(id++, 'R', 1),
    new LetterObj(id++, 'R', 1),
    new LetterObj(id++, 'R', 1),
    new LetterObj(id++, 'R', 1),

    new LetterObj(id++, 'S', 1),
    new LetterObj(id++, 'S', 1),
    new LetterObj(id++, 'S', 1),
    new LetterObj(id++, 'S', 1),

    new LetterObj(id++, 'T', 1),
    new LetterObj(id++, 'T', 1),
    new LetterObj(id++, 'T', 1),
    new LetterObj(id++, 'T', 1),
    new LetterObj(id++, 'T', 1),
    new LetterObj(id++, 'T', 1),

    new LetterObj(id++, 'U', 1),
    new LetterObj(id++, 'U', 1),
    new LetterObj(id++, 'U', 1),
    new LetterObj(id++, 'U', 1),

    new LetterObj(id++, 'V', 4),
    new LetterObj(id++, 'V', 4),

    new LetterObj(id++, 'W', 4),
    new LetterObj(id++, 'W', 4),

    new LetterObj(id++, 'X', 8),

    new LetterObj(id++, 'Y', 4),
    new LetterObj(id++, 'Y', 4),

    new LetterObj(id++, 'Z', 10),

    new LetterObj(id++, '', 0),
    new LetterObj(id++, '', 0)
  ];
};