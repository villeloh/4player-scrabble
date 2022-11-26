import PlayerOrder from "model/PlayerOrder";
import PlayerObj from "./PlayerObj";

enum GameState {
  WAIT_FOR_PLAYERS,
  WAIT_FOR_CREATOR_OK,
  IN_PROGRESS,
  ENDED
}

// Server-side object that is kept in memory
export default class Game {

  static readonly MIN_PLAYERS = 2;
  static readonly MAX_PLAYERS = 4;

  private _players: PlayerObj[] = [];
  private _playerOrder?: PlayerOrder;
  private _activePlayer?: PlayerObj;

  private _gameState: GameState = GameState.WAIT_FOR_PLAYERS;

  constructor(creator: PlayerObj) {

    this.addPlayer(creator);
  }

  start() {

    if (this._players.length < Game.MIN_PLAYERS) return;

    this._playerOrder = new PlayerOrder(this._players);

    this._gameState = GameState.IN_PROGRESS;

    const startingPlayersId = this._playerOrder.startingPlayersId();
    this._activePlayer = this._players.find(player => { return player.id === startingPlayersId });
    this._activePlayer?.startTurn();
  }

  advanceTurn() {

    this._activePlayer?.endTurn();

    const nextPlayersId = this._playerOrder?.nextPlayersId();
    this._activePlayer = this._players.find(player => { return player.id === nextPlayersId });
    this._activePlayer?.startTurn();
  }

  end() {

    this._gameState = GameState.ENDED;
    this._activePlayer = undefined;
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

  get activePlayer(): PlayerObj | undefined {
    return this._activePlayer;
  }

  set activePlayer(player: PlayerObj | undefined) {
    this._activePlayer = player;
  }

  get gameState(): GameState {
    return this._gameState;
  }

  set gameState(newState: GameState) {
    this._gameState = newState;
  }
};