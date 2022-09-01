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
  dados.forEach((managerIdCompar) => managerIdCompar.managers
    .forEach((manager) => {
      if (manager === managerId) {
        funcionarios.push(`${managerIdCompar.firstName} ${managerIdCompar.lastName}`);
      }
    }));
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
const actual = '9e7d4524-363c-416a-8759-8aa7e50c0992';
console.log(getRelatedEmployees(actual));
module.exports = { isManager, getRelatedEmployees };
