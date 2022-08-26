const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const dados = data.species;
  const idsInput = [...ids];
  const animaisIds = [];
  const animals = dados.filter((animal) => {
    for (let index = 0; index < idsInput.length; index += 1) {
      if (animal.id === idsInput[index]) {
        animaisIds.push(animal);
      }
    }
    return animal;
  });
  console.log(animals);
  return animaisIds;
}

module.exports = getSpeciesByIds;
