function getSumDigits(num) {
	var arr = num.toString().split("");
	return parseInt(arr[0]) + parseInt(arr[1]);
}

String.prototype.validNum = function() {

	var str = this.split(" ").join("").split(""),
	sum = 0,
	arr = [];
	
	for (var i = 0, l = str.length; i < l; i++) {
		arr.push(parseInt(str[i]));
	}
	
	arr = arr.reverse();

	for (var i = 0; i < l; i++) {
		
		if (i % 2 == 1) {
			arr[i] *= 2;
			if (arr[i] > 9) {
				sum += getSumDigits(arr[i]);
			} else {
				sum += arr[i];
			}
		} else {
			sum += arr[i];
		}

	}

	if (sum % 10 == 0) {
		return 1;
	} else {
		return 0;
	}

}

console.log(line.validNum());