import PlayerOrder from "model/PlayerOrder";
import Player from "./Player";

enum GameState {
  WAIT_FOR_PLAYERS,
  IN_PROGRESS,
  ENDED
}

// Server-side object that is kept in memory
export default class Game {

  private static readonly _MIN_PLAYERS = 2;
  private static readonly _MAX_PLAYERS = 4;

  // TODO: could the new TS accessor syntax be used here?
  private _players: Player[] = [];
  private _playerOrder?: PlayerOrder;
  private _activePlayer?: Player;

  private _gameState: GameState = GameState.WAIT_FOR_PLAYERS;

  constructor(creator: Player) {

    this.addPlayer(creator);
  }

  start() {

    if (this._players.length < Game._MIN_PLAYERS) return;

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
    this._activePlayer?.endTurn();
    this._activePlayer = undefined;
  }

  get players(): Player[] {
    return this._players;
  }

  addPlayer(player: Player) {

    if (this._players.length === Game._MAX_PLAYERS) return;

    this._players.push(player);
  }

  removePlayer(playerId: number) {
    this._players = this._players.filter(player => { return player.id !== playerId });
  }

  numOfPlayers(): number {
    return this._players.length;
  }

  get activePlayer(): Player | undefined {
    return this._activePlayer;
  }

  set activePlayer(player: Player | undefined) {
    this._activePlayer = player;
  }

  get gameState(): GameState {
    return this._gameState;
  }

  set gameState(newState: GameState) {
    this._gameState = newState;
  }
};