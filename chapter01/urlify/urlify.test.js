import { URLify, URLifyRegex } from './urlify';

const strIn = 'Blistering Barnacles!';
const strOut = 'Blistering%20Barnacles!'

test('urlify test', () => {
  expect(URLify(strIn)).toMatch(strOut);
});

test('urlify using regex', () => {
  expect(URLifyRegex(strIn)).toMatch(strOut);
});
