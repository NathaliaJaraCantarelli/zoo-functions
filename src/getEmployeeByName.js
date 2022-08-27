const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const dados = data.employees;
  const nome = {};
  const pessoaDados = dados
    .find((pessoa) => pessoa.firstName === employeeName || pessoa.lastName === employeeName);
  return employeeName === undefined ? nome : pessoaDados;
}

module.exports = getEmployeeByName;
