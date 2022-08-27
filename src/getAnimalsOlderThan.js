const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const dados = data.species;
  const especies = dados.filter((especie) => especie.name === animal);
  const animalChoice = especies[0].residents;
  const idade = animalChoice.every((resident) => resident.age > age);
  return idade;
}

module.exports = getAnimalsOlderThan;
