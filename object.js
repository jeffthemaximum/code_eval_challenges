/*

var toilet = {tankCapacity: 4.8, brand: "sloan"};
toilet.flush = function() {
	console.log("clearing out contents of " + this.brand);
}

*/

function Toilet(brand) {
	this.brand = brand;
	this.tankCapacity = 4.8;
}

Toilet.prototype.sanitize = function() {
	console.log("Sanitizing " + this.brand);
}

function FancyToilet(brand) {
	Toilet.call(this, brand);
}

FancyToilet.prototype = new Toilet();
FancyToilet.prototype.useBidet = function() {
	console.log("Ahh, refreshing!");
}

var myToilet = new Toilet("Sloan");