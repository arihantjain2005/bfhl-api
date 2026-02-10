const isPrime = (num) => {
  if (num <= 1 || !Number.isInteger(num)) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

const filterPrimes = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Invalid prime input");
  }

  return arr.filter(isPrime);
};

module.exports = {
  filterPrimes
};
