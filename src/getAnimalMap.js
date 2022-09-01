const data = require('../data/zoo_data');

// const includeNamesFunction = (dados, options) => {
//   const retorno = { NE: [], NW: [], SE: [], SW: [] };
//   dados.forEach((animal) => {
//     const names = [];
//     const objeto = {};
//     names[animal.name] = [];
//     animal.residents.forEach((resident) => {
//       if ((!options.sex) || (resident.sex === options.sex)) {
//         names[animal.name].push(resident.name);
//       }
//     });
//     if (options.sorted === true) { names[animal.name].sort(); }
//     objeto[animal.name] = names[animal.name];
//     retorno[animal.location].push(objeto);
//   });
//   return retorno;
// };

const criaElemento = (localizacao, options) => {
  const dados = data.species;
  const testeDado = dados
    .filter((locationName) => locationName.location === localizacao).map((animal) => {
      let objectoRetorno = {};
      if (options.sorted) {
        objectoRetorno = { [animal.name]: animal.residents
          .filter((resident) => ((!options.sex) || (resident.sex === options.sex)))
          .map((resident) => resident.name).sort(),
        };
      } else {
        objectoRetorno = { [animal.name]: animal.residents
          .filter((resident) => ((!options.sex) || (resident.sex === options.sex)))
          .map((resident) => resident.name),
        };
      }
      return objectoRetorno;
    });
  return testeDado;
};

const teste = (options) => {
  const retorno = {
    NE: criaElemento('NE', options),
    NW: criaElemento('NW', options),
    SE: criaElemento('SE', options),
    SW: criaElemento('SW', options),
  };
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
    retorno = teste(options);
  }
  return retorno;
}

module.exports = getAnimalMap;
