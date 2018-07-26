import { isRotation } from './is_rotation';
const strOut = 'Blistering%20Barnacles!'

test('isRotation test #1', () => {
  expect(isRotation('hello world', 'llo worldhe')).toBeTruthy();
});

test('isRotation test #2', () => {
  expect(isRotation('hello world', 'llo worldxy')).toBeFalsy();
});
