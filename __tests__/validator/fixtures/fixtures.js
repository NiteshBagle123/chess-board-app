const INPUT_MISSING = {
  INPUT: [
    'node_executable',
    'js file path'
  ],
  OUTPUT: {
    // eslint-disable-next-line max-len
    message: 'Please provide input in terminal with format node <file_name> <type> <position> for example: nodejs index.js pawn A1',
    status: 'failure'
  }
};

const INPUT_INVALID = {
  INPUT: [
    'node_executable',
    'js file path',
    'test',
    'test1'
  ],
  OUTPUT: {
    message: 'Please provide valid chess piece type like pawn, king or queen',
    status: 'failure'
  }
};

const CHESS_POSITION_INVALID = {
  INPUT: [
    'node_executable',
    'js file path',
    'pawn',
    'a'
  ],
  OUTPUT: {
    // eslint-disable-next-line max-len
    message: 'Chess position: a value is invalid. Please provide valid chess position which starts from (A, B, ...H)(1,2 ...8) for example A1, H8',
    status: 'failure'
  }
};

const CHESS_START_POSITION_INVALID = {
  INPUT: [
    'node_executable',
    'js file path',
    'pawn',
    'x1'
  ],
  OUTPUT: {
    // eslint-disable-next-line max-len
    message: 'Chess position: x1 is invalid. It should starts with A, B, ..H as chessboard is an 8 x 8 grid with 64 cells in it',
    status: 'failure'
  }
};

const CHESS_END_POSITION_INVALID = {
  INPUT: [
    'node_executable',
    'js file path',
    'pawn',
    'A9'
  ],
  OUTPUT: {
    // eslint-disable-next-line max-len
    message: 'Chess position: A9 is invalid. It should ends with 1, 2, ..8 as chessboard is an 8 x 8 grid with 64 cells in it',
    status: 'failure'
  }
};
module.exports = {
  INPUT_MISSING,
  INPUT_INVALID,
  CHESS_POSITION_INVALID,
  CHESS_START_POSITION_INVALID,
  CHESS_END_POSITION_INVALID
};
