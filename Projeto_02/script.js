// Cores da paleta
const square = document.querySelectorAll('.color')[0];
square.style.backgroundColor = 'black';
square.nextElementSibling.style.backgroundColor = 'green';
square.nextElementSibling.nextElementSibling.style.backgroundColor = 'blue';
square.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = 'red';

// Adicionando quandro de pixels
const pai = document.getElementById('pixel-board');
function buildPixels() {
  for (let i = 0; i < 5; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pai.appendChild(pixel);
    }
  }
}
buildPixels();

// Definindo preto como cor selecionada
square.classList.add('selected');

// Passando o selected para o elemento color clicado
const allSquare = document.getElementsByClassName('color');
function mudar() {
  for (let i = 0; i < allSquare.length; i += 1) {
    allSquare[i].addEventListener('click', () => {
      const selecionado = document.querySelectorAll('.selected');
      selecionado[0].classList.remove('selected');
      allSquare[i].classList.add('selected');
    });
  }
}
mudar();

// Pintando o pixel
function pintar() {
  // const selecteeeed = document.getElementsByClassName('color selected')[0];
  pai.addEventListener('click', (origem) => {
    const quad = origem.target;
    if (quad.className === 'pixel') {
      const selecteeeed = document.querySelector('.selected').style.backgroundColor;
      quad.style.backgroundColor = selecteeeed;
    }
  });
}
pintar();

// Botao que limpa
const botao = document.getElementById('clear-board');
const quad2 = document.getElementsByClassName('pixel');
botao.addEventListener('click', () => {
  for (let i = 0; i < quad2.length; i += 1) {
    quad2[i].style.backgroundColor = 'white';
  }
});
