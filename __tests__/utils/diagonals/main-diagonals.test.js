const mainDiagonals = require('../../../utils/diagonals/main-diagonals');

// eslint-disable-next-line no-undef
describe('Should test main diagonal flow', () => {
  // eslint-disable-next-line no-undef
  it('Should test main diagonal flow for same row and column - (4, 4)', () => {
    // eslint-disable-next-line no-undef
    expect(mainDiagonals(4, 4)).toEqual(['A8', 'B7', 'C6', 'D5', 'F3', 'G2', 'H1']);
  });
  it('Should test main diagonal flow for different row and column - (2, 4)', () => {
    // eslint-disable-next-line no-undef
    expect(mainDiagonals(2, 4)).toEqual(['C8', 'D7', 'F5', 'G4', 'H3']);
  });
});
