var contactForm = document.getElementById("contactform");

contactForm.addEventListener("submit", submitContactForm);

function submitContactForm(event) {

    event.preventDefault();

    console.log("submit contact form function triggered");

    let name = document.getElementById("name").value;
    console.log("Name is: " + name);

    let email = document.getElementById("email").value;
    console.log("Email is: " + email);

    let telephone = document.getElementById("telephone").value;
    console.log("Telephone is: " + telephone);
    
    let message = document.getElementById("message").value;
    console.log("Message is: " + message);

    let messageContainer = document.getElementById("messages")
    messageContainer.innerHTML = 'Form successfully submitted <i class="fa-solid fa-circle-check"></i>';    
}