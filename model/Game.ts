import PlayerObj from "./PlayerObj";

export default class Game {

  static readonly MIN_PLAYERS = 2;
  static readonly MAX_PLAYERS = 4;

  private _players: PlayerObj[] = [];

  constructor(creator: PlayerObj) {

    this.addPlayer(creator);
  }

  get players(): PlayerObj[] {
    return this._players;
  }

  addPlayer(player: PlayerObj) {

    if (this._players.length === Game.MAX_PLAYERS) return;

    this._players.push(player);
  }

  removePlayer(playerId: number) {
    this._players = this._players.filter(player => { return player.id !== playerId });
  }

  numOfPlayers(): number {
    return this._players.length;
  }
};