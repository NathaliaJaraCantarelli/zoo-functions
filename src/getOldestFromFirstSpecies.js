const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const dados = [data.employees, data.species];
  let animalId = '';
  let age = 0;
  const informationAnimalOld = [];
  dados[0].forEach((dado) => { if (dado.id === id) { [animalId] = dado.responsibleFor; } });
  dados[1].forEach((animal) => {
    if (animal.id === animalId) {
      animal.residents.forEach((resident) => {
        if (resident.age > age) {
          age = resident.age;
          informationAnimalOld[0] = resident.name;
          informationAnimalOld[1] = resident.sex;
          informationAnimalOld[2] = resident.age;
        }
      });
    }
  });
  return informationAnimalOld;
}

module.exports = getOldestFromFirstSpecies;
