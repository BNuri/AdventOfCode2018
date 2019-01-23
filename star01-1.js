const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let sum = 0;
r1.on('line', (input) => {
  if(input[0] === '+') {
    sum += parseInt(input.split('').splice(1,input.length).join(''));
  }else if(input[0] === '-') {
    sum -= parseInt(input.split('').splice(1, input.length).join(''));
  }else {
    console.log(`sum: ${sum}`);
    r1.close();
  }
});
