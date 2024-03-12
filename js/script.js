// Mobile-Tablet menu 
function openMenu(){
  let menu = document.getElementById("mobile-menu");
  let body = document.getElementById("body-container");

  menu.style.display = "flex";
  body.style.overflow = "hidden";
}


function exitMenu(){
  let menu = document.getElementById("mobile-menu");
  let body = document.getElementById("body-container");
  
  menu.style.display = "none";
  body.style.overflow = "auto";
}


// User Sign in-up Form
function openForm(){
  let form = document.getElementById("user-form-container");
  let body = document.getElementById("body-container");

  form.style.display = "flex";
  body.style.overflow = "hidden";
}


function exitForm(){
  let form = document.getElementById("user-form-container");
  let body = document.getElementById("body-container");
  
  form.style.display = "none";
  body.style.overflow = "auto";
  exitMenu();
}


function signUpForm(){
  let signIn = document.getElementById("sign-in");
  let signUp = document.getElementById("sign-up");

  signIn.style.display = "none";
  signUp.style.display = "block";
}


function signInForm(){
  let signIn = document.getElementById("sign-in");
  let signUp = document.getElementById("sign-up");
  
  signIn.style.display = "block";
  signUp.style.display = "none";
}



// added to cart modal
function openCart(){
  let modal = document.getElementById("added-to-cart");
  let body = document.getElementById("body-container");

  modal.style.display = "flex";
  body.style.overflow = "hidden";
}


function exitCart(){
  let modal = document.getElementById("added-to-cart");
  let body = document.getElementById("body-container");
  
  modal.style.display = "none";
  body.style.overflow = "auto";
}



// Newsletter Subscription
function newsletterSubs(){

  let email = document.getElementById("newsletter-email").value;
  let error = document.getElementById("newsletter-error");
  let subscribed = document.getElementById("newsletter-subscribed");

  if (email=="") {
    error.style.display = "inline-block";
    error.style.color = "#ff7878";
    error.style.textAlign = "center";
    error.style.marginTop = "3px";
  }

  else{
    subscribed.style.display = "flex";
    error.style.display = "none";

    /* Makes Pop up Disappear */
    setTimeout(function reload(){location.reload()},500);
  }
}


// Sign in validation
function validateSignIn(){
  let email = document.getElementById("sign-in-email").value;
  let password = document.getElementById("sign-in-password").value;

  if (email==""){
    document.getElementById("sign-in-email-error").style.display = "inline-block";
    document.getElementById("sign-in-password-error").style.display = "none";
  }

  else if (password==""){
    document.getElementById("sign-in-password-error").style.display = "inline-block";
    document.getElementById("sign-in-email-error").style.display = "none";
  }

  else{
    location.reload();
  }

}

// Sign in validation
function validateSignUp(){
  let fname = document.getElementById("sign-up-fname").value;
  let lname = document.getElementById("sign-up-lname").value;
  let email = document.getElementById("sign-up-email").value;
  let password = document.getElementById("sign-up-password").value;

  if(fname==""){
    document.getElementById("sign-up-fname-error").style.display = "inline-block";

    document.getElementById("sign-up-lname-error").style.display = "none";
    document.getElementById("sign-up-email-error").style.display = "none";
    document.getElementById("sign-up-password-error").style.display = "none";
  }

  else if(lname==""){
    document.getElementById("sign-up-lname-error").style.display = "inline-block";

    document.getElementById("sign-up-fname-error").style.display = "none";
    document.getElementById("sign-up-email-error").style.display = "none";
    document.getElementById("sign-up-password-error").style.display = "none";
  }

  else if (email==""){
    document.getElementById("sign-up-email-error").style.display = "inline-block";

    document.getElementById("sign-up-fname-error").style.display = "none";
    document.getElementById("sign-up-lname-error").style.display = "none";
    document.getElementById("sign-up-password-error").style.display = "none";
  }

  else if (password==""){
    document.getElementById("sign-up-password-error").style.display = "inline-block";

    document.getElementById("sign-up-fname-error").style.display = "none";
    document.getElementById("sign-up-lname-error").style.display = "none";
    document.getElementById("sign-up-email-error").style.display = "none";
  }

  else{
    location.reload();
  }

}

