const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let sum = 0, answer = 0, num = 0;
let arr = new Array();
let set = new Set();
set.add(0);

r1.on('line', (input) => {
  if(input[0] === '+' || input[0] === '-') arr.push(input);
  else {
    r1.close();
    console.log('answer: ' + solution(arr));
  }
});

function solution(arr) {
  while(num === 0) {
    arr.forEach((i) => {
      if(i[0] === '+') {
        sum += parseInt(i.split('').splice(1, i.length).join(''));
      }else {
        sum -= parseInt(i.split('').splice(1, i.length).join(''));
      }
      if(set.has(sum) && num === 0) {
        answer = sum;
        num++;
      }else set.add(sum);
    })
  }
  return answer;
}
