/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function (left, right) {
  const getPrimes = () => {
    const isPrime = Array(right + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    for (let i = 2; i < Math.sqrt(right) + 1; i++) {
      if (!isPrime[i]) continue;
      for (let j = i + i; j < right + 1; j += i) {
        isPrime[j] = false;
      }
    }
    const primes = [];
    for (let i = 0; i < isPrime.length; i++) {
      if (isPrime[i] && i >= left) primes.push(i);
    }
    return primes;
  };

  const primes = getPrimes();

  let res = [-1, -1];
  let diff = Infinity;

  for (let i = 1; i < primes.length; i++) {
    if (primes[i] - primes[i - 1] < diff) {
      diff = primes[i] - primes[i - 1];
      res = [primes[i - 1], primes[i]];
    }
  }

  return res;
};
