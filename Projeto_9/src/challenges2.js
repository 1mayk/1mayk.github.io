// Desafio 10
function techList(array, name) {
  array.sort();
  let result = [{}];
  if (array.length === 0) {
    result = 'Vazio!';
  } else {
    for (let i = 0; i < array.length; i += 1) {
      result[i] = { tech: array[i], name };
    }
  }
  return result;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11
function generatePhoneNumber(array) {
  let contador = 0;
  let cp = '';
  let metade1 = '';
  let metade2 = '';
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        contador += 1;
      }
    }
    if (array[i] < 0 || array[i] > 9 || contador >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    contador = 0;
  }
  cp = array.slice(0, 2).join('');
  metade1 = array.slice(2, 7).join('');
  metade2 = array.slice(7, 11).join('');
  let result = `(${cp}) ${metade1}-${metade2}`;
  return result;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let somaAB = lineA + lineB;
  let somaAC = lineA + lineC;
  let somaBC = lineB + lineC;
  let absAB = Math.abs(lineA - lineB);
  let absAC = Math.abs(lineA - lineC);
  let absBC = Math.abs(lineB - lineC);
  if (lineC < somaAB && lineC > absAB && lineB < somaAC && lineB > absAC && lineA < somaBC && lineA > absBC) {
    return true;
  }
  return false;
}
console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(string) {
  let cont = 0;
  let result = '';
  for (let i in string) {
    if (string[i] === '1') {
      cont += 1;
    } else if (string[i] === '2') {
      cont += 2;
    } else if (string[i] === '3') {
      cont += 3;
    } else if (string[i] === '4') {
      cont += 4;
    } else if (string[i] === '5') {
      cont += 5;
    } else if (string[i] === '6') {
      cont += 6;
    } else if (string[i] === '7') {
      cont += 7;
    } else if (string[i] === '8') {
      cont += 8;
    } else if (string[i] === '9') {
      cont += 9;
    }
    if (cont === 1) {
      result = `${cont} copo de água`;
    } else {
      result = `${cont} copos de água`;
    }
  }
  return result;
}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
