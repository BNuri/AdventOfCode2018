const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let two = 0, three = 0;
r1.on('line', (input) => {
  if(input === 'end') {
    r1.close();
    console.log('answer: ' + two*three);
  }else {
    solution(input);
  }
});

function solution(input) {
  let map = new Map();
  input.split('').forEach((i) => {
    if(map.has(i)) {
      map.set(i, (map.get(i)+1));
    }else {
      map.set(i, 1);
    }
  });
  let tw = 0, th = 0;
  for(let r of map.values()) {
    if(r === 2 && tw === 0) {
      two++;
      tw++;
    }else if(r === 3 && th === 0) {
      three++;
      th++;
    }
  }
}
