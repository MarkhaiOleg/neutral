let initialWeight = 6000; // Исходный вес в граммах
let targetWeight = 5000; // Желанный вес в граммах
let days = 0;

while (initialWeight > targetWeight ) {
  if ( initialWeight <= targetWeight ) {
    break; }
  days++;
  initialWeight = initialWeight / 100 * 95;
    
  }

console.log('дней ' + days);
console.log(initialWeight);