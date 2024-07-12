const { inputValidator } = require('../validator');
const {
  constant: {
    FLOW_STATUS: { FAILURE },
    CHESS_PIECE_TYPE: { PAWN, KING, QUEEN }
  }
} = require('../utils');
const {
  pawnPositionEvaluation,
  kingPositionEvaluation,
  queenPositionEvaluation
} = require('../chess-piece/position-evaluate');

module.exports = (processArgvParams) => {
  // Step 1: Validate input from user
  const inputValidatorResponse = inputValidator(processArgvParams);

  const { status, type, position } = inputValidatorResponse;
  if (status === FAILURE) {
    return status;
  }

  // Step 2: Type: Pawn and position: any (between A1 - H8)
  let chessPieceResponse = '';
  if (type === PAWN) {
    chessPieceResponse = pawnPositionEvaluation(position);
    console.log(chessPieceResponse);
  }

  // Step 3: Type: King and position any (between A1 - H8)
  if (type === KING) {
    chessPieceResponse = kingPositionEvaluation(position);
    console.log(chessPieceResponse.join());
  }
  // Step 4: Type: Queen and position any (between A1 - H8)
  if (type === QUEEN) {
    chessPieceResponse = queenPositionEvaluation(position);
    console.log(chessPieceResponse.join());
  }
  return chessPieceResponse;
};
