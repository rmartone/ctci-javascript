import { isPermutation } from './is_permutation';

const str1 = 'taco Cat';
const str2 = 'taca Cot';

test('isPermutation test #1', () => {
  expect(isPermutation(str1, str2)).toBeTruthy();
});

const str3 = 'abba';
const str4 = 'abbc';

test('isPermutation test #2', () => {
  expect(isPermutation(str3, str4)).toBeFalsy();
});
