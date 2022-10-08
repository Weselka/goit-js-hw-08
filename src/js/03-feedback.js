import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateForm();

function onFormSubmit(event) {
  event.preventDefault();
  // const savedEmail = localStorage.getItem(STORAGE_KEY);
//   const { email, message } = event.currentTarget.elements;
//   const formData = {
//     email: email.value,
//     message: message.value,
//     };
    
    formData[event.target.name] = event.target.value,
    
    console.log(formData);
    // if (event.value.trim() === '') {
    //   alert('Всі поля повинні бути заповнені!');
    // }
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
};

function onFormInput(event) {
  const messageJSON = JSON.stringify(formData);

  localStorage.setItem(STORAGE_KEY, messageJSON);
}

function populateForm() {
  const savedMessageJSON = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedMessageJSON) {
    console.log(savedMessageJSON);
    // refs.textarea.value = savedMessage;
  }
}
