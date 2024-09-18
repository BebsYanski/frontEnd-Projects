const input = document.getElementById('word')

function check() {
  let word = input.value

  let reversedWord = reverseString(word)

  if (reversedWord === word) {
    alert(` Checked, and ${word} is a ${'palindrome'.toUpperCase()}`)
  } else {
    alert(` Checked, and ${word} is not a ${'palindrome'.toUpperCase()}`)
  }
}

function reverseString(string) {
  let reversedString = string.split('').reverse().join('')

  return reversedString
}
