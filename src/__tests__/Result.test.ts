import TestClass from '../base/testClass';
import Result from '../../src';

Result.Ok();

test('Result.Ok()', () => {
  expect(Result.Ok()).not.toBeNull();
});

const result = Result.Ok<TestClass>();
