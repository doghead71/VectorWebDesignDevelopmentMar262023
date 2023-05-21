//get contact form reference
var contactForm = document.getElementById("contactForm");

//add listener to watch for submit even on contact form and 
//call submitContactForm function when it hears the event
contactForm.addEventListener("submit", submitContactForm);

//this function will determine what is done when submit event is triggered.
function submitContactForm(event){
    //don't do the default action
    event.preventDefault();

    console.log("submit contact form function triggered");

    //get user input from first name field
    let firstname = document.getElementById("fname").value;
    console.log("First name is: " + firstname);

     //get user input from last name field
    let lastname = document.getElementById("lname").value;
    console.log("Last name is: " + lastname);

     //get user input from email field
    let email = document.getElementById("email_address").value;
    console.log("Email is: " + email);

     //get user input from contact number field
    let phonenumber = document.getElementById("phone_number").value;
    console.log("phone number is: " + phonenumber);

     //get user input from subject field
    let message = document.getElementById("leave_message").value;
    console.log("Subject is: " + message);
}

