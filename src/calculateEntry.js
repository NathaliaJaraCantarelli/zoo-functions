const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const listCount = {
    adult: 0,
    senior: 0,
    child: 0,
  };
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      listCount.child += 1;
    } else if (entrant.age >= 50) {
      listCount.senior += 1;
    } else {
      listCount.adult += 1;
    }
  });
  return listCount;
}

function calculateEntry(entrants) {
  let total = 0;
  if (entrants === undefined) { return total; }
  const array = Object.keys(entrants);
  if (array.length === 0) { return total; }
  const dados = data.prices;
  const listCount = countEntrants(entrants);
  const totalAge = {
    adult: listCount.adult * dados.adult,
    senior: listCount.senior * dados.senior,
    child: listCount.child * dados.child,
  };
  total = totalAge.adult + totalAge.child + totalAge.senior;
  return total;
}

module.exports = { calculateEntry, countEntrants };
