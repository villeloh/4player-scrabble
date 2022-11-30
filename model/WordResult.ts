
export default class WordResult {

  readonly word: string;
  readonly points: number;

  constructor(word: string, points: number) {
    this.word = word;
    this.points = points;
  }

  // See note about fromString() before altering!
  toString() {
    return `WordResult: word ${this.word}, points ${this.points}`;
  }

  // Should be unnecessary if the new ValueSet works; delete eventually
  /*
  // NOTE: breaks if the toString() method is altered!
  private static fromString(str: string) {

    if (!str.includes('WordResult')) {
      throw new Error('Malformed string fed to WordResult.fromString()!');
    }
    const wordUntrimmed = str.match(/word\s[a-zA-Z]+/)![0];
    const word = wordUntrimmed.substring(5);
    const pointsUntrimmed = str.match(/points\s\d+/)![0];
    const points = pointsUntrimmed.substring(7);
    return new WordResult(word, +points);
  }

  // needed because JS Sets store objects by *reference*, not by value
  static removeDuplicateValues(set: Set<WordResult>): Set<WordResult> {

    const arr = [...set].map(wordResult => wordResult.toString());

    // remove duplicates with value comparison
    const uniqueStrSet = new Set(arr);

    return new Set([...uniqueStrSet].map(str => WordResult.fromString(str)));
  }; */
};