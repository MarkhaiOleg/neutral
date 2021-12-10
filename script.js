let score = keks.getScore();
let total = 0;

while (score > -1) {
  total += score;
  score = keks.getScore();
}

console.log(total);
