import LetterObj from 'model/LetterObj';
import { PLAYER_COLOR } from 'model/PlayerObj';
import type { NextApiRequest, NextApiResponse } from 'next'

// think about this some more. should most of the state exist directly on the server ??
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

  // res.status(200).json({ winnerId: undefined, boardState: new Map() })
};