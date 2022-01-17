const data = require('../data/zoo_data');

// Primeiro preciso criar o objeto que será retornado
const objeto = () => {
  const criarObjeto = data.employees.map(({ id, firstName, lastName, responsibleFor }) => {
    const obj = {
      id,
      fullName: `${firstName} ${lastName}`,
    };
    obj.species = responsibleFor.map((an) => data.species.find((spc) => spc.id === an).name);
    obj.locations = responsibleFor.map((an) => data.species.find((spc) => spc.id === an).location);
    return obj;
  });
  return criarObjeto;
};

// Verificando funcionário
function employeee({ name, id }) {
  return data.employees.some((e) => name === e.firstName || name === e.lastName || id === e.id);
}

// Requisito do exercício
function getEmployeesCoverage(employee) {
  if (!employee) return objeto();
  if (employeee(employee) === false) throw new Error('Informações inválidas');
  if (employee.id) return objeto().find((idEmployee) => idEmployee.id === employee.id);
  if (employee.name) return objeto().find((nameEmp) => nameEmp.fullName.includes(employee.name));
}

module.exports = getEmployeesCoverage;
