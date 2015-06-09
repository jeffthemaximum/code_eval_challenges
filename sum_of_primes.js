function isPrime (x) {
	var divisor = 2;
	while (divisor <= x/2) {
		if (x % divisor == 0) {
			return false;
		}
		divisor++;
	}
	return true;
}

function firstThousandPrimes () {
	var primes = [];
	while (primes.length < 1000) {
		for (var i = 2; primes.length < 1000; i++) {
			if (isPrime(i)) {
				primes.push(i);
			}
		}
	}
	return primes;
}

function primeSum () {
	var sum = 0;
	var primeArray = firstThousandPrimes();
	var length = primeArray.length;
	for (var i = 0; i < length; i++) {
		sum += primeArray[i];
	}
	return sum;
}

console.log(primeSum());