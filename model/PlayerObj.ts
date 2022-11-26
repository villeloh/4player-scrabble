import LetterObj from "./LetterObj";

export enum PLAYER_COLOR {
  BLUE = 'blue',
  GREEN = 'green',
  RED = 'red',
  YELLOW = 'yellow'
};

// Server-side object that is kept in memory
export default class PlayerObj {

  readonly id: number;
  readonly name: string;
  private _score: number = 0;
  private _hasTurn: boolean;
  private _letters: LetterObj[];

  constructor(id: number, name: string = `Player ${id}`, hasTurn: boolean = false, letters: LetterObj[]) {
    this.id = id;
    this.name = name;
    this._hasTurn = hasTurn;
    this._letters = letters;
  }

  get hasTurn(): boolean {
    return this._hasTurn;
  }

  startTurn() {
    this._hasTurn = true;
  }

  endTurn() {
    this._hasTurn = false;
  }

  get letters(): LetterObj[] {
    return this._letters;
  }

  set letters(newLetters: LetterObj[]) {
    this._letters = newLetters;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    this._score = newScore;
  }
};