line = line.split(" ");
length = line.length;
reversed = [];
for (var i = 1; i <= length; i++) {
	reversed.push(line[length-i])
}
reversed = reversed.join(" ");
console.log(reversed);