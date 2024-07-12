const logger = require('../logger');

const {
  constant: {
    INPUT_PARAMS_LENGTH,
    CHESS_PIECE_TYPE: {
      PAWN,
      KING,
      QUEEN
    },
    CHESS_PIECE_POSITION: {
      MAXIMUM_ASCII_VALUE,
      MINIMUM_ASCII_VALUE,
      MINIMUM_POSITION_LENGTH
    },
    FLOW_STATUS: {
      SUCCESS,
      FAILURE
    }
  }
} = require('../utils');
const { CHESS_PIECE_TYPE } = require('../utils/constant');

module.exports = (processArgvParams) => {
  // validate input length from command line
  if (processArgvParams.length < INPUT_PARAMS_LENGTH) {
    // eslint-disable-next-line max-len
    const errorMessage = 'Please provide input in terminal with format node <file_name> <type> <position> for example: nodejs index.js pawn A1';
    logger.error(errorMessage);
    return {
      status: FAILURE,
      message: errorMessage
    };
  }

  const [, , type, position] = processArgvParams;
  // check for chess piece type
  if (!Object.values(CHESS_PIECE_TYPE).includes(type.toLowerCase())) {
    const errorMessage = `Please provide valid chess piece type like ${PAWN}, ${KING} or ${QUEEN}`;
    logger.error(errorMessage);
    return {
      status: FAILURE,
      message: errorMessage
    };
  }

  // check for chess piece position
  const chessPositionArray = position.split('');
  if (chessPositionArray.length < MINIMUM_POSITION_LENGTH) {
    // eslint-disable-next-line max-len
    const errorMessage = `Chess position: ${position} value is invalid. Please provide valid chess position which starts from (A, B, ...H)(1,2 ...8) for example A1, H8`;
    logger.error(errorMessage);
    return {
      status: FAILURE,
      message: errorMessage
    };
  }

  // check for chess piece position valid values
  const [positionSubString1, positionSubString2] = chessPositionArray;
  const positionSubString1AsciiValue = positionSubString1.toUpperCase().charCodeAt();
  const positionSubString2AsciiValue = positionSubString2.toUpperCase().charCodeAt();

  // check for chess piece position start valid values
  if (
    (MINIMUM_ASCII_VALUE[0] > positionSubString1AsciiValue)
    || (positionSubString1AsciiValue > MAXIMUM_ASCII_VALUE[0])
  ) {
    // eslint-disable-next-line max-len
    const errorMessage = `Chess position: ${position} is invalid. It should starts with A, B, ..H as chessboard is an 8 x 8 grid with 64 cells in it`;
    logger.error(errorMessage);
    return {
      status: FAILURE,
      message: errorMessage
    };
  }

  // check for chess piece position end valid values
  if (
    (MINIMUM_ASCII_VALUE[1] > positionSubString2AsciiValue)
    || (positionSubString2AsciiValue > MAXIMUM_ASCII_VALUE[1])
  ) {
    // eslint-disable-next-line max-len
    const errorMessage = `Chess position: ${position} is invalid. It should ends with 1, 2, ..8 as chessboard is an 8 x 8 grid with 64 cells in it`;
    logger.error(errorMessage);
    return {
      status: FAILURE,
      message: errorMessage
    };
  }

  return {
    status: SUCCESS,
    type: type.toLowerCase(),
    position
  };
};
