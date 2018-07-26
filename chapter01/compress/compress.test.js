import { compress } from './compress';

const str1In = 'aaaaacbb';
const str1Out = 'a5c1b2';
test('compress string test #1', () => {
  expect(compress(str1In)).toMatch(str1Out);
});

const str2In = 'aabcccccaaa';
const str2Out = 'a2b1c5a3';
test('compress string test #2', () => {
  expect(compress(str2In)).toMatch(str2Out);
});

const str3 = 'ab';
test('compress string test #3', () => {
  expect(compress(str3)).toMatch(str3);
});
