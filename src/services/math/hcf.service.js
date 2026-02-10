const gcd = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

const calculateHcf = (arr) => {
  if (!Array.isArray(arr) || arr.length < 2) {
    throw new Error("Invalid hcf input");
  }

  return arr.reduce((acc, val) => gcd(acc, val));
};

module.exports = {
  calculateHcf
};
