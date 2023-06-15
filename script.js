const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const captcha = document.getElementById('captcha');

form.addEventListener('submit', (e)=>{
e.preventDefault();
 checkInputs();
});

function checkInputs () {
// get users value
   const usernameVal = username.value.trim();
   const emailVal = email.value.trim();
   const passwordVal = password.value.trim();
   const password2Val = password2.value.trim();
   const captchaVal = username.value.trim();
   if (usernameVal === '') {
    setError(username, 'username can not be empty');
} else if (usernameVal.length < 5) {
setError(username, 'The minimum username length is 5')
} else {
    setSuccess(username)
}
//email
if (emailVal === '') {
    setError(email, 'email can not be empty');
} else if (!emailVal.includes('@')) {
setError(email, 'This is not a valid email')
} else {
    setSuccess(email)
}
 
//password
if (passwordVal === '') {
    setError(password, 'password can not be empty');
} else if (passwordVal.length < 5) {
setError(password, 'Password is weak')
} else {
    setSuccess(password)
}

//password
if (password2Val === '') {
    setError(password2, 'password can not be empty');
} else if (passwordVal.length < 5) {
setError(password, 'Password is weak')
} else if (password2Val !== passwordVal) {
    setError (password2, 'Password does not match')
} else {
    setSuccess(password2)
}

//Captcha
if (captchaVal === '') {
    setError(captcha, 'Authentication needed')
} else {
    setSuccess (captcha)
}

function setError(input, msg) {
const formControl = input.parentElement; 
const small = formControl.querySelector("small"); 
formControl.className = "form-control error";
// formControl.classList.add('error small.innerText = msg;
small.innerText = msg;
}
function setSuccess(input) {
const formControl = input.parentElement;
formControl.className = "form-control success"; 
}
}