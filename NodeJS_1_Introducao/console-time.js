console.time('while');
var i = 0;
while(true) {
  console.log(Math.floor(Math.random() * 10000));
  if (i++ === 1000) break;
}
console.timeEnd('while');