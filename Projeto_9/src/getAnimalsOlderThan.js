const data = require('../data/zoo_data');

function getAnimalsOlderThan(nomeAnimal, idade) {
  return (data.species.find((specie) =>
    specie.name === nomeAnimal).residents.every((resident) => resident.age >= idade));
}

module.exports = getAnimalsOlderThan;
