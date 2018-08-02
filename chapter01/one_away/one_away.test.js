import { oneAway } from './one_away';

const str1 = 'pale';
const str2 = 'ple';
test('one away test #1', () => {
  expect(oneAway(str1, str2)).toBeTruthy();
});

const str3 = 'pales';
test('one away test #2', () => {
  expect(oneAway(str3, str1)).toBeTruthy();
});

const str4 = 'bale';
test('one away test #3', () => {
  expect(oneAway(str1, str4)).toBeTruthy();
});

const str5 = 'bake'
test('one away test #4', () => {
  expect(oneAway(str1, str5)).toBeFalsy();
});

const str6 = 'abcde';
const str7 = 'abzdef';
test('one away test #5', () => {
  expect(oneAway(str6, str7)).toBeFalsy();
});
