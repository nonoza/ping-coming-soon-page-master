//Defining the variables

const submit = document.getElementById("submit");
const emptyEmailfield = document.querySelector("#emptyfield");
const validateEmail = document.querySelector("#validate");

// adding the click listener to the button
submit.addEventListener('click', (e) =>{
  const email = document.getElementById("email").value;
  e.preventDefault();
  if (email ==""){
    emptyEmailfield.style.display = "block";
   }  else {
    emptyEmailfield.style.display = "none";
   }
   if (ValidateEmail(email)){
    validateEmail.style.display = "none";
   } else {
    validateEmail.style.display = "block";
   }

   console.log(email);
  });
  function ValidateEmail(email){
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(email).toLocaleLowerCase());
  }
