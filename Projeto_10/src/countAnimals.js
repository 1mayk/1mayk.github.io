const data = require('../data/zoo_data');

// Precisei de ajuda para conseguir resolver o erro
function countAnimals(animal = {}) {
  const { specie, sex } = animal;
  let aux = {};
  data.species.forEach((animalSpecie) => {
    aux[animalSpecie.name] = animalSpecie.residents.length;
  });
  if (specie) {
    aux = data.species.find((an) => an.name === specie).residents.length;
  }
  if (sex) {
    const arrayAnimals = data.species.find((an) => an.name === specie).residents;
    return arrayAnimals.filter((an) => an.sex === sex).length;
  }
  return aux;
}

module.exports = countAnimals;
