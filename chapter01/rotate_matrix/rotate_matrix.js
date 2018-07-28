/**
 * Given an image represented by an NxN matrix, write a method to rotate
 * the matrix 90 degrees clockwise (in-place && O(n**2)).
 * @param {*} matrix non-null 2D array
 * @return rotated matrix
 */
export function rotateMatrix(matrix) {
  if (matrix.length === 0) {
    return matrix;
  }

  // matrix exists and is square
  if (matrix.length !== matrix[0].length) {
    throw new Error('matrix not square');
  }

  // to rotate matrix in place first reverse the rows
  matrix = matrix.reverse();

  // swap the symmetric elements
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      // use destructing
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  return matrix;
}
