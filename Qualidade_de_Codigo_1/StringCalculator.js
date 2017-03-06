// O código abaixo é apenas um exemplo de como não escrever o código

class StringCalculator {
	constructor(op) {
		this.op = op;
	}

	execute(string) {
		if (this.op === 'sum') {
			if (string == undefined || string == null) {
				throw "String is required";
			} else if (string === "") {
				return 0;
			} else if (string.indexOf(",") > -1 ) {
				let list = string.split(",");
				if (list.length == 2) {
					return parseInt(list[0]) + parseInt(list[1]);
				} else {
					let tot = 0;
					for(let i = 0; i < list.length; i++) {
						let el = parseInt(list[i]);
						var regexp = /\d+/;
						if (regexp.test(el)) {
							tot += parseInt(el);
						} else {
							tot += 0;
						}
					}
					return tot;
				}
			} else {
				return string;
			}
		}
	}
}

let calc = new StringCalculator("sum");
try {
	console.log(calc.execute());
} catch (e) {
	console.log(e);
}
console.log(calc.execute(""));
console.log(calc.execute("10"));
console.log(calc.execute("2,2"));
console.log(calc.execute("1,2,3"));
console.log(calc.execute("1,2,a,b,3,4,5,6,c,d,7,8,e,f,9"));