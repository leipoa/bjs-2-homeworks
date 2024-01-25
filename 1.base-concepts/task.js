"use strict"

function solveEquation(a, b, c) {

	let D = Math.pow(b, 2) - 4 * a * c;
	let arr = [];
	if (D < 0)
		return arr;
	let roots;
	if (D == 0)
		roots = (-b + Math.sqrt(D)) / (2 * a);
	else if (D > 0) {
		let arr = [];
		arr.push((-b + Math.sqrt(D)) / (2 * a));
		arr.push((-b - Math.sqrt(D)) / (2 * a));
		roots = arr;
	}
	return roots;
}
console.log(solveEquation(1, 4, 3));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	let monthPercent = percent / 12;
	let creditBody = amount - contribution;
	let monthPayment = creditBody * (monthPercent + (monthPercent / ((Math.pow(1 + monthPercent), countMonths)) - 1));
	let sum = Number(contribution + creditBody + monthPayment);
	console.log(sum.toFixed(2));
}
console.log(calculateTotalMortgage(10, 1000, 50000, 12));