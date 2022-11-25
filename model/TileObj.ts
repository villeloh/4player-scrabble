
// we need to differentiate the values, because they're just naked numbers
export enum BONUS {
  NONE = 1,
  WSx2 = 20, // word score x 2
  WSx3 = 30,
  LSx2 = 2, // letter score x 2
  LSx3 = 3,
  CENTER = 40 // word score x 2; set to 40 because js enums suuuuuck
}

export default class TileObj {

  readonly id: number;
  readonly bonus: BONUS;

  constructor(
    id: number,
    bonus: BONUS = BONUS.NONE) {
    this.id = id;
    this.bonus = bonus;
  }
};