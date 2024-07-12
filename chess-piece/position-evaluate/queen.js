const {
  constant: {
    CHESS_PIECE_POSITION: {
      MAX_POSITION,
      MINIMUM_POSITION,
      MINIMUM_ASCII_VALUE,
      MAXIMUM_ASCII_VALUE
    },
    CHESS_BOARD_CONFIGURATION: {
      COLUMN
    }
  }
} = require('../../utils');

const { mainDiagonals, antiDiagonals } = require('../../utils');

module.exports = (position) => {
  const positionSubString1 = position.charAt(0);
  const positionSubString2 = position.charAt(1);
  const positionSubString2NumberVal = Number(positionSubString2);
  const positionSubString1AsciiValue = positionSubString1
    .toUpperCase()
    .charCodeAt();

  // Step 1 - A - H of positionSubString2 element with same position number
  const sameElementSeriesArr1 = [];
  for (
    let index = MINIMUM_ASCII_VALUE[0];
    index <= MAXIMUM_ASCII_VALUE[0];
    index += 1
  ) {
    const val = String.fromCharCode(index);
    if (positionSubString1AsciiValue !== index) {
      sameElementSeriesArr1.push(`${val}${positionSubString2NumberVal}`);
    }
  }

  // Step 2 - A - H of positionSubString1 all position series (1 - 8) except input position
  const sameElementSeriesArr2 = [];
  for (let index = 0; index < MAX_POSITION; index += 1) {
    if (positionSubString2NumberVal !== index + MINIMUM_POSITION) {
      sameElementSeriesArr2.push(
        `${positionSubString1}${index + MINIMUM_POSITION}`
      );
    }
  }

  // Evaluate position for row and column
  const column = COLUMN[position.charAt(0)];
  const row = 8 - parseInt(position.charAt(1), 10);

  // Step 3 - Calculate main diagonal elements
  const mainDiagonalResponse = mainDiagonals(row, column);

  // Step 4 - Calculate anti-diagonal elements
  const antiDiagonalResponse = antiDiagonals(row, column);

  return [
    ...sameElementSeriesArr1,
    ...sameElementSeriesArr2,
    ...mainDiagonalResponse,
    ...antiDiagonalResponse.reverse()
  ];
};
