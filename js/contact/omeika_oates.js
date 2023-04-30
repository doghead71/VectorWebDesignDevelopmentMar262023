function submitContactForm(event){

    event.preventDefault();

    console.log("submit contact form function triggered");
    let firstname=document.getElementById("fname").Value;
    console.log("First Name is: " + firstname);

}