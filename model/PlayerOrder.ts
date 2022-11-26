import PlayerObj from "model/PlayerObj";

export default class PlayerOrder {

  private _index: number = 0;
  private _ids: number[];

  constructor(players: PlayerObj[]) {
    const ids = players.map(player => player.id);

    // random order
    this._ids = ids
      .map(id => ({ id: id, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ id }) => id);
  }

  startingPlayersId(): number {
    return this._ids[0];
  }

  nextPlayersId(): number {

    if (this._index >= this._ids.length) {
      this._index = 0;
    }
    return this._ids[this._index++];
  }

  removePlayerId(idOfPlayerToRemove: number) {
    this._ids = this._ids.filter(id => { return id !== idOfPlayerToRemove });
  }
};