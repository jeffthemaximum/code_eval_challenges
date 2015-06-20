function MyString (str) {
	this.string = str;
	this.swapLine = function () {
		var splitLine = this.string.split(""),
		swappedLine = [];
		for (var i = 0, length = splitLine.length; i < length; i++) {
			swappedLine[i] = (splitLine[i] === splitLine[i].toLowerCase()) ?  splitLine[i].toUpperCase() : splitLine[i].toLowerCase();
		}
		return swappedLine.join("");
	}
}

var newString = new MyString("Hello, World!");
console.log(newString.swapLine());
/*
var newString = Object.create(myString);

function SplitString (str) {
	
	this.string = str;
	this.splitLine = string.split("");
	this.swappedLine = [];

	this.swapLine = function () {
		for (var i = 0, length = splitLine.length; i < length; i++) {
			swappedLine[i] = (splitLine[i] === splitLine[i].toLowerCase()) ?  splitLine[i].toUpperCase() : splitLine[i].toLowerCase();
		}
		return swappedLine.join("");
	};

}

debugger;
var line = new SplitString("Hello, world!");
console.log(line.swapLine());
*/