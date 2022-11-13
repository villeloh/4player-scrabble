
export default class LetterObj {

  id: number;
  char: string;
  value: number;
  draggable: boolean;

  constructor(
    id: number,
    char: string,
    value: number,
    draggable?: boolean
  ) {
    this.id = id;
    this.char = char;
    this.value = value;
    this.draggable = draggable ?? true;
  }
};