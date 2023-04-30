var contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", submitContactForm);

function submitContactForm(event){

event.preventDefault();
    
console.log("submit contact form function triggered");
    
let firstName = document.getElementById("first_name").value;
console.log("First name is: " + firstName);
    
let lastName = document.getElementById("last_name").value;
console.log("Last name is: " + lastName);

let telephonenumber = document.getElementById("telephone_number").value;
console.log("Telephone number is: " + telephonenumber);

let email = document.getElementById("email_address").value;
console.log("Email Address is: " + email);

let subject = document.getElementById("subject").value;
console.log("Subject is: " + subject);

let messageContainer = document.getElementById("messages");
messageContainer.innerHTML = "Form successfully submitted";

}
