const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const jsn = localStorage.getItem(localStorageKey) ?? '';
try {
  const data = JSON.parse(jsn);
  form.elements.email.value = data.email;
  form.elements.message.value = data.message;
} catch {
  console.log('No saved data');
}

let formData = {};

form.addEventListener('input', onInput);
function onInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

form.addEventListener('submit', onSubmit);
function onSubmit(e) {
  e.preventDefault();
  const input = document.querySelector('input');
  const textarea = document.querySelector('textarea');
  if (input.value !== '' || textarea.value !== '') {
    console.log(formData);
  }
  localStorage.removeItem(localStorageKey);
  form.reset();
}
