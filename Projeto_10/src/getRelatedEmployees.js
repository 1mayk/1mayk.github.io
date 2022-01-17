const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some(({ managers }) => managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    return data.employees.filter(({ managers }) => managers.includes(managerId)).map((employee) =>
      `${employee.firstName} ${employee.lastName}`);
  }
}

module.exports = { isManager, getRelatedEmployees };
