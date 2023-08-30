//regiters section values
var FullName = [];
var Email = [];
var Password = [];
var confirmPassword = [];

var fullNameInput = document.getElementById("fullName"); 
var emailtInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var confirmPasswordInput = document.getElementById("confirm");

var messageBox = document.getElementById("display"); // display div to display the information of the users

function insert() {
  checkIfUserExist();
  if (
    passwordInput.value != confirmPasswordInput.value || // checking the equally of password
    fullNameInput.value == "" ||                         // checking if the full name textfield has been left blank
    emailtInput.value.includes("@mycput.ac.za") == "" ||  // checking that the email validation
    passwordInput.value == "" ||    // checking if the password Input textfield has been left blank
    confirmPasswordInput == ""     // checking if the confirm  PasswordInput  textfield has been left blank
  
  ) {
    alert(
      "Error message please enter the correct input value and try again. Like email and password must be correct"
    );
    return false;
  }
//push into the array whatever value the users enter in the input
  FullName.push(fullNameInput.value);
  Email.push(emailtInput.value);
  Password.push(passwordInput.value);
  confirmPassword.push(confirmPasswordInput.value);
  clearAndShow(); // after this call the clear and show function to clear the input and still display textboxes
  
}
function checkIfUserExist(){
  var registerEmailFormId = document.getElementById("email").value;
  var registerFullNameFormId = document.getElementById("fullName").value;
  for (let index = 0; index < Email.length; index++) {
    if (Email[index]== registerEmailFormId && FullName[index] == registerFullNameFormId){
      alert("You already have an account with us please Login to access the bot");
      clearAndShow();
      return false;
    }
   
  }
  
}

function clearAndShow() {
  // Clear our fields
  fullNameInput.value = "";
  emailtInput.value = "";
  passwordInput.value = "";
  confirmPasswordInput.value = "";
  // Show our output
  messageBox.innerHTML = "";

  messageBox.innerHTML +=
    "Full Name: " + FullName.join(", ") + "<br/>" + "<br/>";
 
  messageBox.innerHTML += "Email: " + Email.join(", ") + "<br/>" + "<br/>";
  messageBox.innerHTML +=
    "Password: " + Password.join(", ") + "<br/>" + "<br/>";
  messageBox.innerHTML +=
    "Confirm Password: " + confirmPassword.join(", ") + "<br/>" + "<br/>";
}
// login page session of the js code
var userEmailFound = false;
var userPasswordFound = false;
function validate() {
  
  validateUserEmail();
  validateUserPassword();
  alertTheUser();
  
}
function validateUserEmail() {
  var usersEmailFormId = document.getElementById("loginemail").value;

  for (let index = 0; index < Email.length; index++) {
    if (Email[index] == usersEmailFormId) {
      userEmailFound = true;
      break; //when found stop loop
    } else {
      userEmailFound = false;
    }
  } //end loop
}

function validateUserPassword() {
  var usersPasswordFormId = document.getElementById("loginpassword").value;

  for (let index = 0; index < Password.length; index++) {
    if (Password[index] == usersPasswordFormId) {
      userPasswordFound = true;
      break;
    } else {
      userPasswordFound = false;
    }
  } //end loop
}

function alertTheUser() {
  if (userEmailFound && userPasswordFound) {
    alert(
      "well done, you are logged in! you will be redirected to the home page in 2 second"
    );
    openPage(); // thsis will only redirect on the home page if succssefull log in !!!
  } else {
    alert("Sorry,your credential are incorect! please try again");
  }
} 
//end of function
function openPage() {
  //redirect to another new page
  setTimeout(function () {
    window.location.replace("https://app.wotnot.io/bot-preview/text-mode/7rWPsQeRaJkC131701210191Jcbg8pHn");
  }, 2000); // this is the timer in mliseconds
}
