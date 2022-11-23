
export default class WordResult {

  readonly value: string;
  readonly points: number;

  constructor(word: string, points: number) {
    this.value = word;
    this.points = points;
  }
};