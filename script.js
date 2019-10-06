var passwordCharacters = { special: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*', numeric: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', lowercase: 'abcdefghijklmnopqrstuvwxyz', uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' }
var characterTypeOptions = ['special', 'numeric', 'lowercase', 'uppercase']
// console.log(passwordCharacters);
// console.log(characterTypeOptions);
var characterLength = Number(prompt('Welcome to Generate a Password. Please specify the length of your desired password.', 8));
// console.log(characterLength);
if ((characterLength < 8 || characterLength > 128) || (typeof characterLength !== 'number')) {
    alert('Invalid Number. Please enter a number between 8 and 128');
    var characterLength = Number(prompt('Welcome to Generate a Password. Please specify the length of your desired password.', 8));
}
else {
    var characterType = prompt('Define a character type. Choose: Special, Numeric, Lowercase, or Uppercase', 'Special').toLowerCase();
    // console.log(characterType);
    for (var i = 0; i < characterTypeOptions.length; i++) {
        // console.log(characterTypeOptions[i]);
        if (characterTypeOptions.indexOf(characterType) === -1) {
            var characterType = prompt('Invalid Option. Please specify Special or Numeric or Lowercase or Uppercase').toLowerCase();
        }

    }
}
console.log(passwordCharacters[characterType])
function createPassword() {
    var password = '';
    for (var j = 0; j < characterLength; j++) {
        var password = password + passwordCharacters[characterType].charAt(Math.floor(Math.random() * Math.floor(passwordCharacters[characterType].length - 1)));
    }
    document.getElementById('password').value = password;
}
// function copyPassword() {
//     document.getElementById('password').select();
//     document.execCommand('Copy');
//     alert('Password Copied to Clipboard')
// }


// Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code.

// The user will be prompted to choose from the following password criteria:

// * Length (must be between 8 and 128 characters)

// * Character type:g

//   * Special characters ([see examples](https://www.owasp.org/index.php/Password_special_characters))

//   * Numeric characters

//   * Lowercase characters

//   * Uppercase characters

// The application should validate user input and ensure that at least one character type is selected.

// Once all prompts are answered, the user will be presented with a password matching the answered prompts. Displaying the generated password in an alert is acceptable, but attempt to write the password to the page instead.

// As a bonus, the user should also have the option to click a button to copy the password to their clipboard.

// Your application should have a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

// Your application should be deployed to GitHub Pages.

// Your application's GitHub repository should contain a README.md file explaining the purpose and functionality of the application. The README.md file should include a screenshot of the completed application as well as a link to the deployed GitHub Pages URL.
