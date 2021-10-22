const user = document.querySelector("#username");

const pass = document.querySelector("#password");

const form = document.querySelector("#Login");


const isBetween = (length, min) => length < min ? false : true;

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
}; // test is in build fuction which Returns a Boolean value that indicates 
//  whether or not a pattern exists in a searched string. 

// ^	The password starts
// (?=.*[a-z])	The password must contain at least one lowercase character
// (?=.*[A-Z])	The password must contain at least one uppercase character
// (?=.*[0-9])	The password must contain at least one number
// (?=.*[!@#$%^&*])	The password must contain at least one special character.
// (?=.{8,})	The password must be eight characters or longer

const showError = (input, message) => {
    // get the form-field element which is <div> element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message selecting small field by queryselector
    const error = formField.querySelector('.myclass');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element which is <div> element
    const formField = input.parentElement;

    // remove the error class 
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message selecting small field by queryselector
    const error = formField.querySelector('.myclass');
    error.textContent = '';
}

const checkUsername = () => {
    let valid = false;
    let min = 6;
    const username = user.value.trim();
//!isBetween(username.length, min)
    if(username===""){
        alert("Field cannot be blank!!");
        return false;
    }else if(!isBetween(username.length, min)) {
        showError(user, 'Username must be more than 6 characters') // isBetween method checks the input fits the desired criteria 
    }else{
        showSuccess(user);
        valid = true;
    }
    return valid;
}

const checkPassword = () =>{
    let valid = false;
    const password = pass.value.trim();

    if(password===""){
        alert("Field cannot be Blank!!");
        return false;
    }else if(!isPasswordSecure(password)){
        showError(pass, "Password must contain at least one lowercase character , at least one Uppercase character, at least one number , at least one special character, six characters or longer");
    }else{
        showSuccess(pass);
        valid = true;
    }
    return valid;
};

form.addEventListener('submit', function (e) {
    
    // prevent the form from submitting
    e.preventDefault();

     checkUsername();
     checkPassword();

    let isFormValid = checkUsername() && checkPassword();

    if(isFormValid){
         alert("Login Succefull!!!!!")
         return false;
    }
});
