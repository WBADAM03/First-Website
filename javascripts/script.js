
var fname = document.getElementById('#fname');
var lname = document.getElementById('#lname');
var email = document.getElementById('#email');
var message = document.getElementById('#message');

function validateForm(){

if (fname == "" || fname == null){
    window.alert("Please type your first name.");
    }
} 


if (lname == "" || lname == null){
    window.alert("Please type your last name.");
    }


if (email == "" || email == null){
    window.alert("Please type your email address.");
    }


if (message == "" || message == null){
    window.alert("Please type your message.");
    }
