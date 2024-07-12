const {
  constant: {
    CHESS_PIECE_POSITION: { MINIMUM_POSITION, MID_POSITION }
  }
} = require('../utils');

module.exports = (position) => {
  const chessPositionArray = position.split('');
  const [positionSubString1, positionSubString2] = chessPositionArray;

  // position between 1 - 4  add 1 for forward direction movement
  const positionSubString2NumberVal = Number(positionSubString2);
  if ((positionSubString2NumberVal >= MINIMUM_POSITION) && (positionSubString2NumberVal <= MID_POSITION)) {
    return `${positionSubString1}${positionSubString2NumberVal + MINIMUM_POSITION}`;
  }

  // position between 5 - 8 subtract 1 for forward direction movement
  return `${positionSubString1}${positionSubString2NumberVal - MINIMUM_POSITION}`;
};
