const { inputValidator } = require('../../validator');
const {
  INPUT_MISSING,
  INPUT_INVALID,
  CHESS_POSITION_INVALID,
  CHESS_START_POSITION_INVALID,
  CHESS_END_POSITION_INVALID
} = require('./fixtures/fixtures');

// eslint-disable-next-line no-undef
describe('Should test input validator flows', () => {
  // eslint-disable-next-line no-undef
  it('Should test when input is missing like chess piece type or position', () => {
    const inputValidatorResponse = inputValidator(INPUT_MISSING.INPUT);
    // eslint-disable-next-line no-undef
    expect(inputValidatorResponse).toEqual(INPUT_MISSING.OUTPUT);
  });

  // eslint-disable-next-line no-undef
  it('Should test when input chess position type or position is invalid', () => {
    const inputValidatorResponse = inputValidator(INPUT_INVALID.INPUT);
    // eslint-disable-next-line no-undef
    expect(inputValidatorResponse).toEqual(INPUT_INVALID.OUTPUT);
  });

  // eslint-disable-next-line no-undef
  it('Should test when input chess position is invalid', () => {
    const inputValidatorResponse = inputValidator(CHESS_POSITION_INVALID.INPUT);
    // eslint-disable-next-line no-undef
    expect(inputValidatorResponse).toEqual(CHESS_POSITION_INVALID.OUTPUT);
  });

  // eslint-disable-next-line no-undef
  it('Should test when input chess start position is invalid', () => {
    const inputValidatorResponse = inputValidator(CHESS_START_POSITION_INVALID.INPUT);
    // eslint-disable-next-line no-undef
    expect(inputValidatorResponse).toEqual(CHESS_START_POSITION_INVALID.OUTPUT);
  });

  // eslint-disable-next-line no-undef
  it('Should test when input chess end position is invalid', () => {
    const inputValidatorResponse = inputValidator(CHESS_END_POSITION_INVALID.INPUT);
    // eslint-disable-next-line no-undef
    expect(inputValidatorResponse).toEqual(CHESS_END_POSITION_INVALID.OUTPUT);
  });
});
