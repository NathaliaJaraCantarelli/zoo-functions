const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const dados = data.species;
  const idsInput = [...ids];
  const animaisIds = dados.filter((animal) => idsInput
    .find((idInput) => idInput === animal.id));
  return animaisIds;
}

module.exports = getSpeciesByIds;
