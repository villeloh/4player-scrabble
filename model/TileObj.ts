
enum Bonus {
  NONE,
  WSx2, // word score x 2
  WSx3,
  LSx2, // letter score x 2
  LSx3
}

export default class TileObj {

  bonus: Bonus;

  constructor(bonus: Bonus) {
    this.bonus = bonus;
  }
};