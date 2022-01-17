const criarCarta = document.querySelector('#criar-carta');
const cartaGerada = document.querySelector('#carta-gerada');
const cartaTexto = document.querySelector('#carta-texto');

function removerHistorico() {
  for (let i = cartaGerada.childNodes.length - 1; i >= 0; i -= 1) {
    const palavra = cartaGerada.childNodes[i];
    palavra.remove();
  }
}

function validarInput() {
  if (cartaTexto.value === '' || cartaTexto.value === ' ') {
    cartaGerada.innerHTML = 'Por favor, digite o conteúdo da carta.';
  }
}

function definirEstiloAleatório() {
  const estilo = ['newspaper', 'magazine1', 'magazine2'];
  const numeroAleatorio = Math.floor(Math.random() * (estilo.length));

  return estilo[numeroAleatorio];
}

function definirTamanhoAleatório() {
  const tamanho = ['medium', 'big', 'reallybig'];
  const numeroAleatorio = Math.floor(Math.random() * (tamanho.length));

  return tamanho[numeroAleatorio];
}

function definirRotacaoAleatória() {
  const rotacao = ['rotateleft', 'rotateright'];
  const numeroAleatorio = Math.floor(Math.random() * (rotacao.length));

  return rotacao[numeroAleatorio];
}

function definirInclinacaoAleatória() {
  const inclinacao = ['skewleft', 'skewright'];
  const numeroAleatorio = Math.floor(Math.random() * (inclinacao.length));

  return inclinacao[numeroAleatorio];
}

criarCarta.addEventListener('click', () => {
  removerHistorico();
  validarInput();

  const splitFrase = cartaTexto.value.split(' ');

  for (let i = 0; i < splitFrase.length; i += 1) {
    const estilo = definirEstiloAleatório();
    const tamanho = definirTamanhoAleatório();
    const rotacao = definirRotacaoAleatória();
    const inclinacao = definirInclinacaoAleatória();

    const palavra = document.createElement('span');
    palavra.innerHTML = splitFrase[i];
    palavra.classList.add(estilo, tamanho, rotacao, inclinacao);
    cartaGerada.appendChild(palavra);
  }
});

cartaGerada.addEventListener('click', (event) => {
  const palavraSelecionada = event.target;

  palavraSelecionada.classList = '';

  const estilo = definirEstiloAleatório();
  const tamanho = definirTamanhoAleatório();
  const rotacao = definirRotacaoAleatória();
  const inclinacao = definirInclinacaoAleatória();

  palavraSelecionada.classList.add(estilo, tamanho, rotacao, inclinacao);
});

criarCarta.addEventListener('click', () => {
  const cartaContador = document.querySelector('#carta-contador');
  cartaContador.innerHTML = cartaGerada.childElementCount;
});
