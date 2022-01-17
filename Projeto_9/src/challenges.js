// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, heigth) {
  let area = 0;
  area = ((base * heigth) / 2);
  return area;
}
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(frase) {
  let palavras = frase.split(' ');
  return palavras;
}
console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(arrays) {
  let nome = '';
  for (let i = 0; i < arrays.length; i += 1) {
    if (i === arrays.length - 1) {
      nome = `${arrays[i]}, ${arrays[0]}`;
    }
  }
  return nome;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Palillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = 0;
  pontos = (wins * 3) + (ties * 1);
  return pontos;
}
console.log(footballPoints(1, 2));

// Desafio 6
function highestCount(array) {
  let contador = 0;
  let maior = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > maior) {
      maior = array[i];
      contador = 1;
    } else if (array[i] === maior) {
      contador += 1;
    }
  }
  return contador;
}
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result = '';
  if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    result = 'cat2';
  } else if (Math.abs(mouse - cat2) > Math.abs(mouse - cat1)) {
    result = 'cat1';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}
console.log(catAndMouse(0, 5, 5));

// Desafio 8
function fizzBuzz(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      array[i] = 'fizzBuzz';
    } else if (array[i] % 3 === 0) {
      array[i] = 'fizz';
    } else if (array[i] % 5 === 0) {
      array[i] = 'buzz';
    } else {
      array[i] = 'bug!';
    }
  }
  return array;
}

console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(string) {
  let object = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let result = '';
  for (let i = 0; i < string.length; i += 1) {
    if (object[string[i]]) {
      result += object[string[i]];
    } else {
      result += string[i];
    }
  }
  return result;
}
console.log(encode('hi there!'));

function decode(string) {
  let object = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let result = '';
  for (let i = 0; i < string.length; i += 1) {
    if (object[string[i]]) {
      result += object[string[i]];
    } else {
      result += string[i];
    }
  }
  return result;
}
console.log(decode('h3 th2r2!'));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
