let totalPages = 6; // Всего страниц в документе

let consumptionTotal = 0; // Общий расход тонера
let consumptionPerPage = 70; // Расход краски на одну страницу
let economyMode = true;

for (let page = 1; page <= totalPages; page++) {
  keks.print(page);

  if (economyMode && page > 3) {
    consumptionTotal += consumptionPerPage * 0.5;
  } else {
  consumptionTotal += consumptionPerPage;
  }
  console.log(consumptionTotal);
}

