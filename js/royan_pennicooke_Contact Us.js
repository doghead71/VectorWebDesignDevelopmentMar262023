//get contact form reference
var contactForm = document.getElementById("contactForm");

//This will add listener to watch for submit even on contact form and 
//then call submitContactForm function when it hears the event
contactForm.addEventListener("submit", submitContactForm);

//this function will determine what is done when submit event is triggered.
function submitContactForm(event){
    //don't do the default action
    event.preventDefault();

    console.log("submit contact form function triggered");

    //get user input from first name field
    let firstName = document.getElementById("fname").value;
    console.log("First name is: " + firstName);

     //get user input from last name field
    let lastName = document.getElementById("lname").value;
    console.log("Last name is: " + lastName);

     //get user input from email field
    let email = document.getElementById("email").value;
    console.log("Email is: " + email);

     //get user input from contact number field
    let contactNumber = document.getElementById("contact_number").value;
    console.log("Contact number is: " + contactNumber);

     //get user input from subject field
    let subject = document.getElementById("subject").value;
    console.log("Subject is: " + subject);

    //TO DO Some processing to be done;

    //output message

    let messageContainer = document.getElementById("messages");
    messageContainer.InnerHTML = "Form successfully submitted";
}