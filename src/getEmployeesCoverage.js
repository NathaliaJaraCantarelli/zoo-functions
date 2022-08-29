const data = require('../data/zoo_data');

const retornoFuncao = (nameEmployee) => {
  const dados = data.species;
  const speciesArray = [];
  const locationsArray = [];
  dados.forEach((dado) => {
    nameEmployee.responsibleFor.forEach((animal) => {
      if (dado.id === animal) {
        speciesArray.push(dado.name);
        locationsArray.push(dado.location);
      }
    });
  });
  const retorno = {
    id: nameEmployee.id,
    fullName: `${nameEmployee.firstName} ${nameEmployee.lastName}`,
    species: speciesArray,
    locations: locationsArray,
  };
  return retorno;
};

const idFunction = (dados, object, teste) => {
  let retorno;
  let teste2 = teste;
  dados.forEach((nameEmployee) => {
    if (nameEmployee.id === object.id) {
      retorno = retornoFuncao(nameEmployee);
      teste2 = true;
    }
  });
  if (teste2 === false) {
    throw new Error('Informações inválidas');
  } else {
    return retorno;
  }
};

const nameFunction = (dados, object) => {
  let retorno;
  dados.forEach((nameEmployee) => {
    if ((nameEmployee.firstName === object.name) || (nameEmployee.lastName === object.name)) {
      retorno = retornoFuncao(nameEmployee);
    }
  });
  return retorno;
};

function getEmployeesCoverage(object) {
  const dados = data.employees;
  let retorno = {};
  let teste = false;
  if (!object) {
    retorno = [];
    dados.forEach((nameEmployee) => retorno.push(retornoFuncao(nameEmployee)));
  } else if (object.name) {
    retorno = nameFunction(dados, object);
    teste = true;
  } else if (object.id) {
    retorno = idFunction(dados, object, teste);
  }
  return retorno;
}

module.exports = getEmployeesCoverage;
