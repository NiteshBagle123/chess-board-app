const { pawnPositionEvaluation } = require('../../../chess-piece/position-evaluate');

// eslint-disable-next-line no-undef
describe('Should test chess type pawn and different position flows', () => {
  // eslint-disable-next-line no-undef
  it('Should test pawn type position A1', () => {
    const pawnPositionEvaluationResponse = pawnPositionEvaluation('A1');
    // eslint-disable-next-line no-undef
    expect(pawnPositionEvaluationResponse).toEqual('A2');
  });

  // eslint-disable-next-line no-undef
  it('Should test pawn type position A5', () => {
    const pawnPositionEvaluationResponse = pawnPositionEvaluation('A5');
    // eslint-disable-next-line no-undef
    expect(pawnPositionEvaluationResponse).toEqual('A4');
  });
});
