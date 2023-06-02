function validate(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
     
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 140){
      text = "Please Enter valid";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }
  var loginSpan = document.querySelector(".login")
  var firstName = document.querySelector("#firstName")
  var lastName = document.querySelector("#lastName")
  var petOwner = document.querySelector(".petOwner")
  var sua = document.querySelector(".sua")
  var personali = document.querySelector(".personali")
  var personNumber = document.querySelector(".personNumber")
  var confirmPassword = document.querySelector("#confirmPassword")
  loginSpan.addEventListener("click" , function(){
    firstName.style.display = "none"
    lastName.style.display = "none"
    confirmPassword.style.display = "none"
    petOwner.style.display = "none"
    sua.style.display = "none"
    personali.style.display = "none"
   })
  var singUpSpan = document.querySelector(".singUp")
  singUpSpan.addEventListener("click" , function(){
    firstName.style.display = "block"
    lastName.style.display = "block"
    confirmPassword.style.display = "block"
    petOwner.style.display = "inline-block"
    sua.style.display = "inline-block"
    personali.style.display = "inline-block"
  }) 
  personali.addEventListener("click", function(){
    personNumber.style.display = "block"
  })
  petOwner.addEventListener("click", function(){
    personNumber.style.display = "none"
  })
  var wrapper = document.querySelector(".wrapper")
  var sacdeli = document.querySelector(".sacdeli")
  sacdeli.addEventListener("click" , function(){
    if (wrapper.style.display === "none") {
      wrapper.style.display = "block";
    } else {
      wrapper.style.display = "none";
    }
  })
 

