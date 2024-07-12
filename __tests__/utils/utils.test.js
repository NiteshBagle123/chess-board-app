const { boardIndexToChessNotation } = require('../../utils/utils');

// eslint-disable-next-line no-undef
describe('Should test boardIndex for chess', () => {
  // eslint-disable-next-line no-undef
  it('Should test boardIndexToChessNotation function', () => {
    const boardIndexToChessNotationResponse = boardIndexToChessNotation(0, 0);
    // eslint-disable-next-line no-undef
    expect(boardIndexToChessNotationResponse).toBe('A8');
  });
});
