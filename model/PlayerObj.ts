import LetterObj from "./LetterObj";

// Server-side object that is kept in memory
export default class PlayerObj {

  readonly id: number;
  private _score: number = 0;
  private _hasTurn: boolean;
  private _letters: LetterObj[];

  constructor(id: number, hasTurn: boolean = false, letters: LetterObj[]) {
    this.id = id;
    this._hasTurn = hasTurn;
    this._letters = letters;
  }

  get hasTurn(): boolean {
    return this._hasTurn;
  }

  startTurn() {
    this._hasTurn = true;
  }

  passTurnTo(playerId: number) {
    this._hasTurn = false;
    // TODO: use websocket to pass the turn onwards
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