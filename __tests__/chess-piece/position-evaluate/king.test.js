const { kingPositionEvaluation } = require('../../../chess-piece/position-evaluate');

// eslint-disable-next-line no-undef
describe('Should test chess type king flows', () => {
  // eslint-disable-next-line no-undef
  it('Should test king type and position A1', () => {
    // eslint-disable-next-line no-undef
    expect(kingPositionEvaluation('A1')).toEqual(['A2', 'B1', 'B2']);
  });

  // eslint-disable-next-line no-undef
  it('Should test king type and position A8', () => {
    // eslint-disable-next-line no-undef
    expect(kingPositionEvaluation('A8')).toEqual(['A7', 'B7', 'B8']);
  });

  // eslint-disable-next-line no-undef
  it('Should test king type and position H8', () => {
    // eslint-disable-next-line no-undef
    expect(kingPositionEvaluation('H8')).toEqual(['G7', 'G8', 'H7']);
  });
});
