const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animalName = data.employees.find((x) => x.id === id).responsibleFor[0];
  const residentes = data.species.find((y) => y.id === animalName).residents;
  const agesArray = [];
  // Desculpa misturar ingles com português, faltou criatividade
  residentes.forEach((idade) => agesArray.push(idade.age));
  const highAge = Math.max(...agesArray);
  const olderAnimal = residentes.find((residente) => residente.age === highAge);
  const aux = [olderAnimal.name, olderAnimal.sex, olderAnimal.age];
  return aux;
}

module.exports = getOldestFromFirstSpecies;
