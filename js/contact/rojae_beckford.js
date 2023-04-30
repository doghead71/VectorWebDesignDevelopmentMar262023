function validateForm() {
    var name = document.forms["myForm"]["yourname"].value;
    var email = document.forms["myForm"]["lastname"].value;
    var phone = document.forms["myForm"]["Telenum"].value;
    if (name == "" || email == "" || phone == "") {
      alert("Name, Email and Telephone number must be filled out");
      return false;
    }
  }
  var contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", submitcontactForm);
function submitcontactForm(event){
    event.preventDefault();

    console.log("submit contact form function triggered");

    let name = document.getElementById("fname").value;
    console.log("name is: " + name);

    let email = document.getElementById("email").value;
    console.log("Email is: " + email);

    let telephone = document.getElementById("tele").value;
    console.log("Telephone is: " + telephone);

    let subject = document.getElementById("subject").value;
    console.log("subject is: " + subject);
}
