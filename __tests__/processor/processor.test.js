const { chessProcessor } = require('../../processor');
const {
  INPUT_VALIDATOR_FAILURE,
  PAWN_CHESS_PIECE: { INPUT, OUTPUT },
  KING_CHESS_PIECE: { INPUT: KING_INPUT, OUTPUT: KING_OUTPUT },
  QUEEN_CHESS_PIECE: { INPUT: QUEEN_INPUT, OUTPUT: QUEEN_OUTPUT }
} = require('./fixtures/fixtures');

describe('Should test chess processor flow', () => {
  it('Should test input validator failure', () => {
    const chessProcessorResponse = chessProcessor([]);
    expect(chessProcessorResponse).toEqual(INPUT_VALIDATOR_FAILURE);
  });

  it('Should test for chess piece type pawn and postion A1', () => {
    const chessProcessorResponse = chessProcessor(INPUT);
    expect(chessProcessorResponse).toEqual(OUTPUT);
  });

  it('Should test for chess piece type king and postion D5', () => {
    const chessProcessorResponse = chessProcessor(KING_INPUT);
    expect(chessProcessorResponse).toEqual(KING_OUTPUT);
  });

  it('Should test for chess piece type queen and postion E4', () => {
    const chessProcessorResponse = chessProcessor(QUEEN_INPUT);
    expect(chessProcessorResponse).toEqual(QUEEN_OUTPUT);
  });
});
