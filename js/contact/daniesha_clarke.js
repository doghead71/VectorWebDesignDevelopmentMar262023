
var contactForm = document.getElementById("contactForm");


contactForm.addEventListener("submit", submitContactForm);


function submitContactForm(event){
   
    event.preventDefault();

    console.log("submit contact form function triggered");

    
    let firstName = document.getElementById("fname").value;
    console.log("First name is: " + firstName);

    
    let lastName = document.getElementById("lname").value;
    console.log("Last name is: " + lastName);

     
    let email = document.getElementById("mail").value;
    console.log("Email is: " + email);

     
    let contactNumber = document.getElementById("pnumber").value;
    console.log("Contact number is: " + contactNumber);

     
    let message = document.getElementById("message").value;
    console.log("Subject is: " + message);

    let messagecontainer=document.getElementById("messages");
    messagecontainer.innerHTML=("Form submitted successfully")

}

