function submitContactForm(event){

    event.preventDefault();

    console.log("submit contact form function triggered");

    let firstname=document.getElementById("fname").Value;
    console.log("First Name is: " + firstname);

    let lastname =document.getElementById("fname").Value;
    console.log("Last Name is: " + lastname);

    let email =document.getElementById("email").Value;
    console.log("email is: " + email);

    let contactnumber =document.getElementById("contact_number").Value;
    console.log("contact number is: " + contactNumber);

}