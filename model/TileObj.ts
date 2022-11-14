import LetterObj from "./LetterObj";

// it's convenient to let the enum store the img url
export enum BONUS {
  NONE = '/blank.jpg',
  WSx2 = '/WSx2.jpg', // word score x 2
  WSx3 = '/WSx3.jpg',
  LSx2 = '/LSx2.jpg', // letter score x 2
  LSx3 = '/LSx3.jpg',
  CENTER = '/center_star.jpg' // center WSx2 has a star graphic
}

export default class TileObj {

  id: number;
  x: number;
  y: number;
  bonus: BONUS;
  letter?: LetterObj;

  constructor(id: number, x: number, y: number, bonus?: BONUS, letter?: LetterObj) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.bonus = bonus ?? BONUS.NONE;
    this.letter = letter;
  }
};