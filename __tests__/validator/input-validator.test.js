const { inputValidator } = require('../../validator');

// eslint-disable-next-line no-undef
describe('Should test input validator flows', () => {
  // eslint-disable-next-line no-undef
  it('Should test when input is missing like chess piece type or position', () => {
    const INPUT_MISSING = {
      INPUT: [
        'node_executable',
        'js file path'
      ],
      OUTPUT: {
        // eslint-disable-next-line max-len
        message: 'Please provide input in terminal with format node <file_name> <type> <position> for example: nodejs index.js pawn A1',
        status: 'failure'
      }
    };
    const inputValidatorResponse = inputValidator(INPUT_MISSING.INPUT);
    // eslint-disable-next-line no-undef
    expect(inputValidatorResponse).toEqual(INPUT_MISSING.OUTPUT);
  });

  // eslint-disable-next-line no-undef
  it('Should test when input chess position type or position is invalid', () => {
    const INPUT_INVALID = {
      INPUT: [
        'node_executable',
        'js file path',
        'test',
        'test1'
      ],
      OUTPUT: {
        message: 'Please provide valid chess piece type like pawn, king or queen',
        status: 'failure'
      }
    };
    const inputValidatorResponse = inputValidator(INPUT_INVALID.INPUT);
    // eslint-disable-next-line no-undef
    expect(inputValidatorResponse).toEqual(INPUT_INVALID.OUTPUT);
  });

  // eslint-disable-next-line no-undef
  it('Should test when input chess position is invalid', () => {
    const CHESS_POSITION_INVALID = {
      INPUT: [
        'node_executable',
        'js file path',
        'pawn',
        'a'
      ],
      OUTPUT: {
        // eslint-disable-next-line max-len
        message: 'Chess position: a value is invalid. Please provide valid chess position which starts from (A, B, ...H)(1,2 ...8) for example A1, H8',
        status: 'failure'
      }
    };
    const inputValidatorResponse = inputValidator(CHESS_POSITION_INVALID.INPUT);
    // eslint-disable-next-line no-undef
    expect(inputValidatorResponse).toEqual(CHESS_POSITION_INVALID.OUTPUT);
  });

  // eslint-disable-next-line no-undef
  it('Should test when input chess start position is invalid', () => {
    const CHESS_START_POSITION_INVALID = {
      INPUT: [
        'node_executable',
        'js file path',
        'pawn',
        'x1'
      ],
      OUTPUT: {
        // eslint-disable-next-line max-len
        message: 'Chess position: x1 is invalid. It should starts with A, B, ..H as chessboard is an 8 x 8 grid with 64 cells in it',
        status: 'failure'
      }
    };
    const inputValidatorResponse = inputValidator(CHESS_START_POSITION_INVALID.INPUT);
    // eslint-disable-next-line no-undef
    expect(inputValidatorResponse).toEqual(CHESS_START_POSITION_INVALID.OUTPUT);
  });

  // eslint-disable-next-line no-undef
  it('Should test when input chess end position is invalid', () => {
    const CHESS_END_POSITION_INVALID = {
      INPUT: [
        'node_executable',
        'js file path',
        'pawn',
        'A9'
      ],
      OUTPUT: {
        // eslint-disable-next-line max-len
        message: 'Chess position: A9 is invalid. It should ends with 1, 2, ..8 as chessboard is an 8 x 8 grid with 64 cells in it',
        status: 'failure'
      }
    };
    const inputValidatorResponse = inputValidator(CHESS_END_POSITION_INVALID.INPUT);
    // eslint-disable-next-line no-undef
    expect(inputValidatorResponse).toEqual(CHESS_END_POSITION_INVALID.OUTPUT);
  });
});
