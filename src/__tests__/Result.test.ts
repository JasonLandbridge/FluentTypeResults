import TestClass from '../base/testClass';
import Result from '../../src';
import Error from '../reasons/error';

const testObject = new TestClass();
testObject.Number = 123456789;
testObject.Text = 'This is some random text';

test('Result.Ok(testObject)', () => {
  const okResult = Result.Ok(testObject);
  expect(okResult).not.toBeNull();
  expect(okResult.value).toBe(testObject);
  expect(okResult.valueOrDefault).toBe(testObject);
  expect(okResult.isFailed).toBeFalsy();
  expect(okResult.isSuccess).toBeTruthy();
});

test('Result.OkWithValue<TestClass>(testObject)', () => {
  const okResult = Result.Ok<TestClass>(testObject);
  expect(okResult).not.toBeNull();
  expect(okResult.value).toBe(testObject);
  expect(okResult.valueOrDefault).toBe(testObject);
  expect(okResult.isFailed).toBeFalsy();
  expect(okResult.isSuccess).toBeTruthy();
});

test('Result.Fail(new Error(This Is An Error Message))', () => {
  const errorMsg = 'This Is An Error Message';
  const resultFail = Result.Fail(new Error(errorMsg));
  expect(resultFail).not.toBeNull();
  expect(resultFail.value).toBeNull();
  expect(resultFail.valueOrDefault).toBeNull();
  expect(resultFail.reasons.length).toBe(1);
  expect(resultFail.errors.length).toBe(1);
  expect(resultFail.isFailed).toBeTruthy();
  expect(resultFail.isSuccess).toBeFalsy();
  expect(resultFail.reasons.filter((x) => x.message === errorMsg).length).toBeGreaterThan(0);
});

test('Result.Fail<TestClass>(new Error(This Is An Error Message))', () => {
  const errorMsg = 'This Is An Error Message';
  const resultFail = Result.Fail<TestClass>(new Error(errorMsg));
  expect(resultFail).not.toBeNull();
  expect(resultFail.value).toBeNull();
  expect(resultFail.valueOrDefault).toBeNull();
  expect(resultFail.reasons.length).toBe(1);
  expect(resultFail.errors.length).toBe(1);
  expect(resultFail.isFailed).toBeTruthy();
  expect(resultFail.isSuccess).toBeFalsy();
  expect(resultFail.reasons.filter((x) => x.message === errorMsg).length).toBeGreaterThan(0);
});

test('Result.FailFromMsg(This Is An Error Message)', () => {
  const errorMsg = 'This Is An Error Message';
  const resultFail = Result.FailFromMsg(errorMsg);
  expect(resultFail).not.toBeNull();
  expect(resultFail.value).toBeNull();
  expect(resultFail.valueOrDefault).toBeNull();
  expect(resultFail.reasons.length).toBe(1);
  expect(resultFail.errors.length).toBe(1);
  expect(resultFail.isFailed).toBeTruthy();
  expect(resultFail.isSuccess).toBeFalsy();
  expect(resultFail.reasons.filter((x) => x.message === errorMsg).length).toBeGreaterThan(0);
});

test('Result.FailFromMsg<TestClass>(This Is An Error Message)', () => {
  const errorMsg = 'This Is An Error Message';
  const resultFail = Result.FailFromMsg<TestClass>(errorMsg);
  expect(resultFail).not.toBeNull();
  expect(resultFail.value).toBeNull();
  expect(resultFail.valueOrDefault).toBeNull();
  expect(resultFail.reasons.length).toBe(1);
  expect(resultFail.errors.length).toBe(1);
  expect(resultFail.isFailed).toBeTruthy();
  expect(resultFail.isSuccess).toBeFalsy();
  expect(resultFail.reasons.filter((x) => x.message === errorMsg).length).toBeGreaterThan(0);
});
