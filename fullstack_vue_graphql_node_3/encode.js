const domain = "flightmart";
const encodedDomain = [];
for (const char of domain) {
	encodedDomain.push(String.fromCharCode(char.charCodeAt(0) - 47));
}
console.log(encodedDomain.join(""));