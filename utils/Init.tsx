import LetterObj from 'model/LetterObj';
import TileObj, { BONUS } from 'model/TileObj';

export function initTiles(): Map<number, TileObj> {

  let id = 0;

  const tiles = new Map<number, TileObj>();

  tiles.set(id, new TileObj(id, BONUS.WSx3));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.LSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.WSx3));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.LSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.WSx3));

  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.WSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.LSx3));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.LSx3));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.WSx2));
  tiles.set(++id, new TileObj(id));

  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.WSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.LSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.LSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.WSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));

  tiles.set(++id, new TileObj(id, BONUS.LSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.WSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.LSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.WSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.LSx2));

  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.WSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.WSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));

  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.LSx3));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.LSx3));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.LSx3));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.LSx3));
  tiles.set(++id, new TileObj(id));

  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.LSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.LSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.LSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.LSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));

  tiles.set(++id, new TileObj(id, BONUS.WSx3));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.LSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.CENTER));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.LSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.WSx3));

  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.LSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.LSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.LSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.LSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));

  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.LSx3));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.LSx3));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.LSx3));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.LSx3));
  tiles.set(++id, new TileObj(id));

  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.WSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.WSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));

  tiles.set(++id, new TileObj(id, BONUS.LSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.WSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.LSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.WSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.LSx2));

  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.WSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.LSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.LSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.WSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));

  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.WSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.LSx3));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.LSx3));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.WSx2));
  tiles.set(++id, new TileObj(id));

  tiles.set(++id, new TileObj(id, BONUS.WSx3));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.LSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.WSx3));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.LSx2));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id));
  tiles.set(++id, new TileObj(id, BONUS.WSx3));

  return tiles;
};

export function initLetters(): LetterObj[] {

  let id = 300; // to stop conflict with Tiles when using them as React keys

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