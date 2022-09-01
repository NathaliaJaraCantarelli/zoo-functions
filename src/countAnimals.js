const data = require('../data/zoo_data');

const allAnimals = (dados) => {
  const objectAnimals = {};
  dados.forEach((allAnimal) => {
    objectAnimals[allAnimal.name] = allAnimal.residents.length;
  });
  return objectAnimals;
};

const maleFemale = (dados, tipo, animal) => {
  const animalInput = animal.specie;
  let cont = 0;
  dados.forEach((typeAnimal) => typeAnimal.residents
    .forEach((resident) => {
      if ((typeAnimal.name === animalInput) && (resident.sex === tipo)) {
        cont += 1;
      }
    }));
  return cont;
};

const specieOnly = (animal, dados) => {
  const listAnimals = allAnimals(dados);
  let numberAnimals = 0;
  const array = Object.keys(listAnimals);
  const numbers = Object.values(listAnimals);
  array.forEach((arrayPosition, index) => {
    if (animal.specie === arrayPosition) {
      numberAnimals = numbers[index];
    }
  });
  return numberAnimals;
};

function countAnimals(animal) {
  const dados = data.species;
  let retorno;
  if (animal === undefined) {
    retorno = allAnimals(dados);
  } else if (animal.sex) {
    const sexAnimal = animal.sex;
    retorno = maleFemale(dados, sexAnimal, animal);
  } else {
    retorno = specieOnly(animal, dados);
  }
  return retorno;
}
console.log(countAnimals());
module.exports = countAnimals;
