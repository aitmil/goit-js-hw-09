const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const email = form.elements.email;
const message = form.elements.message;

const storedFormData = JSON.parse(localStorage.getItem(localStorageKey)) || {
  email,
  message,
};
email.value = storedFormData.email;
message.value = storedFormData.message;

form.addEventListener('input', () => {
  const formData = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (email.value == '' || message.value == '') {
    return alert('All fields must be filled in');
  }
  console.log(storedFormData);
  localStorage.removeItem(localStorageKey);
  form.reset();
});
