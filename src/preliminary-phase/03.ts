const solve03 = (n: number): number => {
  // First, sorry for my english, I'm still learning
  // secuence: 1, 2, 3, 4, 3, 4, 5, 6, 5, 6, 7, 8 ...

  // I add +1 to n because I start the secuence with 1 index
  n++;

  // The secuence show the simple secuence with reason = 1
  // But after 4 times, it returns -2 positions
  const times: number = Math.floor(n / 4);

  // With the times, I can apply the secuence n-term formula and reduce it
  return n - 2 * times;
};

console.log(solve03(0));
console.log(solve03(5));
console.log(solve03(76));
console.log(solve03(545421));
console.log(solve03(87123641123172368));
console.log(solve03(81239812739128371));
