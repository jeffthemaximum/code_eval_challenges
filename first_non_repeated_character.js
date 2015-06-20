/*
Write a program which finds the first non-repeated character in a string.
*/


function checkRepeats(arr, idx){

	for (var i = 0, length = arr.length; i < length; i++) {
		
		if (idx == i) {
			continue;
		} else if (arr[idx] === arr[i]) {
			return false;
		}

	}
	return true;
}


function nonRepeats(str){
	var uniqueElements = [];
	var strArray = str.split("");

	for (var i = 0, length = strArray.length; i < length; i++) {
		if (checkRepeats(strArray, i)){
			uniqueElements.push(strArray[i]);
		}
	}
	return uniqueElements[0];
}

//console.log(nonRepeats(line));




/*
function nonRepeats(str){
	debugger;
	return str.split("").uniqueElements()
}

Array.prototype.uniqueElements = function () {
	var u = {}, a = [];
	for (var i = 0, length = this.length; i < length; i++) {
		if (u.hasOwnProperty(this[i])) {
			continue;
		}
		a.push(this[i])
		u[this[i]] = 1;
	}
	return a[0];
}


console.log(nonRepeats("tooth"));
*/
