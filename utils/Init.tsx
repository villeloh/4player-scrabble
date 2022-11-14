import LetterObj from 'model/LetterObj';
import TileObj, { BONUS } from 'model/TileObj';

export function initTiles(): TileObj[][] {

  let id = 1;
  let y = 0;

  return [
    [
      new TileObj(id++, 0, y, BONUS.WSx3),
      new TileObj(id++, 1, y),
      new TileObj(id++, 2, y),
      new TileObj(id++, 3, y, BONUS.LSx2),
      new TileObj(id++, 4, y),
      new TileObj(id++, 5, y),
      new TileObj(id++, 6, y),
      new TileObj(id++, 7, y, BONUS.WSx3),
      new TileObj(id++, 8, y),
      new TileObj(id++, 9, y),
      new TileObj(id++, 10, y),
      new TileObj(id++, 11, y, BONUS.LSx2),
      new TileObj(id++, 12, y),
      new TileObj(id++, 13, y),
      new TileObj(id++, 14, y, BONUS.WSx3)
    ],

    [
      new TileObj(id++, 0, ++y),
      new TileObj(id++, 1, y, BONUS.WSx2),
      new TileObj(id++, 2, y),
      new TileObj(id++, 3, y),
      new TileObj(id++, 4, y),
      new TileObj(id++, 5, y, BONUS.LSx3),
      new TileObj(id++, 6, y),
      new TileObj(id++, 7, y),
      new TileObj(id++, 8, y),
      new TileObj(id++, 9, y, BONUS.LSx3),
      new TileObj(id++, 10, y),
      new TileObj(id++, 11, y),
      new TileObj(id++, 12, y),
      new TileObj(id++, 13, y, BONUS.WSx2),
      new TileObj(id++, 14, y)
    ],

    [
      new TileObj(id++, 0, ++y),
      new TileObj(id++, 1, y),
      new TileObj(id++, 2, y, BONUS.WSx2),
      new TileObj(id++, 3, y),
      new TileObj(id++, 4, y),
      new TileObj(id++, 5, y),
      new TileObj(id++, 6, y, BONUS.LSx2),
      new TileObj(id++, 7, y),
      new TileObj(id++, 8, y, BONUS.LSx2),
      new TileObj(id++, 9, y),
      new TileObj(id++, 10, y),
      new TileObj(id++, 11, y),
      new TileObj(id++, 12, y, BONUS.WSx2),
      new TileObj(id++, 13, y),
      new TileObj(id++, 14, y)
    ],

    [
      new TileObj(id++, 0, ++y, BONUS.LSx2),
      new TileObj(id++, 1, y),
      new TileObj(id++, 2, y),
      new TileObj(id++, 3, y, BONUS.WSx2),
      new TileObj(id++, 4, y),
      new TileObj(id++, 5, y),
      new TileObj(id++, 6, y),
      new TileObj(id++, 7, y, BONUS.LSx2),
      new TileObj(id++, 8, y),
      new TileObj(id++, 9, y),
      new TileObj(id++, 10, y),
      new TileObj(id++, 11, y, BONUS.WSx2),
      new TileObj(id++, 12, y),
      new TileObj(id++, 13, y),
      new TileObj(id++, 14, y, BONUS.LSx2)
    ],

    [
      new TileObj(id++, 0, ++y),
      new TileObj(id++, 1, y),
      new TileObj(id++, 2, y),
      new TileObj(id++, 3, y),
      new TileObj(id++, 4, y, BONUS.WSx2),
      new TileObj(id++, 5, y),
      new TileObj(id++, 6, y),
      new TileObj(id++, 7, y),
      new TileObj(id++, 8, y),
      new TileObj(id++, 9, y),
      new TileObj(id++, 10, y, BONUS.WSx2),
      new TileObj(id++, 11, y),
      new TileObj(id++, 12, y),
      new TileObj(id++, 13, y),
      new TileObj(id++, 14, y)
    ],

    [
      new TileObj(id++, 0, ++y),
      new TileObj(id++, 1, y, BONUS.LSx3),
      new TileObj(id++, 2, y),
      new TileObj(id++, 3, y),
      new TileObj(id++, 4, y),
      new TileObj(id++, 5, y, BONUS.LSx3),
      new TileObj(id++, 6, y),
      new TileObj(id++, 7, y),
      new TileObj(id++, 8, y),
      new TileObj(id++, 9, y, BONUS.LSx3),
      new TileObj(id++, 10, y),
      new TileObj(id++, 11, y),
      new TileObj(id++, 12, y),
      new TileObj(id++, 13, y, BONUS.LSx3),
      new TileObj(id++, 14, y)
    ],

    [
      new TileObj(id++, 0, ++y),
      new TileObj(id++, 1, y),
      new TileObj(id++, 2, y, BONUS.LSx2),
      new TileObj(id++, 3, y),
      new TileObj(id++, 4, y),
      new TileObj(id++, 5, y),
      new TileObj(id++, 6, y, BONUS.LSx2),
      new TileObj(id++, 7, y),
      new TileObj(id++, 8, y, BONUS.LSx2),
      new TileObj(id++, 9, y),
      new TileObj(id++, 10, y),
      new TileObj(id++, 11, y),
      new TileObj(id++, 12, y, BONUS.LSx2),
      new TileObj(id++, 13, y),
      new TileObj(id++, 14, y)
    ],

    [
      new TileObj(id++, 0, ++y, BONUS.WSx3),
      new TileObj(id++, 1, y),
      new TileObj(id++, 2, y),
      new TileObj(id++, 3, y, BONUS.LSx2),
      new TileObj(id++, 4, y),
      new TileObj(id++, 5, y),
      new TileObj(id++, 6, y),
      new TileObj(id++, 7, y, BONUS.CENTER),
      new TileObj(id++, 8, y),
      new TileObj(id++, 9, y),
      new TileObj(id++, 10, y),
      new TileObj(id++, 11, y, BONUS.LSx2),
      new TileObj(id++, 12, y),
      new TileObj(id++, 13, y),
      new TileObj(id++, 14, y, BONUS.WSx3)
    ],

    [
      new TileObj(id++, 0, ++y),
      new TileObj(id++, 1, y),
      new TileObj(id++, 2, y, BONUS.LSx2),
      new TileObj(id++, 3, y),
      new TileObj(id++, 4, y),
      new TileObj(id++, 5, y),
      new TileObj(id++, 6, y, BONUS.LSx2),
      new TileObj(id++, 7, y),
      new TileObj(id++, 8, y, BONUS.LSx2),
      new TileObj(id++, 9, y),
      new TileObj(id++, 10, y),
      new TileObj(id++, 11, y),
      new TileObj(id++, 12, y, BONUS.LSx2),
      new TileObj(id++, 13, y),
      new TileObj(id++, 14, y)
    ],

    [
      new TileObj(id++, 0, ++y),
      new TileObj(id++, 1, y, BONUS.LSx3),
      new TileObj(id++, 2, y),
      new TileObj(id++, 3, y),
      new TileObj(id++, 4, y),
      new TileObj(id++, 5, y, BONUS.LSx3),
      new TileObj(id++, 6, y),
      new TileObj(id++, 7, y),
      new TileObj(id++, 8, y),
      new TileObj(id++, 9, y, BONUS.LSx3),
      new TileObj(id++, 10, y),
      new TileObj(id++, 11, y),
      new TileObj(id++, 12, y),
      new TileObj(id++, 13, y, BONUS.LSx3),
      new TileObj(id++, 14, y)
    ],

    [
      new TileObj(id++, 0, ++y),
      new TileObj(id++, 1, y),
      new TileObj(id++, 2, y),
      new TileObj(id++, 3, y),
      new TileObj(id++, 4, y, BONUS.WSx2),
      new TileObj(id++, 5, y),
      new TileObj(id++, 6, y),
      new TileObj(id++, 7, y),
      new TileObj(id++, 8, y),
      new TileObj(id++, 9, y),
      new TileObj(id++, 10, y, BONUS.WSx2),
      new TileObj(id++, 11, y),
      new TileObj(id++, 12, y),
      new TileObj(id++, 13, y),
      new TileObj(id++, 14, y)
    ],

    [
      new TileObj(id++, 0, ++y, BONUS.LSx2),
      new TileObj(id++, 1, y),
      new TileObj(id++, 2, y),
      new TileObj(id++, 3, y, BONUS.WSx2),
      new TileObj(id++, 4, y),
      new TileObj(id++, 5, y),
      new TileObj(id++, 6, y),
      new TileObj(id++, 7, y, BONUS.LSx2),
      new TileObj(id++, 8, y),
      new TileObj(id++, 9, y),
      new TileObj(id++, 10, y),
      new TileObj(id++, 11, y, BONUS.WSx2),
      new TileObj(id++, 12, y),
      new TileObj(id++, 13, y),
      new TileObj(id++, 14, y, BONUS.LSx2)
    ],

    [
      new TileObj(id++, 0, ++y),
      new TileObj(id++, 1, y),
      new TileObj(id++, 2, y, BONUS.WSx2),
      new TileObj(id++, 3, y),
      new TileObj(id++, 4, y),
      new TileObj(id++, 5, y),
      new TileObj(id++, 6, y, BONUS.LSx2),
      new TileObj(id++, 7, y),
      new TileObj(id++, 8, y, BONUS.LSx2),
      new TileObj(id++, 9, y),
      new TileObj(id++, 10, y),
      new TileObj(id++, 11, y),
      new TileObj(id++, 12, y, BONUS.WSx2),
      new TileObj(id++, 13, y),
      new TileObj(id++, 14, y)
    ],

    [
      new TileObj(id++, 0, ++y),
      new TileObj(id++, 1, y, BONUS.WSx2),
      new TileObj(id++, 2, y),
      new TileObj(id++, 3, y),
      new TileObj(id++, 4, y),
      new TileObj(id++, 5, y, BONUS.LSx3),
      new TileObj(id++, 6, y),
      new TileObj(id++, 7, y),
      new TileObj(id++, 8, y),
      new TileObj(id++, 9, y, BONUS.LSx3),
      new TileObj(id++, 10, y),
      new TileObj(id++, 11, y),
      new TileObj(id++, 12, y),
      new TileObj(id++, 13, y, BONUS.WSx2),
      new TileObj(id++, 14, y)
    ],

    [
      new TileObj(id++, 0, ++y, BONUS.WSx3),
      new TileObj(id++, 1, y),
      new TileObj(id++, 2, y),
      new TileObj(id++, 3, y, BONUS.LSx2),
      new TileObj(id++, 4, y),
      new TileObj(id++, 5, y),
      new TileObj(id++, 6, y),
      new TileObj(id++, 7, y, BONUS.WSx3),
      new TileObj(id++, 8, y),
      new TileObj(id++, 9, y),
      new TileObj(id++, 10, y),
      new TileObj(id++, 11, y, BONUS.LSx2),
      new TileObj(id++, 12, y),
      new TileObj(id++, 13, y),
      new TileObj(id++, 14, y, BONUS.WSx3)
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