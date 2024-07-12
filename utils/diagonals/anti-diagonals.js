const { boardIndexToChessNotation } = require('../utils');

module.exports = (row, column) => {
  let antiRow;
  let antiColumn;
  const antiDiagonal = [];
  antiRow = row - Math.min(row, 7 - column);
  antiColumn = column + Math.min(row, 7 - column);
  while (antiRow < 8 && antiColumn >= 0) {
    if (antiRow !== row || antiColumn !== column) {
      antiDiagonal.push(boardIndexToChessNotation(antiRow, antiColumn));
    }
    antiRow += 1;
    antiColumn -= 1;
  }

  return antiDiagonal;
};
