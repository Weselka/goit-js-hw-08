import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateForm();

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  if (
    email.value.trim() === '' ||
    message.value.trim() === ''
  ) {
    alert('Всі поля повинні бути заповнені!');
    return;
  }
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(event) {
  event.preventDefault();

  const formData = {
    email: refs.input.value,
    message: refs.textarea.value,
  };
  const formJSON = JSON.stringify(formData);

  localStorage.setItem(STORAGE_KEY, formJSON);
}

function populateForm() {
  const savedFormJSON = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedFormJSON) {
    console.log(savedFormJSON);
    refs.input.value = savedFormJSON.email;
    refs.textarea.value = savedFormJSON.message;
  }
}
