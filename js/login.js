
function validateForm() {
    var returnval = true;
    // var email=document.forms['login']['uname'].value;
    var em = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(login.uname.value) || /^\d{10}$/.test(login.uname.value);
    var uname = document.forms['login']['uname'].value;
    if (em == false) {
        alert("You have entered an invalid email address or phone number!");
        return (false);

    }

    var pass = document.forms['login']['pwd'].value;
    if (pass.length < 5) {
        alert("Your pwd length is too short!");
        return (false);

    }

    return returnval;
}

function validateForm2() {
    var returnval = true;
    // var email=document.forms['login']['uname'].value;
    var uname = document.forms['register']['uname2'].value;
    if (!isNaN(uname)) {
        alert("Please Enter Only Characters");
        
        return false;
    }

    var em = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(register.email.value) || /^\d{10}$/.test(register.email.value);
    var uname = document.forms['register']['email'].value;
    if (em == false) {
        alert("You have entered an invalid email address or phone number!");
        return (false);

    }

    var pass = document.forms['register']['pwd2'].value;
    if (pass.length < 5) {
        alert("Your pwd length is too short!");
        return (false);

    }
    return returnval;
    //   var letters = /^[A-Za-z]+$/;
    //   if(uname.value.notmatch(letters)){
    //     alert('Username must have alphabet characters only');
    //     return (false);

    //     }

    
}