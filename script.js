let days = 9; // Дней в периоде
let evenDayAmount = 200; // Количество протеина в чётные дни
let oddDayAmount = 100; // Количество протеина в нечётные дни
let total = 0; // Общее количество протеина
let sum = 0;

for (let day = 1; day <= days;day++ )
{
  if (day % 2 === 0) {
   total += evenDayAmount;  
    console.log( total );
    } else {   total += oddDayAmount ;
    console.log( total );}
  }

/* Техническое задание

Мяу! Программа должна считать сколько протеина я должен выпить за весь тренировочный период.

В чётные дни я пью 200 грамм. В нечётные 100 грамм.

Количество дней хранится в переменной days, количество протеина для приёма в чётный день — в переменной evenDayAmount, протеин в нечётный день — в переменной oddDayAmount, а результат необходимо записать в переменную total, которая уже задана.

*/
