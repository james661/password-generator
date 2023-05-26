function generatePassword() {
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialCharacters = "!@#$%^&*_+-=()[]{}|;:,.<>?";
  var numericCharacters = "1234567890";

  var passwordLength = parseInt(
    document.getElementById("password-length-box").value
  );

  var includeUppercase = document.getElementById("uppercase-checkbox").checked;
  var includeLowercase = document.getElementById("lowercase-checkbox").checked;
  var includeNumbers = document.getElementById("numbers-checkbox").checked;
  var includeSpecialChars = document.getElementById(
    "special-chars-checkbox"
  ).checked;

  var characterSet = "";
  if (includeLowercase) {
    characterSet += lowercaseCharacters;
  }
  if (includeUppercase) {
    characterSet += uppercaseCharacters;
  }
  if (includeNumbers) {
    characterSet += numericCharacters;
  }
  if (includeSpecialChars) {
    characterSet += specialCharacters;
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet.charAt(randomIndex);
  }
  document.getElementById("password").value = password;
}

document.getElementById("generate").addEventListener("click", generatePassword);
