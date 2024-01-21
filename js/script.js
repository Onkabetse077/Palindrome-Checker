//Variable
const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');
const RegExp = /[^a-zA-Z0-9]/gi;

//Arrow => Functions
const textInputCleanFunction = (input) => {
  const inputClean = input.toLowerCase().replace(RegExp, "");
  isPalindrome(inputClean);
};
const isPalindrome = (input) => {
  const inputNormal = input;
  const inputReverse = input.split("").reverse().join("");

  if (inputNormal === inputReverse) {
    result.innerHTML = `<p class="text-result"><strong>${textInput.value}</strong> is a palindrome.`;
  } else {
    result.innerHTML = `<p class="text-result"><strong>${textInput.value}</strong> is not a palindrome.`;
  }
  textInput.value = "";
};

//Event Listener
checkButton.addEventListener('click', () => {
  textInput.value ? textInputCleanFunction(textInput.value) : alert('Please input a value.');
});
