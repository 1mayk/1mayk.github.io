const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // Retornando diretamente o objeto com as informações
  return ({ child: entrants.filter((entrant) => entrant.age < 18).length,
    adult: entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length,
    senior: entrants.filter((entrant) => entrant.age >= 50).length });
}

function calculateEntry(entrants) {
  // Primeiramente retorna zero se nenhum argumento ou um objeto vazio for passado
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  // Segunda condição
  const arr = Object.entries(countEntrants(entrants));
  const valor = (x, y) =>
    (data.prices[y[0]] * y[1]) + x;
  return arr.reduce(valor, 0);
}

module.exports = { calculateEntry, countEntrants };
