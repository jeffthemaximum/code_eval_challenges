/*
CHALLENGE DESCRIPTION:

There are two wizards, one good and one evil. The evil wizard has captured the princess. The only way to defeat the evil wizard is to recite a set of magic numbers. The good wizard has given you two numbers, A and B. Find every magic number between A and B, inclusive.

A magic number is a number that has two characteristics:

No digits repeat.
Beginning with the leftmost digit, take the value of the digit and move that number of digits to the right. Repeat the process again using the value of the current digit to move right again. Wrap back to the leftmost digit as necessary. A magic number will visit every digit exactly once and end at the leftmost digit.
For example, consider the magic number 6231.

Start with 6. Advance 6 steps to 3, wrapping around once (6→2→3→1→6→2→3).
From 3, advance to 2.
From 2, advance to 1.
From 1, advance to 6.
INPUT SAMPLE:

The input is a file with each line representing a test case. Each test case consists of two integers A and B on a line, separated by spaces. For all test cases 1 <= A <= B <= 10000.


1
2
10 100
8382 8841
OUTPUT SAMPLE:

For each test case print all magic numbers between A and B, inclusive, on one line, separated by spaces. If there is no magic number between A and B, print -1.


1
2
13 15 17 19 31 35 37 39 51 53 57 59 71 73 75 79 91 93 95 97
-1
CONSTRAINTS:

The number of test cases is 20.
*/

console.log(magicNumbers(line));

function magicNumbers (l) {
	//debugger;
	var nums = l.toString().split(' ');
	var x = nums[0];
	var y = nums[1];
	var magicNums = [];
	var magicString = "";

	for (var i = x; i <= y; i++) {
		if (magicTest(i)) {
			magicNums.push(i);
		}
	}

	if (magicNums.length == 0) {
		return -1;
	}
	else {
		var magicString = "";
		for (i = 0; i < magicNums.length; i++) {
			magicString += magicNums[i] + " ";
		}
		return magicString.trim();
	}
}

function nextNum(num, numArray, index) {
	num = Number(num);
	index = Number(index);
	numArray = numArray.map(function(item) {
    return parseInt(item, 10);
  });
	var length = numArray.length;
	var nextNumber;
	if ((index + numArray[index]) <= (length - 1)) {
		nextNumber = numArray[index + num]
	} else {
		nextNumber = wrapAround(num, numArray, index);
	}
	return nextNumber;
}

function wrapAround(number, numberArray, idx) {
	var longString = "";
	var fullNumber = numberArray.join("");
	while (longString.length <= (number + idx)) {
		longString += fullNumber;
	}
	var newNum = longString.charAt(idx + number);
	return newNum;
}

function noRepeats(movesArray) {
	var length = movesArray.length
	for (var i = 0; i < length; i++) {
		for (var j = i+1; j < movesArray.length; j++) {
			if (movesArray[i] == movesArray[j]) {
				return false;
			} 
		}
	}
	return true;
}

function stringToNumber (stringArray) {
	for (var i = 0; i < stringArray.length; i++) {
		stringArray[i] = Number(stringArray[i]);
	}
	return stringArray;
}

function concatNumbers(nums) {
	var length = nums.length;
	var concatenatedNum = 0;
	var j = length-1;
	for (var i = 0; i < length; i++) {
		concatenatedNum += nums[i] * Math.pow(10, j);
		j--;
	}
	return concatenatedNum;
}

function noRepeatsNumber(x) {
	var xArray = [];
	xArray = x.toString().split("");
	return noRepeats(xArray);
}

function magicTest (x) {
	var moves = [];
	var testNumArray = x.toString().split("");
	var magicNum;
	var magicNumArray = [];
	var movesArray = [];
	

	//build new magic number

	if (noRepeats(testNumArray) == false) {
		return false;
	} else {
		moves.push(testNumArray[0]);
		for (var i = 0; i < testNumArray.length; i++) {
			moves.push(nextNum( moves[i], testNumArray, testNumArray.indexOf(moves[i]) ));
			if (moves.length == testNumArray.length) { //store magic num before last iteration
				magicNum = concatNumbers(stringToNumber(moves));
			}
		}
	}

	moves = concatNumbers(stringToNumber(moves));
	movesArray = moves.toString().split("");
	
	//check if new magic number passes tests
	if (movesArray[0] != movesArray[movesArray.length-1]) { //check that magic number goes back to beginning
		return false;
	} else if (noRepeatsNumber(magicNum) == false) { //check that magic number doesn't repeat
		return false;
	} else {
		return true;
	}

}