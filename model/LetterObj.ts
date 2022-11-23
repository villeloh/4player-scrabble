
export default class LetterObj {

  readonly id: number;
  readonly char: string;
  readonly value: number;
  readonly isClickable: boolean;

  constructor(
    id: number,
    char: string,
    value: number,
    isClickable: boolean = false
  ) {
    this.id = id;
    this.char = char;
    this.value = value;
    this.isClickable = isClickable;
  }
};