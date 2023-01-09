
export default class WordResult {

  readonly word: string;
  readonly points: number;

  constructor(word: string, points: number) {
    this.word = word;
    this.points = points;
  }

  toString() {
    return `WordResult: word ${this.word}, points ${this.points}`;
  }
};