const solve05 = (matrix: number[][]): number => {
  const len = matrix.length;

  let i = 0,
    j = len - 1;
  let minSum = matrix[i][j];

  while (i < len - 1 && j >= 0) {
    if (matrix[i + 1] != undefined) {
      minSum += matrix[i][j - 1];
      j--;
      continue;
    }

    if (matrix[i][j - 1] != undefined) {
      minSum += matrix[i + 1][j];
      i++;
      continue;
    }

    const left = matrix[i][j - 1];
    const bottom = matrix[i + 1][j];

    if (left < bottom) {
      minSum += left;
      j--;
    } else {
      minSum += bottom;
      i++;
    }
  }

  return minSum;
};

console.log(
  solve05([
    [0, 6, 0],
    [8, 7, 1],
    [0, 1, 1],
  ])
);
