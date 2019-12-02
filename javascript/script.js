//getting variables from the html doc
var pwdBoxEl = document.getElementsByClassName("password-container");
var pwdEl = document.getElementById("password");
var generateButtonEl = document.getElementById("generate-password");
var copyEl = document.getElementById("copy");



//adding variables for storing prompt data





//add an event listener click for the genterator button

generateButtonEl.addEventListener("click", function () {
    //change these variables to something different than what is above in the second variable set!!!!!
    var upperCaseQ = confirm("would you like to use uppercase letters")
    var lowerCaseQ = confirm("would you like to use lower case letters")
    var specialCharQ = confirm("would you like to use special characters?");
    var numbersQ = confirm("would you like to use numbers?");
    charCount = prompt("how many characters would you like to use between 8 and 126");





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
    pwdChars = upperCase + lowerCase + specialChar + num;
    randomPwdArray = pwdChars.split("");
    for (var i = 0; i < charCount; i++) {
        randomPwdArray[i];

    }

}

)
