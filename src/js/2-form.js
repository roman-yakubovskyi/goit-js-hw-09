const formData = {
  email: '',
  message: '',
};
const localStorageKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.form-input');
const messageInput = document.querySelector('.form-txtarea');

const saveFormData = () => {
  formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
};
form.addEventListener('input', saveFormData);
const loadFormData = () => {
  const savedData = localStorage.getItem(localStorageKey);
  if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
};

window.addEventListener('load', loadFormData);
form.addEventListener('submit', event => {
  event.preventDefault();
  if (emailInput.value === '' || messageInput.value === '') {
    return alert('Fill please all fields');
  }
  console.log(formData);

  localStorage.removeItem(localStorageKey);
  form.reset();
  formData = {
    email: '',
    message: '',
  };
});
