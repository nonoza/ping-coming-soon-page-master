
const email = document.forms["signup"]["email"].value;
const form = document.getElementById("form");
const emailborder = document.querySelector("#email");
let errormgs = document.querySelector(".errormsg");
form.addEventListener('submit', (e) =>{
 
    e.preventDefault();
    if (!email) {
      errormgs.style.display = "block";
      emailborder.style.border = "1px solid hsl(354, 100%, 66%)";
    } else {
      errormgs.style.display = "none";
    }
    if (email) {
     if (ValidateEmail(email)){
      errormgs.style.display = "none";
     } else {
      errormgs.style.display = "block";
      emailborder.style.border = "1px solid hsl(354, 100%, 66%)";
     }
    }
  });
 
  function ValidateEmail(emails) {

    const pattens = "/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/";
    return pattens.test(String(emails).toLocaleLowerCase());
 
}
