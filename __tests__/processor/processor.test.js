const { chessProcessor } = require('../../processor');

// eslint-disable-next-line no-undef
describe('Should test chess processor flow', () => {
  // eslint-disable-next-line no-undef
  it('Should test input validator failure', () => {
    const INPUT_VALIDATOR_FAILURE = {
      // eslint-disable-next-line max-len
      message: 'Please provide input in terminal with format node <file_name> <type> <position> for example: nodejs index.js pawn A1',
      status: 'failure'
    };
    const chessProcessorResponse = chessProcessor([]);
    // eslint-disable-next-line no-undef
    expect(chessProcessorResponse).toEqual(INPUT_VALIDATOR_FAILURE);
  });


  // eslint-disable-next-line no-undef
  it('Should test for chess piece type pawn and postion A1', () => {
    const PAWN_CHESS_PIECE = {
      INPUT: [
        'node_executable',
        'js file path',
        'pawn',
        'A1'
      ],
      OUTPUT: 'A2'
    };
    const chessProcessorResponse = chessProcessor(PAWN_CHESS_PIECE.INPUT);
    // eslint-disable-next-line no-undef
    expect(chessProcessorResponse).toEqual(PAWN_CHESS_PIECE.OUTPUT);
  });

  // eslint-disable-next-line no-undef
  it('Should test for chess piece type king and postion D5', () => {
    const KING_CHESS_PIECE = {
      INPUT: [
        'node_executable',
        'js file path',
        'king',
        'D5'
      ],
      OUTPUT: ['C4', 'C5', 'C6', 'D4', 'D6', 'E4', 'E5', 'E6']
    };
    const chessProcessorResponse = chessProcessor(KING_CHESS_PIECE.INPUT);
    // eslint-disable-next-line no-undef
    expect(chessProcessorResponse).toEqual(KING_CHESS_PIECE.OUTPUT);
  });

  // eslint-disable-next-line no-undef
  it('Should test for chess piece type queen and postion E4', () => {
    const QUEEN_CHESS_PIECE = {
      INPUT: [
        'node_executable',
        'js file path',
        'queen',
        'E4'
      ],
      // eslint-disable-next-line max-len
      OUTPUT: ['A4', 'B4', 'C4', 'D4', 'F4', 'G4', 'H4', 'E1', 'E2', 'E3', 'E5', 'E6', 'E7', 'E8', 'A8', 'B7', 'C6', 'D5', 'F3', 'G2', 'H1', 'B1', 'C2', 'D3', 'F5', 'G6', 'H7']
    };
    const chessProcessorResponse = chessProcessor(QUEEN_CHESS_PIECE.INPUT);
    // eslint-disable-next-line no-undef
    expect(chessProcessorResponse).toEqual(QUEEN_CHESS_PIECE.OUTPUT);
  });
});
