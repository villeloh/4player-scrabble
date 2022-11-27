
export default class LetterObj {

  readonly id: number;
  readonly char: string;
  readonly value: number;
  readonly isClickable: boolean;
  readonly isCharLocked: boolean; // set to true for 'played', formerly blank letters

  constructor(
    id: number,
    char: string,
    value: number,
    isClickable: boolean = false,
    isCharLocked: boolean = false
  ) {
    this.id = id;
    this.char = char;
    this.value = value;
    this.isClickable = isClickable;
    this.isCharLocked = isCharLocked;
  }
};