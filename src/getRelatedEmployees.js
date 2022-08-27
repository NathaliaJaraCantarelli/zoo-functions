const data = require('../data/zoo_data');

function isManager(id) {
  const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
  const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
  const list = [stephanieId, olaId, burlId];
  const managersId = list.some((managerId) => managerId === id);
  return managersId;
}

const funcionariosRetorno = (managerId) => {
  const dados = data.employees;
  const funcionarios = [];
  dados.forEach((managerIdCompar) => {
    for (let index = 0; index < managerIdCompar.managers.length; index += 1) {
      if (managerIdCompar.managers[index] === managerId) {
        const nameCompleted = managerIdCompar.firstName.concat(' ', managerIdCompar.lastName);
        funcionarios.push(nameCompleted);
      }
    }
  });
  return funcionarios;
};

function getRelatedEmployees(managerId) {
  const verify = isManager(managerId);
  if (verify === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    return funcionariosRetorno(managerId);
  }
}

module.exports = { isManager, getRelatedEmployees };
