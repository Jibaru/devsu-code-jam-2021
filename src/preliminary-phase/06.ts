const solve06 = (size: number, u: number): number => {
  if (size > u && u != 1) return 0;
  return Math.pow(u, size) - size;
};

console.log(solve06(3, 3));
