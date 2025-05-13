let formData = {
  email: '',
  message: '',
};

const inputForm = document.querySelector('.fb-form');
if (localStorage.length !== 0) {
  formData = JSON.parse(localStorage.getItem('fb-form-state'));
  inputForm.email.value = formData.email;
  inputForm.message.value = formData.message;
}

inputForm.addEventListener('input', () => {
  formData.email = inputForm.email.value.trim();
  formData.message = inputForm.message.value.trim();
  localStorage.setItem('fb-form-state', JSON.stringify(formData));
});

//Submit
inputForm.addEventListener('submit', e => {
  e.preventDefault();
  if (formData.email != '' && formData.message != '') {
    console.log(formData);
    e.target.reset();
    for (const key in formData) {
      delete formData[key];
    }
    localStorage.removeItem('fb-form-state');
    return;
  } else {
    return alert('Fill please all fields');
  }
});