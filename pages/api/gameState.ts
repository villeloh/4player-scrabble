import LetterObj from 'model/LetterObj';
import { PLAYER_COLOR } from 'model/Player';
import type { NextApiRequest, NextApiResponse } from 'next'

// TODO: use a channel, websocket (etc) to constantly broadcast a 'hasTurn' boolean to all players.
// When it's true for someone, trigger a GET request for gameState

// TODO: Conversely, when a player's turn is over, make a POST request to the gameState endpoint
// with the relevant new game data

// think about this some more. should most of the state exist directly on the server ??
// OR: does server-side rendering mean that no request is needed to communicate it ??
type APIPlayer = {

  id: number;
  name: string;
  score: number;
  lettersInRack: number;
  color: PLAYER_COLOR;
};

type APIGameState = {
  boardState: Map<number, LetterObj>; // locked board letters
  winnerId?: number;
  player?: APIPlayer;
  otherPlayers?: APIPlayer[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIGameState>
) {
  const { method } = req;

  if (method === 'GET') {

  } else if (method === 'POST') {

  }

  // res.status(200).json({ boardState: new Map() })
};