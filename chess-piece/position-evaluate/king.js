const {
  constant: {
    CHESS_PIECE_POSITION: {
      MINIMUM_ASCII_VALUE, MAXIMUM_ASCII_VALUE, MINIMUM_POSITION, MAX_POSITION
    }
  }
} = require('../../utils');

module.exports = (position) => {
  const chessPositionArray = position.split('');
  const [positionSubString1, positionSubString2] = chessPositionArray;
  let chessStartPositionArray = [positionSubString1];
  const positionSubString2NumberVal = Number(positionSubString2);
  const positionSubString1AsciiValue = positionSubString1.toUpperCase().charCodeAt();

  // Add left side if start position is valid
  if (MINIMUM_ASCII_VALUE[0] < positionSubString1AsciiValue) {
    chessStartPositionArray = [
      String.fromCharCode(positionSubString1AsciiValue - MINIMUM_POSITION),
      ...chessStartPositionArray
    ];
  }

  // Add right side if start position is valid
  if (MAXIMUM_ASCII_VALUE[0] > positionSubString1AsciiValue) {
    chessStartPositionArray = [
      ...chessStartPositionArray,
      String.fromCharCode(positionSubString1AsciiValue + MINIMUM_POSITION)
    ];
  }

  return chessStartPositionArray.reduce((acc, curr) => {
    // left side of position
    if (MINIMUM_POSITION < positionSubString2NumberVal) {
      // eslint-disable-next-line no-param-reassign
      acc = [...acc, `${curr}${positionSubString2NumberVal - MINIMUM_POSITION}`];
    }

    // same element need to be skipped which is input position
    if (positionSubString1 !== curr) {
      // eslint-disable-next-line no-param-reassign
      acc = [...acc, `${curr}${positionSubString2NumberVal}`];
    }

    // right side of position
    if (positionSubString2NumberVal < MAX_POSITION) {
      // eslint-disable-next-line no-param-reassign
      acc = [...acc, `${curr}${positionSubString2NumberVal + MINIMUM_POSITION}`];
    }
    return acc;
  }, []);
};
