import { rotateMatrix } from './rotate_matrix';

/*
   a b    c a
   c d    d b
 */
const matrix1 = [['a', 'b'], ['c', 'd']];
const matrix2 = [['c', 'a'], ['d', 'b']];
test('rotate matrix test #1', () => {
  expect(rotateMatrix(matrix1)).toEqual(matrix2);
});

/*
  a,b,c   g,d,a
  d,e,f   h,e,b
  g,h,i   i,f,c
*/
const matrix3 = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']];
const matrix4 = [['g', 'd', 'a'], ['h', 'e', 'b'], ['i', 'f', 'c']];
test('rotate matrix test #2', () => {
  expect(rotateMatrix(matrix3)).toEqual(matrix4);
});
