export function rotate(matrix) {
  // caching length helps for some browsers
  const len = matrix.length;

  // can we rotate the matrix?
  if (len == 0 || len !== matrix[0].length) {
    return null;
  }

  // reverse the rows
  matrix = matrix.reverse();

  // swap the symmetric elements
  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < i; j += 1) {
      // swap using destructing
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  return matrix;
}
