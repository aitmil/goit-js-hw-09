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

form.addEventListener('input', onInput);
function onInput() {
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  const data = JSON.stringify({ email, message });
  localStorage.setItem(localStorageKey, data);
}

form.addEventListener('submit', onSubmit);
function onSubmit(e) {
  e.preventDefault();
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  if (email !== '' || message !== '') {
    console.log({
      email,
      message,
    });
  }
  localStorage.removeItem(localStorageKey);
  form.reset();
}
