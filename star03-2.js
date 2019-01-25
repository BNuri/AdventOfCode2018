const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let map = new Map();
let set = new Set();
r1.on('line', (input) => {
  if(input === 'end') {
    r1.close();
    console.log(set);
  }else {
    addMap(input);
  }
});

function addMap(input) {
  let id = input.substring(input.indexOf("#")+1, input.indexOf("@")-1);
  let x = parseInt(input.substring(input.indexOf("@")+2, input.indexOf(",")));
  let y = parseInt(input.substring(input.indexOf(",")+1, input.indexOf(":")));
  let width = parseInt(input.substring(input.indexOf(":")+2, input.indexOf("x")));
  let height = parseInt(input.substring(input.indexOf("x")+1, input.length));
  let isOverlap = 0;
  for(let i = 0; i < width; i++) {
    for(let j = 0; j < height; j++) {
      if(map.has(`${x+i},${y+j}`)) {
        set.delete(map.get(`${x+i},${y+j}`)[1]);
        isOverlap++;
        map.set(`${x+i},${y+j}`, [map.get(`${x},${y}`)+1, id]);
      }
      else {
        map.set(`${x+i},${y+j}`, [ 1, id ]);
      }
    }
  }
  if(isOverlap === 0) set.add(id);
}
