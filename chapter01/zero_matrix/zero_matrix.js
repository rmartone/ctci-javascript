/**
 * Given an NxN matrix if an element is 0, its entire row
 * and column are set to 0.
 * @param valid matrix (non-null...)
 * @return zero'd matrix
 */
export function zeroMatrix(matrix) {
  // special case empty matrix
  if (matrix.length === 0) {
    return matrix;
  }

  // separate into 2 passes where we first identify zero'd rows & cols
  let rows = new Array(matrix.length);
  rows.fill(false);
  let cols = new Array(matrix[0].length);
  cols.fill(false);
  for (let i = 0; i < rows.length; ++i) {
    for (let j = 0; j < cols.length; ++j) {
      if (matrix[i][j] === 0) {
        rows[i] = true;
        cols[j] = true;
      }
    }
  }

  // 2 zero marked rows and cols
  for (let i = 0; i < rows.length; ++i) {
    for (let j = 0; j < cols.length; ++j) {
      if (rows[i] || cols[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}
