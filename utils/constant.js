const INPUT_PARAMS_LENGTH = 4;

const CHESS_PIECE_TYPE = {
  PAWN: 'pawn',
  KING: 'king',
  QUEEN: 'queen'
};

const CHESS_PIECE_POSITION = {
  MINIMUM_POSITION_LENGTH: 2,
  MINIMUM_ASCII_VALUE: [65, 49],
  MAXIMUM_ASCII_VALUE: [72, 56],
  MINIMUM_POSITION: 1,
  MID_POSITION: 4,
  MAX_POSITION: 8
};

const FLOW_STATUS = {
  SUCCESS: 'success',
  FAILURE: 'failure'
};

const CHESS_BOARD_CONFIGURATION = {
  COLUMN: {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7
  }
};

module.exports = {
  INPUT_PARAMS_LENGTH,
  CHESS_PIECE_TYPE,
  CHESS_PIECE_POSITION,
  FLOW_STATUS,
  CHESS_BOARD_CONFIGURATION
};
