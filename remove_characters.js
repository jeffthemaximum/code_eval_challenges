String.prototype.remove = function (idx) {
	var arr = this.split("");
	arr.splice(idx, 1);
	arr = arr.join('');
	arr = arr.toString();
	return arr;
}

String.prototype.removeCharacters = function() {
	//debugger;
	var twoStrings = this.split(", "),
	array2 = twoStrings[1],
	array1= twoStrings[0],
	temp = "";

	for (var i = 0, length = array2.length; i < length; i++) {
		for (var j = 0, l = array1.length; j < l; j++) {
			if (array1[j] == array2[i]) {
				array1 = array1.remove(j);
				j--; 
			}
		}
	}
	return array1;
}

console.log(line.removeCharacters());