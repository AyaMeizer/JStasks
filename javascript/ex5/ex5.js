let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirmpas');
    let lengthMessage = document.getElementById('lengthErr');
    let confirmMessage = document.getElementById('confErr');
    let submit = document.getElementById('submit');


    password.addEventListener('keydown', function() {
        if (password.value.length < 5 ) {
            lengthMessage.style.color = 'red';
            lengthMessage.innerHTML = 'Too short';
        } else {
            lengthMessage.style.color = 'green';
            lengthMessage.innerHTML = 'good';
            
        }
    });

    confirmPassword.addEventListener('keyup', function() {
        if (confirmPassword.value === password.value && confirmPassword.value.length >= 5) {
            confirmMessage.style.color = 'green';
            confirmMessage.innerHTML = 'matching';
            submit.style.display = 'initial  ';
            

        } 
        else if(confirmPassword.value !== password.value) {
            confirmMessage.style.color = 'red';
            confirmMessage.innerHTML = 'the two Password do not matching';
            submit.style.display = 'none';

        } else {
            
        }
    });