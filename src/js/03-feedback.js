import _ from 'lodash';

const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY_FORM = 'feedback-form-state';
const unstringifiedFields = localStorage.getItem(STORAGE_KEY_FORM);

// keeping values from email and message in local storage
// in an object {}

const feedbackField = {};

const trackInput = e => {
  e.preventDefault();
  const emailValue = formEl.elements.email.value;
  const messageValue = formEl.elements.message.value;
  feedbackField.email = emailValue;
  feedbackField.message = messageValue;
  const stringifiedFields = JSON.stringify(feedbackField);
  localStorage.setItem(STORAGE_KEY_FORM, stringifiedFields);
};

formEl.addEventListener('input', _.throttle(trackInput, 500));

// handle submit - log object with fields, clear storage
formEl.addEventListener('submit', e => {
  e.preventDefault();
  //   const unstringifiedFields = localStorage.getItem(STORAGE_KEY_FORM);
  console.log(JSON.parse(unstringifiedFields));
  localStorage.clear();
});

// after reloading the page fill input fields with local storage
window.addEventListener('load', () => {
  formEl.elements.email.value = localStorage.getItem(
    JSON.parse(unstringifiedFields).email
  );
  formEl.elements.message.value = localStorage.getItem(
    JSON.parse(unstringifiedFields).message
  );
});

// console.log(typeof JSON.parse(unstringifiedFields).message);
