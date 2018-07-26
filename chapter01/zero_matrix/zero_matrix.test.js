import { zeroMatrix } from './zero_matrix';

const matrix1 = [[1, 0, 3], [4, 5, 6], [7, 0, 9]];
const matrix2 = [[0, 0, 0], [4, 0, 6], [0, 0, 0]];

test('zero matrix test #1', () => {
  expect(zeroMatrix(matrix1)).toEqual(matrix2);
});
