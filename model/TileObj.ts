
export const MULTIPLIER: Record<TileBonus, number> = {
  NONE: 1,
  WSx2: 2,
  WSx3: 3,
  LSx2: 2,
  LSx3: 3,
  CENTER: 2
};

export type TileBonus = 'NONE' | 'WSx2' | 'WSx3' | 'LSx2' | 'LSx3' | 'CENTER';

export default class TileObj {

  readonly id: number;
  readonly bonus: TileBonus;

  constructor(
    id: number,
    bonus: TileBonus = 'NONE') {
    this.id = id;
    this.bonus = bonus;
  }
};