import LetterObj from "./LetterObj";

export enum PLAYER_COLOR {
  BLUE = 'blue',
  GREEN = 'green',
  RED = 'red',
  YELLOW = 'yellow'
};

// Server-side object that is kept in memory
export default class Player {

  readonly id: number;
  readonly name: string;
  readonly color: PLAYER_COLOR;
  private _score: number = 0;
  private _isActive: boolean;
  private _letters: LetterObj[]; // racked or set on the board

  constructor(id: number, name: string = `Player ${id}`, color: PLAYER_COLOR,
    isActive: boolean = false, letters: LetterObj[]
  ) {
    this.id = id;
    this.name = name;
    this.color = color;
    this._isActive = isActive;
    this._letters = letters;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  startTurn() {
    this._isActive = true;
  }

  endTurn() {
    this._isActive = false;
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