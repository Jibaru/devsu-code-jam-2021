const solve04 = (letters: string, n: number): string => {
  const charPosition = n % letters.length;
  const i = Math.floor(n / letters.length);
  const str = String.fromCharCode("A".charCodeAt(0) + charPosition);

  if (i > 0) {
    return solve04(letters, i - 1) + str;
  }

  return str;
};

console.log(solve04("AB", 5));
console.log(solve04("ABC", 4));
console.log(solve04("ABCD", 83));
console.log(solve04("LJVRKMMMNUXPRUP", 9954554));
console.log(solve04("FHIK", 22525));
console.log(solve04("A", 5));
