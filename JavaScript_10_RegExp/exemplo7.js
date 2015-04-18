var regExp = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/;
  
var telefone1 = "(80) 98761234";
console.log(regExp.test(telefone1));
var telefone2 = "(80) 9876-1234";
console.log(regExp.test(telefone2));