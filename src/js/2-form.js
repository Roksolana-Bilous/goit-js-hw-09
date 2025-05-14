let formData = {
  email: '',
  message: '',
};

const inputForm = document.querySelector('.feedback-form');

const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  formData = JSON.parse(savedData);
  inputForm.elements.email.value = formData.email;
  inputForm.elements.message.value = formData.message;
}

inputForm.addEventListener('input', () => {
  formData.email = inputForm.elements.email.value.trim();
  formData.message = inputForm.elements.message.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

inputForm.addEventListener('submit', e => {
  e.preventDefault();

  if (formData.email && formData.message) {
    console.log(formData);
    e.target.reset();
    localStorage.removeItem('feedback-form-state');
    formData = { email: '', message: '' };
  } else {
    alert('Fill please all fields');
  }
});
