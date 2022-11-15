
export default class LetterObj {

  id: number;
  char: string;
  value: number;
  isClickable: boolean;
  isRacked: boolean;
  isSelected: boolean;

  constructor(
    id: number,
    char: string,
    value: number,
    isClickable?: boolean,
    isRacked?: boolean,
    isSelected?: boolean
  ) {
    this.id = id;
    this.char = char;
    this.value = value;
    this.isClickable = isClickable || false;
    this.isRacked = isRacked || false;
    this.isSelected = isSelected || false;
  }
};