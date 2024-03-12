function validateForm(event){

    event.preventDefault()

    let fname = document.forms["contactForm"]["fname"].value;
    let lname = document.forms["contactForm"]["lname"].value;
    let email = document.forms["contactForm"]["email"].value;
    let address = document.forms["contactForm"]["address"].value;
    let message = document.forms["contactForm"]["message"].value;

    if (fname=="") {
      document.getElementById("fname-error").style.display = "inline-block";

      document.getElementById("lname-error").style.display = "none";
      document.getElementById("email-error").style.display = "none";
      document.getElementById("address-error").style.display = "none";
      document.getElementById("message-error").style.display = "none";

      return false;
    }

    else if (lname=="") {
      document.getElementById("lname-error").style.display = "inline-block";

      document.getElementById("fname-error").style.display = "none";
      document.getElementById("email-error").style.display = "none";
      document.getElementById("address-error").style.display = "none";
      document.getElementById("message-error").style.display = "none";

      return false;
    }

    else if (email=="") {
      document.getElementById("email-error").style.display = "inline-block";

      document.getElementById("fname-error").style.display = "none";
      document.getElementById("lname-error").style.display = "none";
      document.getElementById("address-error").style.display = "none";
      document.getElementById("message-error").style.display = "none";

      return false;
    }

    else if (address=="") {
      document.getElementById("address-error").style.display = "inline-block";

      document.getElementById("fname-error").style.display = "none";
      document.getElementById("lname-error").style.display = "none";
      document.getElementById("email-error").style.display = "none";
      document.getElementById("message-error").style.display = "none";

      return false;
    }

    else{
      document.getElementById("thank-you-message").style.display = "flex";
      
    }

}

document.getElementById("submit").addEventListener("click", validateForm);


// Thank You cart modal
function exitThankYou(){
  document.getElementById("thank-you-message").style.display = "none";
  location.reload()
}