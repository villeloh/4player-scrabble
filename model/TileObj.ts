import LetterObj from "./LetterObj";

// we need to differentiate the values, because they're just naked numbers
export enum BONUS {
  NONE = 1,
  WSx2 = 20, // word score x 2
  WSx3 = 30,
  LSx2 = 2, // letter score x 2
  LSx3 = 3,
  CENTER = 20
}

export default class TileObj {

  readonly id: number;
  readonly bonus: BONUS;
  readonly letter?: LetterObj;

  constructor(
    id: number,
    bonus: BONUS = BONUS.NONE,
    letter?: LetterObj) {

    this.id = id;
    this.bonus = bonus;
    this.letter = letter;
  }
};