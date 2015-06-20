var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
		var numbers = line.split(" ");
		var fizzBuzz = "";
		var x = numbers[0];
		var y = numbers[1];
		var z = numbers[2];

		for (var i = 1; i <= z; i++) {
			if (i % (x * y) === 0) {
				fizzBuzz += ("FB ");
			} else if (i % x === 0) {
				fizzBuzz += ("F ");
			} else if (i % y === 0) {
				fizzBuzz += ("B ");
			} else {
				fizzBuzz += (i + " ");
			}
		}
		console.log(fizzBuzz);
	}
}