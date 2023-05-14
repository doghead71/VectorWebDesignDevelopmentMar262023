var contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", submitContactForm);

function submitContactForm(event){
    //don't do the default action
    event.preventDefault();

    console.log("submit contact form function triggered");

    //get user input from first name field
    let firstName = document.getElementById("fname").value;
    console.log("enter full name: " + Name);


}

