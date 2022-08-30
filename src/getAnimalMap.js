const data = require('../data/zoo_data');

const includeNamesFunction = (dados, options) => {
  const retorno = { NE: [], NW: [], SE: [], SW: [] };
  dados.forEach((animal) => {
    const names = [];
    const objeto = {};
    names[animal.name] = [];
    animal.residents.forEach((resident) => {
      if ((!options.sex) || (resident.sex === options.sex)) {
        names[animal.name].push(resident.name);
      }
    });
    if (options.sorted === true) { names[animal.name].sort(); }
    objeto[animal.name] = names[animal.name];
    retorno[animal.location].push(objeto);
  });
  return retorno;
};

function getAnimalMap(options) {
  const dados = data.species;
  let retorno = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  if ((!options) || (!options.includeNames)) {
    dados.forEach((animal) => retorno[animal.location].push(animal.name));
  } else if (options.includeNames === true) {
    retorno = includeNamesFunction(dados, options);
  }
  return retorno;
}
console.log(getAnimalMap({ includeNames: true }));
module.exports = getAnimalMap;
