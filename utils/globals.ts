
export const APP_TITLE = '4-P Scrabble';

export const MIN_GAME_PW_LENGTH = 6;
export const MAX_GAME_PW_LENGTH = 20;
export const MIN_GAME_NAME_LENGTH = 4;
export const MAX_GAME_NAME_LENGTH = 20;

// a limit on the consumed bandwidth (in case of bots etc)
export const MAX_SERVER_GAMES = 20;

// TODO: the colors of Letters and some other things should be moved here as well, 
// but there seem to be some Tailwind bugs that mess with that
export const STYLES = {

  btnColorDefault: 'bg-slate-400',
  btnColorGreen: 'bg-green-500',
  btnColorCancel: 'bg-red-400',
  btnColorDisabled: 'bg-gray-300',

  playerColors: new Map<string, PlayerColors>([
    ['BLUE', { main: 'bg-blue-300', secondary: 'border-blue-400' }],
    ['YELLOW', { main: 'bg-yellow-300', secondary: 'border-yellow-400' }],
    ['GREEN', { main: 'bg-green-300', secondary: 'border-green-400' }],
    ['RED', { main: 'bg-red-300', secondary: 'border-red-400' }]]
  )
};

export type PlayerColors = {
  main: string;
  secondary: string;
};