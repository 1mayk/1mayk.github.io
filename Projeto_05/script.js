// text input
const textInput = document.querySelector('#text-input');

textInput.addEventListener('input', () => {
  const memeText = document.querySelector('#meme-text');
  memeText.innerText = textInput.value;
});

// file input
const memeInsert = document.querySelector('#meme-insert');

memeInsert.addEventListener('change', () => {
  const memeImage = document.querySelector('#meme-image');
  memeImage.src = URL.createObjectURL(memeInsert.files[0]);
});

// fire, water and earth button
const submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click', (event) => {
  const memeImageContainer = document.querySelector('#meme-image-container');
  const buttonStyle = window.getComputedStyle(event.target);
  memeImageContainer.style.border = buttonStyle.getPropertyValue('border');
});

// add meme images
const memeCollection = document.querySelector('#meme-collection');

memeCollection.addEventListener('click', (event) => {
  const meme = event.target;
  const memeImage = document.querySelector('#meme-image');
  memeImage.src = meme.src;
});
