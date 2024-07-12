const {
  constant: {
    CHESS_PIECE_POSITION: {
      MAX_POSITION,
      MINIMUM_POSITION,
      MINIMUM_ASCII_VALUE,
      MAXIMUM_ASCII_VALUE
    }
  }
} = require('../utils');

module.exports = (position) => {
  const chessPositionArray = position.split('');
  const [positionSubString1, positionSubString2] = chessPositionArray;
  const positionSubString2NumberVal = Number(positionSubString2);
  const positionSubString1AsciiValue = positionSubString1.toUpperCase().charCodeAt();

  // a - h of positionSubString2 element
  const sameElementSeriesArr1 = [];
  for (let index = MINIMUM_ASCII_VALUE[0]; index <= MAXIMUM_ASCII_VALUE[0]; index += 1) {
    const val = String.fromCharCode(index);
    if (positionSubString1AsciiValue !== index) {
      sameElementSeriesArr1.push(`${val}${positionSubString2NumberVal}`);
    }
  }

  // positionSubString1 all position series (1 - 8) except input position
  const sameElementSeriesArr2 = [];
  for (let index = 0; index < MAX_POSITION; index += 1) {
    if (positionSubString2NumberVal !== index + MINIMUM_POSITION) {
      sameElementSeriesArr2.push(`${positionSubString1}${index + MINIMUM_POSITION}`);
    }
  }

  // Diagonally left side element

  // Diagonally right side element

  return [...sameElementSeriesArr1, ...sameElementSeriesArr2];
};
