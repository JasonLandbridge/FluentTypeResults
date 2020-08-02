import Result from '../results/result';
import ResultTValue from '../results/resultTValue';

Result.Ok();

test('Result.Ok()', () => {
  expect(Result.Ok()).not.toBeNull();
});
