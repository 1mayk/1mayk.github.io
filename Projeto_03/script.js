// Req 5
const list = document.getElementById('lista-tarefas');
const botao = document.getElementById('criar-tarefa');
const task = document.getElementById('texto-tarefa');
function addLista() {
  botao.addEventListener('click', () => {
    const listItem = document.createElement('li');
    listItem.innerText = task.value;
    list.appendChild(listItem);
    task.value = '';
  });
}
addLista();

// Req 7 --> Depois do 8 não foi mais necessário
// function changeBackground() {
//   list.addEventListener('click', (origem) => {
//     const item = origem.target;
//     item.style.backgroundColor = 'rgb(128,128,128)';
//   });
// }
// changeBackground();

// Req 8
function selected() {
  list.addEventListener('click', (e) => {
    const filhos = list.childNodes;
    const origem = e.target;
    for (let i = 0; i < filhos.length; i += 1) {
      if (filhos[i] === origem) {
        origem.classList.add('selected');
      } else {
        filhos[i].classList.remove('selected');
      }
    }
    // Utilizei para testar os comandos antes de modificar o CSS
    // console.log(document.getElementsByClassName('selected')[0].innerText);
  });
}
selected();

// Req 9
// Aqui utilizei a propriedade Toggle() para alternar entre adicionar ou remover uma classe
// Referência: https://www.w3schools.com/howto/howto_js_toggle_class.asp
function riscarTexto() {
  list.addEventListener('dblclick', (e) => {
    const origem = e.target;
    const lista = list.childNodes;
    for (let i = 0; i < lista.length; i += 1) {
      if (lista[i] === origem) {
        origem.classList.toggle('completed');
      }
    }
  });
}
riscarTexto();

// Req 10
function limpar() {
  const apagar = document.getElementById('apaga-tudo');
  apagar.addEventListener('click', () => {
    const lista = list.childNodes;
    // Precisa ser feito o inverso do laço normal para que assim não dê bug no
    // valor do index ser maior que o da lista, brecando o laço "pela metade"
    for (let i = lista.length - 1; i >= 0; i -= 1) {
      lista[i].remove();
    }
  });
}
limpar();

// Req 11
function finalizados() {
  const apagar = document.getElementById('remover-finalizados');
  apagar.addEventListener('click', () => {
    const lista = list.childNodes;
    for (let i = lista.length - 1; i >= 0; i -= 1) {
      if (lista[i].classList.value.includes('completed')) {
        lista[i].remove();
      }
    }
  });
}
finalizados();
