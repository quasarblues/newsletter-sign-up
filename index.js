const formEl = document.querySelector('form');
const emailInputEl = document.querySelector('#email');
let emailValue = emailInputEl.value;
const projectEl = document.querySelector('.project-container');
const thankYouEl = document.querySelector('.thank-you-container');
const emailThankYou = document.querySelector('.user-email');
const dismissBtn = document.querySelector('.thank-you-container button');
const errMsg = document.querySelector('.form-group span');

// Validate email iput
const regex = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Get value of email input
emailInputEl.addEventListener('input', (e) => {
    console.log(e.target.value);
    emailValue = emailInputEl.value;
})

// Remove error msg when focused
emailInputEl.addEventListener('focus', (e) => {
    errMsg.style.display = 'none'
    emailInputEl.classList.remove('error');
})

// Handle form submission
formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    if (regex.test(emailValue)) {
        projectEl.style.display = 'none';
        thankYouEl.style.display = 'flex';
        emailThankYou.innerText = emailValue;
        console.log('form was successful')
    } else {
        errMsg.style.display = 'inline'
        emailInputEl.classList.add('error');
    }
})

// Reload page
dismissBtn.addEventListener('click', () => {
    location.reload();
})