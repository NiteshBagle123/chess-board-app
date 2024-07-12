const INPUT_VALIDATOR_FAILURE = {
  // eslint-disable-next-line max-len
  message: 'Please provide input in terminal with format node <file_name> <type> <position> for example: nodejs index.js pawn A1',
  status: 'failure'
};

const PAWN_CHESS_PIECE = {
  INPUT: [
    'node_executable',
    'js file path',
    'pawn',
    'A1'
  ],
  OUTPUT: 'A2'
};

const KING_CHESS_PIECE = {
  INPUT: [
    'node_executable',
    'js file path',
    'king',
    'D5'
  ],
  OUTPUT: ['C4', 'C5', 'C6', 'D4', 'D6', 'E4', 'E5', 'E6']
};

const QUEEN_CHESS_PIECE = {
  INPUT: [
    'node_executable',
    'js file path',
    'queen',
    'E4'
  ],
  // eslint-disable-next-line max-len
  OUTPUT: ['A4', 'B4', 'C4', 'D4', 'F4', 'G4', 'H4', 'E1', 'E2', 'E3', 'E5', 'E6', 'E7', 'E8', 'A8', 'B7', 'C6', 'D5', 'F3', 'G2', 'H1', 'B1', 'C2', 'D3', 'F5', 'G6', 'H7']
};

module.exports = {
  INPUT_VALIDATOR_FAILURE,
  PAWN_CHESS_PIECE,
  KING_CHESS_PIECE,
  QUEEN_CHESS_PIECE
};
