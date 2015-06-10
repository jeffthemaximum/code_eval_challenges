String.prototype.magicNumbers = function () {
	var nums = this.toString().split(' ');
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
};

Array.prototype.noRepeats = function () {
	var length = this.length
	for (var i = 0; i < length; i++) {
		for (var j = i+1; j < this.length; j++) {
			if (this[i] == this[j]) {
				return false;
			} 
		}
	}
	return true;
};

Array.prototype.concatNumbers = function () {
	var length = this.length;
	var concatenatedNum = 0;
	var j = length-1;
	for (var i = 0; i < length; i++) {
		concatenatedNum += this[i] * Math.pow(10, j);
		j--;
	}
	return concatenatedNum;
};

Array.prototype.stringToNumber = function() {
	for (var i = 0; i < this.length; i++) {
		this[i] = Number(this[i]);
	}
	return this;
}

Number.prototype.noRepeatsNumber = function() {
	var xArray = [];
	xArray = this.toString().split("");
	return xArray.noRepeats();
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

function magicTest (x) {
	var moves = [];
	var testNumArray = x.toString().split("");
	var magicNum;
	var magicNumArray = [];
	var movesArray = [];
	

	//build new magic number

	if (testNumArray.noRepeats() == false) {
		return false;
	} else {
		moves.push(testNumArray[0]);
		for (var i = 0; i < testNumArray.length; i++) {
			moves.push(nextNum( moves[i], testNumArray, testNumArray.indexOf(moves[i]) ));
			if (moves.length == testNumArray.length) { //store magic num before last iteration
				magicNum = moves.stringToNumber().concatNumbers();
			}
		}
	}

	moves = moves.stringToNumber().concatNumbers();
	movesArray = moves.toString().split("");
	
	//check if new magic number passes tests
	if (movesArray[0] != movesArray[movesArray.length-1]) { //check that magic number goes back to beginning
		return false;
	} else if (!magicNum.noRepeatsNumber()) { //check that magic number doesn't repeat
		return false;
	} else {
		return true;
	}

}

console.log(line.magicNumbers());