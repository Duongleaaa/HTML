document.addEventListener("DOMContentLoaded", function () {
  let displayInput = document.querySelector(".display-input");
  let copyButton = document.querySelector(".copy-button");
  let numberBox = document.getElementById("numberbox");
  let uppercaseBox = document.getElementById("uppercasebox");
  let lowercaseBox = document.getElementById("lowercasebox");
  let numbersBox = document.getElementById("numbersbox");
  let symbolsBox = document.getElementById("symbolsbox");
  let generateButton = document.querySelector(".creat-button");

  let copyToClipboard = () => {
    displayInput.select();
    document.execCommand("copy");
  };

  copyButton.addEventListener("click", copyToClipboard);

  const generatePassword = () => {
    const length = parseInt(numberBox.value) || 8;
    const includeUppercase = uppercaseBox.checked;
    const includeLowercase = lowercaseBox.checked;
    const includeNumbers = numbersBox.checked;
    const includeSymbols = symbolsBox.checked;

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_-+=<>?/{}[]";

    let validChars = "";
    let generatedPassword = "";

    if (includeUppercase) {
      validChars += uppercaseChars;
    }

    if (includeLowercase) {
      validChars += lowercaseChars;
    }

    if (includeNumbers) {
      validChars += numberChars;
    }

    if (includeSymbols) {
      validChars += symbolChars;
    }

    for (let i = 0; i < length; i++) {
      generatedPassword += validChars.charAt(
        Math.floor(Math.random() * validChars.length)
      );
    }

    const passwordArray = generatedPassword.split("");
    for (let i = passwordArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [passwordArray[i], passwordArray[j]] = [
        passwordArray[j],
        passwordArray[i],
      ];
    }

    displayInput.value = passwordArray.join("");
  };

  generateButton.addEventListener("click", generatePassword);
});
