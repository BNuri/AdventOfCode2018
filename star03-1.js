const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let map = new Map();
r1.on('line', (input) => {
  if(input === 'end') {
    r1.close();
    console.log(returnAnswer());
  }else {
    addMap(input);
  }
});

function addMap(input) {
  let x = parseInt(input.substring(input.indexOf("@")+2, input.indexOf(",")));
  let y = parseInt(input.substring(input.indexOf(",")+1, input.indexOf(":")));
  let width = parseInt(input.substring(input.indexOf(":")+2, input.indexOf("x")));
  let height = parseInt(input.substring(input.indexOf("x")+1, input.length));
  console.log(`${x} ${y} ${width} ${height}`);
  for(let i = 0; i < width; i++) {
    for(let j = 0; j < height; j++) {
      if(map.has(`${x+i},${y+j}`)) map.set(`${x+i},${y+j}`, map.get(`${x},${y}`)+1);
      else map.set(`${x+i},${y+j}`, 1);
    }
  }
}

function returnAnswer() {
  let answer = 0;
  for(let [key, value] of map) {
    if(value > 1) answer++;
  }
  return answer;
}
