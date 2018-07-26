import { hasUniqueChars, hasUniqueCharsNoDataStructs } from './has_unique_chars';

const test1 = 'abcdefg';
test('hasUniqueChars test #1', () => {
  expect(hasUniqueChars(test1)).toBeTruthy();
});

const test2 = 'abcdeff'
test('hasUniqueChars test #2', () => {
  expect(hasUniqueChars(test2)).toBeFalsy();
});

test('hasUniqueCharsNoDataStructs test #1', () => {
  expect(hasUniqueCharsNoDataStructs(test1)).toBeTruthy();
});

test('hasUniqueCharsNoDataStructs test #2', () => {
  expect(hasUniqueCharsNoDataStructs(test2)).toBeFalsy();
});
