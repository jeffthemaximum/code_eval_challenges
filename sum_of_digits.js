var line = 23;
var nums = line.toString().split('');

var sum = 0;
var i = 0;

while (i < nums.length) {
	sum = sum + Number(nums[i]);
	i++;
}

console.log(sum);