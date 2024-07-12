const { boardIndexToChessNotation } = require('../utils');

module.exports = (row, column) => {
  let mainRow;
  let mainColumn;
  const mainDiagonal = [];
  mainRow = row - Math.min(row, column);
  mainColumn = column - Math.min(row, column);

  while (mainRow < 8 && mainColumn < 8) {
    if (mainRow !== row || mainColumn !== column) {
      mainDiagonal.push(boardIndexToChessNotation(mainRow, mainColumn));
    }
    mainRow += 1;
    mainColumn += 1;
  }

  return mainDiagonal;
};
