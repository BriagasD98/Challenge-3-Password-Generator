// Assignment code here
const lowerCaseChar = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];
const upperCaseChar = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
];
const numberChar = [
    0,1,2,3,4,5,6,7,8,9
];
const specialChar = [
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "+",
    "=",
    "/",
    "\\",
    ":",
    ";",
    "<",
    ">",
    "?",
    "[",
    "]",
    "{",
    "}",
    ".",
    ","
];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    var confirmLength = prompt(
        'How many characters would you like your password to contain?'
        );
    while (confirmLength <= 8 || confirmLength >= 128) {
        alert(
            "Password must contain between 8 to 128 characters! please try again."
        );
        return generatePassword();
    }
    
    // password criteria begins!
    var confirmLowerCaseCharacters = confirm(
        "select OK to include lower case characters."
    );
    var confirmUpperCaseCharacters = confirm(
        "select OK to include upper case characters."
    );
    var confirmNumericCharacters = confirm(
        "select OK to include numeric characters."
    );
    var confirmSymbolsCharacters = confirm(
        "select OK to include symbol characters."
    );

    var userSelectionOptions = {
        length: confirmLength,
        lowerCase: confirmLowerCaseCharacters,
        upperCase: confirmUpperCaseCharacters,
        numbers: confirmNumericCharacters,
        symbols: confirmSymbolsCharacters
    };
    console.log(userSelectionOptions);
    
    var combinedArray = [];

    if (confirmLowerCaseCharacters === true) {
        for(x of lowerCaseChar) {
            combinedArray.push(x);
        }
    }
    if (confirmUpperCaseCharacters === true) {
        for(x of upperCaseChar) {
            combinedArray.push(x);
        }
    }
    if (confirmNumericCharacters === true) {
        for(x of numberChar) {
            combinedArray.push(x);
        }
    }
    if (confirmSymbolsCharacters === true) {
        for(x of specialChar) {
            combinedArray.push(x);
        }
    }
    
    console.log(combinedArray);
    return combinedArray;
}

function generateRandompassword(array, length) {
    var selections = "";
    for (var i =0; i < length; i++) {
        var result = array[Math.floor(math.random() * array.length)];
        selections += result;
    }
    return selections;
}

// Write password to the #password input
function writePassword() {
    
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
