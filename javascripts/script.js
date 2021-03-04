
var fname = document.forms('#fname');
var lname = document.forms('#lname');
var email = document.forms('#email');
var message = document.forms('#message');

if (fname.value == "") { 
    window.alert("Please type your first name."); 
    fname.focus(); 
    return false; 
} 

if (lname.value == "") { 
    window.alert("Please type your last name."); 
    lname.focus(); 
    return false; 
} 

if (email.value == "") { 
    window.alert( 
      "Please enter a valid e-mail address."); 
    email.focus(); 
    return false; 
} 

if (message.value == "") { 
    window.alert( 
      "Please type a message."); 
    message.focus(); 
    return false; 
}

return true;

