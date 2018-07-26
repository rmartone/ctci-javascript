export function zeroMatrix(matrix) {
  if (!matrix) {
    throw new Error('invalid matrix');
  }

  if (matrix.length === 0) {
    return matrix;
  }

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

  for (let i = 0; i < rows.length; ++i) {
    for (let j = 0; j < cols.length; ++j) {
      if (rows[i] || cols[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}