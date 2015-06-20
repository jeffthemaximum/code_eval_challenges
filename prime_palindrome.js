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

function isPalindrome (nums) {
	numArray = nums.toString().split("");
	if (numArray.length == 3) {
		if (numArray[0] == numArray[2]) {
			return true;
		}
	}
	return false;
}

function findBiggestPrime () {
	var biggest = 0;
	for (var i = 100; i < 1000; i++) {
		if (isPrime(i)) {
			if (isPalindrome(i)) {
				biggest = i;
			}
		}
	}
	return biggest;
}

console.log(findBiggestPrime());