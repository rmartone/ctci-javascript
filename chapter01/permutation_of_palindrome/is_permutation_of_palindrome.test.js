import { isPermutationOfPalindrome } from './is_permutation_of_palindrome';

const str1 = 'A car, a man, a maraca';
test('palindrome permutation test #1', () => {
  expect(isPermutationOfPalindrome(str1)).toBeTruthy();
});

const str2 = 'Veni vedi vici';
test('palindrome permutation test #2', () => {
  expect(isPermutationOfPalindrome(str2)).toBeFalsy();
});
