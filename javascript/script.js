//getting variables from the html doc
var pwdBoxEl = document.getElementsByClassName("password-container");
var pwdEl = document.querySelector("#password");
var generateButtonEl = document.querySelector("#generate-password");
var copyEl = document.querySelector("#copy");



//adding variables for storing prompt data





//add an event listener click for the genterator button

generateButtonEl.addEventListener("click", function () {
    //change these variables to something different than what is above in the second variable set!!!!!
    var upperCaseQ = confirm("would you like to use uppercase letters")
    var lowerCaseQ = confirm("would you like to use lower case letters")
    var specialCharQ = confirm("would you like to use special characters?");
    var numbersQ = confirm("would you like to use numbers?");
    charCount = prompt("how many characters would you like to use between 8 and 126");

    if (charCount > 8 && charCount < 126) {

        //cerate an if else satement for each questions asked

        if (upperCaseQ === true) {
            var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        } else {
            upperCase = "";
        };
        if (lowerCaseQ === true) {
            var lowerCase = "abcdefghijklmnopqrstuvwxyz";
        } else {
            lowerCase = "";
        };
        if (specialCharQ === true) {
            var specialChar = "#@!%&()/";
        } else {
            specialChar = "";
        };
        if (numbersQ === true) {
            var num = "1234567890";
        } else {
            num = "";
        }
    } else {
        alert("character count invalid try again")
    }
    // combine the true statements into a string
    pwdChars = upperCase + lowerCase + specialChar + num;


    var pwdArray = "";

    for (var i = 0; i <= charCount; i++) {

        pwdArray = pwdArray + pwdChars.charAt(Math.floor(Math.random() * Math.floor(pwdChars.length - 1)));


        // document.getElementById("password").value = pwdArray;

        pwdEl.textContent = pwdArray;
    }
}
);

console.log(pwdEl.innerHTML);


