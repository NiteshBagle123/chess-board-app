const {
  CHESS_BOARD_CONFIGURATION: {
    COLUMN
  }
} = require('./constant');

const boardIndexToChessNotation = (row, column) => Object.keys(COLUMN)[column] + (8 - row);

module.exports = {
  boardIndexToChessNotation
};
