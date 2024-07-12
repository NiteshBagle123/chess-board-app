const antiDiagonals = require('../../../utils/diagonals/anti-diagonals');

// eslint-disable-next-line no-undef
describe('Should test anti diagonal flow', () => {
  // eslint-disable-next-line no-undef
  it('Should test anti diagonal flow for same row and column - (4, 4)', () => {
    // eslint-disable-next-line no-undef
    expect(antiDiagonals(4, 4)).toEqual(['H7', 'G6', 'F5', 'D3', 'C2', 'B1']);
  });

  // eslint-disable-next-line no-undef
  it('Should test anti diagonal flow for different row and column - (2, 4)', () => {
    // eslint-disable-next-line no-undef
    expect(antiDiagonals(2, 4)).toEqual(['G8', 'F7', 'D5', 'C4', 'B3', 'A2']);
  });
});
