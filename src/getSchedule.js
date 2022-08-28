const data = require('../data/zoo_data');

const getHours = (hours) => {
  const days = Object.keys(hours);
  const openClose = Object.values(hours);
  const open = [];
  openClose.forEach((dayOpen) => open.push(dayOpen.open));
  const close = [];
  openClose.forEach((dayClose) => close.push(dayClose.close));
  const dados = [days, open, close];
  return dados;
};

const getAnimals = (dados, day) => {
  const animalDay = [];
  dados.forEach((dado) => {
    if (dado.availability.some((dadoDay) => dadoDay === day) === true) {
      animalDay.push(dado.name);
    }
  });
  return animalDay;
};

const creatObject = (hours, dados) => {
  const hoursAll = {};
  const hoursData = getHours(hours);
  hoursData[0].forEach((day, index) => {
    hoursAll[day] = {
      officeHour: `Open from ${hoursData[1][index]}am until ${hoursData[2][index]}pm`,
      exhibition: getAnimals(dados, day),
    };
  });
  hoursAll.Monday.officeHour = 'CLOSED';
  hoursAll.Monday.exhibition = 'The zoo will be closed!';
  console.log(hoursAll);
  return hoursAll;
};

function getSchedule(scheduleTarget) {
  const dados = data.species;
  const daysWeek = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  const hoursAll = creatObject(data.hours, dados);
  let retorno = hoursAll;
  daysWeek.forEach((dayWeek) => {
    if (dayWeek === scheduleTarget) {
      const dayActual = {};
      dayActual[scheduleTarget] = hoursAll[scheduleTarget];
      retorno = dayActual;
    }
  });
  dados.forEach((animal) => {
    if (animal.name === scheduleTarget) {
      retorno = animal.availability;
    }
  });
  return retorno;
}

module.exports = getSchedule;
