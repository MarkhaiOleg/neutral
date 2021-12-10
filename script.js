let score = 0;
let total = 0;
let victoryPoints = 100;
let misses = 0;

while (total < victoryPoints) {
  if (misses >= 3) {
    break;
  }

  score = keks.getScore();

  if (score < 0) {
    console.log('Промах!');
    misses++;
  } else {
    total += score;
    console.log('Результат броска: ' + score);
  }
}

if (  total >= victoryPoints ) {
  console.log('Победа! Очков: ' + total + ', промахов: ' + misses)
  } else {console.log('Проигрыш. Очков: ' + total + ', промахов: ' + misses)}


