const loginButton = document.querySelector('#login-btn');
const userEmail = document.querySelector('#input-email-login');
const userPass = document.querySelector('#input-pass');

const submitFormBtn = document.querySelector('#submit-btn');
const evalForm = document.querySelector('#evaluation-form');
const textArea = document.querySelector('#textarea');
const userNameForm = document.querySelector('#input-name');
const userLastNameForm = document.querySelector('#input-lastname');
const userEmailForm = document.querySelector('#input-email');
const userHouseForm = document.querySelectorAll('option');
const userFamilyForm = document.querySelectorAll('.family');
const userDisciplineForm = document.querySelectorAll('.subject');
const userRateForm = document.querySelectorAll('.rate');

// Função que checa se email e senha são válidos
function checkLogin() {
  const email = userEmail.value;
  const passWord = userPass.value;

  if (email === 'tryber@teste.com' && passWord === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

// Adiciona ouvinte ao botão para checar login
loginButton.addEventListener('click', checkLogin);

// Função que habilita o botão somente se o agreement estiver habilitado também
// REFERÊNCIA PARA A ATIVAÇÃO CONDICIONAL DO BOTÃO:
// https://www.delftstack.com/pt/howto/javascript/javascript-disable-button/
function botaoAtivar() {
  const botao = document.getElementById('submit-btn');
  const checkbox = document.getElementById('agreement');
  botao.disabled = true;
  checkbox.addEventListener('click', () => {
  // O valor inicia como false e no caso do click esse valor é mudado
    botao.disabled = false;
  });
}
botaoAtivar();

// Decrementar valor de caracteres
function decrementCount() {
  const contador = document.querySelector('#counter');
  textArea.addEventListener('keyup', () => {
    const change = textArea.value.length;
    if (change !== 500) {
      contador.innerText = 500 - change;
    } else {
      contador.innerText = 'Limite Atingido!';
    }
  });
}

// Itera e seleciona casa escolhida pelo usuário
function getUserHouse() {
  let userHouse = '';
  for (let i = 0; i < userHouseForm.length; i += 1) {
    if (userHouseForm[i].selected === true) {
      userHouse = userHouseForm[i].value;
    }
  }
  return userHouse;
}

// Itera e seleciona família escolhida pelo usuário
function getUserFamily() {
  let userFamily = '';
  for (let i = 0; i < userFamilyForm.length; i += 1) {
    if (userFamilyForm[i].checked === true) {
      userFamily = userFamilyForm[i].value;
    }
  }
  return userFamily;
}

// Itera e seleciona matéria escolhida pelo usuário
function getUserDiscipline() {
  const userDiscipline = [];
  for (let i = 0; i < userDisciplineForm.length; i += 1) {
    if (userDisciplineForm[i].checked === true) {
      userDiscipline.push(userDisciplineForm[i].value);
    }
  }
  return userDiscipline.toString().split(',').join(', ');
}

// Itera e seleciona rating escolhido pelo usuário
function getUserRating() {
  let userRate = '';
  for (let i = 0; i < userRateForm.length; i += 1) {
    if (userRateForm[i].checked === true) {
      userRate = userRateForm[i].value;
    }
  }
  return userRate;
}

// Insere dados do formulário no innerHTML
submitFormBtn.addEventListener('click', (ev) => {
  ev.preventDefault();
  evalForm.innerHTML = `
  Nome: ${userNameForm.value} ${userLastNameForm.value}
  Email: ${userEmailForm.value}
  Casa: ${getUserHouse()}
  Família: ${getUserFamily()}
  Matérias: ${getUserDiscipline()}
  Avaliação: ${getUserRating()}
  Observações: ${textArea.value}
  `;
});

decrementCount();
